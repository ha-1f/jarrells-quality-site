import Image from "next/image";
import { Users, ArrowRightLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CREW_PHOTOS = [
  { photo: "/photos/team-rooftop-commercial.jpg", label: "Commercial Rooftop Service", position: "center 40%" },
  { photo: "/photos/team-unit-service.jpg", label: "Unit Maintenance & Filter Work", position: "center 30%" },
  { photo: "/photos/team-condenser-repair.jpg", label: "Condenser Repair", position: "center 50%" },
  { photo: "/photos/team-mini-split-install.jpg", label: "Mini Split Installation", position: "center 40%" },
  { photo: "/photos/team-new-construction.jpg", label: "New Construction HVAC", position: "center 50%" },
];

const BEFORE_AFTER = [
  {
    title: "Package Unit Replacement",
    description: "Swapped out an aging Carrier package unit for a brand new Goodman — better efficiency, quieter operation.",
    before: { photo: "/photos/before-carrier-front.jpg", position: "center 50%" },
    after: { photo: "/photos/after-goodman-front.jpg", position: "center 50%" },
  },
  {
    title: "Condenser Upgrade",
    description: "Replaced a worn-out condenser with a new Goodman unit — fresh install, clean pad, ready to run.",
    before: { photo: "/photos/before-goodman-condenser.jpg", position: "center 50%" },
    after: { photo: "/photos/after-goodman-condenser.jpg", position: "center 50%" },
  },
];

function PhotoCard({ src, alt, position }: { src: string; alt: string; position: string }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-2xl border border-earth-700/40">
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectPosition: position }}
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
      <span className="absolute bottom-4 left-5 text-sm font-semibold text-cream-50 drop-shadow-lg">
        {alt}
      </span>
    </div>
  );
}

export default function WorkGallery() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Crew at Work */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <Users className="h-5 w-5 text-fire-500" />
            <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
              Our Crew at Work
            </span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            Real Jobs, Real People
          </h2>
          <p className="mt-4 text-cream-300">
            Our technicians on the job across Middle Tennessee — residential,
            commercial, and new construction.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CREW_PHOTOS.map((item, i) => (
            <Reveal key={item.photo} delay={i * 0.06}>
              <PhotoCard src={item.photo} alt={item.label} position={item.position} />
            </Reveal>
          ))}
        </div>

        {/* Before & After */}
        <Reveal className="mx-auto mt-24 max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <ArrowRightLeft className="h-5 w-5 text-fire-500" />
            <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
              Before &amp; After
            </span>
          </div>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            See the Difference
          </h2>
          <p className="mt-4 text-cream-300">
            Old, worn-out equipment out — clean, efficient systems in.
            Here&apos;s what that looks like.
          </p>
        </Reveal>

        <div className="mt-12 space-y-12">
          {BEFORE_AFTER.map((job, i) => (
            <Reveal key={job.title} delay={i * 0.1}>
              <div className="rounded-3xl border border-earth-700/40 bg-navy-950/50 p-5 sm:p-8">
                <h3 className="text-lg font-bold text-cream-50">{job.title}</h3>
                <p className="mt-1 text-sm text-cream-300">{job.description}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-400">
                      Before
                    </span>
                    <PhotoCard
                      src={job.before.photo}
                      alt={`Before — ${job.title}`}
                      position={job.before.position}
                    />
                  </div>
                  <div>
                    <span className="mb-2 inline-block rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                      After
                    </span>
                    <PhotoCard
                      src={job.after.photo}
                      alt={`After — ${job.title}`}
                      position={job.after.position}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
