import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import StatsBar from "@/components/StatsBar";
import Accordion from "@/components/Accordion";
import MockWindow from "@/components/MockWindow";
import TypedLines from "@/components/TypedLines";
import FloatBadge from "@/components/FloatBadge";
import { ifslStats, ifslFaq, IFSL_APPLY_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Internship Program — LUMA",
  description:
    "LUMA's Internship Program places students in real project roles at nonprofits and startups.",
};

const fellowSteps = [
  {
    title: "Apply",
    body: "Tell us about yourself and what field interests you. We review applications and match you based on your fit with available roles.",
  },
  {
    title: "Get Matched",
    body: "We connect you with a nonprofit or startup working in your field. You'll work alongside founders, operators, and leaders.",
  },
  {
    title: "Execute Real Work",
    body: "Jump into the role and contribute. Whether it's product, social impact, operations, or marketing — you're doing real work from day one.",
  },
];

const focusAreas = [
  {
    title: "Why Internships Matter",
    body: "Real-world experience is the best teacher. You'll build skills, a network, and a portfolio that makes college and career applications stand out.",
  },
  {
    title: "All Fields Welcome",
    body: "From product to social impact to operations to marketing — we have internships across 10+ fields. Find the one that excites you.",
  },
];

export default function IfslPage() {
  return (
    <>
      {/* ---------- Page hero ---------- */}
      <section className="relative overflow-hidden border-b border-white/5 pt-16">
        <div aria-hidden className="hero-bg" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="eyebrow">Internship Program</span>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Get real experience. Build your network.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-body">
              We match you with a local nonprofit or startup. You'll execute
              real work in your field while learning from founders and leaders.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="relative hidden lg:block">
            <div className="space-y-6 rounded-xl border border-white/8 bg-white/3 p-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  10+ fields
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <span className="text-sm text-white">Product Design</span>
                  <span className="text-sm text-white">Operations</span>
                  <span className="text-sm text-white">Social Impact</span>
                  <span className="text-sm text-white">Marketing</span>
                  <span className="text-sm text-white">Engineering</span>
                  <span className="text-sm text-white">+ more</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- The numbers ---------- */}
      <StatsBar stats={ifslStats} columns={2} />

      {/* ---------- What fellows do ---------- */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How it works
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {fellowSteps.map((step, i) => (
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

      {/* ---------- Focus areas ---------- */}
      <section className="border-y border-white/5 bg-panel">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              About the program
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {focusAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.1}>
                <div className="card h-full p-8">
                  <h3 className="text-2xl font-bold">{area.title}</h3>
                  <p className="mt-3 text-body">{area.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mx-auto max-w-3xl px-5 py-24">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            FAQ
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10">
            <Accordion items={ifslFaq} />
          </div>
        </Reveal>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="border-t border-white/5 pb-24 pt-16 text-center">
        <Reveal>
          <a href={IFSL_APPLY_URL} className="btn-primary w-auto px-10">
            Apply to Internship Program
          </a>
        </Reveal>
      </section>
    </>
  );
}
