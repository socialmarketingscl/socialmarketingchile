"use client";

type ConversionEvent = "clic_whatsapp" | "descarga_guia" | "formulario_contacto";

type ConversionParams = Record<string, string | number | boolean>;

export function pushGtmConversionEvent(event: ConversionEvent, params: ConversionParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
