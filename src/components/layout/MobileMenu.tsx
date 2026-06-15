'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { NAV, SCHOOL, telLink, whatsappLink } from '@/lib/constants';
import SocialIcons from './SocialIcons';
import CambridgeBadge from '@/components/shared/CambridgeBadge';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Ouvrir le menu"
        className="flex h-10 w-10 items-center justify-center rounded-md text-primary-800"
      >
        <Menu className="h-7 w-7" />
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white">
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-4">
            <span className="font-heading text-lg font-bold text-primary-800">Menu</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="flex h-10 w-10 items-center justify-center rounded-md text-ink"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Navigation mobile">
            {NAV.map((item) =>
              'children' in item && item.children ? (
                <div key={item.label} className="border-b border-black/5">
                  <button
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className="flex w-full items-center justify-between py-3 text-left text-base font-semibold text-ink"
                    aria-expanded={expanded === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expanded === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expanded === item.label && (
                    <div className="pb-2 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-ink/70 hover:text-primary-800"
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
                  onClick={() => setOpen(false)}
                  className="block border-b border-black/5 py-3 text-base font-semibold text-primary-800"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="space-y-3 border-t border-black/5 px-4 py-4">
            <CambridgeBadge className="w-full justify-center" />
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
              Contacter via WhatsApp
            </a>
            <a href={telLink(SCHOOL.phone1Intl)} className="btn-outline w-full">
              <Phone className="h-4 w-4" /> {SCHOOL.phone1}
            </a>
            <div className="flex justify-center pt-2 text-primary-800">
              <SocialIcons />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
