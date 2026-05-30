import type { Metadata } from "next";

export type ServiceIncludeItem = {
  titulo: string;
  descripcion: string;
};

export type ServicePageData = {
  slug: string;
  href: string;
  serviceName: string;
  navLabel: string;
  title: string;
  description: string;
  paraQuien: string[];
  incluye: ServiceIncludeItem[];
  noIncluye: string[];
  proceso: string[];
  indicadores: string[];
  cta: string;
};

export const SERVICE_LINKS = [
  {
    label: "Estrategia y Consultoría",
    href: "/soluciones/estrategia-y-consultoria",
  },
  {
    label: "Publicidad Digital y Captación",
    href: "/soluciones/publicidad-digital",
  },
  {
    label: "Posicionamiento en Google e IA",
    href: "/soluciones/posicionamiento-en-google",
  },
  {
    label: "Gestión de Redes Sociales",
    href: "/soluciones/gestion-de-redes-sociales",
  },
  {
    label: "Identidad Visual y Marca",
    href: "/soluciones/identidad-visual-y-marca",
  },
  {
    label: "Sistemas de Ventas con IA",
    href: "/soluciones/sistemas-de-ventas-con-ia",
  },
];

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "estrategia-y-consultoria": {
    slug: "estrategia-y-consultoria",
    href: "/soluciones/estrategia-y-consultoria",
    serviceName: "Estrategia y consultoría",
    navLabel: "Estrategia y Consultoría",
    title: "Estrategia y consultoría de marketing digital",
    description:
      "Dirección estratégica antes de ejecutar. Definimos objetivos, prioridades y plan de acción para que tu inversión en marketing tenga sentido desde el primer paso.",
    paraQuien: [
      "Negocios que están comenzando su presencia digital y no saben por dónde partir",
      "Empresas que ya hacen marketing digital pero sin estrategia coherente ni resultados medibles",
      "Emprendedores que necesitan ordenar prioridades antes de invertir en publicidad o contenidos",
      "Negocios en etapa de crecimiento que requieren redefinir su enfoque comercial digital",
    ],
    incluye: [
      {
        titulo: "Diagnóstico digital y comercial",
        descripcion:
          "Revisión de canales activos, comunicación actual, competencia directa y oportunidades detectadas.",
      },
      {
        titulo: "Definición de objetivos",
        descripcion:
          "Objetivos de marketing alineados con los objetivos comerciales del negocio.",
      },
      {
        titulo: "Público objetivo y propuesta de valor",
        descripcion:
          "Identificación de audiencia, propuesta de valor diferenciadora y mensajes clave.",
      },
      {
        titulo: "Plan de acción",
        descripcion:
          "Prioridades, canales recomendados, tipo de contenido y calendario tentativo.",
      },
      {
        titulo: "Análisis de competencia",
        descripcion:
          "Qué hacen, cómo comunican, dónde están posicionados y qué brechas existen.",
      },
      {
        titulo: "Documento estratégico",
        descripcion:
          "Entregable con diagnóstico, estrategia y hoja de ruta accionable.",
      },
    ],
    noIncluye: [
      "Ejecución de campañas publicitarias",
      "Creación de contenido gráfico o audiovisual",
      "Gestión operativa de redes sociales",
      "Implementación de automatizaciones o agentes de IA",
      "Desarrollo o rediseño de sitio web",
    ],
    proceso: [
      "Reunión inicial de levantamiento de información",
      "Análisis interno: canales, comunicación, competencia y oportunidades",
      "Elaboración de diagnóstico y documento estratégico",
      "Presentación de hallazgos y recomendaciones",
      "Definición conjunta de prioridades y plan de acción",
      "En modalidad mensual: seguimiento, revisión de avances y ajustes",
    ],
    indicadores: [
      "Claridad de objetivos definidos y aprobados",
      "Plan de acción entregado con prioridades y calendario",
      "Avance de implementación de recomendaciones",
      "Alineación entre estrategia propuesta y ejecución real",
    ],
    cta: "¿Tu negocio necesita dirección estratégica antes de ejecutar?",
  },
  "publicidad-digital": {
    slug: "publicidad-digital",
    href: "/soluciones/publicidad-digital",
    serviceName: "Publicidad digital y captación",
    navLabel: "Publicidad Digital y Captación",
    title: "Publicidad digital y captación de clientes",
    description:
      "Campañas en Meta Ads y Google Ads diseñadas para generar oportunidades comerciales reales. No solo tráfico — leads que se convierten en clientes.",
    paraQuien: [
      "Negocios que necesitan generar leads y oportunidades de forma constante",
      "Empresas que ya invierten en publicidad pero no ven retorno claro",
      "Negocios que dependen del boca a boca y necesitan un canal de captación predecible",
      "Empresas que quieren escalar su inversión publicitaria con datos reales",
    ],
    incluye: [
      {
        titulo: "Campañas en Meta Ads",
        descripcion:
          "Planificación, creación y optimización de campañas en Facebook e Instagram.",
      },
      {
        titulo: "Campañas en Google Ads",
        descripcion:
          "Búsqueda, display y remarketing cuando el proyecto lo requiera.",
      },
      {
        titulo: "Definición de audiencias",
        descripcion:
          "Públicos, segmentaciones, mensajes y creatividades alineados al objetivo.",
      },
      {
        titulo: "Embudos de captación",
        descripcion:
          "Anuncio → landing page → formulario → WhatsApp → CRM o flujo automatizado.",
      },
      {
        titulo: "Medición de resultados",
        descripcion:
          "Alcance, clics, leads, costo por resultado, tasa de conversión y retorno estimado.",
      },
      {
        titulo: "Optimización continua",
        descripcion:
          "Ajustes según comportamiento real del público y desempeño comercial.",
      },
    ],
    noIncluye: [
      "Creación de sitio web o landing pages desde cero (cotización separada)",
      "Gestión de redes sociales orgánicas",
      "Producción audiovisual profesional",
      "Automatización de respuestas (corresponde a Sistemas de Ventas con IA)",
    ],
    proceso: [
      "Definición de objetivos comerciales y presupuesto",
      "Diseño de estructura de campaña y embudo",
      "Creación de anuncios, copies y creatividades",
      "Configuración técnica: píxeles, eventos, tracking",
      "Lanzamiento y monitoreo",
      "Optimización semanal según datos reales",
      "Reporting mensual con análisis y recomendaciones",
    ],
    indicadores: [
      "Leads generados",
      "Costo por lead",
      "Tasa de conversión",
      "Calidad de oportunidades",
      "Retorno sobre inversión publicitaria",
    ],
    cta: "¿Tu negocio necesita un sistema de captación predecible?",
  },
  "posicionamiento-en-google": {
    slug: "posicionamiento-en-google",
    href: "/soluciones/posicionamiento-en-google",
    serviceName: "Posicionamiento en Google e IA",
    navLabel: "Posicionamiento en Google e IA",
    title: "Posicionamiento en Google e inteligencia artificial",
    description:
      "SEO técnico, Google Business Profile y contenido optimizado para que tu negocio aparezca cuando tus clientes buscan lo que ofreces — en Google y en motores de respuesta con IA.",
    paraQuien: [
      "Negocios locales que dependen de búsquedas geográficas o intención de compra cercana",
      "Empresas que tienen sitio web pero no aparecen en Google",
      "Negocios que quieren anticiparse al impacto de la búsqueda asistida por IA",
      "E-commerce o negocios online que quieren mejorar su tráfico orgánico",
    ],
    incluye: [
      {
        titulo: "Auditoría SEO técnica",
        descripcion: "Velocidad, estructura, indexación, errores y enlaces rotos.",
      },
      {
        titulo: "Optimización on-page",
        descripcion:
          "Títulos, meta descripciones, encabezados, contenido e imágenes.",
      },
      {
        titulo: "Google Business Profile",
        descripcion:
          "Información, categorías, fotos, reseñas y publicaciones optimizadas.",
      },
      {
        titulo: "Investigación de keywords",
        descripcion:
          "Palabras clave según intención de búsqueda del público objetivo.",
      },
      {
        titulo: "Contenido optimizado",
        descripcion:
          "Páginas de servicio, preguntas frecuentes y artículos para SEO y motores de IA.",
      },
      {
        titulo: "Visibilidad en IA",
        descripcion:
          "Estructuración para AI Overviews, Perplexity y ChatGPT Search.",
      },
    ],
    noIncluye: [
      "Desarrollo o rediseño completo del sitio web",
      "Campañas pagadas en Google Ads",
      "Contenido audiovisual para el sitio",
      "Link building agresivo o PR digital de alto nivel",
      "Migraciones de sitio web complejas",
    ],
    proceso: [
      "Auditoría técnica del sitio web y presencia digital",
      "Investigación de keywords y análisis de intención",
      "Optimización de Google Business Profile",
      "Implementación de mejoras on-page y técnicas",
      "Creación de contenido optimizado para SEO e IA",
      "Monitoreo de posiciones y tráfico orgánico",
      "Reportes de avance y ajustes según datos",
    ],
    indicadores: [
      "Visibilidad local: búsquedas, visitas al perfil, clics, llamadas",
      "Tráfico orgánico al sitio web",
      "Posiciones en resultados de búsqueda",
      "Consultas generadas desde búsqueda orgánica",
      "Presencia en respuestas generadas por IA",
    ],
    cta: "¿Tu negocio necesita ser encontrado cuando tus clientes buscan?",
  },
  "gestion-de-redes-sociales": {
    slug: "gestion-de-redes-sociales",
    href: "/soluciones/gestion-de-redes-sociales",
    serviceName: "Gestión de redes sociales",
    navLabel: "Gestión de Redes Sociales",
    title: "Gestión profesional de redes sociales",
    description:
      "Convertimos tus redes sociales en un canal coherente de presencia, confianza y generación de oportunidades. No publicamos por publicar — cada pieza tiene objetivo comercial.",
    paraQuien: [
      "Negocios que publican de forma irregular, sin línea editorial ni objetivo comercial claro",
      "Empresas que quieren profesionalizar su presencia en redes sociales",
      "Emprendedores que no tienen tiempo o capacidad para gestionar sus redes con calidad",
      "Negocios que necesitan contenido gráfico profesional pero no cuentan con diseñador",
    ],
    incluye: [
      {
        titulo: "Línea editorial y pilares de contenido",
        descripcion:
          "Definición estratégica de qué comunicar, cómo y por qué según marca y objetivos.",
      },
      {
        titulo: "Calendario de publicaciones",
        descripcion:
          "Planificación mensual con fechas, formatos y temas definidos.",
      },
      {
        titulo: "Creación de copies",
        descripcion:
          "Textos de publicación alineados a la estrategia y con intención comercial.",
      },
      {
        titulo: "Diseño gráfico de piezas",
        descripcion:
          "Publicaciones estáticas, carruseles y stories con identidad visual profesional.",
      },
      {
        titulo: "Programación y publicación",
        descripcion:
          "Publicación automática mediante herramientas de gestión profesionales.",
      },
      {
        titulo: "Análisis de métricas",
        descripcion:
          "Alcance, interacción, retención, clics, mensajes y crecimiento de comunidad.",
      },
    ],
    noIncluye: [
      "Contenido audiovisual: grabación, edición de video, reels producidos o animaciones complejas",
      "Community management: respuesta a comentarios o mensajes directos",
      "Gestión de pauta publicitaria (corresponde a Publicidad Digital)",
      "Creación de sitio web o landing pages",
      "Sesiones de fotos o producción fotográfica profesional",
    ],
    proceso: [
      "Reunión de briefing: marca, objetivos, tono, público y referencias",
      "Definición de línea editorial y pilares de contenido",
      "Diseño del calendario editorial mensual",
      "Creación de copies y diseño gráfico",
      "Aprobación del cliente antes de publicación",
      "Programación y publicación automática",
      "Revisión de métricas y reporte de desempeño",
      "Ajustes de estrategia según resultados",
    ],
    indicadores: [
      "Alcance de publicaciones por período",
      "Tasa de interacción (engagement rate)",
      "Crecimiento de comunidad (seguidores)",
      "Clics en enlaces y mensajes generados",
      "Coherencia visual y editorial del perfil",
    ],
    cta: "¿Tu negocio necesita redes sociales que generen resultados?",
  },
  "identidad-visual-y-marca": {
    slug: "identidad-visual-y-marca",
    href: "/soluciones/identidad-visual-y-marca",
    serviceName: "Identidad visual y marca",
    navLabel: "Identidad Visual y Marca",
    title: "Identidad visual y posicionamiento de marca",
    description:
      "Ayudamos a tu negocio a diferenciarse, comunicar confianza y proyectar una imagen profesional coherente en todos los puntos de contacto.",
    paraQuien: [
      "Negocios que no tienen una identidad visual definida o profesional",
      "Empresas que tienen logo pero carecen de coherencia visual en sus canales",
      "Marcas que necesitan reposicionarse o actualizar su imagen",
      "Emprendedores que quieren proyectar profesionalismo desde el primer contacto",
    ],
    incluye: [
      {
        titulo: "Diagnóstico de identidad visual",
        descripcion:
          "Evaluación de coherencia de marca actual en todos los puntos de contacto.",
      },
      {
        titulo: "Propuesta de valor y personalidad",
        descripcion:
          "Definición de propuesta de valor diferenciadora, tono comunicacional y narrativa.",
      },
      {
        titulo: "Sistema visual",
        descripcion:
          "Diseño o mejora de paleta cromática, tipografías y lineamientos gráficos.",
      },
      {
        titulo: "Piezas visuales",
        descripcion:
          "Creación de piezas para campañas, redes sociales, presentaciones o materiales comerciales.",
      },
      {
        titulo: "Manual de marca",
        descripcion: "Desarrollo de guía de marca según el alcance del proyecto.",
      },
      {
        titulo: "Alineación de imagen",
        descripcion:
          "Coherencia entre imagen visual, promesa de marca y experiencia del cliente.",
      },
    ],
    noIncluye: [
      "Desarrollo de sitio web (cotización separada)",
      "Gestión operativa de redes sociales",
      "Producción audiovisual o sesiones fotográficas",
      "Campañas publicitarias",
      "Registro legal de marca",
    ],
    proceso: [
      "Reunión de briefing: negocio, valores, público, competencia y aspiraciones",
      "Diagnóstico de identidad visual actual",
      "Definición de personalidad de marca y tono comunicacional",
      "Desarrollo de propuestas visuales",
      "Presentación y ajustes con el cliente",
      "Entrega de archivos finales y manual de aplicación",
    ],
    indicadores: [
      "Coherencia visual en todos los puntos de contacto",
      "Claridad de propuesta de valor y diferenciación",
      "Calidad profesional de piezas visuales producidas",
      "Nivel de satisfacción del cliente con su nueva imagen",
    ],
    cta: "¿Tu negocio necesita una marca que comunique confianza?",
  },
  "sistemas-de-ventas-con-ia": {
    slug: "sistemas-de-ventas-con-ia",
    href: "/soluciones/sistemas-de-ventas-con-ia",
    serviceName: "Sistemas de ventas con IA",
    navLabel: "Sistemas de Ventas con IA",
    title: "Sistemas de ventas y conversión con inteligencia artificial",
    description:
      "Automatización de WhatsApp e Instagram, agentes de IA, CRM para pymes y sistemas de seguimiento comercial. Convierte más oportunidades sin depender de procesos manuales.",
    paraQuien: [
      "Negocios que reciben consultas pero las pierden por falta de respuesta rápida",
      "Empresas que dependen de responder manualmente cada mensaje por WhatsApp o Instagram",
      "Negocios que necesitan calificar leads automáticamente antes de invertir tiempo comercial",
      "Empresas que quieren un sistema de seguimiento comercial ordenado sin comprar un CRM empresarial",
    ],
    incluye: [
      {
        titulo: "Automatización de WhatsApp e Instagram",
        descripcion:
          "Respuestas automáticas inteligentes, flujos de conversación y derivación a ventas.",
      },
      {
        titulo: "Agentes de IA",
        descripcion:
          "Asistentes virtuales que responden, califican y agendan sin intervención manual.",
      },
      {
        titulo: "CRM para pymes",
        descripcion:
          "Sistema de gestión de clientes adaptado a negocios pequeños y medianos.",
      },
      {
        titulo: "Calificación automática de leads",
        descripcion:
          "Scoring de prospectos según comportamiento, canal de origen e intención de compra.",
      },
      {
        titulo: "Sistema de seguimiento comercial",
        descripcion:
          "Flujos ordenados para que ninguna oportunidad se pierda por falta de seguimiento.",
      },
      {
        titulo: "Integraciones",
        descripcion:
          "Conexión entre WhatsApp, Instagram, formularios, CRM y herramientas del negocio.",
      },
    ],
    noIncluye: [
      "Desarrollo de sitio web o landing pages",
      "Gestión de campañas publicitarias",
      "Creación de contenido para redes sociales",
      "Consultoría estratégica general (corresponde a Estrategia)",
      "Soporte técnico de herramientas que no sean las implementadas por SM",
    ],
    proceso: [
      "Diagnóstico del proceso comercial actual del cliente",
      "Diseño del sistema: flujos, automatizaciones, integraciones y agentes",
      "Configuración e implementación técnica",
      "Pruebas con escenarios reales",
      "Capacitación al equipo del cliente",
      "Lanzamiento y monitoreo inicial",
      "Optimización según datos de uso real",
    ],
    indicadores: [
      "Tiempo de respuesta a consultas",
      "Tasa de calificación automática de leads",
      "Oportunidades recuperadas por seguimiento automatizado",
      "Reducción de tareas manuales en el proceso comercial",
      "Tasa de conversión de lead a cliente",
    ],
    cta: "¿Tu negocio necesita convertir más sin depender de procesos manuales?",
  },
};

export function createServiceMetadata(service: ServicePageData): Metadata {
  const title = `${service.title} | Social Marketing — Marketing Digital e IA en Chile`;
  const canonicalUrl = `https://socialmarketingchile.cl${service.href}`;

  return {
    title: { absolute: title },
    description: service.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: service.description,
      type: "website",
      url: canonicalUrl,
    },
  };
}
