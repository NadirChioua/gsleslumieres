import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { SCHOOL, whatsappLink } from '@/lib/constants';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';

export const metadata = buildMetadata({
  title: 'Mot du Directeur Ahmed ABBOU | Les Lumières Tanger',
  description:
    'Message du directeur Ahmed ABBOU, fondateur du Groupe Scolaire Les Lumières à Tanger. Notre vision pédagogique pour l’excellence et l’épanouissement de chaque élève.',
  path: '/mot-du-directeur',
  keywords: ['Ahmed ABBOU directeur', 'mot du directeur Les Lumières', 'directeur école Tanger'],
});

export default function MotDuDirecteurPage() {
  return (
    <>
      <PageHero
        title="Mot du Directeur — Ahmed ABBOU"
        subtitle="« Notre école, votre confiance » — un engagement que nous honorons chaque jour."
        image="/images/campus/campus-3.jpg"
        imageAlt="Directeur du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'L’École', path: '/qui-sommes-nous' }, { name: 'Mot du Directeur', path: '/mot-du-directeur' }]} />

      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-[300px_1fr]">
          <div className="mx-auto w-full max-w-[300px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
              <Image src="/images/team/directeur.jpg" alt="Portrait de Ahmed ABBOU, directeur du Groupe Scolaire Les Lumières" fill sizes="300px" className="object-cover" />
            </div>
            <div className="mt-4 rounded-xl bg-cream p-4 text-center">
              <p className="font-heading text-lg text-primary-800">Ahmed ABBOU</p>
              <p className="text-sm text-ink/60">Directeur & Fondateur</p>
            </div>
          </div>

          <div className="rich-text">
            <p>Chers parents, chers visiteurs,</p>
            <p>
              C’est avec une grande fierté que je vous souhaite la bienvenue au Groupe Scolaire Les Lumières.
              Depuis sa création en 2004, notre établissement s’est donné une mission claire : offrir à chaque
              enfant un cadre rassurant, stimulant et exigeant, où il puisse apprendre, grandir et s’épanouir
              en toute confiance.
            </p>
            <p>
              Notre projet éducatif repose sur une pédagogie de projet et une approche par compétences. Nous ne
              nous contentons pas de transmettre des connaissances : nous formons des esprits curieux, autonomes et
              responsables. L’enseignement trilingue — arabe, français et anglais — et la Méthode de Singapour en
              mathématiques donnent à nos élèves des fondations solides et durables.
            </p>
            <p>
              Mais une école ne se résume pas à ses programmes. Aux Lumières, la vie scolaire est riche : théâtre,
              musique, chorale, club cinéma, arts plastiques… Nos élèves participent tout au long de l’année à des
              événements marquants — cross-country, fête du printemps, carnaval, kermesse — qui cultivent l’esprit
              d’équipe, la créativité et la joie d’apprendre ensemble.
            </p>
            <p>
              Notre vision est tournée vers l’avenir : préparer des citoyens du monde, confiants et ambitieux,
              capables de réussir leur baccalauréat puis leurs études supérieures, tout en restant attachés à leurs
              valeurs. Cet engagement, nous le partageons avec vous, parents, qui êtes nos premiers partenaires.
            </p>
            <p>
              Je vous invite à venir nous rencontrer, à visiter notre établissement et à découvrir l’équipe
              passionnée qui accompagne vos enfants au quotidien.
            </p>
            <p className="mt-6 font-heading text-xl text-primary-800">Ahmed ABBOU</p>
            <p className="text-sm text-ink/60">Directeur et Fondateur du Groupe Scolaire Les Lumières</p>

            <div className="mt-8 rounded-xl border border-gold-200 bg-gold-50 p-6">
              <h2 className="mb-2 font-heading text-xl text-primary-800">Venez nous rencontrer</h2>
              <p className="mb-4 text-sm text-ink/80">
                Rien ne remplace une visite. Contactez-nous pour convenir d’un rendez-vous et découvrir notre école.
              </p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="h-5 w-5" /> Contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
