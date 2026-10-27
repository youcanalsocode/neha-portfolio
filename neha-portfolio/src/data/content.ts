// Single source of truth. Edit the values here; components read from this file.
export const profile = {
  name: "Neha Nadlal Gupta",
  role: "Full Stack Software Engineer",
  email: "nehagupta1210@gmail.com",
  phone: "+91 8369108352",
  linkedin: "https://www.linkedin.com/in/neha-n-gupta",
  github: "https://github.com/youcanalsocode",
  resume: "/resume/Neha_Nadlal_Gupta_Resume.pdf",
  photo: "/images/neha.jpg",
  availability: "Serving Notice Period · Open to Relocation to Dubai, UAE",
};

export const nav = ["Home", "About", "Skills", "Experience", "Projects", "Services", "Education", "Contact"];

export const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "12", label: "Applications Modernized" },
  { value: "15+", label: "Applications with Security Enhancements" },
  { value: "300+", label: "AI Agents Monitored on a Governance Platform" },
];

export const bring = [
  "End-to-end full-stack development", "Enterprise application modernization", "Secure API and authentication design",
  "Performance optimization", "AI-assisted development workflows", "Cross-functional collaboration and technical ownership",
];

export const skills: { title: string; items: string[]; key?: string[] }[] = [
  { title: "Frontend Engineering", items: ["React.js", "Angular 15–21", "JavaScript ES6+", "TypeScript", "HTML5 and CSS3", "Bootstrap", "Tailwind CSS", "PrimeNG"], key: ["React.js", "Angular 15–21", "TypeScript"] },
  { title: "Backend and API Development", items: ["Node.js", "Express.js", "Python", "FastAPI", "Java", "Spring Boot", "RESTful API Development", "API Integration"], key: ["Node.js", "RESTful API Development"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "IBM DB2", "SQL Query Optimization"], key: ["SQL Query Optimization"] },
  { title: "Cloud, DevOps, and Tools", items: ["AWS", "Azure DevOps", "CI/CD", "Git", "GitHub", "Docker (where supported by project experience)"] },
  { title: "AI-Assisted Development", items: ["ChatGPT", "Claude", "Cursor", "Gemini", "Google Antigravity", "Databricks Genie"] },
  { title: "Professional Strengths", items: ["Accountability", "Communication", "Troubleshooting", "Performance Optimization", "Mentoring", "Collaboration"] },
];

export const experience = [
  { company: "Exponentia.Ai", title: "Full Stack Developer", dates: "July 2024 – Present", status: "Serving Notice Period",
    bullets: [
      "Built full-stack capabilities for an AI governance platform monitoring **300+ AI agents**: compliance tracking, risk assessment, financial monitoring and interactive dashboards.",
      "Engineered **5 scalable full-stack applications** for AI agent analytics, financial KPIs, sales and operational reporting.",
      "Integrated **Databricks Genie** for conversational analytics and built data transformation workflows for interactive visualizations.",
      "Modernized **12 enterprise applications** via Angular upgrades from 15 to 19, then 21, resolving dependency issues and supporting zero-downtime deployments.",
      "Implemented security controls across **15+ applications**: JWT authentication, RBAC, secure REST API authorization, password hashing, input sanitization, CORS and route protection.",
      "Collaborated with UX/UI designers, mentored junior developers, and used AI-assisted tools for prototyping, debugging, refactoring, documentation and testing.",
    ],
    stack: ["React.js", "Angular", "Node.js", "Express.js", "MongoDB", "SQL", "Python", "Databricks", "JavaScript", "TypeScript", "REST APIs", "JWT"] },
  { company: "Tata Consultancy Services (TCS)", title: "System Engineer", dates: "July 2021 – April 2024", status: "",
    bullets: [
      "Developed full-stack features for an enterprise **HRMS application**, including employee leave management and HR operations workflows.",
      "Contributed to performance optimization across **20+ enterprise applications** using lazy loading, code splitting, API optimization, SQL tuning, indexing and profiling.",
      "Contributed to a reported **23% increase in user engagement** and **50% reduction in bounce rate** through performance and UX improvements.",
      "Built and integrated REST APIs and third-party services, enabling dynamic dashboard updates and cutting manual refresh effort by **90%**.",
      "Optimized Oracle and DB2 queries, joins, stored procedures, views and backend scripts.",
    ],
    stack: ["React.js", "Angular", "Node.js", "Express.js", "FastAPI", "Java", "Spring Boot", "JavaScript", "TypeScript", "MongoDB", "PostgreSQL", "Oracle", "DB2"] },
];

export type Project = { id: string; title: string; kind: "agents" | "kpi" | "timeline" | "shield" | "hr"; overview: string; caps: string[]; tech: string[];
  problem: string; approach: string; architecture: string; decisions: string; outcomes: string };

