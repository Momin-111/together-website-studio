import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Compass,
  Menu,
  MessageCircle,
  MoveUpRight,
  PenTool,
  Sparkles,
  X,
} from 'lucide-react';

type Language = 'en' | 'ar';

const navItems = [
  { key: 'approach', href: '#approach' },
  { key: 'work', href: '#work' },
  { key: 'packages', href: '#packages' },
  { key: 'questions', href: '#questions' },
];

const packages = [
  {
    key: 'signal',
    name: 'Signal',
    price: 'from £2,400',
    detail: 'For a sharp, focused presence.',
    tone: 'sand',
    features: ['Strategy session', 'Up to 5 pages', 'Copy direction', '2-week launch'],
  },
  {
    key: 'together',
    name: 'Together',
    price: 'from £4,800',
    detail: 'Our most popular full rethink.',
    tone: 'teal',
    features: ['Positioning & messaging', 'Up to 10 pages', 'Conversion-led UX', '4-week launch'],
  },
  {
    key: 'custom',
    name: 'Custom',
    price: 'Let’s talk',
    detail: 'For businesses with more to say.',
    tone: 'ink',
    features: ['Bespoke scope', 'Content support', 'Complex journeys', 'A considered rollout'],
  },
];

const faqs = [
  {
    en: ['Will you write the words too?', 'Yes — we shape the messaging with you, then turn your raw notes, existing materials and expertise into clear, confident web copy. If a specialist writer is needed, we will say so upfront.'],
    ar: ['هل تكتبون المحتوى أيضاً؟', 'نعم، نساعدك في صياغة الرسائل ونحوّل ملاحظاتك وخبرتك إلى محتوى واضح وواثق. وإذا احتجنا إلى كاتب متخصص، نخبرك بذلك من البداية.'],
  },
  {
    en: ['How long does a project take?', 'Most projects go live in 3–5 weeks. We keep the process moving with focused decisions, short feedback windows and one clear point of contact.'],
    ar: ['كم يستغرق تنفيذ المشروع؟', 'معظم المشاريع تصبح جاهزة خلال 3 إلى 5 أسابيع. نحافظ على سرعة العمل من خلال قرارات واضحة، ومراجعات قصيرة، ونقطة تواصل واحدة.'],
  },
  {
    en: ['Can you work with my existing brand?', 'Absolutely. We can work inside what you have, refine the bits that are holding it back, or create a lighter visual direction where the brand needs more room to grow.'],
    ar: ['هل يمكنكم العمل مع هويتي الحالية؟', 'بالتأكيد. يمكننا تطوير ما لديك، تحسين الأجزاء التي تعيق الموقع، أو بناء اتجاه بصري أخف عندما تحتاج الهوية إلى مساحة أكبر للنمو.'],
  },
  {
    en: ['What happens after launch?', 'You get a handover you can actually use, plus 30 days of small fixes included. Ongoing support is available in a simple monthly block — no retainer maze.'],
    ar: ['ماذا يحدث بعد إطلاق الموقع؟', 'تحصل على شرح عملي يمكنك استخدامه، بالإضافة إلى 30 يوماً من التعديلات الصغيرة. ويتوفر الدعم المستمر ضمن باقة شهرية بسيطة، بلا تعقيدات.'],
  },
];

