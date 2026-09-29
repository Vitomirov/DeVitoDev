export const portfolioContent = {
    about: {
    title: "About Me",

    subtitleLeft: "My Skills",

    quoteLeft: [
      "Technologies I reach for across real projects—from React and TypeScript UIs to Node.js and Python APIs, SQL databases, and Docker-based deployment. ",
      "I choose the stack for the problem, not the trend, and keep expanding it as products demand."
    ],

    subtitleRight: "Get to know me!",

    quoteRight: [
      "I'm a software engineer who ships web products end to end: thoughtful interfaces, reliable backends, and data that stays clear under real use.", " ",
      "My approach is to understand the problem first, then design small, maintainable pieces—solid validation, sensible architecture, and performance where it matters.", " ",
      "Recent work includes async pipelines, AI-assisted features, and the DevOps habits (Git, CI/CD, containers) to get them live with confidence.", " ",
      {
        type: "linkText",
        textBefore: "Browse my projects or ",
        linkText: "contact",
        href: "#contact",
        textAfter: " me if you'd like to collaborate."
      }
    ],

    skillsList: [
      { label: "HTML" },
      { label: "CSS" },
      { label: "JavaScript" },
      { label: "TypeScript" },
      { label: "React" },
      { label: "Bootstrap" },
      { label: "Node.js" },
      { label: "Fastify.js" },
      { label: "Next.js" },
      { label: "Express.js" },
      { label: "Python" },
      { label: "FastAPI" },
      { label: "JWT" },
      { label: "MySQL" },
      { label: "PostgreSQL" },
      { label: "Git" },
      { label: "Docker" },
      { label: "CI/CD" },
    ]
  },
  myJourney: {
    title: "My Journey",

    p1: [
      "As an archaeologist, I’ve spent years uncovering hidden patterns and organizing complex data—skills I now bring to building thoughtful, user-friendly software.",
      "Later, while working in market research and mortgage loan processing, I often ran into outdated systems that needed smarter solutions.",
      "Instead of accepting them, I looked for ways to improve, which eventually led me to fully commit to software engineering."
    ],

    quoteLeft: [
      "It may seem that archaeology and software engineering are worlds apart, but both require analyzing complex information and solving problems—skills I now apply to building impactful, user-focused products."
    ],

    quoteRight: [
      "I love turning ideas into tangible products. Seeing a simple idea grow into a fully functional application motivates me every day."
    ],

    p2: [
      "I started coding out of curiosity, experimenting with ideas in the console just to see them work.",
      "Soon, I realized I wanted more.",
      "I wanted to build fully interactive projects that people could actually use.",
      "That curiosity led me to learn the full stack—interfaces, APIs, and data—so I could turn ideas into software people actually use."
    ]
  },
  myWorks: {
    title: "My Works",
    projects: [
      {
        slug: "ReScopeSurveys",
        title: "ReScope Surveys",
        description:
          "A browser-based survey platform for market research and CX teams—visual builder, advanced logic, and multi-tenant delivery on PostgreSQL.",
      },
      {
        slug: "AiCrateDigger",
        title: "AiCrateDigger",
        description:
          "A simple AI search engine for discovering physical music albums available for purchase in local stores.",
      },
      {
        slug: "WarrantyWallet",
        title: "Warranty Wallet",
        description:
          "A full-stack application for managing product warranties and receipts digitally.",
      },
      {
        slug: "ShopifyAnalyzer",
        title: "Shopify AI Analyzer",
        description:
          "An AI-powered Shopify storefront auditor that scrapes store data and delivers actionable insights across CRO, SEO, UX, and trust signals.",
      },
    ],
  },
  warrantyWallet: {
    title: "Warranty Wallet",

    description: [
      "Warranty Wallet App is a full-stack web application built for easy and organized warranty tracking.",
      "It helps users keep receipts safe and avoid missed warranty expirations by storing everything digitally.",
      "Key features include secure user authentication, adding new warranties with image uploads, and browsing or deleting saved warranty entries from a personalized dashboard.",
    ],

    technologiesSubtitle: "Technologies Used:",

    technologies: [
      { label: "Frontend", tools: "React, Bootstrap, React Router DOM, Axios" },
      { label: "Backend", tools: "Node.js, Express, MySQL, JWT" },
    ],

    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Vitomirov/warranty-wallet",
      },
      {
        label: "Live Demo",
        href: "https://dejanvitomirov.com/warrantywallet",
      },
    ],
  },
  shopifyAnalyzer: {
    title: "Shopify AI Analyzer",

    description: [
      "Shopify AI Analyzer is a specialized tool designed to audit e-commerce storefronts using automated web scraping and AI analysis.",
      "The app validates Shopify-specific signatures and extracts structured data from HTML, stylesheets, and theme metadata to identify optimization gaps.",
      "It delivers actionable, AI-generated insights across key performance areas: Conversion Rate (CRO), SEO, User Experience (UX), and Trust signals, helping merchants improve their store's professional impact.",
    ],

    technologiesSubtitle: "Technologies Used:",

    technologies: [
      { label: "Frontend", tools: "Next.js 16 (App Router), Tailwind CSS 4, React 19" },
      { label: "Backend", tools: "Node.js, Cheerio (Web Scraping), Zod (Validation)" },
    ],

    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/UkisAI-Academy/nedelja-3-vas-app-Vitomirov",
      },
      {
        label: "Live Demo",
        href: "https://shopifyanalyzer.dejanvitomirov.com/",
      },
    ],
  },
  aiCrateDigger: {
    title: "AiCrateDigger",

    description: [
      "AiCrateDigger is an advanced full-stack application designed for intelligent, geo-aware discovery of physical music formats including vinyl, CDs, and cassettes.",
      "The app utilizes natural language LLM parsing to extract precise musical entities and search intents from loose user queries, routing them through a dynamic local store discovery mechanism.",
      "Operating through an end-to-end async pipeline, it enforces strict geographical pre-filtering and smart Redis caching to transform raw web snippets into structured, actionable listings with price hints and availability signals.",
    ],

    technologiesSubtitle: "Technologies Used:",

    technologies: [
      { label: "Frontend", tools: "Next.js 14 (App Router), TypeScript, Tailwind CSS 3" },
      { label: "Backend", tools: "Python, FastAPI, Pydantic v2, PostgreSQL, Redis, Docker, Tavily API" },
    ],

    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Vitomirov/AiCrateDigger",
      },
      {
        label: "Live Demo",
        href: "https://aicratedigger.dejanvitomirov.com/",
      },
    ],
  },
  reScopeSurveys: {
    title: "ReScope Surveys",

    description: [
      "ReScope Surveys is a browser-based authoring and delivery platform built for market research and customer experience teams.",
      "In production, a React SPA talks to a Fastify API backed by Prisma and PostgreSQL—multi-tenant organizations, role-based access, and live respondent links on custom survey domains.",
      "A drag-and-drop builder pairs with logic engines for visibility, branching, termination, piping, and validation; surveys autosave with revision locking and deploy via Docker, nginx, and Caddy with HTTPS on live infrastructure.",
    ],

    technologiesSubtitle: "Technologies Used:",

    technologies: [
      {
        label: "Frontend",
        tools: "React 18, Vite 5, Tailwind CSS 3, @dnd-kit, Lucide React",
      },
      {
        label: "Backend",
        tools: "Fastify 5, Prisma 6, PostgreSQL 16, JWT (HttpOnly cookies), Docker, nginx",
      },
    ],

    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Vitomirov/ReScopeSurveys",
      },
      {
        label: "Live App",
        href: "https://rescopesurveys.com/",
      },
    ],
  },
};