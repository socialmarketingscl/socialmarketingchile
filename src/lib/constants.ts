/* ============================================================
   CONSTANTES DE SOCIAL MARKETING
   Fuente oficial: Wireframe_Home_SM_FINAL_OFICIAL.docx
   ============================================================ */

/* ---- DATOS DE CONTACTO ---- */
export const CONTACT = {
  whatsapp: "+56 9 6153 3546",
  whatsappUrl: "https://wa.me/56961533546",
  whatsappUrlWithMessage:
    "https://wa.me/56961533546?text=Hola%2C%20estoy%20visitando%20el%20sitio%20de%20Social%20Marketing%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20pueden%20ayudar%20a%20mi%20negocio.",
  email: "contacto@socialmarketingchile.cl",
  instagram: "@socialmarketing_cl",
  instagramUrl: "https://www.instagram.com/socialmarketing_cl",
  domain: "socialmarketingchile.cl",
  url: "https://socialmarketingchile.cl",
};

/* ---- NAVEGACIÓN ---- */
export const NAV_LINKS = [
  { label: "Cómo trabajamos", href: "/como-trabajamos" },
  { label: "Soluciones", href: "/soluciones", hasDropdown: true },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Resultados", href: "/resultados" },
];

/* ---- SECCIÓN 1: HERO ---- */
export const HERO = {
  eyebrow: "Agencia de Marketing Digital e IA",
  h1Line1: "Agencia de marketing digital e inteligencia artificial en Chile.",
  h1Line2: "Sistemas digitales para captar, ordenar y convertir clientes.",
  h2: "Conectamos estrategia, publicidad, automatización e IA para que tu negocio deje de perder clientes y empiece a crecer con un sistema medible.",
  ctaPrimary: { label: "Agendar diagnóstico gratuito", href: "/contacto" },
  ctaSecondary: { label: "Ver cómo trabajamos", href: "#proceso" },
  logosBar: {
    visible: true,
    label: "Negocios que confían en Social Marketing",
  },
};

/* ---- SECCIÓN 2: PROBLEMA COMERCIAL ---- */
export const PROBLEMA = {
  h2: "El problema no es hacer marketing. Es hacerlo sin un sistema.",
  body: "La mayoría de los negocios invierte tiempo, contenido y presupuesto en acciones digitales que no están conectadas entre sí. Publican en redes sociales, invierten en campañas de publicidad digital, responden consultas por WhatsApp y mantienen un sitio web. Pero sin una estructura clara para captar, seguir y convertir oportunidades comerciales.",
  cards: [
    {
      title: "Contenido sin estrategia",
      description:
        "Publicaciones en redes sociales que mantienen presencia, pero no construyen posicionamiento ni generan oportunidades comerciales reales.",
    },
    {
      title: "Campañas sin medición comercial",
      description:
        "Inversión en publicidad digital que genera alcance o mensajes, pero sin claridad sobre costo por lead, tasa de conversión ni retorno real.",
    },
    {
      title: "Leads sin seguimiento",
      description:
        "Consultas que llegan por WhatsApp, formularios o Instagram y se pierden por falta de respuesta, orden o continuidad en el proceso comercial.",
    },
    {
      title: "Acciones digitales desconectadas",
      description:
        "Redes sociales, campañas pagadas, sitio web, WhatsApp y procesos de venta funcionando por separado, sin un sistema integrado de captación de clientes.",
    },
  ],
  quote:
    "Cuando no existe un sistema, el marketing se vuelve actividad. No crecimiento.",
};

