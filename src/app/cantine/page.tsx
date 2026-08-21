import Image from 'next/image';
import { Apple, Utensils, ShieldCheck, Users } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { SCHOOL_IMAGES } from '@/lib/school-images';

export const metadata = buildMetadata({
  title: 'Cantine et Restauration | Les Lumières Tanger',
  description:
    'Service de restauration scolaire au Groupe Scolaire Les Lumières Tanger. Repas équilibrés, encadrement lors des repas, conditions d’hygiène strictes.',
  path: '/cantine',
  keywords: ['cantine école Tanger', 'restauration scolaire Tanger', 'repas équilibrés école Tanger'],
});

const features = [
  { icon: Apple, title: 'Repas équilibrés', text: 'Des menus variés et adaptés aux besoins nutritionnels des enfants.' },
  { icon: ShieldCheck, title: 'Hygiène stricte', text: 'Des conditions d’hygiène rigoureusement respectées en cuisine et en salle.' },
  { icon: Users, title: 'Encadrement des repas', text: 'Notre équipe veille au bon déroulement et au calme pendant les repas.' },
  { icon: Utensils, title: 'Service sur place', text: 'Une restauration au sein même de l’établissement, sans déplacement.' },
];

export default function CantinePage() {
  return (
    <>
      <PageHero
        title="Restauration et Cantine Scolaire"
        subtitle="Des repas sains et équilibrés, servis sur place dans un cadre encadré et convivial."
        image={SCHOOL_IMAGES.services.cantine}
        imageAlt="Cantine scolaire du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Services Scolaires', path: '/transport-scolaire' }, { name: 'Cantine', path: '/cantine' }]} />

      <section className="section-padding">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="rich-text">
              <span className="eyebrow mb-2 block">Bien manger pour bien apprendre</span>
              <h2 className="text-3xl font-bold text-primary-800">Une cantine au service de la santé de votre enfant</h2>
              <p>
                Le Groupe Scolaire Les Lumières propose un service de restauration scolaire sur place, pensé pour
                offrir aux élèves des repas équilibrés et savoureux. Une alimentation saine est essentielle à la
                concentration, à l’énergie et au bien-être de l’enfant tout au long de la journée.
              </p>
              <p>
                Les repas sont préparés et servis dans le respect de conditions d’hygiène strictes. Pendant le déjeuner,
                notre équipe encadre les élèves, veille au bon déroulement du service et accompagne les plus jeunes,
                dans une ambiance calme et conviviale.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image src={SCHOOL_IMAGES.services.cantine} alt="Repas équilibré servi à la cantine des Lumières à Tanger" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page">
          <SectionTitle eyebrow="Nos engagements" title="Une restauration de confiance" />
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
        </div>
      </section>

      <CTASection title="Des questions sur la cantine ?" subtitle="Contactez-nous pour en savoir plus sur les menus et les modalités." />
    </>
  );
}
