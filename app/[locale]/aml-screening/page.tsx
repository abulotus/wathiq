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
        title: 'فحص غسل الاموال — العقوبات والشخصيات السياسية وأقاربها',
        description: 'يفحص واثق الأفراد مقابل مصادر العقوبات والشخصيات السياسية المعرّضة للمخاطر (PEP) وأقاربها (RCA) التي تختارها مؤسستك، تلقائياً أو عند الطلب أو بمراقبة مستمرة، مع حالة تحقيق ومراجعة امتثال كاملة.',
      })
    : localizedMetadata({
        locale,
        path: '/aml-screening',
        title: 'AML Screening — Sanctions, PEP & RCA Matching',
        description: "Wathiq screens individuals against your organisation's selected sanctions, PEP, and RCA sources, automatically, on demand, or through continuous monitoring, with a full investigation and compliance review workflow.",
      });
}

export default function Page() {
  return <AmlScreeningPage />;
}
