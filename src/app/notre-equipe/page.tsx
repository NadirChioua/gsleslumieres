import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { SCHOOL_IMAGES } from '@/lib/school-images';

export const metadata = buildMetadata({
  title: 'Notre Équipe Pédagogique | Les Lumières Tanger',
  description:
    'L’équipe pédagogique du Groupe Scolaire Les Lumières à Tanger : des enseignants qualifiés et bienveillants au service de la réussite de chaque élève.',
  path: '/notre-equipe',
  keywords: ['équipe pédagogique Tanger', 'enseignants école Les Lumières', 'professeurs Tanger'],
});

const team = [
  { name: 'Ahmed ABBOU', role: 'Directeur & Fondateur', img: SCHOOL_IMAGES.general.directorMessage },
  { name: 'Direction des études', role: 'Coordination pédagogique', img: SCHOOL_IMAGES.general.teamHero },
  { name: 'Équipe Maternelle', role: 'Éducatrices spécialisées', img: SCHOOL_IMAGES.cycles.maternelle.card },
  { name: 'Équipe Primaire', role: 'Professeurs des écoles', img: SCHOOL_IMAGES.cycles.primaire.card },
  { name: 'Équipe Collège & Lycée', role: 'Professeurs de spécialité', img: SCHOOL_IMAGES.cycles.college.card },
  { name: 'Équipe administrative', role: 'Accueil & accompagnement des familles', img: SCHOOL_IMAGES.general.schoolGroup },
];

export default function NotreEquipePage() {
  return (
    <>
      <PageHero
        title="Notre Équipe Pédagogique"
        subtitle="Des femmes et des hommes passionnés, qualifiés et bienveillants, engagés pour la réussite de chaque élève."
        image={SCHOOL_IMAGES.general.teamHero}
        imageAlt="Équipe pédagogique du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'L’École', path: '/qui-sommes-nous' }, { name: 'Notre équipe', path: '/notre-equipe' }]} />

      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            eyebrow="Les visages des Lumières"
            title="Une équipe expérimentée et dévouée"
            subtitle="Notre force, ce sont nos enseignants : qualifiés, formés en continu et profondément attachés à l’épanouissement des élèves."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.07}>
                <div className="card card-hover overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image src={m.img} alt={`${m.name} — ${m.role} au Groupe Scolaire Les Lumières à Tanger`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-primary-800">{m.name}</h3>
                    <p className="text-sm text-ink/70">{m.role}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Venez rencontrer notre équipe" subtitle="Réservez une visite et échangez avec nos enseignants." />
    </>
  );
}
