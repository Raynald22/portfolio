import { motion } from "framer-motion";
import { projectsData } from "../data/projects";
import { useState } from "react";

export function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(projectsData[0].id);
  const featuredProjects = projectsData.filter((p) => p.featured);
  const currentProject = featuredProjects.find((p) => p.id === selectedProject) || featuredProjects[0];

  const categoryColors = {
    Enterprise: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    Banking: "bg-blue-500/10 text-blue-300 border-blue-500/30",
    Government: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    Personal: "bg-amber-500/10 text-amber-300 border-amber-500/30",
  };

  return (
    <section id="work" className="py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        {/* Section Header */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl light:text-slate-900">
            Featured Work
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 light:text-slate-600">
            Selected projects showcasing my expertise in building scalable, production-grade
            applications for enterprise and government sectors.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {featuredProjects.map((project, index) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project.id)}
              className={`rounded-lg border px-4 py-2 text-xs font-medium transition-all ${
                selectedProject === project.id
                  ? "border-teal-500/50 bg-teal-500/10 text-teal-300"
                  : "border-slate-800/80 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-300 light:border-slate-200 light:bg-white/60 light:text-slate-600"
              }`}
            >
              {project.title}
            </motion.button>
          ))}
        </div>

        {/* Project Details */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Left Column - Details */}
          <div className="space-y-6">
            {/* Title & Category */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-slate-50 light:text-slate-900">
                  {currentProject.title}
                </h3>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                    categoryColors[currentProject.category]
                  }`}
                >
                  {currentProject.category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400 light:text-slate-600">
                <span className="font-medium">{currentProject.company}</span>
                <span>•</span>
                <span>{currentProject.year}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-300 light:text-slate-700">
              {currentProject.description}
            </p>

            {/* Problem & Solution */}
            <div className="space-y-4">
              <div className="space-y-2 rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 backdrop-blur-sm light:border-slate-200 light:bg-white/50">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-red-400 light:text-red-600">
                  <span>🔴</span> Challenge
                </h4>
                <p className="text-sm leading-relaxed text-slate-300 light:text-slate-700">
                  {currentProject.problem}
                </p>
              </div>

              <div className="space-y-2 rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 backdrop-blur-sm light:border-slate-200 light:bg-white/50">
                <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-emerald-400 light:text-emerald-600">
                  <span>✅</span> Solution
                </h4>
                <p className="text-sm leading-relaxed text-slate-300 light:text-slate-700">
                  {currentProject.solution}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 light:text-slate-600">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200 light:border-slate-200 light:bg-white/80 light:text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(currentProject.github || currentProject.link) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {currentProject.github && (
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs text-slate-200 transition-all hover:border-teal-400/60 hover:text-teal-200 light:border-slate-200 light:bg-white/80 light:text-slate-800"
                  >
                    View on GitHub
                    <span className="text-[13px]">↗</span>
                  </a>
                )}
                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-4 py-2 text-xs font-medium text-white shadow-soft transition-all hover:brightness-110"
                  >
                    Live Demo
                    <span className="text-[13px]">↗</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Impact Metrics */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 light:text-slate-600">
                Impact & Results
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {currentProject.impact.map((item, index) => (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="group rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-slate-900/60 light:border-slate-200 light:bg-white/60"
                  >
                    <p className="mb-2 text-2xl font-bold text-teal-400 transition-all group-hover:text-teal-300 light:text-teal-600">
                      {item.value}
                    </p>
                    <p className="text-[11px] font-medium text-slate-400 light:text-slate-600">
                      {item.metric}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Placeholder - You can add screenshots here */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-8 backdrop-blur-sm light:border-slate-200 light:bg-white/60">
              <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 light:from-slate-100 light:to-slate-200">
                <div className="text-center">
                  <div className="mb-3 text-4xl">💼</div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    Project Showcase
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500 light:text-slate-500">
                    {currentProject.category} Application
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Highlights */}
            <div className="space-y-3 rounded-xl border border-slate-800/60 bg-slate-900/30 p-5 backdrop-blur-sm light:border-slate-200 light:bg-white/50">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 light:text-slate-600">
                Key Achievements
              </h4>
              <ul className="space-y-2 text-sm text-slate-300 light:text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-teal-400">✓</span>
                  <span>Delivered on time with zero critical bugs in production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-teal-400">✓</span>
                  <span>Implemented comprehensive testing (95%+ coverage)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-teal-400">✓</span>
                  <span>Optimized performance for thousands of concurrent users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-teal-400">✓</span>
                  <span>Maintained detailed documentation for future development</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
