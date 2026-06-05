// ═══════════════════════════════════════════════════════════════
// SCHOOL DATA — Single source of truth
// Groupe Scolaire Les Lumières — Tanger, Maroc
// ═══════════════════════════════════════════════════════════════

export const SITE_URL = 'https://gsleslumieres.ma';

export const SCHOOL = {
  name: 'Groupe Scolaire Les Lumières',
  shortName: 'Les Lumières',
  nameAr: 'مجموعة مدارس الأنوار',
  founded: 2004,
  yearsOfExperience: new Date().getFullYear() - 2004, // 21+
  director: 'Ahmed ABBOU',
  sloganFr: 'Notre école, votre confiance',
  sloganAr: 'مدرستنا، ثقتكم',

  address: {
    full: 'Ribh2, Avenue Moulay Rachid, Val Fleuri, 90060 Tanger, Maroc',
    street: 'Ribh2, Avenue Moulay Rachid, Val Fleuri',
    locality: 'Tanger',
    postalCode: '90060',
    region: 'Tanger-Tétouan-Al Hoceima',
    country: 'MA',
    countryName: 'Maroc',
  },

  geo: {
    latitude: 35.7595,
    longitude: -5.834,
  },

  phone1: '0539 93 90 95',
  phone1Intl: '+212539939095',
  phone2: '0666 63 69 74',
  phone2Intl: '+212666636974',
  email: 'leslumieres2021@gmail.com',
  website: 'gsleslumieres.ma',

  whatsapp: '212666636974',
  whatsappDisplay: '+212 666 63 69 74',
  whatsappDefaultText:
    'Bonjour, je souhaite des informations sur les inscriptions au Groupe Scolaire Les Lumières.',

  social: {
    instagram: 'https://www.instagram.com/gs.leslumiers',
    facebook: 'https://www.facebook.com/GroupeScolaireLesLumieres',
    tiktok: 'https://www.tiktok.com/@gs.leslumiers',
    youtube: 'https://www.youtube.com/@GroupeScolaireLesLumieres',
  },

  hours: [
    { day: 'Lundi – Vendredi', time: '08h00 – 18h00' },
    { day: 'Samedi', time: '08h00 – 13h00' },
    { day: 'Dimanche', time: 'Fermé' },
  ],
} as const;

