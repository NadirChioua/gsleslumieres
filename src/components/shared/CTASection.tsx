import { MessageCircle, Phone } from 'lucide-react';
import { SCHOOL, telLink, whatsappLink } from '@/lib/constants';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  whatsappText?: string;
}

/** Conversion banner — reused at the bottom of most pages. */
export default function CTASection({
  title = 'Les inscriptions 2026-2027 sont ouvertes',
  subtitle = 'Places limitées — Réservez une visite ou contactez-nous dès maintenant.',
  whatsappText,
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container-page section-padding text-center">
        <h2 className="mx-auto max-w-3xl text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-white/90">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={whatsappLink(whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" /> Contacter via WhatsApp
          </a>
          <a href={telLink(SCHOOL.phone1Intl)} className="btn-gold w-full sm:w-auto">
            <Phone className="h-5 w-5" /> Appeler : {SCHOOL.phone1}
          </a>
        </div>
      </div>
    </section>
  );
}
