import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { SCHOOL, telLink, whatsappLink, GOOGLE_MAPS_DIRECTIONS } from '@/lib/constants';
import { SCHOOL_IMAGES } from '@/lib/school-images';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from '@/components/shared/ContactForm';
import GoogleMap from '@/components/shared/GoogleMap';

export const metadata = buildMetadata({
  title: 'Contacter le Groupe Scolaire Les Lumières — Tanger',
  description:
    'Contactez le Groupe Scolaire Les Lumières à Tanger. Adresse : Val Fleuri. Tél : 0539 93 90 95. WhatsApp disponible. Formulaire de contact en ligne.',
  path: '/contact',
  keywords: ['contact école Tanger', 'adresse école Les Lumières', 'téléphone école privée Tanger'],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contactez-nous"
        subtitle="Une question, une visite, une inscription ? Notre équipe est à votre écoute."
        image={SCHOOL_IMAGES.general.contactCampus}
        imageAlt="Entrée du Groupe Scolaire Les Lumières à Val Fleuri, Tanger"
      />
      <BreadCrumb items={[{ name: 'Contact', path: '/contact' }]} />

      {/* 3 cards */}
      <section className="section-padding">
        <div className="container-page grid gap-5 md:grid-cols-3">
          <div className="card flex flex-col items-center p-7 text-center">
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-800 text-white">
              <Phone className="h-7 w-7" />
            </span>
            <h2 className="mb-2 text-lg font-bold text-ink">Téléphone</h2>
            <a href={telLink(SCHOOL.phone1Intl)} className="block text-primary-800 hover:text-gold-600">{SCHOOL.phone1}</a>
            <a href={telLink(SCHOOL.phone2Intl)} className="block text-primary-800 hover:text-gold-600">{SCHOOL.phone2}</a>
          </div>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover flex flex-col items-center p-7 text-center"
          >
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white">
              <MessageCircle className="h-7 w-7" />
            </span>
            <h2 className="mb-2 text-lg font-bold text-ink">WhatsApp</h2>
            <span className="text-whatsapp">{SCHOOL.whatsappDisplay}</span>
            <span className="mt-1 text-sm text-ink/60">Réponse rapide</span>
          </a>
          <div className="card flex flex-col items-center p-7 text-center">
            <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-ink">
              <Mail className="h-7 w-7" />
            </span>
            <h2 className="mb-2 text-lg font-bold text-ink">Email</h2>
            <a href={`mailto:${SCHOOL.email}`} className="break-all text-primary-800 hover:text-gold-600">{SCHOOL.email}</a>
          </div>
        </div>
      </section>

      {/* Map + info + form */}
      <section className="section-padding bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Nous trouver" title="Adresse & horaires" align="left" />
            <div className="mb-6 space-y-5">
              <a href={GOOGLE_MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-ink/80 hover:text-primary-800">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <span>{SCHOOL.address.full}</span>
              </a>
              <div className="rounded-lg border border-gold-200 bg-white p-6 text-center shadow-sm">
                <Clock className="mx-auto mb-3 h-6 w-6 text-gold-600" />
                <p className="text-sm font-bold uppercase tracking-wide text-primary-800">
                  Horaires scolaires officiels
                </p>
                <p className="mt-2 font-heading text-4xl font-normal leading-none text-primary-900">
                  {SCHOOL.schoolHours[0].time}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  Pour les visites, inscriptions et informations administratives, contactez-nous par téléphone ou WhatsApp.
                </p>
              </div>
            </div>
            <GoogleMap height={360} />
          </div>
          <div>
            <SectionTitle eyebrow="Écrivez-nous" title="Formulaire de contact" align="left" />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
