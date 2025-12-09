import { Section } from "../components/Section";

const projects = [
  {
    name: "Document Guard AI",
    role: "Frontend lead",
    summary:
      "React + Tailwind app for searching, previewing, and chatting with internal documents.",
    impact:
      "Focused on predictable layout for long content, keyboard navigation, and subtle animations.",
    stack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    name: "Arcadia Learn",
    role: "Fullstack-ish",
    summary:
      "Learning platform with worlds, modules, and XP system. Built UI around progress & completion.",
    impact: "Designed the module layout, progress components, and state management.",
    stack: ["Next.js", "Prisma", "Postgres"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      label="Selected work"
      title="Interfaces I enjoyed thinking too much about"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5 hover:border-emerald-400/60 hover:bg-slate-900 transition-colors"
          >
            <h3 className="text-sm font-semibold text-slate-50">{p.name}</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">{p.role}</p>
            <p className="mt-3 text-xs text-slate-300">{p.summary}</p>
            <p className="mt-2 text-[11px] text-slate-400">{p.impact}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-950/70 border border-slate-700 px-2.5 py-0.5 text-[11px] text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
