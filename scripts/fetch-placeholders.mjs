// Downloads placeholder photos into public/images.
// Replace these with real school photos before launch (see REPLACE-IMAGES.md).
import { mkdir, writeFile, access } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const ROOT = join(process.cwd(), 'public', 'images');

// [path, seed, width, height]
const IMAGES = [
  ['hero/hero-main.jpg', 'school-yard', 1920, 1080],
  ['hero/school-campus.jpg', 'campus-aerial', 1600, 900],
  ['og/default.jpg', 'og-default', 1200, 630],
  ['og/maternelle.jpg', 'og-mater', 1200, 630],
  ['og/primaire.jpg', 'og-prim', 1200, 630],
  ['og/college.jpg', 'og-col', 1200, 630],
  ['og/lycee.jpg', 'og-lyc', 1200, 630],
  ['og/inscription.jpg', 'og-insc', 1200, 630],
  ['cycles/maternelle.jpg', 'kids-play', 800, 600],
  ['cycles/primaire.jpg', 'classroom-prim', 800, 600],
  ['cycles/college.jpg', 'science-lab', 800, 600],
  ['cycles/lycee.jpg', 'students-study', 800, 600],
  ['campus/campus-1.jpg', 'building-1', 1200, 800],
  ['campus/campus-2.jpg', 'building-2', 1200, 800],
  ['campus/campus-3.jpg', 'building-3', 1200, 800],
  ['campus/classroom.jpg', 'classroom-int', 1200, 800],
  ['campus/inscription.jpg', 'office-desk', 1200, 800],
  ['activities/theatre.jpg', 'theatre-1', 900, 700],
  ['activities/chorale.jpg', 'choir-1', 800, 600],
  ['activities/sport.jpg', 'sport-1', 800, 600],
  ['activities/arts.jpg', 'arts-1', 800, 600],
  ['activities/sortie.jpg', 'trip-main', 1200, 700],
  ['team/directeur.jpg', 'director-portrait', 600, 800],
  ['team/team-hero.jpg', 'team-group', 1600, 900],
  ['services/transport.jpg', 'school-bus', 1000, 750],
  ['services/cantine.jpg', 'canteen-1', 1000, 750],
  ['actualites/inscriptions.jpg', 'news-insc', 1000, 600],
  ['actualites/distinction.jpg', 'news-award', 1000, 600],
  ['actualites/bourse.jpg', 'news-bourse', 1000, 600],
  ['actualites/olympiade.jpg', 'news-math', 1000, 600],
  ['actualites/sortie.jpg', 'news-trip', 1000, 600],
];

for (let i = 1; i <= 5; i++) IMAGES.push([`team/team-${i}.jpg`, `team-member-${i}`, 600, 450]);
for (const c of ['maternelle', 'primaire', 'college', 'lycee']) {
  for (let i = 1; i <= 6; i++) IMAGES.push([`cycles/${c}/${c}-${i}.jpg`, `${c}-photo-${i}`, 600, 450]);
}
for (let i = 1; i <= 4; i++) IMAGES.push([`activities/event-${i}.jpg`, `event-${i}`, 600, 600]);
for (let i = 1; i <= 4; i++) IMAGES.push([`activities/trip-${i}.jpg`, `trip-photo-${i}`, 600, 600]);

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function download([rel, seed, w, h]) {
  const dest = join(ROOT, rel);
  if (await exists(dest)) return 'skip';
  await mkdir(dirname(dest), { recursive: true });
  const url = `https://picsum.photos/seed/${seed}/${w}/${h}`;
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return 'ok';
}

let ok = 0, skip = 0, fail = 0;
await Promise.all(
  IMAGES.map(async (img) => {
    try {
      const r = await download(img);
      if (r === 'ok') ok++; else skip++;
    } catch (e) {
      fail++;
      console.error('FAIL', img[0], e.message);
    }
  })
);
console.log(`Done. downloaded=${ok} skipped=${skip} failed=${fail} total=${IMAGES.length}`);
