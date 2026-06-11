export const siteConfig = {
  name: "Tinsae Birhan",
  title: "Software Engineer",
  headline: {
    lead: "I build",
    highlight: "software products",
    tail: "companies rely on every day.",
  },
  tagline:
    "Software Engineer with 4.5+ years building APIs, business platforms, and full stack apps for international companies and teams. From MVP to production.",
  availability: "Open to full time & contract roles",
  email: "tinsaebirhan02@gmail.com",
  phone: "+251947301844",
  location: "Addis Ababa, Ethiopia, Remote ready",
  resumePath: "/resume/Tinsae_Birhan_Resume.pdf",
  resumeFileName: "Tinsae_Birhan_Resume.pdf",
  bio: "Software Engineer with 4.5+ years building scalable business applications for international companies and teams. I've shipped payroll integrations, document processing pipelines, microservices, multi tenant SaaS platforms, and ERP driven workflows using Python, TypeScript, NestJS, Node.js, Django, and Frappe/ERPNext.",
  aboutContinued:
    "I've worked across payroll, HR, logistics, e commerce, and SaaS. I'm always focused on clean architecture, reliable delivery, and systems that non-technical teams can actually use.",
  aboutHighlights: [
    "International remote experience across multiple countries",
    "Production ready delivery",
    "Backend, APIs & full stack",
    "Competitive programmer & problem solver",
    "4.5+ years shipping software",
    "BSc Computer Science",
  ],
  social: {
    github: "https://github.com/Tinsae-Birhan1",
    linkedin: "https://www.linkedin.com/in/tinsae-birhan-gebiyaw-615429230/",
  },
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "4.5+", label: "Years of experience" },
  { value: "6", label: "Companies served" },
  { value: "15+", label: "Products shipped" },
  { value: "1", label: "Hackathon award" },
];

export const companies = [
  "Paismo",
  "Prophecius Technologies",
  "Oneco",
  "EthioDamic",
  "Across Express",
  "RDX Delta Rabbit",
];

export const valueProps = [
  {
    title: "Ships production ready systems",
    description:
      "Built and maintained live products for international companies: payroll and payment platforms, e commerce and booking systems, inventory and logistics tools, training and education portals, vendor management, and data dashboards that real teams use every day.",
    icon: "rocket",
  },
  {
    title: "Scales systems as you grow",
    description:
      "Moved products from monolith to multi tenant architecture and microservices so teams can ship faster without breaking what already works.",
    icon: "layers",
  },
  {
    title: "Ships complete features with the team by owning features end to end",
    description:
      "Backend APIs, integrations, and frontend delivery alongside designers and engineers, from planning and implementation through testing and release.",
    icon: "cpu",
  },
  {
    title: "Remote team proven",
    description:
      "Delivered for distributed teams across the US, Mexico, UK, Germany, Spain, Pakistan, India, and Ethiopia. Clear async communication, code reviews, and reliable delivery on deadlines.",
    icon: "globe",
  },
  {
    title: "Builds for real business needs",
    description:
      "Focuses on practical solutions over hype: clear requirements, sensible tradeoffs, and software that helps teams work better and ship with confidence.",
    icon: "wallet",
  },
  {
    title: "Quality you can rely on",
    description:
      "Testing, security minded development, and thoughtful code reviews so what ships stays stable, maintainable, and ready for the next feature.",
    icon: "shield",
  },
];

export { skills } from "./skills";

export const projects = [
  {
    title: "Paismo Payroll Platform",
    company: "Paismo, US",
    description:
      "Five production microservices (payroll API, disbursement, LMS, subscription manager, and payroll calculator Lambda) powering a multi tenant HR/payroll SaaS.",
    impact: "End to end payroll runs, Easypaisa salary transfers, Stripe billing, and employee training in live US production.",
    tags: ["NestJS", "Express", "AWS Lambda", "RabbitMQ", "Stripe"],
    github: "https://github.com/Tinsae-Birhan1",
    live: null,
  },
  {
    title: "Reserve Xp, Multi tenant SaaS",
    company: "Prophecius Technologies",
    description:
      "Led development of a multi tenancy booking platform with tenant isolation and scalable scheduling.",
    impact: "Architected from MVP to production ready SaaS serving multiple business clients.",
    tags: ["React", "Node.js", "Multi-tenancy"],
    github: "https://github.com/Tinsae-Birhan1",
    live: null,
  },
  {
    title: "Freight Logistics Portal",
    company: "Across Express",
    description:
      "Real time freight tracking and shipment management platform built on ERPNext and React.",
    impact: "End to end logistics workflows with live tracking for operations teams.",
    tags: ["ERPNext", "Frappe", "React"],
    github: "https://github.com/Tinsae-Birhan1",
    live: null,
  },
  {
    title: "Inventory & Vendor Systems",
    company: "EthioDamic",
    description:
      "Inventory management and vendor tracking systems with automated reporting and stock workflows.",
    impact: "Centralized records with real time tracking across business units.",
    tags: ["Frappe", "ERPNext", "Python"],
    github: "https://github.com/Tinsae-Birhan1",
    live: null,
  },
];

