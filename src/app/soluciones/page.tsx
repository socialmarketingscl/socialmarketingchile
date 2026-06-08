import type { Metadata } from "next";
import SolucionesIndexClient from "./SolucionesIndexClient";

export const metadata: Metadata = {
  title: {
    absolute: "Soluciones de Marketing Digital e IA | Social Marketing",
  },
  description:
    "Estrategia, publicidad digital, SEO, redes sociales, branding y sistemas de ventas con IA. Soluciones diseñadas para hacer crecer tu negocio.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title: "Soluciones de Marketing Digital e IA | Social Marketing",
    description:
      "Estrategia, publicidad digital, SEO, redes sociales, branding y sistemas de ventas con IA. Soluciones diseñadas para hacer crecer tu negocio.",
    type: "website",
    url: "/soluciones",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",
      "item": "https://socialmarketingchile.cl" },
    { "@type": "ListItem", "position": 2, "name": "Soluciones",
      "item": "https://socialmarketingchile.cl/soluciones" }
  ]
};

export default function SolucionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <SolucionesIndexClient />
    </>
  );
}
