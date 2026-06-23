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
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Maintenance Plans
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Stop Paying for Surprise Breakdowns
          </h2>
          <p className="mt-4 text-zinc-400">
            Our maintenance plans keep your system running efficiently
            year-round, catch small issues before they become expensive
            ones, and put you first in line when the temperature swings.
          </p>
          <ul className="mt-6 space-y-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                {perk}
              </li>
            ))}
          </ul>
          <Link
            href="/maintenance-plans"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-transform hover:scale-105"
          >
            View Maintenance Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-8 backdrop-blur-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl font-extrabold text-white">
                $25
              </span>
              <span className="text-zinc-400">off any service call</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400">
              Mention this offer when you call or text — valid on any
              standard service call, not combinable with other offers.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-2xl font-bold text-cyan-300">2x</div>
                <div className="mt-1 text-xs text-zinc-400">
                  Tune-ups per year
                </div>
              </div>
              <div className="rounded-xl bg-white/5 p-4">
                <div className="text-2xl font-bold text-orange-400">#1</div>
                <div className="mt-1 text-xs text-zinc-400">
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
