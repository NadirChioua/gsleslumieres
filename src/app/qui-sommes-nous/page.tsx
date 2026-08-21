import Image from 'next/image';
import { Check } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { SCHOOL_IMAGES } from '@/lib/school-images';

export const metadata = buildMetadata({
  title: 'Qui sommes-nous | École à Tanger depuis 2004',
  description:
    'Découvrez le Groupe Scolaire Les Lumières, école privée trilingue fondée en 2004 à Tanger. 22 ans d’expérience, de la maternelle au lycée. Méthode Montessori et Singapour.',
  path: '/qui-sommes-nous',
  keywords: ['école privée Val Fleuri', 'histoire école Les Lumières', 'école trilingue Tanger 2004'],
});

const values = [
  { title: 'Tolérance & respect', text: 'Un environnement où chaque enfant est accueilli, écouté et respecté.' },
  { title: 'Autonomie', text: 'Nous formons des élèves capables de penser et d’agir par eux-mêmes.' },
  { title: 'Formation de qualité', text: 'Une exigence académique constante, du préscolaire au lycée.' },
  { title: 'Épanouissement', text: 'L’équilibre entre réussite scolaire et développement personnel.' },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        title="Groupe Scolaire Les Lumières — 22 ans d’excellence éducative à Tanger"
        subtitle="Une école privée trilingue qui accompagne chaque élève de la maternelle au lycée, dans un cadre rassurant et stimulant."
        image={SCHOOL_IMAGES.general.heroCampus}
        imageAlt="Bâtiment du Groupe Scolaire Les Lumières à Val Fleuri, Tanger"
      />
      <BreadCrumb items={[{ name: 'L’École', path: '/qui-sommes-nous' }, { name: 'Qui sommes-nous', path: '/qui-sommes-nous' }]} />

      <section className="section-padding">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <div className="rich-text">
              <span className="eyebrow mb-2 block">Notre histoire</span>
              <h2 className="text-3xl font-bold text-primary-800">Une école née en 2004 à Val Fleuri</h2>
              <p>
                Fondé en 2004 et implanté dans le quartier Val Fleuri à Tanger, le Groupe Scolaire Les Lumières
                est devenu en plus de deux décennies une référence de l’enseignement privé trilingue dans la ville.
                L’établissement accueille aujourd’hui les élèves de la maternelle au lycée dans un même lieu,
                garantissant une continuité pédagogique précieuse.
              </p>
              <p>
                Notre conviction est simple : chaque enfant porte en lui une lumière qu’il appartient à l’école de
                révéler. C’est tout le sens de notre nom et de notre engagement quotidien.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image src={SCHOOL_IMAGES.general.aboutLife} alt="Cour de récréation du Groupe Scolaire Les Lumières à Tanger" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page max-w-3xl">
          <SectionTitle eyebrow="Notre mission" title="Accompagner chaque élève vers la réussite" />
          <p className="text-center text-lg text-ink/80">
            « Accompagner l’élève de la maternelle au lycée dans un cadre rassurant et agréable. »
            Telle est la mission que nous poursuivons chaque jour, en plaçant l’élève au cœur de notre projet
            éducatif et en cultivant l’exigence comme la bienveillance.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="Nos valeurs" title="Les principes qui nous guident" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="card h-full p-6">
                  <Check className="mb-3 h-7 w-7 text-gold-600" />
                  <h3 className="mb-2 font-bold text-primary-800">{v.title}</h3>
                  <p className="text-sm text-ink/70">{v.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rich-text">
            <h2 className="text-2xl font-bold text-primary-800 md:text-3xl">Notre philosophie pédagogique</h2>
            <p>
              Notre enseignement repose sur la pédagogie de projet et l’approche par compétences. Les élèves
              n’apprennent pas seulement des savoirs : ils apprennent à les mobiliser dans des situations concrètes,
              à coopérer, à chercher et à créer. Dès la maternelle, la pédagogie Montessori favorise l’autonomie et
              le plaisir d’apprendre.
            </p>
            <p>
              En mathématiques, nous utilisons la Méthode de Singapour, reconnue mondialement pour son efficacité,
              qui développe une compréhension profonde et durable des concepts.
            </p>
          </div>
          <div className="rich-text">
            <h2 className="text-2xl font-bold text-primary-800 md:text-3xl">Une stratégie trilingue</h2>
            <ul>
              <li><strong>Français :</strong> langue principale d’instruction (mathématiques, physique, biologie, informatique).</li>
              <li><strong>Arabe :</strong> enseigné dès la Petite Section.</li>
              <li><strong>Anglais :</strong> dès la Grande Section, 3 heures par semaine, avec Cambridge Preparation.</li>
            </ul>
            <p>
              Cette immersion progressive donne à nos élèves une véritable aisance linguistique et une ouverture sur
              le monde, atouts majeurs pour leurs études supérieures et leur avenir professionnel.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
