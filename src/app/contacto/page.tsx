import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: {
    absolute: "Contacto — Agenda tu Diagnóstico | Social Marketing",
  },
  description:
    "Agenda un diagnóstico gratuito con Social Marketing Chile en Vitacura. Sin compromiso. WhatsApp +56961533546 · administracion@socialmarketingchile.cl",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto — Agenda tu Diagnóstico | Social Marketing",
    description:
      "Agenda un diagnóstico gratuito con Social Marketing Chile en Vitacura. Sin compromiso. WhatsApp +56961533546 · administracion@socialmarketingchile.cl",
    type: "website",
    url: "/contacto",
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio",
      "item": "https://socialmarketingchile.cl" },
    { "@type": "ListItem", "position": 2, "name": "Contacto",
      "item": "https://socialmarketingchile.cl/contacto" }
  ]
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <ContactoClient />
    </>
  );
}
