import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import HowItWorks from '@/components/sections/HowItWorks';
import VerificationExperience from '@/components/sections/VerificationExperience';
import PlatformOverview from '@/components/sections/PlatformOverview';
import ArabicFirstExperience from '@/components/sections/ArabicFirstExperience';
import SecurityCompliance from '@/components/sections/SecurityCompliance';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
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

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return (
    <>
      <Hero locale={locale} />
      <TrustedBy locale={locale} />
      <HowItWorks locale={locale} />
      <VerificationExperience locale={locale} />
      <PlatformOverview locale={locale} />
      <ArabicFirstExperience locale={locale} />
      <SecurityCompliance locale={locale} />
      <FAQ locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
