// Update or add translated segments without renumbering the catalog.
//
//   node scripts/i18n-update.mjs changes.json
//
// changes.json is an array of entries:
//   { "id": 3, "fr": "…", "en": "…", "ar": "…" }   → rewrite segment 3 everywhere it appears
//   {          "fr": "…", "en": "…", "ar": "…", "files": ["src/…"] } → add a new segment
//
// For an existing id, the old French text is replaced by the new one in every source file
// listed for that segment, then catalog.json and translations.tsv are updated in place.
import fs from 'node:fs';

const CATALOG = 'src/i18n/catalog.json';
const TSV = 'src/i18n/translations.tsv';

const changes = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const catalog = JSON.parse(fs.readFileSync(CATALOG, 'utf8'));
const rows = new Map(
  fs.readFileSync(TSV, 'utf8').trim().split(/\r?\n/).map((line) => {
    const [id, en, ar] = line.split('\t');
    return [Number(id), { en, ar }];
  })
);

const clean = (s) => s.replace(/[\t\r\n]+/g, ' ').trim();
let nextId = Math.max(...catalog.map((c) => c.id)) + 1;

for (const change of changes) {
  if (change.id) {
    const entry = catalog.find((c) => c.id === change.id);
    if (!entry) throw new Error(`Unknown segment id ${change.id}`);
    if (change.fr && change.fr !== entry.fr) {
      for (const file of entry.files) {
        const src = fs.readFileSync(file, 'utf8');
        if (!src.includes(entry.fr)) throw new Error(`Segment ${entry.id} not found verbatim in ${file}`);
        fs.writeFileSync(file, src.split(entry.fr).join(change.fr));
      }
      entry.fr = change.fr;
    }
    rows.set(entry.id, { en: clean(change.en), ar: clean(change.ar) });
  } else {
    if (catalog.some((c) => c.fr === change.fr)) {
      const entry = catalog.find((c) => c.fr === change.fr);
      rows.set(entry.id, { en: clean(change.en), ar: clean(change.ar) });
      continue;
    }
    catalog.push({ id: nextId, fr: change.fr, files: change.files ?? [] });
    rows.set(nextId, { en: clean(change.en), ar: clean(change.ar) });
    nextId += 1;
  }
}

fs.writeFileSync(CATALOG, JSON.stringify(catalog, null, 2) + '\n');
fs.writeFileSync(
  TSV,
  [...rows].sort((a, b) => a[0] - b[0]).map(([id, r]) => `${id}\t${r.en}\t${r.ar}`).join('\n') + '\n'
);
console.log(`${changes.length} segment change(s) applied.`);
