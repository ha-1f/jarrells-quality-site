import type { Metadata } from "next";
import { Star } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what Middle Tennessee homeowners say about Jarrell's Quality HVAC repair, installation, and maintenance service.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What Our Customers Say"
        description="Honest work earns honest reviews. Here's a sample of feedback from homeowners we've served."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <GlowCard className="h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-5 text-sm font-semibold text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-500">{t.location}</div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
