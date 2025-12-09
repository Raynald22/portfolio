import type { ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-6 md:py-10">
        <header className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
              Reynaldi Fikri
            </span>
            <span className="text-sm text-slate-400">
              Frontend Engineer · React / Angular / TypeScript
            </span>
          </div>

          <nav className="hidden gap-6 text-sm text-slate-400 md:flex">
            <a href="#about" className="hover:text-slate-100 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-slate-100 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-slate-100 transition-colors">
              Projects
            </a>
            <a href="#github" className="hover:text-slate-100 transition-colors">
              GitHub
            </a>
          </nav>
        </header>

        <main className="space-y-16 md:space-y-24 pt-8">{children}</main>
      </div>
    </div>
  );
}
