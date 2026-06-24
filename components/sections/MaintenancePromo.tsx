import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const PERKS = [
  "Two seasonal tune-ups per year (spring + fall)",
  "Priority scheduling, even during peak season",
  "Discounted repair pricing for members",
  "No breakdown surprises from neglected maintenance",
];

export default function MaintenancePromo() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice-400/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
            Maintenance Plans
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            Stop Paying for Surprise Breakdowns
          </h2>
          <p className="mt-4 text-cream-300">
            Our maintenance plans keep your system running efficiently
            year-round, catch small issues before they become expensive
            ones, and put you first in line when the temperature swings.
          </p>
          <ul className="mt-6 space-y-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm text-cream-200">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ice-400" />
                {perk}
              </li>
            ))}
          </ul>
          <Link
            href="/maintenance-plans"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-fire-500 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-fire-600 hover:scale-105"
          >
            View Maintenance Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-earth-700/40 bg-navy-900/60 p-8 backdrop-blur-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-extrabold text-fire-500">
                $25
              </span>
              <span className="text-cream-300">off any service call</span>
            </div>
            <p className="mt-3 text-sm text-cream-300">
              Mention this offer when you call or text — valid on any
              standard service call, not combinable with other offers.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-earth-800/40 p-4">
                <div className="text-2xl font-bold text-tan-400">2x</div>
                <div className="mt-1 text-xs text-cream-300">
                  Tune-ups per year
                </div>
              </div>
              <div className="rounded-xl bg-earth-800/40 p-4">
                <div className="text-2xl font-bold text-fire-500">#1</div>
                <div className="mt-1 text-xs text-cream-300">
                  Priority scheduling
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
