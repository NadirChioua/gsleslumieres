import Icon from './Icon';

interface BrandIconProps {
  name: string;
  className?: string;
}

export default function BrandIcon({ name, className = '' }: BrandIconProps) {
  return (
    <span
      className={`relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary-800 text-gold-400 shadow-[0_10px_28px_rgba(139,0,0,0.22)] ring-2 ring-gold-400/85 ${className}`}
      aria-hidden="true"
    >
      <span className="absolute -top-8 h-16 w-16 rounded-full border-[10px] border-gold-300/25" />
      <span className="absolute left-1/2 top-3 h-8 w-px -translate-x-1/2 bg-gold-300/40" />
      <span className="absolute left-5 top-5 h-px w-7 rotate-45 bg-gold-300/35" />
      <span className="absolute right-5 top-5 h-px w-7 -rotate-45 bg-gold-300/35" />
      <span className="absolute inset-[5px] rounded-xl border border-gold-300/45" />
      <Icon name={name} className="relative z-10 h-7 w-7" />
    </span>
  );
}
