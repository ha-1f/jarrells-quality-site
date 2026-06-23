import { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-28">
      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-orange-500/15 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            {eyebrow}
          </span>
          <h1 className="font-display mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-zinc-400">{description}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
