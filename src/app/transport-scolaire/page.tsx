import Image from 'next/image';
import { ShieldCheck, Bus, Users, MapPin, Wrench } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';

export const metadata = buildMetadata({
  title: 'Transport Scolaire Sécurisé | Les Lumières Tanger',
  description:
    'Service de transport scolaire sécurisé au Groupe Scolaire Les Lumières. Véhicules neufs, personnel d’accompagnement, contrôle technique régulier. Tanger.',
  path: '/transport-scolaire',
  keywords: ['transport scolaire Tanger', 'bus scolaire sécurisé Tanger', 'ramassage scolaire Tanger'],
});

const features = [
  { icon: Bus, title: 'Véhicules neufs', text: 'Une flotte récente, confortable et régulièrement entretenue.' },
  { icon: Users, title: 'Personnel d’accompagnement', text: 'Un accompagnateur dédié veille sur les élèves à chaque trajet.' },
  { icon: Wrench, title: 'Contrôle technique régulier', text: 'Des vérifications fréquentes pour une sécurité maximale.' },
  { icon: MapPin, title: 'Couverture étendue', text: 'Des circuits couvrant les principaux quartiers de Tanger.' },
];

export default function TransportPage() {
  return (
    <>
      <PageHero
        title="Transport Scolaire Sécurisé"
        subtitle="La sérénité des parents, la sécurité des enfants : notre service de transport accompagne votre enfant en toute confiance."
        image="/images/services/transport.jpg"
        imageAlt="Bus de transport scolaire du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Services Scolaires', path: '/transport-scolaire' }, { name: 'Transport scolaire', path: '/transport-scolaire' }]} />

      <section className="section-padding">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="rich-text">
              <span className="eyebrow mb-2 block">Sécurité avant tout</span>
              <h2 className="text-3xl font-bold text-primary-800">Un transport pensé pour la tranquillité des familles</h2>
              <p>
                Le Groupe Scolaire Les Lumières met à disposition des familles un service de transport scolaire
                sécurisé et fiable. Notre flotte de véhicules neufs est conduite par des chauffeurs expérimentés et
                accompagnée d’un personnel dédié qui veille sur les élèves du domicile à l’école, et inversement.
              </p>
              <p>
                Chaque véhicule fait l’objet d’un contrôle technique régulier. Les circuits sont organisés pour
                couvrir les principaux quartiers de Tanger, avec des horaires adaptés au rythme scolaire de votre enfant.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image src="/images/services/transport.jpg" alt="Véhicule de transport scolaire sécurisé des Lumières à Tanger" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page">
          <SectionTitle eyebrow="Nos garanties" title="Pourquoi nos parents nous font confiance" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.07}>
                <div className="card h-full p-6 text-center">
                  <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-800">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 font-bold text-ink">{f.title}</h3>
                  <p className="text-sm text-ink/70">{f.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ink/60">
            <ShieldCheck className="h-5 w-5 text-whatsapp" /> Pour connaître les circuits et tarifs, contactez-nous.
          </div>
        </div>
      </section>

      <CTASection title="Besoin d’informations sur le transport ?" subtitle="Contactez-nous pour connaître les circuits desservis et les modalités." />
    </>
  );
}