// Build a WhatsApp link with an optional custom prefilled message
export function whatsappLink(text: string = SCHOOL.whatsappDefaultText): string {
  return `https://wa.me/${SCHOOL.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;

export const GOOGLE_MAPS_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0!2d-5.834!3d35.7595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ1JzM0LjIiTiA1wrA1MCcwMi40Ilc!5e0!3m2!1sfr!2sma!4v1700000000000';

export const GOOGLE_MAPS_DIRECTIONS = `https://www.google.com/maps/search/?api=1&query=${SCHOOL.geo.latitude},${SCHOOL.geo.longitude}`;

// ─── Cycles scolaires ──────────────────────────────────────────
export const CYCLES = [
  {
    slug: 'maternelle-tanger',
    name: 'Maternelle',
    shortLabel: 'Maternelle',
    ages: '3 à 5 ans',
    levels: ['Petite Section (PS)', 'Moyenne Section (MS)', 'Grande Section (GS)'],
    tagline: 'Approche Montessori, éveil et premiers pas dans 3 langues',
    image: '/images/cycles/maternelle.jpg',
    imageAlt:
      'Enfants de maternelle en activité d’éveil à l’école Les Lumières à Tanger',
    features: [
      'Pédagogie Montessori',
      'Éveil & socialisation',
      'Introduction trilingue',
    ],
  },
  {
    slug: 'primaire-prive-tanger',
    name: 'Primaire',
    shortLabel: 'Primaire',
    ages: '6 à 11 ans',
    levels: ['CP', 'CE2', 'CE3', 'CE4', 'CE5', 'CE6'],
    tagline: 'Méthode de Singapour en mathématiques, anglais dès le CP',
    image: '/images/cycles/primaire.jpg',
    imageAlt:
      'Élèves de primaire en classe à l’école privée Les Lumières à Tanger',
    features: [
      'Méthode de Singapour',
      'Bases solides en français',
      'Anglais dès le CP',
    ],
  },
  {
    slug: 'college-prive-tanger',
    name: 'Collège International',
    shortLabel: 'Collège',
    ages: '12 à 14 ans',
    levels: ['1ère Année Collège (1AC)', '2AC', '3AC'],
    tagline: 'Préparation Cambridge English et laboratoires de sciences',
    image: '/images/cycles/college.jpg',
    imageAlt:
      'Collégiens en laboratoire de sciences au collège international Les Lumières à Tanger',
    features: [
      'Préparation Cambridge',
      'Laboratoires de sciences',
      'Programme international',
    ],
  },
  {
    slug: 'lycee-prive-tanger',
    name: 'Lycée',
    shortLabel: 'Lycée',
    ages: '15 à 18 ans',
    levels: ['Tronc Commun', '1er Bac (SVT / Maths / Éco)', '2ème Bac (PC / SVT / Éco / SGC)'],
    tagline: 'Préparation au baccalauréat et bourse d’excellence',
    image: '/images/cycles/lycee.jpg',
    imageAlt:
      'Lycéens préparant le baccalauréat au lycée privé Les Lumières à Tanger',
    features: [
      'Préparation au Bac',
      'Filières scientifiques & éco',
      'Bourse d’excellence',
    ],
  },
] as const;

// Niveaux pour le formulaire d'inscription
export const NIVEAUX = [
  'Petite Section (PS)',
  'Moyenne Section (MS)',
  'Grande Section (GS)',
  'CP',
  'CE2',
  'CE3',
  'CE4',
  'CE5',
  'CE6',
  '1ère Année Collège (1AC)',
  '2ème Année Collège (2AC)',
  '3ème Année Collège (3AC)',
  'Tronc Commun',
  '1er Baccalauréat',
  '2ème Baccalauréat',
] as const;

// ─── Atouts (Why Us) ───────────────────────────────────────────
export const WHY_US = [
  {
    icon: 'GraduationCap',
    title: '21 ans d’expérience',
    description: 'Plus de deux décennies d’excellence éducative à Tanger.',
  },
  {
    icon: 'Globe',
    title: 'École trilingue',
    description: 'Arabe, français et anglais dès le plus jeune âge.',
  },
  {
    icon: 'Calculator',
    title: 'Méthode de Singapour',
    description: 'L’approche mathématique la plus efficace au monde.',
  },
  {
    icon: 'Award',
    title: 'Cambridge English',
    description: 'Certifications internationales reconnues mondialement.',
  },
  {
    icon: 'Drama',
    title: 'Activités enrichissantes',
    description: 'Théâtre, chorale, arts, sports et voyages scolaires.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Encadrement bienveillant',
    description: 'Un suivi personnalisé pour chaque élève.',
  },
] as const;

// ─── Statistiques ──────────────────────────────────────────────
export const STATS = [
  { value: 21, suffix: '+', label: 'Années d’expérience' },
  { value: 4, suffix: '', label: 'Cycles scolaires' },
  { value: 3, suffix: '', label: 'Langues enseignées' },
  { value: 'Cambridge', suffix: '', label: 'Certifications internationales' },
] as const;

// ─── Témoignages parents ───────────────────────────────────────
export const TESTIMONIALS = [
  {
    name: 'Rachid',
    cycle: 'Primaire',
    rating: 5,
    quote:
      'Un groupe pédagogique et administratif professionnel. Vous êtes la deuxième famille de mon enfant !',
  },
  {
    name: 'Ahmed',
    cycle: 'Collège',
    rating: 5,
    quote:
      'Je recommande vivement cette belle école, mon fils y a passé de très bons moments, les éducatrices sont très câlines et qualifiées.',
  },
  {
    name: 'Khalid',
    cycle: 'Lycée',
    rating: 5,
    quote:
      'Très bonne école gérée par des professionnels. Très bon niveau scolaire, les enfants y sont épanouis.',
  },
  {
    name: 'Fatima',
    cycle: 'Maternelle',
    rating: 5,
    quote:
      'Un cadre rassurant pour les premiers pas de mon enfant. Les éducatrices sont formidables et très attentives.',
  },
  {
    name: 'Youssef',
    cycle: 'Primaire',
    rating: 5,
    quote:
      'La méthode de Singapour a transformé le niveau de mon fils en mathématiques. Je recommande vivement.',
  },
  {
    name: 'Samira',
    cycle: 'Collège',
    rating: 5,
    quote:
      'Le programme Cambridge English a donné à ma fille une vraie confiance en anglais. Excellente école.',
  },
] as const;

// ─── Activités parascolaires ───────────────────────────────────
export const ACTIVITIES = [
  { icon: 'Drama', title: 'Théâtre & Art dramatique', description: 'Expression, confiance en soi et créativité sur scène.' },
  { icon: 'Music', title: 'Musique & Chorale Albatros', description: 'Notre chorale Albatros fait vibrer chaque événement.' },
  { icon: 'Palette', title: 'Arts plastiques & Écriture', description: 'Dessin, peinture et ateliers d’écriture créative.' },
  { icon: 'Trophy', title: 'Compétitions sportives', description: 'Football, athlétisme, cross-country et tournois inter-classes.' },
  { icon: 'Bus', title: 'Voyages scolaires', description: '3 sorties par an : régionale, nationale et internationale.' },
  { icon: 'PartyPopper', title: 'Événements annuels', description: 'Carnaval, fête du printemps, kermesse et Olympiade.' },
] as const;

// ─── Services ──────────────────────────────────────────────────
export const SERVICES = [
  { icon: 'Bus', title: 'Transport scolaire', description: 'Flotte de véhicules neufs avec personnel d’accompagnement dédié.', href: '/transport-scolaire' },
  { icon: 'UtensilsCrossed', title: 'Cantine & Restauration', description: 'Repas équilibrés sur place sous la supervision de notre équipe.', href: '/cantine' },
  { icon: 'Clock', title: 'Garderie', description: 'Heures de surveillance prolongées avant et après les cours.', href: '/contact' },
  { icon: 'Monitor', title: 'TICE & Laboratoires', description: 'Salles informatiques, tableaux interactifs et laboratoire de sciences.', href: '/pourquoi-les-lumieres' },
] as const;

// ─── Navigation ────────────────────────────────────────────────
export const NAV = [
  {
    label: 'L’École',
    children: [
      { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
      { label: 'Mot du Directeur', href: '/mot-du-directeur' },
      { label: 'Pourquoi Les Lumières', href: '/pourquoi-les-lumieres' },
      { label: 'Notre équipe', href: '/notre-equipe' },
      { label: 'Nos résultats', href: '/nos-resultats' },
    ],
  },
  {
    label: 'Nos Formations',
    children: [
      { label: 'Maternelle', href: '/maternelle-tanger' },
      { label: 'Primaire', href: '/primaire-prive-tanger' },
      { label: 'Collège International', href: '/college-prive-tanger' },
      { label: 'Lycée', href: '/lycee-prive-tanger' },
    ],
  },
  {
    label: 'Vie Scolaire',
    children: [
      { label: 'Activités parascolaires', href: '/activites-parascolaires' },
      { label: 'Galerie', href: '/galerie' },
      { label: 'Actualités', href: '/actualites' },
    ],
  },
  {
    label: 'Services',
    children: [
      { label: 'Transport scolaire', href: '/transport-scolaire' },
      { label: 'Cantine', href: '/cantine' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  { label: 'Inscription', href: '/inscription-ecole-tanger' },
  { label: 'Contact', href: '/contact' },
] as const;

// Formspree endpoint — REPLACE with your real form id after deployment
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';
