import Image from 'next/image';
import { SCHOOL } from '@/lib/constants';

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  void variant;

  return (
    <a
      href="/"
      className="relative block h-12 w-44 shrink-0 sm:h-14 sm:w-52"
      aria-label={`Accueil - ${SCHOOL.name}`}
    >
      <Image
        src="/images/brand/logo-les-lumieres-transparent.png"
        alt={`${SCHOOL.name} - logo officiel`}
        fill
        sizes="(max-width: 640px) 176px, 208px"
        className="object-contain object-left"
        priority
      />
    </a>
  );
}
