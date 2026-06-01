/* Home — Social Marketing Chile
   Pasos 3 + 4: Secciones 1–9 completas
   ─────────────────────────────────────────────────────────
   1. HeroSection          → #0A0F1A + glow + circuito SVG (exclusivo)
   2. ProblemaComercial    → #0F172A (level-2) + 4 pain cards
   3. Diagnóstico          → #F8FAFC (light) — quiebre visual
   4. ComoTrabajamos       → #0A0F1A (level-1) + timeline
   5. Soluciones           → #0F172A + 6 servicios en grid
   6. MarketingIA          → #0A0F1A + 3 columnas + AEO
   7. Resultados           → #0F172A + testimoniales + métricas
   8. ParaQuién            → #F8FAFC (light) — segundo quiebre
   9. CTAFinal             → #0A0F1A + glow lime centrado
   ─────────────────────────────────────────────────────────
   El circuito SVG está SOLO en HeroSection (regla de diseño).
*/

import HeroSection from "@/components/sections/HeroSection";
import dynamic from "next/dynamic";

/* Below-fold sections: dynamic imports for code splitting.
   SSR is kept (default) so search engines index all content.
   The loading fallback is only shown during client-side navigation. */

const ProblemaComercialSection = dynamic(
  () => import("@/components/sections/ProblemaComercialSection"),
  { loading: () => <div style={{ minHeight: "600px", backgroundColor: "#0F172A" }} /> },
);

const DiagnosticoSection = dynamic(
  () => import("@/components/sections/DiagnosticoSection"),
  { loading: () => <div style={{ minHeight: "600px", backgroundColor: "#F8FAFC" }} /> },
);

const ComoTrabajamosSection = dynamic(
  () => import("@/components/sections/ComoTrabajamosSection"),
  { loading: () => <div style={{ minHeight: "700px", backgroundColor: "#0A0F1A" }} /> },
);

const SolucionesSection = dynamic(
  () => import("@/components/sections/SolucionesSection"),
  { loading: () => <div style={{ minHeight: "800px", backgroundColor: "#0F172A" }} /> },
);

const MarketingIASection = dynamic(
  () => import("@/components/sections/MarketingIASection"),
  { loading: () => <div style={{ minHeight: "600px", backgroundColor: "#0A0F1A" }} /> },
);

const ResultadosSection = dynamic(
  () => import("@/components/sections/ResultadosSection"),
  { loading: () => <div style={{ minHeight: "800px", backgroundColor: "#F8FAFC" }} /> },
);

const ParaQuienSection = dynamic(
  () => import("@/components/sections/ParaQuienSection"),
  { loading: () => <div style={{ minHeight: "600px", backgroundColor: "#F8FAFC" }} /> },
);

const CTAFinalSection = dynamic(
  () => import("@/components/sections/CTAFinalSection"),
  { loading: () => <div style={{ minHeight: "400px", backgroundColor: "#0A0F1A" }} /> },
);

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemaComercialSection />
      <DiagnosticoSection />
      <ComoTrabajamosSection />
      <SolucionesSection />
      <MarketingIASection />
      <ResultadosSection />
      <ParaQuienSection />
      <CTAFinalSection />
    </main>
  );
}
