import type { Metadata } from "next";

export type ServiceIncludeItem = {
  titulo: string;
  descripcion: string;
};

export type ServiceMetric = { value: string; label: string };

export type ServiceCase = {
  kicker: string;
  titulo: string;
  resumen: string;
  metricas?: ServiceMetric[];
  flujo?: { titulo: string; descripcion: string; herramienta?: string }[];
  cita?: { texto: string; autor: string };
  href?: string;
  hrefLabel?: string;
};

export type ServiceFaq = { pregunta: string; respuesta: string };

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
  guiaCta?: boolean;
  metaTitle?: string;
  metaDescription?: string;
  resumenCorto?: string;
  caso?: ServiceCase;
  herramientas?: string[];
  faqs?: ServiceFaq[];
  relacionados?: string[];
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

const BASE_SERVICE_PAGES: Record<string, ServicePageData> = {
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
    guiaCta: true,
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
        titulo: "CRM a la medida",
        descripcion:
          "Registro y seguimiento de clientes adaptado al tamaño y la forma de vender de tu negocio.",
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
    guiaCta: true,
  },
};

/* ============================================================
   Contenido ampliado de cada servicio: SEO (meta), caso real,
   herramientas, preguntas frecuentes y servicios relacionados.
   Regla: solo casos y cifras reales publicados en /resultados.
   ============================================================ */
