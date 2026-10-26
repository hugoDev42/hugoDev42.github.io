// ============================================================
//  CONFIG.JS
//  Tout le texte du site vient de cet objet.
// ============================================================

const CONFIG = {
  favicon: "💻", // un emoji utilisé comme icône d'onglet

  profile: {
    name: "Hugo Germond",
    role: "Développeur Web, Mobile & Logiciel",
    statusAvailable: false, // false pour masquer le point vert "disponible"
    status:
      "Élève-ingénieur en alternance chez Altitude Infra : applications mobiles, API, logiciels et sites web.",
    pitch:
      "Élève-ingénieur à l'ESIGELEC et développeur en alternance, je conçois des applications web, mobiles et logicielles, du prototype à la mise en production.",
    initials: "HG",
    // Un court extrait de code affiché dans le hero, à but purement illustratif.
    codeSnippet: `function buildProject(idea: Idea) {
  const plan = design(idea);
  const app = build(plan, {
    stack: ["TypeScript", "React Native", "AWS"],
    tested: true,
  });

  return ship(app);
}`,
  },

  about: {
    paragraphs: [
      "Actuellement en troisième année du cycle ingénieur à l'ESIGELEC, je réalise mon alternance chez Altitude Infra en tant que développeur web, mobile et logiciel. Cette expérience me permet de mettre en pratique mes compétences en développement d'applications mobiles, d'API, d'applications logicielles et de sites web, tout en développant mes capacités en gestion de projet.",
      "Diplômé d'un BTS SNIR (major de promotion), j'ai acquis de solides bases en développement logiciel (C, C++, C#), en création d'API et de web services, ainsi qu'en administration réseau, ce qui complète mon profil technique.",
      "J'ai également réalisé un stage de 12 semaines chez Barco sur SlideRight QA, un outil d'analyse d'image médicale, en TypeScript et Angular sur AWS.",
      "Ma curiosité et ma polyvalence me permettent de m'adapter rapidement aux missions qui me sont confiées et de contribuer efficacement à des projets variés.",
    ],
    stack: [
      "TypeScript",
      "JavaScript",
      "React",
      "React Native",
      "Next.js",
      "Angular",
      "Symfony",
      "AWS",
      "SQL",
      "Git",
    ],
  },

  skills: [
    {
      category: "Langages",
      items: [
        "JavaScript",
        "TypeScript",
        "PHP",
        "Java",
        "C#",
        "C",
        "C++",
        "Programmation orientée objet",
      ],
    },
    {
      category: "Frameworks & Librairies",
      items: [
        "React",
        "React Native",
        "Next.js",
        "Angular",
        "Symfony",
        ".NET",
        "Expo",
        "Node.js",
      ],
    },
    {
      category: "Web & API",
      items: [
        "HTML5 / CSS3",
        "UI/UX & Responsive Design",
        "API REST",
        "Développement full-stack",
      ],
    },
    {
      category: "Bases de données",
      items: ["MySQL", "SQL", "Oracle", "SQL Server (MSSQL)"],
    },
    {
      category: "Cloud & Services",
      items: ["AWS", "Firebase"],
    },
    {
      category: "Outils & Environnement",
      items: [
        "Git (GitHub, GitLab)",
        "CI/CD",
        "VS Code",
        "Linux (WSL)",
        "Docker",
        "Bruno",
        "Postman",
      ],
    },
    {
      category: "Réseaux",
      items: ["Réseaux", "Administration réseau"],
    },
    {
      category: "Gestion de projet & Collaboration",
      items: ["Jira", "Confluence", "Microsoft 365", "Méthodes agiles / Scrum"],
    },
    {
      category: "IA & Productivité",
      items: ["GitHub Copilot", "Prompt Engineering"],
    },
  ],

  // Liste des projets
  projects: [
    {
      title: "Applications web & mobiles — Altitude Infra",
      description:
        "En alternance : développement d'applications mobiles (React Native) et d'outils web (React), conception d'API avec Symfony, gestion de bases de données SQL et suivi de projet.",
      tags: ["React Native", "React", "Symfony", "API REST", "SQL"],
    },
    {
      title: "SlideRight QA — Analyse d'image médicale",
      description:
        "Stage de 12 semaines chez Barco : contribution à un outil de contrôle qualité pour l'analyse de lames virtuelles, utilisé par des professionnels de santé.",
      tags: ["Angular", "TypeScript", "AWS", "Scrum"],
      links: { demo: "https://www.barco.com/en/product/slideright-qa" },
    },
    {
      title: "Extranet — Centre Hospitalier Durécu-Lavoisier",
      description:
        "Stage : conception et développement d'un extranet pour l'établissement, en complément de missions d'administration réseau et de maintenance informatique.",
      tags: ["Développement web", "Administration réseau"],
    },
  ],

  // Parcours professionnel et formation.
  experience: [
    {
      period: "Sept. 2023 — Aujourd'hui",
      title: "Alternance — Développeur Web, Mobile & Logiciel",
      place: "Altitude Infra",
      description:
        "Développement d'applications mobiles (React Native), d'outils web (React) et d'API (Symfony), gestion de bases de données SQL, gestion de projet.",
    },
    {
      period: "Juin — Août 2026",
      title: "Stage de 12 semaines — Développeur web",
      place: "Barco — SlideRight QA (Belgique)",
      description:
        "Mobilité internationale : contribution à un outil de contrôle qualité pour l'analyse de lames virtuelles, utilisé par des professionnels de santé. Stack : Angular, TypeScript, AWS.",
    },
    {
      period: "2023 — 2027",
      title: "Cycle ingénieur en alternance, dominante ISN",
      place: "ESIGELEC",
      description:
        "École d'ingénieurs généraliste — spécialisation Ingénierie des Systèmes Numériques.",
    },
    {
      period: "2021 — 2023",
      title: "BTS Systèmes Numériques, option informatique et réseaux",
      place: "Campus La Châtaigneraie",
      description:
        "Diplôme obtenu, major de promotion. Développement logiciel (C, C++, C#), API et web services, administration réseau.",
    },
    {
      period: "2022",
      title: "Stage",
      place: "Centre Hospitalier Durécu-Lavoisier",
      description:
        "Développement d'un extranet, administration réseau et maintenance informatique.",
    },
    {
      period: "2020",
      title: "Baccalauréat scientifique, option sciences de l'ingénieur",
      place: "Lycée Galilée",
      description: "Diplôme obtenu avec mention Bien.",
    },
  ],

  contact: {
    text: "Une opportunité à me proposer ? Écrivez-moi directement.",
    email: "hugo.germond.dev@gmail.com",
  },

  socials: [
    { label: "GitHub", url: "https://github.com/hugoDev42" },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/hugo-germond-701648279",
    },
  ],

  footerNote: `© ${new Date().getFullYear()} Hugo Germond — construit avec HTML, CSS et JavaScript, hébergé sur GitHub Pages.`,
};
