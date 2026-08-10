import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import MobileAppPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/mobile-app', title: 'تطبيق الجوال', description: 'تجربة جوال عربية للتحقق من جوازات السفر الإلكترونية.' })
    : localizedMetadata({ locale, path: '/mobile-app', title: 'Mobile App', description: 'An Arabic mobile experience for ePassport verification.' });
}

export default function Page() {
  return <MobileAppPage />;
}
