import type { Metadata } from "next";
import { CreditCard, ShieldCheck, Clock3 } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Financing",
  description:
    "Jarrell's Quality is working on flexible financing options for HVAC repairs and system replacements — ask us for the latest when you call.",
  keywords: ["HVAC financing", "AC financing", "furnace financing"],
};

const POINTS = [
  {
    icon: CreditCard,
    title: "Flexible Plans",
    description:
      "We're looking at multiple term lengths so a new system fits your budget.",
  },
  {
    icon: Clock3,
    title: "Fast Approval",
    description:
      "The goal is a quick decision so you're not left waiting in the heat or cold.",
  },
  {
    icon: ShieldCheck,
    title: "No Pressure",
    description:
      "Whatever we offer, we'll walk you through it honestly — no pushy sales tactics, ever.",
  },
];

export default function FinancingPage() {
  return (
    <>
      <PageHero
        eyebrow="Financing"
        title="Financing Options — Coming Soon"
        description="We don't have a financing program live just yet, but we're working on it so a failed system or major repair doesn't have to wait on a full cash payment. Give us a call — we'll tell you what's currently available."
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
              In the meantime, ask us directly about payment options for your
              project — we&apos;ll always give you a straight answer.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
