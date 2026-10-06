'use client';

import { usePathname } from 'next/navigation';
import { LOCALE } from '@/lib/locale';

const languages = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'ar', label: 'ع', name: 'العربية' },
  { code: 'en', label: 'EN', name: 'English' },
] as const;

const NAV_LABEL = { fr: 'Langue du site', en: 'Website language', ar: 'لغة الموقع' } as const;

export default function LanguageSwitcher() {
  // Each language is a separate static build, so LOCALE is the current language and switching
  // uses a plain <a> (full page load): client-side navigation cannot cross builds. The pathname
  // has no /en or /ar prefix while prerendering and has one in the browser: strip it either way.
  const pathname = usePathname() || '/';
  const page = pathname.replace(/^\/(en|ar)(?=\/|$)/, '') || '/';
  return (
    <nav aria-label={NAV_LABEL[LOCALE]} className="flex shrink-0 items-center gap-0.5 rounded-lg border border-black/10 bg-white p-0.5" dir="ltr">
      {languages.map(({ code, label, name }) => (
        <a key={code} href={code === 'fr' ? page : `/${code}${page}`} hrefLang={code} lang={code} aria-label={name} title={name} aria-current={code === LOCALE ? 'true' : undefined}
          className={`inline-flex min-h-11 min-w-9 items-center justify-center rounded-md px-1.5 text-xs font-bold transition-colors ${code === LOCALE ? 'bg-primary-800 text-white' : 'text-ink hover:bg-cream'}`}>
          {label}
        </a>
      ))}
    </nav>
  );
}
