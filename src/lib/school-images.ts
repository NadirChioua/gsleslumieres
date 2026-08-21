const base = '/images/school-life';

const gallery = (cycle: string, altBase: string, count = 12) =>
  Array.from({ length: count }, (_, index) => ({
    src: `${base}/cycles/${cycle}/gallery-${String(index + 1).padStart(2, '0')}.webp`,
    alt: `${altBase} au Groupe Scolaire Les Lumières à Tanger - photo ${index + 1}`,
  }));

export const SCHOOL_IMAGES = {
  general: {
    heroCampus: `${base}/general/hero-campus.webp`,
    contactCampus: `${base}/general/contact-campus.webp`,
    aboutLife: `${base}/general/about-life.webp`,
    whyScience: `${base}/general/why-science.webp`,
    schoolGroup: `${base}/general/school-group.webp`,
    locationCampus: `${base}/general/location-campus.webp`,
    teamHero: `${base}/general/team-hero.webp`,
    directorMessage: `${base}/general/director-message.webp`,
    results: `${base}/general/results.webp`,
    uniform: `${base}/general/uniform.webp`,
  },
  services: {
    cantine: `${base}/services/cantine.webp`,
    transport: `${base}/services/transport.webp`,
  },
  activities: {
    theatre: `${base}/activities/theatre.webp`,
    chorale: `${base}/activities/chorale.webp`,
    sport: `${base}/activities/sport.webp`,
    arts: `${base}/activities/arts.webp`,
    sortie: `${base}/activities/sortie.webp`,
    event1: `${base}/activities/event-1.webp`,
    event2: `${base}/activities/event-2.webp`,
    event3: `${base}/activities/event-3.webp`,
    trip1: `${base}/activities/trip-1.webp`,
    trip2: `${base}/activities/trip-2.webp`,
    trip3: `${base}/activities/trip-3.webp`,
  },
  cycles: {
    maternelle: {
      card: `${base}/cycles/maternelle/card.webp`,
      hero: `${base}/cycles/maternelle/card.webp`,
      gallery: gallery('maternelle', 'Vie en maternelle'),
    },
    primaire: {
      card: `${base}/cycles/primaire/card.webp`,
      hero: `${base}/cycles/primaire/hero.webp`,
      gallery: gallery('primaire', 'Vie en primaire'),
    },
    college: {
      card: `${base}/cycles/college/card.webp`,
      hero: `${base}/cycles/college/hero.webp`,
      gallery: gallery('college', 'Vie au collège'),
    },
    lycee: {
      card: `${base}/cycles/lycee/card.webp`,
      hero: `${base}/cycles/lycee/hero.webp`,
      gallery: gallery('lycee', 'Vie au lycée'),
    },
  },
} as const;

export const GALLERY_CATEGORIES = [
  { key: 'maternelle', label: 'Maternelle' },
  { key: 'primaire', label: 'Primaire' },
  { key: 'college', label: 'Collège' },
  { key: 'lycee', label: 'Lycée' },
  { key: 'evenements', label: 'Événements' },
  { key: 'sorties', label: 'Sorties' },
] as const;

export const SCHOOL_GALLERY_IMAGES = [
  ...SCHOOL_IMAGES.cycles.maternelle.gallery.map((image) => ({ ...image, category: 'maternelle' })),
  ...SCHOOL_IMAGES.cycles.primaire.gallery.map((image) => ({ ...image, category: 'primaire' })),
  ...SCHOOL_IMAGES.cycles.college.gallery.map((image) => ({ ...image, category: 'college' })),
  ...SCHOOL_IMAGES.cycles.lycee.gallery.map((image) => ({ ...image, category: 'lycee' })),
  { src: SCHOOL_IMAGES.activities.event1, alt: 'Spectacle et événement scolaire aux Lumières', category: 'evenements' },
  { src: SCHOOL_IMAGES.activities.event2, alt: 'Remise de certificats aux élèves des Lumières', category: 'evenements' },
  { src: SCHOOL_IMAGES.activities.event3, alt: 'Projet scolaire et moment de partage aux Lumières', category: 'evenements' },
  { src: SCHOOL_IMAGES.activities.theatre, alt: 'Atelier théâtre au Groupe Scolaire Les Lumières', category: 'evenements' },
  { src: SCHOOL_IMAGES.activities.trip1, alt: 'Sortie scolaire des élèves des Lumières', category: 'sorties' },
  { src: SCHOOL_IMAGES.activities.trip2, alt: 'Voyage scolaire et découverte culturelle', category: 'sorties' },
  { src: SCHOOL_IMAGES.activities.trip3, alt: 'Excursion scolaire encadrée par Les Lumières', category: 'sorties' },
  { src: SCHOOL_IMAGES.activities.sortie, alt: 'Groupe d’élèves pendant une sortie scolaire', category: 'sorties' },
] as const;