/* ---- SECCIÓN 3: DIAGNÓSTICO COMO PUNTO DE ENTRADA ---- */
export const DIAGNOSTICO = {
  h2: "Antes de proponerte algo, necesitamos entenderte.",
  body: "Cada negocio tiene un problema diferente. Algunos necesitan captar más clientes con campañas en Meta Ads o Google Ads. Otros necesitan dejar de perder oportunidades automatizando su seguimiento comercial por WhatsApp. Algunos necesitan mejorar su posicionamiento en Google o profesionalizar su marca antes de invertir más.\n\nPor eso nuestro primer paso siempre es un diagnóstico: entender tu situación real, tus canales digitales, tu proceso comercial y tus objetivos antes de recomendar un camino.",
  steps: [
    {
      number: "01",
      name: "Conversación y contexto",
      description:
        "Conversamos sobre tu negocio, tus canales digitales actuales y tus objetivos de crecimiento.",
    },
    {
      number: "02",
      name: "Identificación del problema",
      description:
        "Identificamos el problema principal: captación, conversión, posicionamiento, marca o automatización.",
    },
    {
      number: "03",
      name: "Definición de prioridades",
      description:
        "Definimos qué tiene sentido hacer primero y en qué orden para generar resultados reales.",
    },
    {
      number: "04",
      name: "Propuesta a tu medida",
      description:
        "Diseñamos un plan con servicios, plazos y presupuesto adaptado a lo que realmente necesitas. Sin paquetes genéricos.",
    },
  ],
  cta: { label: "Solicitar diagnóstico", href: "/contacto" },
  note: "Sin compromiso. Sin propuestas genéricas. Solo una conversación para entender si podemos ayudarte.",
};

/* ---- SECCIÓN 4: CÓMO TRABAJAMOS ---- */
export const COMO_TRABAJAMOS = {
  eyebrow: "Nuestro proceso",
  h2: "De la conversación al resultado. Así funciona nuestro proceso.",
  steps: [
    {
      number: "01",
      name: "Diagnóstico",
      description:
        "Entendemos tu negocio, tus canales de marketing digital, tu proceso comercial y las oportunidades de crecimiento.",
    },
    {
      number: "02",
      name: "Propuesta",
      description:
        "Definimos los servicios, el alcance, los plazos y la inversión. Todo alineado al problema real, no a un paquete genérico.",
    },
    {
      number: "03",
      name: "Ejecución",
      description:
        "Implementamos estrategia, contenido, campañas publicitarias, posicionamiento SEO, automatización o inteligencia artificial según lo definido.",
    },
    {
      number: "04",
      name: "Optimización",
      description:
        "Medimos resultados con datos reales y ajustamos. Cada acción se evalúa por su impacto en captación, conversión y crecimiento.",
    },
  ],
  quote:
    "No ejecutamos sin entender. No proponemos sin diagnosticar. No medimos sin tener objetivos claros.",
  link: { label: "Conoce nuestro proceso completo", href: "/como-trabajamos" },
};

/* ---- SECCIÓN 5: SOLUCIONES ---- */
export const SOLUCIONES = {
  h2: "Soluciones diseñadas para hacer crecer tu negocio.",
  subtitle:
    "Cada servicio cumple una función dentro del crecimiento digital de tu negocio: ordenar, posicionar, atraer, captar, automatizar, convertir o medir. Servicios independientes o integrados según el diagnóstico de cada empresa.",
  services: [
    {
      number: "01",
      name: "Estrategia y Consultoría",
      description:
        "Consultoría de marketing digital para definir objetivos, prioridades y plan de acción antes de ejecutar. Diagnóstico, análisis de competencia y hoja de ruta.",
      href: "/soluciones/estrategia-y-consultoria",
      featured: false,
    },
    {
      number: "02",
      name: "Publicidad Digital y Captación",
      description:
        "Campañas en Meta Ads y Google Ads diseñadas para generar oportunidades comerciales reales. Embudos de captación, segmentación y optimización basada en datos.",
      href: "/soluciones/publicidad-digital",
      featured: false,
    },
    {
      number: "03",
      name: "Posicionamiento en Google e IA",
      description:
        "SEO técnico, Google Business Profile y contenido optimizado para buscadores y motores de respuesta con IA. Visibilidad orgánica y local en Chile.",
      href: "/soluciones/posicionamiento-en-google",
      featured: false,
    },
    {
      number: "04",
      name: "Gestión de Redes Sociales",
      description:
        "Gestión profesional de Instagram, Facebook y LinkedIn. Línea editorial, calendario de contenido, diseño y análisis de métricas con enfoque comercial.",
      href: "/soluciones/gestion-de-redes-sociales",
      featured: false,
    },
    {
      number: "05",
      name: "Identidad Visual y Marca",
      description:
        "Branding, diseño de marca y manual de identidad. Diagnóstico de imagen, propuesta de valor, paleta, tipografías y coherencia en todos los puntos de contacto.",
      href: "/soluciones/identidad-visual-y-marca",
      featured: false,
    },
    {
      number: "06",
      name: "Sistemas de Ventas con IA",
      description:
        "Automatización de WhatsApp e Instagram, agentes de IA, CRM para pymes, calificación automática de leads y sistemas de seguimiento comercial para convertir mejor.",
      href: "/soluciones/sistemas-de-ventas-con-ia",
      featured: true, // card 6 con acento diferenciador
    },
  ],
  footerNote:
    "Servicios independientes o integrados según el diagnóstico de cada negocio.",
};

