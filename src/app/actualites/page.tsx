import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';

export const metadata = buildMetadata({
  title: 'Actualités et Événements | Les Lumières Tanger',
  description:
    'Suivez l’actualité du Groupe Scolaire Les Lumières à Tanger : événements scolaires, résultats, sorties, projets éducatifs et nouveautés.',
  path: '/actualites',
  keywords: ['actualités école Tanger', 'événements Les Lumières', 'inscriptions 2026-2027 Tanger'],
});

const articles = [
  {
    title: 'Inscriptions 2026-2027 ouvertes — Places limitées',
    date: '2026-05-15',
    excerpt:
      'Les inscriptions pour l’année scolaire 2026-2027 sont officiellement ouvertes au Groupe Scolaire Les Lumières. Les places étant limitées, nous invitons les familles à nous contacter au plus tôt pour réserver la place de leur enfant, de la maternelle au baccalauréat.',
    img: '/images/actualites/inscriptions.jpg',
    featured: true,
  },
  {
    title: 'L’élève Malak Allouh représente Les Lumières avec distinction',
    date: '2026-04-20',
    excerpt:
      'Nous sommes fiers de notre élève Malak Allouh, qui a brillamment représenté l’école lors d’un concours régional. Une belle réussite qui illustre l’engagement et le talent de nos élèves.',
    img: '/images/actualites/distinction.jpg',
  },
  {
    title: 'Bourse d’excellence pour les élèves méritants',
    date: '2026-03-10',
    excerpt:
      'Le Groupe Scolaire Les Lumières récompense chaque année ses élèves les plus méritants à travers une Bourse d’Excellence, encourageant ainsi l’effort, la rigueur et la réussite.',
    img: '/images/actualites/bourse.jpg',
  },
  {
    title: 'Olympiade Ramadan des mathématiques — Résultats',
    date: '2026-03-01',
    excerpt:
      'L’Olympiade Ramadan des mathématiques a connu un vif succès cette année. Félicitations à tous les participants pour leur logique, leur persévérance et leur esprit de compétition.',
    img: '/images/actualites/olympiade.jpg',
  },
  {
    title: 'Sortie scolaire à Chefchaouen — Souvenirs inoubliables',
    date: '2026-02-12',
    excerpt:
      'Nos élèves ont vécu une journée mémorable à Chefchaouen, la perle bleue du Rif. Une sortie riche en découvertes, en partage et en émerveillement.',
    img: '/images/actualites/sortie.jpg',
  },
];

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('fr-MA', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function ActualitesPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <PageHero
        title="Actualités et Événements"
        subtitle="Toute la vie du Groupe Scolaire Les Lumières : événements, réussites, projets et nouveautés."
        image="/images/campus/campus-3.jpg"
        imageAlt="Événements et actualités du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Vie Scolaire', path: '/activites-parascolaires' }, { name: 'Actualités', path: '/actualites' }]} />

      <section className="section-padding">
        <div className="container-page">
          {/* Featured */}
          <ScrollReveal>
            <article className="card overflow-hidden lg:grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto">
                <Image src={featured.img} alt={featured.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-ink">À la une</span>
              </div>
              <div className="flex flex-col justify-center p-7">
                <span className="mb-2 flex items-center gap-2 text-sm text-ink/50">
                  <Calendar className="h-4 w-4" /> {formatDate(featured.date)}
                </span>
                <h2 className="mb-3 font-heading text-2xl text-primary-800">{featured.title}</h2>
                <p className="text-ink/75">{featured.excerpt}</p>
                <Link href="/inscription-ecole-tanger" className="btn-gold mt-5 self-start text-sm">
                  En savoir plus <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </ScrollReveal>

          {/* Grid */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {rest.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.06}>
                <article className="card card-hover h-full overflow-hidden">
                  <div className="relative aspect-video">
                    <Image src={a.img} alt={a.title} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <span className="mb-2 flex items-center gap-2 text-sm text-ink/50">
                      <Calendar className="h-4 w-4" /> {formatDate(a.date)}
                    </span>
                    <h3 className="mb-2 font-heading text-xl text-primary-800">{a.title}</h3>
                    <p className="text-sm text-ink/70">{a.excerpt}</p>
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
