import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site-config";
import { ShieldCheck, Heart, Banknote, Timer, Users, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Thomas Jarrell — the founder of Jarrell's Quality HVAC. A family owned and operated contractor serving Middle Tennessee with honest, licensed, and insured heating and cooling service.",
};

const BRAND_VALUES = [
  {
    icon: Heart,
    title: "Family First",
    description:
      "We're not a franchise or a faceless corporation. We're a local family that shows up, does the job right, and stands behind our work.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description:
      "Every technician on our team is licensed and insured. We don't cut corners — your safety and comfort come first.",
  },
  {
    icon: Banknote,
    title: "Honest Pricing",
    description:
      "No hidden fees, no surprise charges. We give you the price before we start, and that's the price you pay.",
  },
  {
    icon: Timer,
    title: "Show Up On Time",
    description:
      "When we say we'll be there, we'll be there. We respect your time because we know you've got better things to do than wait around.",
  },
  {
    icon: Users,
    title: "Community Built",
    description:
      "Our business was built on word of mouth from neighbors, not marketing budgets. We earn every referral.",
  },
  {
    icon: Wrench,
    title: "Do It Right the First Time",
    description:
      "We diagnose the real problem, fix it properly, and make sure it stays fixed. No band-aids, no upsells.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Local, Family Owned, and Built on Trust"
        description="Jarrell's Quality was built on a simple idea: treat every home like it's your own, and never cut corners on safety or honesty."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      {/* Thomas's Founder Story */}
      <section className="bg-forest-900 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Jarrell's Quality logo"
                width={320}
                height={320}
                className="rounded-2xl drop-shadow-[0_0_40px_rgba(232,93,26,0.2)]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
              Meet the Founder
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-cream-50">
              Thomas Jarrell
            </h2>
            <p className="mt-5 text-sm leading-7 text-cream-300">
              I grew up in Middle Tennessee, and this area has always been
              home. I started Jarrell&apos;s Quality because I saw too many
              families getting overcharged, under-served, or straight-up
              misled by HVAC companies that didn&apos;t care about doing the
              job right — they just cared about getting paid.
            </p>
            <p className="mt-4 text-sm leading-7 text-cream-300">
              I wanted to build something different. A company where you know
              the person showing up to your house. Where the price I quote is
              the price you pay. Where I&apos;d never recommend a repair or
              replacement you don&apos;t actually need. That&apos;s how I run
              my business, and that&apos;s how it&apos;ll always be.
            </p>
            <p className="mt-4 text-sm leading-7 text-cream-300">
              Whether it&apos;s a quick fix on a Saturday morning or a full
              system install for a new build, I treat every single job like
              I&apos;m working on my own home. My family&apos;s name is on
              this business — and I intend to keep it that way.
            </p>
            <p className="mt-5 text-sm font-semibold text-fire-500">
              — Thomas Jarrell, Founder &amp; Owner
            </p>
          </Reveal>
        </div>
      </section>

      {/* Brand Values Wall */}
      <section className="bg-camo relative py-20 sm:py-28">
        <div className="absolute inset-0 bg-forest-950/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-fire-500">
              What We Stand For
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
              The Jarrell&apos;s Quality Promise
            </h2>
            <p className="mt-4 text-cream-300">
              These aren&apos;t just words on a wall — they&apos;re how we
              run every single job, every single day.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRAND_VALUES.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <GlowCard glow="earth" className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-fire-500/15">
                    <item.icon className="h-6 w-6 text-fire-500" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-cream-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-cream-300">
                    {item.description}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-forest-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SITE.trustBadges.map((badge, i) => (
              <Reveal key={badge} delay={i * 0.08}>
                <GlowCard className="h-full text-center">
                  <p className="text-sm font-semibold text-cream-50">{badge}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
