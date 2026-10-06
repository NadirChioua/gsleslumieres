'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';

type MediaVideoMode = 'ambient' | 'feature';

interface MediaVideoProps {
  src: string;
  poster: string;
  /** Lighter portrait cut used on phones (hero only). */
  mobileSrc?: string;
  mobilePoster?: string;
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
  mobileSrc,
  mobilePoster,
  description,
  mode = 'ambient',
  isHero = false,
  decorative = false,
  autoPlayOnView = false,
  withSound = false,
  showControls,
  loop,
  usePoster = true,
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
  // Hero video: render the poster first (fast LCP), attach the video only after the page has loaded.
  const [heroSrc, setHeroSrc] = useState<string | undefined>(undefined);
  const [isPhone, setIsPhone] = useState(false);
  // Other videos: attach poster and source only when the block comes near the viewport, so
  // below-the-fold media never competes with the first screen.
  const [near, setNear] = useState(false);

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
    setIsPhone(window.matchMedia('(max-width: 767px)').matches);
  }, []);

  useEffect(() => {
    if (!isHero) return;
    const attach = () => setHeroSrc(isPhone && mobileSrc ? mobileSrc : src);
    if (document.readyState === 'complete') {
      const t = window.setTimeout(attach, 300);
      return () => window.clearTimeout(t);
    }
    const onLoad = () => window.setTimeout(attach, 300);
    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, [isHero, isPhone, mobileSrc, src]);

  useEffect(() => {
    const container = containerRef.current;
    if (isHero || !container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: '800px 0px' }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [isHero]);

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
    if (!video || !container || !shouldAutoPlay || (isHero ? !heroSrc : !near)) {
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
  }, [shouldAutoPlay, isHero, heroSrc, near, play]);

  const showButton =
    !decorative &&
    (blocked || (!started && (mode === 'feature' || autoPlayOnView) && !shouldAutoPlay));

  return (
    <div ref={containerRef} className={cx('relative isolate overflow-hidden bg-ink', className)}>
      {isHero && (
        // Responsive still under the video: it is the LCP element and loads with high priority.
        <picture>
          {mobilePoster && <source media="(max-width: 767px)" srcSet={mobilePoster} />}
          <img
            src={poster}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            decoding="async"
            className={cx('absolute inset-0 h-full w-full object-cover', videoClassName)}
          />
        </picture>
      )}
      <video
        ref={videoRef}
        src={isHero ? heroSrc : near ? src : undefined}
        poster={usePoster && !isHero && near ? poster : undefined}
        muted={muted}
        loop={shouldLoop}
        playsInline
        // The autoplay attribute would start downloading every video at page load; non-hero
        // videos are started by the IntersectionObserver instead.
        autoPlay={isHero && shouldAutoPlay}
        controls={!decorative && shouldShowControls}
        preload={isHero && heroSrc ? 'auto' : 'none'}
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
