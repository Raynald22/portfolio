import { experience } from "../data/experience";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="mt-16 lg:mt-20 space-y-6">
      <header className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase light:text-slate-500">
          Experience
        </h2>
        <span className="text-xs text-slate-500 light:text-slate-600">
          Regulated environments · High-stakes UI
        </span>
      </header>

      <ol className="relative border-l border-slate-800/80 pl-5 space-y-8 light:border-slate-200/80">
        {experience.map((item, idx) => (
          <li key={item.company} className="relative pl-1">
            <span className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full border-2 border-slate-950 bg-teal-400 shadow-soft light:border-white" />

            <motion.article
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.25 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-soft light:border-slate-200/80 light:bg-white/90 light:shadow-softLight"
            >
              <header className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-50 light:text-slate-900">
                    {item.role}
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 light:text-slate-600">
                  {item.period}
                </span>
              </header>

              <ul className="mt-3 space-y-1.5 text-xs text-slate-300 light:text-slate-700">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1 w-1 rounded-full bg-teal-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-300 light:border-slate-200 light:bg-slate-50 light:text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          </li>
        ))}
      </ol>
    </section>
  );
}
