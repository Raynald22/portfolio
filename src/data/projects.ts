export type Project = {
  id: string;
  title: string;
  company: string;
  description: string;
  problem: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
  }[];
  technologies: string[];
  category: "Enterprise" | "Banking" | "Government" | "Personal";
  featured: boolean;
  link?: string;
  github?: string;
  image?: string;
  year: string;
};

export const projectsData: Project[] = [
  {
    id: "sakti-mof",
    title: "SAKTI - Ministry of Finance Platform",
    company: "Ogya Tekno Nusantara",
    description:
      "Government financial management system serving thousands of users across Indonesian ministries for budget planning, execution, and reporting.",
    problem:
      "Ministry of Finance needed a scalable, secure platform to manage government budgets across multiple departments with complex approval workflows and real-time reporting requirements.",
    solution:
      "Built a modular Angular-based dashboard with role-based access control, real-time data synchronization, and document management. Implemented complex form validations and multi-step approval workflows.",
    impact: [
      { metric: "Active Users", value: "5,000+" },
      { metric: "Daily Transactions", value: "10,000+" },
      { metric: "Page Load Time", value: "<2s" },
      { metric: "System Uptime", value: "99.9%" },
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "PrimeNG",
      "Java Spring Boot",
      "Oracle",
      "RESTful API",
    ],
    category: "Government",
    featured: true,
    year: "2021-Present",
  },
  {
    id: "permata-bank",
    title: "Permata Bank",
    company: "Ogya Tekno Nusantara",
    description:
      "Enterprise banking dashboard for internal operations, transaction monitoring, and customer management with real-time analytics.",
    problem:
      "Bank needed a centralized platform to monitor transactions, manage customer data, and generate reports while ensuring security and compliance with banking regulations.",
    solution:
      "Developed a Angular-based dashboard with advanced filtering, real-time notifications, and data visualization. Implemented secure authentication and audit logging for compliance.",
    impact: [
      { metric: "Processing Speed", value: "+40%" },
      { metric: "User Efficiency", value: "+35%" },
      { metric: "Error Reduction", value: "-60%" },
      { metric: "Data Accuracy", value: "99.95%" },
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Java",
      "MySQL Server",
    ],
    category: "Banking",
    featured: true,
    year: "2022-Present",
  },
  {
    id: "document-intel",
    title: "Document Intelligence Platform",
    company: "Personal Project",
    description:
      "AI-powered document analysis tool with intelligent search, categorization, and insights extraction for enterprise document management.",
    problem:
      "Organizations struggle to extract insights from large volumes of unstructured documents, leading to inefficient knowledge management and decision-making delays.",
    solution:
      "Created a full-stack application with AI-powered document parsing, semantic search, and automatic categorization. Built with React, Node.js, and integrated OpenAI APIs for intelligent analysis.",
    impact: [
      { metric: "Search Speed", value: "<500ms" },
      { metric: "Accuracy Rate", value: "94%" },
      { metric: "Documents Processed", value: "50,000+" },
      { metric: "Time Saved", value: "70%" },
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "OpenAI API",
      "Pinecone",
      "PostgreSQL",
    ],
    category: "Personal",
    featured: true,
    github: "https://github.com/Raynald22",
    year: "2025",
  },
  {
    id: "arcadia-learn",
    title: "Arcadia Learn - E-Learning Platform",
    company: "Personal Project",
    description:
      "Modern learning management system with progress tracking, interactive assessments, and personalized learning paths.",
    problem:
      "Traditional LMS platforms lack engaging UX and real-time progress analytics, resulting in low student engagement and completion rates.",
    solution:
      "Built a full-stack e-learning platform with Next.js featuring module-based learning, quiz system, progress analytics, and user authentication. Optimized for performance and mobile responsiveness.",
    impact: [
      { metric: "Student Engagement", value: "+80%" },
      { metric: "Completion Rate", value: "75%" },
      { metric: "Loading Speed", value: "<1.5s" },
      { metric: "Mobile Users", value: "60%" },
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
      "Vercel",
    ],
    category: "Personal",
    featured: true,
    github: "https://github.com/Raynald22",
    year: "2025",
  },
  {
    id: "roblox-dashboard",
    title: "Roblox Analytics Dashboard",
    company: "Personal Project",
    description:
      "Real-time analytics dashboard for Roblox game developers to track player metrics, revenue, and engagement statistics.",
    problem:
      "Game developers needed a centralized view of their game analytics with real-time updates and historical trend analysis.",
    solution:
      "Developed a React dashboard with Zustand state management, real-time data updates, and interactive charts. Integrated with Roblox APIs for live data synchronization.",
    impact: [
      { metric: "Real-time Updates", value: "<3s latency" },
      { metric: "Data Points Tracked", value: "50+" },
      { metric: "Active Developers", value: "200+" },
      { metric: "Uptime", value: "99.8%" },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "Recharts",
      "Tailwind CSS",
      "Roblox API",
      "Firebase",
    ],
    category: "Personal",
    featured: false,
    github: "https://github.com/Raynald22",
    year: "2023",
  },
];
