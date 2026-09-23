// ============================================================
//  CONFIG.JS
//  Tout le texte du site vient de cet objet.
//  Remplace les valeurs ci-dessous par tes propres informations
//  — tu n'as pas besoin de toucher au reste du code.
//
//  N'oublie pas de mettre aussi à jour le <title> et la balise
//  <meta name="description"> dans index.html (elles ne sont
//  pas générées automatiquement, pour rester lisibles par les
//  moteurs de recherche).
// ============================================================

const CONFIG = {
  favicon: "💻", // un emoji utilisé comme icône d'onglet

  profile: {
    name: "Camille Dubois",
    role: "Développeuse Full-Stack",
    statusAvailable: true, // false pour masquer le point vert "disponible"
    status: "Disponible pour de nouvelles opportunités",
    pitch: "Je conçois des applications web rapides, accessibles et faciles à maintenir — du prototype à la mise en production.",
    initials: "CD",
    // Un court extrait de code affiché dans le hero, à but purement illustratif.
    codeSnippet: `function buildProject(idea) {
  const plan = design(idea);
  const code = write(plan, {
    clean: true,
    tested: true,
  });

  return ship(code);
}`
  },

  about: {
    paragraphs: [
      "Développeuse full-stack, spécialisée en JavaScript/TypeScript sur des applications web à fort trafic.",
      "J'aime transformer des besoins flous en interfaces claires, avec une attention particulière portée à la performance et à l'accessibilité."
    ],
    stack: ["JavaScript", "TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS", "Git", "GraphQL"]
  },

  skills: [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Accessibilité (WCAG)"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "REST & GraphQL", "Redis"]
    },
    {
      category: "Outils & pratiques",
      items: ["Git", "Docker", "CI/CD", "Tests (Jest, Playwright)", "Agile/Scrum"]
    }
  ],

  // Ajoute, retire ou modifie autant de projets que tu veux.
  projects: [
    {
      title: "Nom du projet 1",
      description: "Décris en une ou deux phrases le problème résolu, les choix techniques et ton rôle.",
      tags: ["React", "Node.js", "PostgreSQL"],
      links: { code: "https://github.com/tonpseudo/projet1", demo: "https://demo-projet1.exemple.com" }
    },
    {
      title: "Nom du projet 2",
      description: "Décris en une ou deux phrases le problème résolu, les choix techniques et ton rôle.",
      tags: ["TypeScript", "Vue.js"],
      links: { code: "https://github.com/tonpseudo/projet2", demo: "" }
    },
    {
      title: "Nom du projet 3",
      description: "Décris en une ou deux phrases le problème résolu, les choix techniques et ton rôle.",
      tags: ["Python", "FastAPI", "Docker"],
      links: { code: "https://github.com/tonpseudo/projet3", demo: "" }
    }
  ],

  // Du plus récent au plus ancien.
  experience: [
    {
      period: "2023 — Aujourd'hui",
      title: "Développeuse Full-Stack",
      place: "Nom de l'entreprise",
      description: "Ta principale réalisation ou responsabilité dans ce poste."
    },
    {
      period: "2021 — 2023",
      title: "Développeuse Front-End",
      place: "Nom de l'entreprise précédente",
      description: "Ta principale réalisation ou responsabilité dans ce poste."
    },
    {
      period: "2020 — 2021",
      title: "Formation",
      place: "Nom de l'école",
      description: "Ce que tu as étudié ou le projet marquant de ta formation."
    }
  ],

  contact: {
    text: "Un projet en tête ou une opportunité à me proposer ? Écris-moi directement.",
    email: "ton.email@exemple.com"
  },

  socials: [
    { label: "GitHub", url: "https://github.com/tonpseudo" },
    { label: "LinkedIn", url: "https://linkedin.com/in/tonpseudo" }
  ],

  footerNote: `© ${new Date().getFullYear()} Camille Dubois — construit avec HTML, CSS et JavaScript, hébergé sur GitHub Pages.`
};
