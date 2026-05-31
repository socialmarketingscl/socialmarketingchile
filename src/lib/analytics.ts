type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, params?: AnalyticsParams) => void;
  }
}

const HAS_GTM = Boolean(process.env.NEXT_PUBLIC_GTM_ID);

function cleanParams(params: AnalyticsParams = {}) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  );
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const eventParams = {
    page_location: window.location.href,
    page_path: window.location.pathname,
    ...cleanParams(params),
  };

  window.dataLayer = window.dataLayer || [];

  if (HAS_GTM) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
    });

    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
    return;
  }

  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
}
