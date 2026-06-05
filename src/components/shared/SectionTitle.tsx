import type { ReactNode } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  as?: 'h2' | 'h3';
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  as: Tag = 'h2',
}: SectionTitleProps) {
  return (
    <div className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && <span className="eyebrow mb-2 block">{eyebrow}</span>}
      <Tag className="text-3xl font-bold text-primary-800 md:text-4xl">{title}</Tag>
      {subtitle && <p className="mt-3 text-base text-ink/70 md:text-lg">{subtitle}</p>}
      <span
        className={`mt-4 block h-1 w-16 rounded-full bg-gold-500 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </div>
  );
}
