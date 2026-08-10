import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import SecurityPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/security', title: 'الأمان والخصوصية', description: 'مبادئ واثق في الأمان وحماية البيانات.' })
    : localizedMetadata({ locale, path: '/security', title: 'Security & Privacy', description: "Wathiq's security and data protection principles." });
}

export default function Page() {
  return <SecurityPage />;
}
