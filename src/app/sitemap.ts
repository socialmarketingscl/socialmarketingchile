import type { MetadataRoute } from "next";
import { SERVICE_LINKS } from "@/lib/services";

const SITE_URL = "https://socialmarketingchile.cl";
// Actualizar esta fecha solo cuando el despliegue incluya cambios reales de contenido.
const SITE_LAST_MODIFIED = "2026-05-29";
const LAST_MODIFIED = new Date(SITE_LAST_MODIFIED);

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/soluciones", priority: 0.9 },
  { path: "/como-trabajamos", priority: 0.8 },
  { path: "/nosotros", priority: 0.7 },
  { path: "/resultados", priority: 0.8 },
  { path: "/contacto", priority: 0.9 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...SERVICE_LINKS.map((service) => ({
      url: `${SITE_URL}${service.href}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
