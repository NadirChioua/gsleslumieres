// Detailed editorial content for each cycle page.
import { TESTIMONIALS } from './constants';

export interface SubjectItem {
  icon: string;
  name: string;
}

export interface CycleContent {
  slug: string;
  name: string;
  breadcrumbName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  levels: { level: string; description: string }[];
  subjects: SubjectItem[];
  methods: { title: string; text: string }[];
  languages: { lang: string; detail: string }[];
  advantages: string[];
  gallery: { src: string; alt: string }[];
  testimonialName: string;
  ctaLabel: string;
}

const galleryFor = (folder: string, prefix: string, altBase: string) =>
  Array.from({ length: 6 }).map((_, i) => ({
    src: `/images/cycles/${folder}/${prefix}-${i + 1}.jpg`,
    alt: `${altBase} — photo ${i + 1} au Groupe Scolaire Les Lumières à Tanger`,
  }));

export const CYCLES_CONTENT: Record<string, CycleContent> = {
  'maternelle-tanger': {
    slug: 'maternelle-tanger',
    name: 'Maternelle',
    breadcrumbName: 'Maternelle',
    h1: 'Maternelle Privée Trilingue à Tanger — PS, MS, GS',
    metaTitle: 'Maternelle Privée à Tanger | Groupe Scolaire Les Lumières',
    metaDescription:
      'Maternelle privée trilingue à Tanger. Petite, Moyenne et Grande Section. Approche Montessori, éveil et apprentissage dans un cadre chaleureux. Inscriptions 2026-2027.',
    heroSubtitle:
      'Les premiers pas de votre enfant dans un environnement chaleureux, sécurisé et stimulant — où l’on apprend en jouant, en arabe, en français et en anglais.',
    heroImage: '/images/cycles/maternelle.jpg',
    heroImageAlt: 'Enfants de maternelle en activité d’éveil à l’école Les Lumières à Tanger',
    intro: [
      'La maternelle du Groupe Scolaire Les Lumières accueille les enfants de 3 à 5 ans dans un cadre conçu pour le respect de leur rythme et de leur curiosité naturelle. Notre approche s’inspire de la pédagogie Montessori : l’enfant apprend par la manipulation, l’expérimentation et le jeu, accompagné par des éducatrices bienveillantes et expérimentées.',
      'Dès la Petite Section, votre enfant est immergé dans un univers trilingue. L’arabe, le français et l’anglais sont introduits progressivement à travers des chansons, des histoires et des activités ludiques. Cette exposition précoce développe l’oreille, la mémoire et l’aisance linguistique qui feront la différence tout au long de sa scolarité.',
      'Les effectifs réduits permettent un suivi individualisé : chaque enfant est observé, encouragé et valorisé. La maternelle Les Lumières, située à Val Fleuri à Tanger, est bien plus qu’une garderie : c’est le socle sur lequel se construit la confiance en soi, l’autonomie et le goût d’apprendre.',
    ],
    levels: [
      { level: 'Petite Section (PS)', description: '3 ans — adaptation, socialisation et éveil sensoriel.' },
      { level: 'Moyenne Section (MS)', description: '4 ans — langage, motricité fine et premières notions.' },
      { level: 'Grande Section (GS)', description: '5 ans — préparation à la lecture, à l’écriture et au calcul.' },
    ],
    subjects: [
      { icon: 'Globe', name: 'Éveil au langage (3 langues)' },
      { icon: 'Palette', name: 'Arts plastiques & créativité' },
      { icon: 'Music', name: 'Chant & expression corporelle' },
      { icon: 'Calculator', name: 'Découverte des nombres' },
      { icon: 'HeartHandshake', name: 'Vivre ensemble & autonomie' },
      { icon: 'Drama', name: 'Jeux de rôle & motricité' },
    ],
    methods: [
      { title: 'Pédagogie Montessori', text: 'Du matériel sensoriel adapté pour apprendre par l’expérience et développer l’autonomie.' },
      { title: 'Apprendre en jouant', text: 'Le jeu est le moteur de l’apprentissage : chaque activité a un objectif pédagogique précis.' },
      { title: 'Éveil trilingue', text: 'Immersion douce en arabe, français et anglais dès la Petite Section.' },
    ],
    languages: [
      { lang: 'Arabe', detail: 'Dès la Petite Section — comptines, histoires et vocabulaire.' },
      { lang: 'Français', detail: 'Langue principale d’éveil et de communication.' },
      { lang: 'Anglais', detail: 'Initiation ludique à l’oral.' },
    ],
    advantages: [
      'Effectifs réduits et suivi individualisé',
      'Éducatrices qualifiées et bienveillantes',
      'Locaux sécurisés et adaptés aux tout-petits',
      'Garderie et service de transport disponibles',
    ],
    gallery: galleryFor('maternelle', 'maternelle', 'Maternelle'),
    testimonialName: 'Fatima',
    ctaLabel: 'Inscrire mon enfant en Maternelle',
  },

  'primaire-prive-tanger': {
    slug: 'primaire-prive-tanger',
    name: 'Primaire',
    breadcrumbName: 'Primaire',
    h1: 'École Primaire Privée à Tanger — Du CP au CE6',
    metaTitle: 'Primaire Privé à Tanger | École Les Lumières — Méthode de Singapour',
    metaDescription:
      'École primaire privée à Tanger du CP au CE6. Méthode de Singapour pour les maths, enseignement trilingue, anglais dès le CP. Groupe Scolaire Les Lumières.',
    heroSubtitle:
      'Des bases solides en français, en arabe et en anglais, et une excellence en mathématiques grâce à la Méthode de Singapour.',
    heroImage: '/images/cycles/primaire.jpg',
    heroImageAlt: 'Élèves de primaire en classe à l’école privée Les Lumières à Tanger',
    intro: [
      'Le cycle primaire du Groupe Scolaire Les Lumières, du CP au CE6, constitue une étape déterminante dans le parcours de votre enfant. C’est ici que se construisent les compétences fondamentales : lire, écrire, compter et raisonner. Notre projet pédagogique met l’accent sur la rigueur, la curiosité et la confiance en soi.',
      'En mathématiques, nous appliquons la célèbre Méthode de Singapour, reconnue comme l’une des plus efficaces au monde. Cette approche progressive — du concret vers l’abstrait — développe une compréhension profonde des concepts et un véritable goût pour la résolution de problèmes.',
      'L’enseignement reste résolument trilingue : le français est la langue principale d’instruction, l’arabe est consolidé, et l’anglais est enseigné dès le CP à raison de 3 heures par semaine, dans la perspective des certifications Cambridge English. Notre école primaire privée à Tanger conjugue exigence académique et épanouissement personnel.',
    ],
    levels: [
      { level: 'CP', description: 'Apprentissage de la lecture et de l’écriture.' },
      { level: 'CE2 – CE3', description: 'Consolidation des bases et autonomie croissante.' },
      { level: 'CE4 – CE5', description: 'Approfondissement et méthodologie de travail.' },
      { level: 'CE6', description: 'Préparation à l’entrée au collège.' },
    ],
    subjects: [
      { icon: 'Calculator', name: 'Mathématiques (Singapour)' },
      { icon: 'Globe', name: 'Français, Arabe, Anglais' },
      { icon: 'Monitor', name: 'Informatique (TICE)' },
      { icon: 'Award', name: 'Sciences & découverte du monde' },
      { icon: 'Palette', name: 'Arts plastiques' },
      { icon: 'Music', name: 'Éducation musicale & sport' },
    ],
    methods: [
      { title: 'Méthode de Singapour', text: 'Approche concrète-imagée-abstraite pour une maîtrise durable des mathématiques.' },
      { title: 'Pédagogie de projet', text: 'Des projets concrets qui donnent du sens aux apprentissages.' },
      { title: 'Évaluation par compétences', text: 'Un suivi régulier centré sur les progrès de chaque élève.' },
    ],
    languages: [
      { lang: 'Français', detail: 'Langue principale d’instruction.' },
      { lang: 'Arabe', detail: 'Enseignement structuré et progressif.' },
      { lang: 'Anglais', detail: 'Dès le CP, 3 heures par semaine — préparation Cambridge.' },
    ],
    advantages: [
      'Méthode de Singapour pour les mathématiques',
      'Anglais dès le CP avec préparation Cambridge',
      'Salles informatiques et tableaux interactifs',
      'Activités parascolaires riches et variées',
    ],
    gallery: galleryFor('primaire', 'primaire', 'Primaire'),
    testimonialName: 'Youssef',
    ctaLabel: 'Inscrire mon enfant en Primaire',
  },

  'college-prive-tanger': {
    slug: 'college-prive-tanger',
    name: 'Collège International',
    breadcrumbName: 'Collège International',
    h1: 'Collège Privé International à Tanger — 1AC, 2AC, 3AC',
    metaTitle: 'Collège Privé International à Tanger | Les Lumières — Cambridge English',
    metaDescription:
      'Collège privé international à Tanger. 1AC, 2AC, 3AC. Préparation Cambridge English, laboratoires de sciences, programme trilingue. Inscriptions ouvertes.',
    heroSubtitle:
      'Un collège international exigeant et bienveillant, qui prépare les adolescents au lycée et aux certifications Cambridge English.',
    heroImage: '/images/cycles/college.jpg',
    heroImageAlt: 'Collégiens en laboratoire de sciences au collège international Les Lumières à Tanger',
    intro: [
      'Le Collège International du Groupe Scolaire Les Lumières accompagne les élèves de la 1ère à la 3ème Année Collège (1AC, 2AC, 3AC) à travers une période charnière de leur développement. Notre objectif : conjuguer exigence académique, ouverture internationale et accompagnement personnalisé.',
      'Le programme, enrichi d’une dimension internationale, prépare activement aux Cambridge English Qualifications. Les élèves bénéficient de laboratoires de sciences modernes, de salles informatiques équipées de tableaux interactifs, et d’une équipe pédagogique investie qui valorise l’esprit critique et l’autonomie.',
      'Au collège, l’enseignement trilingue prend toute sa dimension : maîtrise du français comme langue d’instruction, perfectionnement de l’arabe, et renforcement de l’anglais en vue des certifications internationales. Notre collège privé international à Tanger forme des adolescents curieux, responsables et confiants.',
    ],
    levels: [
      { level: '1ère Année Collège (1AC)', description: 'Transition primaire-collège et méthodologie.' },
      { level: '2ème Année Collège (2AC)', description: 'Approfondissement et autonomie de travail.' },
      { level: '3ème Année Collège (3AC)', description: 'Préparation au lycée et orientation.' },
    ],
    subjects: [
      { icon: 'Calculator', name: 'Mathématiques' },
      { icon: 'Award', name: 'Sciences (SVT, Physique)' },
      { icon: 'Globe', name: 'Français, Arabe, Anglais' },
      { icon: 'Award', name: 'Préparation Cambridge' },
      { icon: 'Monitor', name: 'Informatique & laboratoire' },
      { icon: 'Drama', name: 'Histoire-Géo & éducation civique' },
    ],
    methods: [
      { title: 'Programme international', text: 'Un curriculum enrichi tourné vers l’ouverture et l’excellence.' },
      { title: 'Préparation Cambridge', text: 'Entraînement régulier aux examens Cambridge English Qualifications.' },
      { title: 'Travaux pratiques', text: 'Laboratoires de sciences pour apprendre par l’expérimentation.' },
    ],
    languages: [
      { lang: 'Français', detail: 'Langue d’instruction des matières scientifiques.' },
      { lang: 'Arabe', detail: 'Perfectionnement linguistique et littéraire.' },
      { lang: 'Anglais', detail: 'Renforcement et préparation aux certifications Cambridge.' },
    ],
    advantages: [
      'Préparation officielle aux Cambridge English Qualifications',
      'Laboratoires de sciences et salles TICE',
      'Encadrement rapproché des adolescents',
      'Ouverture internationale et projets pédagogiques',
    ],
    gallery: galleryFor('college', 'college', 'Collège'),
    testimonialName: 'Samira',
    ctaLabel: 'Inscrire mon enfant au Collège',
  },

  'lycee-prive-tanger': {
    slug: 'lycee-prive-tanger',
    name: 'Lycée',
    breadcrumbName: 'Lycée',
    h1: 'Lycée Privé à Tanger — Tronc Commun au Baccalauréat',
    metaTitle: 'Lycée Privé à Tanger | Groupe Scolaire Les Lumières — Baccalauréat',
    metaDescription:
      'Lycée privé à Tanger. Tronc commun, 1er et 2ème Bac (SVT, PC, Éco, SGC). Préparation Cambridge, bourse d’excellence. Groupe Scolaire Les Lumières.',
    heroSubtitle:
      'Du Tronc Commun au Baccalauréat, nous préparons chaque lycéen à réussir ses examens et à construire son projet d’avenir.',
    heroImage: '/images/cycles/lycee.jpg',
    heroImageAlt: 'Lycéens préparant le baccalauréat au lycée privé Les Lumières à Tanger',
    intro: [
      'Le Lycée du Groupe Scolaire Les Lumières conduit les élèves du Tronc Commun jusqu’au Baccalauréat, avec un seul objectif : la réussite de chacun. Notre encadrement allie exigence académique, accompagnement personnalisé et orientation active vers les études supérieures.',
      'Les élèves choisissent parmi plusieurs filières : Sciences de la Vie et de la Terre (SVT), Physique-Chimie (PC), Sciences Mathématiques, Sciences Économiques et Sciences de Gestion Comptable (SGC). Chaque filière bénéficie d’un suivi rigoureux, de devoirs surveillés réguliers et d’une préparation intensive aux épreuves du baccalauréat.',
      'Au-delà des résultats, le lycée valorise l’excellence à travers une Bourse d’Excellence destinée aux élèves les plus méritants, et poursuit la préparation aux Cambridge English Qualifications. Notre lycée privé à Tanger forme des bacheliers confiants, ambitieux et prêts pour l’enseignement supérieur.',
    ],
    levels: [
      { level: 'Tronc Commun', description: 'Année de consolidation et d’orientation.' },
      { level: '1er Baccalauréat', description: 'Filières : SVT, Sciences Maths, Sciences Éco.' },
      { level: '2ème Baccalauréat', description: 'Filières : PC, SVT, Éco, SGC — préparation finale au Bac.' },
    ],
    subjects: [
      { icon: 'Calculator', name: 'Mathématiques' },
      { icon: 'Award', name: 'Physique-Chimie & SVT' },
      { icon: 'Globe', name: 'Langues (FR, AR, EN)' },
      { icon: 'Award', name: 'Sciences Économiques & Gestion' },
      { icon: 'Monitor', name: 'Informatique' },
      { icon: 'Drama', name: 'Philosophie & sciences humaines' },
    ],
    methods: [
      { title: 'Préparation au Bac', text: 'Devoirs surveillés, examens blancs et méthodologie ciblée.' },
      { title: 'Orientation active', text: 'Accompagnement vers les filières et les études supérieures.' },
      { title: 'Bourse d’Excellence', text: 'Récompense et encouragement des élèves les plus méritants.' },
    ],
    languages: [
      { lang: 'Français', detail: 'Langue d’instruction des matières scientifiques.' },
      { lang: 'Arabe', detail: 'Matières littéraires et islamiques.' },
      { lang: 'Anglais', detail: 'Préparation continue aux certifications Cambridge.' },
    ],
    advantages: [
      'Filières scientifiques et économiques complètes',
      'Préparation intensive au baccalauréat',
      'Bourse d’excellence pour les élèves méritants',
      'Orientation vers les études supérieures',
    ],
    gallery: galleryFor('lycee', 'lycee', 'Lycée'),
    testimonialName: 'Khalid',
    ctaLabel: 'Inscrire mon enfant au Lycée',
  },
};

export function getTestimonial(name: string) {
  return TESTIMONIALS.find((t) => t.name === name) ?? TESTIMONIALS[0];
}
