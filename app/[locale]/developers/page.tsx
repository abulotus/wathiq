import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import DevelopersPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/developers', title: 'المطورون', description: 'تكامل مع واثق عبر API وWebhooks.' })
    : localizedMetadata({ locale, path: '/developers', title: 'Developers', description: 'Integrate with Wathiq through API and webhooks.' });
}

export default function Page() {
  return <DevelopersPage />;
}
