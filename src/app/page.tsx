import HeroSection from '@/components/home/HeroSection';
import BrandPromiseStrip from '@/components/home/BrandPromiseStrip';
import StatsCounter from '@/components/home/StatsCounter';
import IntroSection from '@/components/home/IntroSection';
import CyclesGrid from '@/components/home/CyclesGrid';
import WhyUsSection from '@/components/home/WhyUsSection';
import CambridgeSection from '@/components/home/CambridgeSection';
import AdmissionsSection from '@/components/home/AdmissionsSection';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import ActivitiesGallery from '@/components/home/ActivitiesGallery';
import VideoSection from '@/components/home/VideoSection';
import CTASection from '@/components/shared/CTASection';
import JsonLd from '@/components/seo/JsonLd';
import { webPageSchema } from '@/lib/schema';

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          'École Privée Trilingue à Tanger — De la Maternelle au Lycée',
          'Groupe Scolaire Les Lumières, école privée trilingue à Tanger depuis 2004.',
          '/'
        )}
      />
      <HeroSection />
      <BrandPromiseStrip />
      <StatsCounter />
      <IntroSection />
      <CyclesGrid />
      <WhyUsSection />
      <CambridgeSection />
      <AdmissionsSection />
      <TestimonialsCarousel />
      <ActivitiesGallery />
      <VideoSection />
      <CTASection />
    </>
  );
}
