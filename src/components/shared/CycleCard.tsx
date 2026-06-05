import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

interface CycleCardProps {
  slug: string;
  name: string;
  ages: string;
  features: readonly string[];
  image: string;
  imageAlt: string;
}

export default function CycleCard({ slug, name, ages, features, image, imageAlt }: CycleCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-800">
          {ages}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-3 text-xl font-bold text-primary-800">{name}</h3>
        <ul className="mb-4 flex-1 space-y-1.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-ink/70">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              {f}
            </li>
          ))}
        </ul>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-colors group-hover:text-gold-600">
          En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
