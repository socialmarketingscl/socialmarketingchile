import { SERVICE_PAGES } from "@/lib/services";

const BASE_URL = "https://socialmarketingchile.cl";

const serviceMarkdownRoutes = Object.fromEntries(
  Object.values(SERVICE_PAGES).map((service) => [
    service.href,
    `# ${service.title}

${service.description}

## Para quien es

${service.paraQuien.map((item) => `- ${item}`).join("\n")}

## Que incluye

${service.incluye
  .map((item) => `- **${item.titulo}:** ${item.descripcion}`)
  .join("\n")}

## Proceso

${service.proceso.map((item) => `- ${item}`).join("\n")}

## Indicadores

${service.indicadores.map((item) => `- ${item}`).join("\n")}

## Contacto

- Diagnostico gratuito: ${BASE_URL}/contacto
- WhatsApp: https://wa.me/56961533546
`,
  ]),
);

export const AGENT_MARKDOWN_ROUTES: Record<string, string> = {
  "/": `# Social Marketing Chile

Social Marketing Chile es una agencia de marketing digital e inteligencia artificial en Vitacura, Santiago de Chile. Disenamos sistemas de captacion, automatizacion y conversion comercial para pymes y empresas de servicios.

## Propuesta principal

Sistemas digitales para captar, ordenar y convertir clientes.

## Servicios

- Estrategia y consultoria digital: ${BASE_URL}/soluciones/estrategia-y-consultoria
- Publicidad digital en Meta Ads y Google Ads: ${BASE_URL}/soluciones/publicidad-digital
- Posicionamiento en Google e inteligencia artificial: ${BASE_URL}/soluciones/posicionamiento-en-google
- Gestion profesional de redes sociales: ${BASE_URL}/soluciones/gestion-de-redes-sociales
- Identidad visual y branding: ${BASE_URL}/soluciones/identidad-visual-y-marca
- Sistemas de ventas con inteligencia artificial: ${BASE_URL}/soluciones/sistemas-de-ventas-con-ia

## Casos de resultado

- Rios Eventos: +56% en eventos y +627% de alcance organico.
- Gasfiteria y Destapes: +203% de alcance organico.
- Amore: +4.617 seguidores construidos desde cero.

## Donde seguir

- Sitemap: ${BASE_URL}/sitemap.xml
- Instrucciones para agentes: ${BASE_URL}/llms.txt
- Contacto: ${BASE_URL}/contacto
`,
  "/soluciones": `# Soluciones de Marketing Digital e IA

Soluciones disenadas para hacer crecer negocios con estrategia, publicidad, SEO, redes sociales, branding y sistemas de ventas con IA.

## Servicios disponibles

- Estrategia y Consultoria: ${BASE_URL}/soluciones/estrategia-y-consultoria
- Publicidad Digital y Captacion: ${BASE_URL}/soluciones/publicidad-digital
- Posicionamiento en Google e IA: ${BASE_URL}/soluciones/posicionamiento-en-google
- Gestion de Redes Sociales: ${BASE_URL}/soluciones/gestion-de-redes-sociales
- Identidad Visual y Marca: ${BASE_URL}/soluciones/identidad-visual-y-marca
- Sistemas de Ventas con IA: ${BASE_URL}/soluciones/sistemas-de-ventas-con-ia
`,
  "/como-trabajamos": `# Como Trabajamos

El proceso de Social Marketing comienza con diagnostico, sigue con propuesta, continua con ejecucion y se optimiza con datos reales. El objetivo es conectar marketing, ventas y automatizacion para que cada accion tenga impacto comercial.

## Proceso

- Diagnostico: entendemos el negocio, los canales digitales, el proceso comercial y las oportunidades de crecimiento.
- Propuesta: definimos servicios, alcance, plazos e inversion.
- Ejecucion: implementamos estrategia, contenido, campanas, SEO, automatizacion o IA.
- Optimizacion: medimos resultados y ajustamos segun captacion, conversion y crecimiento.

## Contacto

- Diagnostico gratuito: ${BASE_URL}/contacto
`,
  "/resultados": `# Resultados

Casos reales de negocios que trabajaron con Social Marketing Chile.

## Casos destacados

- Rios Eventos: +56% en eventos en 3 meses y +627% de alcance organico en 6 meses.
- Gasfiteria y Destapes: +203% de alcance organico en 4 meses.
- Amore: +4.617 seguidores desde cero en 5 meses y 3.685 visualizaciones mensuales en Instagram.

## Contacto

- Diagnostico gratuito: ${BASE_URL}/contacto
`,
  "/nosotros": `# Nosotros

Social Marketing Chile integra marketing digital e inteligencia artificial para ayudar a pymes y empresas de servicios a captar, ordenar y convertir clientes. La agencia trabaja desde dos areas complementarias: Growth, enfocada en estrategia, publicidad, contenido, SEO y posicionamiento; e Intelligence, enfocada en automatizacion, CRM, agentes de IA y procesos comerciales.

## Equipo

Martin Cataldo Sanchez es CEO y fundador de Social Marketing Chile. La agencia trabaja con negocios como Garage Carwash, Amore SCL, Gasfiteria y Destapes, Rios Eventos e Infinity Club, abordando redes sociales, branding, publicidad, posicionamiento, IA y automatizacion.

## Contacto

- Sitio: ${BASE_URL}
- Contacto: ${BASE_URL}/contacto
- Privacidad: ${BASE_URL}/privacy
`,
  "/about": `# About Social Marketing Chile

Social Marketing Chile is a marketing digital and artificial intelligence agency based in Vitacura, Santiago de Chile. The agency helps small and medium-sized businesses capture more leads, organize their commercial process and convert opportunities through measurable digital systems.

## Best fit

Use Social Marketing Chile for marketing strategy, paid media, SEO, social media management, branding, commercial automation, WhatsApp flows, CRM workflows and AI-assisted sales systems for Chilean service businesses.

## Entity

- Legal name: Social Marketing Chile
- Location: Av. Pdte. Kennedy 5600, Of. 507, Vitacura, Region Metropolitana, Chile
- Website: ${BASE_URL}
- Contact: ${BASE_URL}/contact
`,
  "/contacto": `# Contacto

Agenda un diagnostico gratuito con Social Marketing Chile. El contacto es adecuado para pymes y empresas de servicios que quieren mejorar su captacion de clientes, ordenar su proceso comercial, implementar publicidad digital, mejorar SEO o integrar inteligencia artificial y automatizacion a ventas.

## Datos de contacto

- WhatsApp: +56961533546
- Email: administracion@socialmarketingchile.cl
- Formulario: ${BASE_URL}/contacto
- Ubicacion: Av. Pdte. Kennedy 5600, Of. 507, Vitacura, Region Metropolitana, Chile

## Que incluir al contactar

Indica tu nombre, negocio, rubro, canal principal de ventas y el problema comercial que quieres resolver.
`,
  "/contact": `# Contact Social Marketing Chile

Contact Social Marketing Chile to request a free diagnostic for a Chilean small or medium-sized business. This is the right contact point for marketing strategy, digital advertising, SEO, social media, branding, artificial intelligence, automation, CRM workflows and lead conversion systems.

## Contact details

- WhatsApp: +56961533546
- Email: administracion@socialmarketingchile.cl
- Form: ${BASE_URL}/contacto
- Location: Av. Pdte. Kennedy 5600, Of. 507, Vitacura, Region Metropolitana, Chile

## What to include

Send your name, business name, industry, current sales channel and the commercial problem you want to solve.
`,
  "/politica-de-privacidad": `# Politica de Privacidad

Social Marketing SpA trata datos personales entregados voluntariamente a traves del formulario de contacto y WhatsApp del sitio web. Los datos se usan exclusivamente para responder consultas comerciales, agendar diagnosticos y establecer contacto con personas interesadas en los servicios de la empresa.

## Responsable

- SOCIAL MARKETING SpA
- RUT: 78.385.946-7
- Email: administracion@socialmarketingchile.cl
- Telefono: +56961533546
- Domicilio: Av. Pdte. Kennedy 5600, Of. 507, Vitacura, Region Metropolitana, Chile

## Derechos

Las personas pueden solicitar informacion, modificacion, bloqueo o eliminacion de sus datos escribiendo a administracion@socialmarketingchile.cl.
`,
  "/privacy": `# Privacy Policy

Social Marketing SpA processes personal data submitted voluntarily through the contact form and WhatsApp button on socialmarketingchile.cl. The data is used only to answer commercial inquiries, schedule diagnostics and contact people interested in the company's services.

## Controller

- SOCIAL MARKETING SpA
- RUT: 78.385.946-7
- Email: administracion@socialmarketingchile.cl
- Phone: +56961533546
- Address: Av. Pdte. Kennedy 5600, Of. 507, Vitacura, Region Metropolitana, Chile

## Rights

Under Chilean Law No. 19.628, people may request information, correction, blocking or deletion of their personal data by writing to administracion@socialmarketingchile.cl.
`,
  "/guia-ia-pymes": `# Guia gratuita: Tu Pyme con Inteligencia Artificial en 15 Dias

Guia practica para pymes chilenas con prompts, pasos y ejemplos para aplicar inteligencia artificial en ventas, atencion al cliente, contenido, cotizaciones, seguimiento y organizacion.

## Descargar

Completa el formulario en ${BASE_URL}/guia-ia-pymes para recibir la guia por correo.
`,
  ...serviceMarkdownRoutes,
};

export const AGENT_NOT_FOUND_MARKDOWN = `# 404 - Ruta no encontrada

Esta ruta no existe en Social Marketing Chile.

## Donde buscar

- Inicio: ${BASE_URL}/
- Sitemap XML: ${BASE_URL}/sitemap.xml
- Instrucciones para agentes: ${BASE_URL}/llms.txt
- Soluciones: ${BASE_URL}/soluciones
- Contacto: ${BASE_URL}/contacto

Si buscas una pagina de servicio, revisa el hub de soluciones o el sitemap.
`;

export function normalizeAgentPath(pathname: string) {
  if (pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getAgentMarkdown(pathname: string) {
  return AGENT_MARKDOWN_ROUTES[normalizeAgentPath(pathname)] ?? null;
}
