import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import CookiesPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/cookies', title: 'إشعار الكوكيز', description: 'كيف يستخدم واثق ملفات تعريف الارتباط على موقعه.' })
    : localizedMetadata({ locale, path: '/cookies', title: 'Cookie Notice', description: 'How Wathiq uses cookies on this website.' });
}

export default function Page() {
  return <CookiesPage />;
}
