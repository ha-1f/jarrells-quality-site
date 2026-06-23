import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";

export default function ServiceAreaSection() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
              Service Areas
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
              Proudly Serving Middle Tennessee
            </h2>
            <p className="mt-4 text-zinc-400">
              Based locally and built on referrals, Jarrell&apos;s Quality
              provides heating, cooling, and comfort services throughout the
              greater Murfreesboro area and beyond.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {SITE.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
                >
                  <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 via-navy-900 to-orange-500/15">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-cyan-300/40" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-navy-950/80 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-white">
                  Not sure if we cover your area?
                </p>
                <p className="mt-1 text-xs text-zinc-400">
                  Call or text {SITE.phoneDisplay} — if we don&apos;t serve
                  you directly, we&apos;ll point you in the right direction.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
