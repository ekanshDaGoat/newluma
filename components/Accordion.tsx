"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/8 rounded-2xl border border-white/8 bg-white/[0.02]">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex min-h-[44px] w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-white">{item.q}</span>
              <span
                className={`text-xl text-accent transition-transform duration-300 ${open ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-body">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
