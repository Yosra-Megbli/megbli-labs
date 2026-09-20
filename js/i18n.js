// ===================== MEGBLI LABS — CONTENT =====================
// Edit texts here. Both languages live side by side.

const I18N = {
  en: {
    meta_title: "Megbli Labs — Web, Mobile & AI products",
    nav: { work: "Work", services: "Services", process: "Process", team: "Team", contact: "Contact" },
    hero: {
      eyebrow: "Boutique software studio — Tunisia-based, working worldwide",
      h1: "We turn ideas into working digital products.",
      sub: "Megbli Labs is a three-engineer team building web platforms, mobile apps and AI-powered systems — from first sketch to production.",
      c1: "Web", c2: "Mobile", c3: "AI", c4: "SaaS",
      cta1: "Start a project", cta2: "See our work",
      trust: "ESPRIT-trained engineers · Products running in production · Direct communication, no middlemen"
    },
    services: {
      eyebrow: "Services", h2: "What we build",
      items: [
        { t: "Web Applications", d: "Business platforms, dashboards, portals and custom web applications built for speed and clarity." },
        { t: "Mobile Applications", d: "Cross-platform Android & iOS apps from a single codebase (Flutter), connected to solid backends." },
        { t: "AI & Automation", d: "Conversational agents, document intelligence, RAG systems, ML models and workflow automation." },
        { t: "Backend & APIs", d: "Secure REST APIs, databases, integrations and architectures designed to scale." },
        { t: "Launch & Operations", d: "Hosting, SSL, CI/CD and monitoring. You get a running product — not just code." }
      ]
    },
    work: { eyebrow: "Selected work", h2: "Projects that shipped", view: "View project →", demo: "Watch demo", code: "Source code", video: "Demo video",
      more_h: "More projects", more_sub: "Internship and academic work by the team, each with a recorded demo." },
    process: {
      eyebrow: "How we work", h2: "From idea to product — in clear steps",
      steps: [
        { t: "Discovery", d: "We understand your idea, users and goals — and what “done” means." },
        { t: "Scope & MVP", d: "We define the essential features, the timeline and a transparent quote." },
        { t: "Design", d: "Screens and user flows validated with you before development starts." },
        { t: "Build", d: "Development in weekly sprints, with progress you can actually see." },
        { t: "Test & Launch", d: "Automated testing, production deployment and monitoring." },
        { t: "Support", d: "Fixes, improvements and maintenance — exactly as agreed." }
      ]
    },
    team: {
      eyebrow: "The team", h2: "Three engineers. One team.",
      intro: "Two brothers and a sister — all software engineers trained at ESPRIT. You talk directly to the people who build your product.",
      members: [
        { initial: "Y", color: "#0d9488", name: "Yosra Megbli", role: "AI & Backend Engineer",
          bio: "Specialized in AI-powered products: LLM pipelines, RAG, agents and scalable backends. Published researcher (Springer, 2020) and tech lead on an enterprise document-intelligence system with 99.7% accuracy.",
          skills: ["Python","FastAPI","Django","LLM / RAG","LangGraph","Machine Learning"] },
        { initial: "H", color: "#1d4ed8", name: "Houssem Meguebli", role: "Full-Stack & Mobile Engineer",
          bio: "Builds web platforms and cross-platform mobile apps end-to-end — including deployment, monitoring and DevOps. Shipped production systems for a food-delivery platform and an industrial client.",
          skills: ["Spring Boot","Flutter","Angular / React","Docker / Nginx","CI/CD","MySQL / PostgreSQL"] },
        { initial: "M", color: "#b45309", name: "Mohamed Anouar Meguebli", role: "SaaS & ML Engineer",
          bio: "Author of SmartCampus TN — a multi-tenant school-management SaaS with integrated AI, 1,000+ automated tests and a real production deployment.",
          skills: ["Django","SaaS Architecture","Machine Learning","Computer Vision","PostgreSQL"] }
      ]
    },
    contact: {
      eyebrow: "Contact", h2: "Have an idea? Let's talk.",
      sub: "Tell us about your project — we usually reply the same day. First consultation is free, quotes are clear, and payments are staged.",
      wa: "Chat on WhatsApp", mail: "Send an email",
      wa_text: "Hello Megbli Labs, I'd like to discuss a project."
    },
    footer: "© {year} Megbli Labs — built by the team it presents.",
    back: "← Back to all projects"
  },

  ar: {
    meta_title: "Megbli Labs — منتجات ويب وموبايل وذكاء اصطناعي",
    nav: { work: "أعمالنا", services: "خدماتنا", process: "طريقة عملنا", team: "الفريق", contact: "تواصل" },
    hero: {
      eyebrow: "استوديو برمجي — من تونس، نعمل مع العالم",
      h1: "نحوّل الأفكار إلى منتجات رقمية تعمل فعلاً.",
      sub: "Megbli Labs فريق من ثلاثة مهندسين نبني منصات ويب وتطبيقات موبايل وأنظمة ذكاء اصطناعي — من أول سطر حتى الإطلاق.",
      c1: "ويب", c2: "موبايل", c3: "ذكاء اصطناعي", c4: "SaaS",
      cta1: "ابدأ مشروعك", cta2: "شاهد أعمالنا",
      trust: "مهندسون خريجو ESPRIT · منتجات تعمل في الإنتاج · تواصل مباشر بلا وسطاء"
    },
    services: {
      eyebrow: "خدماتنا", h2: "ماذا نبني؟",
      items: [
        { t: "تطبيقات ويب", d: "منصات أعمال ولوحات تحكم وبوابات وتطبيقات ويب مخصصة، سريعة وواضحة." },
        { t: "تطبيقات موبايل", d: "تطبيقات أندرويد و iOS بكود واحد (Flutter) مربوطة بخوادم متينة." },
        { t: "ذكاء اصطناعي وأتمتة", d: "وكلاء محادثة، معالجة مستندات، أنظمة RAG، نماذج تعلّم آلي، وأتمتة سير العمل." },
        { t: "خوادم و APIs", d: "واجهات REST آمنة، قواعد بيانات، تكاملات، ومعماريات مصممة للتوسع." },
        { t: "الإطلاق والتشغيل", d: "استضافة وشهادات أمان ونشر مستمر ومراقبة. تستلم منتجاً يعمل — لا مجرد كود." }
      ]
    },
    work: { eyebrow: "أعمال مختارة", h2: "مشاريع شُيّدت وأُطلقت", view: "استعرض المشروع ←", demo: "شاهد الديمو", code: "الكود المصدري", video: "فيديو تجريبي",
      more_h: "مشاريع أخرى", more_sub: "أعمال تدريب ودراسة أنجزها الفريق، لكل منها فيديو تجريبي مسجّل." },
    process: {
      eyebrow: "طريقة عملنا", h2: "من الفكرة إلى المنتج — بخطوات واضحة",
      steps: [
        { t: "الاستكشاف", d: "نفهم فكرتك ومستخدميها وأهدافها — وماذا يعني «جاهز»." },
        { t: "النطاق و MVP", d: "نحدد الميزات الأساسية والمدة وعرض سعر واضح." },
        { t: "التصميم", d: "شاشات ومسارات مستخدم نعتمدها معك قبل بدء التطوير." },
        { t: "البناء", d: "تطوير على دفعات أسبوعية، بمتابعة تراها بنفسك." },
        { t: "الاختبار والإطلاق", d: "اختبارات آلية، نشر في الإنتاج، ومراقبة." },
        { t: "الدعم", d: "إصلاحات وتحسينات وصيانة — وفق الاتفاق." }
      ]
    },
    team: {
      eyebrow: "الفريق", h2: "ثلاثة مهندسين. فريق واحد.",
      intro: "أخوان وأخت — كلهم مهندسو معلومية خريجو ESPRIT. تتحدث مباشرة مع من يبني منتجك.",
      members: [
        { initial: "Y", color: "#0d9488", name: "يسرى مقبلي", role: "مهندسة ذكاء اصطناعي و Backend",
          bio: "متخصصة في المنتجات المدعومة بالذكاء الاصطناعي: أنظمة LLM و RAG والوكلاء والخوادم القابلة للتوسع. باحثة منشورة (Springer، 2020) وقائدة فريق على نظام مؤسسي لمعالجة المستندات بدقة 99.7%.",
          skills: ["Python","FastAPI","Django","LLM / RAG","LangGraph","Machine Learning"] },
        { initial: "H", color: "#1d4ed8", name: "حسام مقبلي", role: "مهندس Full-Stack وموبايل",
          bio: "يبني منصات الويب وتطبيقات الموبايل من طرف إلى طرف — بما يشمل النشر والمراقبة و DevOps. سلّم أنظمة تعمل في الإنتاج لمنصة توصيل طعام ولعميل صناعي.",
          skills: ["Spring Boot","Flutter","Angular / React","Docker / Nginx","CI/CD","MySQL / PostgreSQL"] },
        { initial: "M", color: "#b45309", name: "محمد أنور مقبلي", role: "مهندس SaaS وتعلّم آلي",
          bio: "صاحب مشروع SmartCampus TN — منصة SaaS متعددة المدارس بذكاء اصطناعي مدمج، بأكثر من 1000 اختبار آلي ونشر حقيقي في الإنتاج.",
          skills: ["Django","SaaS Architecture","Machine Learning","Computer Vision","PostgreSQL"] }
      ]
    },
    contact: {
      eyebrow: "تواصل", h2: "لديك فكرة؟ لنبدأ الحديث.",
      sub: "أخبرنا عن مشروعك — نرد عادة في نفس اليوم. الاستشارة الأولى مجانية، وعروض الأسعار واضحة، والدفع على مراحل.",
      wa: "راسلنا على واتساب", mail: "أرسل بريداً إلكترونياً",
      wa_text: "مرحباً Megbli Labs، أرغب في مناقشة مشروع."
    },
    footer: "© {year} Megbli Labs — بناه الفريق الذي يعرضه.",
    back: "← عودة إلى كل المشاريع"
  }
};

