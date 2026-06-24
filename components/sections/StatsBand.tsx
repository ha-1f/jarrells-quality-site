import { STATS } from "@/lib/site-config";
import StatCounter from "@/components/ui/StatCounter";

export default function StatsBand() {
  return (
    <section className="relative border-y border-earth-700/40 bg-forest-900 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
