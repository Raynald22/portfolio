import { motion } from "framer-motion";
import { useSystemLoad } from "./useSystemLoad";

export function SystemLoadPlayground() {
  const { users, setUsers, rps, setRps, latency, status } = useSystemLoad();

  const statusColor = {
    healthy: "text-emerald-400",
    warning: "text-amber-400",
    critical: "text-rose-400",
  }[status];

  return (
    <div className="flex flex-col gap-5 p-4 text-xs">
      
      {/* Users */}
      <div>
        <label className="flex justify-between mb-1">
          <span>Active users</span>
          <span className="text-slate-400">{users}</span>
        </label>
        <input
          type="range"
          min={10}
          max={500}
          value={users}
          onChange={(e) => setUsers(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* RPS */}
      <div>
        <label className="flex justify-between mb-1">
          <span>Requests / second</span>
          <span className="text-slate-400">{rps}</span>
        </label>
        <input
          type="range"
          min={5}
          max={200}
          value={rps}
          onChange={(e) => setRps(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Latency */}
      <div className="mt-2">
        <p className="text-slate-400 mb-1">Latency</p>

        <div className="flex items-center gap-3">
          <motion.div
            animate={{ width: `${Math.min(latency / 3, 100)}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={`h-2 rounded-full bg-gradient-to-r ${
              status === "healthy"
                ? "from-emerald-400 to-teal-400"
                : status === "warning"
                ? "from-amber-400 to-yellow-400"
                : "from-rose-500 to-red-500"
            }`}
          />

          <span className={`w-12 text-right font-semibold ${statusColor}`}>
            {latency}ms
          </span>
        </div>
      </div>

      <p className="mt-3 text-[11px] text-slate-400">
        System status:{" "}
        <span className={`${statusColor} font-semibold`}>
          {status}
        </span>
      </p>
    </div>
  );
}
