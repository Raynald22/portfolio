import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-slate-700 bg-slate-900/60 px-1 text-xs text-slate-300 shadow-soft hover:border-teal-400/70 hover:text-teal-300 light:border-slate-300 light:bg-white/70 light:text-slate-700 light:shadow-softLight"
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 320, damping: 25 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-[11px] text-slate-900"
      >
        {isDark ? "☾" : "☀"}
      </motion.div>
      <span className="pointer-events-none ml-1 w-6 text-[10px] tracking-wide">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
