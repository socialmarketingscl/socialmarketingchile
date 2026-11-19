"use client";

import Cal, { getCalApi, type EmbedEvent } from "@calcom/embed-react";
import { useEffect, useRef } from "react";
import { pushGtmConversionEvent } from "@/lib/gtm-events";

const CAL_NAMESPACE = "diagnostico";
const BRAND_COLOR = "#0F172A";
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK?.trim() ?? "";

export default function CalEmbed() {
  const trackedBookings = useRef(new Set<string>());

  useEffect(() => {
    if (!CAL_LINK) return;

    let active = true;
    let calApi: Awaited<ReturnType<typeof getCalApi>> | null = null;

    const handleBooking = (event: EmbedEvent<"bookingSuccessfulV2">) => {
      const booking = event.detail.data;
      const bookingKey = booking.uid
        ?? `${booking.eventTypeId ?? "evento"}:${booking.startTime ?? "sin-fecha"}`;

      if (trackedBookings.current.has(bookingKey)) return;
      trackedBookings.current.add(bookingKey);

      pushGtmConversionEvent("agenda_confirmada", {
        ubicacion: "contacto_agenda",
        pagina: window.location.pathname,
      });
    };

    void getCalApi({ namespace: CAL_NAMESPACE }).then((api) => {
      if (!active) return;

      calApi = api;
      api("ui", {
        theme: "light",
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": BRAND_COLOR },
          dark: { "cal-brand": BRAND_COLOR },
        },
      });
      api("on", {
        action: "bookingSuccessfulV2",
        callback: handleBooking,
      });
    });

    return () => {
      active = false;
      calApi?.("off", {
        action: "bookingSuccessfulV2",
        callback: handleBooking,
      });
    };
  }, []);

  if (!CAL_LINK) return null;

  return (
    <Cal
      namespace={CAL_NAMESPACE}
      calLink={CAL_LINK}
      config={{
        layout: "month_view",
        theme: "light",
      }}
      style={{ width: "100%", minHeight: "100%", overflow: "auto" }}
    />
  );
}
