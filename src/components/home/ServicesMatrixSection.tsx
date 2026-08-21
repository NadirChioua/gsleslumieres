import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import Icon from '@/components/shared/Icon';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function ServicesMatrixSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Services disponibles"
          title="Cantine, transport et équipements au service des familles"
          subtitle="Des services utiles et clairement identifiés pour accompagner le quotidien scolaire de votre enfant."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.07}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-lg border border-black/5 bg-cream p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-800 text-white shadow-sm">
                  <Icon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="font-heading text-2xl font-normal leading-tight text-primary-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary-800 transition group-hover:text-gold-700">
                  En savoir plus
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
