import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
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
    category: "Maintenance",
  },
  {
    slug: "when-to-replace-hvac",
    title: "5 Signs It's Time to Replace Your HVAC System",
    excerpt:
      "Not sure if you need a repair or a full replacement? Here are the telltale signs your system is on its last legs.",
    date: "2026-04-15",
    category: "Guides",
  },
  {
    slug: "summer-energy-savings",
    title: "How to Lower Your Energy Bill This Summer",
    excerpt:
      "Practical tips from our technicians to keep your home cool without running up your electric bill in the Tennessee heat.",
    date: "2026-05-20",
    category: "Tips",
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

      <section className="bg-forest-900 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <Reveal className="mb-10 flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-fire-500" />
            <h2 className="text-lg font-bold text-cream-50">Latest Articles</h2>
          </Reveal>
          <div className="space-y-6">
            {POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`}>
                  <GlowCard className="group">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-camo-600/20 px-3 py-1 text-xs font-semibold text-camo-400">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-cream-300/60">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <h2 className="mt-3 text-xl font-bold text-cream-50">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-cream-300">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-fire-500 transition-transform group-hover:translate-x-1">
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
