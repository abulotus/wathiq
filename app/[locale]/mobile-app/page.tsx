import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import MobileAppPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/mobile-app', title: 'تطبيق الجوال', description: 'تجربة جوال عربية للتحقق من جوازات السفر الإلكترونية.' })
    : localizedMetadata({ locale, path: '/mobile-app', title: 'Mobile App', description: 'An Arabic mobile experience for ePassport verification.' });
}

export default function Page() {
  return <MobileAppPage />;
}
