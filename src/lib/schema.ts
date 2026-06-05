// ═══════════════════════════════════════════════════════════════
// Schema.org JSON-LD generators
// ═══════════════════════════════════════════════════════════════
import { SITE_URL, SCHOOL } from './constants';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'School'],
    name: SCHOOL.name,
    alternateName: SCHOOL.nameAr,
    description:
      'École privée trilingue à Tanger, Maroc. De la maternelle au baccalauréat. Fondée en 2004. Méthode de Singapour, Cambridge English, activités parascolaires.',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.svg`,
    image: `${SITE_URL}/images/hero/school-campus.jpg`,
    telephone: [SCHOOL.phone1Intl, SCHOOL.phone2Intl],
    email: SCHOOL.email,
    foundingDate: '2004',
    slogan: SCHOOL.sloganFr,
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
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Maternelle (PS, MS, GS)', educationalLevel: 'Preschool' } },
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Primaire (CP à CE6)', educationalLevel: 'Primary' } },
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Collège International (1AC-3AC)', educationalLevel: 'Middle School' } },
        { '@type': 'Offer', itemOffered: { '@type': 'EducationalOccupationalProgram', name: 'Lycée (Tronc Commun au Bac)', educationalLevel: 'High School' } },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
    },
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
      item: `${SITE_URL}${item.path === '/' ? '' : item.path}/`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
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
    url: `${SITE_URL}${path}/`,
    provider: {
      '@type': 'EducationalOrganization',
      name: SCHOOL.name,
      sameAs: SITE_URL,
    },
  };
}

export function webPageSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${path === '/' ? '' : path}/`,
    isPartOf: { '@type': 'WebSite', name: SCHOOL.name, url: SITE_URL },
    inLanguage: 'fr-MA',
  };
}
