import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/site-config";
import ServiceIcon from "@/components/ui/ServiceIcon";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";

export default function ServicesGrid() {
  return (
    <section id="services" className="relative bg-forest-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-fire-500">
            What We Do
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            Full-Service HVAC, Start to Finish
          </h2>
          <p className="mt-4 text-cream-300">
            From a quick repair to a full system replacement, our licensed
            technicians handle it all — residential, commercial, and new
            construction.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.08}>
              <Link href={service.href}>
                <GlowCard className="group h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-earth-800/50">
                    <ServiceIcon
                      icon={service.icon}
                      className="h-6 w-6 text-fire-500"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-cream-50">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-cream-300">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-fire-500 transition-transform group-hover:translate-x-1">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </GlowCard>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-earth-700/50 px-6 py-3 text-sm font-semibold text-cream-100 transition-colors hover:bg-earth-800/30"
          >
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
