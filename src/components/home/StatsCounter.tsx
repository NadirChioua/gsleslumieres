'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/constants';

function Counter({ value, suffix }: { value: number | string; suffix: string }) {
  const [display, setDisplay] = useState<number | string>(typeof value === 'number' ? 0 : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof value !== 'number') return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(p * value));
            if (p < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="border-y border-gold-200 bg-white">
      <div className="container-page grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-3xl font-bold text-primary-800 md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm font-medium text-ink/70 md:text-base">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
