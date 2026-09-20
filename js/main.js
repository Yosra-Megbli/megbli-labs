const $ = (s, el = document) => el.querySelector(s);
let LANG = localStorage.getItem('lang') || 'en';

const t = path => path.split('.').reduce((o, k) => o && o[k], UI[LANG]);
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));

const AR_PROJECTS = {
  sophie: { title:'Sophie — وكيل تأهيل المبيعات بالذكاء الاصطناعي', tagline:'نظام تأهيل مبيعات يجمع بين فهم اللغة وقواعد العمل الحتمية', status:'تجربة عميل / اختبار محلي', desc:'نظام تأهيل مبيعات مدعوم بالذكاء الاصطناعي يجمع بين فهم اللغة عبر LLM وقواعد عمل حتمية. يتولى النموذج فهم اللغة، بينما تبقى قرارات التأهيل قائمة على قواعد واضحة.', features:['أكثر من 580 اختباراً آلياً','قرارات تأهيل حتمية قائمة على القواعد','تجربة عميل','الـ LLM لفهم اللغة، وقواعد العمل للقرارات النهائية'] },
  'document-intelligence': { title:'ذكاء المستندات', tagline:'مسار ذكي لمعالجة المستندات والتصنيف والاستخراج المنظم', status:'تم تطويره واختباره', desc:'مسار لمعالجة المستندات بالذكاء الاصطناعي يغطي OCR وتصنيف المستندات واستخراج المعلومات بشكل منظم والتحقق من الامتثال.', features:['دقة 99.7% على مجموعة تقييمية من 313 مستنداً','4 فئات تونسية للمستندات','24 نوعاً من المستندات','استخراج JSON منظم من 263 حقلاً'] },
  smartcampus: { title:'SmartCampus TN', tagline:'منصة SaaS لإدارة المدارس بذكاء اصطناعي مدمج', status:'مشروع مرجعي', desc:'منصة متعددة المدارس لإدارة المدارس الابتدائية الخاصة في تونس، تشمل التسجيل والنقاط والبوالص وبوابة الأولياء والدفع مع وحدات ذكاء اصطناعي.', features:['منصة SaaS متعددة المستأجرين','بوالص ثنائية اللغة عربي/فرنسي','مساعد RAG لكل تلميذ','أكثر من 1000 اختبار آلي'] },
  jibli: { title:'جيبلِي', tagline:'منصة توصيل طعام', status:'مشروع عميل', desc:'نظام توصيل يربط الزبائن والمطاعم وموظفي التوصيل مع الطلبات والتتبع ولوحات التحكم متعددة الأدوار.', features:['معالجة الطلبات لحظياً','تتبع التوصيل','لوحات تحكم للمطاعم والإدارة','مراقبة عبر Prometheus وGrafana'] },
  weldtrack: { title:'WeldTrack', tagline:'إدارة مؤهلات اللحّامين — عميل صناعي', status:'مشروع عميل', desc:'تطبيق صناعي Full-Stack لإدارة مؤهلات وشهادات اللحّامين مع التحقق من الصلاحية والتنبيهات ومسارات التحقق الذاتي.', features:['تحقق لحظي من الصلاحية','تنبيهات قبل انتهاء الشهادات بـ90 و30 و7 أيام','تحقق ذاتي عبر Kiosk','بطاقات CR80 مع QR'] },
  zen: { title:'Zen Knowledge', tagline:'مساعد معرفة داخلي للمجموعات متعددة الشركات', status:'مشروع شخصي', desc:'مساعد معرفة داخلي يعتمد على وثائق كل شركة مع مقتطفات مصدر قابلة للتحقق وعزل صارم بين الشركات.', features:['إجابات موثقة بالمصادر','يمتنع عن الإجابة عند غياب وثيقة مناسبة','عزل عبر أمان مستوى الصف','حوكمة الوثائق ولوحة إدارة'] },
  'multi-agent-rag-platform': { title:'منصة RAG متعددة الوكلاء', tagline:'منصة معيارية للاسترجاع المعزز والتنسيق بين الوكلاء', status:'تم تطويره واختباره محلياً', desc:'منصة ذكاء اصطناعي معيارية للاسترجاع المعزز والتنسيق بين الوكلاء وسير العمل غير المتزامن.', features:['تنسيق الوكلاء عبر LangGraph','استرجاع RAG مدعوم بـ pgvector','سير عمل غير متزامن عبر Redis وCelery','طبقة تنسيق مبنية على FastAPI'] },
  'ai-invoice-processing': { title:'معالجة الفواتير بالذكاء الاصطناعي', tagline:'معالجة الفواتير والأتمتة بالذكاء الاصطناعي', status:'نموذج أولي / تم اختباره', desc:'استخراج آلي للفواتير ومعالجة بيانات منظمة باستخدام LLM وPostgreSQL وأتمتة سير العمل.', features:['استخراج آلي للفواتير','معالجة بيانات منظمة','تخزين في PostgreSQL','أتمتة عبر n8n'] },
  teleworkpro: { title:'TeleWorkPro', tagline:'منصة لإدارة طلبات العمل عن بُعد والجداول', status:'مشروع تدريب', desc:'تطبيق ويب لإدارة طلبات العمل عن بُعد والموافقات والجداول وإدارة الموظفين.', features:['مسار طلبات وموافقات','عروض تقويم متعددة','بحث وتصفية وتصدير PDF','إدارة موظفين حسب الدور'] },
  coconsult: { title:'CoConsult', tagline:'تطبيق ويب لإدارة الموارد البشرية والتوظيف', status:'مشروع أكاديمي', desc:'تطبيق ويب يجمع التوظيف وإدارة الموظفين ومتابعة الفريق للشركات الصغيرة والناشئة.', features:['عروض عمل وطلبات ترشح','العقود والإجازات','مهام الفريق','لوحة تحكم ودردشة'] },
  infinityfarm: { title:'InfinityFarm', tagline:'منصة لإدارة المزارع', status:'مشروع أكاديمي', desc:'منصة ويب لتنظيم المواقع الزراعية والمعدات والأنشطة والدخل والمصاريف مع خصائص التواصل.', features:['المواقع والقطع الأرضية','متابعة المعدات','تخطيط الأنشطة','المعاملات المالية والدردشة'] }
};

