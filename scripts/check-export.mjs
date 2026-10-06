import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('out');
const failures = [];
const files = fs.readdirSync(root, { recursive: true }).filter(f => f.endsWith('.html'));
const resolveFile = pathname => {
  const file = path.join(root, decodeURIComponent(pathname));
  return fs.existsSync(file) && fs.statSync(file).isFile() ? file : path.join(file, 'index.html');
};
let links = 0;
for (const file of files) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const page = '/' + file.replaceAll('\\', '/').replace(/index\.html$/, '');
  if (file !== '404.html' && !file.startsWith('404')) {
    if ((html.match(/<h1[ >]/g) || []).length !== 1) failures.push(`${page}: expected one h1`);
    if (!html.includes('rel="canonical"')) failures.push(`${page}: missing canonical`);
    if (!html.includes('name="description"')) failures.push(`${page}: missing description`);
  }
  for (const match of html.matchAll(/(?:href|src|poster)="([^"<>]+)"/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    if (href.startsWith('//')) continue;
    const url = new URL(href, 'https://local.test' + page);
    const target = resolveFile(url.pathname);
    links++;
    if (!fs.existsSync(target)) { failures.push(`${page}: missing ${href}`); continue; }
    if (url.hash && target.endsWith('.html')) {
      const targetHtml = fs.readFileSync(target, 'utf8');
      if (!targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) failures.push(`${page}: missing anchor ${href}`);
    }
  }
}
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));
for (const icon of manifest.icons) if (!fs.existsSync(resolveFile(icon.src))) failures.push(`Missing icon ${icon.src}`);
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const [, url] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) if (!fs.existsSync(resolveFile(new URL(url).pathname))) failures.push(`Missing sitemap page ${url}`);
if (failures.length) { console.error([...new Set(failures)].join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${files.length} HTML files, ${links} local links/assets, manifest icons and sitemap destinations.`);
