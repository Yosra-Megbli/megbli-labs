// Megbli Labs — language switching + rendering
const $ = (s, el = document) => el.querySelector(s);
let LANG = localStorage.getItem("lang") || "en";

const t = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), I18N[LANG]);

function badge(st) { return `<span class="badge ${st.type}">${st.label}</span>`; }

function renderServices() {
  $("#services-grid").innerHTML = I18N[LANG].services.items
    .map(s => `<article class="card"><h3>${s.t}</h3><p>${s.d}</p></article>`).join("");
}

function renderProcess() {
  $("#process-list").innerHTML = I18N[LANG].process.steps
    .map(s => `<li><h3>${s.t}</h3><p>${s.d}</p></li>`).join("");
}

function renderTeam() {
  $("#team-grid").innerHTML = I18N[LANG].team.members.map(m => `
    <article class="card member">
      <div class="avatar" style="background:${m.color}">${m.initial}</div>
      <h3>${m.name}</h3><p class="role">${m.role}</p>
      <p>${m.bio}</p>
      <div class="chips skills">${m.skills.map(s => `<span class="chip">${s}</span>`).join("")}</div>
    </article>`).join("");
}

function renderProjects() {
  const W = I18N[LANG].work;
  $("#projects-grid").innerHTML = PROJECTS.map(p => {
    const d = p[LANG];
    const links = [
      d.links.demo ? `<a href="${d.links.demo}" target="_blank" rel="noopener">${W.demo} ↗</a>` : "",
      d.links.code ? `<a href="${d.links.code}" target="_blank" rel="noopener">${W.code} ↗</a>` : "",
      `<a href="project.html?p=${p.id}">${W.view}</a>`
    ].filter(Boolean).join("");
    return `
    <article class="card project">
      <div class="cover" style="background:${p.image ? `url('${p.image}') center/cover no-repeat` : p.cover}">${p.image ? "" : `<span>${p.initial}</span>`}</div>
      <div class="body">
        <div class="meta">${badge(d.status)}<span class="credit">${d.credit}</span></div>
        <h3>${d.title}</h3><p class="tagline">${d.tagline}</p><p class="desc">${d.desc}</p>
        <div class="chips">${p.tech.map(x => `<span class="chip">${x}</span>`).join("")}</div>
        <div class="links">${links}</div>
      </div>
    </article>`;
  }).join("");
}

function renderProjectPage() {
  const id = new URLSearchParams(location.search).get("p");
  const p = PROJECTS.find(x => x.id === id);
  if (!p) { location.href = "index.html"; return; }
  const d = p[LANG], W = I18N[LANG].work;
  const links = [
    d.links.demo ? `<a class="btn btn-primary" href="${d.links.demo}" target="_blank" rel="noopener">${W.demo} ↗</a>` : "",
    d.links.code ? `<a class="btn btn-ghost" href="${d.links.code}" target="_blank" rel="noopener">${W.code} ↗</a>` : ""
  ].filter(Boolean).join("");
  $("#project").innerHTML = `
    <a class="backlink" href="index.html">${I18N[LANG].back}</a>
    <div class="phead">
      <div class="meta">${badge(d.status)}<span class="credit">${d.credit}</span></div>
      <h1>${d.title}</h1><p class="tagline">${d.tagline}</p>
    </div>
    <div class="pcover" style="background:${p.image ? `url('${p.image}') center/cover no-repeat` : p.cover}">${p.image ? "" : `<span>${p.initial}</span>`}</div>
    ${p.gallery ? `<div class="gallery">${p.gallery.map(src => `<img src="${src}" loading="lazy" alt="${d.title}">`).join("")}</div>` : ""}
    <p class="desc-lg">${d.desc}</p>
    <ul class="features">${d.features.map(f => `<li>${f}</li>`).join("")}</ul>
    <div class="chips">${p.tech.map(x => `<span class="chip">${x}</span>`).join("")}</div>
    <div class="pactions">${links}</div>`;
}

function setLang(lang) {
  LANG = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = I18N[lang].meta_title;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n);
    if (typeof v === "string") el.textContent = v;
  });
  const msg = encodeURIComponent(I18N[lang].contact.wa_text);
  document.querySelectorAll("[data-wa]").forEach(a =>
    a.href = `https://wa.me/21628771979?text=${msg}`);
  $("#lang-toggle").textContent = lang === "en" ? "العربية" : "EN";
  const f = $('[data-i18n="footer"]');
  if (f) f.textContent = I18N[lang].footer.replace("{year}", new Date().getFullYear());
  if ($("#services-grid")) renderServices();
  if ($("#process-list")) renderProcess();
  if ($("#team-grid")) renderTeam();
  if ($("#projects-grid")) renderProjects();
  if (document.body.dataset.page === "project") renderProjectPage();
}

$("#lang-toggle").addEventListener("click", () => setLang(LANG === "en" ? "ar" : "en"));
setLang(LANG);
