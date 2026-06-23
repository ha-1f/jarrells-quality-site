import type { Metadata } from "next";
import { Star, ThumbsUp } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CtaButtons from "@/components/ui/CtaButtons";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS, REVIEW_AGGREGATE } from "@/lib/site-config";

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
        description="Honest work earns honest reviews. Here's real feedback from homeowners we've served."
      >
        <CtaButtons className="mt-8" />
      </PageHero>

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-8">
          <Reveal className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3">
            <ThumbsUp className="h-5 w-5 text-cyan-300" />
            <span className="text-sm text-zinc-300">
              <span className="font-bold text-white">
                {REVIEW_AGGREGATE.percentRecommend}% recommend
              </span>{" "}
              us on {REVIEW_AGGREGATE.source} ({REVIEW_AGGREGATE.reviewCount}{" "}
              reviews)
            </span>
          </Reveal>

          <div className="mt-8 grid gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={0.1 + i * 0.08}>
                <GlowCard className="h-full">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-7 text-zinc-300">
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

          <Reveal delay={0.2} className="mt-8 text-center">
            <p className="text-sm text-zinc-500">
              More reviews are on the way — check back soon, or leave us one
              on Facebook if you&apos;ve worked with us.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
