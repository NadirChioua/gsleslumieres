// Build the English (/en) and Arabic (/ar) versions of the static site.
//
// Runs after the French `next build` (see the "build" script in package.json):
//   1. For each locale, copy src/ into .locale-build/<locale>/ while replacing every French
//      segment found in src/i18n/catalog.json by its translation from translations.tsv
//      (same AST traversal as scripts/extract-translations.mjs), setting LOCALE in
//      src/lib/locale.ts, and prefixing internal page links with /<locale>.
//   2. Run `next build` in that copy (node_modules and public/ are shared through junctions).
//   3. Merge the result into out/<locale>/ and its JS chunks into out/_next/.
//
// Segments without a translation stay in French, so the build never fails on a missing row.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';

const ROOT = process.cwd();
const LOCALES = process.argv.slice(2).length ? process.argv.slice(2) : ['en', 'ar'];
const WORK = path.join(ROOT, '.locale-build');
const OUT = path.join(ROOT, 'out');
const CONFIG_FILES = ['package.json', 'next.config.js', 'tsconfig.json', 'tailwind.config.ts', 'postcss.config.js', 'next-env.d.ts'];
// Keys whose string values are code, never visible text. (Narrower than the extractor's list:
// a value only changes when it matches a catalog segment exactly, so labels under keys such as
// "value" or "role" are safe to translate.)
const EXCLUDED_KEYS = /^(className|class|id|key|src|href|path|slug|icon|type|locale|inLanguage|autoComplete|pattern|sizes|image|img|poster|heroImage|preview|previewPoster|mode|as|variant)$/;
// Files whose links are already language-aware and must not get a /<locale> prefix.
const NO_ROUTE_PREFIX = new Set(['src/components/layout/LanguageSwitcher.tsx']);

if (!fs.existsSync(path.join(OUT, 'index.html'))) {
  throw new Error('out/index.html is missing: run `next build` for French first.');
}

// ── Translation tables ──────────────────────────────────────────────────────────
const catalog = JSON.parse(fs.readFileSync('src/i18n/catalog.json', 'utf8'));
const frToId = new Map(catalog.map((c) => [c.fr, c.id]));
const rows = new Map(
  fs.readFileSync('src/i18n/translations.tsv', 'utf8').trim().split(/\r?\n/).map((line) => {
    const [id, en, ar] = line.split('\t');
    return [Number(id), { en, ar }];
  })
);
const normalize = (s) => s.replace(/\s+/g, ' ').trim();
const translate = (text, loc) => {
  const id = frToId.get(normalize(text));
  const tr = id && rows.get(id)?.[loc];
  return tr && tr.trim() ? tr : null;
};

// ── Page routes (from src/app/**/page.tsx) ─────────────────────────────────────
const routes = new Set(['/']);
for (const f of fs.readdirSync('src/app', { recursive: true })) {
  const rel = f.replaceAll('\\', '/');
  if (rel.endsWith('/page.tsx')) routes.add('/' + rel.slice(0, -'/page.tsx'.length));
}
const isRoute = (s) => {
  if (!s.startsWith('/') || s.startsWith('//')) return false;
  const base = s.split('#')[0].split('?')[0].replace(/(.)\/$/, '$1');
  return routes.has(base);
};

// ── Source transform ───────────────────────────────────────────────────────────
const escapeTemplate = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

