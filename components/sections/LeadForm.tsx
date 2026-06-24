"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

const inputClass =
  "w-full rounded-2xl border-2 border-earth-700/50 bg-earth-800/30 px-5 py-4 text-lg text-cream-100 placeholder:text-cream-300/40 outline-none transition-colors focus:border-fire-500/60 focus:bg-earth-800/50";

export default function LeadForm() {
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
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-ice-400/30 bg-navy-800/20 p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-ice-400" />
        <h3 className="font-display text-2xl font-bold text-cream-50">
          Request received!
        </h3>
        <p className="max-w-sm text-sm text-cream-300">
          Thanks for reaching out to Jarrell&apos;s Quality. We&apos;ll
          contact you shortly to confirm your appointment. For anything
          urgent, give us a call directly.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-earth-700/40 bg-navy-900/60 p-6 backdrop-blur-sm sm:p-8"
    >
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
          What&apos;s going on?{" "}
          <span className="text-xs font-normal text-cream-300/50">(optional)</span>
        </label>
        <textarea
          name="description"
          rows={4}
          placeholder="Tell us what you're experiencing — even if you're not sure what's wrong, that's okay!"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-fire-500 px-8 py-5 text-lg font-bold text-white transition-all hover:bg-fire-600 hover:scale-[1.02]"
      >
        Send My Request <Send className="h-5 w-5" />
      </button>
      <p className="text-center text-xs text-cream-300/50">
        No pressure, no spam — just a friendly call back.
      </p>
    </form>
  );
}
