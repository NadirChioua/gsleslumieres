import { buildMetadata } from '@/lib/metadata';
import { FAQS } from '@/lib/faq';
import { faqSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';
import PageHero from '@/components/shared/PageHero';
import BreadCrumb from '@/components/shared/BreadCrumb';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/shared/CTASection';
import { SCHOOL_IMAGES } from '@/lib/school-images';

export const metadata = buildMetadata({
  title: 'Questions Fréquentes (FAQ) | Groupe Scolaire Les Lumières Tanger',
  description:
    'Réponses aux questions fréquentes sur le Groupe Scolaire Les Lumières Tanger : inscriptions, tarifs, transport, programmes, langues, Cambridge, activités.',
  path: '/faq',
  keywords: ['FAQ école Tanger', 'inscription école privée Tanger', 'questions école Les Lumières'],
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQS)} />
      <PageHero
        title="Questions Fréquentes — Tout savoir sur Les Lumières"
        subtitle="Les réponses aux questions que se posent le plus souvent les parents sur notre école privée à Tanger."
        image={SCHOOL_IMAGES.general.schoolGroup}
        imageAlt="Couloir et espaces du Groupe Scolaire Les Lumières à Tanger"
      />
      <BreadCrumb items={[{ name: 'FAQ', path: '/faq' }]} />

      <section className="section-padding">
        <div className="container-page">
          <FAQAccordion items={FAQS} />
        </div>
      </section>

      <CTASection
        title="Vous avez d’autres questions ?"
        subtitle="Notre équipe vous répond rapidement par téléphone ou WhatsApp."
      />
    </>
  );
}
