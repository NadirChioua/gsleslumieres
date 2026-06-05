import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { WHY_US } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import FeatureCard from '@/components/shared/FeatureCard';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function WhyUsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <SectionTitle
          eyebrow="Nos atouts"
          title="Pourquoi choisir Les Lumières ?"
          subtitle="Plus de deux décennies d’expérience au service de la réussite et de l’épanouissement de chaque élève."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.08}>
              <FeatureCard icon={f.icon} title={f.title} description={f.description} />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/pourquoi-les-lumieres" className="btn-outline">
            Découvrir toutes nos raisons <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
