import type { Metadata } from "next";
import { CheckCircle2, Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CtaButtons from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "The Homeowner's HVAC Maintenance Checklist",
  description:
    "Simple, regular maintenance steps that extend the life of your HVAC system and help you avoid costly mid-season breakdowns.",
};

const CHECKLIST = [
  "Replace or clean air filters every 1–3 months",
  "Keep outdoor condenser unit clear of leaves, dirt, and debris",
  "Check that vents and registers aren't blocked by furniture or rugs",
  "Schedule a professional cooling tune-up each spring",
  "Schedule a professional heating tune-up each fall",
  "Test your thermostat and replace batteries if needed",
  "Listen for unusual noises and address them early",
  "Have ductwork inspected periodically for leaks or buildup",
];

export default function BlogPostPage() {
  return (
    <article className="bg-forest-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-xs text-cream-300/60">
            <Calendar className="h-3.5 w-3.5" />
            March 1, 2026
          </div>
          <h1 className="font-display mt-3 text-3xl font-extrabold text-cream-50 sm:text-4xl">
            The Homeowner&apos;s HVAC Maintenance Checklist
          </h1>
          <p className="mt-5 text-lg text-cream-300">
            A little regular upkeep goes a long way toward keeping your
            heating and cooling system efficient, reliable, and out of
            emergency-repair territory. Here&apos;s what we recommend
            staying on top of between professional visits.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <ul className="space-y-3">
            {CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-cream-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-camo-500" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <p className="text-sm leading-7 text-cream-300">
            Even with diligent at-home care, nothing replaces a professional
            seasonal tune-up. Our maintenance plans bundle a spring cooling
            check and a fall heating check, plus priority scheduling and
            discounted repair rates — so the big stuff never sneaks up on
            you.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10">
          <CtaButtons />
        </Reveal>
      </div>
    </article>
  );
}
