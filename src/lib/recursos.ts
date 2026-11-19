/* ============================================================
   RECURSOS: artículos del blog de Social Marketing.
   Reglas editoriales: español de Chile, sin estadísticas sin
   fuente, cifras propias solo si ya están publicadas en
   /resultados, y cada artículo enlaza a un servicio relacionado.
   ============================================================ */

export type ArticleBlock =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "nota"; title: string; text: string };

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: "Publicidad" | "Google y SEO" | "Automatización" | "Medición" | "Contenido";
  published: string;
  updated: string;
  minutes: number;
  service: { label: string; href: string };
  intro: string;
  body: ArticleBlock[];
};

export const RECURSOS_INTRO = {
  eyebrow: "Recursos",
  title: "Guías prácticas para vender más con marketing digital",
  body:
    "Lo que aplicamos con nuestros clientes, explicado para que lo puedas usar en tu negocio: publicidad, Google, automatización y medición, sin humo.",
};

export const ARTICLES: Article[] = [
  {
    slug: "meta-ads-o-google-ads",
    title: "Meta Ads o Google Ads: cuál conviene según tu tipo de negocio",
    metaTitle: "Meta Ads o Google Ads: cuál conviene a tu negocio | Social Marketing",
    description:
      "Diferencias reales entre Meta Ads y Google Ads, cuándo partir con cada una y cómo combinarlas según si vendes un servicio urgente o un producto visual.",
    category: "Publicidad",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 6,
    service: { label: "Publicidad digital y captación", href: "/soluciones/publicidad-digital" },
    intro:
      "La pregunta no es cuál plataforma es mejor, sino en qué momento está tu cliente cuando te necesita. Google y Meta resuelven problemas distintos y conviene entenderlo antes de poner el primer peso.",
    body: [
      { t: "h2", text: "La diferencia de fondo: buscar versus descubrir" },
      {
        t: "p",
        text:
          "En Google Ads apareces cuando alguien ya está buscando lo que vendes. La persona escribió “destape de alcantarillado en Las Condes” o “agencia de marketing en Santiago” y tiene una necesidad activa. En Meta Ads (Facebook e Instagram) apareces mientras la persona mira contenido, sin que te haya buscado. Ahí no captas demanda: la creas.",
      },
      {
        t: "p",
        text:
          "Por eso las métricas tampoco se comparan uno a uno. Un clic en Google suele venir de alguien más decidido; un clic en Meta suele ser más barato, pero de alguien que todavía está conociendo tu marca.",
      },
      { t: "h2", text: "Cuándo partir con Google Ads" },
      {
        t: "ul",
        items: [
          "Vendes un servicio que se busca por urgencia: gasfitería, destapes, cerrajería, reparaciones.",
          "Tu cliente compara proveedores antes de decidir y escribe en Google lo que necesita.",
          "Atiendes una zona definida y quieres aparecer en las comunas donde trabajas.",
        ],
      },
      { t: "h2", text: "Cuándo partir con Meta Ads" },
      {
        t: "ul",
        items: [
          "Vendes algo visual o que se compra por impulso: flores, comida, decoración, moda.",
          "Tu producto es nuevo y la gente todavía no sabe que lo necesita.",
          "Tienes fechas comerciales claras, como San Valentín o el Día de la Madre, y quieres llegar antes que la competencia.",
        ],
      },
      { t: "h2", text: "Cuándo combinarlas" },
      {
        t: "p",
        text:
          "La combinación tiene sentido cuando ya mides bien. Con Destapes Oriente usamos ambas: Google para quien busca una solución urgente y Meta para mantener la marca presente en los barrios donde trabajan. Lo que hizo posible decidir fue un registro donde cada consulta queda anotada con su origen.",
      },
      {
        t: "nota",
        title: "Antes de invertir",
        text:
          "Si hoy no sabes cuántas consultas te llegan al mes ni de dónde vienen, el primer paso no es elegir plataforma: es medir. Sin eso, cualquier comparación es intuición.",
      },
      { t: "h2", text: "Una forma simple de decidir" },
      {
        t: "ol",
        items: [
          "Escribe cómo te buscaría un cliente en Google. Si esas búsquedas existen y son específicas, parte por Google.",
          "Si nadie busca lo que vendes con esas palabras, parte por Meta y genera demanda con contenido.",
          "Define un presupuesto de prueba para un mes y mide costo por consulta, no costo por clic.",
          "Con datos reales, mueve el presupuesto hacia el canal que trae consultas que sí se convierten en venta.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-invertir-en-publicidad-digital",
    title: "Cuánto invertir en publicidad digital para empezar (y cómo calcularlo)",
    metaTitle: "Cuánto invertir en publicidad digital al empezar | Social Marketing",
    description:
      "Cómo calcular un presupuesto de prueba para Meta Ads o Google Ads a partir de tu ticket promedio, tu capacidad de atención y el costo por consulta.",
    category: "Publicidad",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 5,
    service: { label: "Publicidad digital y captación", href: "/soluciones/publicidad-digital" },
    intro:
      "No existe un monto correcto para todos. Existe un monto que tiene sentido para tu negocio, y se calcula hacia atrás: desde lo que vale un cliente para ti.",
    body: [
      { t: "h2", text: "Parte por el valor de un cliente" },
      {
        t: "p",
        text:
          "Antes de pensar en cuánto gastar, responde cuánto ganas con una venta promedio y cuántas veces vuelve a comprarte un cliente. Si un servicio te deja un margen alto y el cliente vuelve, puedes pagar más por conseguirlo que si vendes algo de bajo margen una sola vez.",
      },
      { t: "h2", text: "Calcula hacia atrás" },
      {
        t: "ol",
        items: [
          "Define cuántos clientes nuevos quieres al mes y cuántos puedes atender bien.",
          "Estima de cada 10 consultas cuántas terminan en venta. Si no lo sabes, empieza a anotarlo desde hoy.",
          "Con eso sabes cuántas consultas necesitas al mes.",
          "El primer mes es de prueba: el objetivo es descubrir cuánto te cuesta realmente una consulta en tu rubro y tu zona.",
        ],
      },
      {
        t: "nota",
        title: "Un ejemplo con números redondos",
        text:
          "Si quieres 10 clientes nuevos y de cada 5 consultas cierras 1, necesitas 50 consultas. Si en la prueba descubres que cada consulta te cuesta $4.000, el presupuesto mensual razonable ronda los $200.000. Los números son ilustrativos: lo importante es el método.",
      },
      { t: "h2", text: "Separa la inversión en anuncios de la gestión" },
      {
        t: "p",
        text:
          "Lo que pagas a Meta o a Google es la pauta. La gestión es el trabajo de crear anuncios, configurar la medición, revisar resultados y ajustar. Confundirlos lleva a decisiones malas, como recortar la gestión y mantener anuncios que nadie optimiza.",
      },
      { t: "h2", text: "Errores que hacen perder plata" },
      {
        t: "ul",
        items: [
          "Repartir un presupuesto chico en muchas campañas a la vez. Mejor concentrar y aprender.",
          "Cambiar todo cada dos días. Las plataformas necesitan algunos días de datos para optimizar.",
          "Medir solo clics o seguidores. La métrica que importa es cuántas consultas y ventas trajo cada peso.",
          "Lanzar sin un sistema para responder rápido. Una consulta que espera horas suele terminar con otro proveedor.",
        ],
      },
      {
        t: "p",
        text:
          "Si quieres, en el diagnóstico gratuito revisamos tu ticket, tu zona y tu capacidad para proponerte un presupuesto de prueba con criterio.",
      },
    ],
  },
  {
    slug: "google-business-profile-aparecer-en-tu-comuna",
    title: "Cómo optimizar tu perfil de Google Business para aparecer en tu comuna",
    metaTitle: "Google Business Profile: cómo aparecer en tu comuna | Social Marketing",
    description:
      "Guía práctica para ordenar tu perfil de Google Business: categorías, zona de servicio, fotos reales, reseñas y publicaciones para aparecer en Google Maps.",
    category: "Google y SEO",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 6,
    service: { label: "Posicionamiento en Google e IA", href: "/soluciones/posicionamiento-en-google" },
    intro:
      "Para muchos negocios locales, el perfil de Google Business trae más contactos que el propio sitio web. Es gratis, pero casi siempre está a medio configurar.",
    body: [
      { t: "h2", text: "1. La categoría principal decide dónde apareces" },
      {
        t: "p",
        text:
          "Elige la categoría que describe exactamente tu servicio principal y suma categorías secundarias solo si de verdad las haces. Una categoría demasiado amplia te pone a competir con todos; una precisa te muestra a quien busca justo eso.",
      },
      { t: "h2", text: "2. Define bien tu zona de servicio" },
      {
        t: "p",
        text:
          "Si vas a domicilio, configura las comunas donde realmente atiendes. Si recibes clientes en un local, revisa que la dirección y el pin del mapa sean correctos. Nombre, dirección y teléfono deben ser idénticos en tu sitio web, redes y directorios.",
      },
      { t: "h2", text: "3. Fotos reales, no de banco" },
      {
        t: "p",
        text:
          "Sube fotos de tu equipo trabajando, tus vehículos, tu local y tus resultados. La gente quiere ver quién va a llegar a su casa o quién la va a atender. Para Destapes Oriente grabamos en terreno con filmmaker y dron justamente por eso: el material real genera confianza.",
      },
      { t: "h2", text: "4. Pide la reseña en el momento justo" },
      {
        t: "ul",
        items: [
          "Pídela apenas terminas un trabajo bien hecho, no una semana después.",
          "Facilítala con un enlace directo o un código QR que tu equipo pueda mostrar en el lugar.",
          "Responde todas las reseñas, también las negativas, con calma y con una solución.",
        ],
      },
      { t: "h2", text: "5. Publica como si fuera una red social" },
      {
        t: "p",
        text:
          "Las publicaciones del perfil muestran que el negocio está activo. Comparte trabajos recientes, promociones y preguntas frecuentes. No necesitas publicar todos los días: con constancia basta.",
      },
      {
        t: "nota",
        title: "Revisa esto hoy",
        text:
          "Busca tu servicio y tu comuna en Google desde el celular, sin iniciar sesión. Si no apareces en el mapa o tu ficha se ve incompleta, ahí está tu primera tarea.",
      },
      { t: "h2", text: "6. Conecta el perfil con tu medición" },
      {
        t: "p",
        text:
          "Agrega parámetros UTM al enlace de tu sitio en el perfil para saber en Google Analytics cuántas visitas y consultas llegan desde ahí. Así dejas de suponer y empiezas a decidir con datos.",
      },
    ],
  },
  {
    slug: "como-aparecer-en-chatgpt-y-buscadores-con-ia",
    title: "Cómo aparecer en ChatGPT y otros buscadores con IA",
    metaTitle: "Cómo aparecer en ChatGPT y buscadores con IA | Social Marketing",
    description:
      "Qué revisan los buscadores con IA para recomendar un negocio y qué puedes hacer en tu sitio para que entiendan qué haces, dónde y para quién.",
    category: "Google y SEO",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 5,
    service: { label: "Posicionamiento en Google e IA", href: "/soluciones/posicionamiento-en-google" },
    intro:
      "Cada vez más personas le preguntan a una IA qué proveedor contratar. Esas herramientas no inventan la respuesta: la arman con información que encuentran en la web. Tu trabajo es que esa información sea clara y consistente.",
    body: [
      { t: "h2", text: "Lo que una IA necesita entender de tu negocio" },
      {
        t: "ul",
        items: [
          "Qué haces, en una frase sin adornos.",
          "Dónde lo haces: ciudad, comunas o país.",
          "Para quién lo haces y qué problema resuelves.",
          "Pruebas: casos, reseñas, años de experiencia, resultados verificables.",
        ],
      },
      { t: "h2", text: "Escribe respuestas, no eslóganes" },
      {
        t: "p",
        text:
          "Las páginas que mejor funcionan responden preguntas concretas: cuánto demora, qué incluye, qué no incluye, cómo se trabaja. Una sección de preguntas frecuentes bien escrita sirve a la vez a tus clientes, a Google y a los buscadores con IA.",
      },
      { t: "h2", text: "Usa datos estructurados" },
      {
        t: "p",
        text:
          "Los datos estructurados (schema.org) son una forma de describir tu negocio en un lenguaje que las máquinas leen sin interpretar: nombre, dirección, horario, servicios y preguntas frecuentes. No reemplazan el contenido, pero eliminan ambigüedades.",
      },
      { t: "h2", text: "Sé consistente en todas partes" },
      {
        t: "p",
        text:
          "Si tu sitio dice una dirección, Google Business otra y tus redes un teléfono distinto, la IA no sabe a cuál creerle. Ordena tus datos en todos los canales antes de producir más contenido.",
      },
      {
        t: "nota",
        title: "Un archivo que ayuda",
        text:
          "Algunos sitios publican un archivo llms.txt con un resumen de qué es el negocio y cuáles son sus páginas importantes. Es una práctica nueva y no garantiza nada, pero ordena la información para los asistentes que la consultan.",
      },
      { t: "h2", text: "Lo que no funciona" },
      {
        t: "p",
        text:
          "Llenar páginas de palabras clave, copiar textos genéricos o prometer cosas que no puedes demostrar. Los sistemas de IA cruzan fuentes y lo genérico se pierde entre miles de páginas iguales.",
      },
    ],
  },
  {
    slug: "medir-consultas-de-whatsapp",
    title: "Cómo medir las consultas que llegan por WhatsApp",
    metaTitle: "Cómo medir las consultas que llegan por WhatsApp | Social Marketing",
    description:
      "Cómo saber qué campaña o canal trajo cada consulta de WhatsApp: botones medidos, mensajes con referencia y un registro simple de consultas.",
    category: "Medición",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 5,
    service: { label: "Sistemas de ventas con IA", href: "/soluciones/sistemas-de-ventas-con-ia" },
    intro:
      "Para muchos negocios en Chile, WhatsApp es el canal donde se cierra la venta. El problema es que, si no lo mides, todo lo que pasa antes del mensaje queda a ciegas.",
    body: [
      { t: "h2", text: "El problema: el clic no es la consulta" },
      {
        t: "p",
        text:
          "Google Analytics puede registrar que alguien hizo clic en tu botón de WhatsApp, pero no sabe si esa persona escribió, qué preguntó ni si te compró. Si solo mides clics, vas a sobreestimar o subestimar tus campañas.",
      },
      { t: "h2", text: "Tres capas de medición" },
      {
        t: "ol",
        items: [
          "Clic medido: cada botón de WhatsApp del sitio registra un evento con la página y la ubicación del botón.",
          "Mensaje con referencia: el texto prellenado incluye una referencia corta que te dice desde qué página o campaña vino la persona.",
          "Registro de la consulta: alguien de tu equipo anota cada conversación real con su origen, lo que se cotizó y el resultado.",
        ],
      },
      { t: "h2", text: "El registro es lo que cambia las decisiones" },
      {
        t: "p",
        text:
          "Con Destapes Oriente mantenemos un registro de consultas con fecha, comuna, servicio, origen, monto cotizado y resultado. Así aprendimos que el origen anotado como “sitio web” puede mezclar visitas orgánicas y de anuncios, y que conviene cruzarlo con Google Analytics antes de mover presupuesto.",
      },
      {
        t: "nota",
        title: "Columnas mínimas para tu registro",
        text:
          "Fecha, nombre, comuna, servicio consultado, origen del contacto, si se envió cotización, monto, resultado final y observaciones. Con una planilla compartida basta para empezar.",
      },
      { t: "h2", text: "Errores comunes" },
      {
        t: "ul",
        items: [
          "Tener varios eventos distintos para el mismo clic y contarlo dos veces.",
          "No probar la medición antes de lanzar una campaña.",
          "Anotar el origen “de memoria” días después de la conversación.",
          "Medir todo pero no revisar los datos nunca.",
        ],
      },
      {
        t: "p",
        text:
          "Cuando el volumen crece, el registro puede llenarse solo: un agente o una automatización toma los datos de la conversación y los guarda sin que nadie copie a mano.",
      },
    ],
  },
  {
    slug: "que-automatizar-en-whatsapp-con-ia",
    title: "Qué automatizar en WhatsApp con IA y qué dejar en manos de tu equipo",
    metaTitle: "Qué automatizar en WhatsApp con IA | Social Marketing",
    description:
      "Las tareas de WhatsApp que conviene automatizar con IA, las que no, y cómo diseñar un flujo que responda rápido sin perder el trato humano.",
    category: "Automatización",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 6,
    service: { label: "Sistemas de ventas con IA", href: "/soluciones/sistemas-de-ventas-con-ia" },
    intro:
      "Automatizar WhatsApp no significa reemplazar a las personas por un robot. Significa que nadie de tu equipo pierda tiempo en lo repetitivo y que ningún cliente se quede esperando.",
    body: [
      { t: "h2", text: "Lo que conviene automatizar" },
      {
        t: "ul",
        items: [
          "El primer saludo y la respuesta inmediata, incluso fuera de horario.",
          "Las preguntas que se repiten: horarios, zonas de atención, formas de pago.",
          "La toma de datos: nombre, comuna, servicio y urgencia.",
          "El agendamiento de visitas o reuniones con horarios reales.",
          "Los recordatorios y el seguimiento de cotizaciones sin respuesta.",
        ],
      },
      { t: "h2", text: "Lo que conviene dejar a una persona" },
      {
        t: "ul",
        items: [
          "Cotizaciones que requieren evaluar el caso.",
          "Clientes molestos o situaciones delicadas.",
          "Negociaciones de precio y acuerdos especiales.",
          "Cualquier conversación donde el cliente pide hablar con alguien.",
        ],
      },
      { t: "h2", text: "Cómo se ve un buen flujo" },
      {
        t: "ol",
        items: [
          "El cliente escribe y recibe respuesta al instante.",
          "Un asistente con IA entiende qué necesita y pide los datos que faltan.",
          "Si es una consulta simple, la resuelve. Si es una oportunidad de venta, la deriva a una persona con todo el contexto.",
          "La consulta queda registrada con su origen para hacer seguimiento.",
        ],
      },
      {
        t: "nota",
        title: "La regla de oro",
        text:
          "El cliente siempre debe poder llegar a una persona. Un bot que no deja salir genera más frustración que no tener bot.",
      },
      { t: "h2", text: "Por dónde empezar" },
      {
        t: "p",
        text:
          "Revisa tus últimas 30 conversaciones y anota qué preguntas se repiten y cuánto tardaste en responder. Ese diagnóstico simple te dice qué automatizar primero. En nuestra agencia aplicamos la misma lógica a nuestros formularios y agenda: los datos se guardan solos, el equipo recibe el aviso y la persona su confirmación.",
      },
    ],
  },
  {
    slug: "registro-de-consultas-antes-de-invertir-en-publicidad",
    title: "Por qué necesitas un registro de consultas antes de invertir más en publicidad",
    metaTitle: "Registro de consultas: la base antes de invertir más | Social Marketing",
    description:
      "Cómo un registro simple de consultas te muestra qué canal trae clientes, dónde se pierden las ventas y cuánto presupuesto tiene sentido.",
    category: "Medición",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 5,
    service: { label: "Estrategia y consultoría", href: "/soluciones/estrategia-y-consultoria" },
    intro:
      "Muchos negocios aumentan su presupuesto de publicidad sin saber cuántas consultas reciben ni cuántas cierran. Es como acelerar sin mirar el tablero.",
    body: [
      { t: "h2", text: "Qué te dice un registro de consultas" },
      {
        t: "ul",
        items: [
          "Qué canal trae más consultas y cuál trae las que sí compran.",
          "Cuánto se cotiza al mes y cuánto de eso se convierte en venta.",
          "En qué etapa se pierden los clientes: no responden, cotizan con otros o desisten por precio.",
          "Si el problema es de captación o de seguimiento.",
        ],
      },
      { t: "h2", text: "Un caso real" },
      {
        t: "p",
        text:
          "Destapes Oriente registró 68 consultas desde octubre y envió 49 cotizaciones por $8,4 millones. Ese registro permitió ver qué canales traen contactos, en qué comunas y por qué se pierden algunas oportunidades, por ejemplo cuando la respuesta tarda.",
      },
      { t: "h2", text: "Cómo armarlo en una tarde" },
      {
        t: "ol",
        items: [
          "Crea una planilla con columnas de fecha, nombre, comuna, servicio, origen, cotización, monto, resultado y observaciones.",
          "Define valores fijos para el origen (Google Ads, Meta Ads, sitio web, recomendación) para poder sumar.",
          "Anota cada consulta el mismo día.",
          "Revisa una vez por semana qué cerró, qué está pendiente y a quién hay que hacer seguimiento.",
        ],
      },
      {
        t: "nota",
        title: "Lo que más se pierde",
        text:
          "Las cotizaciones enviadas sin seguimiento. Un mensaje amable dos o tres días después recupera ventas que parecían perdidas.",
      },
      { t: "h2", text: "Cuándo automatizarlo" },
      {
        t: "p",
        text:
          "Cuando el volumen hace difícil anotar a mano, el registro puede alimentarse solo desde formularios, WhatsApp y la agenda. Pero empezar manual es útil: te obliga a mirar cada consulta y entender a tu cliente.",
      },
    ],
  },
  {
    slug: "contenido-para-redes-que-genera-consultas",
    title: "Contenido para redes que genera consultas: qué grabar si vendes servicios",
    metaTitle: "Contenido para redes que genera consultas | Social Marketing",
    description:
      "Qué contenido grabar si vendes servicios: trabajos reales, antes y después, preguntas frecuentes y el equipo en terreno, con ideas listas para producir.",
    category: "Contenido",
    published: "2026-11-19",
    updated: "2026-11-19",
    minutes: 5,
    service: { label: "Gestión de redes sociales", href: "/soluciones/gestion-de-redes-sociales" },
    intro:
      "Si vendes un servicio, tu cliente no compra un producto que pueda ver: compra confianza. El contenido que más consultas genera es el que muestra que sabes hacer el trabajo.",
    body: [
      { t: "h2", text: "Muestra el trabajo real" },
      {
        t: "p",
        text:
          "Graba a tu equipo trabajando, las herramientas que usan y el resultado final. Un video de 20 segundos en terreno dice más que cualquier diseño. Para Destapes Oriente organizamos jornadas con filmmaker profesional y tomas con dron en la azotea de un edificio: ese material muestra escala y profesionalismo.",
      },
      { t: "h2", text: "Cinco formatos que funcionan" },
      {
        t: "ol",
        items: [
          "Antes y después de un trabajo, con una explicación breve de qué se hizo.",
          "Respuesta a una pregunta frecuente, grabada por alguien del equipo.",
          "Un día de trabajo en terreno, mostrando el proceso.",
          "Errores comunes que tus clientes cometen y cómo evitarlos.",
          "Testimonios de clientes reales, con su autorización.",
        ],
      },
      { t: "h2", text: "Cada pieza necesita una salida" },
      {
        t: "p",
        text:
          "Termina el contenido con una acción clara: escribir por WhatsApp, pedir una cotización o agendar. Y mide desde dónde llegan esas consultas para saber qué formato funciona.",
      },
      {
        t: "nota",
        title: "Lo que no necesitas",
        text:
          "Bailes de tendencia que no tienen relación con tu negocio. Pueden traer alcance, pero rara vez traen clientes que necesiten tu servicio.",
      },
      { t: "h2", text: "Constancia por sobre perfección" },
      {
        t: "p",
        text:
          "Es mejor publicar con constancia material real que esperar la producción perfecta. Planifica un calendario mensual, agrupa las grabaciones en jornadas y deja listo el contenido de varias semanas en un solo día.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((article) => article.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-CL", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T12:00:00Z`),
  );
}
