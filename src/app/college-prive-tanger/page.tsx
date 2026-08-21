import { buildMetadata } from '@/lib/metadata';
import { CYCLES_CONTENT } from '@/lib/cycles-content';
import CyclePageTemplate from '@/components/shared/CyclePageTemplate';

const data = CYCLES_CONTENT['college-prive-tanger'];

export const metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: '/college-prive-tanger',
  ogImage: data.heroImage,
  keywords: ['collège privé Tanger', 'collège international Tanger', 'Cambridge English Tanger'],
});

export default function Page() {
  return <CyclePageTemplate data={data} />;
}
