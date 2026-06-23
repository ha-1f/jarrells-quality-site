import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import GlowCard from "@/components/ui/GlowCard";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "HVAC tips, maintenance guides, and seasonal advice from Jarrell's Quality.",
};

const POSTS = [
  {
    slug: "hvac-maintenance-checklist",
    title: "The Homeowner's HVAC Maintenance Checklist",
    excerpt:
      "Simple, regular maintenance steps that extend the life of your system and help you avoid costly mid-season breakdowns.",
    date: "2026-03-01",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="HVAC Tips & Guides"
        description="Practical advice from our technicians to help you get more out of your heating and cooling system."
      />

      <section className="bg-navy-900 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="space-y-6">
            {POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`}>
                  <GlowCard className="group">
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2 className="mt-3 text-xl font-bold text-white">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 transition-transform group-hover:translate-x-1">
                      Read more <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </GlowCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
