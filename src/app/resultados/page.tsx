import type { Metadata } from "next";
import ResultadosClient from "./ResultadosClient";

export const metadata: Metadata = {
  title: {
    absolute: "Resultados | Social Marketing — Casos Reales de Marketing Digital e IA",
  },
  description:
    "Conoce los resultados reales que hemos logrado con negocios en Chile. Casos de éxito en redes sociales, publicidad digital, branding y automatización.",
  alternates: {
    canonical: "https://socialmarketingchile.cl/resultados",
  },
  openGraph: {
    title: "Resultados | Social Marketing — Casos Reales de Marketing Digital e IA",
    description:
      "Conoce los resultados reales que hemos logrado con negocios en Chile. Casos de éxito en redes sociales, publicidad digital, branding y automatización.",
    type: "website",
    url: "https://socialmarketingchile.cl/resultados",
  },
};

export default function ResultadosPage() {
  return <ResultadosClient />;
}
