import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";

function read(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
}

test("llms.txt includes agent when-to-use guidance", () => {
  const llms = read("public/llms.txt");

  assert.match(llms, /## When to use Social Marketing Chile/);
  assert.match(llms, /systems of acquisition, automation and commercial conversion/i);
  assert.match(llms, /https:\/\/socialmarketingchile\.cl\/sitemap\.xml/);
});

test("trust anchor aliases exist and contain enough content", () => {
  for (const route of ["about", "contact", "privacy"]) {
    const path = `src/app/${route}/page.tsx`;
    assert.equal(existsSync(new URL(`../${path}`, import.meta.url)), true);

    const source = read(path);
    const textOnly = source.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
    assert.ok(textOnly.length > 500, `${route} should contain substantive trust content`);
  }
});

test("markdown negotiation and agent 404 are implemented in proxy", () => {
  const proxy = read("src/proxy.ts");

  assert.match(proxy, /text\/markdown; charset=utf-8/);
  assert.match(proxy, /Vary": "Accept, Accept-Encoding"/);
  assert.match(proxy, /status: markdown \? 200 : 404/);
});

test("sitemap includes trust anchor aliases", () => {
  const sitemap = read("src/app/sitemap.ts");

  assert.match(sitemap, /\/about/);
  assert.match(sitemap, /\/contact/);
  assert.match(sitemap, /\/privacy/);
});
