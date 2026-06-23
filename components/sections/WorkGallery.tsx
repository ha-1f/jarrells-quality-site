import { Snowflake, Flame, Wrench, Home } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ITEMS = [
  { icon: Snowflake, label: "Central AC Installs", tone: "from-cyan-500/30 to-cyan-900/10" },
  { icon: Flame, label: "Furnace Replacements", tone: "from-orange-500/30 to-orange-900/10" },
  { icon: Wrench, label: "Repair & Diagnostics", tone: "from-cyan-500/20 to-orange-500/20" },
  { icon: Home, label: "New Construction HVAC", tone: "from-orange-500/20 to-cyan-500/20" },
];

export default function WorkGallery() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Our Work
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Recent Jobs Across Middle Tennessee
          </h2>
          <p className="mt-4 text-zinc-400">
            Photo gallery coming soon — in the meantime, here&apos;s a look at
            the kind of work we do every week.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div
                className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.tone} p-6`}
              >
                <item.icon className="h-10 w-10 text-white/80 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute bottom-5 left-6 text-sm font-semibold text-white">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
