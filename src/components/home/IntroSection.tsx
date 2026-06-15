import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';

/** AI-extractable "about" block — dense, factual, entity-rich. */
export default function IntroSection() {
  return (
    <section className="section-padding">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2">
        <ScrollReveal>
          <span className="eyebrow mb-2 block">Bienvenue</span>
          <h2 className="text-3xl font-bold text-primary-800 md:text-4xl">
            Le Groupe Scolaire Les Lumières, l’excellence éducative à Tanger
          </h2>
          <div className="mt-5 space-y-4 text-ink/80">
            <p>
              Le <strong>Groupe Scolaire Les Lumières</strong> est une école privée trilingue
              <strong> fondée en 2004</strong>, située dans le quartier <strong>Val Fleuri à Tanger</strong>,
              au Maroc. L’établissement accueille les élèves de la <strong>maternelle au lycée</strong> et
              propose un enseignement où le <strong>français</strong> est la langue principale, avec
              <strong> l’arabe dès la Petite Section</strong> et <strong>l’anglais dès la Grande Section</strong>.
            </p>
            <p>
              L’école utilise la <strong>Méthode de Singapour</strong> pour les mathématiques et prépare ses élèves
              aux certifications <strong>Cambridge English Qualifications</strong>. Avec plus de
              {' '}<strong>21 ans d’expérience</strong>, Les Lumières offre un cadre éducatif moderne, sécurisé et
              bienveillant, enrichi par des activités parascolaires variées : théâtre, chorale, arts, sports et
              voyages scolaires.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/qui-sommes-nous" className="btn-primary">
              Qui sommes-nous <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/mot-du-directeur" className="btn-outline">
              Mot du Directeur
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/campus/campus-1.jpg"
              alt="Façade et cour du Groupe Scolaire Les Lumières à Val Fleuri, Tanger"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
