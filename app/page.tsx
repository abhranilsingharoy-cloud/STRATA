import HeroSection from '@/components/sections/HeroSection';
import IntroStatement from '@/components/sections/IntroStatement';
import ServicesGrid from '@/components/sections/ServicesGrid';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import ForClients from '@/components/sections/ForClients';
import AboutStats from '@/components/sections/AboutStats';
import TestimonialsMarquee from '@/components/sections/TestimonialsMarquee';
import TeamGrid from '@/components/sections/TeamGrid';
import JournalPreview from '@/components/sections/JournalPreview';
import CTABanner from '@/components/sections/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'STRATA — Architecture & Design Studio',
  description:
    'STRATA is an award-winning architecture and interior design studio. 180+ projects delivered, $120M+ built value, 15 design awards. Designing Form, Shaping Life.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroStatement />
      <ServicesGrid />
      <FeaturedProjects />
      <ForClients />
      <AboutStats />
      <TestimonialsMarquee />
      <TeamGrid />
      <JournalPreview />
      <CTABanner />
    </>
  );
}
