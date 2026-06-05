import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';

const PHOTOS = [
  { src: '/images/activities/theatre.jpg', alt: 'Atelier théâtre des élèves de l’école Les Lumières à Tanger', span: 'row-span-2' },
  { src: '/images/activities/chorale.jpg', alt: 'Chorale Albatros en répétition au Groupe Scolaire Les Lumières' },
  { src: '/images/activities/sport.jpg', alt: 'Élèves lors d’une compétition sportive à l’école Les Lumières Tanger' },
  { src: '/images/activities/arts.jpg', alt: 'Atelier d’arts plastiques au Groupe Scolaire Les Lumières' },
  { src: '/images/activities/sortie.jpg', alt: 'Sortie scolaire des élèves de l’école Les Lumières à Tanger', span: 'col-span-2' },
  { src: '/images/campus/classroom.jpg', alt: 'Salle de classe moderne au Groupe Scolaire Les Lumières à Tanger' },
];

export default function ActivitiesGallery() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <SectionTitle
          eyebrow="Notre quotidien"
          title="La vie scolaire aux Lumières"
          subtitle="Apprentissage, créativité, sport et amitié : un quotidien riche où chaque élève s’épanouit."
        />
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {PHOTOS.map((p) => (
            <div key={p.src} className={`relative overflow-hidden rounded-xl ${p.span ?? ''}`}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/galerie" className="btn-outline">
            Voir toute la galerie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
