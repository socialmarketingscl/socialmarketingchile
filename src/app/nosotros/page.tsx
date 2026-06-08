import type { Metadata } from "next";
import NosotrosClient from "./NosotrosClient";

export const metadata: Metadata = {
  title: {
    absolute: "Nosotros — Social Marketing Chile",
  },
  description:
    "Conoce a Social Marketing: la agencia que integra marketing digital e IA para ayudar a negocios a captar, ordenar y convertir clientes en Chile.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Nosotros — Social Marketing Chile",
    description:
      "Conoce a Social Marketing: la agencia que integra marketing digital e IA para ayudar a negocios a captar, ordenar y convertir clientes en Chile.",
    type: "website",
    url: "/nosotros",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",
      "item": "https://socialmarketingchile.cl" },
    { "@type": "ListItem", "position": 2, "name": "Nosotros",
      "item": "https://socialmarketingchile.cl/nosotros" }
  ]
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <NosotrosClient />
    </>
  );
}
