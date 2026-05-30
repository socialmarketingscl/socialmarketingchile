"use client";

import { useEffect, useRef, useState } from "react";
import { MARKETING_IA } from "@/lib/constants";

/* ============================================================
   MarketingIASection — Sección 6
   Fondo: #0A0F1A (level-1)
   3 columnas de capacidades + quote con separador + párrafo AEO
   Bullets: guiones lime — NO checks (checks = sección 8)
   ============================================================ */

/* Icono por columna */
const COL_ICONS = [
  /* Marketing Digital — trending up */
  <svg key="mkt" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--kinetic-lime)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>,
  /* Inteligencia Artificial — cpu */
  <svg key="ia" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--kinetic-lime)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9"  y1="1"  x2="9"  y2="4"  />
    <line x1="15" y1="1"  x2="15" y2="4"  />
    <line x1="9"  y1="20" x2="9"  y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9"  x2="23" y2="9"  />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1"  y1="9"  x2="4"  y2="9"  />
    <line x1="1"  y1="14" x2="4"  y2="14" />
  </svg>,
  /* Conversión Comercial — target */
  <svg key="conv" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--kinetic-lime)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
];


function useReveal(rootMargin = "0px 0px -80px 0px") {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);
  return [ref, visible] as const;
}

export default function MarketingIASection() {
  const [col0Ref, col0Visible] = useReveal();
  const [col1Ref, col1Visible] = useReveal();
  const [col2Ref, col2Visible] = useReveal();

  const colRefs    = [col0Ref, col1Ref, col2Ref];
  const colVisibles = [col0Visible, col1Visible, col2Visible];

  return (
    <section
      id="ia-automatizacion"
      style={{
        backgroundColor: "#0A0F1A",
        padding: "clamp(64px, 8vw, 100px) 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        /* ── Column reveal — each enters from its own direction ── */
        .mia-col {
          opacity: 0;
          transition: opacity 0.55s ease-out, transform 0.55s ease-out;
        }
        .mia-col-0 { transform: translateX(-40px); }
        .mia-col-1 { transform: translateY(30px); }
        .mia-col-2 { transform: translateX(40px); }
        .mia-col.is-visible {
          opacity: 1;
          transform: none;
        }
        /* Stagger: col 1 slightly after col 0, col 2 after col 1 */
        .mia-col-1.is-visible { transition-delay: 0.15s; }
        .mia-col-2.is-visible { transition-delay: 0.30s; }

        /* ── Bullet reveal — staggered after column appears ── */
        .mia-bullet {
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.35s ease-out, transform 0.35s ease-out;
        }
        .mia-col.is-visible .mia-bullet {
          opacity: 1;
          transform: none;
        }
        .mia-col.is-visible .mia-bullet:nth-child(1)  { transition-delay: 0.25s; }
        .mia-col.is-visible .mia-bullet:nth-child(2)  { transition-delay: 0.35s; }
        .mia-col.is-visible .mia-bullet:nth-child(3)  { transition-delay: 0.45s; }
        .mia-col.is-visible .mia-bullet:nth-child(4)  { transition-delay: 0.55s; }
        .mia-col.is-visible .mia-bullet:nth-child(5)  { transition-delay: 0.65s; }
        .mia-col.is-visible .mia-bullet:nth-child(6)  { transition-delay: 0.75s; }
        .mia-col-1.is-visible .mia-bullet:nth-child(1) { transition-delay: 0.40s; }
        .mia-col-1.is-visible .mia-bullet:nth-child(2) { transition-delay: 0.50s; }
        .mia-col-1.is-visible .mia-bullet:nth-child(3) { transition-delay: 0.60s; }
        .mia-col-1.is-visible .mia-bullet:nth-child(4) { transition-delay: 0.70s; }
        .mia-col-1.is-visible .mia-bullet:nth-child(5) { transition-delay: 0.80s; }
        .mia-col-1.is-visible .mia-bullet:nth-child(6) { transition-delay: 0.90s; }
        .mia-col-2.is-visible .mia-bullet:nth-child(1) { transition-delay: 0.55s; }
        .mia-col-2.is-visible .mia-bullet:nth-child(2) { transition-delay: 0.65s; }
        .mia-col-2.is-visible .mia-bullet:nth-child(3) { transition-delay: 0.75s; }
        .mia-col-2.is-visible .mia-bullet:nth-child(4) { transition-delay: 0.85s; }
        .mia-col-2.is-visible .mia-bullet:nth-child(5) { transition-delay: 0.95s; }
        .mia-col-2.is-visible .mia-bullet:nth-child(6) { transition-delay: 1.05s; }

        /* ── Desktop: vertical separators between columns ── */
        @media (min-width: 768px) {
          .mia-col-0, .mia-col-1 {
            border-right: 1px solid rgba(255, 255, 255, 0.1);
          }
          .mia-col-2 {
            border-right: none;
          }
        }

        /* ── Mobile: horizontal separators between stacked columns ── */
        @media (max-width: 767px) {
          .mia-col-0, .mia-col-1 {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-bottom: 24px;
            margin-bottom: 24px;
          }
          .mia-col-2 {
            border-bottom: none;
            border-right: none;
          }
        }

      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Encabezado ── */}
        <div style={{ maxWidth: "800px", marginBottom: "64px" }}>
          <span className="section-eyebrow">— IA y automatización</span>
          <h2 className="section-h2" style={{ marginBottom: "20px" }}>
            {MARKETING_IA.h2}
          </h2>
          <p className="section-sub">{MARKETING_IA.intro}</p>
        </div>

        {/* ── 3 columnas — bullets con guiones lime ── */}
        <div
          className="mia-grid"
          style={{
            marginBottom: "64px",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {MARKETING_IA.columns.map((col, i) => (
            <div
              key={col.title}
              ref={colRefs[i]}
              className={`mia-col mia-col-${i}${colVisibles[i] ? " is-visible" : ""}`}
              style={{
                padding: "36px 32px",
                backgroundColor: i === 1 ? "rgba(255,255,255,0.025)" : "transparent",
              }}
            >
              {/* Icono */}
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(190,242,100,0.07)",
                  border: "1px solid rgba(190,242,100,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                {COL_ICONS[i]}
              </div>

              {/* Título de columna */}
              <h3
                style={{
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  marginBottom: "20px",
                }}
              >
                {col.title}
              </h3>

              {/* Items — guión lime como bullet */}
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "11px" }}>
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="mia-bullet"
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color: "#A8AEBB",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        color: "var(--kinetic-lime)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        flexShrink: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Párrafo AEO — label + texto para Google y motores IA ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "32px" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "0.65rem",
              color: "rgba(168,174,187,0.75)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "10px",
            }}
          >
            Sobre Social Marketing
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.78rem",
              color: "#A8AEBB",
              lineHeight: 1.82,
              maxWidth: "760px",
            }}
          >
            {MARKETING_IA.aeo}
          </p>
        </div>

      </div>
    </section>
  );
}
