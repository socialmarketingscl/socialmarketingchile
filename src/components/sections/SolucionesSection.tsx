"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SOLUCIONES } from "@/lib/constants";

const FULL_NOTE = SOLUCIONES.footerNote;

/* Observer individual por elemento */
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
      { threshold: 0.25, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);
  return [ref, visible] as const;
}

const SERVICE_ICONS = [
  <svg key="01" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>,
  <svg key="02" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>,
  <svg key="03" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
  </svg>,
  <svg key="04" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>,
  <svg key="05" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>,
  <svg key="06" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>,
];

export default function SolucionesSection() {
  /* Un observer por card */
  const [card0Ref, card0Visible] = useReveal();
  const [card1Ref, card1Visible] = useReveal();
  const [card2Ref, card2Visible] = useReveal();
  const [card3Ref, card3Visible] = useReveal();
  const [card4Ref, card4Visible] = useReveal();
  const [card5Ref, card5Visible] = useReveal();
  const [noteRef,  noteVisible]  = useReveal("0px 0px -40px 0px");

  /* Máquina de escribir para la frase de cierre */
  const [twText, setTwText] = useState("");
  const [twDone, setTwDone] = useState(false);

  useEffect(() => {
    if (!noteVisible) return;
    let idx = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        idx++;
        setTwText(FULL_NOTE.slice(0, idx));
        if (idx >= FULL_NOTE.length) {
          clearInterval(interval);
          setTwDone(true);
        }
      }, 32);
      return () => clearInterval(interval);
    }, 200);
    return () => clearTimeout(timeout);
  }, [noteVisible]);

  const cardRefs    = [card0Ref, card1Ref, card2Ref, card3Ref, card4Ref, card5Ref];
  const cardVisibles = [card0Visible, card1Visible, card2Visible, card3Visible, card4Visible, card5Visible];

  return (
    <section
      id="soluciones"
      style={{
        backgroundColor: "var(--level-2)",
        padding: "clamp(64px, 8vw, 100px) 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        /* ── Card reveal ── */
        .sol-card {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .sol-card.is-visible {
          opacity: 1;
          transform: none;
        }

        /* Desktop: pequeño stagger por columna cuando todas las cards de una fila se ven a la vez */
        @media (min-width: 640px) {
          .sol-card.is-visible:nth-child(3n+2) { transition-delay: 0.12s; }
          .sol-card.is-visible:nth-child(3n+3) { transition-delay: 0.24s; }
        }

        /* ── Card featured: borde y hover reforzados ── */
        .service-card-featured {
          border-color: rgba(190, 242, 100, 0.4) !important;
        }
        .service-card-featured:hover {
          border-color: rgba(190, 242, 100, 0.7) !important;
          box-shadow: 0 8px 32px rgba(190, 242, 100, 0.12) !important;
        }

        /* ── "Ver más" links estándar ── */
        .sol-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 0.80rem;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .sol-link:hover {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: underline;
          text-underline-offset: 4px;
        }
        .sol-link svg { transition: transform 0.2s ease; }
        .sol-link:hover svg { transform: translateX(4px); }

        /* ── Bloque frase de cierre ── */
        .sol-footer-note {
          max-width: 700px;
          margin: 48px auto 0;
          background-color: #1E293B;
          border-left: 3px solid #BEF264;
          border-radius: 4px;
          padding: 24px 32px;
          box-shadow: inset 3px 0 32px rgba(190, 242, 100, 0.04);
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .sol-footer-note.is-visible {
          opacity: 1;
          transform: none;
        }
        .sol-footer-note p {
          font-family: var(--font-instrument), serif;
          font-style: italic;
          font-size: clamp(0.95rem, 1.6vw, 1.15rem);
          color: rgba(255,255,255,0.78);
          line-height: 1.6;
          text-align: left;
        }

        /* ── Cursor máquina de escribir ── */
        .tw-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: var(--kinetic-lime);
          vertical-align: text-bottom;
          margin-left: 2px;
          animation: tw-blink 0.65s step-start infinite;
        }
        @keyframes tw-blink { 50% { opacity: 0; } }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Encabezado ── */}
        <div style={{ maxWidth: "720px", marginBottom: "56px" }}>
          <span className="section-eyebrow">— Soluciones</span>
          <h2 className="section-h2" style={{ marginBottom: "20px" }}>{SOLUCIONES.h2}</h2>
          <p className="section-sub">{SOLUCIONES.subtitle}</p>
        </div>

        {/* ── Grid de servicios ── */}
        <div className="soluciones-grid">
          {SOLUCIONES.services.map((service, i) =>
            service.featured ? (
              /* ── Card 06 — featured ── */
              <div
                key={service.number}
                ref={cardRefs[i]}
                className={`service-card-featured sol-card${cardVisibles[i] ? " is-visible" : ""}`}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "22px" }}>
                  <div
                    style={{
                      width: "44px", height: "44px", borderRadius: "9px",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.70)",
                    }}
                  >
                    {SERVICE_ICONS[i]}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-archivo)", fontWeight: 800,
                        fontSize: "1.3rem", color: "rgba(190, 242, 100, 0.15)",
                        letterSpacing: "-0.02em", lineHeight: 1,
                      }}
                    >
                      {service.number}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-inter)", fontWeight: 600,
                        fontSize: "0.68rem", color: "var(--kinetic-lime)",
                        letterSpacing: "0.10em", textTransform: "uppercase",
                        backgroundColor: "rgba(190,242,100,0.08)",
                        border: "1px solid rgba(190,242,100,0.18)",
                        borderRadius: "100px", padding: "4px 12px",
                      }}
                    >
                      Diferenciador
                    </span>
                  </div>
                </div>

                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: "1.10rem", color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: "12px" }}>
                  {service.name}
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#A8AEBB", lineHeight: 1.75, marginBottom: "24px" }}>
                  {service.description}
                </p>
                <Link href={service.href} className="como-link arrow-link" style={{ fontSize: "0.82rem" }}>
                  Ver más
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ) : (
              /* ── Cards estándar 01–05 ── */
              <div
                key={service.number}
                ref={cardRefs[i]}
                className={`card-dark sol-card${cardVisibles[i] ? " is-visible" : ""}`}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "42px", height: "42px", borderRadius: "9px",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.70)",
                    }}
                  >
                    {SERVICE_ICONS[i]}
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-archivo)", fontWeight: 800,
                      fontSize: "1.3rem", color: "rgba(190, 242, 100, 0.15)",
                      letterSpacing: "-0.02em", lineHeight: 1,
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                <h3 style={{ fontFamily: "var(--font-archivo)", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "-0.01em", marginBottom: "10px" }}>
                  {service.name}
                </h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.855rem", color: "#A8AEBB", lineHeight: 1.75, marginBottom: "20px" }}>
                  {service.description}
                </p>
                <Link href={service.href} className="sol-link">
                  Ver más
                  <svg width="11" height="11" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            )
          )}
        </div>

        {/* ── Frase de cierre — máquina de escribir ── */}
        <div
          ref={noteRef}
          className={`sol-footer-note${noteVisible ? " is-visible" : ""}`}
        >
          <p>
            {noteVisible ? (
              <>
                {twText}
                {!twDone && <span className="tw-cursor" aria-hidden="true" />}
              </>
            ) : (
              <span style={{ visibility: "hidden" }}>{FULL_NOTE}</span>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
