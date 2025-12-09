import { motion } from "framer-motion";

type RepoCard = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  stars?: number;
  language?: string;
};

const repos: RepoCard[] = [
  {
    name: "document-intel-platform",
    description: "AI-powered document analysis and search platform with intelligent categorization.",
    tech: ["React", "Tailwind", "Node.js", "OpenAI"],
    link: "https://github.com/Raynald22",
    language: "TypeScript",
    stars: 24,
  },
  {
    name: "arcadia-learn",
    description: "Modern e-learning platform with gamification, progress tracking, and assessments.",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    link: "https://github.com/Raynald22",
    language: "TypeScript",
    stars: 18,
  },
  {
    name: "react-native-pokedex",
    description: "Pokemon explorer with animations, infinite scroll, and detailed stats view.",
    tech: ["React Native", "TypeScript", "REST API"],
    link: "https://github.com/Raynald22",
    language: "JavaScript",
    stars: 12,
  },
];

export function GithubPanel() {
  return (
    <section id="github" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Section Header */}
        <div className="flex items-end justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl light:text-slate-900">
              Open Source Projects
            </h2>
            <p className="max-w-2xl text-sm text-slate-400 light:text-slate-600">
              Personal projects and experiments showcasing different technologies and approaches.
            </p>
          </div>
          <a
            href="https://github.com/Raynald22"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm text-teal-300 transition-colors hover:text-teal-200 sm:block light:text-teal-700 light:hover:text-teal-600"
          >
            View all repositories ↗
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, index) => (
            <motion.a
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              href={repo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:border-teal-500/50 hover:bg-slate-900/60 light:border-slate-200 light:bg-white/60 light:hover:border-teal-500/50"
            >
              {/* Header */}
              <div className="mb-3 flex items-start justify-between">
                <div className="rounded-lg bg-teal-500/10 p-2 text-teal-400 transition-all group-hover:bg-teal-500/20">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <span className="text-xs text-slate-500 light:text-slate-600">
                  {repo.language}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-slate-50 transition-colors group-hover:text-teal-300 light:text-slate-900 light:group-hover:text-teal-600">
                {repo.name}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-grow text-sm leading-relaxed text-slate-400 light:text-slate-600">
                {repo.description}
              </p>

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-1.5">
                {repo.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-0.5 text-[10px] text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 border-t border-slate-800/50 pt-3 text-xs text-slate-500 light:border-slate-200 light:text-slate-600">
                {repo.stars && (
                  <div className="flex items-center gap-1">
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{repo.stars}</span>
                  </div>
                )}
                <span className="flex items-center gap-1 text-teal-400 transition-colors group-hover:text-teal-300">
                  View repository
                  <svg
                    className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {[
            { label: "Public Repos", value: "15+", icon: "📦" },
            { label: "Contributions", value: "500+", icon: "💻" },
            { label: "Total Stars", value: "50+", icon: "⭐" },
            { label: "Years Active", value: "4+", icon: "📅" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 text-center backdrop-blur-sm light:border-slate-200 light:bg-white/50"
            >
              <div className="mb-2 text-2xl">{stat.icon}</div>
              <p className="text-2xl font-bold text-teal-400 light:text-teal-600">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-500 light:text-slate-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Link */}
        <div className="text-center sm:hidden">
          <a
            href="https://github.com/Raynald22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-teal-300 transition-colors hover:text-teal-200 light:text-teal-700 light:hover:text-teal-600"
          >
            View all repositories
            <span className="text-[13px]">↗</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
