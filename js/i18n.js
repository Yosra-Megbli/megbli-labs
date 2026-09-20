// ===================== MEGBLI LABS — CONTENT =====================
// Keep the Arabic language system intact and update the English copy for the client-focused portfolio.

const I18N = {
  en: {
    meta_title: "Megbli Labs | AI, Backend & Automation Solutions",
    meta_description: "Megbli Labs builds AI-powered applications, backend systems, RAG platforms, document intelligence solutions and intelligent automation.",
    nav: { work: "Recent Projects", services: "Services", process: "Process", team: "Team", contact: "Contact" },
    hero: {
      eyebrow: "AI engineering · backend systems · automation",
      h1: "AI, Backend & Automation Solutions",
      sub: "We build practical AI-powered applications, backend systems and intelligent automation — from document intelligence and RAG systems to AI agents and business platforms.",
      c1: "AI", c2: "Backend", c3: "Automation", c4: "LLM / RAG",
      cta1: "View Recent Projects",
      cta2: "Contact Us",
      trust: "Small engineering team · practical AI systems · backend reliability"
    },
    services: {
      eyebrow: "Services",
      h2: "Services",
      items: [
        { t: "AI Engineering", d: "LLM applications, RAG systems, AI agents, document intelligence, and AI evaluation workflows." },
        { t: "Backend Engineering", d: "FastAPI, Django REST, PostgreSQL, Redis / Celery, and API integration for reliable systems." },
        { t: "Intelligent Automation", d: "n8n automation, workflow orchestration, API integrations and business process automation." },
        { t: "Web & Mobile Development", d: "Business platforms, admin dashboards, web applications, and mobile applications tailored to real workflows." }
      ]
    },
    work: {
      eyebrow: "Recent Projects",
      h2: "Recent Projects",
      subtitle: "Selected AI, backend and automation systems we've recently built and tested.",
      view: "View project",
      demo: "View demo",
      code: "GitHub",
      video: "Demo video",
      more_h: "More projects",
      more_sub: "Additional work by the team."
    },
    process: {
      eyebrow: "Process",
      h2: "How we work",
      steps: [
        { t: "01 — Understand", d: "Understand the business problem, requirements and constraints." },
        { t: "02 — Design", d: "Define the architecture, workflow and technical approach." },
        { t: "03 — Build", d: "Develop, integrate and test the solution." },
        { t: "04 — Deliver", d: "Validate the system and prepare it for deployment or client integration." }
      ]
    },
    team: {
      eyebrow: "Our Team",
      h2: "Our Team",
      intro: "A small specialized engineering team building AI, backend and automation systems.",
      members: [
        { initial: "Y", color: "#0f766e", name: "Yosra Megbli", role: "AI & Backend Engineer",
          bio: "AI systems, LLM/RAG, document intelligence, FastAPI/Django, LangGraph, and backend engineering research and implementation.",
          skills: ["AI systems","LLM / RAG","Document Intelligence","FastAPI / Django","LangGraph"] },
        { initial: "H", color: "#1d4ed8", name: "Houssem Megbli", role: "Full-Stack & Backend Engineer",
          bio: "Web applications, APIs, system integration and practical backend delivery for business platforms and connected workflows.",
          skills: ["Full-Stack","Backend","APIs","Systems Integration","Databases"] },
        { initial: "M", color: "#b45309", name: "Mohamed Anouar Megbli", role: "Collaborator",
          bio: "Full-stack and AI engineering support with a focus on practical implementation and collaborative delivery.",
          skills: ["Full-Stack","AI Engineering","Product Delivery","Implementation"] }
      ]
    },
    project: {
      problem: "Problem",
      solution: "Solution",
      workflow: "Architecture / Workflow",
      results: "Results / Technical Highlights",
      status: "Status",
      links: "Links"
    },
    contact: {
      eyebrow: "Contact",
      h2: "Have a project in mind?",
      sub: "Tell us what you are building, what problem you want to solve, and what you need.",
      wa: "Start a conversation",
      mail: "Email us",
      wa_text: "Hello Megbli Labs, I'd like to discuss a project."
    },
    footer: "© {year} Megbli Labs",
    back: "← Back to all projects"
  },

  ar: {
    meta_title: "Megbli Labs | حلول الذكاء الاصطناعي والـ Backend والأتمتة",
    meta_description: "تقوم Megbli Labs ببناء تطبيقات مدعومة بالذكاء الاصطناعي، أنظمة الخلفية، ومنصات RAG، وحلول الذكاء على المستندات، والأتمتة الذكية.",
    nav: { work: "المشاريع الأخيرة", services: "الخدمات", process: "العملية", team: "الفريق", contact: "تواصل" },
    hero: {
      eyebrow: "هندسة ذكاء اصطناعي · أنظمة خلفية · أتمتة",
      h1: "حلول الذكاء الاصطناعي والـ Backend والأتمتة",
      sub: "نُصمّم تطبيقات عملية مدعومة بالذكاء الاصطناعي، وأنظمة خلفية، وأتمتة ذكية — من أنظمة استخراج المستندات وRAG إلى وكلاء الذكاء والمنصات التشغيلية.",
      c1: "ذكاء اصطناعي", c2: "Backend", c3: "أتمتة", c4: "LLM / RAG",
      cta1: "عرض المشاريع الأخيرة",
      cta2: "تواصل معنا",
      trust: "فريق صغير متخصص · أنظمة ذكاء عملية · موثوقية backend"
    },
    services: {
      eyebrow: "الخدمات",
      h2: "الخدمات",
      items: [
        { t: "هندسة الذكاء الاصطناعي", d: "تطبيقات LLM، أنظمة RAG، وكلاء AI، ذكاء المستندات، وسير عمل تقييم الذكاء." },
        { t: "هندسة الـ Backend", d: "FastAPI، Django REST، PostgreSQL، Redis / Celery، وتكامل واجهات موثوقة." },
        { t: "الأتمتة الذكية", d: "أتمتة n8n، تنظيم سير العمل، تكامل APIs، وأتمتة العمليات التجارية." },
        { t: "تطوير الويب والموبايل", d: "منصات أعمال ولوحات تحكم وتطبيقات ويب وتطبيقات موبايل مصممة لسير العمل الحقيقي." }
      ]
    },
    work: {
      eyebrow: "المشاريع الأخيرة",
      h2: "المشاريع الأخيرة",
      subtitle: "أنظمة مختارة في الذكاء الاصطناعي والـ backend والأتمتة تم تطويرها واختبارها مؤخراً.",
      view: "عرض المشروع",
      demo: "عرض العرض",
      code: "GitHub",
      video: "عرض فيديو",
      more_h: "مشاريع أخرى",
      more_sub: "أعمال إضافية للفريق."
    },
    process: {
      eyebrow: "العملية",
      h2: "طريقة عملنا",
      steps: [
        { t: "01 — الفهم", d: "فهم المشكلة، المتطلبات والقيود." },
        { t: "02 — التصميم", d: "تحديد البنية التقنية، سير العمل، والمنهج العملي." },
        { t: "03 — البناء", d: "تطوير، تكامل، واختبار الحل." },
        { t: "04 — التسليم", d: "التحقق من النظام وإعداد الترحيل أو التكامل مع العميل." }
      ]
    },
    team: {
      eyebrow: "الفريق",
      h2: "الفريق",
      intro: "فريق صغير متخصص في بناء أنظمة الذكاء الاصطناعي والـ backend والأتمتة.",
      members: [
        { initial: "Y", color: "#0f766e", name: "يسرى مقبلي", role: "مهندسة الذكاء الاصطناعي والـ Backend",
          bio: "أنظمة الذكاء الاصطناعي، LLM/RAG، ذكاء المستندات، FastAPI/Django، LangGraph، وبناء حلول مستقبلية في الهندسة الخلفية.",
          skills: ["أنظمة AI","LLM / RAG","ذكاء المستندات","FastAPI / Django","LangGraph"] },
        { initial: "H", color: "#1d4ed8", name: "حسام مقبلي", role: "مهندس Full-Stack والـ Backend",
          bio: "تطبيقات الويب، واجهات البرمجة، تكامل الأنظمة، وتقديم حلول خلفية عملية لمنصات الأعمال.",
          skills: ["Full-Stack","Backend","واجهات برمجة","تكامل الأنظمة","قواعد البيانات"] },
        { initial: "M", color: "#b45309", name: "محمد أنور مقبلي", role: "مساهم",
          bio: "دعم في الهندسة Full-Stack والذكاء الاصطناعي مع تركيز على التنفيذ العملي والتسليم المشترك.",
          skills: ["Full-Stack","هندسة AI","تسليم المنتج","التنفيذ"] }
      ]
    },
    project: {
      problem: "المشكلة",
      solution: "الحل",
      workflow: "البنية / سير العمل",
      results: "النتائج / النقاط التقنية",
      status: "الحالة",
      links: "الروابط"
    },
    contact: {
      eyebrow: "تواصل",
      h2: "هل لديك مشروع في ذهنك؟",
      sub: "أخبرنا بما تبنيه، وما المشكلة التي تريد حلها، وما الذي تحتاجه.",
      wa: "ابدأ محادثة",
      mail: "راسلنا بالبريد",
      wa_text: "مرحباً Megbli Labs، أود مناقشة مشروع."
    },
    footer: "© {year} Megbli Labs",
    back: "← العودة إلى كل المشاريع"
  }
};

