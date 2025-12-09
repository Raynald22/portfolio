/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          "Inter",
          "sans-serif",
        ],
      },
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          500: "#22d3ee",
          600: "#0891b2",
          900: "#0f172a",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.35)",
        softLight: "0 18px 45px rgba(148,163,184,0.35)",
      },
      backgroundImage: {
        "grid-dark":
          "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.18) 1px, transparent 0)",
        "grid-light":
          "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.25) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
