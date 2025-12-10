import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { SkillsShowcase } from "./components/SkillsShowcase";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Testimonials } from "./components/Testimonials";
import { GithubPanel } from "./components/GithubPanel";
import { Contact } from "./components/Contact";
import { ScrollProgress } from "./components/ScrollProgress";
import { SEO } from "./components/SEO";

function App() {
  return (
    <div className="app-shell min-h-screen text-slate-50 dark">
      <SEO />
      <ScrollProgress />
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-4 lg:px-6">
        {/* HERO SECTION */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start pt-8 lg:pt-12">
          <Hero />
          <div className="h-[360px] lg:h-[500px]">
            <SkillsShowcase />
          </div>
        </section>

        {/* DIVIDER */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent lg:my-20 light:via-slate-200" />

        {/* FEATURED WORK */}
        <FeaturedProjects />

        {/* DIVIDER */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent lg:my-20 light:via-slate-200" />

        {/* SKILLS */}
        <Skills />

        {/* DIVIDER */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent lg:my-20 light:via-slate-200" />

        {/* EXPERIENCE */}
        <ExperienceTimeline />

        {/* DIVIDER */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent lg:my-20 light:via-slate-200" />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* DIVIDER */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent lg:my-20 light:via-slate-200" />

        {/* GITHUB */}
        <GithubPanel />

        {/* DIVIDER */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent lg:my-20 light:via-slate-200" />

        {/* CONTACT */}
        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950/50 backdrop-blur-xl light:border-slate-200/80 light:bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-4 py-8 lg:px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-400 light:text-slate-600">
              © {new Date().getFullYear()} Reynaldi Fikri Hidayat. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Raynald22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 transition-colors hover:text-teal-300 light:text-slate-600 light:hover:text-teal-600"
              >
                GitHub
              </a>
              <a
                href="mailto:reynaldifkr@gmail.com"
                className="text-sm text-slate-400 transition-colors hover:text-teal-300 light:text-slate-600 light:hover:text-teal-600"
              >
                Email
              </a>
              <a
                href="https://drive.google.com/file/d/1Pj7cAKru0_LUqQ8Gd7JD9knnCRn05w3y/view?usp=sharing"
                download
                className="text-sm text-slate-400 transition-colors hover:text-teal-300 light:text-slate-600 light:hover:text-teal-600"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
