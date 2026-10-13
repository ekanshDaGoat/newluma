import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import StatsBar from "@/components/StatsBar";
import FounderAvatar from "@/components/FounderAvatar";
import { homeStats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About — LUMA",
  description:
    "LUMA was founded in January 2024 by Ekansh Jain and Jash Vohra, two high school students from Redmond, Washington.",
};

const founders = [
  {
    name: "Ekansh Jain",
    initials: "EJ",
    role: "Co-Founder & Co-Executive Director",
    school: "Redmond High School, Class of 2027",
    photo: "/founders/ekansh.jpg",
  },
  {
    name: "Jash Vohra",
    initials: "JV",
    role: "Co-Founder & Co-Executive Director",
    school: "Redmond High School, Class of 2027",
    photo: "/founders/jash.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ---------- Origin story ---------- */}
      <section className="relative overflow-hidden border-b border-white/5 pt-16">
        <div aria-hidden className="hero-bg" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">About</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Started by two students who didn't wait to be picked.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-body">
              LUMA was founded in early 2024 by Ekansh Jain and Jash Vohra, two
              high school students from Redmond, Washington. They started it to
              make real entrepreneurship opportunities accessible to every
              student, regardless of background. We run global competitions and
              an internship program that connects students with real work at
              nonprofits and startups. Everything LUMA runs is free, and it
              always will be.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="relative hidden lg:block">
            <div className="group relative overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-white/3 to-accent/5 p-10 transition-all duration-300 hover:border-accent/50">
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.1),transparent_50%)]" />
              <div className="relative space-y-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  Our Timeline
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                      <div className="mt-3 h-12 w-0.5 bg-gradient-to-b from-accent to-transparent" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Early 2024</p>
                      <p className="text-sm text-white/70">Founded in Redmond, WA</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                      <div className="mt-3 h-12 w-0.5 bg-gradient-to-b from-accent to-transparent" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Mid-End 2024</p>
                      <p className="text-sm text-white/70">First competitions: 42 & 63 students</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                      <div className="mt-3 h-12 w-0.5 bg-gradient-to-b from-accent to-transparent" />
                    </div>
                    <div>
                      <p className="font-bold text-white">2025</p>
                      <p className="text-sm text-white/70">Scaled to 126+ competitors per event</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="h-3 w-3 rounded-full bg-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-white">2026 & Beyond</p>
                      <p className="text-sm text-white/70">757 in summer + internship program</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center">
        <Reveal>
          <div className="mx-auto mb-10 h-px w-10 bg-accent" />
          <blockquote className="text-2xl font-bold leading-snug sm:text-4xl">
            &ldquo;Empower the next generation of problem-solvers by nurturing
            creativity, collaboration, and confidence.&rdquo;
          </blockquote>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-body">
            LUMA exists to make high-quality opportunities accessible to all
            students, regardless of background — free competitions, free
            education, and real leadership roles that students earn on merit.
          </p>
        </Reveal>
      </section>

      {/* ---------- Team ---------- */}
      <section className="border-y border-white/5 bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The team
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.1}>
                <div className="card flex items-center gap-6 p-8">
                  <FounderAvatar photo={f.photo} initials={f.initials} name={f.name} />
                  <div>
                    <h3 className="text-xl font-bold">{f.name}</h3>
                    <p className="mt-1 text-body">{f.role}</p>
                    <p className="mt-0.5 text-sm text-body/70">{f.school}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- By the numbers ---------- */}
      <section className="py-24">
        <Reveal>
          <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            By the numbers
          </h2>
        </Reveal>
        <div className="mt-10">
          <StatsBar stats={homeStats} columns={5} />
        </div>
      </section>
    </>
  );
}