function localizedProject(p) {
  if (LANG !== 'ar') return p;
  const translation = AR_PROJECTS[p.id];
  return translation ? { ...p, ...translation } : p;
}

function statusClass(status) {
  const value = String(status || '').toLowerCase();
  if (value.includes('production')) return 'production';
  if (value.includes('pilot') || value.includes('client')) return 'client';
  if (value.includes('prototype')) return 'prototype';
  if (value.includes('demo')) return 'demo';
  if (value.includes('tested') || value.includes('academic') || value.includes('internship')) return 'tested';
  if (value.includes('personal')) return 'personal';
  return 'neutral';
}

function badge(status) {
  return `<span class="badge ${statusClass(status)}">${esc(status)}</span>`;
}

function renderServices() {
  const el = $('#services-grid');
  if (!el) return;
  el.innerHTML = t('services.items').map(([title, desc]) => `<article class="card"><div class="body"><h3>${esc(title)}</h3><p>${esc(desc)}</p></div></article>`).join('');
}

function renderProcess() {
  const el = $('#process-list');
  if (!el) return;
  el.innerHTML = t('process.steps').map(([title, desc]) => `<li><h3>${esc(title)}</h3><p>${esc(desc)}</p></li>`).join('');
}

function renderTeam() {
  const el = $('#team-grid');
  if (!el) return;
  el.innerHTML = t('team.members').map(([initial, color, name, role, bio, skills]) => `<article class="card member"><div class="avatar" style="background:${color}">${esc(initial)}</div><h3>${esc(name)}</h3><p class="role">${esc(role)}</p><p>${esc(bio)}</p><div class="chips skills">${skills.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div></article>`).join('');
}

function linkMarkup(p, detail = false) {
  const w = t('work');
  const links = [];
  if (detail) links.push(`<a class="btn btn-ghost" href="index.html">${esc(t('back'))}</a>`);
  if (p.links && p.links.demo) {
    const isVideo = Boolean(p.video) || /\\.mp4(?:$|\\?)/i.test(p.links.demo);
    if (isVideo) {
      links.push(`<a class="${detail ? 'btn btn-primary' : ''}" href="project.html?p=${encodeURIComponent(p.id)}" aria-label="${esc(w.video)}">${esc(w.video)}${detail ? ' ↗' : ''}</a>`);
    } else {
      links.push(`<a class="${detail ? 'btn btn-primary' : ''}" href="${esc(p.links.demo)}" target="_blank" rel="noopener">${esc(w.demo)}${detail ? ' ↗' : ''}</a>`);
    }
  }
  if (p.links && p.links.code) links.push(`<a class="${detail ? 'btn btn-ghost' : ''}" href="${esc(p.links.code)}" target="_blank" rel="noopener">${esc(w.code)}${detail ? ' ↗' : ''}</a>`);
  return links.join('');
}

