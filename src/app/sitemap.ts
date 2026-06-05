import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAGES.map((p) => ({
    url: `${SITE_URL}${p.path === '/' ? '' : p.path}/`,
    lastModified: now,
    changeFrequency: p.changefreq,
    priority: p.priority,
  }));
}
