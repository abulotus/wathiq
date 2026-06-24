'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/ui/PageHero';
import AnimatedSection, { AnimatedItem } from '@/components/ui/AnimatedSection';
import SectionTag from '@/components/ui/SectionTag';
import TechBackground from '@/components/ui/TechBackground';
import Link from 'next/link';

const articles = {
  en: [
    {
      id: 1,
      title: 'The Future of Digital Identity in the Middle East',
      excerpt: 'Explore how digital identity solutions are reshaping trust and commerce across the region.',
      category: 'Digital Transformation',
      date: 'June 20, 2025',
      readTime: '5 min read',
      slug: 'future-digital-identity-mena',
    },
    {
      id: 2,
      title: '5 Identity Verification Best Practices for Financial Services',
      excerpt: 'Essential strategies to balance security, user experience, and regulatory compliance.',
      category: 'Best Practices',
      date: 'June 15, 2025',
      readTime: '6 min read',
      slug: 'identity-verification-best-practices',
    },
    {
      id: 3,
      title: 'How AI is Reducing Fraud in Real-Time',
      excerpt: 'Discover how machine learning models detect and prevent fraudulent transactions instantly.',
      category: 'Technology',
      date: 'June 10, 2025',
      readTime: '7 min read',
      slug: 'ai-fraud-prevention',
    },
    {
      id: 4,
      title: 'GDPR Compliance for Identity Verification: A Complete Guide',
      excerpt: 'Everything you need to know about maintaining compliance while verifying identities.',
      category: 'Compliance',
      date: 'June 5, 2025',
      readTime: '8 min read',
      slug: 'gdpr-identity-verification',
    },
    {
      id: 5,
      title: 'The Cost of Fraud: Why Prevention is Worth the Investment',
      excerpt: 'Calculate the true ROI of implementing advanced fraud detection systems.',
      category: 'Business',
      date: 'May 30, 2025',
      readTime: '6 min read',
      slug: 'cost-of-fraud-prevention',
    },
    {
      id: 6,
      title: 'Biometric Authentication: Security vs. Privacy',
      excerpt: 'Balancing the benefits of biometric security with user privacy concerns.',
      category: 'Security',
      date: 'May 25, 2025',
      readTime: '5 min read',
      slug: 'biometric-security-privacy',
    },
  ],
  ar: [
    {
      id: 1,
      title: 'مستقبل الهوية الرقمية في الشرق الأوسط',
      excerpt: 'اكتشف كيف تعيد حلول الهوية الرقمية تشكيل الثقة والتجارة عبر المنطقة.',
      category: 'التحول الرقمي',
      date: '20 يونيو 2025',
      readTime: 'قراءة 5 دقائق',
      slug: 'future-digital-identity-mena',
    },
    {
      id: 2,
      title: '5 أفضل الممارسات للتحقق من الهوية في الخدمات المالية',
      excerpt: 'استراتيجيات أساسية لتحقيق التوازن بين الأمان والتجربة والامتثال.',
      category: 'أفضل الممارسات',
      date: '15 يونيو 2025',
      readTime: 'قراءة 6 دقائق',
      slug: 'identity-verification-best-practices',
    },
    {
      id: 3,
      title: 'كيف يقلل الذكاء الاصطناعي من الاحتيال في الوقت الفعلي',
      excerpt: 'اكتشف كيف تكتشف نماذج التعلم الآلي وتمنع المعاملات الاحتيالية على الفور.',
      category: 'التكنولوجيا',
      date: '10 يونيو 2025',
      readTime: 'قراءة 7 دقائق',
      slug: 'ai-fraud-prevention',
    },
    {
      id: 4,
      title: 'الامتثال لنظام GDPR للتحقق من الهوية: دليل شامل',
      excerpt: 'كل ما تحتاج إلى معرفته عن الحفاظ على الامتثال مع التحقق من الهويات.',
      category: 'الامتثال',
      date: '5 يونيو 2025',
      readTime: 'قراءة 8 دقائق',
      slug: 'gdpr-identity-verification',
    },
    {
      id: 5,
      title: 'تكلفة الاحتيال: لماذا الوقاية تستحق الاستثمار',
      excerpt: 'احسب العائد الفعلي على الاستثمار لتطبيق أنظمة الكشف عن الاحتيال المتقدمة.',
      category: 'الأعمال',
      date: '30 مايو 2025',
      readTime: 'قراءة 6 دقائق',
      slug: 'cost-of-fraud-prevention',
    },
    {
      id: 6,
      title: 'المصادقة البيومترية: الأمان مقابل الخصوصية',
      excerpt: 'تحقيق التوازن بين فوائد أمان البيومترية ومخاوف خصوصية المستخدم.',
      category: 'الأمان',
      date: '25 مايو 2025',
      readTime: 'قراءة 5 دقائق',
      slug: 'biometric-security-privacy',
    },
  ],
};

export default function BlogPage() {
  const { isRTL } = useLanguage();
  const posts = isRTL ? articles.ar : articles.en;
  const categories = Array.from(new Set(posts.map(p => p.category)));

  return (
    <>
      <PageHero
        tag={isRTL ? 'المدونة' : 'Blog'}
        title={isRTL ? 'رؤى وأفكار' : 'Insights & Ideas'}
        subtitle={isRTL ? 'تعمّق أكثر في موضوعات الهوية الرقمية والأمان والثقة.' : 'Deep dive into digital identity, security, and trust topics.'}
      />

      <section className="py-14 sm:py-20 bg-white relative overflow-hidden">
        <TechBackground variant="light" />
        <div className="container-wide relative z-10">
          {/* Article Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post, i) => (
              <AnimatedItem key={post.id} index={i}>
                <a href={`/blog/${post.slug}`} className="group h-full">
                  <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col">
                    {/* Category Badge */}
                    <div className="px-6 pt-6">
                      <span className="inline-block bg-electric-50 text-electric-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                        {post.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-4 flex-1 flex flex-col">
                      <h3 className={`text-lg font-bold text-navy-900 mb-3 group-hover:text-electric-600 transition-colors line-clamp-2 ${isRTL ? 'text-right' : ''}`}>
                        {post.title}
                      </h3>
                      <p className={`text-slate-600 text-sm leading-relaxed flex-1 ${isRTL ? 'text-right' : ''}`}>
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className={`px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </a>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="heading-md text-white mb-6">
              {isRTL ? 'هل تريد أن تبقى محدثاً؟' : 'Stay Updated'}
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              {isRTL ? 'اشترك في رسالتنا الإخبارية للحصول على أحدث المقالات والرؤى.' : 'Subscribe to our newsletter for the latest articles and insights.'}
            </p>
            <a href="/contact" className="btn-primary px-8 py-3 inline-flex justify-center">
              {isRTL ? 'اشترك الآن' : 'Subscribe Now'}
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
