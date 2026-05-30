import type { Metadata } from "next";
import SolucionesIndexClient from "./SolucionesIndexClient";

export const metadata: Metadata = {
  title: {
    absolute: "Soluciones | Social Marketing — Marketing Digital e IA en Chile",
  },
  description:
    "Soluciones de marketing digital, publicidad, SEO, redes sociales, branding y sistemas de ventas con IA para empresas en Chile.",
  alternates: {
    canonical: "https://socialmarketingchile.cl/soluciones",
  },
  openGraph: {
    title: "Soluciones | Social Marketing — Marketing Digital e IA en Chile",
    description:
      "Soluciones de marketing digital, publicidad, SEO, redes sociales, branding y sistemas de ventas con IA para empresas en Chile.",
    type: "website",
    url: "https://socialmarketingchile.cl/soluciones",
  },
};

export default function SolucionesPage() {
  return <SolucionesIndexClient />;
}
