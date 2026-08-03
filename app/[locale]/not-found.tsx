'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { isRTL, href } = useLanguage();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)' }} />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="text-electric-500 font-black text-9xl mb-6 animate-bounce">404</div>
        <h1 className="text-navy-900 text-4xl sm:text-5xl font-bold mb-4">
          {isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
        </h1>
        <p className="text-slate-600 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          {isRTL
            ? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
            : "The page you're looking for doesn't exist or has been moved."}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href={href('/')} className="btn-primary px-8 py-3 justify-center">
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
          <Link href={href('/contact')} className="btn-secondary px-8 py-3 justify-center">
            {isRTL ? 'تواصل مع الدعم' : 'Contact Support'}
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-200">
          <Link href={href('/platform')} className="group">
            <div className="text-slate-500 group-hover:text-electric-600 transition-colors mb-2">{isRTL ? 'المنصة' : 'Platform'}</div>
            <div className="text-slate-400 text-sm group-hover:text-slate-600 transition-colors">/platform</div>
          </Link>
          <Link href={href('/contact')} className="group">
            <div className="text-slate-500 group-hover:text-electric-600 transition-colors mb-2">{isRTL ? 'تواصل معنا' : 'Contact'}</div>
            <div className="text-slate-400 text-sm group-hover:text-slate-600 transition-colors">/contact</div>
          </Link>
          <Link href={href('/security')} className="group">
            <div className="text-slate-500 group-hover:text-electric-600 transition-colors mb-2">{isRTL ? 'الأمان' : 'Security'}</div>
            <div className="text-slate-400 text-sm group-hover:text-slate-600 transition-colors">/security</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
