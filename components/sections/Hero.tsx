"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site-config";
import QuickEstimateForm from "@/components/sections/QuickEstimateForm";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]" />

      <div className="absolute inset-0 opacity-90">
        <HeroScene />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 pb-24 pt-20 text-center sm:px-8 sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
          Family Owned · Licensed &amp; Insured · Your Neighbors in Middle Tennessee
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-6xl"
        >
          Comfort That Feels Like{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-cyan-200 to-orange-400 bg-clip-text text-transparent">
            Home
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-zinc-300"
        >
          We&apos;re Jarrell&apos;s Quality — a local family that treats your
          house like our own. Honest pricing, friendly faces, and heating
          &amp; cooling done right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#estimate"
            className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.45)] transition-transform hover:scale-105"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={SITE.phoneTel}
            className="flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4 text-cyan-300" />
            Call Now: {SITE.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-5"
        >
          <Link
            href="/services"
            className="text-sm font-medium text-zinc-400 underline-offset-4 hover:text-cyan-300 hover:underline"
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
