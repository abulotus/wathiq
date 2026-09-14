import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import CoverageContent from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({
        locale,
        path: '/aml-screening/coverage',
        title: 'تغطية فحص مكافحة غسل الأموال',
        description: 'يدعم واثق فحصاً قابلاً للتخصيص عبر مصادر العقوبات الدولية الرئيسية وتغطية الأشخاص المعرضين سياسياً والأقارب والأشخاص ذي الصلة المركزة على سوريا.',
      })
    : localizedMetadata({
        locale,
        path: '/aml-screening/coverage',
        title: 'AML Screening Coverage',
        description: 'Wathiq supports configurable screening across major international sanctions sources together with Syria-focused PEP and RCA coverage.',
      });
}

export default function Page() {
  return <CoverageContent />;
}
