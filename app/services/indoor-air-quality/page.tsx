import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { SERVICES } from "@/lib/site-config";

const service = SERVICES.find((s) => s.slug === "indoor-air-quality")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
  keywords: service.keywords,
};

export default function Page() {
  return <ServiceDetail service={service} />;
}
