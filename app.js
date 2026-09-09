/* Zzpkit — app navigation + copy buttons */
(function () {
  "use strict";

  const data = window.ZZPKIT;
  if (!data) return;

  const main = document.getElementById("app-main");
  const nav = document.getElementById("app-nav");
  const mobileTabs = document.getElementById("app-mobile-tabs");
  const toast = document.getElementById("toast");
  if (!main) return;

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function promptCard(p) {
    return `
      <article class="prompt-card" data-prompt-id="${escapeHtml(p.id)}">
        <div class="prompt-card-head">
          <div>
            <h3>${escapeHtml(p.title)}</h3>
            <p class="when">${escapeHtml(p.when)}</p>
          </div>
          <button type="button" class="btn btn-sm btn-copy" data-copy="${escapeHtml(p.id)}" aria-label="Kopieer prompt">
            Kopieer
          </button>
        </div>
        <pre class="prompt-body" id="prompt-${escapeHtml(p.id)}">${escapeHtml(p.prompt)}</pre>
      </article>`;
  }

  function sectionHTML(id) {
    switch (id) {
      case "start": {
        const s = data.start;
        return `
          <div class="intro">
            <h1>${escapeHtml(s.title)}</h1>
            <p class="lead">${escapeHtml(s.lead)}</p>
          </div>
          <div class="card" style="margin-bottom:1.25rem">
            <h3>Wat je krijgt</h3>
            <ul class="setup-ol">
              ${s.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
            </ul>
          </div>
          <h2>Snelle setup (±15 min)</h2>
          <ol class="setup-ol">
            ${s.setup.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
          </ol>
          <p class="note">${escapeHtml(s.tip)}</p>
          <p style="font-size:0.9rem;color:var(--muted)">Gebruik de navigatie om prompts te openen. Elk kaartje heeft een <strong>Kopieer</strong>-knop — plak in ChatGPT en vervang alles tussen [vierkante haken].</p>`;
      }
      case "formule": {
        const f = data.formule;
        return `
          <div class="intro">
            <h1>${escapeHtml(f.title)}</h1>
            <p class="lead">Bijna alle goede prompts volgen hetzelfde skelet. Leer dit één keer — hergebruik het overal.</p>
          </div>
          <div class="skeleton-box">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;margin-bottom:0.75rem">
              <h3 style="margin:0">Skelet</h3>
              <button type="button" class="btn btn-sm btn-copy" data-copy-text="formule-skeleton">Kopieer</button>
            </div>
            <pre id="formule-skeleton">${escapeHtml(f.skeleton)}</pre>
          </div>
          <div class="skeleton-box">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;margin-bottom:0.75rem">
              <h3 style="margin:0">Voorbeeld (ingevuld)</h3>
              <button type="button" class="btn btn-sm btn-copy" data-copy-text="formule-example">Kopieer</button>
            </div>
            <pre id="formule-example">${escapeHtml(f.example)}</pre>
          </div>
          <h2>Vijf upgrades die het verschil maken</h2>
          <ul class="upgrade-list">
            ${f.upgrades.map((u) => `<li>${escapeHtml(u)}</li>`).join("")}
          </ul>`;
      }
      case "offertes":
        return `
          <div class="intro">
            <h1>Offerte-prompts</h1>
            <p class="lead">Vijf workflows: vaste prijs, uren, scope creep, inkorten, Good/Better/Best. AI schrijft het concept — jij stuurt vanuit je eigen template.</p>
          </div>
          <p class="note">Workflow: verzamel deliverables &amp; prijs → AI-concept → scherp scope/meerwerk aan → plak in Word/Docs/offertetool.</p>
          ${data.prompts.offertes.map(promptCard).join("")}
          <p style="font-size:0.85rem;color:var(--muted)">Controleer altijd btw, betalingsvoorwaarden en algemene voorwaarden zelf of met je adviseur.</p>`;
      case "klantmail":
        return `
          <div class="intro">
            <h1>Klantmail</h1>
            <p class="lead">Kickoff, betaalherinnering, beleefd nee en review-vraag — warm, kort, zonder emoji-storm.</p>
          </div>
          ${data.prompts.klantmail.map(promptCard).join("")}`;
      case "linkedin":
        return `
          <div class="intro">
            <h1>LinkedIn</h1>
            <p class="lead">Zichtbaar zonder spam: post-ideeën uit je weekwerk, inhoudelijke comments, menselijke DM-openers.</p>
          </div>
          <p class="note">Ethiek: personaliseer, beperk volume, respecteer “nee”. LinkedIn is geen cold-call scriptmachine.</p>
          ${data.prompts.linkedin.map(promptCard).join("")}`;
      case "admin":
        return `
          <div class="intro">
            <h1>Admin</h1>
            <p class="lead">Weekplanning, factuurtekst en notulen → acties. Nuchtere shortcuts voor solopreneurs.</p>
          </div>
          ${data.prompts.admin.map(promptCard).join("")}`;
      case "speelboek":
        return `
          <div class="intro">
            <h1>Mini AI-speelboek</h1>
            <p class="lead">30 minuten per week. Vast moment — bijv. vrijdag 15:00 of maandag 9:00. Geen AI-hobby, wel een gewoonte.</p>
          </div>
          <div class="table-wrap">
            <table class="play">
              <thead><tr><th>Min</th><th>Actie</th></tr></thead>
              <tbody>
                ${data.speelboek.map((r) => `<tr><td>${escapeHtml(r.min)}</td><td>${escapeHtml(r.actie)}</td></tr>`).join("")}
              </tbody>
            </table>
          </div>
          <p class="note" style="margin-top:1.25rem"><strong>Maandelijkse upgrade (±20 min):</strong> verbeter je Custom Instructions en ruim verouderde prompts op.</p>`;
      case "fouten":
        return `
          <div class="intro">
            <h1>Fouten om te vermijden</h1>
            <p class="lead">Zeven valkuilen die ZZP’ers tijd — of reputatie — kosten.</p>
          </div>
          <div class="fault-grid">
            ${data.fouten.map((f) => `
              <article class="fault">
                <h3>${escapeHtml(f.title)}</h3>
                <p>${escapeHtml(f.text)}</p>
              </article>`).join("")}
          </div>`;
      case "cheatsheet":
        return `
          <div class="intro">
            <h1>Cheat sheet</h1>
            <p class="lead">Eén pagina. Print ’m, sticky ’m, of houd dit tabblad open.</p>
          </div>
          <dl class="cheat-grid">
            ${data.cheatsheet.map((c) => `
              <div class="cheat-row">
                <dt>${escapeHtml(c.k)}</dt>
                <dd>${escapeHtml(c.v)}</dd>
              </div>`).join("")}
          </dl>`;
      default:
        return `<p>Sectie niet gevonden.</p>`;
    }
  }

  function renderNav() {
    const items = data.sections
      .map(
        (s, i) =>
          `<button type="button" data-section="${s.id}" class="${i === 0 ? "is-active" : ""}">${escapeHtml(s.label)}</button>`
      )
      .join("");
    if (nav) {
      nav.innerHTML = `<div class="app-nav-label">Inhoud</div>${items}`;
    }
    if (mobileTabs) {
      mobileTabs.innerHTML = data.sections
        .map(
          (s, i) =>
            `<button type="button" data-section="${s.id}" class="${i === 0 ? "is-active" : ""}">${escapeHtml(s.label)}</button>`
        )
        .join("");
    }
  }

  function showSection(id) {
    const known = data.sections.some((s) => s.id === id);
    if (!known) id = "start";

    main.innerHTML = `
      <section class="app-section is-visible" id="section-${id}" aria-labelledby="heading-${id}">
        ${sectionHTML(id)}
        <p class="app-disclaimer">Zzpkit · Geen juridisch, fiscaal of boekhoudkundig advies. Controleer feiten en cijfers voordat je iets verstuurt.</p>
      </section>`;

    document.querySelectorAll("[data-section]").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-section") === id);
    });

    if (location.hash.replace("#", "") !== id) {
      history.replaceState(null, "", "#" + id);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    bindCopyButtons();
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 1800);
  }

  async function copyText(text, btn) {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    if (btn) {
      const prev = btn.textContent;
      btn.textContent = "Gekopieerd";
      btn.classList.add("is-copied");
      setTimeout(() => {
        btn.textContent = prev;
        btn.classList.remove("is-copied");
      }, 1600);
    }
    showToast("Prompt gekopieerd");
  }

  function bindCopyButtons() {
    main.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-copy");
        const el = document.getElementById("prompt-" + id);
        if (el) copyText(el.textContent, btn);
      });
    });
    main.querySelectorAll("[data-copy-text]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-copy-text");
        const el = document.getElementById(id);
        if (el) copyText(el.textContent, btn);
      });
    });
  }

  function onNavClick(e) {
    const btn = e.target.closest("[data-section]");
    if (!btn) return;
    showSection(btn.getAttribute("data-section"));
  }

  renderNav();
  if (nav) nav.addEventListener("click", onNavClick);
  if (mobileTabs) mobileTabs.addEventListener("click", onNavClick);

  const initial = (location.hash || "#start").replace("#", "") || "start";
  showSection(initial);

  window.addEventListener("hashchange", () => {
    showSection((location.hash || "#start").replace("#", "") || "start");
  });
})();
