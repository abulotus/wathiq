import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import ServiceDataPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/service-data', title: 'بيانات خدمة التحقق', description: 'كيف يتعامل واثق مع بيانات التحقق من جوازات السفر الإلكترونية.' })
    : localizedMetadata({ locale, path: '/service-data', title: 'Service Data Information', description: 'How Wathiq handles ePassport verification service data.' });
}

export default function Page() {
  return <ServiceDataPage />;
}
