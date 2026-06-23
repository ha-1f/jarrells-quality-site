import { CheckCircle2 } from "lucide-react";
import type { ServiceMeta } from "@/lib/site-config";
import { SERVICES } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import ServiceIcon from "@/components/ui/ServiceIcon";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import FaqSection from "@/components/sections/FaqSection";
import EmergencyCTA from "@/components/sections/EmergencyCTA";
import Link from "next/link";

export default function ServiceDetail({ service }: { service: ServiceMeta }) {
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.summary}
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-8">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-orange-400/20">
                <ServiceIcon icon={service.icon} className="h-7 w-7 text-cyan-300" />
              </div>
              <h2 className="font-display mt-6 text-2xl font-bold text-white">
                What&apos;s Included
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm text-zinc-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
              Related Services
            </span>
            <h2 className="font-display mt-3 text-3xl font-bold text-white">
              You Might Also Need
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link href={s.href}>
                  <GlowCard className="h-full">
                    <ServiceIcon icon={s.icon} className="h-6 w-6 text-cyan-300" />
                    <h3 className="mt-4 text-base font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400">{s.summary}</p>
                  </GlowCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
      <EmergencyCTA />
    </>
  );
}
