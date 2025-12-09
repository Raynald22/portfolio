import { useEffect, useState } from "react";
import { Section } from "./Section";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  pushed_at: string;
};

const username = "Raynald22";

export function GithubShowcase() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        const data: Repo[] = await res.json();
        setRepos(
          data
            .filter((r) => !r.name.startsWith(".")) // agak bersih
            .slice(0, 6)
        );
      } catch (e) {
        // diem aja, bukan dashboard monitoring
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <Section
      id="github"
      label="GitHub"
      title="Recent activity from my GitHub"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl text-xs md:text-sm text-slate-300">
          Not all of my work is public, but this gives a decent snapshot of the
          kind of code I write and the projects I keep alive.
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-slate-200 hover:border-emerald-400/70 hover:text-emerald-200 transition-colors"
        >
          View full profile ↗
        </a>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {loading ? (
          <p className="text-xs text-slate-500">Loading repositories…</p>
        ) : (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-3 text-xs hover:border-emerald-400/60 hover:bg-slate-900 transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="font-medium text-slate-50 group-hover:text-emerald-200 transition-colors">
                  {repo.name}
                </h3>
                {repo.description && (
                  <p className="mt-1 text-[11px] text-slate-400 line-clamp-3">
                    {repo.description}
                  </p>
                )}
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span>{repo.language ?? "Unknown"}</span>
                <span>★ {repo.stargazers_count}</span>
              </div>
            </a>
          ))
        )}
      </div>
    </Section>
  );
}
