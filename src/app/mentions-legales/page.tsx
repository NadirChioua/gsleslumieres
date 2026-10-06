import { buildMetadata } from '@/lib/metadata';
import { SCHOOL, SITE_URL } from '@/lib/constants';
import { SCHOOL_IMAGES } from '@/lib/school-images';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';

export const metadata = buildMetadata({
  title: 'Mentions Légales | Groupe Scolaire Les Lumières Tanger',
  description:
    'Mentions légales du site du Groupe Scolaire Les Lumières à Tanger : éditeur, hébergement, propriété intellectuelle et protection des données personnelles.',
  path: '/mentions-legales',
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHero
        title="Mentions Légales"
        subtitle="Informations légales relatives au site gsleslumieres.ma."
        image={SCHOOL_IMAGES.general.schoolGroup}
        imageAlt="Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'Mentions légales', path: '/mentions-legales' }]} />

      <section className="section-padding">
        <div className="container-page max-w-3xl">
          <div className="rich-text">
            <h2>Éditeur du site</h2>
            <p>
              Le présent site est édité par le <strong>{SCHOOL.name}</strong> ({SCHOOL.nameAr}), établissement
              d’enseignement privé situé à {SCHOOL.address.full}.
            </p>
            <ul>
              <li>Directeur de la publication : {SCHOOL.director}</li>
              <li>Téléphone : {SCHOOL.phone1} / {SCHOOL.phone2}</li>
              <li>Email : {SCHOOL.email}</li>
              <li>Site web : {SITE_URL}</li>
            </ul>

            <h2>Hébergement</h2>
            <p>
              La publication du site est prévue sur Vercel. Informations sur le service :{' '}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) sont la
              propriété du {SCHOOL.name}, sauf mention contraire. Toute reproduction, représentation ou diffusion,
              totale ou partielle, sans autorisation préalable écrite, est interdite.
            </p>

            <h2 id="donnees-personnelles">Protection des données personnelles</h2>
            <p>
              Les formulaires préparent votre message dans votre navigateur. Le site ne l’enregistre pas
              dans une base de données. En ouvrant WhatsApp, vous transmettez le texte préparé à ce service ;
              votre demande parvient à l’école lorsque vous appuyez sur Envoyer dans WhatsApp.
              Les informations reçues servent à répondre à votre demande de contact ou d’inscription.
              N’ajoutez pas de documents d’identité ni d’informations médicales à votre message.
            </p>
            <p>
              Pour toute question concernant vos informations ou pour demander leur correction ou leur
              suppression, contactez l’école à <a href={`mailto:${SCHOOL.email}`}>{SCHOOL.email}</a>.
              L’utilisation de WhatsApp est également soumise à sa propre{' '}
              <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.
            </p>

            <h2>Cookies & mesure d’audience</h2>
            <p>
              Le site n’intègre actuellement ni Google Analytics, ni pixel publicitaire.
              Les services externes que vous choisissez d’ouvrir (WhatsApp, réseaux sociaux, Google Maps)
              appliquent leurs propres règles de confidentialité et de cookies.
            </p>

            <h2>Liens externes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers (réseaux sociaux, services de cartographie). Le
              {' '}{SCHOOL.name} n’est pas responsable du contenu de ces sites externes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
