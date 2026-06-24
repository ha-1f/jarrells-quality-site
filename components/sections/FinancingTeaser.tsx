import Link from "next/link";
import { ArrowRight, CreditCard } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function FinancingTeaser() {
  return (
    <section className="bg-forest-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-earth-700/40 bg-gradient-to-r from-fire-500/10 via-forest-900 to-camo-600/10 p-8 sm:flex-row sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-fire-500/15">
                <CreditCard className="h-7 w-7 text-fire-500" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-cream-50">
                  Financing Options — Coming Soon
                </h3>
                <p className="mt-1 text-sm text-cream-300">
                  We&apos;re working on flexible financing for new systems
                  and big repairs. Ask us for the latest when you call.
                </p>
              </div>
            </div>
            <Link
              href="/financing"
              className="flex shrink-0 items-center gap-2 rounded-full bg-cream-100 px-6 py-3 text-sm font-semibold text-forest-950 transition-transform hover:scale-105"
            >
              Learn More <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
