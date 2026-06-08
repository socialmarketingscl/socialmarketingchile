import type { Metadata } from "next";
import ComoTrabajamosClient from "./ComoTrabajamosClient";

export const metadata: Metadata = {
  title: {
    absolute: "Cómo Trabajamos — Nuestro Proceso | Social Marketing",
  },
  description:
    "Conoce el proceso de trabajo de Social Marketing: desde el diagnóstico hasta la implementación del sistema de captación y conversión.",
  alternates: {
    canonical: "/como-trabajamos",
  },
  openGraph: {
    title: "Cómo Trabajamos — Nuestro Proceso | Social Marketing",
    description:
      "Conoce el proceso de trabajo de Social Marketing: desde el diagnóstico hasta la implementación del sistema de captación y conversión.",
    type: "website",
    url: "/como-trabajamos",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",
      "item": "https://socialmarketingchile.cl" },
    { "@type": "ListItem", "position": 2, "name": "Cómo Trabajamos",
      "item": "https://socialmarketingchile.cl/como-trabajamos" }
  ]
};

export default function ComoTrabajamosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ComoTrabajamosClient />
    </>
  );
}
