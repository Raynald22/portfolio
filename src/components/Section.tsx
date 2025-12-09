import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  label: string;
  title?: string;
  children: ReactNode;
};

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>
      {title && (
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
