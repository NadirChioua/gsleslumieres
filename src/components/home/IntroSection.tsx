import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/shared/ScrollReveal';
import MediaVideo from '@/components/shared/MediaVideo';
import { SCHOOL_MEDIA } from '@/lib/media';

export default function IntroSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <ScrollReveal>
          <span className="eyebrow mb-2 block">Bienvenue</span>
          <h2 className="text-3xl font-bold text-primary-800 md:text-4xl">
            Le Groupe Scolaire Les Lumières, l'excellence éducative à Tanger
          </h2>
          <div className="mt-5 space-y-4 text-ink/80">
            <p>
              Le <strong>Groupe Scolaire Les Lumières</strong> est une école privée trilingue
              <strong> fondée en 2004</strong>, située dans le quartier <strong>Val Fleuri à Tanger</strong>.
              L'établissement accueille les élèves de la <strong>maternelle au lycée</strong> dans un cadre
              qui valorise l'exigence, la stabilité et le suivi régulier.
            </p>
            <p>
              L'école combine le <strong>français</strong>, l'<strong>arabe</strong> et l'<strong>anglais</strong>,
              la <strong>Méthode de Singapour</strong> en mathématiques, la préparation
              <strong> Cambridge English Qualifications</strong> et une vie scolaire riche : théâtre,
              chorale, arts, sport et voyages scolaires.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/qui-sommes-nous" className="btn-primary">
              Qui sommes-nous <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="btn-outline">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Nous trouver
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <figure>
            <MediaVideo
              src={SCHOOL_MEDIA.location.src}
              poster={SCHOOL_MEDIA.location.poster}
              description={SCHOOL_MEDIA.location.description}
              mode="feature"
              autoPlayOnView
              loop
              className="aspect-[4/5] w-full rounded-lg shadow-xl md:aspect-video lg:aspect-[4/5]"
              buttonLabel="Lire la video de localisation"
            />
            <figcaption className="mt-4 text-sm text-ink/70">
              Vue du quartier Val Fleuri et de l'environnement immédiat de l'école.
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  );
}
