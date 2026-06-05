'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Award } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-primary-900">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Élèves heureux dans la cour du Groupe Scolaire Les Lumières à Tanger"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-primary-800/40"
        aria-hidden="true"
      />

      <div className="container-page relative z-10 py-20 text-white">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-block rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-ink shadow-lg"
        >
          {SCHOOL.yearsOfExperience} ans d’excellence éducative à Tanger
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl"
        >
          École Privée Trilingue à Tanger — De la Maternelle au Baccalauréat
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-2xl text-lg text-white/90 md:text-xl"
        >
          Un environnement chaleureux, stimulant et sécurisé où chaque enfant apprend,
          s’épanouit et construit son avenir.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/inscription-ecole-tanger" className="btn-gold text-base">
            Inscriptions 2026-2027 <ArrowRight className="h-5 w-5" />
          </Link>
          <a href="#decouvrir" className="btn-outline-white text-base">
            Découvrir notre école <ArrowRight className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-3 text-sm text-white/80"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
            <Award className="h-5 w-5 text-gold-400" />
          </span>
          <span>We prepare for Cambridge English Qualifications</span>
        </motion.div>
      </div>

      <a
        href="#decouvrir"
        aria-label="Faire défiler vers le bas"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </section>
  );
}
