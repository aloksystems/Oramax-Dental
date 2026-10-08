import type { MetadataRoute } from "next";
import { siteUrl, services } from "@/data/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/appointment",
    "/contact",
    "/location",
    "/privacy-policy",
    "/disclaimer",
  ];
  const serviceRoutes = services
    .filter((s) => s.enabled)
    .map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services/") ? 0.7 : 0.8,
  }));
}
