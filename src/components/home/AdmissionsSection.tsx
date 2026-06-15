import Image from 'next/image';
import Link from 'next/link';
import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import { SCHOOL, telLink, whatsappLink } from '@/lib/constants';

export default function AdmissionsSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-page">
        <div className="grid overflow-hidden rounded-2xl bg-primary-900 shadow-2xl lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px]">
            <Image
              src="/images/campaign/maternelle-inscriptions-2026.jpg"
              alt="Inscriptions ouvertes 2026-2027 au Groupe Scolaire Les Lumières"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="p-7 text-white md:p-10">
            <span className="inline-flex rounded-full bg-gold-500 px-4 py-2 text-sm font-bold text-ink">
              Places limitées
            </span>
            <h2 className="mt-5 font-heading text-4xl text-white md:text-5xl">
              Inscriptions ouvertes 2026-2027
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/82">
              Prenez rendez-vous, posez vos questions ou démarrez une pré-inscription. Le parcours
              doit rester simple pour les parents : notre équipe vous accompagne étape par étape.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <Link href="/inscription-ecole-tanger" className="rounded-xl bg-white p-4 text-ink transition hover:-translate-y-1">
                <CalendarCheck className="mb-3 h-6 w-6 text-primary-800" />
                <span className="block font-bold">Pré-inscription</span>
                <span className="text-sm text-ink/65">Formulaire rapide</span>
              </Link>
              <a
                href={whatsappLink('Bonjour, je souhaite des informations sur les inscriptions 2026-2027 au Groupe Scolaire Les Lumières.')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-whatsapp p-4 text-white transition hover:-translate-y-1"
              >
                <MessageCircle className="mb-3 h-6 w-6" />
                <span className="block font-bold">WhatsApp</span>
                <span className="text-sm text-white/80">Réponse rapide</span>
              </a>
              <a href={telLink(SCHOOL.phone1Intl)} className="rounded-xl bg-gold-500 p-4 text-ink transition hover:-translate-y-1">
                <Phone className="mb-3 h-6 w-6" />
                <span className="block font-bold">Appeler</span>
                <span className="text-sm text-ink/70">{SCHOOL.phone1}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
