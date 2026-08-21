'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, BookOpenCheck, CalendarCheck, ChevronDown, Globe2, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';
import { SCHOOL_MEDIA } from '@/lib/media';
import CambridgeBadge from '@/components/shared/CambridgeBadge';
import MediaVideo from '@/components/shared/MediaVideo';

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center justify-center overflow-hidden bg-ink text-white md:min-h-[calc(100svh-6.75rem)]">
      <div className="absolute inset-0">
        <MediaVideo
          src={SCHOOL_MEDIA.hero.src}
          poster={SCHOOL_MEDIA.hero.poster}
          description={SCHOOL_MEDIA.hero.description}
          mode="ambient"
          isHero
          decorative
          className="h-full w-full"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--overlay-media)' }}
      />

      <div className="container-page relative z-10 flex w-full items-center justify-center py-16 text-center md:py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 flex flex-wrap items-center justify-center gap-2.5"
          >
            <span className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-md">
              <Award className="h-4 w-4" aria-hidden="true" />
              Depuis 2004
            </span>
            <CambridgeBadge compact dark />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-shadow-media mx-auto max-w-4xl font-heading text-[clamp(2.25rem,5.4vw,4.75rem)] font-normal leading-[1.02] text-white"
          >
            Groupe Scolaire Les Lumières
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-shadow-media mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-xl"
          >
            École privée trilingue à Tanger, de la Maternelle au Lycée, où l'exigence académique
            rencontre un accompagnement humain et régulier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mx-auto mt-7 flex max-w-3xl flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="/inscription-ecole-tanger"
              className="btn-gold min-h-11 w-full max-w-[18rem] self-center px-5 py-2.5 text-sm sm:w-auto sm:max-w-none md:text-base"
            >
              Inscriptions 2026-2027 <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={whatsappLink('Bonjour, je souhaite prendre rendez-vous pour visiter le Groupe Scolaire Les Lumières.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp min-h-11 w-full max-w-[18rem] self-center px-5 py-2.5 text-sm sm:w-auto sm:max-w-none md:text-base"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> Rendez-vous WhatsApp
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-7 hidden flex-wrap justify-center gap-2.5 text-xs font-semibold text-white/90 sm:flex"
          >
            <li className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
              <Globe2 className="h-4 w-4 text-gold-300" aria-hidden="true" />
              Français, arabe et anglais
            </li>
            <li className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
              <BookOpenCheck className="h-4 w-4 text-gold-300" aria-hidden="true" />
              Méthode de Singapour & Cambridge
            </li>
            <li className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3.5 py-2 backdrop-blur-md">
              <CalendarCheck className="h-4 w-4 text-gold-300" aria-hidden="true" />
              Visites et admissions sur rendez-vous
            </li>
          </motion.ul>

          <motion.a
            href="#decouvrir"
            aria-label="Découvrir les cycles scolaires"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mx-auto mt-7 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:border-gold-300 hover:text-gold-200"
          >
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