/* ---- SECCIÓN 6: MARKETING DIGITAL + IA + AUTOMATIZACIÓN ---- */
export const MARKETING_IA = {
  h2: "Marketing digital, inteligencia artificial y automatización comercial en un solo sistema.",
  intro:
    "No trabajamos acciones digitales aisladas. Diseñamos sistemas que conectan estrategia, contenido, publicidad, automatización e inteligencia comercial para generar oportunidades reales.",
  columns: [
    {
      title: "Marketing Digital",
      items: [
        "Estrategia",
        "Contenido",
        "Publicidad (Meta Ads / Google Ads)",
        "Posicionamiento SEO",
        "Marca e identidad visual",
        "Gestión de redes sociales",
      ],
    },
    {
      title: "Inteligencia Artificial",
      items: [
        "Automatización",
        "Agentes de IA",
        "Flujos de conversión",
        "CRM para pymes e integraciones",
        "Análisis de datos",
        "Automatización de WhatsApp",
      ],
    },
    {
      title: "Conversión Comercial",
      items: [
        "Captación de clientes",
        "Seguimiento comercial",
        "Calificación de leads",
        "Cierre de ventas",
        "Medición y optimización",
        "Reporting ejecutivo",
      ],
    },
  ],
  aeo: "Social Marketing es una agencia de marketing digital en Santiago, Chile, que integra inteligencia artificial, automatización comercial y sistemas de conversión con estrategia, publicidad digital, posicionamiento web y contenido para ayudar a empresas y emprendedores a captar, ordenar y convertir oportunidades comerciales de forma medible. Combina servicios de marketing digital como campañas en Meta Ads y Google Ads, SEO, gestión de redes sociales y branding con soluciones de automatización como agentes de IA para WhatsApp, CRM para pymes, calificación automática de leads y sistemas de seguimiento comercial.",
  quote:
    "Transformamos la presencia digital de tu negocio en una herramienta comercial activa y medible.",
};

