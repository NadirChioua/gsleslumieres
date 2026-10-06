// ═══════════════════════════════════════════════════════════════
// Schema.org JSON-LD generators
// ═══════════════════════════════════════════════════════════════
import { SITE_URL, SCHOOL, GOOGLE_MAPS_DIRECTIONS } from './constants';
import { SCHOOL_IMAGES } from './school-images';
import { LOCALE, localizedPath } from './locale';

// Stable entity ids so every page's JSON-LD points at the same organization and website.
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const IN_LANGUAGE = LOCALE === 'ar' ? 'ar-MA' : LOCALE === 'en' ? 'en' : 'fr-MA';
// Build date: lets search engines and AI crawlers see when the content was last refreshed.
const BUILD_DATE = new Date().toISOString().slice(0, 10);

const pageUrl = (path: string) => `${SITE_URL}${localizedPath(path).replace(/\/$/, '')}/`;

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'School', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SCHOOL.name,
    alternateName: [SCHOOL.nameAr, SCHOOL.shortName, 'GS Les Lumières'],
    description:
      'École privée trilingue à Tanger, Maroc. De la maternelle au lycée. Fondée en 2004. Méthode de Singapour, Cambridge English, activités parascolaires.',
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/images/brand/logo-les-lumieres-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}${SCHOOL_IMAGES.general.heroCampus}`,
    telephone: SCHOOL.phone1Intl,
    email: SCHOOL.email,
    foundingDate: '2004',
    slogan: SCHOOL.sloganFr,
    priceRange: '$$',
    knowsLanguage: ['fr', 'ar', 'en'],
    areaServed: { '@type': 'City', name: SCHOOL.address.locality },
    hasMap: GOOGLE_MAPS_DIRECTIONS,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SCHOOL.address.street,
      addressLocality: SCHOOL.address.locality,
      postalCode: SCHOOL.address.postalCode,
      addressRegion: SCHOOL.address.region,
      addressCountry: SCHOOL.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SCHOOL.geo.latitude,
      longitude: SCHOOL.geo.longitude,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '17:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'admissions',
        telephone: SCHOOL.phone2Intl,
        email: SCHOOL.email,
        areaServed: 'MA',
        availableLanguage: ['French', 'Arabic', 'English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: SCHOOL.phone1Intl,
        areaServed: 'MA',
        availableLanguage: ['French', 'Arabic'],
      },
    ],
    sameAs: [
      SCHOOL.social.facebook,
      SCHOOL.social.instagram,
      SCHOOL.social.tiktok,
      SCHOOL.social.youtube,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cycles scolaires',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Maternelle (PS, MS, GS)', educationalLevel: 'Preschool', url: pageUrl('/maternelle-tanger') } },
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Primaire (CP à CE6)', educationalLevel: 'Primary', url: pageUrl('/primaire-prive-tanger') } },
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Collège International (1AC-3AC)', educationalLevel: 'Middle School', url: pageUrl('/college-prive-tanger') } },
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Lycée (Tronc Commun au Bac)', educationalLevel: 'High School', url: pageUrl('/lycee-prive-tanger') } },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SCHOOL.name,
    alternateName: SCHOOL.nameAr,
    url: `${SITE_URL}/`,
    inLanguage: ['fr-MA', 'ar-MA', 'en'],
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: IN_LANGUAGE,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function courseSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: pageUrl(path),
    inLanguage: IN_LANGUAGE,
    provider: { '@id': ORG_ID, '@type': 'EducationalOrganization', name: SCHOOL.name, sameAs: `${SITE_URL}/` },
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: pageUrl(path),
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: IN_LANGUAGE,
    dateModified: BUILD_DATE,
  };
}
