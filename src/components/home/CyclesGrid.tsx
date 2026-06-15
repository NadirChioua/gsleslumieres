import { CYCLES } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import CycleCard from '@/components/shared/CycleCard';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function CyclesGrid() {
  return (
    <section id="decouvrir" className="section-padding">
      <div className="container-page">
        <SectionTitle
          eyebrow="Cycles"
          title="Un parcours complet, de 3 à 18 ans"
          subtitle="Quatre cycles scolaires dans un même établissement, pour accompagner votre enfant de la maternelle jusqu’au lycée."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CYCLES.map((c, i) => (
            <ScrollReveal key={c.slug} delay={i * 0.1}>
              <CycleCard
                slug={c.slug}
                name={c.name}
                features={c.features}
                image={c.image}
                imageAlt={c.imageAlt}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
