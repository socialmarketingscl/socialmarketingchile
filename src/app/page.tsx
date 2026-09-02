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
import FAQSection               from "@/components/sections/FAQSection";
import ParaQuienSection         from "@/components/sections/ParaQuienSection";
import CTAFinalSection          from "@/components/sections/CTAFinalSection";

export const metadata: Metadata = {
  title: {
    absolute: "Social Marketing | Agencia de Marketing Digital e IA en Chile",
  },
  description:
    "Agencia de marketing digital e inteligencia artificial en Vitacura, Santiago de Chile. Diseñamos sistemas de captación, automatización y conversión comercial. Diagnóstico gratuito.",
  alternates: {
    canonical: "/",
    languages: {
      "es-CL": "https://socialmarketingchile.cl/",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Con qué tipo de negocios trabajan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Principalmente con pymes y negocios de servicios que ya están vendiendo pero sienten que su marketing no les está trayendo lo que debería. El típico caso es un negocio que tiene clientes, tiene algo funcionando, pero sabe que podría estar captando mucho más si tuviera las cosas más ordenadas. No trabajamos con personas que recién están pensando en emprender y no tienen nada armado todavía, ni con negocios que buscan solo que alguien les maneje el Instagram sin ningún objetivo comercial detrás."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta contratar los servicios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depende completamente de lo que necesites. No tenemos paquetes armados tipo \"plan básico, plan premium\" porque cada negocio tiene problemas distintos. Primero conversamos, entendemos qué te está pasando, y ahí te armamos una propuesta con lo que realmente necesitas. Puede ser un proyecto puntual, un fee mensual, o una mezcla de ambas cosas. Lo que sí te puedo decir es que no cotizamos al aire — siempre vas a saber exactamente qué estás pagando, por qué y qué vas a recibir."
      }
    },
    {
      "@type": "Question",
      "name": "¿En cuánto tiempo se ven resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si hacemos campañas pagadas, los primeros datos los tienes en las primeras semanas. Si trabajamos redes sociales y contenido orgánico, la tracción real empieza a notarse entre el segundo y tercer mes. SEO es más lento, ahí estamos hablando de 3 a 6 meses para ver movimiento real en Google. Y si implementamos automatización, eso funciona desde el día uno — un agente de WhatsApp empieza a responder apenas lo activamos. Lo importante es que todo lo medimos con datos, no con sensaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el diagnóstico gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una conversación donde nos sentamos a entender tu negocio. Qué vendes, cómo llegan tus clientes hoy, qué estás haciendo en digital, qué te ha funcionado y qué no. No es una auditoría técnica ni te vamos a entregar un informe de 20 páginas — es una reunión honesta para entender si te podemos ayudar y con qué. Si después de esa conversación vemos que hay un camino, te proponemos algo concreto. Si no, te lo decimos directamente. Sin compromiso de ningún lado."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué se diferencian de otras agencias?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mayoría de las agencias te ofrecen servicios sueltos. Te manejan las redes, o te hacen una campaña, o te diseñan un logo. Nosotros conectamos todo. No tiene sentido hacer una campaña de publicidad si después nadie le hace seguimiento a los leads que llegan. Lo que hacemos es armar un sistema completo donde la captación, el seguimiento y la conversión funcionan juntos. Y además integramos inteligencia artificial y automatización — agentes que responden por WhatsApp, sistemas que califican leads solos, CRM que ordena todo tu proceso comercial. Eso es algo que la agencia promedio no te ofrece."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main>
        <HeroSection />
        <ProblemaComercialSection />
        <DiagnosticoSection />
        <ComoTrabajamosSection />
        <SolucionesSection />
        <MarketingIASection />
        <ResultadosSection />
        <ParaQuienSection />
        <FAQSection />
        <CTAFinalSection />
      </main>
    </>
  );
}
