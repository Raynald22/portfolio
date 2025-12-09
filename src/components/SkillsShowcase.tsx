import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ShowcaseTab = {
  id: string;
  label: string;
  icon: string;
  component: React.ReactNode;
};

// Live Coding Animation Component
function LiveCodingDemo() {
  const [currentLine, setCurrentLine] = useState(0);

  const codeLines = [
    "// Building scalable enterprise applications",
    "const projects = await fetchProjects();",
    "",
    "projects.filter(p => p.status === 'production')",
    "  .map(project => ({",
    "    name: project.title,",
    "    users: project.activeUsers,",
    "    performance: calculateMetrics(project)",
    "  }))",
    "  .forEach(renderDashboard);",
    "",
    "// Result: 15+ production apps serving 5K+ users daily ✨",
  ];

  useState(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (codeLines.length + 5));
    }, 400);
    return () => clearInterval(interval);
  });

  return (
    <div className="space-y-2 font-mono text-xs">
      {codeLines.map((line, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -10 }}
          animate={{
            opacity: idx <= currentLine ? 1 : 0.3,
            x: 0,
          }}
          transition={{ duration: 0.2 }}
          className={`${
            idx <= currentLine
              ? "text-slate-200 light:text-slate-800"
              : "text-slate-600 light:text-slate-400"
          }`}
        >
          {line.startsWith("//") ? (
            <span className="text-emerald-400 light:text-emerald-600">{line}</span>
          ) : line.includes("const") || line.includes("await") ? (
            <>
              <span className="text-purple-400 light:text-purple-600">
                {line.match(/const|await/)?.[0]}
              </span>
              {line.replace(/const|await/, "")}
            </>
          ) : (
            line
          )}
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block h-4 w-2 bg-teal-400 light:bg-teal-600"
      />
    </div>
  );
}

// Tech Stack Radar
function TechStackRadar() {
  const skills = [
    { name: "React/Angular", level: 95, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 95, color: "from-cyan-400 to-cyan-600" },
    { name: "State Mgmt", level: 90, color: "from-teal-400 to-teal-600" },
    { name: "Performance", level: 90, color: "from-emerald-400 to-emerald-600" },
    { name: "Testing", level: 85, color: "from-green-400 to-green-600" },
    { name: "UI/UX", level: 95, color: "from-purple-400 to-purple-600" },
  ];

  return (
    <div className="space-y-4">
      {skills.map((skill, idx) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-200 light:text-slate-800">
              {skill.name}
            </span>
            <span className="text-slate-400 light:text-slate-600">{skill.level}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800/60 light:bg-slate-300">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ delay: idx * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
              className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Achievements Grid
function AchievementsGrid() {
  const achievements = [
    {
      icon: "🏆",
      title: "Production Excellence",
      desc: "15+ apps in production",
      color: "from-yellow-400 to-amber-600",
    },
    {
      icon: "⚡",
      title: "High Performance",
      desc: "99.9% system uptime",
      color: "from-cyan-400 to-blue-600",
    },
    {
      icon: "👥",
      title: "User Impact",
      desc: "5,000+ daily active users",
      color: "from-teal-400 to-emerald-600",
    },
    {
      icon: "🚀",
      title: "Fast Delivery",
      desc: "On-time project delivery",
      color: "from-purple-400 to-pink-600",
    },
    {
      icon: "💼",
      title: "Enterprise Scale",
      desc: "Banking & Government",
      color: "from-indigo-400 to-violet-600",
    },
    {
      icon: "🎯",
      title: "Best Practices",
      desc: "Clean code & architecture",
      color: "from-rose-400 to-red-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {achievements.map((achievement, idx) => (
        <motion.div
          key={achievement.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 backdrop-blur-sm transition-all hover:border-teal-500/30 light:border-slate-300 light:bg-white/70 light:hover:border-teal-500/50"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 transition-opacity group-hover:opacity-10`}
          />
          <div className="relative space-y-2">
            <div className="text-3xl">{achievement.icon}</div>
            <div>
              <p className="text-xs font-semibold text-slate-200 light:text-slate-900">
                {achievement.title}
              </p>
              <p className="text-[10px] text-slate-400 light:text-slate-600">
                {achievement.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Certifications
function CertificationsShowcase() {
  const certs = [
    {
      name: "Frontend Mastery",
      issuer: "4+ Years Production Experience",
      year: "2021-Present",
      badge: "⚛️",
    },
    {
      name: "Enterprise Architecture",
      issuer: "Banking & Government Systems",
      year: "2022-Present",
      badge: "🏛️",
    },
    {
      name: "TypeScript Expert",
      issuer: "Type-Safe Applications",
      year: "2021-Present",
      badge: "📘",
    },
  ];

  return (
    <div className="space-y-3">
      {certs.map((cert, idx) => (
        <motion.div
          key={cert.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15, duration: 0.5 }}
          className="group flex items-start gap-4 rounded-xl border border-slate-800/60 bg-slate-900/40 p-4 backdrop-blur-sm transition-all hover:border-teal-500/30 light:border-slate-300 light:bg-white/70 light:hover:border-teal-500/50"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-2xl">
            {cert.badge}
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold text-slate-200 light:text-slate-900">
              {cert.name}
            </h4>
            <p className="text-xs text-slate-400 light:text-slate-600">{cert.issuer}</p>
            <p className="text-[10px] text-slate-500 light:text-slate-500">{cert.year}</p>
          </div>
          <div className="opacity-0 transition-opacity group-hover:opacity-100">
            <svg
              className="h-5 w-5 text-teal-400 light:text-teal-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function SkillsShowcase() {
  const tabs: ShowcaseTab[] = [
    {
      id: "live-code",
      label: "Live Code",
      icon: "💻",
      component: <LiveCodingDemo />,
    },
    {
      id: "tech-stack",
      label: "Tech Stack",
      icon: "📊",
      component: <TechStackRadar />,
    },
    {
      id: "achievements",
      label: "Achievements",
      icon: "🏆",
      component: <AchievementsGrid />,
    },
    {
      id: "experience",
      label: "Experience",
      icon: "⭐",
      component: <CertificationsShowcase />,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-2xl backdrop-blur-xl light:border-slate-300/80 light:bg-white/80 light:shadow-xl">
      {/* Header with Window Chrome */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-4 py-3 light:border-slate-300 light:bg-slate-100">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-2 text-xs text-slate-400 light:text-slate-600">
            skills-showcase.tsx
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500 light:text-slate-600">
          <span>•</span>
          <span>Interactive Demo</span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 border-b border-slate-800/60 bg-slate-950/40 px-3 py-2 light:border-slate-300 light:bg-slate-100/60">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
              activeTab === tab.id
                ? "text-teal-300 light:text-teal-700"
                : "text-slate-400 hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
            }`}
          >
            <span className="text-sm">{tab.icon}</span>
            <span>{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab-bg"
                className="absolute inset-0 -z-10 rounded-lg bg-teal-500/10 ring-1 ring-teal-400/30 light:bg-teal-500/15 light:ring-teal-600/40"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden bg-slate-950/90 light:bg-white/95">
        <div className="h-full overflow-auto p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentTab.component}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800/60 bg-slate-950/40 px-4 py-2 text-[10px] text-slate-500 light:border-slate-300 light:bg-slate-100/60 light:text-slate-700">
        <div className="flex items-center justify-between">
          <span>Powered by React + TypeScript + Framer Motion</span>
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              Ready to hire
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
