import type { Metadata } from 'next';
import { SITE_URL, SCHOOL } from './constants';
import { SCHOOL_IMAGES } from './school-images';

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
  const canonical = `${SITE_URL}${path === '/' ? '' : path}/`;
  const imageUrl = `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    keywords: [
      'école privée Tanger',
      'école trilingue Tanger',
      'Groupe Scolaire Les Lumières',
      ...keywords,
    ],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      siteName: SCHOOL.name,
      locale: 'fr_MA',
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