function transform(code, file, loc) {
  const sf = ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true, file.endsWith('tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const edits = [];
  const prefixRoutes = !NO_ROUTE_PREFIX.has(file);
  const keyOf = (p) => {
    if (ts.isJsxExpression(p)) p = p.parent;
    return ts.isPropertyAssignment(p) ? p.name.getText(sf).replace(/['"]/g, '') : ts.isJsxAttribute(p) ? p.name.getText(sf) : '';
  };

  const visit = (node) => {
    if (ts.isJsxText(node)) {
      const tr = translate(node.text, loc);
      if (tr) {
        const lead = /^\s*/.exec(node.text)[0];
        const trail = /\s*$/.exec(node.text)[0];
        const keep = (ws) => (ws && !ws.includes('\n') ? ' ' : '');
        edits.push([node.pos, node.end, `{${JSON.stringify(keep(lead) + tr + keep(trail))}}`]);
      }
      return;
    }
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const p = node.parent;
      if (node === p.name || ts.isImportDeclaration(p) || ts.isExportDeclaration(p) || ts.isLiteralTypeNode(p)) return;
      const key = keyOf(p);
      const start = node.getStart(sf);
      const asJsx = (s) => (ts.isJsxAttribute(p) ? `{${JSON.stringify(s)}}` : JSON.stringify(s));
      const text = node.text;
      if (prefixRoutes && isRoute(text) && (text !== '/' || key === 'href' || key === 'path')) {
        edits.push([start, node.end, asJsx(text === '/' ? `/${loc}/` : `/${loc}${text}`)]);
        return;
      }
      if (EXCLUDED_KEYS.test(key)) return;
      const tr = translate(text, loc);
      if (tr) edits.push([start, node.end, asJsx(tr)]);
      return;
    }
    if (ts.isTemplateExpression(node)) {
      const p = node.parent;
      if (prefixRoutes && keyOf(p) === 'href' && node.head.text === '/') {
        edits.push([node.head.getStart(sf), node.head.end, `\`/${loc}/\${`]);
      }
      const text = node.head.text + node.templateSpans.map((s, i) => `{{${i}}}` + s.literal.text).join('');
      const tr = translate(text, loc);
      if (tr) {
        const parts = tr.split(/\{\{(\d+)\}\}/);
        let out = '`' + escapeTemplate(parts[0]);
        for (let i = 1; i < parts.length; i += 2) {
          out += '${' + node.templateSpans[Number(parts[i])].expression.getText(sf) + '}' + escapeTemplate(parts[i + 1]);
        }
        edits.push([node.getStart(sf), node.end, out + '`']);
        return;
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  edits.sort((a, b) => b[0] - a[0]);
  let result = code;
  let lastStart = Infinity;
  for (const [start, end, text] of edits) {
    if (end > lastStart) continue; // overlapping edit (outer node already rewritten)
    result = result.slice(0, start) + text + result.slice(end);
    lastStart = start;
  }
  return { code: result, edits: edits.length };
}

// ── Build helpers ───────────────────────────────────────────────────────────────
function copyTree(src, dst, filter = () => true) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (!filter(entry.name, s)) continue;
    if (entry.isDirectory()) copyTree(s, d, filter);
    else if (!fs.existsSync(d)) fs.copyFileSync(s, d);
  }
}

// Remove a work dir without ever following the node_modules/public junctions inside it.
function removeWorkDir(dir) {
  for (const link of ['node_modules', 'public']) {
    const p = path.join(dir, link);
    let st;
    try { st = fs.lstatSync(p); } catch { continue; }
    if (!st.isSymbolicLink()) throw new Error(`Refusing to delete ${p}: expected a junction, found a real directory.`);
    try { fs.unlinkSync(p); } catch { fs.rmdirSync(p); }
  }
  fs.rmSync(dir, { recursive: true, force: true });
}

const publicEntries = new Set(fs.readdirSync('public'));
const SKIP_FROM_LOCALE_OUT = new Set(['_next', '404', '404.html', 'robots.txt', 'sitemap.xml', 'manifest.webmanifest', 'llms.txt']);

for (const loc of LOCALES) {
  console.log(`\n▶ Building /${loc}`);
  const dir = path.join(WORK, loc);
  if (fs.existsSync(dir)) removeWorkDir(dir);
  fs.mkdirSync(dir, { recursive: true });
  for (const f of CONFIG_FILES) if (fs.existsSync(f)) fs.copyFileSync(f, path.join(dir, f));
  fs.symlinkSync(path.join(ROOT, 'node_modules'), path.join(dir, 'node_modules'), 'junction');
  fs.symlinkSync(path.join(ROOT, 'public'), path.join(dir, 'public'), 'junction');

  let segments = 0;
  for (const f of fs.readdirSync('src', { recursive: true })) {
    const srcFile = path.join('src', f);
    if (fs.statSync(srcFile).isDirectory()) continue;
    const dstFile = path.join(dir, srcFile);
    fs.mkdirSync(path.dirname(dstFile), { recursive: true });
    const rel = srcFile.replaceAll('\\', '/');
    if (rel === 'src/lib/locale.ts') {
      fs.writeFileSync(dstFile, fs.readFileSync(srcFile, 'utf8').replace("= 'fr';", `= '${loc}';`));
    } else if (/\.tsx?$/.test(rel)) {
      const { code, edits } = transform(fs.readFileSync(srcFile, 'utf8'), rel, loc);
      segments += edits;
      fs.writeFileSync(dstFile, code);
    } else {
      fs.copyFileSync(srcFile, dstFile);
    }
  }
  console.log(`  ${segments} segments rewritten`);

  execFileSync(process.execPath, [path.join(ROOT, 'node_modules', 'next', 'dist', 'bin', 'next'), 'build'], {
    cwd: dir,
    stdio: 'inherit',
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
  });

  const built = path.join(dir, 'out');
  copyTree(path.join(built, '_next'), path.join(OUT, '_next'));
  const target = path.join(OUT, loc);
  fs.rmSync(target, { recursive: true, force: true });
  copyTree(built, target, (name, full) => {
    if (path.dirname(full) !== built) return true;
    return !SKIP_FROM_LOCALE_OUT.has(name) && !publicEntries.has(name);
  });
  console.log(`  → out/${loc}/`);
}

for (const loc of LOCALES) {
  const dir = path.join(WORK, loc);
  if (fs.existsSync(dir)) removeWorkDir(dir);
}
fs.rmSync(WORK, { recursive: true, force: true });
console.log('\nLocales built:', LOCALES.join(', '));
