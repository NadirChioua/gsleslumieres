// ═══════════════════════════════════════════════════
// TRACKING IDS — REPLACE WITH YOUR ACTUAL IDS
// GA4: G-XXXXXXXXXX → Get from analytics.google.com
// GTM: GTM-XXXXXXX → Get from tagmanager.google.com
// Meta Pixel: XXXXXXXXXXXXXXX → Get from business.facebook.com
// ═══════════════════════════════════════════════════

import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans, Noto_Sans_Arabic } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import JsonLd from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/schema';
import { SITE_URL, SCHOOL } from '@/lib/constants';
import { SCHOOL_IMAGES } from '@/lib/school-images';

const GTM_ID = 'GTM-XXXXXXX';
const hasGtm = !GTM_ID.includes('XXXX');

const heading = DM_Serif_Display({ subsets: ['latin'], weight: '400', variable: '--font-heading', display: 'swap' });
const body = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Groupe Scolaire Les Lumières | École Privée Trilingue à Tanger depuis 2004',
    template: '%s | Groupe Scolaire Les Lumières',
  },
  description:
    'École privée trilingue à Tanger depuis 2004. Maternelle, Primaire, Collège, Lycée. Cambridge English. Méthode de Singapour. Inscriptions 2026-2027 ouvertes. ☎ 0539 93 90 95',
  applicationName: SCHOOL.name,
  authors: [{ name: SCHOOL.name }],
  creator: SCHOOL.name,
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    siteName: SCHOOL.name,
    locale: 'fr_MA',
    url: SITE_URL,
    title: 'Groupe Scolaire Les Lumières | École Privée Trilingue à Tanger depuis 2004',
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
    <html lang="fr" className={`${heading.variable} ${body.variable} ${arabic.variable}`}>
      <head>
        {hasGtm && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
        )}
        <link rel="alternate" hrefLang="fr-ma" href={SITE_URL} />
        <meta name="theme-color" content="#8B0000" />
        <meta name="geo.region" content="MA-01" />
        <meta name="geo.placename" content="Tanger" />
        <JsonLd data={organizationSchema()} />
      </head>
      <body>
        {hasGtm && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
              title="gtm"
            />
          </noscript>
        )}

        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-primary-800 focus:shadow">
          Aller au contenu
        </a>

        <TopBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
