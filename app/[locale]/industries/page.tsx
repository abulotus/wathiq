import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import IndustriesPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/industries', title: 'القطاعات', description: 'كيف يدعم واثق قطاعات مختلفة.' })
    : localizedMetadata({ locale, path: '/industries', title: 'Industries', description: 'How Wathiq supports different sectors.' });
}

export default function Page() {
  return <IndustriesPage />;
}
