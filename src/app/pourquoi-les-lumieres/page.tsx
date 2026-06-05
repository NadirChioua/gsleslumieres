import { buildMetadata } from '@/lib/metadata';
import { TESTIMONIALS } from '@/lib/constants';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import SectionTitle from '@/components/shared/SectionTitle';
import CTASection from '@/components/shared/CTASection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import Icon from '@/components/shared/Icon';
import TestimonialCard from '@/components/shared/TestimonialCard';

export const metadata = buildMetadata({
  title: 'Pourquoi choisir Les Lumières ? | Meilleure École Privée à Tanger',
  description:
    '7 raisons de choisir le Groupe Scolaire Les Lumières à Tanger : 21 ans d’expérience, école trilingue, Cambridge English, Méthode de Singapour, activités riches, encadrement personnalisé.',
  path: '/pourquoi-les-lumieres',
  keywords: ['meilleure école privée Tanger', 'pourquoi Les Lumières', 'TICE Tanger'],
});

const reasons = [
  { icon: 'GraduationCap', title: '21 ans d’expérience et de confiance', text: 'Fondée en 2004, notre école a accompagné des milliers d’élèves vers la réussite. Cette longévité est le fruit de la confiance renouvelée des familles tangéroises et d’une quête constante d’excellence.' },
  { icon: 'Globe', title: 'École trilingue dès la maternelle', text: 'Arabe, français et anglais sont enseignés de manière progressive et structurée. Cette immersion précoce donne à nos élèves une aisance linguistique rare et une véritable ouverture sur le monde.' },
  { icon: 'Calculator', title: 'Méthode de Singapour en mathématiques', text: 'Nous appliquons la Méthode de Singapour, reconnue comme l’une des plus efficaces au monde. Son approche concrète-imagée-abstraite développe le raisonnement et la maîtrise durable des concepts.' },
  { icon: 'Award', title: 'Cambridge English Qualifications', text: 'Nos élèves préparent les certifications Cambridge English, reconnues internationalement. Un atout décisif pour leurs études supérieures et leur future carrière professionnelle.' },
  { icon: 'Drama', title: 'Activités parascolaires riches et diversifiées', text: 'Théâtre, chorale Albatros, arts plastiques, sports et voyages scolaires : l’épanouissement de nos élèves se construit aussi en dehors de la salle de classe.' },
  { icon: 'HeartHandshake', title: 'Encadrement bienveillant et suivi personnalisé', text: 'Effectifs maîtrisés, équipe pédagogique investie, communication régulière avec les familles : chaque élève bénéficie d’une attention individuelle qui fait la différence.' },
  { icon: 'Monitor', title: 'De la maternelle au baccalauréat, en un seul lieu', text: 'Un parcours scolaire complet et cohérent, sans rupture. Votre enfant évolue dans un environnement familier, avec une continuité pédagogique qui favorise sa réussite.' },
];

export default function PourquoiPage() {
  return (
    <>
      <PageHero
        title="Pourquoi choisir le Groupe Scolaire Les Lumières à Tanger ?"
        subtitle="Sept raisons concrètes qui font de Les Lumières l’un des établissements privés les plus appréciés de Tanger."
        image="/images/campus/classroom.jpg"
        imageAlt="Salle de classe équipée d’un tableau interactif au Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'L’École', path: '/qui-sommes-nous' }, { name: 'Pourquoi Les Lumières', path: '/pourquoi-les-lumieres' }]} />

      <section className="section-padding">
        <div className="container-page">
          <SectionTitle eyebrow="Nos différences" title="7 bonnes raisons de nous faire confiance" />
          <div className="space-y-5">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.05}>
                <div className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-800 text-white">
                    <Icon name={r.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h2 className="mb-1.5 flex items-center gap-2 text-xl font-bold text-primary-800">
                      <span className="font-heading text-gold-500">{i + 1}.</span> {r.title}
                    </h2>
                    <p className="text-ink/75">{r.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-page">
          <SectionTitle eyebrow="Ils nous font confiance" title="Ce que disent les parents" />
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Convaincu ? Contactez-nous pour inscrire votre enfant" />
    </>
  );
}
