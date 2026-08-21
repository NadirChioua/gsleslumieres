import Link from 'next/link';
import { ArrowRight, Award, BookOpenCheck, Globe2, MessageSquareQuote } from 'lucide-react';
import CambridgeBadge from '@/components/shared/CambridgeBadge';
import MediaVideo from '@/components/shared/MediaVideo';
import { SCHOOL_MEDIA } from '@/lib/media';

const benefits = [
  {
    icon: Globe2,
    title: 'Ouverture internationale',
    text: "Les élèves progressent avec Cambridge Preparation et des repères alignés sur les Cambridge English Qualifications.",
  },
  {
    icon: BookOpenCheck,
    title: 'Anglais structuré',
    text: "L'anglais commence dès la Grande Section, puis Cambridge Preparation se renforce avec des objectifs clairs par cycle.",
  },
  {
    icon: Award,
    title: 'Confiance à l’oral',
    text: "La pratique régulière aide les élèves à parler, écouter et communiquer avec plus d'assurance.",
  },
];

export default function CambridgeSection() {
  return (
    <section className="section-y overflow-hidden bg-[var(--surface)]">
      <div className="container-page">
        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <figure className="order-2 lg:order-1">
            <div className="relative rounded-lg bg-ink p-2 shadow-2xl ring-1 ring-black/10">
              <MediaVideo
                src={SCHOOL_MEDIA.cambridgeInterview.src}
                poster={SCHOOL_MEDIA.cambridgeInterview.poster}
                description={SCHOOL_MEDIA.cambridgeInterview.description}
                mode="feature"
                withSound
                className="aspect-[9/16] max-h-[720px] w-full rounded-md bg-black"
                buttonLabel="Lire l'entretien Cambridge avec Simon"
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-lg border border-white/20 bg-black/45 px-3 py-2 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-md">
                Entretien avec Simon
              </div>
            </div>
            <figcaption className="mt-4 text-sm text-ink/60">
              Témoignage vidéo autour de la collaboration entre Les Lumières et Cambridge.
            </figcaption>
          </figure>

          <div className="order-1 lg:order-2">
            <CambridgeBadge className="mb-5" />
            <span className="eyebrow mb-2 block">Partenariat Cambridge</span>
            <h2 className="max-w-3xl font-heading text-3xl font-normal leading-tight text-primary-900 md:text-5xl">
              Un parcours d’anglais vivant, expliqué par ceux qui l’accompagnent.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/75 md:text-lg">
              La collaboration Cambridge prend du sens quand elle se voit dans le quotidien :
              progression, confiance, objectifs lisibles et ouverture internationale pour les élèves.
            </p>

            <blockquote className="mt-7 rounded-lg bg-primary-900 p-5 text-white shadow-xl md:p-6">
              <MessageSquareQuote className="mb-4 h-8 w-8 text-gold-300" aria-hidden="true" />
              <p className="font-heading text-2xl font-normal leading-snug md:text-3xl">
                Une parole directe sur l'expérience Cambridge au sein du Groupe Scolaire Les Lumières.
              </p>
              <footer className="mt-4 text-sm font-semibold uppercase tracking-wide text-white/70">
                Interview vidéo avec Simon
              </footer>
            </blockquote>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-lg border border-black/5 bg-white p-4 shadow-sm">
                  <benefit.icon className="mb-3 h-5 w-5 text-gold-600" aria-hidden="true" />
                  <h3 className="text-sm font-bold text-primary-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/college-prive-tanger" className="btn-primary px-5 py-2.5 text-sm">
                Découvrir le Collège International <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/maternelle-tanger" className="btn-outline px-5 py-2.5 text-sm">
                Voir le départ dès la Maternelle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
