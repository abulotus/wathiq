import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import CareersPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/careers', title: 'الوظائف', description: 'انضم إلى فريق واثق.' })
    : localizedMetadata({ locale, path: '/careers', title: 'Careers', description: 'Join the Wathiq team.' });
}

export default function Page() {
  return <CareersPage />;
}
