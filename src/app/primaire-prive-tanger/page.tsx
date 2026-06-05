import { buildMetadata } from '@/lib/metadata';
import { CYCLES_CONTENT } from '@/lib/cycles-content';
import CyclePageTemplate from '@/components/shared/CyclePageTemplate';

const data = CYCLES_CONTENT['primaire-prive-tanger'];

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/primaire-prive-tanger',
  ogImage: '/images/og/primaire.jpg',
  keywords: ['primaire privé Tanger', 'école primaire privée Tanger', 'Méthode de Singapour Tanger'],
});

export default function Page() {
  return <CyclePageTemplate data={data} />;
}
