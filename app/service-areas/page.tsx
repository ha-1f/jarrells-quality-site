import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Jarrell's Quality provides HVAC repair, installation, and maintenance across Murfreesboro, Smyrna, La Vergne, Nashville, Franklin, and surrounding Middle Tennessee communities.",
};

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Serving Middle Tennessee"
        description="Local, responsive HVAC service across the greater Murfreesboro area and beyond."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SITE.serviceAreas.map((area, i) => (
              <Reveal key={area} delay={i * 0.05}>
                <GlowCard className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-cyan-300" />
                  <span className="text-sm font-semibold text-white">
                    {area}, TN
                  </span>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="text-sm text-zinc-400">
              Don&apos;t see your town listed? Call or text{" "}
              <a href={SITE.phoneTel} className="font-semibold text-cyan-300">
                {SITE.phoneDisplay}
              </a>{" "}
              — we cover the surrounding area too.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
