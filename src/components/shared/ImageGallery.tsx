'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  categories?: { key: string; label: string }[];
}

export default function ImageGallery({ images, categories }: ImageGalleryProps) {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = filter === 'all' ? images : images.filter((i) => i.category === filter);

  const move = (dir: number) => {
    if (lightbox === null) return;
    const next = (lightbox + dir + visible.length) % visible.length;
    setLightbox(next);
  };

  return (
    <div>
      {categories && (
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          <FilterBtn active={filter === 'all'} onClick={() => setFilter('all')} label="Tout" />
          {categories.map((c) => (
            <FilterBtn key={c.key} active={filter === c.key} onClick={() => setFilter(c.key)} label={c.label} />
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setLightbox(i)}
            className="group relative aspect-square overflow-hidden rounded-lg"
            aria-label={`Agrandir : ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-primary-900/0 transition-colors group-hover:bg-primary-900/20" />
          </button>
        ))}
      </div>

      {lightbox !== null && visible[lightbox] && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
            className="absolute right-4 top-4 text-white/80 hover:text-white"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); move(-1); }}
            aria-label="Précédent"
            className="absolute left-3 text-white/80 hover:text-white"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={visible[lightbox].src}
              alt={visible[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
            <p className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 text-center text-sm text-white">
              {visible[lightbox].alt}
            </p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); move(1); }}
            aria-label="Suivant"
            className="absolute right-3 text-white/80 hover:text-white"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      )}
    </div>
  );
}

function FilterBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
        active ? 'bg-primary-800 text-white' : 'bg-white text-ink/70 hover:bg-cream border border-black/5'
      }`}
    >
      {label}
    </button>
  );
}
