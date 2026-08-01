import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import PartnershipPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/partnerships', title: 'الشراكات', description: 'تعاون مع واثق.' })
    : localizedMetadata({ locale, path: '/partnerships', title: 'Partnerships', description: 'Partner with Wathiq.' });
}

export default function Page() {
  return <PartnershipPage />;
}
