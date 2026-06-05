import Link from 'next/link';
import { SCHOOL } from '@/lib/constants';

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-800';
  const subColor = variant === 'light' ? 'text-white/70' : 'text-gold-600';

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Accueil — Groupe Scolaire Les Lumières">
      {/* Inline SVG emblem so it works in static export without an asset */}
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-800 shadow-sm">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-gold-500" aria-hidden="true">
          <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7.2L5.3 6 12 3.3 18.7 6 12 9.2ZM4 10v4.5c0 2.5 3.6 4.5 8 4.5s8-2 8-4.5V10l-2 1v3.4c0 1.1-2.6 2.6-6 2.6s-6-1.5-6-2.6V11l-2-1Z" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-heading text-base font-bold sm:text-lg ${textColor}`}>
          Les Lumières
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-wide sm:text-xs ${subColor}`}>
          Groupe Scolaire · Tanger
        </span>
      </span>
    </Link>
  );
}
