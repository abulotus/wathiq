import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import PricingPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/pricing', title: 'التسعير', description: 'يعتمد تسعير واثق على متطلبات التحقق والحجم واحتياجات التكامل.' })
    : localizedMetadata({ locale, path: '/pricing', title: 'Pricing', description: "Wathiq's pricing is based on verification requirements, volume, and integration needs." });
}

export default function Page() {
  return <PricingPage />;
}
