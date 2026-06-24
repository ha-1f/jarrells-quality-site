import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";
import ServiceAreaMap from "./ServiceAreaMap";

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
            <ServiceAreaMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
