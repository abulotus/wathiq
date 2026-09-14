import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import PrivacyPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/privacy', title: 'سياسة الخصوصية', description: 'كيف يتعامل واثق مع بيانات الموقع وتطبيق التحقق من الهوية.' })
    : localizedMetadata({ locale, path: '/privacy', title: 'Privacy Policy', description: 'How Wathiq handles website and identity-verification application data.' });
}

export default function Page() {
  return <PrivacyPage />;
}
