"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";
import QuickEstimateForm from "@/components/sections/QuickEstimateForm";

export default function Hero() {
  return (
    <section className="bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-navy-950/30 to-navy-950/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-16 text-center sm:px-8 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <Image
            src="/logo.jpg"
            alt="Jarrell's Quality Heating Cooling Comfort"
            width={220}
            height={220}
            className="mx-auto rounded-2xl drop-shadow-[0_0_40px_rgba(232,93,26,0.3)]"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-tan-400/30 bg-earth-800/40 px-4 py-1.5 text-xs font-semibold text-tan-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fire-500" />
          Family Owned · Licensed &amp; Insured · Your Neighbors in Middle Tennessee
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display max-w-3xl text-4xl font-extrabold leading-tight text-cream-50 sm:text-6xl"
        >
          Comfort That Feels Like{" "}
          <span className="text-fire-500">
            Home
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 max-w-xl text-lg text-cream-300"
        >
          We&apos;re Jarrell&apos;s Quality — a local family that treats your
          house like our own. Honest pricing, friendly faces, and heating
          &amp; cooling done right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#estimate"
            className="group flex items-center justify-center gap-2 rounded-full bg-fire-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-fire-600 hover:scale-105"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={SITE.phoneTel}
            className="flex items-center justify-center gap-2 rounded-full border border-tan-400/40 bg-earth-800/30 px-8 py-4 text-base font-semibold text-cream-100 backdrop-blur-sm transition-colors hover:bg-earth-800/50"
          >
            <Phone className="h-4 w-4 text-fire-500" />
            Call Now: {SITE.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-5"
        >
          <Link
            href="/services"
            className="text-sm font-medium text-cream-300/70 underline-offset-4 hover:text-fire-500 hover:underline"
          >
            View Services →
          </Link>
        </motion.div>

        <div id="estimate" className="mt-12 w-full scroll-mt-24">
          <QuickEstimateForm />
        </div>
      </div>
    </section>
  );
}
