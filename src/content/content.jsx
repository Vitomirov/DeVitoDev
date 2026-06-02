export const portfolioContent = {
    about: {
    title: "About Me",

    subtitleLeft: "My Skills",

    quoteLeft: [
      "These are the tools and technologies I use regularly.",
      "I'm confident working across the full stack, and always open to learning more."
    ],

    subtitleRight: "Get to know me!",

    quoteRight: [
      "I am a Full-Stack Web Developer skilled in building and maintaining modern web applications.", " ",
      "I work across the full development cycle to create efficient, user-friendly solutions aligned with business needs.", " ",
      "I’m always learning and improving to keep up with new technologies.", " ",
      {
        type: "linkText",
        textBefore: "Feel free to explore my work or ",
        linkText: "contact",
        href: "#contact",
        textAfter: " me regarding new opportunities."
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
      { label: "Express.js" },
      { label: "JWT" },
      { label: "MySQL" },
      { label: "PostgreSQL" },
      { label: "Git" },
      { label: "Docker" },
      { label: "DigitalOcean" },
      { label: "CI/CD" }
    ]
  },
  myJourney: {
    title: "My Journey",

    p1: [
      "As an archaeologist, I’ve spent years uncovering hidden patterns and organizing complex data—skills I now bring to crafting efficient, user-friendly web applications.",
      "Later, while working in market research and mortgage loan processing, I often ran into outdated systems that needed smarter solutions.",
      "Instead of accepting them, I looked for ways to improve, which eventually led me to fully commit to web development."
    ],

    quoteLeft: [
      "It may seem that archaeology and web development are worlds apart, but both require analyzing complex information and solving problems—skills I now apply to building impactful, user-focused applications."
    ],

    quoteRight: [
      "I love turning ideas into tangible products. Seeing a simple idea grow into a fully functional application motivates me every day."
    ],

    p2: [
      "I started coding out of curiosity, experimenting with ideas in the console just to see them work.",
      "Soon, I realized I wanted more.",
      "I wanted to build fully interactive projects that people could actually use.",
      "This curiosity pushed me to dive into full-stack development, learning both frontend and backend to transform ideas into real-world applications."
    ]
  },
  myWorks: {
    title: "My Works",
    subtitle:
      "Those are some of the projects I've worked on. Feel free to explore them!",

    githubLink: {
      textBefore: "In the meantime, feel free to explore my code on ",
      linkText: "GitHub",
      href: "https://github.com/Vitomirov",
      textAfter: ".",
    },
    projects: [
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
      "Warranty Wallet App is a full-stack web application built for easy and organized warranty tracking.", " ",
      "It helps users keep receipts safe and avoid missed warranty expirations by storing everything digitally.", " ",
      "Key features include secure user authentication, adding new warranties with image uploads, and browsing or deleting saved warranty entries from a personalized dashboard."
    ],

    technologiesSubtitle: "Technologies Used:",

    technologies: [
      { label: "Frontend", tools: "React, Bootstrap, React Router DOM, Axios" },
      { label: "Backend", tools: "Node.js, Express, MySQL, JWT" }
    ]
  },
shopifyAnalyzer: {
  title: "Shopify AI Analyzer",

  description: [
    "Shopify AI Analyzer is a specialized tool designed to audit e-commerce storefronts using automated web scraping and AI analysis.", " ",
    "The app validates Shopify-specific signatures and extracts structured data from HTML, stylesheets, and theme metadata to identify optimization gaps.", " ",
    "It delivers actionable, AI-generated insights across key performance areas: Conversion Rate (CRO), SEO, User Experience (UX), and Trust signals, helping merchants improve their store's professional impact."
  ],

  technologiesSubtitle: "Technologies Used:",

  technologies: [
    { label: "Frontend", tools: "Next.js 16 (App Router), Tailwind CSS 4, React 19" },
    { label: "Backend", tools: "Node.js, Cheerio (Web Scraping), Zod (Validation)" }
  ]
},
};