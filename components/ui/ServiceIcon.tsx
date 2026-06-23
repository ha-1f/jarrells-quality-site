import { Snowflake, Flame, Wind, Gauge, Leaf, Wrench } from "lucide-react";
import type { ServiceMeta } from "@/lib/site-config";

const ICONS = {
  snowflake: Snowflake,
  flame: Flame,
  wind: Wind,
  gauge: Gauge,
  leaf: Leaf,
  wrench: Wrench,
};

export default function ServiceIcon({
  icon,
  className,
}: {
  icon: ServiceMeta["icon"];
  className?: string;
}) {
  const Icon = ICONS[icon];
  return <Icon className={className} />;
}
