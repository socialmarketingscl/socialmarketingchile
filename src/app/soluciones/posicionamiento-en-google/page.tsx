import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["posicionamiento-en-google"];

export const metadata: Metadata = createServiceMetadata(service);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Posicionamiento en Google e inteligencia artificial",
      serviceType: "Search Engine Optimization",
      provider: { "@id": "https://socialmarketingchile.cl/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
      url: "https://socialmarketingchile.cl/soluciones/posicionamiento-en-google",
      inLanguage: "es-CL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio",
          item: "https://socialmarketingchile.cl" },
        { "@type": "ListItem", position: 2, name: "Soluciones",
          item: "https://socialmarketingchile.cl/soluciones" },
        { "@type": "ListItem", position: 3, name: "Posicionamiento en Google e IA",
          item: "https://socialmarketingchile.cl/soluciones/posicionamiento-en-google" },
      ],
    },
  ],
};

export default function PosicionamientoEnGooglePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServicePageTemplate {...service} />
    </>
  );
}