// ===================== PROJECTS =====================
// Status types: live | client | demo | rnd | personal | internship | academic  (colors in CSS)
// Optional fields: video: { src, poster } (plays on the project page) · group: "more" (shows in "More projects")
// TODO: add WeldTrack client name after written permission.
// TODO: confirm naming "Ecofix" in Sophie before launch (repo is public already).

const PROJECTS = [
  {
    id: "smartcampus", initial: "S",
    cover: "linear-gradient(135deg,#0f766e,#134e4a)",
    image: "assets/projects/smartcampus/assistant-ia-clean.png",
    gallery: [
      "assets/projects/smartcampus/assistant-ia-clean.png",
      "assets/projects/smartcampus/assistant-ia.png",
      "assets/projects/smartcampus/notes.png",
      "assets/projects/smartcampus/paiements.png",
      "assets/projects/smartcampus/presences.png"
    ],
    tech: ["Django","PostgreSQL + pgvector","Celery / Redis","scikit-learn","YOLOv8","Docker","CI/CD"],
    en: {
      title: "SmartCampus TN", tagline: "School-management SaaS with built-in AI",
      status: { label: "Flagship project", type: "demo" },
      credit: "Mohamed Anouar Meguebli · 2026",
      desc: "A multi-tenant platform for Tunisian private primary schools: enrollment, ministry-compliant grading, bilingual report cards, parent portal and payments — enriched with three AI modules: a per-student RAG assistant, ML-based retention prediction, and computer-vision security. Deployed in production with full CI/CD and 1,000+ automated tests.",
      features: [
        "Multi-tenant SaaS: many schools, one platform",
        "Ministry-compliant grading & bilingual (AR/FR) report cards",
        "Per-student RAG assistant with cited answers",
        "ML prediction of non-re-enrollment, explained with SHAP",
        "Computer-vision security service (YOLOv8)",
        "1,000+ automated tests · production deployment with CI/CD"
      ],
      links: {}
    },
    ar: {
      title: "SmartCampus TN", tagline: "منصة SaaS لإدارة المدارس بذكاء اصطناعي مدمج",
      status: { label: "مشروع مرجعي", type: "demo" },
      credit: "محمد أنور مقبلي · 2026",
      desc: "منصة متعددة المدارس لإدارة المدارس الابتدائية الخاصة في تونس: التسجيل، النقاط المطابقة لقواعد الوزارة، بوالص ثنائية اللغة، بوابة أولياء ومدفوعات — مع ثلاث وحدات ذكاء اصطناعي: مساعد RAG لكل تلميذ، توقّع عدم إعادة التسجيل بالتعلّم الآلي، وأمن بالرؤية الحاسوبية. منشورة في الإنتاج مع CI/CD كامل وأكثر من 1000 اختبار آلي.",
      features: [
        "معمارية SaaS متعددة المستأجرين: عدة مدارس على منصة واحدة",
        "نظام نقاط مطابق للوزارة وبوالص ثنائية اللغة (عربي/فرنسي)",
        "مساعد ذكي لكل تلميذ بإجابات موثّقة بالمصادر (RAG)",
        "توقّع عدم إعادة التسجيل بالتعلّم الآلي مع تفسير القرار (SHAP)",
        "وحدة أمن بالرؤية الحاسوبية (YOLOv8)",
        "أكثر من 1000 اختبار آلي · نشر في الإنتاج مع CI/CD"
      ],
      links: {}
    }
  },

  {
    id: "jibli", initial: "J",
    cover: "linear-gradient(135deg,#ea580c,#7c2d12)",
    image: "assets/projects/jibli/cover.jpg",
    tech: ["Spring Boot","Flutter","MySQL","Redis","Nginx","Prometheus / Grafana"],
    en: {
      title: "Jibli", tagline: "Food-delivery platform — live in production",
      status: { label: "Live in production", type: "live" },
      credit: "Houssem Meguebli",
      desc: "A complete delivery system connecting customers, restaurants and couriers: real-time ordering, delivery tracking and multi-role dashboards. Deployed on a VPS with SSL and a full monitoring stack (Prometheus + Grafana).",
      features: [
        "Real-time order processing",
        "Live delivery tracking",
        "Restaurant & admin dashboards",
        "Redis-powered performance optimization",
        "Production monitoring with Prometheus & Grafana"
      ],
      links: { demo: "https://jibli.ovh" }
    },
    ar: {
      title: "جيبلِي", tagline: "منصة توصيل طعام — تعمل في الإنتاج",
      status: { label: "يعمل في الإنتاج", type: "live" },
      credit: "حسام مقبلي",
      desc: "نظام توصيل متكامل يربط الزبائن والمطاعم وموظفي التوصيل: طلبات لحظية، تتبع التوصيل، ولوحات تحكم متعددة الأدوار. منشور على سيرفر خاص مع SSL ومجموعة مراقبة كاملة (Prometheus + Grafana).",
      features: [
        "معالجة طلبات لحظية",
        "تتبع التوصيل مباشرة",
        "لوحات تحكم للمطاعم والإدارة",
        "أداء محسّن عبر Redis",
        "مراقبة كاملة في الإنتاج بـ Prometheus و Grafana"
      ],
      links: { demo: "https://jibli.ovh" }
    }
  },

  {
    id: "weldtrack", initial: "W",
    cover: "linear-gradient(135deg,#1d4ed8,#1e3a8a)",
    image: "assets/projects/weldtrack/cover.jpg",
        gallery: [
      "assets/projects/weldtrack/portail-verification.jpg",
      "assets/projects/weldtrack/dashboard.jpg",
      "assets/projects/weldtrack/soudeurs.jpg",
      "assets/projects/weldtrack/verification.jpg"
    ],
    tech: ["Spring Boot","Flutter (Mobile/Web)","MySQL","JWT","BLoC","Clean Architecture"],
    en: {
      title: "WeldTrack", tagline: "Welder qualification management — industrial client",
      status: { label: "Client project", type: "client" },
      credit: "Houssem Meguebli",
      desc: "A full-stack industrial application managing welder qualifications and certifications across a factory: real-time authorization checks, automated expiry alerts (90/30/7 days), a kiosk self-verification interface and printable QR-coded ID badges.",
      features: [
        "Real-time welder authorization checks against qualification rules",
        "Automated expiry alerts at 90, 30 and 7 days",
        "Kiosk-mode self-verification for the workshop floor",
        "Printable CR80 ID badges with QR codes"
      ],
      links: { demo: "http://217.182.66.101/#/login" }
    },
    ar: {
      title: "WeldTrack", tagline: "إدارة مؤهلات اللحّامين — عميل صناعي",
      status: { label: "مشروع عميل", type: "client" },
      credit: "حسام مقبلي",
      desc: "تطبيق صناعي Full-Stack لإدارة مؤهلات وشهادات اللحّامين داخل المعمل: تحقق لحظي من الصلاحية، تنبيهات آلية قبل انتهاء الشهادات (90/30/7 أيام)، واجهة تحقق ذاتي بنمط Kiosk، وبطاقات تعريف مطبوعة مع رموز QR.",
      features: [
        "تحقق لحظي من صلاحية اللحّام حسب قواعد المؤهلات",
        "تنبيهات آلية قبل انتهاء الشهادة بـ 90 و30 و7 أيام",
        "واجهة Kiosk للتحقق الذاتي في الورشة",
        "بطاقات تعريف CR80 مع QR قابلة للطباعة"
      ],
      links: { demo: "http://217.182.66.101/#/login" }
    }
  },

  {
    id: "zen", initial: "Z",
    cover: "linear-gradient(135deg,#365314,#111a0a)",
    image: "assets/projects/zen/poster.jpg",
    video: { src: "assets/projects/zen/demo.mp4", poster: "assets/projects/zen/poster.jpg" },
    tech: ["RAG","E5 embeddings","Row-level security","Multi-tenant","gpt-oss-120b (Groq)"],
    en: {
      title: "Zen Knowledge", tagline: "Internal knowledge assistant for multi-company groups",
      status: { label: "Personal project", type: "personal" },
      credit: "Yosra Megbli · 2026",
      desc: "An assistant for organizations with several subsidiaries. Employees ask a question in plain language and get an answer built only from their own company's documents, with a source excerpt they can verify. When nothing relevant is found, it declines instead of guessing. Isolation between subsidiaries is enforced in the database, and admins get document-review alerts plus cost and latency monitoring.",
      features: [
        "Answers grounded in the company's own documents, with verifiable source excerpts",
        "Declines to answer when no document is relevant enough — the LLM is not even called",
        "Strict isolation between subsidiaries, enforced with row-level security",
        "Local ingestion pipeline: extraction, chunking and E5 vectorization",
        "Document governance: review dates, outdated-document alerts, one-click unpublishing",
        "Admin dashboard: latency, cost per query, and unanswered questions that reveal documentation gaps"
      ],
      links: {}
    },
    ar: {
      title: "Zen Knowledge", tagline: "مساعد معرفة داخلي للمجموعات متعددة الشركات",
      status: { label: "مشروع شخصي", type: "personal" },
      credit: "يسرى مقبلي · 2026",
      desc: "مساعد للمؤسسات ذات الفروع المتعددة: يطرح الموظف سؤاله بلغته العادية فيحصل على إجابة مبنية فقط على وثائق شركته، مع مقتطف من المصدر يمكنه التحقق منه. وإذا لم يجد ما يكفي من المعلومات يمتنع عن الإجابة بدل التخمين. العزل بين الفروع مطبّق على مستوى قاعدة البيانات، وللإداريين تنبيهات مراجعة الوثائق ولوحة لمتابعة الكلفة وزمن الاستجابة.",
      features: [
        "إجابات مبنية على وثائق الشركة نفسها مع مقتطفات مصدر قابلة للتحقق",
        "يمتنع عن الإجابة إذا لم توجد وثيقة ذات صلة كافية — دون استدعاء نموذج اللغة أصلاً",
        "عزل صارم بين الفروع مطبّق عبر أمان مستوى الصف (RLS)",
        "مسار استيعاب محلي: استخراج وتقطيع وتحويل إلى متجهات بنموذج E5",
        "حوكمة الوثائق: تواريخ مراجعة وتنبيهات بالوثائق المتقادمة وإلغاء نشرها بنقرة",
        "لوحة إدارة: زمن الاستجابة وكلفة كل سؤال والأسئلة بلا جواب التي تكشف نقص التوثيق"
      ],
      links: {}
    }
  },

  {
    id: "sophie", initial: "S",
    cover: "linear-gradient(135deg,#7c3aed,#4c1d95)",
    tech: ["FastAPI","Python","React","Telegram / WhatsApp APIs","YAML rules engine","pytest"],
    en: {
      title: "Sophie — AI Sales Agent", tagline: "Conversational AI agent that qualifies sales leads",
      status: { label: "R&D · Demo-ready", type: "rnd" },
      credit: "Yosra Megbli",
      desc: "A production-grade conversational agent for the energy sector: a deterministic state machine + rules engine drive the conversation — the LLM only phrases replies, it never decides. Multi-channel (Telegram and web widget live; WhatsApp and voice wired), with an outbound campaign engine, an operations dashboard, and 583 automated tests including end-to-end conversation scenarios.",
      features: [
        "Deterministic state machine + YAML rules engine — the LLM never decides",
        "Multi-channel: Telegram, web widget, WhatsApp & voice",
        "Outbound campaign engine + operations dashboard",
        "583 automated tests, incl. end-to-end golden conversations",
        "Deployable as a self-contained product"
      ],
      links: { demo: "https://intelligent-sales-agent.onrender.com/dashboard/", code: "https://github.com/Yosra-Megbli/Intelligent-Sales-Agent" }
    },
    ar: {
      title: "Sophie — وكيل مبيعات ذكي", tagline: "وكيل محادثة يقيّم العملاء المحتملين آلياً",
      status: { label: "بحث وتطوير · جاهز للعرض", type: "rnd" },
      credit: "يسرى مقبلي",
      desc: "وكيل محادثة جاهز للإنتاج لقطاع الطاقة: آلة حالة حتمية + محرك قواعد تدير المحادثة، والـ LLM يصيغ الردود فقط دون أن يقرر. متعدد القنوات (Telegram وودجت الويب يعملان؛ WhatsApp والصوت مُعدّان)، مع محرك حملات صادرة ولوحة متابعة، و583 اختباراً آلياً يشمل سيناريوهات محادثة كاملة.",
      features: [
        "آلة حالة حتمية ومحرك قواعد — الـ LLM لا يقرر أبداً",
        "قنوات متعددة: Telegram، ويب، WhatsApp والصوت",
        "محرك حملات صادرة ولوحة تحكم عمليات",
        "583 اختباراً آلياً بما فيها محادثات مرجعية كاملة",
        "قابل للنشر كمنتج مستقل"
      ],
      links: { code: "https://github.com/Yosra-Megbli/Intelligent-Sales-Agent" }
    }
  },

  // ---------- More projects (internship & academic) ----------
  {
    id: "teleworkpro", initial: "T", group: "more",
    cover: "linear-gradient(135deg,#0369a1,#0c4a6e)",
    image: "assets/projects/teleworkpro/poster.jpg",
    video: { src: "assets/projects/teleworkpro/demo.mp4", poster: "assets/projects/teleworkpro/poster.jpg" },
    tech: [".NET Core","React","Entity Framework","SQL Server","Material-UI"],
    en: {
      title: "TeleWorkPro", tagline: "Remote-work request and scheduling platform",
      status: { label: "Internship project", type: "internship" },
      credit: "Houssem Meguebli · SHAMASH IT, 2024",
      desc: "A web application built during an internship at SHAMASH IT to manage telecommuting requests and schedules. Employees submit requests, managers approve or reject them, and everyone follows the outcome on a shared calendar. Role-based access control cut request processing time by 40%.",
      features: [
        "Request workflow: submit, approve or reject, with status tracking",
        "Calendar with month, week and day views",
        "Requests table with status filter, search and PDF export",
        "Employee management with role-based access",
        "Secure password reset with a time-limited PIN code sent by email",
        "Email notifications for account creation and request confirmations"
      ],
      links: {}
    },
    ar: {
      title: "TeleWorkPro", tagline: "منصة لإدارة طلبات العمل عن بُعد وجداولها",
      status: { label: "مشروع تدريب", type: "internship" },
      credit: "حسام مقبلي · SHAMASH IT، 2024",
      desc: "تطبيق ويب أُنجز خلال تدريب في SHAMASH IT لإدارة طلبات العمل عن بُعد وجداولها: يقدّم الموظف طلبه، ويوافق عليه المدير أو يرفضه، ويتابع الجميع النتيجة على تقويم مشترك. وقد خفّض التحكم في الصلاحيات حسب الدور زمن معالجة الطلبات بنسبة 40%.",
      features: [
        "مسار طلب كامل: تقديم، موافقة أو رفض، مع متابعة الحالة",
        "تقويم بعرض شهري وأسبوعي ويومي",
        "جدول طلبات مع تصفية بالحالة وبحث وتصدير PDF",
        "إدارة الموظفين مع صلاحيات حسب الدور",
        "استرجاع آمن لكلمة المرور برمز PIN محدود المدة يصل بالبريد",
        "إشعارات بالبريد عند إنشاء الحساب وتأكيد الطلبات"
      ],
      links: {}
    }
  },

  {
    id: "coconsult", initial: "C", group: "more",
    cover: "linear-gradient(135deg,#0f766e,#134e4a)",
    image: "assets/projects/coconsult/poster.jpg",
    video: { src: "assets/projects/coconsult/demo.mp4", poster: "assets/projects/coconsult/poster.jpg" },
    tech: ["Spring","Angular","MySQL","Bootstrap"],
    en: {
      title: "CoConsult", tagline: "HR and recruitment management web app",
      status: { label: "Academic project", type: "academic" },
      credit: "Houssem Meguebli · ESPRIT",
      desc: "A web application for small businesses and startups that brings recruitment, employee management and team follow-up into one place: job offers with resume upload, departments, contracts, leave requests and team tasks, plus a built-in chatbot and chat.",
      features: [
        "Job offers and applications with PDF resume upload",
        "Departments, employee contracts and leave tracking",
        "Team tasks with priorities and status",
        "Employee claims management",
        "Role-based dashboard with key indicators",
        "Built-in chatbot and chat app"
      ],
      links: {}
    },
    ar: {
      title: "CoConsult", tagline: "تطبيق ويب لإدارة الموارد البشرية والتوظيف",
      status: { label: "مشروع أكاديمي", type: "academic" },
      credit: "حسام مقبلي · ESPRIT",
      desc: "تطبيق ويب للشركات الصغيرة والناشئة يجمع التوظيف وإدارة الموظفين ومتابعة الفريق في مكان واحد: عروض عمل مع رفع السيرة الذاتية، أقسام، عقود، طلبات إجازة ومهام فريق، إضافة إلى روبوت محادثة ودردشة مدمجين.",
      features: [
        "عروض عمل وطلبات ترشح مع رفع السيرة الذاتية بصيغة PDF",
        "الأقسام وعقود الموظفين ومتابعة الإجازات",
        "مهام الفريق بأولويات وحالات",
        "إدارة شكاوى الموظفين",
        "لوحة تحكم بمؤشرات رئيسية حسب الدور",
        "روبوت محادثة وتطبيق دردشة مدمجان"
      ],
      links: {}
    }
  },

  {
    id: "infinityfarm", initial: "I", group: "more",
    cover: "linear-gradient(135deg,#4d7c0f,#1a2e05)",
    image: "assets/projects/infinityfarm/poster.jpg",
    video: { src: "assets/projects/infinityfarm/demo.mp4", poster: "assets/projects/infinityfarm/poster.jpg" },
    tech: ["Symfony","JavaScript","MySQL","Bootstrap"],
    en: {
      title: "InfinityFarm", tagline: "Farm management platform",
      status: { label: "Academic project", type: "academic" },
      credit: "Houssem Meguebli · ESPRIT team project",
      desc: "A web platform that helps farmers run daily operations: organizing farm sites and land plots, tracking equipment and activities, and following income and expenses, with built-in messaging and statistics.",
      features: [
        "Farm sites and land plots with search and filters",
        "Equipment tracking per site, with condition status",
        "Activity planning with status tracking",
        "Financial transactions grouped by category",
        "Messages, complaints and statistics",
        "Built-in chat"
      ],
      links: {}
    },
    ar: {
      title: "InfinityFarm", tagline: "منصة لإدارة المزارع",
      status: { label: "مشروع أكاديمي", type: "academic" },
      credit: "حسام مقبلي · مشروع فريق في ESPRIT",
      desc: "منصة ويب تساعد الفلاحين على تسيير عملهم اليومي: تنظيم المواقع الزراعية والقطع الأرضية، متابعة المعدات والأنشطة، ومراقبة المداخيل والمصاريف، مع مراسلة وإحصائيات مدمجة.",
      features: [
        "المواقع الزراعية والقطع الأرضية مع بحث وتصفية",
        "متابعة المعدات لكل موقع وحالتها",
        "تخطيط الأنشطة ومتابعة حالتها",
        "المعاملات المالية مصنّفة حسب الفئة",
        "رسائل وشكاوى وإحصائيات",
        "دردشة مدمجة"
      ],
      links: {}
    }
  }
];
