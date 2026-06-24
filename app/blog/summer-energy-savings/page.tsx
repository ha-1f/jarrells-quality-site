import type { Metadata } from "next";
import { Lightbulb, Calendar } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CtaButtons from "@/components/ui/CtaButtons";

export const metadata: Metadata = {
  title: "How to Lower Your Energy Bill This Summer",
  description:
    "Practical tips from our technicians to keep your home cool without running up your electric bill in the Tennessee heat.",
};

const TIPS = [
  {
    title: "Change your air filter",
    detail:
      "A dirty filter forces your system to work harder. Swap it out every 1–3 months — it's the single easiest thing you can do to improve efficiency.",
  },
  {
    title: "Set your thermostat to 78°F when you're home",
    detail:
      "Every degree below 78 increases your energy use by about 3%. Use a programmable or smart thermostat to bump it up when you're away.",
  },
  {
    title: "Keep blinds and curtains closed during peak sun",
    detail:
      "Direct sunlight through windows can raise a room's temperature by 10–20 degrees. Blocking it out reduces the load on your AC.",
  },
  {
    title: "Don't close vents in unused rooms",
    detail:
      "Closing vents creates pressure imbalances that make your system work harder. Keep them open for even airflow throughout the house.",
  },
  {
    title: "Schedule a spring tune-up",
    detail:
      "A professional tune-up catches small issues before they become expensive problems and keeps your system running at peak efficiency all summer.",
  },
  {
    title: "Seal leaks around doors and windows",
    detail:
      "Cool air escaping through gaps means your system runs longer to maintain temperature. Weatherstripping and caulk are cheap fixes with big payoff.",
  },
];

export default function BlogPostPage() {
  return (
    <article className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-xs text-cream-300/60">
            <Calendar className="h-3.5 w-3.5" />
            May 20, 2026
          </div>
          <h1 className="font-display mt-3 text-3xl font-extrabold text-cream-50 sm:text-4xl">
            How to Lower Your Energy Bill This Summer
          </h1>
          <p className="mt-5 text-lg text-cream-300">
            Tennessee summers are no joke. Here are practical, proven ways
            to stay comfortable without dreading your next power bill.
          </p>
        </Reveal>

        <div className="mt-10 space-y-8">
          {TIPS.map((tip, i) => (
            <Reveal key={tip.title} delay={i * 0.06}>
              <div className="flex items-start gap-4">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-tan-400" />
                <div>
                  <h2 className="text-base font-bold text-cream-50">{tip.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-cream-300">{tip.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10">
          <CtaButtons />
        </Reveal>
      </div>
    </article>
  );
}
