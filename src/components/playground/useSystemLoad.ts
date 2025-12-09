import { useState, useMemo } from "react";

export function useSystemLoad() {
    const [users, setUsers] = useState(120);
    const [rps, setRps] = useState(40);

    const latency = useMemo(() => {
        const base = 80;
        const u = users * 0.3;
        const r = rps * 0.8;
        return Math.round(base + u + r);
    }, [users, rps]);

    const status = useMemo(() => {
        if (latency < 150) return "healthy";
        if (latency < 250) return "warning";
        return "critical";
    }, [latency]);

    return {
        users, setUsers,
        rps, setRps,
        latency,
        status,
    };
}
