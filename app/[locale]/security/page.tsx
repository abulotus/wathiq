import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import SecurityPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/security', title: 'الأمان والخصوصية', description: 'مبادئ واثق في الأمان وحماية البيانات.' })
    : localizedMetadata({ locale, path: '/security', title: 'Security & Privacy', description: "Wathiq's security and data protection principles." });
}

export default function Page() {
  return <SecurityPage />;
}
