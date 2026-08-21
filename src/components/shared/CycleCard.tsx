import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, GraduationCap } from 'lucide-react';
import MediaVideo from '@/components/shared/MediaVideo';

interface CycleCardProps {
  slug: string;
  name: string;
  tagline: string;
  features: readonly string[];
  image: string;
  imageAlt: string;
  videoPreview?: {
    src: string;
    poster: string;
    description: string;
  };
}

export default function CycleCard({
  slug,
  name,
  tagline,
  features,
  image,
  imageAlt,
  videoPreview,
}: CycleCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="group relative flex min-h-[430px] overflow-hidden rounded-lg bg-ink shadow-lg ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="absolute inset-0 overflow-hidden">
        {videoPreview ? (
          <MediaVideo
            src={videoPreview.src}
            poster={videoPreview.poster}
            description={videoPreview.description}
            mode="ambient"
            decorative
            className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <span
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14),rgba(26,26,46,0.28)_38%,rgba(26,26,46,0.9))]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex min-h-[430px] w-full flex-col justify-between p-5 text-white">
        <div className="flex justify-end">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-primary-800 shadow-sm">
            <GraduationCap className="h-4 w-4 text-gold-600" aria-hidden="true" />
          </span>
        </div>

        <div>
          <h3 className="text-2xl font-bold leading-tight text-white">{name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/80">{tagline}</p>
          <ul className="mt-4 space-y-1.5">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-primary-900 transition group-hover:bg-gold-500">
            En savoir plus
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
