import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import CaseStudiesPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/case-studies', title: 'دراسات الحالات', description: 'دراسات حالات معتمدة لعملاء واثق.' })
    : localizedMetadata({ locale, path: '/case-studies', title: 'Case Studies', description: "Approved case studies from Wathiq's customers." });
}

export default function Page() {
  return <CaseStudiesPage />;
}
