import { buildMetadata } from '@/lib/metadata';
import { SCHOOL_MEDIA } from '@/lib/media';
import { GALLERY_CATEGORIES, SCHOOL_GALLERY_IMAGES, SCHOOL_IMAGES } from '@/lib/school-images';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import ImageGallery, { type GalleryImage } from '@/components/shared/ImageGallery';
import CTASection from '@/components/shared/CTASection';
import MediaVideo from '@/components/shared/MediaVideo';
import ScrollReveal from '@/components/shared/ScrollReveal';

export const metadata = buildMetadata({
  title: 'Galerie Photos et Vidéos | Les Lumières Tanger',
  description:
    'Découvrez en images la vie scolaire au Groupe Scolaire Les Lumières à Tanger. Photos de classes, activités, événements, vidéos du campus et sorties scolaires.',
  path: '/galerie',
  keywords: ['galerie école Tanger', 'photos école Les Lumières', 'vie scolaire Tanger'],
});

const categories = GALLERY_CATEGORIES;

const videoShowcase = [
  {
    title: 'Cadre maternelle',
    text: 'Un aperçu concret des espaces dédiés aux plus jeunes.',
    media: SCHOOL_MEDIA.maternelle,
    aspect: 'aspect-video',
  },
  {
    title: 'Sport scolaire',
    text: "Un quotidien qui laisse une vraie place à l'activité physique.",
    media: SCHOOL_MEDIA.sport,
    aspect: 'aspect-video',
  },
  {
    title: 'Cambridge',
    text: "L'ouverture internationale présentée en images.",
    media: SCHOOL_MEDIA.college,
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Localisation',
    text: "Une vue du quartier et de l'environnement de l'établissement.",
    media: SCHOOL_MEDIA.location,
    aspect: 'aspect-[4/5]',
  },
];

function buildGallery(): GalleryImage[] {
  return [...SCHOOL_GALLERY_IMAGES];
}

export default function GaleriePage() {
  return (
    <>
      <PageHero
        title="Galerie Photos et Vidéos - La vie aux Lumières"
        subtitle="Plongez dans le quotidien de notre école : apprentissage, créativité, sport et moments de partage."
        image={SCHOOL_IMAGES.general.aboutLife}
        imageAlt="Vie scolaire au Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Vie Scolaire', path: '/activites-parascolaires' }, { name: 'Galerie', path: '/galerie' }]} />

      <section className="section-y">
        <div className="container-page">
          <ImageGallery images={buildGallery()} categories={categories} />
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-page">
          <SectionTitle
            eyebrow="En vidéo"
            title="Des aperçus réels du campus et de la vie scolaire"
            subtitle="Les vidéos se lancent automatiquement sans son lorsqu'elles entrent dans l'écran, pour garder une navigation fluide."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {videoShowcase.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-lg border border-black/5 bg-white p-3 shadow-sm">
                  <MediaVideo
                    src={item.media.src}
                    poster={item.media.poster}
                    description={item.media.description}
                    mode="feature"
                    autoPlayOnView
                    loop
                    className={`${item.aspect} w-full rounded-lg`}
                    buttonLabel={`Lire la video : ${item.title}`}
                  />
                  <div className="p-3">
                    <h3 className="font-bold text-primary-800">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink/70">{item.text}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
