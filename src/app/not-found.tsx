import Link from 'next/link';
import { Home, Phone, MessageCircle } from 'lucide-react';
import { SCHOOL, telLink, whatsappLink } from '@/lib/constants';

const quickLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos formations', href: '/maternelle-tanger' },
  { label: 'Inscription', href: '/inscription-ecole-tanger' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream">
      <div className="container-page text-center">
        <p className="font-heading text-7xl font-bold text-gold-500 md:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-primary-800 md:text-3xl">
          Oups, cette page est introuvable
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-ink/70">
          La page que vous recherchez n’existe pas ou a été déplacée. Pas d’inquiétude, voici quelques liens utiles
          pour retrouver votre chemin.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {quickLinks.map((l) => (
            <Link key={l.href} href={l.href} className="btn-outline px-4 py-2 text-sm">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            <Home className="h-5 w-5" /> Retour à l’accueil
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="h-5 w-5" /> WhatsApp
          </a>
          <a href={telLink(SCHOOL.phone1Intl)} className="btn-outline">
            <Phone className="h-5 w-5" /> {SCHOOL.phone1}
          </a>
        </div>
      </div>
    </section>
  );
}
