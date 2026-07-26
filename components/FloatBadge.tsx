"use client";

import { motion } from "framer-motion";

// Notification-style badge that springs in over a hero mockup.
export default function FloatBadge({
  children,
  className = "",
  delay = 1.2,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay }}
      className={`absolute z-10 flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#161616] px-4 py-3 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.8)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
