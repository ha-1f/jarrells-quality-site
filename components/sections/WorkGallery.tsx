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
            A few shots while our real job-photo gallery gets built out —
            here&apos;s the kind of work we do every week.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={item.photo}
                  alt={item.label}
                  fill
                  style={{ objectPosition: item.position }}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <span className="absolute bottom-5 left-6 text-sm font-semibold text-white">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.32}>
            <div className="group relative flex aspect-square flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-6 text-center">
              <Wrench className="h-9 w-9 text-orange-400" />
              <span className="text-sm font-semibold text-white">
                Your Job Could Be Next
              </span>
              <p className="text-xs text-zinc-500">
                Real before/after photos coming as we finish more projects.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
