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
        title: 'التحقق من الهوية مع فحص مكافحة غسل الأموال',
        description: 'تحقق من الهوية وافحصها مقابل العقوبات والأشخاص المعرضين سياسياً (PEP) والأقارب والأشخاص ذي الصلة (RCA) ضمن سير عمل متكامل. تتحكم المؤسسة في توقيت الفحص والمصادر المفعّلة والمراقبة المستمرة.',
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
