'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import WathiqLogo from '@/components/ui/WathiqLogo';
import SecurityWeave from '@/components/ui/SecurityWeave';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const groups = {
  en: [
    {
      title: 'Platform',
      items: [
        { label: 'Platform', path: '/platform' },
        { label: 'ePassport Coverage', path: '/epassport-coverage' },
        { label: 'AML Screening', path: '/aml-screening' },
        { label: 'Developers', path: '/developers' },
        { label: 'Client Dashboard', path: '/client-dashboard' },
        { label: 'Mobile App', path: '/mobile-app' },
      ],
    },
    {
      title: 'Company',
      items: [
        { label: 'About Us', path: '/company' },
        { label: 'Careers', path: '/careers' },
        { label: 'Partnerships', path: '/partnerships' },
        { label: 'Contact Us', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      items: [
        { label: 'Case Studies', path: '/case-studies' },
        { label: 'Pricing', path: '/pricing' },
        { label: 'Blog', path: '/blog' },
      ],
    },
    {
      title: 'Legal',
      items: [
        { label: 'Privacy Notice', path: '/privacy' },
        { label: 'Service Data Information', path: '/service-data' },
        { label: 'Terms', path: '/terms' },
        { label: 'Cookie Notice', path: '/cookies' },
      ],
    },
  ],
  ar: [
    {
      title: 'المنصة',
      items: [
        { label: 'المنصة', path: '/platform' },
        { label: 'تغطية جوازات السفر', path: '/epassport-coverage' },
        { label: 'فحص غسل الاموال', path: '/aml-screening' },
        { label: 'المطورون', path: '/developers' },
        { label: 'لوحة تحكم العملاء', path: '/client-dashboard' },
        { label: 'تطبيق الجوال', path: '/mobile-app' },
      ],
    },
    {
      title: 'الشركة',
      items: [
        { label: 'من نحن', path: '/company' },
        { label: 'وظائف', path: '/careers' },
        { label: 'الشراكات', path: '/partnerships' },
        { label: 'تواصل معنا', path: '/contact' },
      ],
    },
    {
      title: 'الموارد',
      items: [
        { label: 'دراسات حالة', path: '/case-studies' },
        { label: 'التسعير', path: '/pricing' },
        { label: 'المدونة', path: '/blog' },
      ],
    },
    {
      title: 'القانونية',
      items: [
        { label: 'إشعار الخصوصية', path: '/privacy' },
        { label: 'بيانات خدمة التحقق', path: '/service-data' },
        { label: 'الشروط', path: '/terms' },
        { label: 'إشعار ملفات تعريف الارتباط', path: '/cookies' },
      ],
    },
  ],
};

export default function Footer() {
  const { isRTL, href } = useLanguage();
  const navGroups = isRTL ? groups.ar : groups.en;

  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1530 0%, #071130 45%, #04091C 100%)' }}
    >
      <SecurityWeave className="opacity-[0.06]" />
      <div className="w-full overflow-hidden leading-none relative" style={{ height: 72 }}>
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 72L1440 10V72H0Z" fill="#0A1530" />
        </svg>
      </div>

      <div className="container-wide pt-8 pb-12 sm:pt-12 sm:pb-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-white/10">
          <div className="lg:col-span-2">
            <WathiqLogo variant="light" size="md" />
            <p className={`mt-4 text-slate-400 text-sm leading-relaxed max-w-xs ${isRTL ? 'text-right' : ''}`}>
              {isRTL
                ? 'منصة للتحقق من جوازات السفر الإلكترونية، مصمّمة بالعربية لتلبية احتياجات السوق السورية، مع تغطية عالمية.'
                : 'An Arabic-first ePassport verification platform designed for the Syrian market and connected internationally.'}
            </p>

            <div className="flex gap-3 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-electric-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {navGroups.map((group) => (
              <div key={group.title} className={isRTL ? 'text-right' : ''}>
                <h4 className="text-white font-semibold text-sm mb-4">{group.title}</h4>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={href(item.path)}
                        className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {isRTL ? 'واثق للتقنيات الرقمية. جميع الحقوق محفوظة.' : 'Wathiq Digital Technologies. All rights reserved.'}
          </p>
          <div className="flex items-center gap-6">
            <Link href={href('/privacy')} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              {isRTL ? 'الخصوصية' : 'Privacy'}
            </Link>
            <Link href={href('/terms')} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              {isRTL ? 'الشروط' : 'Terms'}
            </Link>
            <Link href={href('/cookies')} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              {isRTL ? 'ملفات تعريف الارتباط' : 'Cookies'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
