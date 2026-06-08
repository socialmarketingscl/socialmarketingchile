import type { Metadata } from "next";
import ResultadosClient from "./ResultadosClient";

export const metadata: Metadata = {
  title: {
    absolute: "Resultados — Casos de Éxito | Social Marketing",
  },
  description:
    "Casos reales: Ríos Eventos +56% en eventos, Gasfitería y Destapes +627% en alcance, Amore +4.617 seguidores. Marketing digital que funciona.",
  alternates: {
    canonical: "/resultados",
  },
  openGraph: {
    title: "Resultados — Casos de Éxito | Social Marketing",
    description:
      "Casos reales: Ríos Eventos +56% en eventos, Gasfitería y Destapes +627% en alcance, Amore +4.617 seguidores. Marketing digital que funciona.",
    type: "website",
    url: "/resultados",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",
      "item": "https://socialmarketingchile.cl" },
    { "@type": "ListItem", "position": 2, "name": "Resultados",
      "item": "https://socialmarketingchile.cl/resultados" }
  ]
};

export default function ResultadosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ResultadosClient />
    </>
  );
}
