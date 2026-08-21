import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import { ACTIVITIES } from '@/lib/constants';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import FeatureCard from '@/components/shared/FeatureCard';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { SCHOOL_IMAGES } from '@/lib/school-images';

export const metadata = buildMetadata({
  title: 'Activités Parascolaires | Les Lumières Tanger',
  description:
    'Activités parascolaires variées à l’école Les Lumières Tanger : théâtre, chorale, arts plastiques, sports, voyages scolaires. L’épanouissement de chaque élève.',
  path: '/activites-parascolaires',
  keywords: ['activités parascolaires Tanger', 'théâtre chorale école Tanger', 'voyages scolaires Tanger'],
});

const events = [
  { title: 'Voyages scolaires', text: '3 sorties par an : régionale, nationale et internationale, pour découvrir, apprendre et créer des souvenirs.' },
  { title: 'Carnaval & Kermesse', text: 'Des moments festifs qui rassemblent élèves, parents et enseignants autour de la joie de vivre.' },
  { title: 'Fête du printemps', text: 'Spectacles, danses et créations artistiques pour célébrer le talent de nos élèves.' },
  { title: 'Cross-country', text: 'Une grande course annuelle qui cultive l’esprit sportif et le dépassement de soi.' },
  { title: 'Olympiade Ramadan des mathématiques', text: 'Un concours stimulant qui valorise la logique et l’excellence en mathématiques.' },
  { title: 'Bourse d’Excellence', text: 'Une récompense pour encourager et célébrer les élèves les plus méritants.' },
];

export default function ActivitesPage() {
  return (
    <>
      <PageHero
        title="Activités Parascolaires — L’épanouissement au-delà des cours"
        subtitle="À Les Lumières, on grandit aussi en dehors de la salle de classe. Théâtre, musique, sport, arts et voyages : chaque talent trouve sa place."
        image={SCHOOL_IMAGES.activities.theatre}
        imageAlt="Élèves sur scène lors d’un spectacle de théâtre au Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Vie Scolaire', path: '/activites-parascolaires' }, { name: 'Activités parascolaires', path: '/activites-parascolaires' }]} />

      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="Nos ateliers" title="Des activités pour tous les talents" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ACTIVITIES.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.07}>
                <FeatureCard icon={a.icon} title={a.title} description={a.description} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image src={SCHOOL_IMAGES.activities.sortie} alt="Sortie scolaire des élèves de l’école Les Lumières à Chefchaouen" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="rich-text">
              <h2 className="text-2xl font-bold text-primary-800 md:text-3xl">Une année rythmée par les événements</h2>
              <p>
                Tout au long de l’année, le Groupe Scolaire Les Lumières organise des temps forts qui font vivre la
                communauté scolaire et nourrissent le sentiment d’appartenance de nos élèves.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="container-page mt-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((e) => (
              <div key={e.title} className="card h-full p-6">
                <h3 className="mb-2 font-bold text-primary-800">{e.title}</h3>
                <p className="text-sm text-ink/70">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Offrez à votre enfant un quotidien riche et épanouissant" />
    </>
  );
}
