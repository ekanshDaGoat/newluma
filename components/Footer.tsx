import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/competitions", label: "Competitions" },
  { href: "/internship-program", label: "Internship Program" },
  { href: "/about", label: "About" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-tight">LUMA</p>
            <p className="mt-2 max-w-xs text-sm text-body">
              Build, compete, and lead — regardless of background. Every LUMA
              program is 100% free.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex min-h-[44px] items-center text-sm text-body transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm text-body">
            <a
              href="https://devpost.com/hackathons?search=luma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[44px] items-center transition-colors hover:text-white"
            >
              LUMA on Devpost ↗
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex min-h-[44px] items-center transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-body/70">
          © 2024 LUMA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
