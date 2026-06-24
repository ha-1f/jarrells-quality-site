import { HOW_IT_WORKS } from "@/lib/site-config";
import Reveal from "@/components/ui/Reveal";

export default function HowItWorks() {
  return (
    <section className="bg-woodgrain relative overflow-hidden border-y-4 border-earth-600/40 py-20 sm:py-24">
      <div className="bg-camo absolute inset-0 opacity-10" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-tan-400">
            Easy As 1-2-3
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold text-cream-50 sm:text-4xl">
            Scheduling With Us Is the Easy Part
          </h2>
          <p className="mt-4 text-cream-200/80">
            We kept it simple on purpose — no account, no runaround. Just
            tell us what&apos;s going on and we&apos;ll take it from there.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-fire-500 bg-forest-950 font-display text-2xl font-extrabold text-fire-500">
                {step.step}
              </div>
              <h3 className="mt-5 text-lg font-bold text-cream-50">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-cream-200/70">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
