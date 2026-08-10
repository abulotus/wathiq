import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import AboutPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/company', title: 'الشركة', description: 'واثق منصة عربية أولاً للتحقق من جوازات السفر الإلكترونية، مصممة للسوق السورية.' })
    : localizedMetadata({ locale, path: '/company', title: 'Company', description: 'Wathiq is an Arabic-first ePassport verification platform designed for the Syrian market.' });
}

export default function Page() {
  return <AboutPage />;
}
