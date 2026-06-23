import type { MetadataRoute } from "next";
import { SITE, SERVICES } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const staticRoutes = [
    "",
    "/services",
    "/maintenance-plans",
    "/financing",
    "/about",
    "/reviews",
    "/service-areas",
    "/blog",
    "/blog/hvac-maintenance-checklist",
    "/contact",
  ];

  const serviceRoutes = SERVICES.map((s) => s.href);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
