import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import AmlScreeningPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({
        locale,
        path: '/aml-screening',
        title: 'فحص AML — العقوبات وقوائم الحظر',
        description: 'يفحص واثق الأفراد مقابل مصادر العقوبات وقوائم الحظر الرسمية التي تختارها مؤسستك، تلقائياً أو عند الطلب، مع حالة تحقيق ومراجعة امتثال كاملة.',
      })
    : localizedMetadata({
        locale,
        path: '/aml-screening',
        title: 'AML Screening — Sanctions & Watchlist Matching',
        description: "Wathiq screens individuals against your organisation's selected official sanctions and watchlist sources, automatically or on demand, with a full investigation and compliance review workflow.",
      });
}

export default function Page() {
  return <AmlScreeningPage />;
}
