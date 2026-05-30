import type { Metadata } from "next";
import NosotrosClient from "./NosotrosClient";

export const metadata: Metadata = {
  title: {
    absolute: "Nosotros | Social Marketing — Agencia de Marketing Digital e IA en Santiago, Chile",
  },
  description:
    "Conoce a Social Marketing: una agencia que integra marketing digital, inteligencia artificial y automatización comercial para ayudar a negocios a captar, ordenar y convertir clientes.",
  alternates: {
    canonical: "https://socialmarketingchile.cl/nosotros",
  },
  openGraph: {
    title: "Nosotros | Social Marketing — Agencia de Marketing Digital e IA en Santiago, Chile",
    description:
      "Conoce a Social Marketing: una agencia que integra marketing digital, inteligencia artificial y automatización comercial para ayudar a negocios a captar, ordenar y convertir clientes.",
    type: "website",
    url: "https://socialmarketingchile.cl/nosotros",
  },
};

export default function NosotrosPage() {
  return <NosotrosClient />;
}
