// Detailed editorial content for each cycle page.
import { TESTIMONIALS } from './constants';
import { SCHOOL_MEDIA } from './media';
import { SCHOOL_IMAGES } from './school-images';

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
  heroVideo?: {
    src: string;
    poster: string;
    description: string;
  };
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

export const CYCLES_CONTENT: Record<string, CycleContent> = {
  'maternelle-tanger': {
    slug: 'maternelle-tanger',
    name: 'Maternelle',
    breadcrumbName: 'Maternelle',
    h1: 'Maternelle Privée Trilingue à Tanger — PS, MS, GS',
    metaTitle: 'Maternelle Privée à Tanger | Groupe Scolaire Les Lumières',
    metaDescription:
      'Maternelle privée trilingue à Tanger : Petite, Moyenne et Grande Section. Approche Montessori et éveil dans un cadre chaleureux. Inscriptions 2026-2027.',
    heroSubtitle:
      'Les premiers pas de votre enfant dans un environnement chaleureux, sécurisé et stimulant — où le français structure les apprentissages, avec l’arabe dès la PS et l’anglais dès la GS.',
    heroImage: SCHOOL_IMAGES.cycles.maternelle.hero,
    heroImageAlt: 'Enfants de maternelle en activité d’éveil à l’école Les Lumières à Tanger',
    heroVideo: {
      src: SCHOOL_MEDIA.maternelle.src,
      poster: SCHOOL_MEDIA.maternelle.poster,
      description: SCHOOL_MEDIA.maternelle.description,
    },
    intro: [
      'La maternelle du Groupe Scolaire Les Lumières accueille les enfants de 3 à 5 ans dans un cadre conçu pour le respect de leur rythme et de leur curiosité naturelle. Notre approche s’inspire de la pédagogie Montessori : l’enfant apprend par la manipulation, l’expérimentation et le jeu, accompagné par des éducatrices bienveillantes et expérimentées.',
      'Dès la Petite Section, votre enfant bénéficie d’un éveil linguistique structuré : le français accompagne la communication quotidienne, l’arabe est enseigné dès la PS et l’anglais commence dès la Grande Section à raison de 3 heures par semaine. Cette progression développe l’oreille, la mémoire et l’aisance linguistique qui feront la différence tout au long de sa scolarité.',
      'Les effectifs réduits permettent un suivi individualisé : chaque enfant est observé, encouragé et valorisé. La maternelle Les Lumières, située à Val Fleuri à Tanger, constitue le socle sur lequel se construit la confiance en soi, l’autonomie et le goût d’apprendre.',
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
      { title: 'Éveil trilingue', text: 'Français langue principale, arabe dès la Petite Section et anglais dès la Grande Section.' },
    ],
    languages: [
      { lang: 'Français', detail: 'Langue principale d’éveil et de communication.' },
      { lang: 'Arabe', detail: 'Dès la Petite Section — comptines, histoires et vocabulaire.' },
      { lang: 'Anglais', detail: 'Dès la Grande Section, 3 heures par semaine — initiation orale et Cambridge Preparation progressive.' },
    ],
    advantages: [
      'Effectifs réduits et suivi individualisé',
      'Éducatrices qualifiées et bienveillantes',
      'Locaux sécurisés et adaptés aux tout-petits',
      'Service de Cantine et Transport disponibles',
    ],
    gallery: SCHOOL_IMAGES.cycles.maternelle.gallery,
    testimonialName: 'Fatima',
    ctaLabel: 'Inscrire mon enfant en Maternelle',
  },

  'primaire-prive-tanger': {
    slug: 'primaire-prive-tanger',
    name: 'Primaire',
    breadcrumbName: 'Primaire',
    h1: 'École Primaire Privée à Tanger — Du CP au CE6',
    metaTitle: 'École Primaire Privée à Tanger | Les Lumières',
    metaDescription:
      'École primaire privée à Tanger du CP au CE6. Méthode de Singapour pour les maths, enseignement trilingue et Cambridge Preparation. Groupe Scolaire Les Lumières.',
    heroSubtitle:
      'Des bases solides en français, en arabe et en anglais, et une excellence en mathématiques grâce à la Méthode de Singapour.',
    heroImage: SCHOOL_IMAGES.cycles.primaire.hero,
    heroImageAlt: 'Élèves de primaire en classe à l’école privée Les Lumières à Tanger',
    intro: [
      'Le cycle primaire du Groupe Scolaire Les Lumières, du CP au CE6, constitue une étape déterminante dans le parcours de votre enfant. C’est ici que se construisent les compétences fondamentales : lire, écrire, compter et raisonner. Notre projet pédagogique met l’accent sur la rigueur, la curiosité et la confiance en soi.',
      'En mathématiques, nous appliquons la célèbre Méthode de Singapour, reconnue comme l’une des plus efficaces au monde. Cette approche progressive — du concret vers l’abstrait — développe une compréhension profonde des concepts et un véritable goût pour la résolution de problèmes.',
      'L’enseignement reste résolument trilingue : le français est la langue principale d’instruction, l’arabe est consolidé, et l’anglais commencé dès la Grande Section se poursuit à raison de 3 heures par semaine, avec Cambridge Preparation progressive. Notre école primaire privée à Tanger conjugue exigence académique et épanouissement personnel.',
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
      { lang: 'Anglais', detail: 'Depuis la Grande Section, 3 heures par semaine — Cambridge Preparation progressive.' },
    ],
    advantages: [
      'Méthode de Singapour pour les mathématiques',
      'Cambridge Preparation dès CE1',
      'Salles informatiques et tableaux interactifs',
      'Activités parascolaires riches et variées',
    ],
    gallery: SCHOOL_IMAGES.cycles.primaire.gallery,
    testimonialName: 'Youssef',
    ctaLabel: 'Inscrire mon enfant en Primaire',
  },

  'college-prive-tanger': {
    slug: 'college-prive-tanger',
    name: 'Collège International',
    breadcrumbName: 'Collège International',
    h1: 'Collège Privé International à Tanger — 1AC, 2AC, 3AC',
    metaTitle: 'Collège Privé International à Tanger | Les Lumières',
    metaDescription:
      'Collège privé international à Tanger. 1AC, 2AC, 3AC. Cambridge Preparation, laboratoires de sciences, programme trilingue. Inscriptions ouvertes.',
    heroSubtitle:
      'Un collège international exigeant et bienveillant, qui prépare les adolescents au lycée et au parcours Cambridge Preparation.',
    heroImage: SCHOOL_IMAGES.cycles.college.hero,
    heroImageAlt: 'Collégiens en laboratoire de sciences au collège international Les Lumières à Tanger',
    intro: [
      'Le Collège International du Groupe Scolaire Les Lumières accompagne les élèves de la 1ère à la 3ème Année Collège (1AC, 2AC, 3AC) à travers une période charnière de leur développement. Notre objectif : conjuguer exigence académique, ouverture internationale et accompagnement personnalisé.',
      'Le programme, enrichi d’une dimension internationale, s’appuie sur Cambridge Preparation. Les élèves bénéficient de laboratoires de sciences modernes, de salles informatiques équipées de tableaux interactifs, et d’une équipe pédagogique investie qui valorise l’esprit critique et l’autonomie.',
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
      { icon: 'Award', name: 'Cambridge Preparation' },
      { icon: 'Monitor', name: 'Informatique & laboratoire' },
      { icon: 'Drama', name: 'Histoire-Géo & éducation civique' },
    ],
    methods: [
      { title: 'Programme international', text: 'Un curriculum enrichi tourné vers l’ouverture et l’excellence.' },
      { title: 'Cambridge Preparation', text: 'Entraînement régulier vers les Cambridge English Qualifications.' },
      { title: 'Travaux pratiques', text: 'Laboratoires de sciences pour apprendre par l’expérimentation.' },
    ],
    languages: [
      { lang: 'Français', detail: 'Langue d’instruction des matières scientifiques.' },
      { lang: 'Arabe', detail: 'Perfectionnement linguistique et littéraire.' },
      { lang: 'Anglais', detail: 'Renforcement et Cambridge Preparation.' },
    ],
    advantages: [
      'Cambridge Preparation',
      'Laboratoires de sciences et salles TICE',
      'Encadrement rapproché des adolescents',
      'Ouverture internationale et projets pédagogiques',
    ],
    gallery: SCHOOL_IMAGES.cycles.college.gallery,
    testimonialName: 'Samira',
    ctaLabel: 'Inscrire mon enfant au Collège',
  },

  'lycee-prive-tanger': {
    slug: 'lycee-prive-tanger',
    name: 'Lycée',
    breadcrumbName: 'Lycée',
    h1: 'Lycée Privé à Tanger — Tronc Commun, 1er Bac et 2ème Bac',
    metaTitle: 'Lycée Privé à Tanger | Les Lumières — Bac et Cambridge',
    metaDescription:
      'Lycée privé à Tanger. Tronc commun, 1er et 2ème Bac (SVT, PC, Éco, SGC). Cambridge Preparation, bourse d’excellence. Groupe Scolaire Les Lumières.',
    heroSubtitle:
      'Du Tronc Commun au 2ème Bac, nous préparons chaque lycéen à réussir ses examens et à construire son projet d’avenir.',
    heroImage: SCHOOL_IMAGES.cycles.lycee.hero,
    heroImageAlt: 'Lycéens en préparation aux examens au lycée privé Les Lumières à Tanger',
    intro: [
      'Le Lycée du Groupe Scolaire Les Lumières conduit les élèves du Tronc Commun jusqu’au 2ème Bac, avec un seul objectif : la réussite de chacun. Notre encadrement allie exigence académique, accompagnement personnalisé et orientation active vers les études supérieures.',
      'Les élèves choisissent parmi plusieurs filières : Sciences de la Vie et de la Terre (SVT), Physique-Chimie (PC), Sciences Mathématiques, Sciences Économiques et Sciences de Gestion Comptable (SGC). Chaque filière bénéficie d’un suivi rigoureux, de devoirs surveillés réguliers et d’une préparation intensive aux examens.',
      'Au-delà des résultats, le lycée valorise l’excellence à travers une Bourse d’Excellence destinée aux élèves les plus méritants, et poursuit Cambridge Preparation. Notre lycée privé à Tanger forme des bacheliers confiants, ambitieux et prêts pour l’enseignement supérieur.',
    ],
    levels: [
      { level: 'Tronc Commun', description: 'Année de consolidation et d’orientation.' },
      { level: '1er Bac', description: 'Filières : SVT, Sciences Maths, Sciences Éco.' },
      { level: '2ème Bac', description: 'Filières : PC, SVT, Éco, SGC — préparation finale aux examens.' },
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
      { title: 'Cambridge Preparation', text: 'Renforcement continu en anglais vers des certifications internationales reconnues.' },
    ],
    languages: [
      { lang: 'Français', detail: 'Langue d’instruction des matières scientifiques.' },
      { lang: 'Arabe', detail: 'Matières littéraires et islamiques.' },
      { lang: 'Anglais', detail: 'Cambridge Preparation continue.' },
    ],
    advantages: [
      'Filières scientifiques et économiques complètes',
      'Préparation intensive aux examens',
      'Bourse d’excellence pour les élèves méritants',
      'Cambridge Preparation au lycée',
    ],
    gallery: SCHOOL_IMAGES.cycles.lycee.gallery,
    testimonialName: 'Khalid',
    ctaLabel: 'Inscrire mon enfant au Lycée',
  },
};

export function getTestimonial(name: string) {
  return TESTIMONIALS.find((t) => t.name === name) ?? TESTIMONIALS[0];
}
