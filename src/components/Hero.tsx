import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect";

export function Hero() {
  const { text: typingText } = useTypingEffect(
    [
      "enterprise web applications",
      "high-performance dashboards",
      "scalable banking systems",
      "government platforms",
    ],
    80,
    40,
    2500
  );

  return (
    <section className="relative overflow-hidden pt-10 pb-10 lg:py-20">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gradient-to-br from-teal-500/20 via-cyan-500/20 to-sky-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -left-20 top-60 h-80 w-80 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-rose-500/20 blur-3xl"
        />
      </div>

      <div className="relative space-y-8 lg:space-y-12">
        {/* Top Section - Profile & Intro */}
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-8">
          {/* Profile Avatar with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 opacity-50 blur-2xl" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-sky-500 p-1 shadow-2xl shadow-teal-500/50 lg:h-32 lg:w-32">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 light:bg-white">
                <span className="text-4xl font-bold text-transparent bg-gradient-to-br from-teal-400 via-cyan-400 to-sky-500 bg-clip-text lg:text-5xl">
                  RF
                </span>
              </div>
            </div>

            {/* Floating Status Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -right-2 bottom-0 lg:-right-4"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-emerald-500 light:border-white">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-3 w-3 rounded-full bg-white"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Intro Text */}
          <div className="flex-1 space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300 backdrop-blur-sm light:border-emerald-600/50 light:bg-emerald-500/15 light:text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 light:bg-emerald-600"></span>
                </span>
                Available for hire
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-1"
            >
              <h1 className="text-3xl font-bold text-slate-50 lg:text-4xl light:text-slate-900">
                Reynaldi Fikri Hidayat
              </h1>
              <p className="text-lg text-slate-400 lg:text-xl light:text-slate-600">
                Senior Frontend Engineer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 text-sm text-slate-400 light:text-slate-600"
            >
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                4+ Years Experience
              </div>
              <span className="text-slate-700 light:text-slate-400">•</span>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Jakarta, Indonesia
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl light:text-slate-900">
            Building{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent">
                {typingText}
              </span>
              <motion.span
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  times: [0, 0.1, 0.9, 1],
                }}
                className="absolute bottom-2 left-0 right-0 h-3 origin-left bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-sky-500/20"
              />
              <span className="ml-1 inline-block h-[1em] w-1 animate-pulse bg-gradient-to-b from-teal-400 to-cyan-400" />
            </span>
            <br />
            <span className="text-slate-300 light:text-slate-700">
              that power critical business operations
            </span>
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-400 light:text-slate-600">
            Trusted by{" "}
            <span className="font-semibold text-teal-300 light:text-teal-600">
              Ministry of Finance
            </span>{" "}
            and{" "}
            <span className="font-semibold text-cyan-300 light:text-cyan-600">
              Permata Bank
            </span>{" "}
            to deliver mission-critical frontends serving{" "}
            <span className="font-semibold text-sky-300 light:text-sky-600">
              thousands of users daily
            </span>
            . Specializing in React, Angular, and TypeScript ecosystems.
          </p>
        </motion.div>

        {/* Tech Stack with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 light:text-slate-600">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "React", icon: "⚛️" },
              { name: "Angular", icon: "🅰️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Next.js", icon: "▲" },
              { name: "Tailwind", icon: "💨" },
              { name: "Node.js", icon: "🟢" },
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/60 px-4 py-3 backdrop-blur-sm transition-all hover:border-teal-500/50 hover:bg-slate-900/80 light:border-slate-300 light:bg-white/90 light:hover:border-teal-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-cyan-500/5 to-sky-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-2">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="text-sm font-medium text-slate-200 light:text-slate-800">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-teal-500/25 transition-all hover:shadow-teal-500/50 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's work together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>

          <a
            href="https://github.com/Raynald22"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border-2 border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-base font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-teal-400/60 hover:bg-slate-800/80 hover:text-teal-200 light:border-slate-300 light:bg-white/90 light:text-slate-800 light:hover:border-teal-500 light:hover:bg-slate-50"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Profile
            <span className="text-sm transition-transform group-hover:translate-x-1">↗</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1Pj7cAKru0_LUqQ8Gd7JD9knnCRn05w3y/view?usp=sharing"
            target="_blank"
            download
            className="group flex items-center gap-2 rounded-full border-2 border-slate-700/80 bg-slate-900/60 px-6 py-3.5 text-base font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-teal-400/60 hover:bg-slate-800/80 hover:text-teal-200 light:border-slate-300 light:bg-white/90 light:text-slate-800 light:hover:border-teal-500 light:hover:bg-slate-50"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {[
            { value: "4+", label: "Years Experience", icon: "📅", color: "from-teal-400 to-teal-600" },
            { value: "15+", label: "Projects Delivered", icon: "🚀", color: "from-cyan-400 to-cyan-600" },
            { value: "5K+", label: "Daily Active Users", icon: "👥", color: "from-sky-400 to-sky-600" },
            { value: "99.9%", label: "System Uptime", icon: "⚡", color: "from-purple-400 to-purple-600" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 backdrop-blur-sm transition-all hover:border-teal-500/30 light:border-slate-300 light:bg-white/90 light:hover:border-teal-500/40"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity group-hover:opacity-10`} />
              <div className="relative space-y-2">
                <div className="text-2xl">{stat.icon}</div>
                <div className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-wide text-slate-400 light:text-slate-600">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
