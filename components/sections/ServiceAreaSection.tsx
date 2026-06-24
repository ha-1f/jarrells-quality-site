import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";

export default function ServiceAreaSection() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-fire-500">
              Service Areas
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
              Proudly Serving Middle Tennessee
            </h2>
            <p className="mt-4 text-cream-300">
              Based locally and built on referrals, Jarrell&apos;s Quality
              provides heating, cooling, and comfort services throughout the
              greater Murfreesboro area and beyond.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {SITE.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="flex items-center gap-1.5 rounded-full border border-earth-700/40 bg-navy-900/60 px-4 py-2 text-sm text-cream-200"
                >
                  <MapPin className="h-3.5 w-3.5 text-fire-500" />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-earth-700/40">
              <iframe
                title="Jarrell's Quality service area map — Murfreesboro, TN"
                src="https://www.google.com/maps?q=Murfreesboro,+TN&z=9&output=embed"
                className="absolute inset-0 h-full w-full sepia-[0.3] contrast-[1.05] brightness-[0.85]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-navy-950/85 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold text-cream-50">
                  Not sure if we cover your area?
                </p>
                <p className="mt-1 text-xs text-cream-300">
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
