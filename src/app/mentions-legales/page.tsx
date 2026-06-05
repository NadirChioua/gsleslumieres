import { buildMetadata } from '@/lib/metadata';
import { SCHOOL, SITE_URL } from '@/lib/constants';
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
        image="/images/campus/campus-2.jpg"
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
              Le site est hébergé sur une plateforme d’hébergement web statique (par exemple Vercel, Netlify ou un
              hébergeur équivalent). Les coordonnées de l’hébergeur peuvent être communiquées sur demande.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus présents sur ce site (textes, images, logos, éléments graphiques) sont la
              propriété du {SCHOOL.name}, sauf mention contraire. Toute reproduction, représentation ou diffusion,
              totale ou partielle, sans autorisation préalable écrite, est interdite.
            </p>

            <h2>Protection des données personnelles</h2>
            <p>
              Les informations collectées via les formulaires de contact et d’inscription sont destinées exclusivement
              au {SCHOOL.name} et servent uniquement à traiter votre demande. Conformément à la loi marocaine n° 09-08
              relative à la protection des personnes physiques à l’égard du traitement des données à caractère
              personnel, vous disposez d’un droit d’accès, de rectification et de suppression de vos données. Pour
              l’exercer, contactez-nous à {SCHOOL.email}.
            </p>

            <h2>Cookies & mesure d’audience</h2>
            <p>
              Ce site peut utiliser des outils de mesure d’audience (Google Analytics) et des balises publicitaires
              afin d’améliorer votre expérience et nos services. Vous pouvez configurer votre navigateur pour refuser
              les cookies.
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
