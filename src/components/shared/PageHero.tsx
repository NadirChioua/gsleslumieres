import Image from 'next/image';
import type { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  badge?: string;
}

/** Standard inner-page hero with image background + bordeaux overlay. */
export default function PageHero({
  title,
  subtitle,
  image = '/images/campus/campus-1.jpg',
  imageAlt = 'Campus du Groupe Scolaire Les Lumières à Tanger',
  badge,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary-900">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/60" aria-hidden="true" />
      <div className="container-page relative py-16 text-white md:py-24">
        {badge && (
          <span className="mb-4 inline-block rounded-full bg-gold-500 px-4 py-1.5 text-sm font-semibold text-ink">
            {badge}
          </span>
        )}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
