import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import MockWindow from "@/components/MockWindow";
import TypedLines from "@/components/TypedLines";
import FloatBadge from "@/components/FloatBadge";
import {
  competitions,
  judgingCriteria,
  LATEST_COMPETITION_URL,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Competitions — LUMA",
  description:
    "LUMA's global virtual pitch competitions. Free for every student, judged by real entrepreneurs and engineers.",
};

const steps = [
  {
    title: "Register",
    body: "Sign up on Devpost and join the LUMA Discord — that's where announcements, mentorship, and logistics happen.",
  },
  {
    title: "Build",
    body: "Execute a real project: an app, website, or software tool that solves a real problem. Submit a 5-minute video walkthrough covering the problem, the build, a demo, and how it scales.",
  },
  {
    title: "Submit a Video",
    body: "Create a 5-minute video demo that showcases your product, the problem it solves, and why it matters. That's your submission.",
  },
];

export default function CompetitionsPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-white/5 pt-16">
        <div aria-hidden className="hero-bg" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">Competitions</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Real projects. Real judges. Open to every student.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-body">
              Teams build working software, pitch it on video, and defend it
              live — for free, from anywhere in the world.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="relative hidden lg:block">
            <div className="card group space-y-8 p-10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:scale-[1.02]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Now Open
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    LUMA Startathon
                  </h3>
                  <p className="mt-2 text-base text-white/80">Fall 2026</p>
                </div>

                <div className="space-y-3 border-t border-white/8 pt-6">
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold">▸</span>
                    <span className="text-sm text-white/90">Global virtual competition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold">▸</span>
                    <span className="text-sm text-white/90">Teams of up to 5</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-accent font-bold">▸</span>
                    <span className="text-sm text-white/90">5-minute video submission</span>
                  </div>
                </div>

                <a
                  href={LATEST_COMPETITION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-bold text-ink transition-all hover:gap-3 hover:px-7"
                >
                  Join Now
                  <span>→</span>
                </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="card h-full p-8">
                <span className="text-5xl font-bold text-white/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-body">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Past competitions ---------- */}
      <section className="border-y border-white/5 bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Past competitions
            </h2>
            <p className="mt-3 max-w-xl text-body">
              Every LUMA competition is hosted on Devpost — the full history is
              public.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {competitions.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.08}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card block h-full p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">{c.name}</h3>
                    <span className="shrink-0 text-white/40">↗</span>
                  </div>
                  <p className="mt-1 text-sm text-body">{c.date}</p>
                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="flex gap-3">
                      <dt className="w-24 shrink-0 text-body/70">Turnout</dt>
                      <dd className="text-body">{c.participants}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-24 shrink-0 text-body/70">Theme</dt>
                      <dd className="text-body">{c.theme}</dd>
                    </div>
                  </dl>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Judging criteria ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How you're judged
          </h2>
          <p className="mt-3 max-w-xl text-body">
            Four criteria, equally weighted — straight from LUMA's Devpost
            rubric.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {judgingCriteria.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <div className="card h-full p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-bold">{c.name}</h3>
                  <span className="text-2xl font-bold text-white/60">
                    {c.weight}
                  </span>
                </div>
                <p className="mt-3 text-body">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CTA banner ---------- */}
      <section className="border-t border-white/5 bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to compete?
            </h2>
            <a
              href={LATEST_COMPETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 w-full sm:w-auto"
            >
              Join the Latest Competition
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