function projectCard(project) {
  const p = localizedProject(project);
  const w = t('work');
  const credit = p.credit ? `<span class="credit">${esc(p.credit)}</span>` : '';
  const actions = `<a href="project.html?p=${encodeURIComponent(p.id)}">${esc(w.view)}</a>${p.links && p.links.demo && !p.video ? `<a href="${esc(p.links.demo)}" target="_blank" rel="noopener">${esc(w.demo)} ↗</a>` : ''}${p.video ? `<a href="project.html?p=${encodeURIComponent(p.id)}">${esc(w.video)}</a>` : ''}${p.links && p.links.code ? `<a href="${esc(p.links.code)}" target="_blank" rel="noopener">${esc(w.code)} ↗</a>` : ''}`;
  const background = p.image ? `url('${p.image}') center/cover no-repeat` : p.cover;
  return `<article class="card project"><a class="cover" href="project.html?p=${encodeURIComponent(p.id)}" aria-label="${esc(p.title)}" style="background:${background}"><span>${esc(p.initial || p.title[0])}</span><span class="project-index">${esc(p.no || '')}</span></a><div class="body"><div class="meta">${badge(p.status)}${credit}</div><h3>${esc(p.title)}</h3><p class="tagline">${esc(p.tagline)}</p><p class="desc">${esc(p.desc)}</p><div class="chips">${p.tech.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div><div class="links">${actions}</div></div></article>`;
}

function renderProjects() {
  const featured = $('#projects-grid');
  const more = $('#more-grid');
  if (featured) featured.innerHTML = PROJECTS.filter(p => p.group !== 'more').map(projectCard).join('');
  if (more) more.innerHTML = PROJECTS.filter(p => p.group === 'more').map(projectCard).join('');
}

function renderProjectPage() {
  const root = $('#project');
  if (!root) return;
  const project = PROJECTS.find(x => x.id === new URLSearchParams(location.search).get('p'));
  if (!project) { location.href = 'index.html'; return; }
  const p = localizedProject(project);
  const meta = t('project');
  const media = p.video ? `<div class="pvideo"><video controls playsinline preload="metadata" poster="${esc(p.video.poster)}"><source src="${esc(p.video.src)}" type="video/mp4">Your browser does not support HTML5 video.</video></div>` : `<div class="pcover" style="background:${p.image ? `url('${p.image}') center/cover no-repeat` : p.cover}"><span>${esc(p.initial || '')}</span></div>`;
  const gallery = p.gallery ? `<div class="gallery">${p.gallery.map(src => `<img src="${esc(src)}" loading="lazy" alt="${esc(p.title)}">`).join('')}</div>` : '';
  const credit = p.credit ? `<span class="credit">${esc(p.credit)}</span>` : '';
  root.innerHTML = `<a class="backlink" href="index.html">${esc(t('back'))}</a><div class="phead"><div class="meta">${badge(p.status)}${credit}</div><h1>${esc(p.title)}</h1><p class="tagline">${esc(p.tagline)}</p></div>${media}${gallery}<p class="desc-lg">${esc(p.desc)}</p><div class="detail-grid"><article class="detail-card"><h3>${esc(meta.problem)}</h3><p>${esc(p.problem || p.desc)}</p></article><article class="detail-card"><h3>${esc(meta.solution)}</h3><p>${esc(p.solution || p.tagline)}</p></article></div><ul class="features">${p.features.map(x => `<li>${esc(x)}</li>`).join('')}</ul><div class="tech-block"><div class="chips">${p.tech.map(x => `<span class="chip">${esc(x)}</span>`).join('')}</div></div><div class="detail-grid"><article class="detail-card"><h3>${esc(meta.status)}</h3><p>${esc(p.status)}</p></article><article class="detail-card"><h3>${esc(meta.links)}</h3><div class="pactions">${linkMarkup(p, true) || '—'}</div></article></div>`;
}

function setLang(lang) {
  LANG = UI[lang] ? lang : 'en';
  localStorage.setItem('lang', LANG);
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.title = t('meta_title');
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = t('meta_description');
  document.querySelectorAll('[data-i18n]').forEach(el => { const value = t(el.dataset.i18n); if (typeof value === 'string') el.textContent = value; });
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = `https://wa.me/21628771979?text=${encodeURIComponent(t('contact.wa_text'))}`; });
  const toggle = $('#lang-toggle');
  if (toggle) toggle.textContent = LANG === 'en' ? 'العربية' : 'EN';
  const footer = $('[data-i18n="footer"]');
  if (footer) footer.textContent = t('footer').replace('{year}', new Date().getFullYear());
  renderServices(); renderProcess(); renderTeam(); renderProjects();
  if (document.body.dataset.page === 'project') renderProjectPage();
}

const languageToggle = $('#lang-toggle');
if (languageToggle) languageToggle.addEventListener('click', () => setLang(LANG === 'en' ? 'ar' : 'en'));
setLang(LANG);