const SERVICE_EXTRAS: Record<string, Partial<ServicePageData>> = {
  "estrategia-y-consultoria": {
    metaTitle: "Consultoría de marketing digital en Santiago | Social Marketing",
    metaDescription:
      "Consultoría de marketing digital en Santiago: diagnóstico, prioridades y plan de acción antes de invertir en campañas, web o contenido.",
    resumenCorto: "Diagnóstico, prioridades y plan de acción antes de invertir.",
    caso: {
      kicker: "Caso real · Destapes Oriente",
      titulo: "De una empresa sin ventas a +$3 millones facturados en 3 meses",
      resumen:
        "Destapes Oriente partió sin clientes propios ni presencia digital. Lo primero no fue lanzar anuncios: fue ordenar el camino. Marca, sitio con cotizador, Google Business, contenido grabado en terreno y recién después campañas, con un registro para saber de dónde llega cada cliente.",
      metricas: [
        { value: "+$3 millones", label: "facturados en sus primeros 3 meses, partiendo de 0 ventas" },
        { value: "68", label: "consultas registradas desde octubre" },
      ],
      href: "/resultados#destapes-oriente",
    },
    herramientas: ["Google Analytics 4", "Microsoft Clarity", "Google Search Console", "Google Sheets", "Meta Business Suite"],
    faqs: [
      {
        pregunta: "¿Qué recibo al terminar la consultoría?",
        respuesta:
          "Un documento con el diagnóstico de tus canales, tu competencia directa, la propuesta de valor y un plan de acción priorizado. La idea es que sepas qué hacer primero, qué después y qué dejar de hacer.",
      },
      {
        pregunta: "¿Necesito tener redes o sitio web para empezar?",
        respuesta:
          "No. Muchos negocios llegan desde cero y justamente ahí la estrategia evita gastar en el orden equivocado. Si ya tienes canales activos, los revisamos con datos reales.",
      },
      {
        pregunta: "¿La consultoría incluye ejecutar el plan?",
        respuesta:
          "No por defecto. La consultoría entrega la dirección. Si quieres que lo ejecutemos nosotros, lo cotizamos por separado con publicidad, contenido, web o automatización según lo que salga prioritario.",
      },
      {
        pregunta: "¿Trabajan solo con negocios de Santiago?",
        respuesta:
          "Nuestra oficina está en Vitacura y la mayoría de los clientes son de Santiago, pero la consultoría funciona por videollamada para negocios de todo Chile.",
      },
      {
        pregunta: "¿Cómo parte el proceso?",
        respuesta:
          "Con un diagnóstico gratuito de 30 minutos. Revisamos tu negocio y tus canales, y te decimos con honestidad si la consultoría es lo que necesitas o si conviene partir por otra cosa.",
      },
    ],
    relacionados: ["publicidad-digital", "posicionamiento-en-google", "sistemas-de-ventas-con-ia"],
  },
  "publicidad-digital": {
    metaTitle: "Agencia de Meta Ads y Google Ads en Santiago | Social Marketing",
    metaDescription:
      "Campañas de Meta Ads y Google Ads en Santiago para generar consultas reales, con medición de cada contacto y seguimiento hasta la venta.",
    resumenCorto: "Meta Ads y Google Ads medidos por consultas y ventas, no por clics.",
    caso: {
      kicker: "Caso real · Destapes Oriente",
      titulo: "Campañas que se miden en consultas y cotizaciones, no en clics",
      resumen:
        "Para Destapes Oriente activamos Google Ads y Meta Ads junto a un registro de consultas: cada contacto queda anotado con su origen, lo que se cotizó y si se cerró. Así se decide dónde poner el presupuesto con datos y no con intuición.",
      metricas: [
        { value: "68", label: "consultas registradas desde octubre" },
        { value: "$8,4 millones", label: "en 49 cotizaciones enviadas" },
      ],
      href: "/resultados#destapes-oriente",
    },
    herramientas: ["Meta Ads", "Google Ads", "Google Tag Manager", "Google Analytics 4", "Píxel de Meta", "Google Sheets"],
    faqs: [
      {
        pregunta: "¿Cuánto tengo que invertir en publicidad?",
        respuesta:
          "Depende de tu rubro, tu zona y cuántos clientes puedes atender. Lo definimos en el diagnóstico con un presupuesto de prueba y lo ajustamos según el costo real por consulta. La inversión en anuncios se paga directo a Meta o Google, aparte de nuestra gestión.",
      },
      {
        pregunta: "¿Meta Ads o Google Ads: cuál me conviene?",
        respuesta:
          "Google capta a quien ya está buscando lo que vendes. Meta genera demanda en personas que todavía no te buscan. Para servicios urgentes suele partir Google; para productos visuales, Meta. Muchas veces se combinan.",
      },
      {
        pregunta: "¿Cómo sé si las campañas están funcionando?",
        respuesta:
          "Configuramos la medición antes de lanzar: formularios, clics a WhatsApp y llamadas quedan registrados como conversiones. Te reportamos consultas y costo por consulta, no solo alcance o clics.",
      },
      {
        pregunta: "¿Quién crea los anuncios?",
        respuesta:
          "Nosotros. Escribimos los textos, diseñamos las piezas y, cuando el proyecto lo pide, grabamos video en terreno. Los anuncios con material real del negocio suelen generar más confianza que las imágenes genéricas.",
      },
      {
        pregunta: "¿Puedo pausar las campañas cuando quiera?",
        respuesta:
          "Sí. Las cuentas publicitarias quedan a nombre de tu negocio, así que el control y el historial siempre son tuyos.",
      },
    ],
    relacionados: ["sistemas-de-ventas-con-ia", "posicionamiento-en-google", "gestion-de-redes-sociales"],
  },
  "posicionamiento-en-google": {
    metaTitle: "SEO y posicionamiento en Google en Santiago | Social Marketing",
    metaDescription:
      "Posicionamiento en Google y en buscadores con IA para negocios de Santiago: SEO local, Google Business Profile y contenido que responde lo que buscan tus clientes.",
    resumenCorto: "SEO local, Google Business y visibilidad en buscadores con IA.",
    caso: {
      kicker: "Caso real · Ríos Eventos",
      titulo: "Un negocio de 9 años que empezó a recibir clientes desde Google",
      resumen:
        "Ríos Eventos dependía del boca a boca. Construimos su sitio web, activamos SEO local y ordenamos su presencia en Google para que quien busca servicios para eventos los encuentre y los pueda contactar de inmediato.",
      metricas: [
        { value: "+56%", label: "en eventos tras publicar el sitio web" },
      ],
      href: "/resultados#rios-eventos",
    },
    herramientas: ["Google Search Console", "Google Business Profile", "Google Analytics 4", "Schema.org", "Next.js"],
    faqs: [
      {
        pregunta: "¿Cuánto se demora en verse el posicionamiento?",
        respuesta:
          "El SEO es acumulativo. Los ajustes técnicos y de Google Business pueden mostrar movimiento en semanas, pero posicionar búsquedas competitivas toma meses de trabajo constante. Te mostramos el avance con datos de Search Console.",
      },
      {
        pregunta: "¿Qué es el SEO local?",
        respuesta:
          "Es aparecer cuando alguien busca tu servicio en tu zona, por ejemplo en Google Maps o en búsquedas con tu comuna. Se trabaja con tu perfil de Google Business, reseñas, datos de contacto consistentes y páginas pensadas para cada zona.",
      },
      {
        pregunta: "¿También trabajan la visibilidad en ChatGPT y otras IA?",
        respuesta:
          "Sí. Ordenamos la información de tu negocio con datos estructurados y contenido claro, para que los buscadores con IA puedan entender qué haces, dónde y para quién.",
      },
      {
        pregunta: "¿Necesito un sitio web nuevo?",
        respuesta:
          "No siempre. Primero auditamos el que tienes. Si la base técnica no permite posicionar, te lo decimos y lo cotizamos aparte.",
      },
      {
        pregunta: "¿Pueden garantizar el primer lugar en Google?",
        respuesta:
          "No, y desconfía de quien lo garantice. Nadie controla el algoritmo. Lo que sí podemos asegurar es un trabajo técnico y de contenido bien hecho, medido mes a mes.",
      },
    ],
    relacionados: ["estrategia-y-consultoria", "publicidad-digital", "gestion-de-redes-sociales"],
  },
  "gestion-de-redes-sociales": {
    metaTitle: "Gestión de redes sociales en Santiago | Social Marketing",
    metaDescription:
      "Gestión de Instagram, Facebook y TikTok para negocios de Santiago: línea editorial, contenido grabado en terreno y métricas que se conectan con ventas.",
    resumenCorto: "Contenido con intención comercial, grabado en terreno cuando hace falta.",
    caso: {
      kicker: "Caso real · Amore",
      titulo: "De vender solo por WhatsApp a una marca con comunidad propia",
      resumen:
        "Amore no tenía presencia en redes. Creamos su identidad, su Instagram desde cero y campañas en fechas clave como San Valentín, con contenido pensado para que el perfil genere consultas por sí solo.",
      metricas: [
        { value: "+4.617", label: "seguidores construidos desde cero" },
        { value: "3.685", label: "visualizaciones mensuales en Instagram" },
      ],
      href: "/resultados#amore",
    },
    herramientas: ["Meta Business Suite", "Instagram", "Facebook", "Google Business Profile", "Filmmaker y dron en terreno"],
    faqs: [
      {
        pregunta: "¿Cuántas publicaciones incluye al mes?",
        respuesta:
          "Depende del plan. Un mes típico combina reels, carruseles y piezas estáticas, más historias. Lo definimos según tu objetivo y la capacidad de producción del negocio.",
      },
      {
        pregunta: "¿Ustedes graban el contenido?",
        respuesta:
          "Sí. Organizamos jornadas de grabación en terreno y, cuando el proyecto lo pide, sumamos filmmaker profesional y tomas con dron. El contenido real del negocio genera más confianza que el material de banco.",
      },
      {
        pregunta: "¿Responden los mensajes y comentarios?",
        respuesta:
          "La gestión de comunidad se define en el plan. Para responder consultas de venta a cualquier hora recomendamos sumar automatización con IA, así nadie se queda esperando.",
      },
      {
        pregunta: "¿Cómo miden si las redes funcionan?",
        respuesta:
          "Además del alcance y la interacción, medimos lo que importa al negocio: consultas que llegan desde redes, clics a WhatsApp y ventas atribuibles cuando hay registro.",
      },
      {
        pregunta: "¿Tengo que aprobar el contenido antes de publicar?",
        respuesta:
          "Sí. Trabajamos con un calendario mensual que revisas y apruebas, así nada sale sin tu visto bueno.",
      },
    ],
    relacionados: ["identidad-visual-y-marca", "publicidad-digital", "sistemas-de-ventas-con-ia"],
  },
  "identidad-visual-y-marca": {
    metaTitle: "Branding e identidad visual en Santiago | Social Marketing",
    metaDescription:
      "Branding e identidad visual para negocios de Santiago: logo, paleta, tipografías, tono de voz y manual de marca para comunicar confianza en cada canal.",
    resumenCorto: "Logo, sistema visual y manual de marca para comunicar confianza.",
    caso: {
      kicker: "Caso real · Ríos Eventos",
      titulo: "Una marca a la altura de 9 años de experiencia",
      resumen:
        "Ríos Eventos tenía trayectoria pero no una imagen que la reflejara. Diseñamos su identidad visual completa y la llevamos a su sitio web y redes, para que cada punto de contacto transmitiera lo profesionales que ya eran.",
      cita: {
        texto:
          "Social Marketing nos transformó exactamente en lo que queríamos. Entendieron todo lo que les pedimos, nos explicaron cada paso, y fue todo muy profesional, eficiente y eficaz.",
        autor: "Catalina Prenafeta, Fundadora de Ríos Eventos",
      },
      metricas: [
        { value: "+56%", label: "en eventos tras publicar el sitio web" },
        { value: "1.567", label: "seguidores construidos con comunidad real" },
      ],
      href: "/resultados#rios-eventos",
    },
    faqs: [
      {
        pregunta: "¿Qué incluye un proyecto de identidad visual?",
        respuesta:
          "Logo y sus versiones, paleta de colores, tipografías, estilo gráfico y fotográfico, tono de voz y un manual de marca para que cualquier persona aplique la marca de forma correcta.",
      },
      {
        pregunta: "¿Puedo mantener mi logo actual?",
        respuesta:
          "Sí. Si tu logo tiene valor para tus clientes, lo refinamos y construimos el sistema visual alrededor de él en vez de partir de cero.",
      },
      {
        pregunta: "¿Cuántas propuestas me presentan?",
        respuesta:
          "Presentamos propuestas basadas en el diagnóstico y hacemos rondas de ajuste hasta llegar a la versión final. El número de rondas queda definido en la propuesta comercial.",
      },
      {
        pregunta: "¿Me entregan los archivos editables?",
        respuesta:
          "Sí. Entregamos los archivos finales en los formatos necesarios para web, redes e impresión, junto al manual de aplicación.",
      },
      {
        pregunta: "¿Incluye registrar la marca?",
        respuesta:
          "No. El registro legal de marca se hace en INAPI y no forma parte del servicio, aunque te orientamos sobre cuándo conviene hacerlo.",
      },
    ],
    relacionados: ["gestion-de-redes-sociales", "estrategia-y-consultoria", "posicionamiento-en-google"],
  },
  "sistemas-de-ventas-con-ia": {
    metaTitle: "Automatización de ventas con IA en Santiago | Social Marketing",
    metaDescription:
      "Automatización comercial con IA en Santiago: WhatsApp, agentes que califican y agendan, CRM y seguimiento para que ninguna consulta se pierda.",
    description:
      "Automatización de WhatsApp e Instagram, agentes de IA, CRM a la medida y sistemas de seguimiento comercial. Convierte más oportunidades sin depender de procesos manuales.",
    resumenCorto: "Automatización, agentes de IA y CRM para que ninguna consulta se pierda.",
    caso: {
      kicker: "Caso propio · Social Marketing",
      titulo: "El sistema que capta, ordena y mide los contactos de nuestra agencia",
      resumen:
        "Antes de venderlo, lo usamos. Cada persona que llega a este sitio entra al mismo sistema: sus datos se guardan con el canal de donde vino, el equipo recibe el aviso al instante, la persona recibe su confirmación y cada paso queda medido. Nadie copia datos a mano y ninguna consulta se queda en un correo sin leer.",
      flujo: [
        {
          titulo: "Llega el contacto",
          descripcion:
            "Por el formulario, la descarga de la guía de IA o la agenda. Guardamos desde qué campaña o canal llegó la persona por primera vez.",
          herramienta: "Formularios propios + UTM",
        },
        {
          titulo: "Se registra solo",
          descripcion: "Nombre, servicio de interés, origen y fecha quedan en una base ordenada, lista para el seguimiento.",
          herramienta: "Airtable",
        },
        {
          titulo: "Avisa y responde al instante",
          descripcion: "El equipo recibe el aviso por correo y la persona recibe su confirmación o la guía, sin que nadie escriba.",
          herramienta: "Resend",
        },
        {
          titulo: "La reunión se agenda sola",
          descripcion:
            "La agenda muestra solo horarios libres, crea el evento con su videollamada y envía la invitación a ambos.",
          herramienta: "Cal.com + Google Calendar + Meet",
        },
        {
          titulo: "Todo queda medido",
          descripcion:
            "Formularios, descargas, clics a WhatsApp y reuniones confirmadas se registran como conversiones para saber qué canal trae clientes.",
          herramienta: "GA4 + Google Tag Manager",
        },
      ],
      href: "/contacto#agenda",
      hrefLabel: "Pruébalo agendando tu diagnóstico",
    },
    herramientas: ["Make", "Claude API", "ManyChat", "Airtable", "Cal.com", "Resend", "WhatsApp Business", "Google Sheets"],
    faqs: [
      {
        pregunta: "¿Qué se puede automatizar en mi proceso de ventas?",
        respuesta:
          "Lo repetitivo: responder preguntas frecuentes, pedir los datos de cada consulta, registrar contactos, agendar reuniones, enviar confirmaciones y recordar el seguimiento. Lo que requiere criterio sigue en manos de tu equipo.",
      },
      {
        pregunta: "¿Un agente de IA reemplaza a mi equipo de ventas?",
        respuesta:
          "No. El agente responde al instante, ordena la información y deriva a una persona cuando hay una oportunidad real. Tu equipo deja de perder tiempo en tareas manuales y se enfoca en cerrar.",
      },
      {
        pregunta: "¿Funciona con WhatsApp?",
        respuesta:
          "Sí. Trabajamos flujos para WhatsApp e Instagram que responden, califican y derivan consultas. La integración exacta depende de la cuenta y del volumen de mensajes de tu negocio.",
      },
      {
        pregunta: "¿Necesito comprar un CRM caro?",
        respuesta:
          "No. Armamos el registro y el seguimiento con herramientas como Airtable o Google Sheets cuando eso basta, y solo recomendamos un CRM mayor si tu operación lo necesita.",
      },
      {
        pregunta: "¿Qué pasa si algo falla?",
        respuesta:
          "Antes de lanzar probamos el sistema con escenarios reales y después lo monitoreamos. Si una integración falla, los datos no se pierden y lo corregimos.",
      },
    ],
    relacionados: ["publicidad-digital", "estrategia-y-consultoria", "gestion-de-redes-sociales"],
  },
};

export const SERVICE_PAGES: Record<string, ServicePageData> = Object.fromEntries(
  Object.entries(BASE_SERVICE_PAGES).map(([slug, base]) => [slug, { ...base, ...SERVICE_EXTRAS[slug] }]),
);

export function createServiceMetadata(service: ServicePageData): Metadata {
  const title = service.metaTitle ?? service.title;
  const description = service.metaDescription ?? service.description;
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: service.href,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: service.href,
      locale: "es_CL",
    },
  };
}

/** Nodo FAQPage para el JSON-LD de cada servicio (mismas preguntas visibles en la página). */
export function serviceFaqSchema(service: ServicePageData) {
  if (!service.faqs?.length) return [];
  return [
    {
      "@type": "FAQPage",
      "@id": `https://socialmarketingchile.cl${service.href}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.pregunta,
        acceptedAnswer: { "@type": "Answer", text: faq.respuesta },
      })),
    },
  ];
}
