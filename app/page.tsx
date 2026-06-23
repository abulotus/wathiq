import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import Introduction from '@/components/sections/Introduction';
import HowItWorks from '@/components/sections/HowItWorks';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FAQ from '@/components/sections/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wathiq Digital | Building Digital Trust for the Future',
  description: 'A UK-registered digital identity and trust technology company. We help organisations verify identities, prevent fraud, and build secure digital experiences across the Middle East and beyond.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Introduction />
      <HowItWorks />
      <Testimonials />
      <About />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}
