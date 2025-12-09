import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { snippets } from "../data/snippets";
import { SystemLoadPlayground } from "./playground/SystemLoadPlayground";

export function ConsoleTabs() {
  const [activeId, setActiveId] = useState(snippets[0]?.id);

  const active = snippets.find((s) => s.id === activeId)!;

  return (
    <section className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-soft backdrop-blur-xl light:border-slate-200/80 light:bg-slate-50/90 light:shadow-softLight">

      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-slate-800/80 px-4 py-3 text-xs text-slate-400 light:border-slate-200/80 light:text-slate-500">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 text-[11px] text-slate-400 light:text-slate-600">
            frontend/console.tsx
          </span>
        </div>

        {active.repo && (
          <a
            href={active.repo}
            target="_blank"
            className="rounded-full bg-slate-800/70 px-3 py-1 text-[11px] text-slate-300 hover:bg-slate-700/80 light:bg-slate-100 light:text-slate-700 light:hover:bg-slate-200"
          >
            Open repo ↗
          </a>
        )}
      </header>

      {/* TAB LIST */}
      <div className="flex border-b border-slate-800/80 px-2 pt-2 text-[11px] light:border-slate-200/80">
        {snippets.map((snippet) => {
          const isActive = snippet.id === activeId;

          return (
            <button
              key={snippet.id}
              onClick={() => setActiveId(snippet.id)}
              className={`relative mr-1.5 rounded-full px-3 py-1.5 text-xs transition-colors ${
                isActive
                  ? "text-teal-300"
                  : "text-slate-400 hover:text-slate-200 light:text-slate-600 light:hover:text-slate-900"
              }`}
            >
              {snippet.label}

              {isActive && (
                <motion.div
                  layoutId="tab-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-teal-500/10 ring-1 ring-teal-400/40 light:bg-teal-500/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col gap-2 px-4 pt-3 pb-2 text-xs text-slate-300 light:text-slate-700">
        <p className="text-[11px] text-slate-400 light:text-slate-500">
          {active.description}
        </p>
      </div>

      {/* CONTENT AREA */}
      <div className="relative flex-1 overflow-hidden border-t border-slate-800/80 bg-slate-950/90 text-[11px] leading-relaxed text-slate-200 light:border-slate-200/80 light:bg-slate-50 light:text-slate-800">
        <div className="absolute inset-0 overflow-auto p-4 font-mono">

          {/* 🔥 SPECIAL CASE: playground */}
          {active.id === "system-load" ? (
            <SystemLoadPlayground />
          ) : (
            <AnimatePresence mode="wait">
              <motion.pre
                key={active.id}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.18 }}
                className="whitespace-pre"
              >
                {active.code}
              </motion.pre>
            </AnimatePresence>
          )}

        </div>
      </div>

    </section>
  );
}
