import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="about"
      className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)] items-start"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>Frontend engineer shipping real dashboards & tools</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50"
        >
          I build **interfaces for data-heavy products** – dashboards, internal
          tools, and document workflows.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="max-w-xl text-sm md:text-base leading-relaxed text-slate-300"
        >
          Recently I&apos;ve been working on finance & government systems:
          internal dashboards, document-centric apps, and UI for data pipelines.
          Strong focus on predictable state, readable code, and UX that doesn&apos;t
          fall apart on real users – not just pretty Dribbble shots.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap gap-2 pt-2"
        >
          {[
            "React · TypeScript · Vite",
            "Angular · RxJS",
            "Tailwind · ShadCN-like UI",
            "Framer Motion",
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-slate-900 border border-slate-700 px-3 py-1 text-xs text-slate-200"
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Snapshot card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 shadow-[0_0_0_1px_rgba(15,23,42,0.8)]"
      >
        <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-3">
          <span className="font-medium text-slate-200">Frontend snapshot</span>
          <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-300">
            Open to opportunities
          </span>
        </div>

        <ul className="space-y-2.5 text-xs text-slate-300">
          <li>• Strong in SPA architecture & component design.</li>
          <li>• Used to building admin panels, forms, and data-heavy UIs.</li>
          <li>• Comfortable owning features from Figma → production.</li>
          <li>• Enjoy improving DX: lint rules, reuse patterns, and small tools.</li>
        </ul>

        <a
          href="#github"
          className="mt-4 inline-flex items-center justify-between w-full rounded-xl bg-slate-950/80 px-3 py-2 text-xs text-slate-200 border border-slate-700 hover:border-emerald-400/70 hover:bg-slate-900 transition-colors"
        >
          <span>Scroll to see GitHub activity</span>
          <span className="text-[11px] text-slate-400">
            github.com/Raynald22
          </span>
        </a>
      </motion.div>
    </section>
  );
}
