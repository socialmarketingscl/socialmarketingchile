/* Home — Social Marketing Chile
   Pasos 3 + 4: Secciones 1–9 completas
   ─────────────────────────────────────────────────────────
   1. HeroSection          → #0A0F1A + imagen editorial + glow ambiental
   2. ProblemaComercial    → #0F172A (level-2) + 4 pain cards
   3. Diagnóstico          → #F8FAFC (light) — quiebre visual
   4. ComoTrabajamos       → #0A0F1A (level-1) + timeline
   5. Soluciones           → #0F172A + 6 servicios en grid
   6. MarketingIA          → #0A0F1A + 3 columnas + AEO
   7. Resultados           → #0F172A + testimoniales + métricas
   8. ParaQuién            → #F8FAFC (light) — segundo quiebre
   9. CTAFinal             → #0A0F1A + glow lime centrado
   ─────────────────────────────────────────────────────────
   Hero usa imagen real como recurso visual principal.
*/

import type { Metadata } from "next";
import HeroSection             from "@/components/sections/HeroSection";
import ProblemaComercialSection from "@/components/sections/ProblemaComercialSection";
import DiagnosticoSection       from "@/components/sections/DiagnosticoSection";
import ComoTrabajamosSection    from "@/components/sections/ComoTrabajamosSection";
import SolucionesSection        from "@/components/sections/SolucionesSection";
import MarketingIASection       from "@/components/sections/MarketingIASection";
import ResultadosSection        from "@/components/sections/ResultadosSection";
import ParaQuienSection         from "@/components/sections/ParaQuienSection";
import CTAFinalSection          from "@/components/sections/CTAFinalSection";

export const metadata: Metadata = {
  title: {
    absolute: "Social Marketing | Agencia de Marketing Digital e IA en Chile",
  },
  description:
    "Agencia de marketing digital e inteligencia artificial en Santiago, Chile. Diseñamos sistemas de captación, automatización y conversión comercial. Diagnóstico gratuito.",
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "https://socialmarketingchile.cl/",
    },
  },
};

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
