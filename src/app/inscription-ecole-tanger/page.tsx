import { MessageCircle, Phone, FileText } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { SCHOOL, telLink, whatsappLink } from '@/lib/constants';
import { FAQS } from '@/lib/faq';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import InscriptionForm from '@/components/shared/InscriptionForm';
import FAQAccordion from '@/components/shared/FAQAccordion';

export const metadata = buildMetadata({
  title: 'Inscription École Privée Tanger 2026-2027 | Les Lumières',
  description:
    'Inscrivez votre enfant au Groupe Scolaire Les Lumières à Tanger. Inscriptions 2026-2027 ouvertes. Formulaire en ligne, WhatsApp ou visite sur place. Réponse rapide.',
  path: '/inscription-ecole-tanger',
  ogImage: '/images/og/inscription.jpg',
  keywords: ['inscription école Tanger', 'inscription 2026-2027 Tanger', 'inscrire enfant école privée Tanger'],
});

const steps = [
  { n: 1, title: 'Contactez-nous', text: 'Via WhatsApp ou le formulaire ci-dessous.' },
  { n: 2, title: 'Nous vous rappelons', text: 'Pour répondre à toutes vos questions.' },
  { n: 3, title: 'Visitez l’école', text: 'Rencontrez l’équipe pédagogique sur place.' },
  { n: 4, title: 'Finalisez l’inscription', text: 'Et réservez la place de votre enfant.' },
];

const documents = [
  'Copie de l’acte de naissance de l’enfant',
  'Copies de la CIN des parents',
  'Bulletins scolaires de l’année précédente',
  '4 photos d’identité récentes',
  'Certificat de scolarité ou de radiation',
  'Carnet de santé / vaccination',
];

export default function InscriptionPage() {
  return (
    <>
      <PageHero
        title="Inscriptions 2026-2027 — Rejoignez le Groupe Scolaire Les Lumières"
        subtitle="Inscriptions ouvertes pour l’année scolaire 2026-2027. Places limitées — réservez dès maintenant."
        image="/images/campaign/maternelle-inscriptions-2026.jpg"
        imageAlt="Parents et élèves lors des inscriptions au Groupe Scolaire Les Lumières à Tanger"
        badge="Places limitées"
      />
      <BreadCrumb items={[{ name: 'Inscription', path: '/inscription-ecole-tanger' }]} />

      {/* 3 ways to contact */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            eyebrow="3 façons de nous joindre"
            title="Inscrivez votre enfant en quelques minutes"
            subtitle="Choisissez le canal qui vous convient — nous vous répondons rapidement."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <a
              href={whatsappLink('Bonjour, je souhaite inscrire mon enfant au Groupe Scolaire Les Lumières pour 2026-2027.')}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover flex flex-col items-center p-7 text-center"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white">
                <MessageCircle className="h-7 w-7" />
              </span>
              <h3 className="mb-1 text-lg font-bold text-ink">WhatsApp</h3>
              <p className="text-sm text-ink/60">Le moyen le plus rapide</p>
              <span className="mt-3 text-sm font-semibold text-whatsapp">{SCHOOL.whatsappDisplay}</span>
            </a>
            <a href={telLink(SCHOOL.phone1Intl)} className="card card-hover flex flex-col items-center p-7 text-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-800 text-white">
                <Phone className="h-7 w-7" />
              </span>
              <h3 className="mb-1 text-lg font-bold text-ink">Par téléphone</h3>
              <p className="text-sm text-ink/60">Du lundi au samedi</p>
              <span className="mt-3 text-sm font-semibold text-primary-800">{SCHOOL.phone1}</span>
            </a>
            <a href="#formulaire" className="card card-hover flex flex-col items-center p-7 text-center">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-ink">
                <FileText className="h-7 w-7" />
              </span>
              <h3 className="mb-1 text-lg font-bold text-ink">Formulaire en ligne</h3>
              <p className="text-sm text-ink/60">Remplissez-le ci-dessous</p>
              <span className="mt-3 text-sm font-semibold text-gold-600">4 champs seulement</span>
            </a>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="formulaire" className="section-padding bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Demande d’inscription"
              title="Formulaire de pré-inscription"
              subtitle="Remplissez ce court formulaire, nous vous recontactons via WhatsApp."
              align="left"
            />
            <InscriptionForm />
          </div>
          <div>
            <SectionTitle eyebrow="Comment ça marche" title="Les étapes de l’inscription" align="left" />
            <ol className="space-y-4">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-800 font-heading text-lg text-white">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink">{s.title}</h3>
                    <p className="text-sm text-ink/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-xl border border-gold-200 bg-gold-50 p-6">
              <h3 className="mb-3 font-heading text-lg text-primary-800">Documents nécessaires</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {documents.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-ink/80">
                    <FileText className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="Bon à savoir" title="Questions fréquentes sur l’inscription" />
          <FAQAccordion items={FAQS.slice(5, 9)} />
        </div>
      </section>
    </>
  );
}
