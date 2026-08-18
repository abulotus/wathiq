import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import PlatformPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/platform', title: 'المنصة', description: 'التحقق من جوازات السفر الإلكترونية، مع فحص غسل الاموال كإضافة — متصلان بواجهة برمجة تطبيقات وWebhooks ولوحة تحكم عملاء مشتركة.' })
    : localizedMetadata({ locale, path: '/platform', title: 'Platform', description: 'ePassport verification, with AML screening as an add-on — both connected through a shared API, webhooks, and client dashboard.' });
}

export default function Page() {
  return <PlatformPage />;
}
