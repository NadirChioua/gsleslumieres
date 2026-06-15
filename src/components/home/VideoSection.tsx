import Image from 'next/image';
import Link from 'next/link';
import { Play, ArrowRight } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';

export default function VideoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Vie scolaire"
          title="Découvrez l’atmosphère Les Lumières"
          subtitle="Un aperçu visuel de l’encadrement, de l’exigence et de l’environnement dans lequel les élèves grandissent."
        />
        <div className="grid overflow-hidden rounded-2xl border border-black/5 bg-cream shadow-xl lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[340px] lg:min-h-[460px]">
            <Image
              src="/images/campaign/primaire-inscriptions-2026.jpg"
              alt="Présentation visuelle du Groupe Scolaire Les Lumières"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20" />
            <span className="absolute left-6 top-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-primary-800 shadow-lg">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <h3 className="font-heading text-3xl text-primary-800">Une école à visiter, pas seulement à lire</h3>
            <p className="mt-4 text-ink/75">
              Les parents doivent pouvoir ressentir le sérieux de l’établissement, la qualité de l’encadrement
              et la cohérence du parcours avant même la visite. Cette zone est prête à recevoir une vidéo officielle
              YouTube ou Vimeo dès qu’elle sera disponible.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href="/galerie" className="btn-outline">
                Voir la galerie <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-primary">
                Planifier une visite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
