'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { Award, CalendarCheck, Clock, Globe2, MapPin, Route } from 'lucide-react';
import { SCHOOL, whatsappLink } from '@/lib/constants';

const milestones = [
  {
    marker: '2004',
    label: 'Fondation',
    title: 'Une école installée durablement à Tanger',
    body: `Depuis 2004, Les Lumières accompagne les familles avec un cadre scolaire stable, exigeant et attentif à chaque élève.`,
    icon: Award,
  },
  {
    marker: 'Cycles',
    label: 'Parcours',
    title: 'Un même établissement, de la Maternelle au Lycée',
    body: 'Les élèves avancent dans un parcours lisible : éveil en maternelle, bases solides au primaire, ouverture internationale au collège et orientation au lycée.',
    icon: Route,
  },
  {
    marker: 'GS+',
    label: 'Langues',
    title: 'Français, arabe et anglais avec progression continue',
    body: "L'anglais commence dès la Grande Section, avec Cambridge Preparation progressive dans les cycles avancés.",
    icon: Globe2,
  },
  {
    marker: '2026',
    label: 'Admissions',
    title: 'Inscriptions ouvertes pour 2026-2027',
    body: "Les familles peuvent demander une pré-inscription, poser leurs questions et planifier une visite afin de confirmer le niveau et la disponibilité.",
    icon: CalendarCheck,
  },
  {
    marker: '8h45',
    label: 'Accueil',
    title: 'Une équipe joignable pendant la semaine scolaire',
    body: `Horaires scolaires officiels : 08h45 à 12h30. Pour les visites et les inscriptions, contactez-nous au ${SCHOOL.phone1}.`,
    icon: Clock,
  },
];

export default function SchoolDatesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="section-y overflow-hidden bg-ink text-white">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow mb-3 block text-gold-300">Dates clés</span>
            <h2 className="font-heading text-4xl font-normal leading-tight text-white md:text-5xl">
              Les repères qui comptent pour les familles
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Une lecture rapide de l'histoire, du parcours et des dates pratiques de l'école, pensée
              pour les parents qui veulent comprendre l'essentiel sans chercher.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/inscription-ecole-tanger" className="btn-gold">
                Pré-inscription 2026-2027
              </Link>
              <a
                href={whatsappLink('Bonjour, je souhaite connaître les dates et disponibilités pour une inscription au Groupe Scolaire Les Lumières.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white"
              >
                Planifier une visite
              </a>
            </div>
          </div>

          <ol className="space-y-5 lg:space-y-0">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === milestones.length - 1;

              return (
                <li
                  key={item.label}
                  className={isLast ? 'relative' : 'relative lg:min-h-[52vh]'}
                  style={{ zIndex: index + 1 }}
                >
                  <motion.article
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-6 rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur md:grid-cols-[0.72fr_1.28fr] md:p-7 lg:sticky lg:top-28"
                  >
                    <div className="flex flex-col justify-between gap-5">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500 text-ink">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="text-sm font-semibold uppercase tracking-wider text-gold-200">
                          {item.label}
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        className="font-heading text-[clamp(3.2rem,10vw,7rem)] leading-[0.82] text-white/20"
                      >
                        {item.marker}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-heading text-3xl font-normal leading-tight text-white md:text-4xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-white/75">{item.body}</p>
                      {isLast && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${SCHOOL.geo.latitude},${SCHOOL.geo.longitude}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-200"
                        >
                          <MapPin className="h-4 w-4" aria-hidden="true" />
                          Ouvrir l'adresse
                        </a>
                      )}
                    </div>
                  </motion.article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
