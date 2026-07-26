import { sponsors } from "@/lib/data";

// Auto-scrolling sponsor strip
export default function SponsorMarquee() {
  const tripled = [...sponsors, ...sponsors, ...sponsors];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track gap-14">
        {tripled.map((sponsor, i) => (
          <span
            key={`${sponsor.name}-${i}`}
            className="whitespace-nowrap text-xl font-semibold tracking-tight text-white/35"
          >
            {sponsor.name}
          </span>
        ))}
      </div>
    </div>
  );
}
