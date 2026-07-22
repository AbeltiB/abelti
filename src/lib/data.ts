export const profile = {
  name: "Abelti Beshana Belay",
  initials: "AB",
  role: "Senior Software Engineer",
  tagline: [
    "Senior Software Engineer",
    ".NET & TypeScript / Next.js",
    "Distributed Systems Builder",
    "Constraint Solver Enthusiast",
  ],
  summary:
    "Senior software engineer with 6+ years building and operating production systems across transport, fintech, payments, and education technology. Deep in ASP.NET Core (C#) and TypeScript/Next.js, with end-to-end ownership from database design and API architecture through deployment and production support. Currently maintain and extend platforms serving 17,000+ passengers per day.",
  location: "Addis Ababa, Ethiopia (UTC+3)",
  availability: "Open to remote opportunities",
  email: "abeltibbeshana@gmail.com",
  phone: "+251 986 990 019",
  github: "https://github.com/ObsidianBeing",
  linkedin: "https://linkedin.com/in/abeltibeshana",
  site: "https://abeltib.vercel.app",
  resumeUrl: "/Abelti_Beshana_Belay_Resume.pdf",
} as const;

export const stats = [
  { value: "6+", label: "Years in production engineering" },
  { value: "17K+", label: "Daily passengers served" },
  { value: "10K+", label: "Trip records automated" },
  { value: "47", label: "Employees on HR/payroll systems built" },
] as const;

