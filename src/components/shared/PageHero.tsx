import Image from 'next/image';
import type { ReactNode } from 'react';
import MediaVideo from './MediaVideo';
import { SCHOOL_IMAGES } from '@/lib/school-images';

interface HeroVideo {
  src: string;
  poster: string;
  description: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: ReactNode;
  image?: string;
  imageAlt?: string;
  badge?: string;
  video?: HeroVideo;
}

/** Standard inner-page hero with image background + bordeaux overlay. */
export default function PageHero({
  title,
  subtitle,
  image = SCHOOL_IMAGES.general.heroCampus,
  imageAlt = 'Campus du Groupe Scolaire Les Lumières à Tanger',
  badge,
  video,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-900">
      {video ? (
        <MediaVideo
          src={video.src}
          poster={video.poster}
          description={video.description}
          mode="ambient"
          isHero
          decorative
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
      )}
      <div
        className={
          video
            ? 'absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.44),rgba(0,0,0,0.2)_38%,rgba(0,0,0,0.62)),radial-gradient(circle_at_50%_48%,rgba(26,26,46,0.34),rgba(115,22,22,0.2)_44%,rgba(0,0,0,0.28))]'
            : 'absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/60'
        }
        aria-hidden="true"
      />
      <div
        className={`container-page relative flex min-h-[420px] items-center py-14 text-white md:min-h-[520px] md:py-20 ${
          video ? 'justify-center text-center' : ''
        }`}
      >
        <div className={video ? 'mx-auto max-w-3xl' : 'max-w-4xl'}>
          {badge && (
            <span className="mb-4 inline-block rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-ink shadow-lg">
              {badge}
            </span>
          )}
          <h1
            className={`font-heading font-normal leading-tight text-white ${
              video ? 'mx-auto max-w-3xl text-3xl md:text-5xl' : 'max-w-4xl text-3xl md:text-5xl'
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p className={`mt-4 text-base leading-relaxed text-white/90 md:text-lg ${video ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
