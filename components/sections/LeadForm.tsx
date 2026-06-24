"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/site-config";

const inputClass =
  "w-full rounded-xl border border-earth-700/50 bg-earth-800/30 px-4 py-3 text-sm text-cream-100 placeholder:text-cream-300/40 outline-none transition-colors focus:border-fire-500/60 focus:bg-earth-800/50";

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
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-camo-600/30 bg-camo-800/20 p-10 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-camo-500" />
        <h3 className="font-display text-xl font-bold text-cream-50">
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
      className="grid gap-4 rounded-3xl border border-earth-700/40 bg-forest-900/60 p-6 backdrop-blur-sm sm:grid-cols-2 sm:p-8"
    >
      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-semibold text-cream-300">
          Full Name *
        </label>
        <input required name="name" className={inputClass} placeholder="Jane Smith" />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-cream-300">
          Phone *
        </label>
        <input
          required
          type="tel"
          name="phone"
          className={inputClass}
          placeholder="(615) 555-0123"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-cream-300">
          Email *
        </label>
        <input
          required
          type="email"
          name="email"
          className={inputClass}
          placeholder="jane@email.com"
        />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-semibold text-cream-300">
          Service Address *
        </label>
        <input
          required
          name="address"
          className={inputClass}
          placeholder="123 Main St, Murfreesboro, TN"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-cream-300">
          Service Needed *
        </label>
        <select required name="service" className={inputClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Maintenance Plan">Maintenance Plan</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-semibold text-cream-300">
          Preferred Date / Time
        </label>
        <input
          type="datetime-local"
          name="preferredTime"
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label className="mb-1.5 block text-xs font-semibold text-cream-300">
          Message
        </label>
        <textarea
          name="message"
          rows={4}
          className={inputClass}
          placeholder="Tell us what's going on..."
        />
      </div>

      <label className="flex items-center gap-2.5 text-sm text-cream-200 sm:col-span-2">
        <input
          type="checkbox"
          name="emergency"
          className="h-4 w-4 rounded border-earth-700/50 bg-earth-800/30 accent-fire-500"
        />
        This is an emergency / no heat or no cool situation
      </label>

      <button
        type="submit"
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-fire-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-fire-600 hover:scale-105 sm:col-span-2"
      >
        Request Estimate <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
