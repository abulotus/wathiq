import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import PlatformPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/platform', title: 'المنصة', description: 'التحقق من جوازات السفر الإلكترونية، وAPI وWebhooks، ولوحة تحكم العملاء — ثلاثة مكونات متصلة.' })
    : localizedMetadata({ locale, path: '/platform', title: 'Platform', description: 'ePassport verification, API & webhooks, and a client dashboard — three connected components.' });
}

export default function Page() {
  return <PlatformPage />;
}
