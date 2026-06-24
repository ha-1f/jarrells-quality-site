import Image from "next/image";
import { Users, ArrowRightLeft, Wrench, Wind, Video } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const CREW_PHOTOS = [
  { photo: "/photos/team-rooftop-commercial.jpg", label: "Commercial Rooftop Service", position: "center 40%" },
  { photo: "/photos/team-unit-service.jpg", label: "Unit Maintenance & Filter Work", position: "center 30%" },
  { photo: "/photos/team-condenser-repair.jpg", label: "Condenser Repair", position: "center 50%" },
  { photo: "/photos/team-mini-split-install.jpg", label: "Mini Split Installation", position: "center 40%" },
  { photo: "/photos/team-new-construction.jpg", label: "New Construction HVAC", position: "center 50%" },
  { photo: "/photos/unit-winter-emergency-repair.jpg", label: "Winter Emergency Repair", position: "center 50%" },
  { photo: "/photos/unit-air-handler-attic.jpg", label: "Attic Air Handler Install", position: "center 40%" },
  { photo: "/photos/unit-mini-split-temp-reading.jpg", label: "Mini Split Temp Check — 42°F", position: "center 50%" },
];

const INSTALL_PHOTOS = [
  { photo: "/photos/unit-goodman-condenser-new.jpg", label: "Goodman Condenser Install", position: "center 50%" },
  { photo: "/photos/unit-goodman-package-red.jpg", label: "Goodman Package Unit", position: "center 50%" },
  { photo: "/photos/unit-oxbox-condenser.jpg", label: "Oxbox Condenser Install", position: "center 50%" },
  { photo: "/photos/unit-oxbox-condenser-brick.jpg", label: "Oxbox Condenser — Residential", position: "center 50%" },
  { photo: "/photos/unit-mrcool-mini-split.jpg", label: "MrCool Mini Split", position: "center 50%" },
  { photo: "/photos/unit-mitsubishi-mini-split.jpg", label: "Mitsubishi Mini Split", position: "center 50%" },
  { photo: "/photos/unit-concord-package.jpg", label: "Concord Package Unit", position: "center 50%" },
  { photo: "/photos/unit-concord-package2.jpg", label: "Concord Package Unit", position: "center 50%" },
  { photo: "/photos/unit-oxbox-new-construction.jpg", label: "New Construction — Oxbox", position: "center 50%" },
  { photo: "/photos/unit-package-new-construction.jpg", label: "New Construction Package Unit", position: "center 50%" },
  { photo: "/photos/unit-multi-unit-commercial.jpg", label: "Multi-Unit Commercial Install", position: "center 40%" },
  { photo: "/photos/unit-dual-system-commercial.jpg", label: "Dual System — Commercial", position: "center 50%" },
  { photo: "/photos/unit-condenser-brick2.jpg", label: "Condenser Install — Residential", position: "center 50%" },
];

const DUCT_PHOTOS = [
  { photo: "/photos/duct-crawlspace-1.jpg", label: "Crawlspace Ductwork", position: "center 50%" },
  { photo: "/photos/duct-crawlspace-2.jpg", label: "Crawlspace Duct Run", position: "center 50%" },
  { photo: "/photos/duct-crawlspace-3.jpg", label: "Crawlspace Flex Duct Install", position: "center 50%" },
  { photo: "/photos/duct-crawlspace-4.jpg", label: "Crawlspace Duct System", position: "center 50%" },
  { photo: "/photos/duct-crawlspace-5.jpg", label: "Crawlspace Duct Routing", position: "center 50%" },
  { photo: "/photos/duct-crawlspace-6.jpg", label: "Crawlspace Trunk Line", position: "center 50%" },
  { photo: "/photos/duct-crawlspace-7.jpg", label: "Crawlspace Duct & Plenum", position: "center 50%" },
  { photo: "/photos/duct-newconstruction-1.jpg", label: "New Construction — Attic Ductwork", position: "center 50%" },
  { photo: "/photos/duct-newconstruction-2.jpg", label: "New Construction — Duct Layout", position: "center 50%" },
  { photo: "/photos/duct-newconstruction-3.jpg", label: "New Construction — Overhead Ducts", position: "center 50%" },
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
    description: "Replaced a worn-out condenser with a new Goodman unit — fresh install, ready to run.",
    before: { photo: "/photos/before-goodman-condenser.jpg", position: "center 50%" },
    after: { photo: "/photos/after-goodman-condenser.jpg", position: "center 50%" },
  },
];

const VIDEOS = [
  { src: "/videos/spring-maintenance.mp4", label: "Spring Maintenance Visit" },
  { src: "/videos/job-complete-thumbsup.mp4", label: "Job Complete — Thumbs Up" },
];

function VideoCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-earth-700/40 bg-navy-950">
      <video
        src={src}
        controls
        playsInline
        preload="metadata"
        className="w-full"
      />
      <p className="px-4 py-3 text-sm font-medium text-cream-200">{label}</p>
    </div>
  );
}

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
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  eyebrow,
  title,
  description,
  className = "",
}: {
  icon: typeof Users;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <Reveal className={`mx-auto max-w-2xl text-center ${className}`}>
      <div className="flex items-center justify-center gap-2">
        <Icon className="h-5 w-5 text-fire-500" />
        <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-cream-300">{description}</p>
    </Reveal>
  );
}

export default function WorkGallery() {
  return (
    <section className="bg-navy-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">

        {/* Crew at Work */}
        <SectionHeader
          icon={Users}
          eyebrow="Our Crew at Work"
          title="Real Jobs, Real People"
          description="Our technicians on the job across Middle Tennessee — residential, commercial, and new construction."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CREW_PHOTOS.map((item, i) => (
            <Reveal key={item.photo} delay={i * 0.06}>
              <PhotoCard src={item.photo} alt={item.label} position={item.position} />
            </Reveal>
          ))}
        </div>

        {/* Completed Installs */}
        <SectionHeader
          icon={Wrench}
          eyebrow="Completed Installs"
          title="Equipment We Trust"
          description="Goodman, Oxbox, MrCool, Mitsubishi, Concord — we install the brands that last. Here's a look at our finished work."
          className="mt-28"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {INSTALL_PHOTOS.map((item, i) => (
            <Reveal key={item.photo} delay={i * 0.06}>
              <PhotoCard src={item.photo} alt={item.label} position={item.position} />
            </Reveal>
          ))}
        </div>

        {/* Ductwork */}
        <SectionHeader
          icon={Wind}
          eyebrow="Ductwork"
          title="Ducts Done Right"
          description="Crawlspace replacements, new construction installs — proper ductwork means proper airflow. Here's what ours looks like."
          className="mt-28"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DUCT_PHOTOS.map((item, i) => (
            <Reveal key={item.photo} delay={i * 0.06}>
              <PhotoCard src={item.photo} alt={item.label} position={item.position} />
            </Reveal>
          ))}
        </div>

        {/* Videos */}
        <SectionHeader
          icon={Video}
          eyebrow="From the Field"
          title="Videos from the Job"
          description="Quick clips from our crew out in the field — maintenance visits and finished installs."
          className="mt-28"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.1}>
              <VideoCard src={v.src} label={v.label} />
            </Reveal>
          ))}
        </div>

        {/* Before & After */}
        <SectionHeader
          icon={ArrowRightLeft}
          eyebrow="Before & After"
          title="See the Difference"
          description="Old, worn-out equipment out — clean, efficient systems in. Here's what that looks like."
          className="mt-28"
        />
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
