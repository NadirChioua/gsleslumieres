import { CYCLES } from '@/lib/constants';
import { CYCLE_VIDEO_PREVIEWS } from '@/lib/media';
import SectionTitle from '@/components/shared/SectionTitle';
import CycleCard from '@/components/shared/CycleCard';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CyclesGrid() {
  return (
    <section id="decouvrir" className="section-y bg-[var(--surface)]">
      <div className="container-page">
        <SectionTitle
          eyebrow="Cycles"
          title="Un parcours complet, de la Maternelle au Lycée"
          subtitle="Chaque cycle garde son rythme, son niveau d'exigence et son accompagnement, dans un même établissement."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CYCLES.map((cycle, index) => (
            <ScrollReveal key={cycle.slug} delay={index * 0.08}>
              <CycleCard
                slug={cycle.slug}
                name={cycle.name}
                tagline={cycle.tagline}
                features={cycle.features}
                image={cycle.image}
                imageAlt={cycle.imageAlt}
                videoPreview={CYCLE_VIDEO_PREVIEWS[cycle.slug]}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
