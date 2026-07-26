"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { LATEST_COMPETITION_URL } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/competitions", label: "Competitions" },
  { href: "/internship-program", label: "Internship Program" },
  { href: "/about", label: "About" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-lg font-bold tracking-tight">
          LUMA
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex min-h-[44px] items-center text-sm font-medium transition-colors ${
                pathname === l.href ? "text-white" : "text-body hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={LATEST_COMPETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !min-h-0 !px-5 !py-2 text-sm"
          >
            Compete Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center md:hidden"
        >
          <div className="relative h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-white transition-transform ${open ? "top-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-white transition-transform ${open ? "top-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden border-b border-white/5 bg-ink/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium ${
                    pathname === l.href
                      ? "bg-accent/10 text-accent"
                      : "text-body hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={LATEST_COMPETITION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3 w-full"
              >
                Compete Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