/* ---- SECCIÓN 7: RESULTADOS APLICADOS ---- */
export const RESULTADOS = {
  h2: "Resultados reales con negocios reales.",
  testimonials: [
    {
      quote:
        "Llevamos más de 9 años en el rubro y nunca habíamos dado el paso para profesionalizarnos. Social Marketing nos transformó exactamente en lo que queríamos. Entendieron todo lo que les pedimos, nos explicaron cada paso, y fue todo muy profesional, eficiente y eficaz.",
      author: "Catalina Prenafeta",
      role: "Fundadora de Ríos Eventos",
      metrics: [
        { value: "+56%", label: "en eventos tras publicación de sitio web" },
        { value: "+627%", label: "visualizaciones orgánicas en redes sociales" },
      ],
      services: ["Branding", "Sitio web", "Gestión de redes sociales", "SEO local", "Meta Ads", "Google Ads"],
      industry: "Experiencias gastronómicas y servicio para eventos",
    },
    {
      quote:
        "Desde el primer momento entendieron lo que necesitábamos. Antes dependíamos del contacto directo por recomendaciones, pero ahora tenemos una presencia digital mucho más ordenada y preparada para recibir nuevos clientes. No solo nos hicieron una página, nos ayudaron a construir una base comercial más profesional.",
      author: "Jason Vargas",
      role: "Dueño de Gasfitería y Destapes",
      metrics: [
        { value: "+203%", label: "visualizaciones orgánicas en redes sociales" },
      ],
      services: ["Logo", "Sitio web", "Formulario + WhatsApp", "Gestión de redes sociales", "Campañas", "Asesoría"],
      industry: "Servicios técnicos de gasfitería",
    },
  ],
  secondaryCards: [
    {
      client: "Monaco's Detail",
      industry: "Detailing automotriz",
      services: ["Branding", "Gestión de redes sociales", "Contenido audiovisual"],
      metric: { value: "161K", label: "visualizaciones orgánicas en Instagram" },
    },
    {
      client: "Amore",
      industry: "Florería",
      services: ["Redes sociales", "Meta Ads", "Diseño comercial"],
      metric: {
        value: "✓",
        label: "Presencia digital activada con campañas en fechas comerciales clave",
      },
    },
  ],
  cta: { label: "Ver todos los resultados", href: "/resultados" },
};

/* ---- SECCIÓN 8: PARA QUIÉN ES ---- */
export const PARA_QUIEN = {
  h2: "¿Es Social Marketing para tu negocio?",
  forYes: [
    "Empresas de servicios y negocios con proceso comercial activo que necesitan captar más clientes de forma medible.",
    "Negocios que invierten en marketing digital pero no ven resultados claros ni retorno de inversión.",
    "Marcas que necesitan ordenar su presencia digital antes de seguir invirtiendo en publicidad o contenido.",
    "Empresas que quieren integrar marketing digital, automatización e inteligencia artificial en un solo sistema de crecimiento.",
    "Emprendedores y pymes que buscan profesionalizar su captación de clientes y su proceso comercial.",
  ],
  forNo: [
    "Negocios que solo buscan publicar contenido en redes sociales sin estrategia ni objetivos comerciales.",
    "Empresas que esperan resultados garantizados sin proceso, colaboración ni información.",
    "Proyectos que necesitan solo un logo, una pieza gráfica suelta o una tarea puntual sin contexto.",
    "Negocios sin presupuesto mínimo para inversión profesional en marketing digital.",
  ],
};

/* ---- SECCIÓN 9: CTA FINAL ---- */
export const CTA_FINAL = {
  h2: "Conversemos sobre el crecimiento digital de tu negocio.",
  body: "Agenda una reunión de diagnóstico y evaluemos cómo convertir tu presencia digital en un sistema real de captación, seguimiento y conversión de clientes.",
  ctaPrimary: { label: "Agendar diagnóstico", href: "/contacto" },
  ctaSecondary: { label: "Escribir por WhatsApp", href: CONTACT.whatsappUrlWithMessage },
  tagline: "Más que presencia digital, sistemas para crecer.",
};

/* ---- FOOTER ---- */
export const FOOTER = {
  tagline: "Marketing Digital + Inteligencia Artificial aplicada a ventas y conversión.",
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Cómo trabajamos", href: "/como-trabajamos" },
    { label: "Soluciones", href: "/soluciones" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Resultados", href: "/resultados" },
    { label: "Contacto", href: "/contacto" },
  ],
  seoLocal: "Agencia de marketing digital en Santiago, Chile.",
  aeoShort:
    "Social Marketing es una agencia de marketing digital e inteligencia artificial en Santiago, Chile. Diseñamos sistemas de captación, automatización y conversión comercial para empresas que necesitan crecer con estrategia y tecnología.",
  copyright: "© 2026 Social Marketing. Todos los derechos reservados.",
};
