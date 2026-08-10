import type { Metadata } from 'next';
import { localizedMetadata } from '@/lib/seo';
import { Language } from '@/lib/translations';
import ClientDashboardPage from './content';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (localeParam === 'ar' ? 'ar' : 'en') as Language;
  return locale === 'ar'
    ? localizedMetadata({ locale, path: '/client-dashboard', title: 'لوحة تحكم العملاء', description: 'أدر نشاط التحقق من جوازات السفر الإلكترونية من مكان واحد.' })
    : localizedMetadata({ locale, path: '/client-dashboard', title: 'Client Dashboard', description: 'Manage ePassport verification activity from one place.' });
}

export default function Page() {
  return <ClientDashboardPage />;
}