export type Experience = {
  role: string;
  org: string;
  context?: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    org: "BS Technologies PLC",
    context: "Intercity transport technology operator",
    period: "Mar 2025 — Present",
    location: "Remote — Addis Ababa, Ethiopia",
    bullets: [
      "Own backend and full-stack development for a web and mobile transport platform managing drivers, vehicles, routes, and fares for 17,000+ passengers per day across a national terminal network.",
      "Architected and shipped an internal scheduling and operations platform (Next.js 15 + .NET APIs + PostgreSQL) covering ticketing, biometric attendance, employee management, station oversight, and route administration.",
      "Designed a constraint-based driver and vehicle scheduling engine using Google OR-Tools CP-SAT, cutting schedule preparation from a multi-day manual process to under an hour.",
      "Led migration of legacy services to the current .NET framework, improving API response times and system stability under peak booking load.",
      "Built an HR and payroll web system (Next.js, Prisma, PostgreSQL, ABAC, phone OTP auth) covering ~47 employees across branch locations, replacing an error-prone Excel registry.",
      "Automated ingestion of regulator trip-reporting data via a Python pipeline, collecting 10,000+ trip records and generating per-terminal reconciliation reports.",
    ],
  },
  {
    role: "Instructor, Software Engineering & Computer Science",
    org: "HiLCoE School of Computer Science and Technology",
    context: "Part-time",
    period: "Jun 2024 — Present",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Teach undergraduate and graduate software engineering and computer science courses, developing lecture materials, lab exercises, and project-based assessments.",
      "Contribute to curriculum development, aligning course content with current industry practice in web architecture, databases, and software design.",
      "Mentor students through full software development lifecycles, from requirements analysis to deployment.",
    ],
  },
  {
    role: "Operations Manager & Lead Instructor",
    org: "Malefia Training Institute",
    context: "Early-stage training startup",
    period: "Feb 2024 — Mar 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Designed and delivered a full-stack web development curriculum covering MERN, mobile development, Python, Java, and .NET/C#.",
      "Built and customized the institute's WordPress-based Learning Management System, improving course delivery and student engagement.",
      "Directed daily operations, staffing, and workflow design as the organization expanded into corporate training services.",
    ],
  },
  {
    role: "Instructor & Developer — Full-Stack Web Development",
    org: "Ethio Bytes IT and Digital Solutions",
    period: "Jan 2023 — Sep 2023",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Delivered a MERN-stack full-stack curriculum with hands-on projects and fully documented source code.",
      "Contributed to the center's Learning Management System using HTML, CSS, JavaScript, and PHP.",
    ],
  },
  {
    role: "Chief Operating Officer",
    org: "Prestige Software Solution Technologies PLC",
    context: "Software startup, under 12 employees — hands-on engineering role",
    period: "Nov 2020 — Dec 2022",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Built and deployed in-house and client systems, including a Point-of-Sale platform and a disability support platform — personally responsible for architecture, backend APIs, and database design.",
      "Prototyped a sign-language-to-Amharic translation system combining computer vision and NLP techniques.",
      "Ran delivery for concurrent client projects: scoping, staffing, progress tracking, and quality assurance.",
    ],
  },
  {
    role: "Chief Technology Officer → IT Project Manager",
    org: "My Car Trading PLC",
    context: "Early-stage automotive startup, under 10 employees — concurrent engagement",
    period: "Feb 2021 — Nov 2022",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Led the full product lifecycle of a web and mobile roadside-assistance platform (ASP.NET Core, MSSQL, Blazor, Clean Architecture) from concept through deployment.",
      "Architected the system end to end — database design, backend APIs, and frontend/mobile implementation.",
      "Analyzed the legacy platform, identified performance bottlenecks, and rebuilt on a modern, scalable stack.",
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Habexa — Investment Education & Paper-Trading",
    description:
      "A fintech platform for the Ethiopian Securities Exchange delivering paper trading and investment education to retail and diaspora investors, including market data modeling, portfolio simulation, and multi-repository system architecture.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    featured: true,
  },
  {
    name: "University Timetable Scheduling System",
    description:
      "A production scheduling system that solves multi-constraint academic timetabling via a dedicated CP-SAT solver microservice, with automated clash detection across student cohorts, rooms, and instructors.",
    tags: ["Next.js", "Prisma", "TypeScript", "FastAPI", "OR-Tools CP-SAT"],
    featured: true,
  },
  {
    name: "M-Pesa Mobile Wallet Payment Gateway",
    description:
      "A secure payment gateway integrating M-Pesa mobile wallet transactions with internal systems: transaction initiation, callback handling, OTP verification, and real-time status reconciliation with idempotent retry handling for failed callbacks.",
    tags: ["ASP.NET Core", "C#", "PostgreSQL", "JWT"],
    featured: true,
  },
  {
    name: "Driving License Training Center Platform",
    description:
      "A microservices-based management system handling student enrollment, lesson scheduling, payments, and exam tracking, with service isolation and gateway routing for modular expansion.",
    tags: [".NET Microservices", "MSSQL", "Docker", "Ocelot"],
  },
  {
    name: "Church Management System",
    description:
      "A church administration platform for a US-based congregation covering member management, event scheduling, contribution tracking, and attendance logging.",
    tags: ["Next.js 15", "MongoDB", "REST APIs"],
  },
  {
    name: "Event Registration & Delivery (Run to Hold 5K)",
    description:
      "A hybrid mobile and web solution for event registration, merchandise ordering, and delivery management with real-time status updates.",
    tags: ["React Native", "Next.js", "MongoDB"],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: [
      "ASP.NET Core",
      ".NET 8/9/10",
      "Node.js",
      "Express.js",
      "Hono.js",
      "NestJS",
      "FastAPI",
      "Next.js API Routes",
      "Microservices",
      "REST",
      "GraphQL",
    ],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js 14/15/16", "React Native", "Blazor / WebAssembly", "Tailwind CSS", "Redux", "Three.js"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "Microsoft SQL Server", "MySQL", "MongoDB", "Neo4j", "Redis", "Prisma ORM", "Entity Framework Core"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "Git", "GitHub Actions", "CI/CD", "Vercel", "Supabase", "Linux Administration", "Nginx"],
  },
  {
    category: "AI & Optimization",
    items: ["OpenAI", "Anthropic", "Hugging Face", "Google OR-Tools CP-SAT", "RAG", "Data Pipelines", "Model Fine-Tuning"],
  },
  {
    category: "Payments & Integrations",
    items: ["M-Pesa", "Stripe", "Telebirr", "SantimPay", "Webhooks", "OTP Verification", "JWT", "OAuth"],
  },
  {
    category: "Architecture & Practice",
    items: ["Clean Architecture", "Domain-Driven Design", "RBAC/ABAC", "Multi-tenancy", "Agile/Scrum", "OpenAPI/Swagger"],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science",
  school: "HiLCoE School of Computer Science and Technology",
  period: "Sep 2016 — Sep 2021",
  location: "Addis Ababa, Ethiopia",
};

export const certifications = [
  "Excellency Training — Dereja Academy, Addis Ababa (2021): software development, project management, analytical thinking, and professional communication.",
];

export const languages = [
  { name: "Amharic", level: "Native" },
  { name: "English", level: "Full professional proficiency" },
] as const;
