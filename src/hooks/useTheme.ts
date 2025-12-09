import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("dark");

    useEffect(() => {
        const stored = window.localStorage.getItem("rf-theme") as Theme | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        const initial: Theme = stored ?? (prefersDark ? "dark" : "light");
        setTheme(initial);
        document.documentElement.classList.toggle("dark", initial === "dark");
        document.body.classList.toggle("light", initial === "light");
    }, []);

    const toggleTheme = () => {
        setTheme((prev) => {
            const next: Theme = prev === "dark" ? "light" : "dark";
            document.documentElement.classList.toggle("dark", next === "dark");
            document.body.classList.toggle("light", next === "light");
            window.localStorage.setItem("rf-theme", next);
            return next;
        });
    };

    return { theme, toggleTheme };
}
