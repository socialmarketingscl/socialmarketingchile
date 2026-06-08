import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["estrategia-y-consultoria"];

export const metadata: Metadata = createServiceMetadata(service);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Estrategia y consultoría de marketing digital",
      serviceType: "Marketing Consulting",
      provider: { "@id": "https://socialmarketingchile.cl/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
      url: "https://socialmarketingchile.cl/soluciones/estrategia-y-consultoria",
      inLanguage: "es-CL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio",
          item: "https://socialmarketingchile.cl" },
        { "@type": "ListItem", position: 2, name: "Soluciones",
          item: "https://socialmarketingchile.cl/soluciones" },
        { "@type": "ListItem", position: 3, name: "Estrategia y Consultoría",
          item: "https://socialmarketingchile.cl/soluciones/estrategia-y-consultoria" },
      ],
    },
  ],
};

export default function EstrategiaYConsultoriaPage() {
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
