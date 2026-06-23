import { Star, ThumbsUp } from "lucide-react";
import { TESTIMONIALS, REVIEW_AGGREGATE } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";

export default function Testimonials() {
  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-400">
            Reviews
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Trusted by Local Homeowners
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3">
          <ThumbsUp className="h-5 w-5 text-cyan-300" />
          <span className="text-sm text-zinc-300">
            <span className="font-bold text-white">
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
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                    />
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
      </div>
    </section>
  );
}
