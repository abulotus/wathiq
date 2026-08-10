import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import IndustriesPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/industries', title: 'القطاعات', description: 'كيف يدعم واثق قطاعات مختلفة.' })
    : localizedMetadata({ locale, path: '/industries', title: 'Industries', description: 'How Wathiq supports different sectors.' });
}

export default function Page() {
  return <IndustriesPage />;
}
