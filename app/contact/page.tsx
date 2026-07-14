import ContactForm from '@/components/sections/ContactForm';
import CTABanner from '@/components/sections/CTABanner';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Start Your Architecture Project',
  description:
    'Contact ECO.AI Architecture Studio to discuss your project. Book a free consultation with our award-winning team of architects and interior designers.',
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-[60px]">
        <ContactForm />
      </div>
      <CTABanner />
    </>
  );
}
