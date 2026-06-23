import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import HowItWorks from '@/components/sections/HowItWorks';
import ProductPreview from '@/components/sections/ProductPreview';
import SecurityCompliance from '@/components/sections/SecurityCompliance';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wathiq | Identity Verification & Digital Trust for Regulated Organisations',
  description: 'Verify identities, reduce fraud, and streamline onboarding for banks, universities, government agencies, and enterprises. UK-registered. GDPR compliant. ICO registered.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <ProductPreview />
      <SecurityCompliance />
      <About />
      <FAQ />
    </>
  );
}
