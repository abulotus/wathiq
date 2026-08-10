import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import PartnershipPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/partnerships', title: 'الشراكات', description: 'تعاون مع واثق.' })
    : localizedMetadata({ locale, path: '/partnerships', title: 'Partnerships', description: 'Partner with Wathiq.' });
}

export default function Page() {
  return <PartnershipPage />;
}
