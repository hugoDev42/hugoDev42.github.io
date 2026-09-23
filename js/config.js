// ============================================================
//  CONFIG.JS
//  Tout le texte du site vient de cet objet.
//  Modifie librement les valeurs ci-dessous.
//
//  N'oublie pas de mettre aussi à jour le <title> et la balise
//  <meta name="description"> dans index.html si tu changes de
//  nom ou d'intitulé (elles ne sont pas générées automatiquement,
//  pour rester lisibles par les moteurs de recherche).
// ============================================================

const CONFIG = {
  favicon: "💻", // un emoji utilisé comme icône d'onglet

  profile: {
    name: "Hugo Germond",
    role: "Développeur Full-Stack & Mobile",
    statusAvailable: false, // false pour masquer le point vert "disponible"
    status:
      "Actuellement en alternance chez Altitude Infra, je développe des applications web et mobiles ainsi que des API.",
    pitch:
      "Alternant ingénieur à l'ESIGELEC chez Altitude Infra, je conçois des applications web et mobiles, du prototype à la mise en production.",
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
      "Étudiant ingénieur à l'ESIGELEC (dominante Ingénierie des Systèmes Numériques), actuellement en alternance chez Altitude Infra où je développe des applications web et mobiles ainsi que des API.",
      "J'ai aussi réalisé un stage de 12 semaines chez Barco sur SlideRight QA, un outil d'analyse d'image médicale, en TypeScript et Angular sur AWS.",
    ],
    stack: [
      "TypeScript",
      "JavaScript",
      "React",
      "React Native",
      "Expo",
      "Angular",
      "Java",
      "AWS",
      "SQL",
      "Git",
    ],
  },

  skills: [
    {
      category: "Frontend & Mobile",
      items: [
        "React",
        "React Native",
        "Expo",
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5 / CSS3",
        "UI/UX & Responsive Design",
      ],
    },
    {
      category: "Backend & Langages",
      items: [
        "Java",
        "C / C++ / C#",
        "PHP",
        "Symfony",
        ".NET Framework",
        "API REST",
        "Programmation orientée objet",
      ],
    },
    {
      category: "Données, Cloud & Outils",
      items: [
        "MySQL",
        "Oracle",
        "SQL Server (MSSQL)",
        "AWS",
        "Git, GitHub, GitLab",
        "Gestion de projet agile",
        "Réseaux",
        "IA & Prompt Engineering",
      ],
    },
  ],

  // Ajoute, retire ou modifie autant de projets que tu veux.
  projects: [
    {
      title: "SlideRight QA — Analyse d'image médicale",
      description:
        "Stage de 12 semaines chez Barco : contribution à un outil de contrôle qualité pour l'analyse de lames virtuelles, utilisé par des professionnels de santé.",
      tags: ["Angular", "TypeScript", "AWS"],
      links: { demo: "https://www.barco.com/en/product/slideright-qa" },
    },
    {
      title: "Applications web & mobiles — Altitude Infra",
      description:
        "En alternance : développement d'applications mobiles et web, conception et développement d'API REST, gestion de bases de données SQL et suivi de projet.",
      tags: ["React Native", "React", "API REST", "SQL"],
    },
    {
      title: "Extranet — Centre Hospitalier Durécu-Lavoisier",
      description:
        "Stage : conception et développement d'un extranet pour l'établissement, en complément de missions d'administration réseau et de maintenance informatique.",
      tags: ["Développement web", "Administration réseau"],
    },
  ],

  // Du plus récent au plus ancien.
  experience: [
    {
      period: "2023 — Aujourd'hui",
      title: "Alternance — Développeur Full-Stack & Mobile",
      place: "Altitude Infra",
      description:
        "Développement d'applications mobiles et web, conception et développement d'API, gestion de bases de données SQL, gestion de projet.",
    },
    {
      period: "Stage — 12 semaines",
      title: "Analyse d'image médicale",
      place: "Barco — SlideRight QA",
      description:
        "Contribution à un outil de contrôle qualité pour l'analyse de lames virtuelles, utilisé par des professionnels de santé. Stack : Angular, TypeScript, AWS.",
    },
    {
      period: "2023 — Aujourd'hui",
      title: "Cycle ingénieur en alternance, dominante ISN",
      place: "ESIGELEC",
      description:
        "École d'ingénieurs généraliste — spécialisation Ingénierie des Systèmes Numériques.",
    },
    {
      period: "2022",
      title: "Stage",
      place: "Centre Hospitalier Durécu-Lavoisier",
      description:
        "Développement d'un extranet, administration réseau et maintenance informatique.",
    },
    {
      period: "2023",
      title: "BTS Systèmes Numériques, option informatique et réseaux",
      place: "Campus La Châtaigneraie",
      description: "Diplôme obtenu.",
    },
    {
      period: "2020",
      title: "Baccalauréat scientifique, option sciences de l'ingénieur",
      place: "Lycée Galilée",
      description: "Diplôme obtenu.",
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
