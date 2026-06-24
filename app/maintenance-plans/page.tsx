import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Maintenance Plans",
  description:
    "Seasonal HVAC maintenance plans from Jarrell's Quality keep your heating and cooling system running efficiently year-round with priority scheduling and discounted repairs.",
  keywords: ["HVAC maintenance plans", "seasonal tune-up", "preventive HVAC maintenance"],
};

const PLAN_PERKS = [
  "Spring AC tune-up & inspection",
  "Fall furnace/heat pump tune-up & inspection",
  "Priority scheduling ahead of non-members",
  "Discounted rate on repairs and parts",
  "No emergency dispatch fees during covered visits",
  "Reminder calls so you never miss a season",
];

export default function MaintenancePlansPage() {
  return (
    <>
      <PageHero
        eyebrow="Maintenance Plans"
        title="Two Visits a Year. Zero Surprise Breakdowns."
        description="Routine maintenance is the single best way to avoid an expensive mid-summer or mid-winter system failure. Our plans keep your equipment running at peak efficiency."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <Reveal>
            <GlowCard glow="fire" className="p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white">
                What&apos;s Included
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {PLAN_PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    {perk}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-zinc-400">
                Ask us about current plan pricing and what&apos;s covered for
                your specific system when you call — pricing varies by
                equipment type and number of systems on the property.
              </p>
            </GlowCard>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
