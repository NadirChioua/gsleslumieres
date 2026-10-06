import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const roots = ['src/app', 'src/components', 'src/lib'];
const excludedKeys = /^(className|class|id|key|src|href|path|slug|icon|type|role|nameAr|country|lang|locale|inLanguage|date|autoComplete|pattern|sizes|image|img|poster|heroImage|preview|previewPoster|value|mode|as|variant|category|categoryKey|testimonialName)$/;
const catalog = new Map();
function add(text, file) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  if (!normalized || !/[A-Za-zÀ-ÿ]/.test(normalized)) return;
  if (!catalog.has(normalized)) catalog.set(normalized, []);
  if (!catalog.get(normalized).includes(file)) catalog.get(normalized).push(file);
}
for (const root of roots) for (const f of fs.readdirSync(root, {recursive: true})) {
  if (!/\.tsx?$/.test(f)) continue;
  const file = path.join(root, f).replaceAll('\\', '/');
  const sf = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, file.endsWith('tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const visit = node => {
    if (ts.isJsxText(node)) add(node.text, file);
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const text = node.text;
      const p = node.parent;
      const key = ts.isPropertyAssignment(p) ? p.name.getText(sf).replace(/['"]/g, '') : ts.isJsxAttribute(p) ? p.name.text : '';
      if (node === p.name || excludedKeys.test(key)) return;
      if (ts.isImportDeclaration(p) || ts.isExportDeclaration(p) || ts.isLiteralTypeNode(p)) return;
      if (text.startsWith('/') || text.startsWith('@') || /^(https?:|mailto:|tel:|#)/.test(text)) return;
      if (/^(?:[a-zA-Z][\w-]*:|\(|\.|\[)/.test(text) || /(?:\b(?:flex|grid|bg-|text-|rounded|items-|px-|py-|border-|w-|h-|absolute|relative|hidden|inline-|font-|space-|overflow-|object-|min-h-|max-w-|container-page|section-padding|section-y|btn-))/.test(text)) return;
      if (/[À-ÿ]/.test(text) || /[a-zA-Z] [a-zA-Z]/.test(text) || ['Accueil','Contact','Menu','Transport','Cantine','Maternelle','Primaire','Collège','Lycée','Cycles','FAQ','Email','Message','Description','Cambridge','Bourses','Olympiades','Tanger','Maroc'].includes(text)) add(text, file);
    }
    if (ts.isTemplateExpression(node)) {
      const text = node.head.text + node.templateSpans.map((s,i) => `{{${i}}}` + s.literal.text).join('');
      if (/[À-ÿ]/.test(text) && !/className=/.test(node.parent.getText(sf).slice(0,12))) add(text,file);
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}
fs.mkdirSync('src/i18n', {recursive:true});
fs.writeFileSync('src/i18n/catalog.json', JSON.stringify([...catalog].map(([text,files],i)=>({id:i+1,fr:text,files})),null,2)+'\n');
console.log(`${catalog.size} unique segments extracted.`);
