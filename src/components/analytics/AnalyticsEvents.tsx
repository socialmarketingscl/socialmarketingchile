"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";
import { pushGtmConversionEvent } from "@/lib/gtm-events";

function getElementText(element: Element) {
  return element.textContent?.replace(/\s+/g, " ").trim() || "";
}

function getTrackingLocation(element: Element) {
  return (
    element.closest("header") && "navbar" ||
    element.closest("footer") && "footer" ||
    element.closest("#cta-final") && "cta_final" ||
    element.closest("#hero") && "hero" ||
    element.closest("#soluciones") && "soluciones" ||
    element.closest(".contact-page") && "contacto" ||
    "page"
  );
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      const button = target.closest("button");
      const interactiveElement = link || button;
      if (!interactiveElement) return;

      const text = getElementText(interactiveElement);
      const location = getTrackingLocation(interactiveElement);

      if (link?.href.includes("wa.me")) {
        pushGtmConversionEvent("clic_whatsapp");
        trackEvent("whatsapp_clicked", {
          link_text: text || "WhatsApp",
          location,
        });
        return;
      }

      if (link?.href.startsWith("mailto:")) {
        trackEvent("email_clicked", {
          link_text: text || "Email",
          location,
        });
        return;
      }

      const href = link?.getAttribute("href") || "";
      const isContactLink = link ? new URL(link.href).pathname === "/contacto" || href === "/contacto" : false;

      if (isContactLink || text.toLowerCase().includes("agendar diagnóstico")) {
        pushGtmConversionEvent("cta_diagnostico");
        trackEvent("diagnostic_cta_clicked", {
          link_text: text,
          location,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
