"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { HERO, PARA_QUIEN } from "@/lib/constants";

/* ============================================================
   ParaQuienSection — Sección 8
   Fondo: #F8FAFC (calm-white) — segundo quiebre claro
   Dos columnas: Para quién SÍ / Para quién NO
   Sin circuito SVG
   ============================================================ */

const ICON_YES = (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="9" cy="9" r="9" fill="rgba(190,242,100,0.15)" />
    <path d="M5 9l2.8 2.8L13 6" stroke="var(--kinetic-lime)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ICON_NO = (
  <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: "1px" }}>
    <circle cx="9" cy="9" r="9" fill="rgba(100,116,139,0.12)" />
    <path d="M6 6l6 6M12 6l-6 6" stroke="#94A3B8" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const COLUMN_STYLE = {
  borderRadius: "10px",
  padding: "36px",
};

export default function ParaQuienSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="para-quien"
      ref={sectionRef}
      className={`fit-commercial-section${hasAnimated ? " fit-commercial-section-active" : ""}`}
      style={{
        backgroundColor: "var(--calm-white)",
        padding: "clamp(64px, 8vw, 100px) 0",
        borderTop: "1px solid rgba(15,23,42,0.06)",
      }}
    >
      <style>
        {`
          .fit-reveal-left {
            opacity: 0;
            transform: translateX(-20px);
            transition: all 0.5s ease-out 0.2s;
          }

          .fit-reveal-right {
            opacity: 0;
            transform: translateX(20px);
            transition: all 0.5s ease-out 0.4s;
          }

          .fit-reveal-up {
            opacity: 0;
            transform: translateY(15px);
            transition: all 0.4s ease-out 0.6s;
          }

          .fit-commercial-section-active .fit-reveal-left,
          .fit-commercial-section-active .fit-reveal-right,
          .fit-commercial-section-active .fit-reveal-up {
            opacity: 1;
            transform: translate(0, 0);
          }

          .fit-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #BEF264;
            color: #0F172A;
            padding: 14px 32px;
            border-radius: 8px;
            font-family: var(--font-archivo), sans-serif;
            font-weight: 600;
            font-size: 0.92rem;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .fit-cta-button svg {
            transition: transform 0.2s ease;
          }

          .fit-cta-button:hover {
            background: #d4f97f;
          }

          .fit-cta-button:hover svg {
            transform: translateX(4px);
          }
        `}
      </style>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Encabezado ── */}
        <div style={{ maxWidth: "620px", marginBottom: "52px" }}>
          <span className="section-eyebrow section-eyebrow-light" style={{ color: "var(--level-2)" }}>
            — Para quién es
          </span>
          <h2 className="section-h2 section-h2-dark">
            {PARA_QUIEN.h2}
          </h2>
        </div>

        {/* ── Grid SÍ / NO ── */}
        <div className="para-quien-grid" style={{ alignItems: "stretch" }}>

          {/* Columna SÍ */}
          <div
            className="fit-reveal-left"
            style={{
              ...COLUMN_STYLE,
              backgroundColor: "rgba(190, 242, 100, 0.03)",
              border: "1px solid rgba(15,23,42,0.08)",
              borderLeft: "3px solid #BEF264",
              boxShadow: "0 1px 4px rgba(15,23,42,0.04)",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(190,242,100,0.15)",
                  border: "1.5px solid rgba(190,242,100,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8l3.5 3.5L13 4" stroke="var(--kinetic-lime)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "#0F172A",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Es para ti si…
              </p>
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {PARA_QUIEN.forYes.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.90rem",
                    color: "#1E293B",
                    lineHeight: 1.65,
                  }}
                >
                  {ICON_YES}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna NO */}
          <div
            className="fit-reveal-right"
            style={{
              ...COLUMN_STYLE,
              backgroundColor: "rgba(241,245,249,0.70)",
              border: "1px solid rgba(15,23,42,0.06)",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(100,116,139,0.10)",
                  border: "1.5px solid rgba(100,116,139,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  color: "#64748B",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                No es para ti si…
              </p>
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              {PARA_QUIEN.forNo.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.90rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                  }}
                >
                  {ICON_NO}
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── CTA ── */}
        <div
          className="fit-reveal-up"
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(1rem, 1.35vw, 1.125rem)",
              color: "#475569",
              lineHeight: 1.6,
              marginBottom: "18px",
            }}
          >
            Si te identificas con el lado izquierdo, conversemos.
          </p>
          <Link href={HERO.ctaPrimary.href} className="fit-cta-button">
            Agendar diagnóstico
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
