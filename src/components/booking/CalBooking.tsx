"use client";

import dynamic from "next/dynamic";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";

export const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK?.trim() ?? "";

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

function CalBookingSkeleton() {
  return (
    <div className="cal-booking-skeleton" aria-hidden="true">
      <div className="cal-skeleton-heading" />
      <div className="cal-skeleton-meta" />
      <div className="cal-skeleton-grid">
        {Array.from({ length: 35 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="cal-skeleton-slots">
        {Array.from({ length: 8 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
    </div>
  );
}

const CalEmbed = dynamic(() => import("@/components/booking/CalEmbed"), {
  ssr: false,
  loading: CalBookingSkeleton,
});

export default function CalBooking() {
  ReactDOM.preconnect("https://app.cal.com", { crossOrigin: "anonymous" });

  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!CAL_LINK || shouldLoad) return;

    const container = containerRef.current;
    if (!container) return;

    const idleWindow = window as IdleWindow;
    let animationFrame = 0;
    let idleHandle = 0;
    let fallbackTimer = 0;

    const scheduleLoad = () => {
      animationFrame = window.requestAnimationFrame(() => {
        if (idleWindow.requestIdleCallback) {
          idleHandle = idleWindow.requestIdleCallback(
            () => setShouldLoad(true),
            { timeout: 1200 },
          );
        } else {
          fallbackTimer = window.setTimeout(() => setShouldLoad(true), 250);
        }
      });
    };

    if (!("IntersectionObserver" in window)) {
      scheduleLoad();
      return () => {
        window.cancelAnimationFrame(animationFrame);
        window.clearTimeout(fallbackTimer);
        idleWindow.cancelIdleCallback?.(idleHandle);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        scheduleLoad();
      },
      { rootMargin: "240px 0px", threshold: 0 },
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(fallbackTimer);
      idleWindow.cancelIdleCallback?.(idleHandle);
    };
  }, [shouldLoad]);

  if (!CAL_LINK) return null;

  return (
    <div
      ref={containerRef}
      className="cal-booking"
      aria-label="Agenda de diagnóstico gratuito"
      aria-busy={!shouldLoad}
    >
      {shouldLoad ? <CalEmbed /> : <CalBookingSkeleton />}
    </div>
  );
}
