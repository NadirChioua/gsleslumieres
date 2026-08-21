import { TrendingUp, Trophy, GraduationCap, Star } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { SCHOOL_IMAGES } from '@/lib/school-images';

export const metadata = buildMetadata({
  title: 'Nos Résultats & Réussites | Les Lumières Tanger',
  description:
    'Découvrez les résultats et réussites du Groupe Scolaire Les Lumières à Tanger : réussite au lycée, certifications Cambridge, distinctions et bourses d’excellence.',
  path: '/nos-resultats',
  keywords: ['résultats lycée Tanger', 'taux de réussite école Tanger', 'réussite Les Lumières'],
});

const highlights = [
  { icon: 'GraduationCap', value: 'Excellents', label: 'Taux de réussite au lycée' },
  { icon: 'Award', value: 'Cambridge', label: 'Élèves certifiés en anglais' },
  { icon: 'Trophy', value: 'Olympiades', label: 'Distinctions en mathématiques' },
  { icon: 'Star', value: 'Bourses', label: 'd’excellence pour les méritants' },
];

const achievements = [
  'Des taux de réussite élevés et constants aux examens du lycée, toutes filières confondues.',
  'Une préparation rigoureuse aux Cambridge English Qualifications, avec de nombreux élèves certifiés.',
  'Des élèves distingués lors de l’Olympiade Ramadan des mathématiques et d’autres concours.',
  'Une Bourse d’Excellence qui récompense chaque année les élèves les plus méritants.',
  'Un accompagnement vers l’orientation et les études supérieures au Maroc et à l’étranger.',
];

export default function NosResultatsPage() {
  return (
    <>
      <PageHero
        title="Nos Résultats & Réussites"
        subtitle="L’excellence académique au service de l’avenir de nos élèves."
        image={SCHOOL_IMAGES.general.results}
        imageAlt="Élèves lauréats du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'L’École', path: '/qui-sommes-nous' }, { name: 'Nos résultats', path: '/nos-resultats' }]} />

      <section className="section-padding">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {highlights.map((h, i) => {
              const Icons = { GraduationCap, Award: GraduationCap, Trophy, Star, TrendingUp };
              return (
                <ScrollReveal key={h.label} delay={i * 0.08}>
                  <div className="card flex h-full flex-col items-center p-6 text-center">
                    {h.icon === 'Trophy' ? <Trophy className="mb-3 h-8 w-8 text-gold-600" /> : h.icon === 'Star' ? <Star className="mb-3 h-8 w-8 text-gold-600" /> : <GraduationCap className="mb-3 h-8 w-8 text-gold-600" />}
                    <span className="font-heading text-2xl font-bold text-primary-800">{h.value}</span>
                    <p className="mt-1 text-sm text-ink/70">{h.label}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page max-w-3xl">
          <SectionTitle eyebrow="Nos fiertés" title="Des réussites qui parlent d’elles-mêmes" />
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm">
                <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                <span className="text-ink/80">{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-ink/50">
            Les résultats détaillés par filière et par année sont communiqués sur demande lors de votre visite.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
