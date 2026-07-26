import CountUp from "./CountUp";
import Reveal from "./Reveal";

export interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function StatsBar({
  stats,
  columns = 5,
}: {
  stats: Stat[];
  columns?: 2 | 3 | 5;
}) {
  return (
    <section className="border-y border-white/5 bg-panel">
      <div
        className={`mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-10 px-5 py-14 ${
          columns === 5 ? "md:grid-cols-5" : columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={`text-center ${
              columns === 5 && i === stats.length - 1
                ? "col-span-2 md:col-span-1"
                : ""
            }`}
          >
            <CountUp
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              className="block text-4xl font-bold tracking-tight text-white sm:text-5xl"
            />
            <span className="mt-3 block text-sm text-body">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
