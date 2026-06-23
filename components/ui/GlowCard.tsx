"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function GlowCard({
  children,
  className,
  glow = "cyan",
}: {
  children: ReactNode;
  className?: string;
  glow?: "cyan" | "orange";
}) {
  const glowColor =
    glow === "cyan"
      ? "hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] hover:border-cyan-400/50"
      : "hover:shadow-[0_0_40px_rgba(249,115,22,0.25)] hover:border-orange-400/50";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={clsx(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300",
        glowColor,
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