export const experience = [
  {
    role: "Software Engineer II",
    company: "Paismo",
    location: "Los Angeles, US, Remote",
    period: "Mar 2024 to May 2026",
    highlights: [
      "Contributed and maintained paismo payroll api, core HR/payroll REST platform with 70+ Sequelize modules covering payroll runs, timesheets, four tier work schedules, leave accrual, performance reviews, salary appraisals, loans, assets, expense reimbursements, and employee offboarding.",
      "Architected async job processing with AWS SQS and Lambda (payroll calculation, payslip PDF generation, HR letters, report exports) plus WebSocket push notifications so the UI receives real time job completion updates.",
      "Instrumented production services with OpenTelemetry (OTLP traces, Prometheus) and wrapped 15+ cron jobs for payroll reminders, leave accrual, absent tracking, appraisal salary updates, and review cycle expiry in traced spans.",
      "Delivered Auth0 JWT auth with CASL role based access, LaunchDarkly feature flags, OneSignal push for leave approvals, and Mailchimp transactional email for payslips, company goals, review process, HR digests, and letter delivery.",
      "Shipped advanced payroll reporting with configurable formula driven concepts, variance/cumulative Excel exports (ExcelJS), async leave balance exports to S3, and Google Calendar powered holiday auto provisioning, backed by 50+ integration tests and 166+ migrations.",
      "Engineered payroll calculator (AWS Lambda) with dynamic JavaScript formula execution per concept, employee/department/employer scoping, mid cycle salary adjustments, cumulative balances, and historical appraisal resolution for past period recalculation.",
      "Developed disbursement api (NestJS) integrating Easypaisa IBFT for on demand and bulk salary transfers with RSA encrypted payloads, banking verification, RabbitMQ async workers, per employer mutex locks, and nightly cron retry for failed transactions.",
      "Built lms api, employee training microservice with video/document/link content, FFmpeg and Sharp media processing, S3 presigned delivery, department assignments, granular progress tracking, storage quotas, and completion analytics.",
      "Implemented subscription manager with Stripe checkout webhooks, 14 day trials, seat based billing synced to active employee counts every 4 hours, expired trial account locking, Auth0 user provisioning, and full subscription audit history.",
    ],
  },
  {
    role: "Software Engineer II",
    company: "Oneco",
    location: "Florida, US, Remote, Part time",
    period: "Sep 2023 to Apr 2024",
    highlights: [
      "Built and maintained Django backend services with Stripe integration for production ready payments in a remote environment.",
      "Supported Docker adoption and standardized backend workflows to improve deployment consistency across the team.",
      "Initially developed as a monolithic system, played a key role transforming it into a multi tenant architecture where accounting, payroll, HR, insurance, and review management services communicate through Kafka.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Prophecius Technologies",
    location: "India, Remote",
    period: "Jul 2023 to Feb 2024",
    highlights: [
      "Led Reserve Xp, multi tenant SaaS booking platform (React, Next.js, Node.js) for travel, hotels, rentals, and events, with AI trip planner API integration.",
      "Implemented APIs, designed the UI, and enhanced the overall booking experience across multi database, multi domain architecture.",
      "Built Mozivol Ecommerce, full stack car oil e commerce platform with React and Node.js, focused on responsive design and smooth user interactions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "EthioDamic",
    location: "Addis Ababa, Ethiopia",
    period: "Jan 2021 to Dec 2023",
    highlights: [
      "Developed Rcash Gebiya, web and mobile inventory management system for a shoe sales company using React, Flutter, Django, and JavaScript.",
      "Built vendor management system with centralized records and real time tracking across business units.",
      "Delivered cross platform apps through full SDLC, unit testing, and agile workflows with a focus on security and efficiency.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "RDX Delta Rabbit",
    location: "Addis Ababa, Ethiopia",
    period: "Dec 2021 to May 2023",
    highlights: [
      "Built No Stock, e commerce platform connecting merchants, customers, and delivery services using React, Next.js, and Node.js.",
      "Developed Education Portal with React, intuitive interfaces integrated with backend services for a polished learning experience.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Across Express",
    location: "Addis Ababa, Ethiopia",
    period: "May 2020 to Nov 2021",
    highlights: [
      "Contributed to Across Express Portal, digital freight logistics platform with real time tracking, bidding, and quoting built on ERPNext, Frappe, and React.",
      "Built ECX portal data visualizations with interactive charts for daily Ethiopia Commodity Exchange data and bid form trends using React, Next.js, and Django.",
      "Optimized load times and improved user engagement through code reviews and performance focused UI components.",
    ],
  },
];

export const education = [
  {
    type: "degree" as const,
    title: "Bachelor of Computer Science",
    school: "Addis Ababa University",
    period: "2019 to 2023",
  },
  {
    type: "program" as const,
    title: "Competitive Programmer, Software Engineering",
    school: "Africa To Silicon Valley (A2SV)",
    period: "2022 to 2024",
  },
];

export const competitiveProgramming = {
  title: "Competitive Programmer",
  description:
    "Solved 500+ algorithmic problems across online judges and coding contests, often ranking highly against peers worldwide. That practice shapes how I write production code: lean algorithms, careful edge cases, and a drive to keep improving until the solution is both correct and efficient.",
};

export const certificates = [
  {
    title: "iCOG Makers Hackathon, Gagarian Project",
    description:
      "2nd Place. Led front end on a local food e commerce site (React + Django) with responsive design and close backend collaboration.",
  },
];
