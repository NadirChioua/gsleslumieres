'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/constants';
import SectionTitle from '@/components/shared/SectionTitle';
import TestimonialCard from '@/components/shared/TestimonialCard';

const PER_VIEW_DESKTOP = 3;

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const pages = Math.ceil(TESTIMONIALS.length / PER_VIEW_DESKTOP);

  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          eyebrow="Témoignages"
          title="Ce que disent les parents"
          subtitle="La confiance des familles est notre plus belle récompense."
        />

        {/* Desktop: paged grid */}
        <div className="hidden overflow-hidden md:block">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: pages }).map((_, p) => (
              <div key={p} className="grid w-full shrink-0 grid-cols-3 gap-6">
                {TESTIMONIALS.slice(p * PER_VIEW_DESKTOP, p * PER_VIEW_DESKTOP + PER_VIEW_DESKTOP).map((t) => (
                  <TestimonialCard key={t.name + t.quote} {...t} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:hidden">
          {TESTIMONIALS.map((t) => (
            <div key={t.name + t.quote} className="w-[85%] shrink-0 snap-center">
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Dots (desktop) */}
        <div className="mt-8 hidden justify-center gap-2 md:flex">
          {Array.from({ length: pages }).map((_, p) => (
            <button
              key={p}
              onClick={() => setIndex(p)}
              aria-label={`Aller au groupe de témoignages ${p + 1}`}
              aria-pressed={index === p}
              className="flex h-11 w-11 items-center justify-center rounded-full"
            ><span className={`h-2.5 rounded-full transition-all ${index === p ? 'w-6 bg-primary-800' : 'w-2.5 bg-gold-300'}`} /></button>
          ))}
        </div>
      </div>
    </section>
  );
}
