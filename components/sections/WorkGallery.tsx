import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const ITEMS = [
  { photo: "/photos/team-rooftop-commercial.jpg", label: "Commercial Rooftop Service", position: "center 40%" },
  { photo: "/photos/team-unit-service.jpg", label: "Unit Maintenance & Filter Work", position: "center 30%" },
  { photo: "/photos/team-condenser-repair.jpg", label: "Condenser Repair", position: "center 50%" },
  { photo: "/photos/team-mini-split-install.jpg", label: "Mini Split Installation", position: "center 40%" },
  { photo: "/photos/team-new-construction.jpg", label: "New Construction HVAC", position: "center 50%" },
];

export default function WorkGallery() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
            Our Work
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            Our Team in Action
          </h2>
          <p className="mt-4 text-cream-300">
            Real photos of our crew on real job sites across Middle Tennessee
            — residential, commercial, and new construction.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.photo} delay={i * 0.06}>
              <div className="group relative aspect-square overflow-hidden rounded-2xl border border-earth-700/40">
                <Image
                  src={item.photo}
                  alt={item.label}
                  fill
                  style={{ objectPosition: item.position }}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
                <span className="absolute bottom-4 left-5 text-sm font-semibold text-cream-50 drop-shadow-lg">
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
