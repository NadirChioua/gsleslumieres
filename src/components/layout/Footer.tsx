import Link from 'next/link';
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { GOOGLE_MAPS_DIRECTIONS, SCHOOL, telLink, whatsappLink } from '@/lib/constants';
import Logo from './Logo';
import SocialIcons from './SocialIcons';

const footerNav = [
  { label: 'Qui sommes-nous', href: '/qui-sommes-nous' },
  { label: 'Mot du Directeur', href: '/mot-du-directeur' },
  { label: 'Pourquoi Les Lumières', href: '/pourquoi-les-lumieres' },
  { label: 'Maternelle', href: '/maternelle-tanger' },
  { label: 'Primaire', href: '/primaire-prive-tanger' },
  { label: 'Collège International', href: '/college-prive-tanger' },
  { label: 'Lycée', href: '/lycee-prive-tanger' },
  { label: 'Activités parascolaires', href: '/activites-parascolaires' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Actualités', href: '/actualites' },
  { label: 'Transport scolaire', href: '/transport-scolaire' },
  { label: 'Cantine', href: '/cantine' },
  { label: 'Inscription', href: '/inscription-ecole-tanger' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 [&_*]:!text-white">
            <Logo variant="light" />
          </div>
          <p className="mb-4 text-sm leading-relaxed text-white/70">
            École privée trilingue à Tanger depuis 2004. De la maternelle au lycée, nous accompagnons
            chaque élève vers la réussite et l'épanouissement.
          </p>
          <SocialIcons className="text-white" />
        </div>

        <div>
          <h2 className="mb-4 font-heading text-lg text-white">Navigation</h2>
          <ul className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-1">
            {footerNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/70 transition-colors hover:text-gold-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-lg text-white">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={GOOGLE_MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/70 transition-colors hover:text-gold-300"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                <span>{SCHOOL.address.full}</span>
              </a>
            </li>
            <li>
              <a href={telLink(SCHOOL.phone1Intl)} className="flex items-center gap-2 text-white/70 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" /> {SCHOOL.phone1}
              </a>
            </li>
            <li>
              <a href={telLink(SCHOOL.phone2Intl)} className="flex items-center gap-2 text-white/70 transition-colors hover:text-gold-300">
                <Phone className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" /> {SCHOOL.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${SCHOOL.email}`} className="flex items-center gap-2 text-white/70 transition-colors hover:text-gold-300">
                <Mail className="h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" /> {SCHOOL.email}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-whatsapp transition hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" /> {SCHOOL.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-lg text-white">Nous trouver</h2>
          <a
            href={GOOGLE_MAPS_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ouvrir l'adresse du Groupe Scolaire Les Lumières dans Google Maps"
            className="group flex min-h-44 flex-col justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4 transition hover:border-gold-400/50 hover:bg-white/[0.09]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold-500 text-ink">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="mt-4 block text-sm leading-relaxed text-white/75">
              {SCHOOL.address.full}
            </span>
            <span className="mt-4 inline-flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-primary-900 transition group-hover:bg-gold-500">
              Ouvrir dans Maps <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SCHOOL.name} - Tanger, Maroc. Tous droits réservés.
          </p>
          <Link href="/mentions-legales" className="hover:text-gold-300">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
