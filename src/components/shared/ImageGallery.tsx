'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  categories?: readonly { key: string; label: string }[];
}

function tileClass(index: number) {
  if (index % 9 === 0) return 'row-span-2';
  if (index % 7 === 0) return 'sm:col-span-2';
  return '';
}

export default function ImageGallery({ images, categories }: ImageGalleryProps) {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => (filter === 'all' ? images : images.filter((image) => image.category === filter)),
    [filter, images]
  );

  const closeLightbox = () => setLightbox(null);

  const move = (dir: number) => {
    setLightbox((current) => {
      if (current === null || visible.length === 0) return current;
      return (current + dir + visible.length) % visible.length;
    });
  };

  useEffect(() => {
    if (lightbox === null) return;

    const previousActive = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => dialogRef.current?.focus(), 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        move(-1);
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        move(1);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      );

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActive?.focus();
    };
  }, [lightbox, visible.length]);

  return (
    <div>
      {categories && (
        <div className="mb-8 flex flex-wrap justify-center gap-2" role="list" aria-label="Filtrer la galerie">
          <FilterBtn active={filter === 'all'} onClick={() => setFilter('all')} label="Tout" />
          {categories.map((category) => (
            <FilterBtn
              key={category.key}
              active={filter === category.key}
              onClick={() => setFilter(category.key)}
              label={category.label}
            />
          ))}
        </div>
      )}

      <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:grid-cols-3 md:auto-rows-[190px] lg:grid-cols-4">
        {visible.map((img, index) => (
          <button
            key={img.src + index}
            type="button"
            onClick={() => setLightbox(index)}
            className={`group relative min-h-11 overflow-hidden rounded-lg ${tileClass(index)}`}
            aria-label={`Agrandir : ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-primary-900/0 transition-colors group-hover:bg-primary-900/20" aria-hidden="true" />
          </button>
        ))}
      </div>

      {lightbox !== null && visible[lightbox] && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-dialog-title"
          tabIndex={-1}
        >
          <h2 id="gallery-dialog-title" className="sr-only">
            Aperçu de la galerie
          </h2>
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Fermer"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <X className="h-7 w-7" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              move(-1);
            }}
            aria-label="Image précédente"
            className="absolute left-3 inline-flex h-12 w-12 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronLeft className="h-9 w-9" aria-hidden="true" />
          </button>
          <div className="relative h-[80vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={visible[lightbox].src} alt={visible[lightbox].alt} fill sizes="100vw" className="object-contain" />
            <p className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-center text-sm text-white">
              {visible[lightbox].alt} · {lightbox + 1}/{visible.length}
            </p>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              move(1);
            }}
            aria-label="Image suivante"
            className="absolute right-3 inline-flex h-12 w-12 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            <ChevronRight className="h-9 w-9" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}

function FilterBtn({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-h-11 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'bg-primary-800 text-white shadow-sm'
          : 'border border-black/5 bg-white text-ink/70 hover:bg-cream hover:text-primary-800'
      }`}
    >
      {label}
    </button>
  );
}
