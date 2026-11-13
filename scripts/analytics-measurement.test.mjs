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

test("only successful lead actions are available as GTM conversion events", () => {
  const events = read("src/lib/gtm-events.ts");
  const analyticsEvents = read("src/components/analytics/AnalyticsEvents.tsx");
  const contactForm = read("src/app/contacto/ContactoClient.tsx");
  const guideForm = read("src/app/guia-ia-pymes/GuiaIaPymesForm.tsx");

  assert.match(events, /"clic_whatsapp" \| "descarga_guia" \| "formulario_contacto"/);
  assert.doesNotMatch(events, /cta_diagnostico/);
  assert.doesNotMatch(analyticsEvents, /pushGtmConversionEvent\("cta_diagnostico"\)/);
  assert.match(contactForm, /pushGtmConversionEvent\("formulario_contacto"\)/);
  assert.match(guideForm, /pushGtmConversionEvent\("descarga_guia"/);
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
