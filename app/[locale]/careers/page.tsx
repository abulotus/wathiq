import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import CareersPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/careers', title: 'الوظائف', description: 'انضم إلى فريق واثق.' })
    : localizedMetadata({ locale, path: '/careers', title: 'Careers', description: 'Join the Wathiq team.' });
}

export default function Page() {
  return <CareersPage />;
}
