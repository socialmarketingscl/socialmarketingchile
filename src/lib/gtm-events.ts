"use client";

type ConversionEvent = "cta_diagnostico" | "clic_whatsapp" | "formulario_contacto";

export function pushGtmConversionEvent(event: ConversionEvent) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}
