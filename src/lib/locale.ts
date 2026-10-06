// The static locale generator replaces this value in each translated module tree.
export const LOCALE: 'fr' | 'en' | 'ar' = 'fr';

export function localizedPath(value: string): string {
  if (!value.startsWith('/') || value.startsWith('//') || /^\/(?:en|ar)(?:\/|$)/.test(value)) return value;
  return LOCALE === 'fr' ? value : `/${LOCALE}${value === '/' ? '/' : value}`;
}

export function languageAlternates(path: string) {
  const clean = path.replace(/^\/(en|ar)(?=\/|$)/, '') || '/';
  const suffix = clean === '/' ? '/' : `${clean.replace(/\/$/, '')}/`;
  return { 'fr-MA': suffix, en: `/en${suffix}`, ar: `/ar${suffix}`, 'x-default': suffix };
}