const PROJECTS = [
  {
    id: "sophie",
    no: "01",
    initial: "S",
    cover: "linear-gradient(135deg,#6d28d9,#4c1d95)",
    tech: ["FastAPI","LLM","Groq","React","YAML Rules Engine","Telegram / Web"],
    en: {
      title: "Sophie",
      tagline: "AI Sales Qualification Agent",
      status: { label: "Client Pilot / Locally Tested", type: "client" },
      credit: "Yosra Megbli",
      desc: "AI-powered sales qualification system combining LLM-based language understanding with deterministic business rules.",
      features: [
        "580+ automated tests",
        "Deterministic qualification logic",
        "Client pilot",
        "LLM handles language understanding while business decisions remain rule-driven"
      ],
      links: { code: "https://github.com/Yosra-Megbli/Intelligent-Sales-Agent" }
    },
    ar: {
      title: "Sophie",
      tagline: "وكيل تأهيل المبيعات بالذكاء الاصطناعي",
      status: { label: "تجربة عميل / مختبَر محلياً", type: "client" },
      credit: "يسرى مقبلي",
      desc: "نظام تأهيل مبيعات مدعوم بالذكاء الاصطناعي يجمع بين فهم اللغة بموديلات LLM وقواعد العمل الحتمية.",
      features: [
        "أكثر من 580 اختباراً آلياً",
        "منطق تأهيل حتمي",
        "تجربة عميل",
        "نموذج اللغة يفسّر اللغة بينما تظل قرارات العمل قائمة على القواعد"
      ],
      links: { code: "https://github.com/Yosra-Megbli/Intelligent-Sales-Agent" }
    },
    detail: {
      problem: "Sales teams need a faster qualification flow without losing control over business decisions.",
      solution: "Sophie combines LLM-driven language understanding with a deterministic rules engine to qualify leads consistently and route them intelligently.",
      workflow: ["Lead / Conversation", "Intent & context extraction", "Qualification rules", "Decisioning & routing", "Follow-up or escalation"],
      results: [
        "580+ automated tests",
        "Deterministic qualification logic",
        "Client pilot",
        "LLM = language understanding; rules = qualification and business decisions"
      ]
    }
  },
  {
    id: "document-intelligence",
    no: "02",
    initial: "DI",
    cover: "linear-gradient(135deg,#0f766e,#134e4a)",
    tech: ["OCR","Deep Learning","Django REST","Celery","Redis","Python"],
    en: {
      title: "Document Intelligence",
      tagline: "AI Document Intelligence Pipeline",
      status: { label: "Built and tested", type: "demo" },
      credit: "Yosra Megbli",
      desc: "Automated document processing pipeline covering OCR, document classification, information extraction and compliance validation.",
      features: [
        "99.7% accuracy on an evaluated set of 313 documents",
        "4 Tunisian document classes",
        "24 document types",
        "263-field structured JSON extraction"
      ],
      links: {}
    },
    ar: {
      title: "ذكاء المستندات",
      tagline: "مسار ذكاء المستندات بالذكاء الاصطناعي",
      status: { label: "تم تطويره واختباره", type: "demo" },
      credit: "يسرى مقبلي",
      desc: "مسار آلي لمعالجة المستندات يشمل OCR، تصنيف المستندات، استخراج المعلومات، والتحقق من الامتثال.",
      features: [
        "دقة 99.7% على مجموعة تقييمية من 313 مستنداً",
        "4 فئات تونسية للمستندات",
        "24 نوعاً من المستندات",
        "استخراج JSON منظم بـ 263 حقلًا"
      ],
      links: {}
    },
    detail: {
      problem: "Document-heavy workflows require reliable classification, extraction and validation without manual bottlenecks.",
      solution: "This pipeline combines OCR, document classification and extraction logic into a structured validation workflow for operational use.",
      workflow: ["Document", "OCR", "Classification", "Extraction", "Validation", "Structured Output"],
      results: [
        "99.7% accuracy on an evaluated set of 313 documents",
        "4 Tunisian document classes",
        "24 document types",
        "263-field structured JSON extraction"
      ]
    }
  },
  {
    id: "multi-agent-rag-platform",
    no: "03",
    initial: "R",
    cover: "linear-gradient(135deg,#0ea5e9,#164e63)",
    tech: ["LangGraph","RAG","pgvector","FastAPI","PostgreSQL","Redis","Celery","Groq"],
    en: {
      title: "Multi-Agent RAG Platform",
      tagline: "Modular AI platform for retrieval-augmented generation, agent orchestration and asynchronous AI workflows.",
      status: { label: "Built and tested locally", type: "demo" },
      credit: "Yosra Megbli",
      desc: "Modular AI platform for retrieval-augmented generation, agent orchestration and asynchronous AI workflows.",
      features: [
        "Agent orchestration with LangGraph",
        "RAG retrieval backed by pgvector",
        "Asynchronous execution with Redis and Celery",
        "FastAPI-based orchestration layer"
      ],
      links: {}
    },
    ar: {
      title: "منصة RAG متعددة الوكلاء",
      tagline: "منصة ذكاء اصطناعي معيارية للتوليد المعزز بالاسترجاع، تنسيق الوكلاء، وسير العمل غير المتزامن.",
      status: { label: "تم تطويره واختباره محلياً", type: "demo" },
      credit: "يسرى مقبلي",
      desc: "منصة ذكاء اصطناعي معيارية للتوليد المعزز بالاسترجاع، تنسيق الوكلاء، وسير العمل غير المتزامن.",
      features: [
        "تنسيق الوكلاء عبر LangGraph",
        "استرجاع RAG مدعوم بـ pgvector",
        "تنفيذ غير متزامن مع Redis و Celery",
        "طبقة تنسيق مبنية على FastAPI"
      ],
      links: {}
    },
    detail: {
      problem: "Knowledge-intensive workflows need modular retrieval, orchestration, and resilient asynchronous execution.",
      solution: "The platform separates retrieval, agent orchestration and workflow execution to support flexible AI systems and multi-step reasoning patterns.",
      workflow: ["User", "Retrieval", "Agents / Orchestration", "LLM", "Response"],
      results: [
        "LangGraph orchestration layer",
        "RAG retrieval with pgvector",
        "Redis + Celery async workflows",
        "FastAPI + PostgreSQL foundation"
      ]
    }
  },
  {
    id: "ai-invoice-processing",
    no: "04",
    initial: "I",
    cover: "linear-gradient(135deg,#f59e0b,#a16207)",
    tech: ["n8n","LLM","PostgreSQL","Automation"],
    en: {
      title: "AI Invoice Processing",
      tagline: "AI Invoice Processing & Automation",
      status: { label: "Prototype / Tested", type: "demo" },
      credit: "Yosra Megbli",
      desc: "Automated invoice extraction and structured data processing using LLMs, PostgreSQL and workflow automation.",
      features: [
        "Automated invoice extraction",
        "Structured data processing",
        "PostgreSQL-backed workflow storage",
        "Automation with n8n"
      ],
      links: {}
    },
    ar: {
      title: "معالجة فواتير الذكاء الاصطناعي",
      tagline: "معالجة الفواتير والأتمتة بالذكاء الاصطناعي",
      status: { label: "نموذج أولي / مختبر", type: "demo" },
      credit: "يسرى مقبلي",
      desc: "استخراج فواتير آلي ومعالجة بيانات منظمة باستخدام LLMs، PostgreSQL، وأتمتة سير العمل.",
      features: [
        "استخراج فواتير آلي",
        "معالجة بيانات منظمة",
        "تخزين سير العمل داخل PostgreSQL",
        "أتمتة عبر n8n"
      ],
      links: {}
    },
    detail: {
      problem: "Invoice-heavy operations need fast extraction and structured processing without manual re-entry.",
      solution: "The workflow uses LLM-based extraction and automation tooling to convert invoices into structured records for downstream processing.",
      workflow: ["Invoice intake", "Extraction", "Validation", "PostgreSQL storage", "Automation flow"],
      results: [
        "Automated invoice extraction",
        "Structured data processing",
        "PostgreSQL workflow storage",
        "Prototype / tested automation workflows"
      ]
    }
  }
];
