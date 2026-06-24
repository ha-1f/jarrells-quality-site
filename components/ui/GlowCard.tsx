"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function GlowCard({
  children,
  className,
  glow = "fire",
}: {
  children: ReactNode;
  className?: string;
  glow?: "fire" | "earth";
}) {
  const glowColor =
    glow === "fire"
      ? "hover:border-fire-500/40 hover:shadow-[0_0_30px_rgba(232,93,26,0.15)]"
      : "hover:border-tan-400/40 hover:shadow-[0_0_30px_rgba(196,169,106,0.15)]";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "rounded-2xl border border-earth-700/40 bg-forest-900/60 p-6 backdrop-blur-sm transition-all duration-300",
        glowColor,
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
