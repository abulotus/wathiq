import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import PrivacyPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/privacy', title: 'إشعار الخصوصية', description: 'كيف يتعامل واثق مع بيانات زوار الموقع.' })
    : localizedMetadata({ locale, path: '/privacy', title: 'Privacy Notice', description: 'How Wathiq handles website visitor data.' });
}

export default function Page() {
  return <PrivacyPage />;
}
