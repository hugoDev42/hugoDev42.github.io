// ============================================================
//  MAIN.JS
//  Génère le contenu à partir de CONFIG et gère les interactions.
//  Tu n'as normalement pas besoin de modifier ce fichier :
//  personnalise plutôt js/config.js.
// ============================================================

(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- THEME ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  root.setAttribute("data-theme", savedTheme || (systemPrefersLight ? "light" : "dark"));

  document.getElementById("themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });

  /* ---------- FAVICON ---------- */
  if (CONFIG.favicon) {
    const link = document.querySelector("link[rel='icon']");
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${CONFIG.favicon}</text></svg>`;
    link.setAttribute("href", `data:image/svg+xml,${encodeURIComponent(svg)}`);
  }

  /* ---------- HERO ---------- */
  document.getElementById("navLogo").textContent = CONFIG.profile.initials;

  const statusEl = document.getElementById("heroStatus");
  if (CONFIG.profile.statusAvailable) {
    statusEl.innerHTML = `<span class="dot"></span> ${CONFIG.profile.status}`;
  } else {
    statusEl.textContent = CONFIG.profile.status;
  }

  document.getElementById("heroName").textContent = CONFIG.profile.name;
  document.getElementById("heroRole").textContent = CONFIG.profile.role;
  document.getElementById("heroPitch").textContent = CONFIG.profile.pitch;

  const heroSocials = document.getElementById("heroSocials");
  CONFIG.socials.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.url;
    a.textContent = s.label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    heroSocials.appendChild(a);
  });

  /* ---------- CODE SNIPPET TYPEWRITER ---------- */
  const codeEl = document.getElementById("codeSnippet");
  const fullCode = CONFIG.profile.codeSnippet;
  if (prefersReducedMotion) {
    codeEl.textContent = fullCode;
  } else {
    let i = 0;
    const speed = 14; // ms per character
    function typeNext() {
      if (i <= fullCode.length) {
        codeEl.textContent = fullCode.slice(0, i);
        i++;
        setTimeout(typeNext, speed);
      }
    }
    setTimeout(typeNext, 500);
  }

  /* ---------- ABOUT ---------- */
  const aboutText = document.getElementById("aboutText");
  CONFIG.about.paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    aboutText.appendChild(p);
  });

  document.getElementById("aboutAvatar").textContent = CONFIG.profile.initials;

  const marqueeTrack = document.getElementById("marqueeTrack");
  const stackDoubled = [...CONFIG.about.stack, ...CONFIG.about.stack];
  stackDoubled.forEach((tech) => {
    const span = document.createElement("span");
    span.textContent = tech;
    marqueeTrack.appendChild(span);
  });

  /* ---------- SKILLS ---------- */
  const skillsGrid = document.getElementById("skillsGrid");
  CONFIG.skills.forEach((group, idx) => {
    const card = document.createElement("div");
    card.className = "skill-card reveal";
    card.style.transitionDelay = `${idx * 0.08}s`;
    card.innerHTML = `
      <h3>${group.category}</h3>
      <ul>${group.items.map((i) => `<li>${i}</li>`).join("")}</ul>
    `;
    skillsGrid.appendChild(card);
  });

  /* ---------- PROJECTS ---------- */
  const projectsGrid = document.getElementById("projectsGrid");
  CONFIG.projects.forEach((project, idx) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.style.transitionDelay = `${idx * 0.08}s`;

    const links = [];
    if (project.links?.code) links.push(`<a href="${project.links.code}" target="_blank" rel="noopener noreferrer">Code</a>`);
    if (project.links?.demo) links.push(`<a href="${project.links.demo}" target="_blank" rel="noopener noreferrer">Démo</a>`);

    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">${project.tags.map((t) => `<span>${t}</span>`).join("")}</div>
      ${links.length ? `<div class="project-links">${links.join("")}</div>` : ""}
    `;
    projectsGrid.appendChild(card);
  });

  /* ---------- EXPERIENCE / TIMELINE ---------- */
  const timeline = document.getElementById("timeline");
  CONFIG.experience.forEach((item, idx) => {
    const el = document.createElement("div");
    el.className = "timeline-item reveal";
    el.style.transitionDelay = `${idx * 0.08}s`;
    el.innerHTML = `
      <p class="timeline-period">${item.period}</p>
      <h3>${item.title}</h3>
      <p class="timeline-place">${item.place}</p>
      <p>${item.description}</p>
    `;
    timeline.appendChild(el);
  });

  /* ---------- CONTACT ---------- */
  document.getElementById("contactText").textContent = CONFIG.contact.text;

  const contactActions = document.getElementById("contactActions");

  const mailLink = document.createElement("a");
  mailLink.href = `mailto:${CONFIG.contact.email}`;
  mailLink.className = "btn btn-primary";
  mailLink.textContent = "M'envoyer un email";
  contactActions.appendChild(mailLink);

  const copyBtn = document.createElement("button");
  copyBtn.className = "btn btn-ghost copy-feedback";
  copyBtn.textContent = "Copier l'adresse";
  copyBtn.dataset.feedback = "Copié !";
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.contact.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = CONFIG.contact.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    copyBtn.classList.add("is-copied");
    setTimeout(() => copyBtn.classList.remove("is-copied"), 1400);
  });
  contactActions.appendChild(copyBtn);

  CONFIG.socials.forEach((s) => {
    const a = document.createElement("a");
    a.href = s.url;
    a.className = "btn btn-ghost";
    a.textContent = s.label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    contactActions.appendChild(a);
  });

  /* ---------- FOOTER ---------- */
  document.getElementById("footerNote").textContent = CONFIG.footerNote;

  /* ---------- NAV: scroll shadow + progress bar ---------- */
  const nav = document.getElementById("nav");
  const progressBar = document.getElementById("progressBar");

  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 8);
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- NAV: mobile toggle ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- NAV: active section highlighting ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navAnchors.forEach((a) => a.classList.toggle("active", a.dataset.section === entry.target.id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => sectionObserver.observe(s));

  /* ---------- SCROLL REVEAL ---------- */
  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

  /* ---------- HERO CURSOR GLOW ---------- */
  if (!prefersReducedMotion && !("ontouchstart" in window)) {
    const hero = document.querySelector(".hero");
    const glow = document.getElementById("heroGlow");
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      glow.style.setProperty("--x", `${e.clientX - rect.left}px`);
      glow.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });
  }
})();
