"use client";

export type FirstTouchAttribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  landingPage: string;
  referrer: string;
};

const STORAGE_KEY = "sm_first_touch_attribution_v1";

const EMPTY_ATTRIBUTION: FirstTouchAttribution = {
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: "",
  landingPage: "",
  referrer: "",
};

function readStoredAttribution() {
  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEY);
    if (!storedValue) return null;

    const parsed = JSON.parse(storedValue) as Partial<FirstTouchAttribution>;

    return {
      ...EMPTY_ATTRIBUTION,
      ...Object.fromEntries(
        Object.entries(parsed).filter(([, value]) => typeof value === "string"),
      ),
    } as FirstTouchAttribution;
  } catch {
    return null;
  }
}

function getReferrerSource(referrer: string) {
  if (!referrer) return { source: "direct", medium: "(none)" };

  try {
    const referrerUrl = new URL(referrer);
    if (referrerUrl.hostname === window.location.hostname) {
      return { source: "direct", medium: "(none)" };
    }

    return { source: referrerUrl.hostname, medium: "referral" };
  } catch {
    return { source: "direct", medium: "(none)" };
  }
}

export function captureFirstTouchAttribution(): FirstTouchAttribution {
  if (typeof window === "undefined") return EMPTY_ATTRIBUTION;

  const storedAttribution = readStoredAttribution();
  if (storedAttribution) return storedAttribution;

  const searchParams = new URLSearchParams(window.location.search);
  const referrer = document.referrer;
  const fallback = getReferrerSource(referrer);
  const attribution: FirstTouchAttribution = {
    utmSource: searchParams.get("utm_source")?.trim() || fallback.source,
    utmMedium: searchParams.get("utm_medium")?.trim() || fallback.medium,
    utmCampaign: searchParams.get("utm_campaign")?.trim() || "",
    utmContent: searchParams.get("utm_content")?.trim() || "",
    utmTerm: searchParams.get("utm_term")?.trim() || "",
    landingPage: `${window.location.pathname}${window.location.search}`,
    referrer,
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Attribution still works for the current page when storage is unavailable.
  }

  return attribution;
}

export function getFirstTouchAttribution() {
  return captureFirstTouchAttribution();
}
