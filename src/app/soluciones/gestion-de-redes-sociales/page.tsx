import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["gestion-de-redes-sociales"];

export const metadata: Metadata = createServiceMetadata(service);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Gestión profesional de redes sociales",
      serviceType: "Social Media Management",
      provider: { "@id": "https://socialmarketingchile.cl/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
      url: "https://socialmarketingchile.cl/soluciones/gestion-de-redes-sociales",
      inLanguage: "es-CL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio",
          item: "https://socialmarketingchile.cl" },
        { "@type": "ListItem", position: 2, name: "Soluciones",
          item: "https://socialmarketingchile.cl/soluciones" },
        { "@type": "ListItem", position: 3, name: "Gestión de Redes Sociales",
          item: "https://socialmarketingchile.cl/soluciones/gestion-de-redes-sociales" },
      ],
    },
  ],
};

export default function GestionDeRedesSocialesPage() {
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