const copy = {
  en: {
    nav: { approach: 'Approach', work: 'Work', packages: 'Packages', questions: 'Questions' },
    start: 'Start a project',
    mobileCta: 'Tell us what you’re building',
    heroEyebrow: 'Websites for businesses going somewhere',
    heroDescription: 'Strategy, words and design for small businesses ready to look as good as they are. No jargon. No agency theatre. Just a site that makes the right people enquire.',
    quote: 'Get a clear quote',
    seeWork: 'See our work',
    built: 'Built for enquiries',
    studio: 'UK-based studio',
    journal: 'together journal',
    promise: <>Your website is often the first sales conversation. <em className="text-[#72b3ad]">Make it a good one.</em></>,
    promiseOne: <>Clear positioning<br />before pretty pixels</>,
    promiseTwo: <>A considered path<br />to “let’s talk”</>,
    way: 'The Together way',
    approachBody: 'You do not need another supplier to manage. You need a sharp creative partner who can see what your business is trying to become — and make that obvious online.',
    workEyebrow: 'Selected work',
    workTitle: <>The proof is<br /><span className="font-normal italic">in the feeling.</span></>,
    workBody: 'A few recent launches for people doing good, useful, wonderfully specific work.',
    workFooter: 'Every project gets a point of view',
    packagesEyebrow: 'Straightforward packages',
    packagesTitle: <>Good websites<br /><span className="font-normal italic text-[#277b78]">shouldn’t be mysterious.</span></>,
    packagesBody: 'A useful starting point, not a rigid menu. We will shape the scope around where you are going.',
    choose: 'Choose this route',
    noteEyebrow: 'A note from the studio',
    testimonial: '“Our website finally feels like the business we’ve built — and people can tell.”',
    questionsEyebrow: 'No question is too small',
    questionsTitle: <>Good to<br /><span className="italic font-normal text-[#ef7d63]">know.</span></>,
    questionsBody: 'Still weighing it up? That’s fine. Here are the things sensible business owners usually ask first.',
    quoteEyebrow: 'Let’s make a start',
    quoteTitle: <>Tell us what’s <span className="italic font-normal text-[#ef7d63]">next.</span></>,
    quoteBody: 'A few details is all we need. We’ll come back within two working days with a useful response — even if we’re not the right fit.',
    noHardSell: 'No hard sell. No mailing list ambush.',
    enquiry: 'Project enquiry',
    name: 'Your name',
    email: 'Email address',
    project: 'What are you working on?',
    namePlaceholder: 'Ada Lovelace',
    emailPlaceholder: 'ada@company.co.uk',
    projectPlaceholder: 'A new site, a complete rethink, or something in between…',
    send: 'Send enquiry',
    privacy: 'We only use your details to reply to this enquiry.',
    successTitle: 'That’s landed nicely.',
    successBody: 'Thanks for sharing a little about your next chapter. We’ll be in touch within two working days.',
    another: 'Send another note',
    footerStart: 'Start a project',
    footerEmail: 'hello@togethersites.co.uk',
    footer: '© 2024 Together',
  },
  ar: {
    nav: { approach: 'منهجنا', work: 'أعمالنا', packages: 'الباقات', questions: 'الأسئلة' },
    start: 'ابدأ مشروعك',
    mobileCta: 'أخبرنا بما تريد بناءه',
    heroEyebrow: 'مواقع إلكترونية لأعمال تتقدم إلى الأمام',
    heroDescription: 'استراتيجية ومحتوى وتصميم للأعمال الصغيرة التي تريد أن تظهر بقوة. بلا مصطلحات معقدة ولا تعقيدات وكالات. فقط موقع يجعل العملاء المناسبين يتواصلون معك.',
    quote: 'احصل على عرض واضح',
    seeWork: 'شاهد أعمالنا',
    built: 'مصمم لجذب الاستفسارات',
    studio: 'استوديو بريطاني',
    journal: 'مجلة together',
    promise: <>موقعك هو غالباً أول محادثة مبيعات مع عميلك. <em className="text-[#72b3ad]">اجعلها بداية جيدة.</em></>,
    promiseOne: <>تموضع واضح<br />قبل التفاصيل الجميلة</>,
    promiseTwo: <>طريق مدروس<br />نحو «لنتحدث»</>,
    way: 'طريقة Together',
    approachBody: 'لا تحتاج إلى مورد آخر لإدارته. تحتاج إلى شريك إبداعي يفهم ما الذي يريد عملك أن يصبح عليه، ويجعل ذلك واضحاً على الإنترنت.',
    workEyebrow: 'أعمال مختارة',
    workTitle: <>الدليل<br /><span className="font-normal italic">في الإحساس.</span></>,
    workBody: 'بعض المشاريع الأخيرة لأشخاص يقدمون أعمالاً مفيدة ومميزة ومحددة بوضوح.',
    workFooter: 'كل مشروع له وجهة نظر',
    packagesEyebrow: 'باقات واضحة',
    packagesTitle: <>مواقع جيدة<br /><span className="font-normal italic text-[#277b78]">بلا غموض.</span></>,
    packagesBody: 'نقطة بداية مفيدة وليست قائمة جامدة. نحدد نطاق العمل بما يناسب وجهتك.',
    choose: 'اختر هذه الباقة',
    noteEyebrow: 'رسالة من الاستوديو',
    testimonial: '«أصبح موقعنا يشبه العمل الذي بنيناه فعلاً — والناس يلاحظون ذلك.»',
    questionsEyebrow: 'لا يوجد سؤال صغير',
    questionsTitle: <>جيد أن<br /><span className="italic font-normal text-[#ef7d63]">تعرف.</span></>,
    questionsBody: 'ما زلت تفكر؟ لا بأس. هذه أكثر الأسئلة التي يطرحها أصحاب الأعمال عادةً.',
    quoteEyebrow: 'لنبدأ',
    quoteTitle: <>أخبرنا ما <span className="italic font-normal text-[#ef7d63]">التالي.</span></>,
    quoteBody: 'نحتاج إلى بعض التفاصيل فقط. سنعود إليك خلال يومي عمل برد مفيد، حتى لو لم نكن الخيار المناسب.',
    noHardSell: 'بلا ضغط. وبلا رسائل مزعجة.',
    enquiry: 'طلب مشروع',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    project: 'ماذا تريد أن تبني؟',
    namePlaceholder: 'محمد أحمد',
    emailPlaceholder: 'name@company.com',
    projectPlaceholder: 'موقع جديد، إعادة بناء كاملة، أو شيء بينهما…',
    send: 'إرسال الطلب',
    privacy: 'نستخدم بياناتك فقط للرد على هذا الطلب.',
    successTitle: 'وصل طلبك بنجاح.',
    successBody: 'شكراً لمشاركتنا تفاصيل خطوتك القادمة. سنتواصل معك خلال يومي عمل.',
    another: 'إرسال طلب آخر',
    footerStart: 'ابدأ مشروعك',
    footerEmail: 'hello@togethersites.co.uk',
    footer: '© 2024 Together',
  },
} as const;

