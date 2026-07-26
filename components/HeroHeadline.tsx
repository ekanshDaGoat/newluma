"use client";

import { motion } from "framer-motion";

// Fades the headline in word by word on load.
export default function HeroHeadline({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  let wordIndex = 0;
  return (
    <h1 className={className}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word) => {
            const delay = 0.15 + wordIndex++ * 0.09;
            return (
              <motion.span
                key={`${li}-${word}-${delay}`}
                className="inline-block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
              >
                {word}
                {" "}
              </motion.span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
