import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import HowItWorks from '@/components/sections/HowItWorks';
import VerificationExperience from '@/components/sections/VerificationExperience';
import PlatformOverview from '@/components/sections/PlatformOverview';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ArabicFirstExperience from '@/components/sections/ArabicFirstExperience';
import SecurityCompliance from '@/components/sections/SecurityCompliance';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({
        locale,
        path: '/',
        title: 'واثق | التحقق من جوازات السفر الإلكترونية بواجهة عربية',
        description: 'يتحقق واثق من جوازات السفر الإلكترونية المدعومة من 140 دولة بواجهة عربية أولاً — متصلة عبر API وWebhooks ولوحة تحكم عملاء وتطبيق جوال.',
      })
    : localizedMetadata({
        locale,
        path: '/',
        title: 'Wathiq | Arabic-First ePassport Verification',
        description: 'Wathiq verifies supported electronic passports from 140 countries with an Arabic-first experience — connected through an API, webhooks, a client dashboard, and a mobile app.',
      });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <VerificationExperience />
      <PlatformOverview />
      <ProductShowcase />
      <ArabicFirstExperience />
      <SecurityCompliance />
      <FAQ />
      <FinalCTA />
    </>
  );
}
