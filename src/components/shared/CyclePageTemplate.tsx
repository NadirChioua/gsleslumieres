import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, Languages } from 'lucide-react';
import type { CycleContent } from '@/lib/cycles-content';
import { getTestimonial } from '@/lib/cycles-content';
import PageHero from './PageHero';
import BreadCrumb from './BreadCrumb';
import SectionTitle from './SectionTitle';
import Icon from './Icon';
import ScrollReveal from './ScrollReveal';
import TestimonialCard from './TestimonialCard';
import CTASection from './CTASection';
import JsonLd from '@/components/seo/JsonLd';
import { courseSchema } from '@/lib/schema';
import { CYCLES } from '@/lib/constants';
import CambridgeBadge from './CambridgeBadge';

export default function CyclePageTemplate({ data }: { data: CycleContent }) {
  const testimonial = getTestimonial(data.testimonialName);
  const others = CYCLES.filter((c) => c.slug !== data.slug);

  return (
    <>
      <JsonLd data={courseSchema(data.name, data.metaDescription, `/${data.slug}`)} />
      <PageHero
        title={data.h1}
        subtitle={data.heroSubtitle}
        image={data.heroImage}
        imageAlt={data.heroImageAlt}
        badge="Inscriptions 2026-2027 ouvertes"
        video={data.heroVideo}
      />
      <BreadCrumb
        items={[
          { name: 'Cycles', path: '/maternelle-tanger' },
          { name: data.breadcrumbName, path: `/${data.slug}` },
        ]}
      />

      {/* Intro */}
      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="rich-text lg:col-span-2">
            <h2 className="text-2xl font-bold text-primary-800 md:text-3xl">
              Présentation du cycle {data.name}
            </h2>
            {data.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="h-fit rounded-xl border border-gold-200 bg-gold-50 p-6">
            <h3 className="mb-3 font-heading text-xl text-primary-800">Points forts</h3>
            <ul className="space-y-2.5">
              {data.advantages.map((a) => (
                <li key={a} className="flex items-start gap-2 text-sm text-ink/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  {a}
                </li>
              ))}
            </ul>
            <Link href="/inscription-ecole-tanger" className="btn-primary mt-5 w-full text-sm">
              {data.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>

      {/* Levels */}
      <section className="section-padding bg-cream">
        <div className="container-page">
          <SectionTitle eyebrow="Niveaux" title={`Les niveaux du cycle ${data.name}`} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.levels.map((l, i) => (
              <ScrollReveal key={l.level} delay={i * 0.06}>
                <div className="card h-full p-6">
                  <span className="mb-2 inline-block rounded-md bg-primary-800 px-3 py-1 text-sm font-semibold text-white">
                    {l.level}
                  </span>
                  <p className="mt-2 text-sm text-ink/70">{l.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="Programme" title="Matières & disciplines" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.subjects.map((s) => (
              <div key={s.name} className="flex items-center gap-3 rounded-lg border border-black/5 bg-white p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-800">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-medium text-ink">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods + Languages */}
      <section className="section-padding bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Pédagogie" title="Nos méthodes d’enseignement" align="left" />
            <div className="space-y-4">
              {data.methods.map((m) => (
                <div key={m.title} className="card p-5">
                  <h3 className="mb-1 font-bold text-primary-800">{m.title}</h3>
                  <p className="text-sm text-ink/70">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Trilingue" title="Les langues enseignées" align="left" />
            <CambridgeBadge className="mb-4" />
            <div className="space-y-4">
              {data.languages.map((l) => (
                <div key={l.lang} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
                  <Languages className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <div>
                    <span className="font-bold text-ink">{l.lang}</span>
                    <p className="text-sm text-ink/70">{l.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="En images" title={`La vie en ${data.name}`} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {data.gallery.map((g) => (
              <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-cream">
        <div className="container-page max-w-2xl">
          <SectionTitle eyebrow="Témoignage" title="La parole aux parents" />
          <TestimonialCard {...testimonial} />
        </div>
      </section>

      {/* Cross-links */}
      <section className="border-t border-black/5 py-10">
        <div className="container-page">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-ink/50">
            Découvrez aussi nos autres cycles
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {others.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="btn-outline px-4 py-2 text-sm">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Inscrivez votre enfant en ${data.name}`}
        whatsappText={`Bonjour, je souhaite des informations sur les inscriptions en ${data.name} au Groupe Scolaire Les Lumières.`}
      />
    </>
  );
}
