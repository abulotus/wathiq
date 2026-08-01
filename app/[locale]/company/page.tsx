import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import AboutPage from './content';

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (params.locale === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/company', title: 'الشركة', description: 'واثق منصة عربية أولاً للتحقق من جوازات السفر الإلكترونية، مصممة للسوق السورية.' })
    : localizedMetadata({ locale, path: '/company', title: 'Company', description: 'Wathiq is an Arabic-first ePassport verification platform designed for the Syrian market.' });
}

export default function Page() {
  return <AboutPage />;
}
