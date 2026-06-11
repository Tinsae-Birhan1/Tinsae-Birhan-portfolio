export type Skill = {
  name: string;
  icon?: string;
};

export const skillCategories = [
  "Languages",
  "Backend",
  "Database",
  "Frontend",
  "Storage & Infrastructure",
  "Tools",
  "Authentication & Security",
  "AI & Automation",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export const skillCatalog: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Python", icon: "python" },
    { name: "Java", icon: "openjdk" },
    { name: "C#", icon: "dotnet" },
    { name: "Go", icon: "go" },
    { name: "SQL", icon: "postgresql" },
    { name: "Bash", icon: "gnubash" },
  ],
  Backend: [
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Express.js", icon: "express" },
    { name: "NestJS", icon: "nestjs" },
    { name: "REST APIs", icon: "fastapi" },
    { name: "GraphQL", icon: "graphql" },
    { name: "Microservices", icon: "docker" },
    { name: "WebSockets", icon: "socketdotio" },
    { name: "Serverless Functions", icon: "awslambda" },
  ],
  Database: [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
    { name: "SQLite", icon: "sqlite" },
    { name: "DynamoDB", icon: "amazondynamodb" },
    { name: "Sequelize ORM", icon: "sequelize" },
    { name: "Prisma ORM", icon: "prisma" },
  ],
  Frontend: [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ],
  "Storage & Infrastructure": [
    { name: "AWS", icon: "amazonaws" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Linux", icon: "linux" },
    { name: "Nginx", icon: "nginx" },
    { name: "Cloud Storage (S3)", icon: "amazons3" },
    { name: "Redis", icon: "redis" },
  ],
  Tools: [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "GitLab", icon: "gitlab" },
    { name: "Postman", icon: "postman" },
    { name: "Swagger/OpenAPI", icon: "swagger" },
    { name: "Jira", icon: "jira" },
    { name: "Figma", icon: "figma" },
    { name: "VS Code", icon: "visualstudiocode" },
  ],
  "Authentication & Security": [
    { name: "OAuth 2.0", icon: "oauth" },
    { name: "OpenID Connect (OIDC)", icon: "openid" },
    { name: "JWT", icon: "jsonwebtokens" },
    { name: "Auth0", icon: "auth0" },
    { name: "Role-Based Access Control (RBAC)", icon: "auth0" },
    { name: "Multi-Factor Authentication (MFA)", icon: "auth0" },
    { name: "API Security", icon: "owasp" },
    { name: "OWASP Security Best Practices", icon: "owasp" },
    { name: "Encryption & Hashing (bcrypt)", icon: "letsencrypt" },
  ],
  "AI & Automation": [
    { name: "OpenAI API", icon: "openai" },
    { name: "LangChain", icon: "langchain" },
    { name: "AI Agents", icon: "openai" },
    { name: "Prompt Engineering", icon: "openai" },
    { name: "RAG (Retrieval-Augmented Generation)", icon: "huggingface" },
    { name: "Workflow Automation", icon: "n8n" },
    { name: "GitHub Actions", icon: "githubactions" },
    { name: "CI/CD Pipelines", icon: "gitlab" },
  ],
};

export const skillsByCategory = skillCatalog;

export const allSkillNames = [
  ...new Set(
    skillCategories.flatMap((category) =>
      skillCatalog[category].map((skill) => skill.name),
    ),
  ),
];

export const skills = skillCategories.flatMap((category) =>
  skillCatalog[category].map((skill) => ({
    name: skill.name,
    category,
  })),
);
