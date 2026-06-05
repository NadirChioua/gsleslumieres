import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import ImageGallery, { type GalleryImage } from '@/components/shared/ImageGallery';
import CTASection from '@/components/shared/CTASection';

export const metadata = buildMetadata({
  title: 'Galerie Photos et Vidéos | Les Lumières Tanger',
  description:
    'Découvrez en images la vie scolaire au Groupe Scolaire Les Lumières à Tanger. Photos de classes, activités, événements et sorties scolaires.',
  path: '/galerie',
  keywords: ['galerie école Tanger', 'photos école Les Lumières', 'vie scolaire Tanger'],
});

const categories = [
  { key: 'maternelle', label: 'Maternelle' },
  { key: 'primaire', label: 'Primaire' },
  { key: 'college', label: 'Collège' },
  { key: 'lycee', label: 'Lycée' },
  { key: 'evenements', label: 'Événements' },
  { key: 'sorties', label: 'Sorties' },
];

function buildGallery(): GalleryImage[] {
  const map: Record<string, { folder: string; alt: string }> = {
    maternelle: { folder: 'cycles/maternelle/maternelle', alt: 'Activité en maternelle' },
    primaire: { folder: 'cycles/primaire/primaire', alt: 'Classe de primaire' },
    college: { folder: 'cycles/college/college', alt: 'Cours au collège' },
    lycee: { folder: 'cycles/lycee/lycee', alt: 'Cours au lycée' },
    evenements: { folder: 'activities/event', alt: 'Événement scolaire' },
    sorties: { folder: 'activities/trip', alt: 'Sortie scolaire' },
  };
  const out: GalleryImage[] = [];
  for (const c of categories) {
    const m = map[c.key];
    for (let i = 1; i <= 4; i++) {
      out.push({
        src: `/images/${m.folder}-${i}.jpg`,
        alt: `${m.alt} au Groupe Scolaire Les Lumières à Tanger`,
        category: c.key,
      });
    }
  }
  return out;
}

export default function GaleriePage() {
  return (
    <>
      <PageHero
        title="Galerie Photos et Vidéos — La vie aux Lumières"
        subtitle="Plongez dans le quotidien de notre école : apprentissage, créativité, sport et moments de partage."
        image="/images/campus/campus-1.jpg"
        imageAlt="Vie scolaire au Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Vie Scolaire', path: '/activites-parascolaires' }, { name: 'Galerie', path: '/galerie' }]} />

      <section className="section-padding">
        <div className="container-page">
          <ImageGallery images={buildGallery()} categories={categories} />
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page">
          <SectionTitle eyebrow="En vidéo" title="Retrouvez-nous sur nos réseaux" subtitle="Suivez la vie de l’école au quotidien sur YouTube, Instagram et TikTok." />
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-black/5 shadow-lg">
            <div className="relative aspect-video">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/videoseries?list=UU"
                title="Vidéos du Groupe Scolaire Les Lumières à Tanger"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
