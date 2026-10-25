// Audit the exported HTML or the public site. Read-only HTTP requests; no submission APIs.
// npm run seo:check -- --report deliverables/seo/local-after.json
// npm run seo:check -- --live --report deliverables/seo/live-before.json
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const live = args.includes('--live');
const reportFile = args[args.indexOf('--report') + 1];
const origin = fs.readFileSync('src/lib/constants.ts', 'utf8').match(/SITE_URL = '([^']+)'/)[1];
const decode = s => s.replace(/&#x([\da-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const text = s => decode(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, k, v]) => [k.toLowerCase(), decode(v)]));
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))].map(m => attrs(m[0]));
const issues = [];
const warnings = [];
const pages = [];
const fail = (url, message) => issues.push({ url, message });
async function read(url) {
  if (!live) {
    const pathname = new URL(url).pathname;
    const relative = pathname.endsWith('/') ? `${pathname}index.html` : pathname;
    return { body: fs.readFileSync(path.join('out', relative), 'utf8'), url, status: 200 };
  }
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  return { body: await response.text(), url: response.url, status: response.status };
}

const { body: sitemap, status: sitemapStatus } = await read(`${origin}/sitemap.xml`);
if (sitemapStatus !== 200) fail('sitemap.xml', `HTTP ${sitemapStatus}`);
const entries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(([, xml]) => ({
  url: decode(xml.match(/<loc>(.*?)<\/loc>/)[1]),
  alternates: tags(xml, 'xhtml:link'),
}));
if (!entries.length) fail('sitemap.xml', 'No page URLs');
if (new Set(entries.map(e => e.url)).size !== entries.length) fail('sitemap.xml', 'Duplicate URLs');
const indexed = new Set(entries.map(e => e.url));
const robots = await read(`${origin}/robots.txt`);
if (robots.status !== 200 || !robots.body.includes(`Sitemap: ${origin}/sitemap.xml`)) fail('robots.txt', 'Missing preferred sitemap URL');
if (/Disallow:\s*\/\s*$/mi.test(robots.body)) fail('robots.txt', 'Blocks all crawling');

async function inspect(entry) {
  const { url } = entry;
  try {
    const response = await read(url);
    if (response.status !== 200) fail(url, `HTTP ${response.status}`);
    if (response.url !== url) fail(url, `Sitemap URL redirects to ${response.url}`);
    if (new URL(url).origin !== origin) fail(url, 'Sitemap uses a different host');
    const html = response.body;
    const head = html.match(/<head>([\s\S]*?)<\/head>/i)?.[1] || '';
    const links = tags(head, 'link');
    const metas = tags(head, 'meta');
    const meta = key => metas.find(m => m.name === key || m.property === key)?.content;
    const title = text(head.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '');
    const description = meta('description') || '';
    const canonical = links.filter(l => l.rel === 'canonical');
    if (!title) fail(url, 'Missing title');
    if (!description) fail(url, 'Missing description');
    if (canonical.length !== 1 || canonical[0].href !== url) fail(url, `Canonical mismatch: ${canonical.map(l => l.href).join(', ')}`);
    if (meta('og:url') !== url) fail(url, 'Open Graph URL differs from canonical');
    if (!meta('og:image') || !meta('twitter:card')) fail(url, 'Missing social preview metadata');
    if (/noindex/i.test(meta('robots') || '')) fail(url, 'Indexable page has noindex');
    const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
    if (h1s.length !== 1 || !text(h1s[0][1])) fail(url, 'Expected one nonempty H1');
    const pathname = new URL(url).pathname;
    const locale = /^\/ar\//.test(pathname) ? 'ar' : /^\/en\//.test(pathname) ? 'en' : 'fr';
    const htmlAttrs = tags(html, 'html')[0];
    if (htmlAttrs?.lang !== locale || htmlAttrs?.dir !== (locale === 'ar' ? 'rtl' : 'ltr')) fail(url, 'HTML language/direction mismatch');
    const suffix = pathname.replace(/^\/(en|ar)(?=\/)/, '');
    const expected = { 'fr-MA': `${origin}${suffix}`, en: `${origin}/en${suffix}`, ar: `${origin}/ar${suffix}`, 'x-default': `${origin}${suffix}` };
    for (const [lang, href] of Object.entries(expected)) {
      if (!links.some(l => l.rel === 'alternate' && l.hreflang === lang && l.href === href)) fail(url, `Missing/wrong HTML hreflang ${lang}`);
      if (!entry.alternates.some(l => l.hreflang === lang && l.href === href)) fail(url, `Missing/wrong sitemap hreflang ${lang}`);
      if (!indexed.has(href)) fail(url, `Alternate absent from sitemap: ${href}`);
    }
    const schemas = [];
    for (const [, json] of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
      try { schemas.push(JSON.parse(json)); } catch { fail(url, 'Invalid JSON-LD'); }
    }
    if (!schemas.some(s => [s['@type']].flat().includes('School'))) fail(url, 'Missing school entity');
    const rendered = text(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ''));
    for (const schema of schemas.filter(s => s['@type'] === 'FAQPage')) {
      for (const question of schema.mainEntity) {
        if (!rendered.includes(text(question.acceptedAnswer.text))) fail(url, `FAQ answer absent from HTML: ${question.name}`);
      }
    }
    for (const img of tags(html, 'img')) if (!Object.hasOwn(img, 'alt')) fail(url, `Image missing alt: ${img.src}`);
    if (title.length > 65) warnings.push({ url, message: `Long title (${title.length} characters; display width varies)` });
    if (description.length > 170) warnings.push({ url, message: `Long description (${description.length} characters)` });
    pages.push({ url, locale, title, description, htmlBytes: Buffer.byteLength(html), schemas: schemas.map(s => s['@type']) });
  } catch (error) { fail(url, error.message); }
}
// Small batches avoid flooding the public host.
for (let i = 0; i < entries.length; i += 3) await Promise.all(entries.slice(i, i + 3).map(inspect));
for (const field of ['title', 'description']) {
  const seen = new Map();
  for (const page of pages) {
    const key = `${page.locale}:${page[field]}`;
    if (seen.has(key)) fail(page.url, `Duplicate ${field} with ${seen.get(key)}`);
    seen.set(key, page.url);
  }
}
const report = { checkedAt: new Date().toISOString(), mode: live ? 'public read-only HTTP' : 'local export', origin, pageCount: pages.length, issueCount: issues.length, warningCount: warnings.length, issues, warnings, pages: pages.sort((a, b) => a.url.localeCompare(b.url)) };
if (args.includes('--report')) {
  if (!reportFile || !path.resolve(reportFile).startsWith(process.cwd() + path.sep)) throw new Error('Report must be inside the project');
  fs.mkdirSync(path.dirname(reportFile), { recursive: true });
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2) + '\n');
}
console.log(`${issues.length ? 'FAIL' : 'PASS'}: ${pages.length} pages, ${issues.length} SEO issues, ${warnings.length} editorial warnings (${report.mode}).`);
for (const issue of issues.slice(0, 20)) console.error(`${issue.url}: ${issue.message}`);
if (issues.length) process.exitCode = 1;
