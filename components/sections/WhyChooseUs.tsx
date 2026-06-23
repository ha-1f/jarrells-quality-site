import { ShieldCheck, Heart, Banknote, Timer } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import GlowCard from "@/components/ui/GlowCard";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Peace of mind on every single job, big or small.",
  },
  {
    icon: Heart,
    title: "Family Owned & Operated",
    description: "We treat your home the way we'd treat our own.",
  },
  {
    icon: Banknote,
    title: "Honest, Upfront Pricing",
    description: "You'll know the cost before any work begins. No surprises.",
  },
  {
    icon: Timer,
    title: "Prompt, Reliable Service",
    description: "We respect your time and show up when we say we will.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-navy-950 to-navy-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Why Choose Us
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
            Quality You Can Count On
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <GlowCard glow="orange" className="h-full text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-400/15">
                  <item.icon className="h-6 w-6 text-orange-400" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
