import { Section } from "../components/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Shipped interfaces for internal tools & document-heavy systems"
    >
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-50">
                Frontend Engineer · Internal Platforms
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                React / Angular · Finance / Government systems
              </p>
            </div>
            <p className="text-xs text-slate-500 whitespace-nowrap">
              2022 — Now
            </p>
          </div>

          <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
            <li>• Built dashboards & data-heavy forms for internal operations.</li>
            <li>• Implemented reusable UI primitives and layout components.</li>
            <li>• Worked with REST APIs, auth flows, and role-based views.</li>
          </ul>

          <div className="mt-3 flex flex-wrap gap-2">
            {["React", "Angular", "TypeScript", "Tailwind", "RxJS"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-950/70 border border-slate-700 px-2.5 py-0.5 text-[11px] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
