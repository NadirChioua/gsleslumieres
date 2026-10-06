import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { languageAlternates } from '@/lib/locale';

export const dynamic = 'force-static';

type Entry = { path: string; priority: number; changefreq: MetadataRoute.Sitemap[number]['changeFrequency'] };

const PAGES: Entry[] = [
  { path: '/', priority: 1.0, changefreq: 'daily' },
  { path: '/qui-sommes-nous', priority: 0.8, changefreq: 'monthly' },
  { path: '/mot-du-directeur', priority: 0.7, changefreq: 'monthly' },
  { path: '/pourquoi-les-lumieres', priority: 0.8, changefreq: 'monthly' },
  { path: '/notre-equipe', priority: 0.6, changefreq: 'monthly' },
  { path: '/nos-resultats', priority: 0.7, changefreq: 'monthly' },
  { path: '/maternelle-tanger', priority: 0.9, changefreq: 'monthly' },
  { path: '/primaire-prive-tanger', priority: 0.9, changefreq: 'monthly' },
  { path: '/college-prive-tanger', priority: 0.9, changefreq: 'monthly' },
  { path: '/lycee-prive-tanger', priority: 0.9, changefreq: 'monthly' },
  { path: '/activites-parascolaires', priority: 0.7, changefreq: 'weekly' },
  { path: '/galerie', priority: 0.6, changefreq: 'weekly' },
  { path: '/actualites', priority: 0.7, changefreq: 'weekly' },
  { path: '/transport-scolaire', priority: 0.7, changefreq: 'monthly' },
  { path: '/cantine', priority: 0.7, changefreq: 'monthly' },
  { path: '/inscription-ecole-tanger', priority: 0.9, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'weekly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
  { path: '/mentions-legales', priority: 0.3, changefreq: 'yearly' },
];

// Every page exists in French (root), English (/en) and Arabic (/ar). Each URL lists its
// language alternates so search engines treat them as translations, not duplicates.
const LOCALE_PREFIXES = ['', '/en', '/ar'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.flatMap((p) => {
    const suffix = p.path === '/' ? '/' : `${p.path}/`;
    const alternates = Object.fromEntries(
      Object.entries(languageAlternates(p.path)).map(([lang, href]) => [lang, `${SITE_URL}${href}`])
    );
    return LOCALE_PREFIXES.map((prefix) => ({
      url: `${SITE_URL}${prefix}${suffix}`,
      lastModified: now,
      changeFrequency: p.changefreq,
      priority: prefix ? Math.round(p.priority * 0.9 * 10) / 10 : p.priority,
      alternates: { languages: alternates },
    }));
  });
}
