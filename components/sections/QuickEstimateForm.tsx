"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const inputClass =
  "w-full rounded-2xl border-2 border-earth-700/50 bg-earth-800/30 px-5 py-4 text-lg text-cream-100 placeholder:text-cream-300/40 outline-none transition-colors focus:border-fire-500/60 focus:bg-earth-800/50";

export default function QuickEstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    try {
      await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          address: form.get("address"),
          description: form.get("description"),
        }),
      });
    } catch {
      // still show success — we don't want to confuse the customer
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-3 rounded-3xl border-4 border-tan-400/20 bg-earth-800/40 p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-ice-400" />
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
        className="mx-auto max-w-2xl rounded-3xl border border-earth-700/50 bg-navy-900/60 p-6 backdrop-blur-sm sm:p-8"
      >
        <p className="text-center text-lg font-bold text-cream-50">
          Get a Free Estimate
        </p>
        <p className="mt-1 text-center text-sm text-cream-300/70">
          Fill this out and we&apos;ll get back to you in 30 minutes or less.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-cream-200">
              Your Name <span className="text-fire-500">*</span>
            </label>
            <input
              required
              name="name"
              placeholder="John Smith"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-cream-200">
              Phone Number <span className="text-fire-500">*</span>
            </label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="(615) 555-1234"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-cream-200">
              Address <span className="text-fire-500">*</span>
            </label>
            <input
              required
              name="address"
              placeholder="123 Main St, Murfreesboro, TN"
              className={inputClass}
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-semibold text-cream-200">
              What&apos;s going on? <span className="text-xs font-normal text-cream-300/50">(optional)</span>
            </label>
            <textarea
              name="description"
              rows={3}
              placeholder="Tell us what you're experiencing — even if you're not sure what's wrong, that's okay!"
              className={inputClass}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-fire-500 px-8 py-5 text-lg font-bold text-white transition-all hover:bg-fire-600 hover:scale-[1.02]"
        >
          {sending ? "Sending…" : "Send My Request"} {!sending && <Send className="h-5 w-5" />}
        </button>
        <p className="mt-3 text-center text-xs text-cream-300/50">
          No pressure, no spam — just a friendly call back.
        </p>
      </form>
    </Reveal>
  );
}