function scrollToId(id: string, closeMenu?: () => void) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  closeMenu?.();
}

function Logo({ language }: { language: Language }) {
  return (
    <a href="#top" className="focus-ring inline-flex items-center gap-3" data-testid="link-logo" aria-label={language === 'ar' ? 'العودة إلى الصفحة الرئيسية' : 'Together home'}>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#ef7d63] text-[#192535]">
        <Compass size={17} strokeWidth={2.5} />
      </span>
      <span className="font-semibold tracking-[-0.04em] text-[#192535]">together<span className="text-[#ef7d63]">.</span></span>
    </a>
  );
}

function BrowserMockup({ variant = 'green', label }: { variant?: 'green' | 'coral' | 'ink'; label: string }) {
  const palette = {
    green: { page: '#c7d9ce', ink: '#19352f', accent: '#ef7d63' },
    coral: { page: '#f0a28b', ink: '#192535', accent: '#f4f0e7' },
    ink: { page: '#243a4b', ink: '#f4f0e7', accent: '#72b3ad' },
  }[variant];
  return (
    <div className="browser-shadow overflow-hidden rounded-[14px] border border-[#192535]/15 bg-[#f4f0e7]" data-testid={`mockup-${label}`}>
      <div className="flex h-8 items-center gap-1.5 border-b border-[#192535]/10 bg-[#fbf8f0] px-3">
        <span className="h-2 w-2 rounded-full bg-[#ef7d63]" />
        <span className="h-2 w-2 rounded-full bg-[#d9bd66]" />
        <span className="h-2 w-2 rounded-full bg-[#72b3ad]" />
        <span className="ml-3 h-2 w-20 rounded-full bg-[#192535]/10" />
      </div>
      <div className="relative min-h-[235px] overflow-hidden p-5" style={{ background: palette.page, color: palette.ink }}>
        <div className="flex items-center justify-between text-[8px] font-bold uppercase tracking-[.2em]">
          <span>{label}</span><span className="opacity-60">studio / 2024</span>
        </div>
        <div className="mt-8 max-w-[225px] font-serif text-[28px] font-bold leading-[.95]">
          Things worth making, <em className="font-normal">well.</em>
        </div>
        <div className="mt-4 h-1 w-16 rounded-full" style={{ background: palette.accent }} />
        <div className="absolute -bottom-10 -right-5 h-36 w-36 rounded-full border-[18px]" style={{ borderColor: palette.accent }} />
        <div className="absolute bottom-4 right-7 grid h-10 w-10 place-items-center rounded-full" style={{ background: palette.ink, color: palette.page }}><ArrowUpRight size={15} /></div>
      </div>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [activePackage, setActivePackage] = useState('Together');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const t = copy[language];
  const localizedPackages = language === 'ar'
    ? {
        signal: { detail: 'لحضور رقمي واضح ومركز.', features: ['جلسة استراتيجية', 'حتى 5 صفحات', 'توجيه المحتوى', 'إطلاق خلال أسبوعين'] },
        together: { detail: 'إعادة تفكير كاملة، وهي الأكثر طلباً.', features: ['تموضع ورسائل', 'حتى 10 صفحات', 'تجربة مستخدم تقود للتحويل', 'إطلاق خلال 4 أسابيع'] },
        custom: { detail: 'للأعمال التي لديها المزيد لتقوله.', features: ['نطاق مخصص', 'دعم المحتوى', 'رحلات مستخدم معقدة', 'إطلاق مدروس'] },
      }
    : {
        signal: { detail: packages[0].detail, features: packages[0].features },
        together: { detail: packages[1].detail, features: packages[1].features },
        custom: { detail: packages[2].detail, features: packages[2].features },
      };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = language === 'ar' ? 'Together — مواقع تجعل عملك يتقدم' : 'Together — Websites that earn their keep';
    const description = language === 'ar'
      ? 'Together تصمم مواقع واضحة ومقنعة للأعمال الصغيرة الطموحة.'
      : 'Together makes clear, conversion-focused websites for ambitious UK small businesses.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [language]);

  const goQuote = () => scrollToId('quote', () => setMenuOpen(false));

  return (
    <div id="top" lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'} className="grain min-h-[100dvh] overflow-hidden bg-[#f4f0e7] text-[#192535]">
      <header className="sticky top-0 z-40 border-b border-[#192535]/10 bg-[#f4f0e7]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1220px] items-center justify-between px-5 py-4 lg:px-8">
          <Logo language={language} />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navItems.map((item) => <a key={item.href} href={item.href} className="focus-ring text-[11px] font-bold uppercase tracking-[.14em] text-[#192535]/65 transition-colors hover:text-[#ef7d63]" data-testid={`link-nav-${item.key}`}>{t.nav[item.key as keyof typeof t.nav]}</a>)}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className="focus-ring rounded-full border border-[#192535]/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[.12em] transition-colors hover:border-[#ef7d63] hover:text-[#ef7d63]" aria-label={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'} data-testid="button-language-toggle">{language === 'en' ? 'العربية' : 'English'}</button>
            <button onClick={goQuote} className="focus-ring hidden items-center gap-2 rounded-full bg-[#192535] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[.12em] text-[#f4f0e7] transition-transform hover:-translate-y-0.5 md:flex" data-testid="button-header-quote">{t.start} <ArrowDownRight size={14} /></button>
            <button onClick={() => setMenuOpen((v) => !v)} className="focus-ring rounded-full p-2 md:hidden" aria-label={language === 'ar' ? 'فتح القائمة' : 'Toggle menu'} data-testid="button-mobile-menu">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
          </div>
        </div>
        {menuOpen && <div className="border-t border-[#192535]/10 bg-[#f4f0e7] px-5 py-5 md:hidden"><div className="flex flex-col gap-5">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="font-serif text-2xl italic" data-testid={`link-mobile-${item.key}`}>{t.nav[item.key as keyof typeof t.nav]}</a>)}<button onClick={goQuote} className="flex w-full items-center justify-between rounded-full bg-[#ef7d63] px-5 py-3 text-sm font-bold" data-testid="button-mobile-quote">{t.mobileCta} <ArrowRight size={16} /></button></div></div>}
      </header>

      <main>
        <section className="relative mx-auto grid max-w-[1220px] gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.03fr_.97fr] lg:items-center lg:px-8 lg:pb-32 lg:pt-24" aria-labelledby="hero-title">
          <div className="reveal relative z-10">
            <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#277b78]"><span className="h-px w-9 bg-[#277b78]" />{t.heroEyebrow}</div>
            {language === 'ar' ? <h1 id="hero-title" className="max-w-[700px] font-serif text-[clamp(3.8rem,8vw,7.5rem)] font-bold leading-[.86] tracking-[-.065em]">موقع يجعل <span className="italic font-normal text-[#277b78]">عملك</span> يتقدم.</h1> : <h1 id="hero-title" className="max-w-[700px] font-serif text-[clamp(3.8rem,8vw,7.5rem)] font-bold leading-[.86] tracking-[-.065em]">A website that <span className="italic font-normal text-[#277b78]">pulls</span> its weight.</h1>}
            <p className="mt-8 max-w-[480px] text-base leading-7 text-[#192535]/70 lg:text-lg">{t.heroDescription}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button onClick={goQuote} className="focus-ring group flex items-center gap-3 rounded-full bg-[#ef7d63] px-6 py-3.5 text-sm font-bold text-[#192535] transition-all hover:-translate-y-1 hover:pr-5" data-testid="button-hero-quote">{t.quote} <span className="grid h-6 w-6 place-items-center rounded-full bg-[#192535] text-[#f4f0e7] transition-transform group-hover:rotate-45"><ArrowUpRight size={14} /></span></button>
              <a href="#work" className="focus-ring flex items-center gap-2 text-sm font-bold underline decoration-[#ef7d63] decoration-2 underline-offset-4" data-testid="link-hero-work">{t.seeWork} <ArrowRight size={15} /></a>
            </div>
            <div className="mt-12 flex items-center gap-5 text-[11px] font-semibold text-[#192535]/55"><span className="flex items-center gap-2"><CircleCheck size={15} className="text-[#277b78]" /> {t.built}</span><span className="flex items-center gap-2"><CircleCheck size={15} className="text-[#277b78]" /> {t.studio}</span></div>
          </div>
          <div className="reveal reveal-delay-2 relative min-h-[420px] lg:min-h-[545px]">
            <div className="absolute right-2 top-5 h-[300px] w-[300px] rounded-full bg-[#ef7d63] lg:right-16 lg:h-[410px] lg:w-[410px]" />
            <div className="absolute -left-2 top-20 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#192535]/25 bg-[#f4f0e7] text-center text-[10px] font-bold uppercase leading-3 tracking-wide lg:left-8"><span>Good<br />stuff</span></div>
            <div className="drift absolute right-0 top-20 z-20 w-[92%] rotate-[-4deg] lg:right-4 lg:top-20"><BrowserMockup label={t.journal} variant="green" /></div>
            <div className="absolute bottom-1 left-0 z-30 w-[57%] rotate-[7deg] lg:left-2"><BrowserMockup label="Morrow & Moss" variant="ink" /></div>
            <div className="absolute bottom-4 right-[8%] z-40 rounded-full bg-[#277b78] px-4 py-2 font-mono text-[10px] text-[#f4f0e7] shadow-lg">more enquiries / less noise</div>
          </div>
        </section>

        <section className="border-y border-[#192535]/10 bg-[#192535] text-[#f4f0e7]" aria-label="Studio promise">
          <div className="mx-auto grid max-w-[1220px] gap-8 px-5 py-10 lg:grid-cols-[1.2fr_1fr_1fr] lg:items-center lg:px-8">
             <p className="font-serif text-2xl leading-tight lg:text-3xl">{t.promise}</p>
             <div className="flex items-center gap-4 border-l border-[#f4f0e7]/20 pl-5"><span className="font-serif text-4xl text-[#ef7d63]">01</span><p className="text-xs leading-5 text-[#f4f0e7]/65">{t.promiseOne}</p></div>
             <div className="flex items-center gap-4 border-l border-[#f4f0e7]/20 pl-5"><span className="font-serif text-4xl text-[#ef7d63]">02</span><p className="text-xs leading-5 text-[#f4f0e7]/65">{t.promiseTwo}</p></div>
          </div>
        </section>

        <section id="approach" className="mx-auto max-w-[1220px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[.76fr_1.24fr]">
            <div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#ef7d63]">{t.way}</p><h2 className="max-w-[400px] font-serif text-5xl font-bold leading-[.95] tracking-[-.04em] lg:text-6xl">{language === 'ar' ? <>استوديو صغير.<br /><span className="font-normal italic text-[#277b78]">تفكير كبير.</span></> : <>Small studio.<br /><span className="font-normal italic text-[#277b78]">Big thinking.</span></>}</h2><p className="mt-7 max-w-[340px] text-sm leading-6 text-[#192535]/65">{t.approachBody}</p></div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                [PenTool, 'Make it make sense', 'We find the useful truth in your business and give it a shape customers understand in seconds.'],
                [MessageCircle, 'Say the right thing', 'No filler. Just words with a point of view, written in a voice that sounds like you on your best day.'],
                [Sparkles, 'Design for the yes', 'A calm, confident journey that answers questions early and makes contacting you feel easy.'],
                [Clock3, 'Keep it human', 'One small team, quick decisions, sensible timelines and no mysterious hand-offs.'],
              ].map(([Icon, title, text], index) => {
                const FeatureIcon = Icon as typeof PenTool;
                return <article key={title as string} className={`border-t border-[#192535]/15 pt-5 ${index > 1 ? 'sm:mt-8' : ''}`}><FeatureIcon className="mb-7 text-[#277b78]" size={21} strokeWidth={1.7} /><h3 className="font-serif text-2xl font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-[#192535]/60">{text as string}</p></article>;
              })}
            </div>
          </div>
        </section>

        <section id="work" className="bg-[#d8e5dd] px-5 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-[1220px]">
             <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#277b78]">{t.workEyebrow}</p><h2 className="max-w-[580px] font-serif text-5xl font-bold leading-[.92] tracking-[-.04em] lg:text-7xl">{t.workTitle}</h2></div><p className="max-w-[255px] text-sm leading-6 text-[#192535]/60">{t.workBody}</p></div>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
              <article className="group cursor-pointer" data-testid="card-work-morrow"><div className="overflow-hidden rounded-[18px] bg-[#a8c7ba] p-5 transition-transform duration-500 group-hover:-translate-y-2 sm:p-10"><BrowserMockup label="Morrow & Moss" variant="ink" /></div><div className="mt-4 flex items-start justify-between"><div><h3 className="font-serif text-2xl font-bold">Morrow & Moss</h3><p className="mt-1 text-xs text-[#192535]/60">Botanical studio / London</p></div><MoveUpRight className="text-[#277b78]" size={20} /></div></article>
              <article className="group cursor-pointer lg:mt-28" data-testid="card-work-fieldnote"><div className="overflow-hidden rounded-[18px] bg-[#ef7d63] p-5 transition-transform duration-500 group-hover:-translate-y-2 sm:p-7"><BrowserMockup label="Fieldnote" variant="coral" /></div><div className="mt-4 flex items-start justify-between"><div><h3 className="font-serif text-2xl font-bold">Fieldnote</h3><p className="mt-1 text-xs text-[#192535]/60">Independent consultancy / Bristol</p></div><MoveUpRight className="text-[#277b78]" size={20} /></div></article>
            </div>
             <div className="mt-14 flex items-center gap-4 text-xs font-bold uppercase tracking-[.15em] text-[#277b78]"><span className="pulse-line h-px w-14 bg-[#277b78]" /> {t.workFooter}</div>
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-[1220px] px-5 py-24 lg:px-8 lg:py-32">
          <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#ef7d63]">Straightforward packages</p><h2 className="max-w-[650px] font-serif text-5xl font-bold leading-[.92] tracking-[-.04em] lg:text-7xl">Good websites<br /><span className="font-normal italic text-[#277b78]">shouldn’t be mysterious.</span></h2></div><p className="max-w-[280px] text-sm leading-6 text-[#192535]/60">A useful starting point, not a rigid menu. We will shape the scope around where you are going.</p></div>
          <div className="grid gap-4 lg:grid-cols-3">
             {packages.map((pack) => { const localized = localizedPackages[pack.key as keyof typeof localizedPackages]; return <button key={pack.name} onClick={() => { setActivePackage(pack.name); goQuote(); }} className={`focus-ring group text-left ${pack.tone === 'teal' ? 'bg-[#277b78] text-[#f4f0e7]' : pack.tone === 'ink' ? 'bg-[#192535] text-[#f4f0e7]' : 'bg-[#eadfca] text-[#192535]'} min-h-[340px] rounded-[16px] p-7 transition-all hover:-translate-y-2 ${activePackage === pack.name ? 'ring-2 ring-[#ef7d63] ring-offset-4 ring-offset-[#f4f0e7]' : ''}`} data-testid={`button-package-${pack.name.toLowerCase()}`}><div className="flex items-start justify-between"><span className="font-mono text-[10px] uppercase tracking-[.16em] opacity-65">0{packages.indexOf(pack) + 1}</span>{activePackage === pack.name && <Check size={18} className="text-[#ef7d63]" />}</div><div className="mt-14"><h3 className="font-serif text-4xl font-bold">{pack.name}</h3><p className="mt-2 text-sm opacity-70">{localized.detail}</p><p className="mt-5 font-mono text-sm">{pack.price}</p></div><div className="mt-6 flex flex-wrap gap-2">{localized.features.map((feature) => <span key={feature} className="rounded-full border border-current/20 px-3 py-1 text-[10px] opacity-75">{feature}</span>)}</div><div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] group-hover:text-[#ef7d63]">{t.choose} <ArrowRight size={15} /></div></button>; })}
          </div>
        </section>

         <section className="bg-[#ef7d63] px-5 py-20 lg:px-8 lg:py-24"><div className="mx-auto grid max-w-[1220px] gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end"><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#192535]/65">{t.noteEyebrow}</p><blockquote className="max-w-[790px] font-serif text-4xl font-bold leading-[.98] tracking-[-.04em] lg:text-6xl">{t.testimonial}</blockquote></div><div className="border-l border-[#192535]/25 pl-5 text-sm leading-6 text-[#192535]/70"><p className="font-bold text-[#192535]">Imogen Hart</p><p>Founder, Morrow & Moss</p><p className="mt-4 font-mono text-[10px] uppercase tracking-[.16em]">Website launch / 2024</p></div></div></section>

         <section id="questions" className="mx-auto grid max-w-[1220px] gap-14 px-5 py-24 lg:grid-cols-[.7fr_1.3fr] lg:px-8 lg:py-32"><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#277b78]">{t.questionsEyebrow}</p><h2 className="font-serif text-5xl font-bold leading-[.92] tracking-[-.04em] lg:text-6xl">{t.questionsTitle}</h2><p className="mt-7 max-w-[280px] text-sm leading-6 text-[#192535]/60">{t.questionsBody}</p></div><div>{faqs.map((faq, index) => { const [question, answer] = faq[language]; return <div key={question} className="border-t border-[#192535]/15"><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="focus-ring flex w-full items-center justify-between py-6 text-left font-serif text-xl font-bold" aria-expanded={openFaq === index} data-testid={`button-faq-${index}`}><span>{question}</span><span className={`grid h-8 w-8 place-items-center rounded-full border border-[#192535]/20 transition-transform ${openFaq === index ? 'rotate-180 bg-[#277b78] text-[#f4f0e7]' : ''}`}><ChevronDown size={16} /></span></button>{openFaq === index && <p className="max-w-[640px] pb-7 pr-8 text-sm leading-6 text-[#192535]/65">{answer}</p>}</div>; })}</div></section>

         <section id="quote" className="bg-[#192535] px-5 py-24 text-[#f4f0e7] lg:px-8 lg:py-32"><div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[.85fr_1.15fr]"><div><p className="mb-5 text-[10px] font-bold uppercase tracking-[.22em] text-[#72b3ad]">{t.quoteEyebrow}</p><h2 className="max-w-[500px] font-serif text-6xl font-bold leading-[.88] tracking-[-.055em] lg:text-8xl">{t.quoteTitle}</h2><p className="mt-8 max-w-[360px] text-sm leading-6 text-[#f4f0e7]/65">{t.quoteBody}</p><div className="mt-9 flex items-center gap-2 text-xs text-[#f4f0e7]/55"><span className="h-2 w-2 rounded-full bg-[#72b3ad]" /> {t.noHardSell}</div></div>
           {submitted ? <div className="flex min-h-[390px] flex-col justify-center rounded-[18px] bg-[#277b78] p-7 sm:p-10"><CircleCheck size={42} className="mb-8 text-[#ef7d63]" /><h3 className="font-serif text-4xl font-bold leading-none">{t.successTitle}</h3><p className="mt-5 max-w-[390px] text-sm leading-6 text-[#f4f0e7]/75">{t.successBody}</p><button onClick={() => setSubmitted(false)} className="mt-8 w-fit text-xs font-bold uppercase tracking-[.15em] text-[#ef7d63] underline underline-offset-4" data-testid="button-send-another">{t.another}</button></div> : <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="rounded-[18px] bg-[#f4f0e7] p-6 text-[#192535] sm:p-10" data-testid="form-quote"><div className="mb-8 flex items-center justify-between border-b border-[#192535]/15 pb-5"><span className="font-mono text-[10px] uppercase tracking-[.16em] text-[#277b78]">{t.enquiry}</span><span className="rounded-full bg-[#d8e5dd] px-3 py-1 text-[10px] font-bold text-[#277b78]">{activePackage}</span></div><div className="grid gap-6 sm:grid-cols-2"><label className="text-xs font-bold">{t.name}<input required name="name" type="text" placeholder={t.namePlaceholder} className="focus-ring mt-2 w-full border-b border-[#192535]/20 bg-transparent py-3 text-sm outline-none placeholder:text-[#192535]/35" data-testid="input-name" /></label><label className="text-xs font-bold">{t.email}<input required name="email" type="email" placeholder={t.emailPlaceholder} className="focus-ring mt-2 w-full border-b border-[#192535]/20 bg-transparent py-3 text-sm outline-none placeholder:text-[#192535]/35" data-testid="input-email" /></label></div><label className="mt-7 block text-xs font-bold">{t.project}<textarea required name="message" rows={3} placeholder={t.projectPlaceholder} className="focus-ring mt-2 w-full resize-none border-b border-[#192535]/20 bg-transparent py-3 text-sm outline-none placeholder:text-[#192535]/35" data-testid="input-project" /></label><button type="submit" className="focus-ring mt-9 flex w-full items-center justify-between rounded-full bg-[#ef7d63] px-5 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5" data-testid="button-submit-quote">{t.send} <ArrowUpRight size={17} /></button><p className="mt-4 text-center text-[10px] text-[#192535]/45">{t.privacy}</p></form>}
        </div></section>
      </main>

      <footer className="bg-[#192535] px-5 pb-8 text-[#f4f0e7] lg:px-8"><div className="mx-auto max-w-[1220px] border-t border-[#f4f0e7]/15 pt-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><a href="#top" className="font-serif text-2xl font-bold" data-testid="link-footer-logo">together<span className="text-[#ef7d63]">.</span></a><div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-bold uppercase tracking-[.15em] text-[#f4f0e7]/55"><a href="mailto:hello@togethersites.co.uk" className="hover:text-[#ef7d63]" data-testid="link-footer-email">{t.footerEmail}</a><a href="#quote" className="hover:text-[#ef7d63]" data-testid="link-footer-start">{t.footerStart}</a><span>{t.footer}</span></div></div></div></footer>
    </div>
  );
}

function App() {
  return <Home />;
}

export default App;
