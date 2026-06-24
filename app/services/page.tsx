import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/sections/FaqSection";
import EmergencyCTA from "@/components/sections/EmergencyCTA";
import { SERVICES } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "HVAC Services",
  description:
    "AC repair, AC installation, heating, heat pumps, and indoor air quality services from Jarrell's Quality — licensed, insured, and local.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="HVAC Services Built Around Your Comfort"
        description="From emergency repairs to full system installs, Jarrell's Quality handles residential, commercial, and new construction HVAC across Middle Tennessee."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.08}>
                <Link href={service.href}>
                  <GlowCard className="group h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-orange-400/20">
                      <ServiceIcon
                        icon={service.icon}
                        className="h-6 w-6 text-cyan-300"
                      />
                    </div>
                    <h2 className="mt-5 text-lg font-bold text-white">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {service.summary}
                    </p>
                    <ul className="mt-4 space-y-1.5">
                      {service.bullets.slice(0, 2).map((b) => (
                        <li key={b} className="text-xs text-zinc-500">
                          • {b}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-transform group-hover:translate-x-1">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </GlowCard>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <Link href="/maintenance-plans">
                <GlowCard glow="fire" className="group h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400/20 to-cyan-400/20">
                    <ServiceIcon icon="wrench" className="h-6 w-6 text-orange-400" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-white">
                    Maintenance Plans
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    Seasonal tune-ups and priority scheduling to keep small
                    issues from becoming expensive ones.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 transition-transform group-hover:translate-x-1">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </GlowCard>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection />
      <EmergencyCTA />
    </>
  );
}
