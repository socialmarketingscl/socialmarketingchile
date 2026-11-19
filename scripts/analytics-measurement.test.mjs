import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

function read(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

test("the homepage hero exposes a stable analytics id", () => {
  const hero = read("src/components/sections/HeroSection.tsx");

  assert.match(hero, /<section\s+[\s\S]*?id="hero"/);
});

test("the floating WhatsApp button hides on mobile while the homepage hero is visible", () => {
  const whatsappButton = read("src/components/ui/WhatsAppButton.tsx");
  const contactPage = read("src/app/contacto/ContactoClient.tsx");

  assert.match(whatsappButton, /"#hero, \.contact-page #agenda, \.contact-page form"/);
  assert.match(whatsappButton, /new IntersectionObserver/);
  assert.match(whatsappButton, /setIsProtectedAreaVisible\(visibleAreas\.size > 0\)/);
  assert.match(whatsappButton, /usePathname\(\)/);
  assert.match(whatsappButton, /\[pathname\]/);
  assert.match(whatsappButton, /\.floating-whatsapp-bar\.is-hidden-on-mobile/);
  assert.match(whatsappButton, /@media \(max-width: 767px\)/);
  assert.match(contactPage, /\.contact-page \{ padding-bottom: 88px; \}/);
});

test("contact reserves Cal.com space and defers the embed until after first render", () => {
  const calBooking = read("src/components/booking/CalBooking.tsx");
  const calEmbed = read("src/components/booking/CalEmbed.tsx");
  const contactPage = read("src/app/contacto/ContactoClient.tsx");

  assert.match(calBooking, /dynamic\(\(\) => import\("@\/components\/booking\/CalEmbed"\)/);
  assert.match(calBooking, /ssr: false/);
  assert.match(calBooking, /loading: CalBookingSkeleton/);
  assert.match(calBooking, /ReactDOM\.preconnect\("https:\/\/app\.cal\.com"/);
  assert.match(calBooking, /requestIdleCallback/);
  assert.match(calBooking, /new IntersectionObserver/);
  assert.match(calBooking, /CalBookingSkeleton/);
  assert.match(calEmbed, /cssVarsPerTheme/);
  assert.doesNotMatch(calEmbed, /styles:\s*\{/);
  assert.match(contactPage, /container-type: inline-size/);
  assert.match(contactPage, /height: calc\(1395px \+ 69\.75cqw\)/);
  assert.match(contactPage, /@container \(min-width: 769px\)[\s\S]*height: 580px/);
  assert.match(contactPage, /contact-hero-booking/);
  assert.match(contactPage, /<div className="contact-hero-copy-block">/);
});

test("only successful lead actions are available as GTM conversion events", () => {
  const events = read("src/lib/gtm-events.ts");
  const analyticsEvents = read("src/components/analytics/AnalyticsEvents.tsx");
  const calBooking = read("src/components/booking/CalEmbed.tsx");
  const contactForm = read("src/app/contacto/ContactoClient.tsx");
  const guideForm = read("src/app/guia-ia-pymes/GuiaIaPymesForm.tsx");

  assert.match(events, /"agenda_confirmada"/);
  assert.match(events, /"clic_whatsapp"/);
  assert.match(events, /"descarga_guia"/);
  assert.match(events, /"formulario_contacto"/);
  assert.doesNotMatch(events, /cta_diagnostico/);
  assert.doesNotMatch(analyticsEvents, /pushGtmConversionEvent\("cta_diagnostico"\)/);
  assert.match(calBooking, /bookingSuccessfulV2/);
  assert.match(calBooking, /pushGtmConversionEvent\("agenda_confirmada"/);
  assert.match(calBooking, /ubicacion: "contacto_agenda"/);
  assert.match(calBooking, /pagina: window\.location\.pathname/);
  assert.match(contactForm, /pushGtmConversionEvent\("formulario_contacto"\)/);
  assert.match(guideForm, /pushGtmConversionEvent\("descarga_guia"/);
});

test("contact keeps a usable form fallback and accepts optional company, email and source", () => {
  const contactForm = read("src/app/contacto/ContactoClient.tsx");
  const contactRoute = read("src/app/api/contact/route.ts");

  assert.match(contactForm, /const hasCalBooking = Boolean\(CAL_LINK\)/);
  assert.match(contactForm, /hasCalBooking \? \(/);
  assert.match(contactForm, /<ContactFormCard/);
  assert.match(contactRoute, /const REQUIRED_FIELDS = \["nombre", "whatsapp", "mensaje"\]/);
  assert.match(contactRoute, /if \(email && !EMAIL_PATTERN\.test\(email\)\)/);
  assert.match(contactRoute, /if \(contact\.email\)/);
});

test("first-touch attribution is persisted and submitted by both forms", () => {
  const attribution = read("src/lib/first-touch-attribution.ts");
  const contactForm = read("src/app/contacto/ContactoClient.tsx");
  const guideForm = read("src/app/guia-ia-pymes/GuiaIaPymesForm.tsx");

  assert.match(attribution, /sm_first_touch_attribution_v1/);
  assert.match(attribution, /window\.localStorage\.setItem/);
  assert.match(attribution, /utm_source/);
  assert.match(attribution, /utm_medium/);
  assert.match(attribution, /utm_campaign/);
  assert.match(contactForm, /\.\.\.attribution/);
  assert.match(guideForm, /JSON\.stringify\(\{ \.\.\.form, \.\.\.attribution \}\)/);
});

test("both lead APIs preserve first-touch attribution in Airtable-bound data", () => {
  const contactRoute = read("src/app/api/contact/route.ts");
  const guideRoute = read("src/app/api/lead-magnet/route.ts");

  assert.match(contactRoute, /First touch:/);
  assert.match(contactRoute, /addAirtableField\(airtableFields, AIRTABLE_FIELDS\.utmSource/);
  assert.match(guideRoute, /First touch:/);
  assert.match(guideRoute, /\[AIRTABLE_FIELDS\.source\]: leadSource/);
});

test("the AI guide is linked across the site and asks only for name and email", () => {
  const guideForm = read("src/app/guia-ia-pymes/GuiaIaPymesForm.tsx");
  const guidePage = read("src/app/guia-ia-pymes/page.tsx");
  const guideRoute = read("src/app/api/lead-magnet/route.ts");
  const constants = read("src/lib/constants.ts");
  const home = read("src/app/page.tsx");
  const ctaFinal = read("src/components/sections/CTAFinalSection.tsx");
  const services = read("src/lib/services.ts");
  const navbar = read("src/components/layout/Navbar.tsx");
  const whatsapp = read("src/components/ui/WhatsAppButton.tsx");

  assert.match(guideRoute, /const REQUIRED_FIELDS = \["name", "email"\] as const/);
  assert.match(guideRoute, /if \(businessType\) airtableFields/);
  assert.match(guideForm, /ubicacion,/);
  assert.match(guidePage, /<GuiaIaPymesForm ubicacion="hero" compact \/>/);
  assert.match(guidePage, /<GuiaIaPymesForm ubicacion="pie" \/>/);
  assert.match(constants, /\{ label: "Guía gratuita de IA", href: "\/guia-ia-pymes" \}/);
  assert.match(home, /<GuiaIaSection \/>/);
  assert.match(ctaFinal, /GUIA_IA\.inlineLink/);
  assert.equal((services.match(/guiaCta: true/g) || []).length, 2);
  assert.match(navbar, /MINIMAL_HEADER_PATHS = new Set\(\["\/guia-ia-pymes"\]\)/);
  assert.match(whatsapp, /if \(pathname === "\/guia-ia-pymes"\) return null/);
});

test("the Instagram section loads embeds only on demand and sits after Para quién", () => {
  const section = read("src/components/sections/InstagramVideosSection.tsx");
  const home = read("src/app/page.tsx");
  const config = read("next.config.ts");

  assert.match(home, /<ParaQuienSection \/>\s*<InstagramVideosSection \/>/);
  assert.match(section, /\{active && <VideoModal/);
  assert.match(section, /trackEvent\("video_reproducido"/);
  assert.match(section, /aria-modal="true"/);
  assert.match(config, /frame-src[^"]*https:\/\/www\.instagram\.com/);
});

test("cases show Destapes Oriente with video and Amore with an on-demand reel", () => {
  const page = read("src/app/resultados/ResultadosClient.tsx");
  const home = read("src/components/sections/ResultadosSection.tsx");
  const caseVideo = read("src/components/ui/CaseVideo.tsx");
  const constants = read("src/lib/constants.ts");
  const contacto = read("src/app/contacto/ContactoClient.tsx");

  for (const source of [page, home, constants]) {
    assert.doesNotMatch(source, /Gasfiter[ií]a y Destapes 24H|Jason Vargas/);
  }
  assert.match(page, /slug: "destapes-oriente"/);
  assert.match(page, /src: "\/videos\/destapes-oriente-terreno\.mp4"/);
  assert.match(page, /id: "DFWfRRvvSrJ"/);
  assert.match(home, /video: DESTAPES_ORIENTE_VIDEO/);
  assert.match(caseVideo, /preload="none"/);
  assert.match(caseVideo, /\{playing \? \(\s*<iframe/);
  assert.match(contacto, /href="\/resultados#destapes-oriente"/);
  assert.ok(existsSync(new URL("../public/videos/destapes-oriente-terreno.mp4", import.meta.url)));
});

test("service pages carry a real case, FAQs with FAQPage schema and related links", () => {
  const services = read("src/lib/services.ts");
  const template = read("src/components/templates/ServicePageTemplate.tsx");
  const extras = read("src/components/templates/ServiceExtras.tsx");
  const resultados = read("src/app/resultados/ResultadosClient.tsx");
  const slugs = [
    "estrategia-y-consultoria",
    "publicidad-digital",
    "posicionamiento-en-google",
    "gestion-de-redes-sociales",
    "identidad-visual-y-marca",
    "sistemas-de-ventas-con-ia",
  ];

  for (const slug of slugs) {
    const page = read(`src/app/soluciones/${slug}/page.tsx`);
    assert.match(page, /\.\.\.serviceFaqSchema\(service\)/);
    assert.match(page, /"@type": "City", name: "Santiago"/);
  }
  assert.equal((services.match(/pregunta: "/g) || []).length, 30);
  assert.equal((services.match(/metaTitle: "[^"]*Santiago/g) || []).length, 6);
  assert.doesNotMatch(services.split("const SERVICE_EXTRAS")[1], /\bpymes?\b/i);
  assert.match(services, /kicker: "Caso propio · Social Marketing"/);
  assert.match(template, /<ServiceCaseBlock caso=\{caso\} \/>/);
  assert.match(template, /<ServiceFaqBlock faqs=\{faqs\} \/>/);
  assert.match(extras, /"@type"|svc-faq-item/);
  assert.match(resultados, /id="caso-propio"/);
  assert.match(resultados, /href="\/soluciones\/sistemas-de-ventas-con-ia#caso"/);
});

test("recursos hub publishes 8 articles with Article schema, sitemap and footer link", () => {
  const recursos = read("src/lib/recursos.ts");
  const article = read("src/app/recursos/[slug]/page.tsx");
  const sitemap = read("src/app/sitemap.ts");
  const constants = read("src/lib/constants.ts");
  const llms = read("public/llms.txt");

  assert.equal((recursos.match(/^    slug: "/gm) || []).length, 8);
  assert.doesNotMatch(recursos, /\bpymes?\b/i);
  assert.doesNotMatch(recursos, /—/);
  assert.match(article, /"@type": "Article"/);
  assert.match(article, /export const dynamicParams = false/);
  assert.match(sitemap, /ARTICLES\.map/);
  assert.doesNotMatch(sitemap, /\/about|\/contact"|\/privacy/);
  assert.match(constants, /\{ label: "Recursos", href: "\/recursos" \}/);
  assert.doesNotMatch(llms, /socialmarketingchile\.cl\/[a-z-]+\/\)/);
});

test("technical hardening: local SEO schema, SSR counters, honeypot and rate limit", () => {
  const layout = read("src/app/layout.tsx");
  const hero = read("src/components/sections/HeroSection.tsx");
  const contact = read("src/app/api/contact/route.ts");
  const leadMagnet = read("src/app/api/lead-magnet/route.ts");
  const contactForm = read("src/app/contacto/ContactoClient.tsx");
  const config = read("next.config.ts");

  assert.match(layout, /"@type": "GeoCoordinates"/);
  assert.match(layout, /openingHoursSpecification/);
  assert.match(layout, /lang="es-CL"/);
  assert.doesNotMatch(layout, /share\.google/);
  assert.match(hero, /useState\(end\)/);
  assert.match(contact, /isRateLimited\(request, "contact"\)/);
  assert.match(contact, /getString\(payload\.website\)/);
  assert.match(leadMagnet, /isRateLimited\(request, "lead-magnet"\)/);
  assert.match(contactForm, /name="website"/);
  assert.match(config, /formats: \["image\/avif", "image\/webp"\]/);
});
