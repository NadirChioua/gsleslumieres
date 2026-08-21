import { SCHOOL_IMAGES } from './school-images';

export const SCHOOL_MEDIA = {
  hero: {
    src: '/video/optimized/hero-campus.mp4',
    poster: SCHOOL_IMAGES.general.heroCampus,
    description:
      'Vue de la façade du Groupe Scolaire Les Lumières à Tanger depuis la rue principale.',
  },
  location: {
    src: '/video/optimized/location-campus.mp4',
    poster: SCHOOL_IMAGES.general.locationCampus,
    description:
      "Vue aérienne du quartier Val Fleuri et de l'emplacement du Groupe Scolaire Les Lumières à Tanger.",
  },
  maternelle: {
    src: '/video/optimized/maternelle-place.mp4',
    poster: SCHOOL_IMAGES.cycles.maternelle.hero,
    preview: '/video/optimized/maternelle-preview.mp4',
    previewPoster: SCHOOL_IMAGES.cycles.maternelle.card,
    description:
      "Aperçu de l'espace maternelle et de l'entrée accueillante de l'école.",
  },
  primaire: {
    preview: '/video/optimized/primaire-preview.mp4',
    previewPoster: SCHOOL_IMAGES.cycles.primaire.card,
    description:
      "Élèves en uniforme dans l'environnement scolaire du Groupe Scolaire Les Lumières.",
  },
  college: {
    src: '/video/optimized/cambridge-visit.mp4',
    poster: SCHOOL_IMAGES.cycles.college.card,
    preview: '/video/optimized/college-preview.mp4',
    previewPoster: SCHOOL_IMAGES.cycles.college.hero,
    description:
      "Échange autour du partenariat Cambridge et de l'ouverture internationale de l'école.",
  },
  lycee: {
    preview: '/video/optimized/lycee-preview.mp4',
    previewPoster: SCHOOL_IMAGES.cycles.lycee.card,
    description:
      'Vue de la façade et du campus du Groupe Scolaire Les Lumières.',
  },
  sport: {
    src: '/video/optimized/sport-classe.mp4',
    poster: SCHOOL_IMAGES.activities.sport,
    preview: '/video/optimized/sport-preview.mp4',
    previewPoster: SCHOOL_IMAGES.activities.sport,
    description:
      "Élèves pendant une activité sportive encadrée au sein de l'école.",
  },
  uniform: {
    src: '/video/optimized/uniforme-video.mp4',
    poster: SCHOOL_IMAGES.general.uniform,
    preview: '/video/optimized/uniform-preview.mp4',
    previewPoster: SCHOOL_IMAGES.general.uniform,
    description:
      "Détails de l'uniforme scolaire et de l'identité visuelle Les Lumières.",
  },
  cambridgeInterview: {
    src: '/video/optimized/cambridge-interview.mp4',
    poster: SCHOOL_IMAGES.cycles.college.card,
    description:
      'Entretien vidéo sur la collaboration Cambridge au Groupe Scolaire Les Lumières.',
  },
  director: {
    src: '/video/optimized/director-year-summary.mp4',
    poster: SCHOOL_IMAGES.general.directorMessage,
    description:
      "Message vidéo du responsable de l'établissement autour d'une année scolaire de travail et de réussite.",
  },
} as const;

export const CYCLE_VIDEO_PREVIEWS: Record<
  string,
  { src: string; poster: string; description: string }
> = {
  'maternelle-tanger': {
    src: SCHOOL_MEDIA.maternelle.preview,
    poster: SCHOOL_MEDIA.maternelle.previewPoster,
    description: SCHOOL_MEDIA.maternelle.description,
  },
  'primaire-prive-tanger': {
    src: SCHOOL_MEDIA.primaire.preview,
    poster: SCHOOL_MEDIA.primaire.previewPoster,
    description: SCHOOL_MEDIA.primaire.description,
  },
  'college-prive-tanger': {
    src: SCHOOL_MEDIA.college.preview,
    poster: SCHOOL_MEDIA.college.previewPoster,
    description: SCHOOL_MEDIA.college.description,
  },
  'lycee-prive-tanger': {
    src: SCHOOL_MEDIA.lycee.preview,
    poster: SCHOOL_MEDIA.lycee.previewPoster,
    description: SCHOOL_MEDIA.lycee.description,
  },
};
