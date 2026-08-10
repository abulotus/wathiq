import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import ContactPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/contact', title: 'تواصل معنا', description: 'تواصل مع فريق واثق لطلب عرض تجريبي أو مناقشة متطلبات التحقق من جوازات السفر الإلكترونية.' })
    : localizedMetadata({ locale, path: '/contact', title: 'Contact', description: 'Get in touch with the Wathiq team to request a demo or discuss your ePassport verification requirements.' });
}

export default function Page() {
  return <ContactPage />;
}
