import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-20">
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
            Skills & Expertise
          </h2>
          <p className="max-w-2xl text-sm text-slate-400 light:text-slate-600">
            A comprehensive overview of my technical skills and proficiency levels, built through
            years of hands-on experience in production environments.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 backdrop-blur-sm transition-all hover:border-teal-500/30 hover:bg-slate-900/60 light:border-slate-200 light:bg-white/60 light:hover:border-teal-500/30"
            >
              {/* Category Header */}
              <div className="mb-5 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-slate-50 light:text-slate-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200 light:text-slate-800">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-slate-500 light:text-slate-600">
                        {skill.experience}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/60 light:bg-slate-200">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500"
                        style={{
                          boxShadow: "0 0 8px rgba(20, 184, 166, 0.5)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              label: "Languages",
              value: "TypeScript, JavaScript",
              icon: "💻",
            },
            {
              label: "Focus Areas",
              value: "Enterprise Apps, Banking Systems",
              icon: "🎯",
            },
            {
              label: "Methodologies",
              value: "Agile, Scrum, TDD",
              icon: "📋",
            },
            {
              label: "Currently Learning",
              value: "Web3, Rust, GraphQL",
              icon: "📚",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 backdrop-blur-sm light:border-slate-200 light:bg-white/50"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <p className="text-[10px] font-medium uppercase tracking-wide text-slate-500 light:text-slate-600">
                  {item.label}
                </p>
              </div>
              <p className="text-sm font-medium text-slate-200 light:text-slate-800">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
