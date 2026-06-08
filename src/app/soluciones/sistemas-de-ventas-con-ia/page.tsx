import type { Metadata } from "next";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { createServiceMetadata, SERVICE_PAGES } from "@/lib/services";

const service = SERVICE_PAGES["sistemas-de-ventas-con-ia"];

export const metadata: Metadata = createServiceMetadata(service);

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Sistemas de ventas y conversión con inteligencia artificial",
      serviceType: "Marketing Automation",
      provider: { "@id": "https://socialmarketingchile.cl/#organization" },
      areaServed: { "@type": "Country", name: "Chile" },
      url: "https://socialmarketingchile.cl/soluciones/sistemas-de-ventas-con-ia",
      inLanguage: "es-CL",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio",
          item: "https://socialmarketingchile.cl" },
        { "@type": "ListItem", position: 2, name: "Soluciones",
          item: "https://socialmarketingchile.cl/soluciones" },
        { "@type": "ListItem", position: 3, name: "Sistemas de Ventas con IA",
          item: "https://socialmarketingchile.cl/soluciones/sistemas-de-ventas-con-ia" },
      ],
    },
  ],
};

export default function SistemasDeVentasConIAPage() {
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
