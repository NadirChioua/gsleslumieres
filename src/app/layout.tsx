import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans, Noto_Sans_Arabic } from 'next/font/google';
import '@/styles/globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import JsonLd from '@/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import Script from 'next/script';
import { SITE_URL, SCHOOL, TRACKING } from '@/lib/constants';
import { SCHOOL_IMAGES } from '@/lib/school-images';
import { LOCALE, localizedPath, languageAlternates } from '@/lib/locale';

const heading = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-heading', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Les Lumières Tanger | École Privée Trilingue depuis 2004',
    template: '%s | Groupe Scolaire Les Lumières',
  },
  description:
    'École privée trilingue à Tanger depuis 2004 : maternelle, primaire, collège et lycée. Cambridge English, méthode de Singapour. Inscriptions 2026-2027.',
  applicationName: SCHOOL.name,
  authors: [{ name: SCHOOL.name }],
  creator: SCHOOL.name,
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
  verification: {
    ...(TRACKING.googleSiteVerification ? { google: TRACKING.googleSiteVerification } : {}),
    ...(TRACKING.bingSiteVerification ? { other: { 'msvalidate.01': TRACKING.bingSiteVerification } } : {}),
  },
  alternates: { canonical: `${SITE_URL}${localizedPath('/')}`, languages: languageAlternates('/') },
  openGraph: {
    type: 'website',
    siteName: SCHOOL.name,
    locale: LOCALE === 'ar' ? 'ar_MA' : LOCALE === 'en' ? 'en_GB' : 'fr_MA',
    url: `${SITE_URL}${localizedPath('/')}`,
    title: 'Les Lumières Tanger | École Privée Trilingue depuis 2004',
    description:
      'École privée trilingue à Tanger depuis 2004. Maternelle, Primaire, Collège, Lycée. Cambridge English. Méthode de Singapour. Inscriptions 2026-2027 ouvertes.',
    images: [{ url: `${SITE_URL}${SCHOOL_IMAGES.general.heroCampus}`, width: 1200, height: 630, alt: SCHOOL.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Groupe Scolaire Les Lumières | École Privée Trilingue à Tanger',
    description: 'École privée trilingue à Tanger depuis 2004. De la maternelle au lycée.',
    images: [`${SITE_URL}${SCHOOL_IMAGES.general.heroCampus}`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={LOCALE} dir={LOCALE === 'ar' ? 'rtl' : 'ltr'} className={`${heading.variable} ${body.variable} ${arabic.variable}`}>
      <head>
        <meta name="theme-color" content="#8B0000" />
        <meta name="geo.region" content="MA-01" />
        <meta name="geo.placename" content="Tanger" />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </head>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-primary-800 focus:shadow">
          Aller au contenu
        </a>

        <TopBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        {TRACKING.ga4Id && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${TRACKING.ga4Id}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${TRACKING.ga4Id}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
