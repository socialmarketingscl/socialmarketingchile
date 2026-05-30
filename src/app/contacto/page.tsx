import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: {
    absolute: "Contacto | Social Marketing — Agencia de Marketing Digital e IA en Chile",
  },
  description:
    "Agenda una reunión de diagnóstico gratuito con Social Marketing. Te ayudamos a evaluar tu situación digital y encontrar oportunidades reales de crecimiento.",
  alternates: {
    canonical: "https://socialmarketingchile.cl/contacto",
  },
  openGraph: {
    title: "Contacto | Social Marketing — Agencia de Marketing Digital e IA en Chile",
    description:
      "Agenda una reunión de diagnóstico gratuito con Social Marketing. Te ayudamos a evaluar tu situación digital y encontrar oportunidades reales de crecimiento.",
    type: "website",
    url: "https://socialmarketingchile.cl/contacto",
  },
};

export default function ContactoPage() {
  return <ContactoClient />;
}