export const projects: Project[] = [
  { id: "gentrust", title: "AI Governance Platform: GenTrust", kind: "agents",
    overview: "An enterprise platform to monitor and govern AI agents across multiple ecosystems.",
    caps: ["Monitoring 300+ AI agents", "Compliance tracking", "Risk profiling and assessment", "Budget and financial monitoring", "Interactive analytics dashboards", "Governance-focused reporting"],
    tech: ["Angular", "React", "Node.js", "MongoDB", "SQL", "REST APIs"],
    problem: "Organizations running many AI agents lacked a single place to see inventory, risk, compliance status and spend.",
    approach: "Built dashboards and services that consolidate agent data into governance views for compliance, risk and budget.",
    architecture: "Angular/React front ends over Node.js REST services, backed by MongoDB and SQL stores.",
    decisions: "Modular endpoints per governance domain so dashboards can evolve independently.",
    outcomes: "Platform monitors 300+ AI agents. Details kept general to respect employer confidentiality." },
  { id: "analytics", title: "AI-Powered Analytics and Business Dashboards", kind: "kpi",
    overview: "Five scalable applications delivering insight into AI agents, financial KPIs, sales and operations.",
    caps: ["Dynamic dashboard visualizations", "Modular backend endpoints", "Data transformation", "Conversational analytics with Databricks Genie", "Operational alerts and monitoring"],
    tech: ["React.js", "Node.js", "Python", "JavaScript", "HTML", "CSS", "Databricks Genie"],
    problem: "Business teams needed self-serve answers from data without waiting on custom reports.",
    approach: "Delivered five dashboard applications and integrated conversational analytics for natural-language questions.",
    architecture: "React front ends, Node.js and Python services, Databricks as the analytics source.",
    decisions: "Transformation logic lives in the backend so charts stay thin and reusable.",
    outcomes: "Five applications delivered across AI, finance, sales and operations reporting." },
  { id: "modernization", title: "Enterprise Application Modernization", kind: "timeline",
    overview: "Upgrade of 12 enterprise Angular applications from version 15 to 19, then 21.",
    caps: ["Framework version upgrades", "Dependency and compatibility resolution", "Performance optimization", "Maintainability improvements", "Zero-downtime deployment support"],
    tech: ["Angular 15–21", "TypeScript", "Node.js", "Development tooling"],
    problem: "Aging framework versions raised maintenance cost and blocked newer tooling.",
    approach: "Stepwise upgrades, resolving breaking changes and dependency conflicts per application.",
    architecture: "Existing application architecture preserved; upgrade path staged to keep releases safe.",
    decisions: "Incremental version hops rather than a single large jump, to isolate regressions.",
    outcomes: "12 applications modernized with zero-downtime deployment support." },
  { id: "security", title: "Enterprise Application Security Framework", kind: "shield",
    overview: "Security enhancements implemented across 15+ full-stack applications.",
    caps: ["JWT authentication", "Role-based access control", "Secure API authorization", "Password hashing", "Input sanitization", "CORS configuration", "Route protection"],
    tech: ["Node.js", "Express.js", "React.js", "Angular", "MongoDB", "JWT", "REST APIs"],
    problem: "Applications needed consistent authentication, authorization and input protection.",
    approach: "Applied a repeatable set of security controls on both API and UI layers.",
    architecture: "Token-based auth on Express APIs, role checks in middleware, guarded routes in React and Angular.",
    decisions: "Enforce authorization on the server and mirror it in the UI for usability only.",
    outcomes: "Controls implemented across 15+ applications." },
  { id: "hrms", title: "Enterprise HRMS Application", kind: "hr",
    overview: "A full-stack HR application supporting employee leave management and HR workflows.",
    caps: ["Employee-facing interfaces", "Leave management workflows", "REST API integration", "Dynamic application updates", "Backend business logic", "Enterprise workflow support"],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs"],
    problem: "HR operations and leave requests needed a reliable, self-service workflow.",
    approach: "Built employee interfaces and backend logic for requests, approvals and records.",
    architecture: "React UI over Express REST APIs with relational and document data stores.",
    decisions: "API-driven updates replaced manual refreshes.",
    outcomes: "Reduced manual refresh effort by 90% through dynamic updates (TCS)." },
];

export const services = [
  { t: "Full Stack Web Application Development", d: "End-to-end development of scalable applications, from frontend interfaces to backend services and database integration." },
  { t: "Frontend Development", d: "Responsive, accessible, maintainable web interfaces using React.js, Angular, TypeScript and modern CSS frameworks." },
  { t: "Backend Development and REST API Integration", d: "Backend services, API design, integration workflows and maintainable architecture using Node.js, Express.js, FastAPI and Java." },
  { t: "AI-Powered Dashboards and Analytics", d: "Business dashboards, conversational analytics integrations, interactive visualizations and monitoring applications." },
  { t: "Application Modernization and Performance Optimization", d: "Framework upgrades, dependency remediation, frontend and backend optimization and database performance improvements." },
  { t: "Application Security and Database Optimization", d: "Authentication, authorization, RBAC, secure REST APIs, SQL tuning, indexing and enterprise data access improvements." },
];
