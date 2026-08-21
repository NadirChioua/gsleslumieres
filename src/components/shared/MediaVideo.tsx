'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

type MediaVideoMode = 'ambient' | 'feature';

interface MediaVideoProps {
  src: string;
  poster: string;
  description?: string;
  mode?: MediaVideoMode;
  isHero?: boolean;
  decorative?: boolean;
  autoPlayOnView?: boolean;
  withSound?: boolean;
  showControls?: boolean;
  loop?: boolean;
  usePoster?: boolean;
  className?: string;
  videoClassName?: string;
  buttonLabel?: string;
}

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export default function MediaVideo({
  src,
  poster,
  description,
  mode = 'ambient',
  isHero = false,
  decorative = false,
  autoPlayOnView = false,
  withSound = false,
  showControls,
  loop,
  usePoster = false,
  className,
  videoClassName,
  buttonLabel = 'Lire la video',
}: MediaVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [saveData, setSaveData] = useState(false);
  const [started, setStarted] = useState(false);
  const [blocked, setBlocked] = useState(false);

  const isAmbient = mode === 'ambient';
  const shouldAutoPlay = (isAmbient || autoPlayOnView) && !prefersReducedMotion && !saveData;
  const muted = shouldAutoPlay || !withSound;
  const shouldLoop = loop ?? isAmbient;
  const shouldShowControls = showControls ?? (mode === 'feature' && !autoPlayOnView);

  useEffect(() => {
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean };
        mozConnection?: { saveData?: boolean };
        webkitConnection?: { saveData?: boolean };
      }
    ).connection;

    setSaveData(Boolean(connection?.saveData));
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) setStarted(true);
  }, []);

  const play = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.preload === 'none' && video.readyState === 0) {
      video.load();
    }

    try {
      await video.play();
      setBlocked(false);
      setStarted(true);
    } catch {
      setBlocked(true);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container || !shouldAutoPlay) {
      video?.pause();
      return;
    }

    if (isHero) {
      void play();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void play();
        } else {
          video.pause();
        }
      },
      { rootMargin: '100px', threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldAutoPlay, isHero, play]);

  const showButton =
    !decorative &&
    (blocked || (!started && (mode === 'feature' || autoPlayOnView) && !shouldAutoPlay));

  return (
    <div ref={containerRef} className={cx('relative isolate overflow-hidden bg-ink', className)}>
      <video
        ref={videoRef}
        src={src}
        poster={usePoster ? poster : undefined}
        muted={muted}
        loop={shouldLoop}
        playsInline
        autoPlay={shouldAutoPlay}
        controls={!decorative && shouldShowControls}
        preload={isHero || shouldAutoPlay || mode === 'feature' ? 'auto' : 'metadata'}
        aria-hidden={decorative ? 'true' : undefined}
        aria-label={!decorative ? description : undefined}
        tabIndex={decorative ? -1 : undefined}
        onPlay={() => setStarted(true)}
        onPause={() => {
          if (shouldAutoPlay) setStarted(false);
        }}
        className={cx(
          'absolute inset-0 h-full w-full object-cover',
          videoClassName
        )}
      />
      {showButton && (
        <button
          type="button"
          aria-label={buttonLabel}
          onClick={play}
          className="absolute left-1/2 top-1/2 z-10 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary-900 shadow-xl ring-1 ring-white/40 transition hover:scale-105 hover:bg-gold-500 focus-visible:ring-gold-500"
        >
          <Play className="ml-1 h-6 w-6 fill-current" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
