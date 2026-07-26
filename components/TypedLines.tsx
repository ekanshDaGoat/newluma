"use client";

import { motion } from "framer-motion";

export interface Token {
  text: string;
  className?: string;
}

// Code-style lines that slide in one after another when scrolled into view.
export default function TypedLines({
  lines,
  startDelay = 0.4,
}: {
  lines: Token[][];
  startDelay?: number;
}) {
  return (
    <div className="space-y-3.5 font-mono text-[13px] leading-relaxed sm:text-sm">
      {lines.map((tokens, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: startDelay + i * 0.16,
            ease: "easeOut",
          }}
        >
          {tokens.map((t, j) => (
            <span key={j} className={t.className ?? "text-white/85"}>
              {t.text}
            </span>
          ))}
          {i === lines.length - 1 && <span className="caret" />}
        </motion.div>
      ))}
    </div>
  );
}
