import Link from "next/link";
import HeroBackground from "@/components/ui/HeroBackground";
import LogoCarousel from "@/components/ui/LogoCarousel";
import { HERO } from "@/lib/constants";

/* ============================================================
   HeroSection — Sección 1
   Fondo: #0A0F1A + glow + circuito SVG (HeroBackground)

   JERARQUÍA SEMÁNTICA + VISUAL:
   <h1>  → badge/pill con keyword-rich text para SEO (visual: label pequeño)
   <p>   → frase grande hero ("Sistemas digitales para...") con acento lime
   <h2>  → descripción visible Inter, Slate Gray claro
   CTAs  → pill lime + outline con borde

   LAYOUT:
   Contenido left-aligned, padding ~5.5% desde borde
   Content ocupa max 600px (55-60% izquierdo)
   Derecho: circuito SVG + isotipo watermark (HeroBackground)
   Logo bar: franja full-width con slots uniformes
   ============================================================ */

export default function HeroSection() {
  const headlineAccent = "captar, ordenar y convertir";
  const [headlineStart, headlineEnd = ""] = HERO.h1Line2.split(headlineAccent);

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#0A0F1A",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Capas ambientales — glow + circuito + watermark */}
      <HeroBackground />

      <style>{`
        @media (max-width: 767px) {
          .hero-seo-badge {
            max-width: calc(100vw - 72px) !important;
            font-size: 10.5px !important;
            letter-spacing: 0.055em !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>

      {/* Área de contenido — left-aligned, padding reducido */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          paddingTop: "clamp(120px, 14vw, 172px)",
          paddingBottom: "clamp(80px, 8vw, 120px)",
          paddingLeft: "clamp(24px, 5.5vw, 80px)",
          paddingRight: "clamp(24px, 5.5vw, 80px)",
        }}
      >

        {/* ══ Columna izquierda — max 600px ══ */}
        <div style={{ maxWidth: "600px" }}>

          {/* ── H1 semántico — visual badge/label para SEO ── */}
          <h1
            className="hero-seo-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.11)",
              borderRadius: "6px",
              padding: "7px 14px",
              fontFamily: "var(--font-inter)",
              fontWeight: 500,
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              lineHeight: 1.4,
              marginBottom: "32px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                backgroundColor: "var(--kinetic-lime)",
                flexShrink: 0,
                animation: "pulse-dot 2.4s ease-in-out infinite",
              }}
            />
            {HERO.h1Line1}
          </h1>

          {/* ── Frase hero grande — <p> visual, Archivo Bold ── */}
          {/* "captar, ordenar y convertir" en Kinetic Lime */}
          <p
            style={{
              fontFamily: "var(--font-archivo)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 4.8vw, 3.6rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.028em",
              marginBottom: "28px",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>
              {headlineStart}
            </span>
            <span style={{ color: "var(--kinetic-lime)" }}>
              {headlineAccent}
            </span>
            <span style={{ color: "#FFFFFF" }}>
              {headlineEnd}
            </span>
          </p>

          {/* ── H2 semántico — descripción visible ── */}
          <h2
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
              fontSize: "clamp(0.97rem, 1.5vw, 1.08rem)",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.75,
              maxWidth: "520px",
              marginBottom: "44px",
            }}
          >
            {HERO.h2}
          </h2>

          {/* ── CTAs ── */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href={HERO.ctaPrimary.href} className="hero-cta-primary">
              {HERO.ctaPrimary.label}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href={HERO.ctaSecondary.href} className="hero-cta-secondary">
              {HERO.ctaSecondary.label}
            </Link>
          </div>

        </div>

        {/* ══ Logo bar — franja full-width, de borde a borde ══ */}
        {HERO.logosBar.visible && (
          <div
            className="hero-logo-strip"
            style={{
              position: "relative",
              zIndex: 2,
              left: "50%",
              width: "100vw",
              transform: "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "76px",
              paddingTop: "26px",
              paddingBottom: "34px",
              backgroundColor: "rgba(255,255,255,0.035)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Label centrado */}
            <p
              className="hero-logo-strip-label"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.67rem",
                color: "rgba(255,255,255,0.34)",
                letterSpacing: "0.13em",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "24px",
              }}
            >
              {HERO.logosBar.label}
            </p>

            {/* Carrusel centrado dentro de la franja full-width */}
            <div
              style={{
                width: "100%",
                overflow: "hidden",
              }}
            >
              <LogoCarousel />
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
