import type { Metadata } from "next";
import { CreditCard, ShieldCheck, Clock3 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Flexible financing options for HVAC repairs and system replacements from Jarrell's Quality — comfort shouldn't have to wait.",
  keywords: ["HVAC financing", "AC financing", "furnace financing"],
};

const POINTS = [
  {
    icon: CreditCard,
    title: "Flexible Plans",
    description:
      "Multiple term lengths so you can find a monthly payment that fits your budget.",
  },
  {
    icon: Clock3,
    title: "Fast Approval",
    description:
      "Most applications get a quick decision so you're not left waiting in the heat or cold.",
  },
  {
    icon: ShieldCheck,
    title: "No Pressure",
    description:
      "We'll walk you through the options honestly — no pushy sales tactics, ever.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Comfort Now, Pay Over Time"
        description="A failed system or major repair shouldn't have to wait on a full cash payment. We work with financing partners to help make new installs and big repairs more manageable."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 0.08}>
                <GlowCard className="h-full text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15">
                    <point.icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {point.description}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <p className="mx-auto max-w-2xl text-center text-sm text-zinc-400">
              Specific financing offers, terms, and approval requirements are
              provided by our lending partners and may change. Call us to
              discuss current options for your project.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
