import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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

test("only successful lead actions are available as GTM conversion events", () => {
  const events = read("src/lib/gtm-events.ts");
  const analyticsEvents = read("src/components/analytics/AnalyticsEvents.tsx");
  const calBooking = read("src/components/booking/CalBooking.tsx");
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
