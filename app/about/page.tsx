import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Jarrell's Quality is a family owned and operated HVAC contractor serving Middle Tennessee with honest, licensed, and insured heating and cooling service.",
};

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

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex justify-center">
              <Image
                src="/logo.jpg"
                alt="Jarrell's Quality logo"
                width={280}
                height={280}
                className="drop-shadow-2xl"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl font-bold text-white">
              Our Story
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Jarrell&apos;s Quality is a family owned and operated heating
              and cooling company serving residential, commercial, and new
              construction customers across Middle Tennessee. We started
              this business on the belief that HVAC service should be
              honest, fairly priced, and done right the first time —
              principles we still build every job around today.
            </p>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              Whether it&apos;s a quick repair, a full system replacement, or
              ongoing maintenance, our licensed and insured technicians
              treat every home and business like it&apos;s our own.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SITE.trustBadges.map((badge, i) => (
              <Reveal key={badge} delay={i * 0.08}>
                <GlowCard className="h-full text-center">
                  <p className="text-sm font-semibold text-white">{badge}</p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
