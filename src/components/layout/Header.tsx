'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { NAV, whatsappLink } from '@/lib/constants';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';
import CambridgeBadge from '@/components/shared/CambridgeBadge';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 py-2 shadow-md backdrop-blur' : 'bg-white py-3'
      }`}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <Logo />
        <CambridgeBadge compact className="hidden 2xl:inline-flex" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0 xl:flex" aria-label="Navigation principale">
          {NAV.map((item) =>
            'children' in item && item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu(null);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Escape') {
                    setOpenMenu(null);
                    event.currentTarget.querySelector('button')?.focus();
                  }
                }}
              >
                <button
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-primary-800"
                  aria-expanded={openMenu === item.label}
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {openMenu === item.label && (
                  <div className="absolute left-0 top-full w-60 rounded-xl border border-black/5 bg-white p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenMenu(null)}
                        className="block rounded-lg px-3 py-2 text-sm text-ink/80 transition-colors hover:bg-cream hover:text-primary-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={'href' in item ? item.href : '#'}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-primary-800"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactez-nous sur WhatsApp"
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-whatsapp text-ink transition-transform hover:scale-105 2xl:flex"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <Link href="/contact" className="btn-gold hidden px-4 py-2 text-sm 2xl:inline-flex">
            Nous Contacter
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
