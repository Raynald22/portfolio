export type SkillCategory = {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 0-100
    experience: string;
  }[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend Frameworks",
    icon: "⚛️",
    skills: [
      { name: "React.js", level: 85, experience: "1 years" },
      { name: "Next.js", level: 80, experience: "1 years" },
      { name: "Angular", level: 95, experience: "4+ years" },
      { name: "TypeScript", level: 95, experience: "4+ years" },
      { name: "JavaScript (ES6+)", level: 95, experience: "5+ years" },
    ],
  },
  {
    title: "Styling & UI",
    icon: "🎨",
    skills: [
      { name: "Tailwind CSS", level: 90, experience: "3+ years" },
      { name: "CSS/SCSS", level: 95, experience: "5+ years" },
      { name: "Framer Motion", level: 80, experience: "2+ years" },
      { name: "PrimeNG/PrimeReact", level: 85, experience: "3+ years" },
      { name: "Responsive Design", level: 95, experience: "5+ years" },
    ],
  },
  {
    title: "State Management",
    icon: "🔄",
    skills: [
      { name: "Redux Toolkit", level: 85, experience: "3+ years" },
      { name: "Zustand", level: 80, experience: "2+ years" },
      { name: "React Query", level: 80, experience: "2+ years" },
      { name: "Context API", level: 90, experience: "4+ years" },
      { name: "RxJS", level: 85, experience: "3+ years" },
    ],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 75, experience: "1 years" },
      { name: "Express.js", level: 70, experience: "Learning" },
      { name: "PostgreSQL", level: 70, experience: "1 years" },
      { name: "MySQL", level: 85, experience: "3+ years" },
      { name: "Prisma ORM", level: 65, experience: "Learning" },
      { name: "Java", level: 80, experience: "3+ years" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub", level: 95, experience: "5+ years" },
      { name: "Vite/Webpack", level: 85, experience: "3+ years" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "🤝",
    skills: [
      { name: "Team Collaboration", level: 95, experience: "4+ years" },
      { name: "Code Review", level: 90, experience: "4+ years" },
      { name: "Problem Solving", level: 95, experience: "5+ years" },
      { name: "Technical Documentation", level: 85, experience: "4+ years" },
      { name: "Agile/Scrum", level: 90, experience: "4+ years" },
    ],
  },
];
