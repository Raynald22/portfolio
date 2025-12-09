export type ExperienceItem = {
    company: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
    stack: string[];
};

export const experience: ExperienceItem[] = [
    {
        company: "Ogya Tekno Nusantara",
        role: "Frontend Engineer",
        period: "Apr 2021 – Present",
        location: "Jakarta, Indonesia",
        bullets: [
            "Frontend untuk SAKTI (Ministry of Finance) & Permata Bank, fokus ke flows yang kompleks & akurat.",
            "Bangun dan maintain UI modular untuk dashboards, forms, dan internal tools.",
            "Refactor UI untuk konsistensi, performance, dan maintainability di tim besar.",
        ],
        stack: ["Angular", "TypeScript", "Primeng", "ReactJS", "Java", "SpringBoot", "MySQL", "Git"],
    },
    {
        company: "PT Murti Sejahtera Lestari",
        role: "Backend Engineer (Rails)",
        period: "Feb 2020 – Jul 2020",
        location: "Jakarta, Indonesia",
        bullets: [
            "Build REST & GraphQL API dengan Ruby on Rails.",
            "Handle CRUD, validasi, dan dokumentasi struktur data backend.",
        ],
        stack: ["Ruby on Rails", "PostgreSQL"],
    },
];
