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
        className="flex flex-col items-center gap-3 rounded-3xl border-4 border-tan-400/20 bg-earth-800/40 p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-camo-500" />
        <h3 className="font-display text-2xl font-bold text-cream-50">
          Got it! We&apos;ll call you shortly.
        </h3>
        <p className="max-w-sm text-cream-300">
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
        className="mx-auto max-w-2xl rounded-3xl border border-earth-700/50 bg-forest-900/60 p-6 backdrop-blur-sm sm:p-8"
      >
        <p className="text-center text-sm font-semibold uppercase tracking-wide text-tan-400">
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
                  ? "border-fire-500 bg-fire-500/15 text-cream-50 scale-105"
                  : "border-earth-700/50 bg-earth-800/30 text-cream-300 hover:border-tan-400/40",
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
            className="rounded-2xl border border-earth-700/50 bg-earth-800/30 px-5 py-4 text-base text-cream-100 placeholder:text-cream-300/40 outline-none focus:border-fire-500/60"
          />
          <input
            required
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            className="rounded-2xl border border-earth-700/50 bg-earth-800/30 px-5 py-4 text-base text-cream-100 placeholder:text-cream-300/40 outline-none focus:border-fire-500/60"
          />
        </div>

        <button
          type="submit"
          disabled={!need}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-fire-500 px-8 py-5 text-lg font-bold text-white transition-all hover:bg-fire-600 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          Get My Free Estimate <ArrowRight className="h-5 w-5" />
        </button>
        <p className="mt-3 text-center text-xs text-cream-300/50">
          No pressure, no spam — just a friendly call back.
        </p>
      </form>
    </Reveal>
  );
}
