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
  title: 'Eco Architect AI — Generative Urban Planning',
  description:
    'Eco Architect AI is a Generative AI-powered urban planning assistant that helps architects and city planners design smarter, more sustainable cities.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroStatement />
      <ServicesGrid />
      <FeaturedProjects />
      <AboutStats />
      <TestimonialsMarquee />
      <CTABanner />
    </>
  );
}
