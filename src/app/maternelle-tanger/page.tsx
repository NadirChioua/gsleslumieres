import { buildMetadata } from '@/lib/metadata';
import { CYCLES_CONTENT } from '@/lib/cycles-content';
import CyclePageTemplate from '@/components/shared/CyclePageTemplate';

const data = CYCLES_CONTENT['maternelle-tanger'];

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/maternelle-tanger',
  ogImage: data.heroImage,
  keywords: ['maternelle privée Tanger', 'école maternelle Val Fleuri', 'Montessori Tanger'],
});

export default function Page() {
  return <CyclePageTemplate data={data} />;
}
