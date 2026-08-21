import Image from 'next/image';

interface CambridgeBadgeProps {
  compact?: boolean;
  className?: string;
  dark?: boolean;
}

export default function CambridgeBadge({
  compact = false,
  className = '',
  dark = false,
}: CambridgeBadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-lg border bg-white/95 shadow-sm ${
        dark ? 'border-white/30 shadow-xl ring-1 ring-white/10' : 'border-[#d6e2f3]'
      } ${compact ? 'px-2.5 py-2' : 'px-4 py-3'} ${className}`}
      aria-label="University of Cambridge"
    >
      <Image
        src="/images/brand/university-of-cambridge-logo.png"
        alt="University of Cambridge"
        width={300}
        height={82}
        sizes={compact ? '150px' : '220px'}
        className={`${compact ? 'h-8 w-auto max-w-[150px]' : 'h-10 w-auto max-w-[220px]'} object-contain`}
      />
    </div>
  );
}
