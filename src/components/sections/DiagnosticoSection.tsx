"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DIAGNOSTICO } from "@/lib/constants";

/* ============================================================
   DiagnosticoSection — Sección 3
   Fondo: #F8FAFC (calm-white) — sección clara de contraste
   2 columnas: copy + CTA (izq) | 4 pasos numerados (der)
   Sin circuito SVG
   ============================================================ */

export default function DiagnosticoSection() {
  const bodyParagraphs = DIAGNOSTICO.body.split("\n\n");
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
      id="diagnostico"
      ref={sectionRef}
      className={`diagnostico-section${hasAnimated ? " diagnostico-section-active" : ""}`}
      style={{
        position: "relative",
        backgroundColor: "var(--calm-white)",
        padding: "clamp(104px, 10vw, 160px) 0 clamp(64px, 8vw, 100px)",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .diagnostico-section::before {
            content: "";
            display: block;
            position: absolute;
            top: -1px;
            left: 0;
            right: 0;
            width: 100%;
            height: 61px;
            margin-top: -1px;
            background: linear-gradient(to bottom, #0F172A, #F8FAFC);
            pointer-events: none;
          }

          .diagnostico-reveal-left,
          .diagnostico-reveal-panel,
          .diagnostico-step-reveal {
            opacity: 0;
            transition: opacity 0.55s ease-out, transform 0.55s ease-out;
          }

          .diagnostico-reveal-left {
            transform: translateY(22px);
          }

          .diagnostico-reveal-panel {
            transform: translateY(26px);
          }

          .diagnostico-step-reveal {
            transform: translateY(16px);
          }

          .diagnostico-section-active .diagnostico-reveal-left,
          .diagnostico-section-active .diagnostico-reveal-panel,
          .diagnostico-section-active .diagnostico-step-reveal {
            opacity: 1;
            transform: translateY(0);
          }

          .diagnostico-section-active .diagnostico-reveal-left {
            transition-delay: 0.08s;
          }

          .diagnostico-section-active .diagnostico-reveal-panel {
            transition-delay: 0.22s;
          }

          .diagnostico-section-active .diagnostico-step-reveal:nth-child(1) {
            transition-delay: 0.34s;
          }

          .diagnostico-section-active .diagnostico-step-reveal:nth-child(2) {
            transition-delay: 0.46s;
          }

          .diagnostico-section-active .diagnostico-step-reveal:nth-child(3) {
            transition-delay: 0.58s;
          }

          .diagnostico-section-active .diagnostico-step-reveal:nth-child(4) {
            transition-delay: 0.70s;
          }
        `}
      </style>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <div className="diagnostico-grid" style={{ alignItems: "center" }}>

          {/* ── Columna izquierda: H2 + body + CTA ── */}
          <div className="diagnostico-reveal-left">
            <span className="section-eyebrow section-eyebrow-light" style={{ color: "var(--level-2)" }}>
              — El diagnóstico
            </span>
            <h2
              className="section-h2 section-h2-dark"
              style={{ marginBottom: "28px" }}
            >
              {DIAGNOSTICO.h2}
            </h2>

            {bodyParagraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(0.92rem, 1.3vw, 1rem)",
                  color: "#475569",
                  lineHeight: 1.80,
                  marginBottom: i < bodyParagraphs.length - 1 ? "20px" : "44px",
                }}
              >
                {p}
              </p>
            ))}

            {/* CTA — botón oscuro sobre fondo claro */}
            <div style={{ marginBottom: "18px" }}>
              <Link href={DIAGNOSTICO.cta.href} className="hero-cta-primary">
                {DIAGNOSTICO.cta.label}
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Nota de confianza */}
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.80rem",
                color: "#94A3B8",
                lineHeight: 1.65,
                maxWidth: "400px",
              }}
            >
              {DIAGNOSTICO.note}
            </p>
          </div>

          {/* ── Columna derecha: 4 pasos numerados ── */}
          <div
            className="diagnostico-reveal-panel"
            style={{
              alignSelf: "center",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              backgroundColor: "var(--level-2)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              padding: "8px 32px",
              boxShadow: "0 22px 56px rgba(15, 23, 42, 0.14)",
            }}
          >
            {DIAGNOSTICO.steps.map((step, i) => (
              <div
                key={i}
                className="diagnostico-step-reveal"
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "flex-start",
                  paddingTop: "28px",
                  paddingBottom: "28px",
                  borderBottom: i < DIAGNOSTICO.steps.length - 1
                    ? "1px solid rgba(255,255,255,0.15)"
                    : "none",
                }}
              >
                {/* Número del paso — acento Kinetic Lime */}
                <span
                  style={{
                    fontFamily: "var(--font-archivo)",
                    fontWeight: 800,
                    fontSize: "2.0rem",
                    color: "rgba(190, 242, 100, 0.15)",
                    lineHeight: 1,
                    flexShrink: 0,
                    letterSpacing: "-0.03em",
                    marginTop: "4px",
                  }}
                >
                  {step.number}
                </span>

                {/* Título + descripción */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-archivo)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#FFFFFF",
                      marginBottom: "6px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.92rem",
                      color: "#94A3B8",
                      lineHeight: 1.72,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
