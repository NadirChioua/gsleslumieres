import type { Metadata } from 'next';
import { SITE_URL, SCHOOL } from './constants';
import { SCHOOL_IMAGES } from './school-images';
import { LOCALE, localizedPath, languageAlternates } from './locale';

interface PageMetaInput {
  title: string;
  description: string;
  path: string; // e.g. "/qui-sommes-nous" (no trailing slash needed)
  ogImage?: string;
  keywords?: string[];
}

/**
 * Generates a complete, SEO-compliant Metadata object for a page:
 * unique title, description, canonical, Open Graph and Twitter cards.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogImage = SCHOOL_IMAGES.general.heroCampus,
  keywords = [],
}: PageMetaInput): Metadata {
  const canonical = `${SITE_URL}${localizedPath(path).replace(/\/$/, '')}/`;
  const imageUrl = `${SITE_URL}${ogImage}`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      'école privée Tanger',
      'école trilingue Tanger',
      'Groupe Scolaire Les Lumières',
      ...keywords,
    ],
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      siteName: SCHOOL.name,
      locale: LOCALE === 'ar' ? 'ar_MA' : LOCALE === 'en' ? 'en_GB' : 'fr_MA',
      title,
      description,
      url: canonical,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
