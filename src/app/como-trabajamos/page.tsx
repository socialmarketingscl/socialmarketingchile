import type { Metadata } from "next";
import ComoTrabajamosClient from "./ComoTrabajamosClient";

export const metadata: Metadata = {
  title: {
    absolute: "Cómo Trabajamos | Social Marketing — Proceso de Marketing Digital e IA",
  },
  description:
    "Conoce el proceso de trabajo de Social Marketing: diagnóstico, propuesta personalizada, ejecución y optimización continua. Sin paquetes genéricos.",
  alternates: {
    canonical: "https://socialmarketingchile.cl/como-trabajamos",
  },
  openGraph: {
    title: "Cómo Trabajamos | Social Marketing — Proceso de Marketing Digital e IA",
    description:
      "Conoce el proceso de trabajo de Social Marketing: diagnóstico, propuesta personalizada, ejecución y optimización continua. Sin paquetes genéricos.",
    type: "website",
    url: "https://socialmarketingchile.cl/como-trabajamos",
  },
};

export default function ComoTrabajamosPage() {
  return <ComoTrabajamosClient />;
}
