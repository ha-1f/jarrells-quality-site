"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Snowflake, Flame, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import clsx from "clsx";
import Reveal from "@/components/ui/Reveal";

const NEEDS = [
  { key: "cooling", label: "It's Hot", icon: Snowflake },
  { key: "heating", label: "It's Cold", icon: Flame },
  { key: "other", label: "Something Else", icon: Wrench },
];

export default function QuickEstimateForm() {
  const [need, setNeed] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-3xl border-4 border-cream-200/20 bg-cream-100/10 p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-cyan-300" />
        <h3 className="font-display text-2xl font-bold text-white">
          Got it! We&apos;ll call you shortly.
        </h3>
        <p className="max-w-sm text-zinc-300">
          Thanks for reaching out — a real person from our family will call
          you back soon to get you on the schedule.
        </p>
      </motion.div>
    );
  }

  return (
    <Reveal>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-8"
      >
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-cyan-300">
          Get a Free Estimate — It&apos;s This Easy
        </p>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {NEEDS.map((n) => (
            <button
              key={n.key}
              type="button"
              onClick={() => setNeed(n.key)}
              className={clsx(
                "flex flex-col items-center gap-2 rounded-2xl border-2 px-3 py-5 text-sm font-bold transition-all",
                need === n.key
                  ? "border-orange-400 bg-orange-400/15 text-white scale-105"
                  : "border-white/15 bg-white/5 text-zinc-300 hover:border-cyan-400/40",
              )}
            >
              <n.icon className="h-7 w-7" />
              {n.label}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <input
            required
            name="name"
            placeholder="Your Name"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-zinc-500 outline-none focus:border-cyan-400/60"
          />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-base text-white placeholder:text-zinc-500 outline-none focus:border-cyan-400/60"
          />
        </div>

        <button
          type="submit"
          disabled={!need}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(249,115,22,0.45)] transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          Get My Free Estimate <ArrowRight className="h-5 w-5" />
        </button>
        <p className="mt-3 text-center text-xs text-zinc-500">
          No pressure, no spam — just a friendly call back.
        </p>
      </form>
    </Reveal>
  );
}
