import Link from "next/link";
import { ArrowRight, CreditCard } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function FinancingTeaser() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-orange-400/20 bg-gradient-to-r from-orange-500/10 via-navy-900 to-cyan-500/10 p-8 sm:flex-row sm:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-400/15">
                <CreditCard className="h-7 w-7 text-orange-400" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  New System? We Have Financing Options.
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Comfort shouldn&apos;t wait on a full cash payment — ask
                  about flexible plans for repairs and replacements.
                </p>
              </div>
            </div>
            <Link
              href="/financing"
              className="flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 transition-transform hover:scale-105"
            >
              Explore Financing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
