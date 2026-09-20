// Megbli Labs — language switching + rendering
const $ = (s, el = document) => el.querySelector(s);
let LANG = localStorage.getItem("lang") || "en";

const t = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N[LANG]);

function badge(st) {
  if (!st) return "";
  return `<span class="badge ${st.type || "demo"}">${st.label}</span>`;
}

function renderServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;
  container.innerHTML = I18N[LANG].services.items
    .map(s => `<article class="card"><div class="body"><h3>${s.t}</h3><p>${s.d}</p></div></article>`)
    .join("");
}

function renderProcess() {
  const container = document.getElementById("process-list");
  if (!container) return;
  container.innerHTML = I18N[LANG].process.steps
    .map(s => `<li><h3>${s.t}</h3><p>${s.d}</p></li>`)
    .join("");
}

function renderTeam() {
  const container = document.getElementById("team-grid");
  if (!container) return;
  container.innerHTML = I18N[LANG].team.members.map(m => `
    <article class="card member">
      <div class="avatar" style="background:${m.color}">${m.initial}</div>
      <h3>${m.name}</h3>
      <p class="role">${m.role}</p>
      <p>${m.bio}</p>
      <div class="chips skills">${m.skills.map(s => `<span class="chip">${s}</span>`).join("")}</div>
    </article>`).join("");
}

function coverStyle(p) {
  return p.image ? `url('${p.image}') center/cover no-repeat` : p.cover;
}

function projectCard(p, W) {
  const d = p[LANG];
  const links = [
    d.links && d.links.demo ? `<a href="${d.links.demo}" target="_blank" rel="noopener">${W.demo} ↗</a>` : "",
    d.links && d.links.code ? `<a href="${d.links.code}" target="_blank" rel="noopener">${W.code} ↗</a>` : "",
    `<a href="project.html?p=${p.id}">${W.view}</a>`
  ].filter(Boolean).join("");

  return `
    <article class="card project">
      <div class="cover" style="background:${p.cover}; position:relative;">
        <span>${p.initial}</span>
        <div class="project-index">${p.no || p.initial}</div>
      </div>
      <div class="body">
        <div class="meta">${badge(d.status)}<span class="credit">${d.credit}</span></div>
        <h3>${d.title}</h3>
        <p class="tagline">${d.tagline}</p>
        <p class="desc">${d.desc}</p>
        <div class="chips">${p.tech.map(x => `<span class="chip">${x}</span>`).join("")}</div>
        <div class="links">${links}</div>
      </div>
    </article>`;
}

function renderProjects() {
  const W = I18N[LANG].work;
  const projects = PROJECTS;
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(p => projectCard(p, W)).join("");
}

function renderProjectPage() {
  const id = new URLSearchParams(location.search).get("p");
  const p = PROJECTS.find(x => x.id === id);
  if (!p) {
    window.location.href = "index.html";
    return;
  }

  const d = p[LANG];
  const W = I18N[LANG].work;
  const projectMeta = I18N[LANG].project;
  const featureRows = d.features || [];
  const detail = p.detail || {};
  const workflow = detail.workflow || [];
  const results = detail.results || featureRows;
  const links = [
    d.links && d.links.demo ? `<a class="btn btn-primary" href="${d.links.demo}" target="_blank" rel="noopener">${W.demo} ↗</a>` : "",
    d.links && d.links.code ? `<a class="btn btn-ghost" href="${d.links.code}" target="_blank" rel="noopener">${W.code} ↗</a>` : ""
  ].filter(Boolean).join("");

  const html = `
    <a class="backlink" href="index.html">${I18N[LANG].back}</a>
    <div class="phead">
      <div class="meta">${badge(d.status)}<span class="credit">${d.credit}</span></div>
      <h1>${d.title}</h1>
      <p class="tagline">${d.tagline}</p>
    </div>
    <div class="pcover" style="background:${p.cover};"><span>${p.initial}</span></div>
    <p class="desc-lg">${d.desc}</p>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>${projectMeta.problem}</h3>
        <p>${detail.problem || d.desc}</p>
      </article>
      <article class="detail-card">
        <h3>${projectMeta.solution}</h3>
        <p>${detail.solution || d.tagline}</p>
      </article>
    </div>

    ${workflow.length ? `
      <div class="workflow-block">
        <h3>${projectMeta.workflow}</h3>
        <div class="workflow-flow">
          ${workflow.map(step => `<span class="workflow-step">${step}</span>`).join("")}
        </div>
      </div>` : ""}

    <div class="tech-block">
      <div class="chips">${p.tech.map(x => `<span class="chip">${x}</span>`).join("")}</div>
    </div>

    <div class="detail-grid">
      <article class="detail-card">
        <h3>${projectMeta.results}</h3>
        <ul class="result-list">${results.map(item => `<li>${item}</li>`).join("")}</ul>
      </article>
      <article class="detail-card">
        <h3>${projectMeta.status}</h3>
        <p>${d.status && d.status.label ? d.status.label : ""}</p>
        <h3 style="margin-top:16px;">${projectMeta.links}</h3>
        <div class="pactions">${links || "—"}</div>
      </article>
    </div>
  `;

  document.getElementById("project").innerHTML = html;
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = I18N[lang].meta_title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute("content", I18N[lang].meta_description);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });

  const msg = encodeURIComponent(I18N[lang].contact.wa_text);
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = `https://wa.me/21628771979?text=${msg}`;
  });

  document.getElementById("lang-toggle").textContent = lang === "en" ? "العربية" : "EN";
  const footer = document.querySelector('[data-i18n="footer"]');
  if (footer) footer.textContent = I18N[lang].footer.replace("{year}", new Date().getFullYear());

  if (document.getElementById("services-grid")) renderServices();
  if (document.getElementById("process-list")) renderProcess();
  if (document.getElementById("team-grid")) renderTeam();
  if (document.getElementById("projects-grid")) renderProjects();
  if (document.body.dataset.page === "project") renderProjectPage();
}

document.getElementById("lang-toggle").addEventListener("click", () => setLang(LANG === "en" ? "ar" : "en"));
setLang(LANG);

if (document.body.dataset.page === "project") {
  renderProjectPage();
}
