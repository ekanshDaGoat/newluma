import Link from "next/link";
import HeroHeadline from "@/components/HeroHeadline";
import MockWindow from "@/components/MockWindow";
import TypedLines from "@/components/TypedLines";
import StatsBar from "@/components/StatsBar";
import Reveal from "@/components/Reveal";
import SponsorMarquee from "@/components/SponsorMarquee";
import CountriesRotator from "@/components/CountriesRotator";
import MobileCountriesStripes from "@/components/MobileCountriesStripes";
import { homeStats, LATEST_COMPETITION_URL } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ---------- Sponsors strip ---------- */}
      <section className="border-b border-white/5 pb-10 pt-20">
        <Reveal>
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-body">
            Backed by Leading Organizations
          </p>
          <SponsorMarquee />
        </Reveal>
      </section>

      {/* ---------- Hero ---------- */}
      <section className="relative flex items-center overflow-hidden">
        <div aria-hidden className="hero-bg" />
        <div aria-hidden className="hero-grid" />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <HeroHeadline
                lines={["Launching the", "Next Generation", "of Founders &", "Leaders."]}
                className="text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl"
              />
              <Reveal delay={0.9}>
                <p className="mt-6 max-w-xl text-lg text-body sm:text-xl">
                  LUMA is a global youth business accelerator connecting students
                  through high-impact pitch competitions and direct internship
                  placement with real-world startups.
                </p>
              </Reveal>
              <Reveal delay={1.1}>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={LATEST_COMPETITION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group w-full sm:w-auto"
                  >
                    Compete Now
                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <Link href="/internship-program" className="btn-secondary w-full sm:w-auto">
                    Apply Now
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.5} className="relative hidden lg:flex items-center justify-center self-start">
              <CountriesRotator />
            </Reveal>
          </div>

          <Reveal delay={0.5} className="relative lg:hidden w-full">
            <MobileCountriesStripes />
          </Reveal>
        </div>
      </section>

      {/* ---------- Stats bar ---------- */}
      <StatsBar stats={homeStats} columns={5} />

      {/* ---------- What we do ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <span className="eyebrow">Programs</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Two ways in
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card flex h-full flex-col p-8 sm:p-10">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              <h3 className="mt-6 text-2xl font-bold">Compete &amp; Build</h3>
              <p className="mt-3 flex-1 text-body">
                Global virtual startup pitch competition for middle and high
                school students. Teams of up to five build a real product and
                submit a 5-minute video demo showcasing what you built.
              </p>
              <Link
                href="/competitions"
                className="btn-secondary mt-8 w-full sm:w-auto sm:self-start"
              >
                View Competitions
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="card flex h-full flex-col p-8 sm:p-10">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-8 w-8 text-white/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <h3 className="mt-6 text-2xl font-bold">Intern &amp; Grow</h3>
              <p className="mt-3 flex-1 text-body">
                Get matched with a local nonprofit or startup and execute real
                work in your field. Whether it's social impact, product, or
                operations, you'll gain hands-on experience working alongside
                founders and leaders. 10+ fields available.
              </p>
              <Link
                href="/internship-program"
                className="btn-secondary mt-8 w-full sm:w-auto sm:self-start"
              >
                Explore Internships
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Mission ---------- */}
      <section className="border-t border-white/5 py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Build, compete, and lead — regardless of background.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
              LUMA exists to make high-quality entrepreneurship opportunities
              accessible to every student. Every competition, every fellowship,
              every resource — 100% free, always.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
