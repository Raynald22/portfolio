import { ThemeToggle } from "./ThemeToggle";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#github", label: "GitHub" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl light:border-slate-200/80 light:bg-slate-50/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-cyan-400 to-sky-500 text-sm font-bold text-slate-950 shadow-lg shadow-teal-500/25">
            RF
          </div>
          <div className="hidden leading-tight sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 light:text-slate-600">
              Reynaldi Fikri
            </p>
            <p className="text-[10px] text-slate-500 light:text-slate-500">
              Frontend Engineer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors hover:text-teal-300 light:text-slate-600 light:hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
          {/* <ThemeToggle /> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-slate-800/80 bg-slate-900/60 p-2 text-slate-400 transition-colors hover:text-slate-200 light:border-slate-200 light:bg-white/80 light:text-slate-600"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl md:hidden light:border-slate-200/80 light:bg-slate-50/95"
          >
            <nav className="mx-auto max-w-6xl space-y-1 px-4 py-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-900/60 hover:text-teal-300 light:text-slate-700 light:hover:bg-white/60 light:hover:text-teal-600"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                href="mailto:reynaldifkr@gmail.com"
                className="mt-3 block rounded-lg bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Email Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

