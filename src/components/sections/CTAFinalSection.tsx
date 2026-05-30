"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONTACT, CTA_FINAL } from "@/lib/constants";

/* ============================================================
   CTAFinalSection — Sección 9
   Fondo: #0A0F1A (level-1) con glow lime sutil — cierre
   Centrado, H2 grande, 2 CTAs, tagline
   Sin circuito SVG
   ============================================================ */

export default function CTAFinalSection() {
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
      id="cta-final"
      ref={sectionRef}
      className={`final-cta-section${hasAnimated ? " final-cta-section-active" : ""}`}
      style={{
        position: "relative",
        backgroundColor: "#141B2D",
        padding: "clamp(120px, 12vw, 180px) 0 clamp(80px, 10vw, 120px)",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .final-cta-section::before {
            content: "";
            display: block;
            position: absolute;
            top: -1px;
            left: 0;
            right: 0;
            width: 100%;
            height: 61px;
            margin-top: -1px;
            background: linear-gradient(to bottom, #F8FAFC, #141B2D);
            pointer-events: none;
          }

          .final-cta-reveal {
            opacity: 0;
            transform: translateY(18px);
            transition: opacity 0.55s ease-out, transform 0.55s ease-out;
          }

          .final-cta-section-active .final-cta-reveal {
            opacity: 1;
            transform: translateY(0);
          }

          .final-cta-section-active .final-cta-reveal:nth-child(1) {
            transition-delay: 0.1s;
          }

          .final-cta-section-active .final-cta-reveal:nth-child(2) {
            transition-delay: 0.22s;
          }

          .final-cta-section-active .final-cta-reveal:nth-child(3) {
            transition-delay: 0.34s;
          }

          .final-cta-section-active .final-cta-reveal:nth-child(4) {
            transition-delay: 0.46s;
          }

          .final-cta-primary-pulse {
            position: relative;
            isolation: isolate;
            overflow: visible;
            animation: final-cta-button-glow 2.8s ease-in-out infinite;
          }

          .final-cta-primary-pulse::after {
            content: "";
            position: absolute;
            inset: -7px;
            z-index: -1;
            border: 1px solid rgba(190, 242, 100, 0.38);
            border-radius: inherit;
            opacity: 0;
            transform: scale(0.94);
            animation: final-cta-pulse-ring 2.8s ease-in-out infinite;
            pointer-events: none;
          }

          .final-cta-primary-pulse svg,
          .final-cta-whatsapp-action svg {
            transition: transform 0.22s ease;
          }

          .final-cta-primary-pulse:hover {
            opacity: 1;
            transform: translateY(-2px) scale(1.02);
            box-shadow:
              0 10px 34px rgba(190, 242, 100, 0.34),
              0 0 34px rgba(190, 242, 100, 0.18);
          }

          .final-cta-primary-pulse:hover svg {
            transform: translateX(4px);
          }

          .final-cta-whatsapp-action {
            transition: border-color 0.22s ease, background-color 0.22s ease, box-shadow 0.22s ease, transform 0.22s ease;
          }

          .final-cta-whatsapp-action:hover {
            transform: translateY(-2px);
            border-color: rgba(190, 242, 100, 0.36);
            box-shadow: 0 10px 28px rgba(190, 242, 100, 0.08);
          }

          .final-cta-whatsapp-action:hover svg {
            transform: scale(1.08);
          }

          @keyframes final-cta-button-glow {
            0%, 100% {
              box-shadow:
                0 6px 22px rgba(190, 242, 100, 0.20),
                0 0 0 rgba(190, 242, 100, 0);
            }

            45% {
              box-shadow:
                0 10px 34px rgba(190, 242, 100, 0.34),
                0 0 30px rgba(190, 242, 100, 0.20);
            }
          }

          @keyframes final-cta-pulse-ring {
            0%, 100% {
              opacity: 0;
              transform: scale(0.94);
            }

            42% {
              opacity: 0.34;
              transform: scale(1);
            }

            70% {
              opacity: 0;
              transform: scale(1.14);
            }
          }
        `}
      </style>
      {/* Glow ambiental — fondo, sin circuito */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.018) 45%, transparent 70%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 32px",
          textAlign: "center",
        }}
      >
        {/* Tagline pequeño arriba */}
        <p
          className="final-cta-reveal"
          style={{
            fontFamily: "var(--font-instrument)",
            fontStyle: "italic",
            fontSize: "1rem",
            color: "rgba(255,255,255,0.66)",
            marginBottom: "20px",
            letterSpacing: "0.01em",
          }}
        >
          {CTA_FINAL.tagline}
        </p>

        {/* H2 principal */}
        <h2
          className="final-cta-reveal"
          style={{
            fontFamily: "var(--font-archivo)",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            color: "#FFFFFF",
            lineHeight: 1.08,
            letterSpacing: "-0.028em",
            marginBottom: "24px",
          }}
        >
          {CTA_FINAL.h2}
        </h2>

        {/* Cuerpo */}
        <p
          className="final-cta-reveal"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)",
            color: "#A8AEBB",
            lineHeight: 1.75,
            maxWidth: "600px",
            margin: "0 auto 48px",
          }}
        >
          {CTA_FINAL.body}
        </p>

        {/* CTAs */}
        <div
          className="final-cta-reveal"
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* CTA Primario — lime pill */}
          <Link href={CTA_FINAL.ctaPrimary.href} className="hero-cta-primary final-cta-primary-pulse">
            {CTA_FINAL.ctaPrimary.label}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          {/* CTA Secundario — WhatsApp outline */}
          <a
            href={CONTACT.whatsappUrlWithMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-secondary final-cta-whatsapp-action"
            style={{ display: "inline-flex", alignItems: "center", gap: "9px" }}
          >
            {/* WhatsApp icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {CTA_FINAL.ctaSecondary.label}
          </a>
        </div>

      </div>
    </section>
  );
}
