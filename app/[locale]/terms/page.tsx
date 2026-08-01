import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import TermsPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/terms', title: 'الشروط', description: 'شروط استخدام موقع واثق.' })
    : localizedMetadata({ locale, path: '/terms', title: 'Terms', description: 'Terms of use for the Wathiq website.' });
}

export default function Page() {
  return <TermsPage />;
}
