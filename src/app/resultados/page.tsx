import type { Metadata } from "next";
import ResultadosClient from "./ResultadosClient";

export const metadata: Metadata = {
  title: {
    absolute: "Resultados — Casos de Éxito | Social Marketing",
  },
  description:
    "Casos reales en Santiago: Ríos Eventos +56% en eventos, Destapes Oriente +$3 millones facturados en 3 meses partiendo de 0 ventas, Amore +4.617 seguidores.",
  alternates: {
    canonical: "/resultados",
  },
  openGraph: {
    title: "Resultados — Casos de Éxito | Social Marketing",
    description:
      "Casos reales en Santiago: Ríos Eventos +56% en eventos, Destapes Oriente +$3 millones facturados en 3 meses partiendo de 0 ventas, Amore +4.617 seguidores.",
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
