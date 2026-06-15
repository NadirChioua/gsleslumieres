'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, CalendarCheck, MessageCircle } from 'lucide-react';
import { SCHOOL, whatsappLink } from '@/lib/constants';
import CambridgeBadge from '@/components/shared/CambridgeBadge';

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden bg-[#5f0710]">
      <Image
        src="/images/campaign/lycee-inscriptions-2026.jpg"
        alt="Campagne inscriptions lycée 2026-2027 du Groupe Scolaire Les Lumières"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(63,4,12,0.96)_0%,rgba(93,7,16,0.88)_42%,rgba(93,7,16,0.42)_74%,rgba(93,7,16,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#5f0710] to-transparent" />

      <div className="container-page relative z-10 flex min-h-[92vh] items-center py-20 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-5 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-sm font-bold text-ink shadow-lg">
              <Award className="h-4 w-4" />
              {SCHOOL.yearsOfExperience} ans d'excellence
            </span>
            <CambridgeBadge compact />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl font-bold leading-tight md:text-6xl"
          >
            École privée trilingue à Tanger, de la Maternelle au Lycée
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Un parcours académique exigeant, une pédagogie moderne et un accompagnement régulier
            pour aider chaque élève à construire les bases de sa réussite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/inscription-ecole-tanger" className="btn-gold text-base">
              Inscriptions 2026-2027 <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={whatsappLink('Bonjour, je souhaite prendre rendez-vous pour visiter le Groupe Scolaire Les Lumières.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <MessageCircle className="h-5 w-5" /> Prendre rendez-vous
            </a>
            <Link href="/contact" className="btn-outline-white text-base">
              <CalendarCheck className="h-5 w-5" /> Visiter l'école
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-9 grid max-w-2xl gap-3 text-sm text-white/85 sm:grid-cols-3"
          >
            <li className="rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur">
              Français, arabe et anglais
            </li>
            <li className="rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur">
              Méthodes pédagogiques modernes
            </li>
            <li className="rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur">
              Suivi pédagogique régulier
            </li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
