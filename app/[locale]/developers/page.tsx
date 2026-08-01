import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import DevelopersPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/developers', title: 'المطورون', description: 'تكامل مع واثق عبر API وWebhooks.' })
    : localizedMetadata({ locale, path: '/developers', title: 'Developers', description: 'Integrate with Wathiq through API and webhooks.' });
}

export default function Page() {
  return <DevelopersPage />;
}
