import type { Metadata } from "next";
import { AlertTriangle, Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CtaButtons from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "5 Signs It's Time to Replace Your HVAC System",
  description:
    "Not sure if you need a repair or a full replacement? Here are the telltale signs your system is on its last legs.",
};

const SIGNS = [
  {
    title: "Your system is 15+ years old",
    detail:
      "Most HVAC systems last 15–20 years with proper maintenance. Once yours is past that mark, repairs start costing more than they're worth and efficiency drops significantly.",
  },
  {
    title: "Repairs are getting more frequent",
    detail:
      "If you've called for service three or more times in the past year, those repair bills are adding up. At a certain point, a new system pays for itself in avoided repairs.",
  },
  {
    title: "Your energy bills keep climbing",
    detail:
      "An aging system works harder to maintain the same temperature, burning more energy. If your bills are rising but your usage hasn't changed, your system may be losing efficiency.",
  },
  {
    title: "Some rooms are too hot or too cold",
    detail:
      "Uneven temperatures usually mean your system can no longer distribute air effectively. This could be the unit itself, the ductwork, or both.",
  },
  {
    title: "Strange noises or smells",
    detail:
      "Banging, rattling, grinding, or musty smells coming from your system are signs of serious wear. These often mean components are failing or mold is growing in the unit.",
  },
];

export default function BlogPostPage() {
  return (
    <article className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-xs text-cream-300/60">
            <Calendar className="h-3.5 w-3.5" />
            April 15, 2026
          </div>
          <h1 className="font-display mt-3 text-3xl font-extrabold text-cream-50 sm:text-4xl">
            5 Signs It&apos;s Time to Replace Your HVAC System
          </h1>
          <p className="mt-5 text-lg text-cream-300">
            Nobody wants to hear they need a new HVAC system. But catching it
            early saves you from a mid-summer breakdown — and from pouring
            money into a unit that&apos;s past the point of no return.
          </p>
        </Reveal>

        <div className="mt-10 space-y-8">
          {SIGNS.map((sign, i) => (
            <Reveal key={sign.title} delay={i * 0.08}>
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fire-500/15 text-sm font-bold text-fire-500">
                  {i + 1}
                </div>
                <div>
                  <h2 className="text-base font-bold text-cream-50">{sign.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-cream-300">{sign.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10">
          <div className="rounded-2xl border border-earth-700/40 bg-navy-900/60 p-6">
            <div className="flex items-center gap-2 text-fire-500">
              <AlertTriangle className="h-5 w-5" />
              <h3 className="font-bold">Not sure? We&apos;ll tell you straight.</h3>
            </div>
            <p className="mt-2 text-sm text-cream-300">
              We never recommend a replacement unless it&apos;s truly the best
              option. Call us for an honest assessment — if a repair makes
              more sense, that&apos;s what we&apos;ll tell you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.5} className="mt-10">
          <CtaButtons />
        </Reveal>
      </div>
    </article>
  );
}
