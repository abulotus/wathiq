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
        title: 'فحص الامتثال لمكافحة غسل الأموال والتحقق من الهوية',
        description: 'تحقق من هوية الأشخاص وافحص بياناتهم مقابل مصادر العقوبات والأشخاص المعرّضين سياسياً وأفراد أسرهم والمقرّبين منهم، مع مراجعة موثّقة ومراقبة مستمرة اختيارية.',
      })
    : localizedMetadata({
        locale,
        path: '/aml-screening',
        title: 'Identity verification with built-in AML screening',
        description: 'Verify identities and screen them against supported sanctions, PEP and RCA sources in one connected workflow. Organisations control when screening runs, which sources are enabled and whether continuous monitoring is active.',
      });
}

export default function Page() {
  return <AmlScreeningPage />;
}
