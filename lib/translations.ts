export type Language = 'en' | 'ar';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      industries: 'Industries',
      security: 'Security',
      partnership: 'Partnership',
      contact: 'Contact',
      getStarted: 'Get Started',
      switchLang: 'العربية',
    },

    // Hero
    hero: {
      badge: 'Enterprise Identity Verification',
      headline1: 'Identity Verification & Digital Trust Solutions',
      headline2: 'for Regulated Organisations',
      subheadline: 'Verify identities, reduce fraud, and streamline onboarding for banks, universities, government agencies, and enterprises.',
      cta1: 'Book a Demo',
      cta2: 'Talk to Sales',
    },

    // Introduction
    // About
    about: {
      tag: 'Our Company',
      title: 'Technology Built for the Region',
      body: 'We are a UK-registered technology company focused on helping organisations across the Middle East and beyond adopt secure digital solutions. Our mission is to simplify digital trust by providing businesses with reliable tools and modern approaches to identity, security, and customer protection.',
      mission: {
        title: 'Our Mission',
        body: 'Enable businesses to deliver secure and seamless digital experiences.',
      },
      vision: {
        title: 'Our Vision',
        body: 'Become a trusted technology partner for digital transformation in the region.',
      },
      values: {
        title: 'Our Values',
        items: [
          { title: 'Security First', desc: 'Protecting businesses and users through responsible technology.' },
          { title: 'Innovation', desc: 'Using modern technologies to solve real business challenges.' },
          { title: 'Trust', desc: 'Creating reliable digital relationships between companies and customers.' },
          { title: 'Simplicity', desc: 'Making complex technology easy to adopt.' },
        ],
      },
    },

    // Solutions
    solutions: {
      hero: {
        tag: 'Our Solutions',
        title: 'Comprehensive Digital Trust Solutions',
        subtitle: 'Modern identity and security technologies designed for businesses across the Middle East and beyond.',
      },
      identity: {
        tag: 'Identity',
        title: 'Know Your Customers. Build Trust.',
        body: 'Digital identity solutions help organizations create secure customer journeys while reducing risks associated with online interactions.',
        features: [
          'Customer Identity Verification',
          'Digital Onboarding Frameworks',
          'Identity Lifecycle Management',
          'Secure Access Solutions',
          'Multi-Factor Authentication',
          'Biometric Integration Concepts',
        ],
      },
      fraud: {
        tag: 'Fraud Prevention',
        title: 'Protect Your Business From Digital Risks',
        body: 'Online fraud continues to evolve. Businesses need smarter ways to identify risks and protect their customers from sophisticated threats.',
        features: [
          'Fraud Risk Management',
          'Suspicious Activity Awareness',
          'Account Security Frameworks',
          'Digital Protection Strategies',
          'Risk Scoring Models',
          'Behavioral Analysis Approaches',
        ],
      },
      business: {
        tag: 'Business Verification',
        title: 'Create Trusted Business Networks',
        body: 'Organizations need confidence when working with customers, suppliers, and partners. Establish trust at every business interaction.',
        features: [
          'Business Identity Verification',
          'Partner Due Diligence',
          'Trust Framework Design',
          'Secure Business Ecosystems',
          'Document Verification',
          'Compliance Support',
        ],
      },
    },

    // Industries
    industries: {
      hero: {
        tag: 'Industries',
        title: 'Serving Diverse Industries Across the Region',
        subtitle: 'Tailored digital trust solutions for every sector.',
      },
      items: [
        {
          title: 'Financial Services',
          desc: 'Helping financial organizations improve customer trust and digital experiences.',
          examples: ['Banks & Credit Institutions', 'Payment Service Providers', 'Digital Finance Companies', 'Insurance Firms'],
          icon: 'finance',
        },
        {
          title: 'E-Commerce',
          desc: 'Supporting online businesses in creating safer marketplaces for buyers and sellers.',
          examples: ['Seller Verification Systems', 'Customer Trust Frameworks', 'Fraud Reduction', 'Secure Checkout Flows'],
          icon: 'ecommerce',
        },
        {
          title: 'Telecom',
          desc: 'Helping communication providers secure digital services and protect subscribers.',
          examples: ['Customer Onboarding', 'Account Protection', 'SIM Security', 'Digital Service Access'],
          icon: 'telecom',
        },
        {
          title: 'Healthcare',
          desc: 'Supporting secure and private digital healthcare experiences.',
          examples: ['Patient Identity Management', 'Secure Medical Access', 'Provider Verification', 'Digital Health Records'],
          icon: 'health',
        },
        {
          title: 'Government & Organizations',
          desc: 'Supporting digital transformation initiatives with security at the core.',
          examples: ['Citizen Digital Services', 'Government Platforms', 'Public Sector Identity', 'Institutional Security'],
          icon: 'gov',
        },
        {
          title: 'Enterprise',
          desc: 'Empowering large organizations with scalable trust and security architectures.',
          examples: ['Corporate Identity Systems', 'Access Management', 'Internal Security Frameworks', 'Partner Trust'],
          icon: 'enterprise',
        },
      ],
    },

    // Security
    security: {
      hero: {
        tag: 'Security & Trust',
        title: 'Security and Trust at Every Step',
        subtitle: 'Security is not only a feature — it is the foundation of everything we build.',
      },
      principles: [
        { title: 'Data Protection', body: 'We design all solutions with data minimization and user privacy at the forefront, following international standards for data protection.' },
        { title: 'Privacy Commitment', body: 'User privacy is a core principle. We advocate for minimal data collection and transparent handling of personal information.' },
        { title: 'Secure Development', body: 'Our solutions follow secure-by-design principles, incorporating security reviews at every stage of the development process.' },
        { title: 'Responsible Technology', body: 'We build technology that serves people responsibly, with clear ethical guidelines and respect for user rights.' },
        { title: 'Business Continuity', body: 'Our architecture planning ensures reliable, resilient systems that support uninterrupted business operations.' },
        { title: 'Compliance Alignment', body: 'We stay current with regional and international regulatory requirements to help businesses remain compliant.' },
      ],
    },

    // Partnership
    partnership: {
      hero: {
        tag: 'Partner With Us',
        title: 'Partner With Us',
        subtitle: 'We collaborate with businesses, technology providers, and organizations to accelerate digital transformation.',
      },
      types: [
        { title: 'Technology Partners', desc: 'Integrate your technology with our identity and trust solutions to create comprehensive offerings.' },
        { title: 'Reseller Partners', desc: 'Extend your portfolio with digital trust solutions and grow your business in the region.' },
        { title: 'Implementation Partners', desc: 'Help organizations deploy and configure digital trust solutions for their specific needs.' },
        { title: 'Strategic Partners', desc: 'Collaborate on large-scale digital transformation initiatives for enterprises and institutions.' },
      ],
      cta: 'Start a Conversation',
      ctaSubtext: 'Tell us about your organization and how we can work together.',
    },

    // Contact
    contact: {
      hero: {
        tag: 'Get In Touch',
        title: "Let's Build Digital Trust Together",
        subtitle: 'Start a conversation with our team about how we can help your organization.',
      },
      form: {
        company: 'Company Name',
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        industry: 'Industry',
        message: 'Message',
        submit: 'Request Meeting',
        sending: 'Sending...',
        success: 'Message sent! We will be in touch shortly.',
        industries: [
          'Select Industry',
          'Financial Services',
          'Telecom',
          'E-Commerce',
          'Healthcare',
          'Government',
          'Enterprise',
          'Other',
        ],
      },
      info: {
        location: { label: 'Registered Address', value: '71-75 Shelton Street, London, WC2H 9JQ, United Kingdom' },
        email: { label: 'Email', value: 'contact@wathiq.digital' },
        phone: { label: 'Phone', value: '+44 7547 044020' },
        hours: { label: 'Business Hours', value: 'Sun – Thu, 9:00 AM – 5:00 PM' },
      },
    },

    // Footer
    footer: {
      tagline: 'Building digital trust for the Middle East and beyond.',
      links: {
        company: {
          title: 'Company',
          items: ['About Us', 'Our Mission', 'Careers', 'Contact Us'],
        },
        solutions: {
          title: 'Solutions',
          items: ['Digital Identity', 'Fraud Prevention', 'Business Verification'],
        },
        industries: {
          title: 'Industries',
          items: ['Financial Services', 'Telecom', 'E-Commerce', 'Healthcare', 'Government'],
        },
        legal: {
          title: 'Legal',
          items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
        },
      },
      copyright: '© 2025 Wathiq Digital Technologies. All rights reserved.',
    },
  },

  ar: {
    nav: {
      home: 'الرئيسية',
      solutions: 'الحلول',
      industries: 'القطاعات',
      security: 'الأمن',
      partnership: 'الشراكة',
      contact: 'اتصل بنا',
      getStarted: 'ابدأ الآن',
      switchLang: 'English',
    },

    hero: {
      badge: 'التحقق من الهوية للمؤسسات',
      headline1: 'حلول التحقق من الهوية والثقة الرقمية',
      headline2: 'للمؤسسات والشركات',
      subheadline: 'تحقق من الهويات، وقلل الاحتيال، وبسّط عملية الإعداد للبنوك والجامعات والجهات الحكومية والشركات.',
      cta1: 'احجز عرضاً تجريبياً',
      cta2: 'تحدث إلى فريق المبيعات',
    },

    about: {
      tag: 'شركتنا',
      title: 'تقنية مبنية للاحتياجات المحلية',
      body: 'نحن شركة تقنية مسجلة في المملكة المتحدة، متخصصة في مساعدة المؤسسات في الشرق الأوسط وما وراءه على تبني حلول رقمية آمنة. مهمتنا هي تبسيط الثقة الرقمية من خلال توفير أدوات موثوقة ومناهج حديثة في الهوية والأمن وحماية العملاء.',
      mission: {
        title: 'مهمتنا',
        body: 'تمكين الشركات من تقديم تجارب رقمية آمنة وسلسة.',
      },
      vision: {
        title: 'رؤيتنا',
        body: 'أن نصبح الشريك التقني الموثوق للتحول الرقمي في المنطقة.',
      },
      values: {
        title: 'قيمنا',
        items: [
          { title: 'الأمن أولاً', desc: 'حماية الشركات والمستخدمين من خلال التقنية المسؤولة.' },
          { title: 'الابتكار', desc: 'استخدام أحدث التقنيات لحل تحديات الأعمال الحقيقية.' },
          { title: 'الثقة', desc: 'بناء علاقات رقمية موثوقة بين الشركات وعملائها.' },
          { title: 'البساطة', desc: 'جعل التقنية المعقدة سهلة التبني والاستخدام.' },
        ],
      },
    },

    solutions: {
      hero: {
        tag: 'حلولنا',
        title: 'حلول شاملة للثقة الرقمية',
        subtitle: 'تقنيات هوية وأمن حديثة مصممة للشركات في الشرق الأوسط وما وراءه.',
      },
      identity: {
        tag: 'الهوية الرقمية',
        title: 'اعرف عملاءك. ابنِ الثقة.',
        body: 'تساعد حلول الهوية الرقمية المؤسسات على إنشاء رحلات عميل آمنة مع تقليل المخاطر المرتبطة بالتفاعلات عبر الإنترنت.',
        features: [
          'التحقق من هوية العملاء',
          'أطر الإعداد الرقمي',
          'إدارة دورة حياة الهوية',
          'حلول الوصول الآمن',
          'المصادقة متعددة العوامل',
          'مفاهيم التكامل البيومتري',
        ],
      },
      fraud: {
        tag: 'منع الاحتيال',
        title: 'احمِ عملك من المخاطر الرقمية',
        body: 'يتطور الاحتيال الإلكتروني باستمرار. تحتاج الشركات إلى طرق أكثر ذكاءً لتحديد المخاطر وحماية عملائها من التهديدات المتطورة.',
        features: [
          'إدارة مخاطر الاحتيال',
          'الوعي بالنشاط المشبوه',
          'أطر أمن الحسابات',
          'استراتيجيات الحماية الرقمية',
          'نماذج تقييم المخاطر',
          'مناهج التحليل السلوكي',
        ],
      },
      business: {
        tag: 'التحقق من الأعمال',
        title: 'أنشئ شبكات أعمال موثوقة',
        body: 'تحتاج المؤسسات إلى الثقة عند التعامل مع العملاء والموردين والشركاء. أرسِ الثقة في كل تفاعل تجاري.',
        features: [
          'التحقق من هوية الأعمال',
          'العناية الواجبة بالشركاء',
          'تصميم إطار الثقة',
          'بيئات الأعمال الآمنة',
          'التحقق من الوثائق',
          'دعم الامتثال',
        ],
      },
    },

    industries: {
      hero: {
        tag: 'القطاعات',
        title: 'خدمة قطاعات متنوعة في المنطقة',
        subtitle: 'حلول ثقة رقمية مخصصة لكل قطاع.',
      },
      items: [
        {
          title: 'الخدمات المالية',
          desc: 'مساعدة المؤسسات المالية على تحسين ثقة العملاء والتجارب الرقمية.',
          examples: ['البنوك ومؤسسات الائتمان', 'مزودو خدمات الدفع', 'شركات التمويل الرقمي', 'شركات التأمين'],
          icon: 'finance',
        },
        {
          title: 'التجارة الإلكترونية',
          desc: 'دعم الشركات عبر الإنترنت في إنشاء أسواق أكثر أماناً للمشترين والبائعين.',
          examples: ['أنظمة التحقق من البائعين', 'أطر ثقة العملاء', 'الحد من الاحتيال', 'تدفقات الدفع الآمنة'],
          icon: 'ecommerce',
        },
        {
          title: 'الاتصالات',
          desc: 'مساعدة مزودي الاتصالات على تأمين الخدمات الرقمية وحماية المشتركين.',
          examples: ['إعداد العملاء', 'حماية الحسابات', 'أمن الشريحة', 'الوصول للخدمات الرقمية'],
          icon: 'telecom',
        },
        {
          title: 'الرعاية الصحية',
          desc: 'دعم تجارب الرعاية الصحية الرقمية الآمنة والخاصة.',
          examples: ['إدارة هوية المريض', 'الوصول الطبي الآمن', 'التحقق من مزودي الخدمة', 'السجلات الصحية الرقمية'],
          icon: 'health',
        },
        {
          title: 'الحكومة والمؤسسات',
          desc: 'دعم مبادرات التحول الرقمي مع الأمن في جوهرها.',
          examples: ['الخدمات الرقمية للمواطنين', 'المنصات الحكومية', 'هوية القطاع العام', 'الأمن المؤسسي'],
          icon: 'gov',
        },
        {
          title: 'الشركات الكبرى',
          desc: 'تمكين المنظمات الكبيرة ببنى ثقة وأمن قابلة للتوسع.',
          examples: ['أنظمة الهوية المؤسسية', 'إدارة الوصول', 'أطر الأمن الداخلي', 'ثقة الشركاء'],
          icon: 'enterprise',
        },
      ],
    },

    security: {
      hero: {
        tag: 'الأمن والثقة',
        title: 'الأمن والثقة في كل خطوة',
        subtitle: 'الأمن ليس مجرد ميزة — بل هو أساس كل ما نبنيه.',
      },
      principles: [
        { title: 'حماية البيانات', body: 'نصمم جميع الحلول مع تقليل البيانات وخصوصية المستخدم في المقدمة، وفقاً للمعايير الدولية لحماية البيانات.' },
        { title: 'الالتزام بالخصوصية', body: 'خصوصية المستخدم مبدأ أساسي. نؤيد الحد الأدنى من جمع البيانات والتعامل الشفاف مع المعلومات الشخصية.' },
        { title: 'التطوير الآمن', body: 'تتبع حلولنا مبادئ التصميم الآمن، مع دمج مراجعات الأمان في كل مرحلة من مراحل عملية التطوير.' },
        { title: 'التقنية المسؤولة', body: 'نبني تقنية تخدم الناس بمسؤولية، مع إرشادات أخلاقية واضحة واحترام حقوق المستخدم.' },
        { title: 'استمرارية الأعمال', body: 'يضمن تخطيط بنيتنا التحتية وجود أنظمة موثوقة وقوية تدعم عمليات الأعمال المستمرة.' },
        { title: 'التوافق مع الامتثال', body: 'نواكب المتطلبات التنظيمية الإقليمية والدولية لمساعدة الشركات على البقاء ممتثلة.' },
      ],
    },

    partnership: {
      hero: {
        tag: 'اشتراك معنا',
        title: 'كن شريكنا',
        subtitle: 'نتعاون مع الشركات ومزودي التقنية والمنظمات لتسريع التحول الرقمي.',
      },
      types: [
        { title: 'شركاء التقنية', desc: 'ادمج تقنيتك مع حلول الهوية والثقة لدينا لإنشاء عروض شاملة.' },
        { title: 'شركاء إعادة البيع', desc: 'وسّع محفظتك بحلول الثقة الرقمية ونمِّ أعمالك في المنطقة.' },
        { title: 'شركاء التنفيذ', desc: 'ساعد المنظمات على نشر وتكوين حلول الثقة الرقمية لاحتياجاتها الخاصة.' },
        { title: 'الشركاء الاستراتيجيون', desc: 'تعاون في مبادرات التحول الرقمي واسعة النطاق للشركات والمؤسسات.' },
      ],
      cta: 'ابدأ محادثة',
      ctaSubtext: 'أخبرنا عن مؤسستك وكيف يمكننا العمل معاً.',
    },

    contact: {
      hero: {
        tag: 'تواصل معنا',
        title: 'لنبنِ الثقة الرقمية معاً',
        subtitle: 'ابدأ محادثة مع فريقنا حول كيفية مساعدة مؤسستك.',
      },
      form: {
        company: 'اسم الشركة',
        name: 'اسمك',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        industry: 'القطاع',
        message: 'الرسالة',
        submit: 'طلب اجتماع',
        sending: 'جارٍ الإرسال...',
        success: 'تم إرسال رسالتك! سنتواصل معك قريباً.',
        industries: [
          'اختر القطاع',
          'الخدمات المالية',
          'الاتصالات',
          'التجارة الإلكترونية',
          'الرعاية الصحية',
          'الحكومة',
          'الشركات الكبرى',
          'أخرى',
        ],
      },
      info: {
        location: { label: 'العنوان المسجل', value: '71-75 شيلتون ستريت، لندن، WC2H 9JQ، المملكة المتحدة' },
        email: { label: 'البريد الإلكتروني', value: 'contact@wathiq.digital' },
        phone: { label: 'الهاتف', value: '+963 11 XXX XXXX' },
        hours: { label: 'ساعات العمل', value: 'الأحد – الخميس، 9:00 صباحاً – 5:00 مساءً' },
      },
    },

    footer: {
      tagline: 'بناء الثقة الرقمية للشرق الأوسط وما وراءه.',
      links: {
        company: {
          title: 'الشركة',
          items: ['من نحن', 'مهمتنا', 'وظائف', 'تواصل معنا'],
        },
        solutions: {
          title: 'الحلول',
          items: ['الهوية الرقمية', 'منع الاحتيال', 'التحقق من الأعمال'],
        },
        industries: {
          title: 'القطاعات',
          items: ['الخدمات المالية', 'الاتصالات', 'التجارة الإلكترونية', 'الرعاية الصحية', 'الحكومة'],
        },
        legal: {
          title: 'القانونية',
          items: ['سياسة الخصوصية', 'شروط الخدمة', 'سياسة الكوكيز'],
        },
      },
      copyright: '© 2025 وثيق للتقنيات الرقمية. جميع الحقوق محفوظة.',
    },
  },
};

export type Translations = typeof translations.en;
