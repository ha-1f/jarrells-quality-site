import { Star, ThumbsUp } from "lucide-react";
import { TESTIMONIALS, REVIEW_AGGREGATE } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";

export default function Testimonials() {
  return (
    <section className="bg-forest-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-fire-500">
            Reviews
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            Trusted by Local Homeowners
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full border border-earth-700/40 bg-forest-900/60 px-6 py-3">
          <ThumbsUp className="h-5 w-5 text-tan-400" />
          <span className="text-sm text-cream-200">
            <span className="font-bold text-cream-50">
              {REVIEW_AGGREGATE.percentRecommend}% recommend
            </span>{" "}
            us on {REVIEW_AGGREGATE.source} ({REVIEW_AGGREGATE.reviewCount}{" "}
            reviews)
          </span>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-2xl gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.1 + i * 0.1}>
              <GlowCard className="h-full">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-fire-500 text-fire-500"
                    />
                  ))}
                </div>
                <p className="mt-4 text-base leading-7 text-cream-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 text-sm font-semibold text-cream-50">
                  {t.name}
                </div>
                <div className="text-xs text-cream-300/60">{t.location}</div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
