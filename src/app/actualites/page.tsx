import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, PlayCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import MediaVideo from '@/components/shared/MediaVideo';
import { SCHOOL_MEDIA } from '@/lib/media';
import { SCHOOL_IMAGES } from '@/lib/school-images';
import { LOCALE } from '@/lib/locale';

export const metadata = buildMetadata({
  title: 'Actualités et Événements | Les Lumières Tanger',
  description:
    "Suivez l'actualité du Groupe Scolaire Les Lumières à Tanger : événements scolaires, résultats, sorties, projets éducatifs et nouveautés.",
  path: '/actualites',
  keywords: ['actualités école Tanger', 'événements Les Lumières', 'inscriptions 2026-2027 Tanger'],
});

const articles = [
  {
    title: 'Inscriptions 2026-2027 ouvertes - Places limitées',
    date: '2026-05-15',
    excerpt:
      "Les inscriptions pour l'année scolaire 2026-2027 sont officiellement ouvertes au Groupe Scolaire Les Lumières. Les places étant limitées, nous invitons les familles à nous contacter au plus tôt.",
    img: SCHOOL_IMAGES.cycles.college.hero,
    featured: true,
  },
  {
    title: "L'élève Malak Allouh représente Les Lumières avec distinction",
    date: '2026-04-20',
    excerpt:
      "Nous sommes fiers de notre élève Malak Allouh, qui a brillamment représenté l'école lors d'un concours régional. Une réussite qui illustre l'engagement et le talent de nos élèves.",
    img: SCHOOL_IMAGES.activities.event2,
  },
  {
    title: "Bourse d'excellence pour les élèves méritants",
    date: '2026-03-10',
    excerpt:
      "Le Groupe Scolaire Les Lumières récompense chaque année ses élèves les plus méritants à travers une Bourse d'Excellence, encourageant ainsi l'effort, la rigueur et la réussite.",
    img: SCHOOL_IMAGES.general.results,
  },
  {
    title: 'Olympiade Ramadan des mathématiques - Résultats',
    date: '2026-03-01',
    excerpt:
      "L'Olympiade Ramadan des mathématiques a connu un vif succès cette année. Félicitations à tous les participants pour leur logique, leur persévérance et leur esprit de compétition.",
    img: SCHOOL_IMAGES.activities.sport,
  },
  {
    title: 'Sortie scolaire à Chefchaouen - Souvenirs inoubliables',
    date: '2026-02-12',
    excerpt:
      'Nos élèves ont vécu une journée mémorable à Chefchaouen, la perle bleue du Rif. Une sortie riche en découvertes, en partage et en émerveillement.',
    img: SCHOOL_IMAGES.activities.trip1,
  },
];

const DATE_LOCALE = LOCALE === 'ar' ? 'ar-MA' : LOCALE === 'en' ? 'en-GB' : 'fr-MA';

function parseLocalDate(date: string) {
  const [year, month, day] = date.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function formatMonth(date: string) {
  return new Intl.DateTimeFormat(DATE_LOCALE, { month: 'short' }).format(parseLocalDate(date)).replace('.', '');
}

function formatLongDate(date: string) {
  return new Intl.DateTimeFormat(DATE_LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(parseLocalDate(date));
}

function DateBadge({ date, invert = false }: { date: string; invert?: boolean }) {
  const [, , day] = date.split('-');
  const year = date.slice(0, 4);

  return (
    <time
      dateTime={date}
      aria-label={formatLongDate(date)}
      className={`inline-flex min-h-16 min-w-16 flex-col items-center justify-center rounded-lg px-3 py-2 text-center shadow-sm ${
        invert ? 'bg-cream text-primary-900 ring-1 ring-black/5' : 'bg-primary-800 text-white'
      }`}
    >
      <span className="font-heading text-2xl leading-none">{Number(day)}</span>
      <span className="mt-1 text-xs font-bold uppercase tracking-wider">{formatMonth(date)}</span>
      <span className="text-[0.68rem] opacity-70">{year}</span>
    </time>
  );
}

export default function ActualitesPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        title="Actualités et Événements"
        subtitle="Toute la vie du Groupe Scolaire Les Lumières : événements, réussites, projets et nouveautés."
        image={SCHOOL_IMAGES.activities.event3}
        imageAlt="Événements et actualités du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Vie Scolaire', path: '/activites-parascolaires' }, { name: 'Actualités', path: '/actualites' }]} />

      <section className="section-y">
        <div className="container-page">
          <ScrollReveal>
            <article className="overflow-hidden rounded-lg border border-black/5 bg-white shadow-xl lg:grid lg:grid-cols-[1.08fr_0.92fr]">
              <div className="relative min-h-[320px] lg:min-h-[440px]">
                <Image src={featured.img} alt={featured.title} fill sizes="(max-width:1024px) 100vw, 54vw" className="object-cover" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-sm">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  À la une
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <DateBadge date={featured.date} />
                <h2 className="mt-5 font-heading text-3xl font-normal leading-tight text-primary-800 md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-ink/75">{featured.excerpt}</p>
                <Link href="/inscription-ecole-tanger" className="btn-gold mt-6 self-start text-sm">
                  En savoir plus <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <article className="mt-8 grid overflow-hidden rounded-lg border border-black/5 bg-cream shadow-sm lg:grid-cols-[0.92fr_1.08fr]">
              <MediaVideo
                src={SCHOOL_MEDIA.sport.src}
                poster={SCHOOL_MEDIA.sport.poster}
                description={SCHOOL_MEDIA.sport.description}
                mode="feature"
                autoPlayOnView
                loop
                className="aspect-video min-h-72 w-full lg:aspect-auto lg:h-full"
                buttonLabel="Lire la vidéo des activités scolaires"
              />
              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-700">
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                  Blog vidéo
                </span>
                <h2 className="font-heading text-3xl font-normal leading-tight text-primary-800 md:text-4xl">
                  Les activités scolaires en images
                </h2>
                <p className="mt-4 text-ink/75">
                  Un aperçu vidéo du quotidien Les Lumières : discipline, énergie, coopération et moments de partage
                  au sein de l’établissement.
                </p>
                <Link href="/galerie" className="btn-outline mt-6 self-start text-sm">
                  Voir plus de vidéos <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {rest.map((article, index) => (
              <ScrollReveal key={article.title} delay={index * 0.06}>
                <article className="group grid h-full overflow-hidden rounded-lg border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[0.72fr_1.28fr]">
                  <div className="relative min-h-52 overflow-hidden">
                    <Image
                      src={article.img}
                      alt={article.title}
                      fill
                      sizes="(max-width:768px) 100vw, 34vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <DateBadge date={article.date} invert />
                    <h3 className="mt-4 font-heading text-2xl font-normal leading-tight text-primary-800">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{article.excerpt}</p>
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
