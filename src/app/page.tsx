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

import HeroSection             from "@/components/sections/HeroSection";
import ProblemaComercialSection from "@/components/sections/ProblemaComercialSection";
import DiagnosticoSection       from "@/components/sections/DiagnosticoSection";
import ComoTrabajamosSection    from "@/components/sections/ComoTrabajamosSection";
import SolucionesSection        from "@/components/sections/SolucionesSection";
import MarketingIASection       from "@/components/sections/MarketingIASection";
import ResultadosSection        from "@/components/sections/ResultadosSection";
import ParaQuienSection         from "@/components/sections/ParaQuienSection";
import CTAFinalSection          from "@/components/sections/CTAFinalSection";

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
