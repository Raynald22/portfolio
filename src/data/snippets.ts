export type CodeSnippet = {
    id: string;
    label: string;
    description: string;
    language: "ts" | "tsx" | "js";
    repo?: string;
    code: string;
};

export const snippets: CodeSnippet[] = [
    {
        id: "document-guard",
        label: "Document Guard AI",
        description: "React + Tailwind layout untuk AI document viewer dengan chat di samping.",
        language: "tsx",
        repo: "https://github.com/Raynald22/ogya-ai", // ganti kalau beda
        code: `function DocumentPane() {
  const [selected, setSelected] = useState<Document | null>(null);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => documents.filter(doc => doc.title.toLowerCase().includes(query.toLowerCase())),
    [documents, query]
  );

  return (
    <div className="grid grid-cols-[minmax(260px,320px)_1fr] gap-4">
      <aside className="border-r border-slate-800 pr-4">
        <SearchInput value={query} onChange={setQuery} />
        <ul className="mt-3 space-y-1">
          {filtered.map(doc => (
            <button
              key={doc.id}
              onClick={() => setSelected(doc)}
              className={cn(
                "flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm",
                selected?.id === doc.id
                  ? "bg-slate-800 text-slate-50"
                  : "hover:bg-slate-900/60 text-slate-300"
              )}
            >
              <span className="truncate">{doc.title}</span>
              <span className="text-[11px] text-slate-500">{doc.pageCount}p</span>
            </button>
          ))}
        </ul>
      </aside>

      <main className="relative flex flex-col rounded-xl bg-slate-900/60 p-4">
        <Toolbar />
        {selected ? <PagePreview doc={selected} /> : <EmptyState />}
      </main>
    </div>
  );
}`,
    },
    {
        id: "arcadia",
        label: "Arcadia Learn",
        description:
            "Next.js module layout dengan XP bar & progress per world (frontend heavy, backend via Prisma).",
        language: "tsx",
        repo: "https://github.com/Raynald22/arcadia-learn", // ganti
        code: `export function ModuleProgress({ modules }: { modules: ModuleWithProgress[] }) {
  return (
    <section className="space-y-3">
      {modules.map((mod) => {
        const pct = Math.round((mod.completedLessons / mod.totalLessons) * 100);

        return (
          <article
            key={mod.id}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-teal-500/70"
          >
            <header className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-50">{mod.title}</h3>
                <p className="text-xs text-slate-400">{mod.completedLessons} / {mod.totalLessons} lessons</p>
              </div>
              <span className="text-xs tabular-nums text-teal-300">{pct}%</span>
            </header>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 transition-[width]"
                style={{ width: \`\${pct}%\` }}
              />
            </div>
          </article>
        );
      })}
    </section>
  );
}`,
    },

    {
        id: "system-load",
        label: "System Load",
        description: "Small interactive demo showing how frontend reacts to state changes.",
        language: "tsx",
        code: "// playground – rendered directly, not shown as code"
    }

];
