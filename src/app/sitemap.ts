import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/recursos";
import { SERVICE_PAGES } from "@/lib/services";

const BASE_URL = "https://socialmarketingchile.cl";

/* Fechas reales de la última modificación de contenido de cada página.
   Actualízalas cuando cambie el contenido de la página (no en cada deploy). */
const PAGES: { path: string; lastModified: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", lastModified: "2026-11-19", priority: 1, changeFrequency: "weekly" },
  { path: "/soluciones", lastModified: "2026-11-19", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contacto", lastModified: "2026-11-19", priority: 0.9, changeFrequency: "monthly" },
  { path: "/resultados", lastModified: "2026-11-19", priority: 0.85, changeFrequency: "monthly" },
  { path: "/como-trabajamos", lastModified: "2026-11-18", priority: 0.8, changeFrequency: "monthly" },
  { path: "/guia-ia-pymes", lastModified: "2026-11-19", priority: 0.8, changeFrequency: "monthly" },
  { path: "/recursos", lastModified: "2026-11-19", priority: 0.8, changeFrequency: "weekly" },
  { path: "/nosotros", lastModified: "2026-09-02", priority: 0.7, changeFrequency: "monthly" },
  { path: "/politica-de-privacidad", lastModified: "2026-09-02", priority: 0.3, changeFrequency: "yearly" },
];

const SERVICES_LAST_MODIFIED = "2026-11-19";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((page) => ({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(`${page.lastModified}T12:00:00Z`),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...Object.values(SERVICE_PAGES).map((service) => ({
      url: `${BASE_URL}${service.href}`,
      lastModified: new Date(`${SERVICES_LAST_MODIFIED}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...ARTICLES.map((article) => ({
      url: `${BASE_URL}/recursos/${article.slug}`,
      lastModified: new Date(`${article.updated}T12:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
