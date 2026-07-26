import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { sponsors, CONTACT_EMAIL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sponsors — LUMA",
  description:
    "The organizations backing LUMA's free student competitions and fellowship — and how to become one of them.",
};

const valueProps = [
  {
    title: "Reach real builders",
    body: "Direct access to 1,500+ motivated student builders and entrepreneurs who ship working products, not just ideas.",
  },
  {
    title: "Visibility everywhere",
    body: "Brand presence across competitions, the website, Devpost pages, and all LUMA communications.",
  },
  {
    title: "Real opportunity, not a gimmick",
    body: "Your support keeps every program 100% free for students — a concrete, verifiable impact on who gets access.",
  },
];

export default function SponsorsPage() {
  return (
    <>
      {/* ---------- Current sponsors ---------- */}
      <section className="relative overflow-hidden border-b border-white/5 pt-16">
        <div aria-hidden className="hero-bg" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
          <Reveal>
            <span className="eyebrow">Sponsors</span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
              Backed by leading organizations
            </h1>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {sponsors.map((sponsor, i) => {
              const initials = sponsor.name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);

              return (
                <Reveal key={sponsor.name} delay={i * 0.05}>
                  <div className="card flex flex-col items-center justify-center gap-3 p-6 text-center min-h-24 hover:scale-105 transition-transform duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent font-bold text-sm">
                      {initials}
                    </div>
                    <span className="text-xs font-semibold text-white/90 leading-tight">
                      {sponsor.name}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Why sponsor ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why sponsor LUMA
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="card h-full p-8">
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-body">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Interested in sponsoring LUMA?
          </h2>
          <p className="mt-4 text-lg text-body">
            Reach out and let&rsquo;s talk.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Sponsoring%20LUMA`}
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            Email Us
          </a>
        </Reveal>
      </section>
    </>
  );
}
