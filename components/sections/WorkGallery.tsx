import Image from "next/image";
import { Wrench } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ITEMS = [
  { photo: "/photos/ac-unit-1.jpg", label: "Central AC Installs", position: "20% 80%" },
  { photo: "/photos/ac-unit-2.jpg", label: "Outdoor Unit Service", position: "center 45%" },
  { photo: "/photos/technician-2.jpg", label: "On-Site Installations", position: "center 55%" },
];

export default function WorkGallery() {
  return (
    <section className="bg-forest-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
            Our Work
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            Recent Jobs Across Middle Tennessee
          </h2>
          <p className="mt-4 text-cream-300">
            A few shots while our real job-photo gallery gets built out —
            here&apos;s the kind of work we do every week.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-earth-700/40">
                <Image
                  src={item.photo}
                  alt={item.label}
                  fill
                  style={{ objectPosition: item.position }}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/10 to-transparent" />
                <span className="absolute bottom-5 left-6 text-sm font-semibold text-cream-50">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.32}>
            <div className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-earth-700/40 bg-forest-900/40 p-6 text-center">
              <Wrench className="h-9 w-9 text-fire-500" />
              <span className="text-sm font-semibold text-cream-50">
                Your Job Could Be Next
              </span>
              <p className="text-xs text-cream-300/60">
                Real before/after photos coming as we finish more projects.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
