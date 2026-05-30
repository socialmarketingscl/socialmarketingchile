"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { RESULTADOS } from "@/lib/constants";

/* ============================================================
   ResultadosSection — Sección 7
   Fondo: #F8FAFC (calm-white) — quiebre visual claro
   3 testimoniales featured en grid de 3 columnas
   ============================================================ */

/* Amore no está en constants.ts — se define aquí */
const AMORE_TESTIMONIAL = {
  quote: "Amore pasó de vender solo por WhatsApp a tener una presencia real en Instagram. Nos armaron la identidad visual, el contenido y las campañas en fechas clave. Hoy el perfil genera consultas solo, sin depender solo del boca a boca.",
  author: "Luciano Cataldo",
  role: "Fundador de Amore",
  metrics: [
    { value: "+4.617", label: "seguidores construidos desde cero" },
    { value: "3.685",  label: "visualizaciones mensuales en Instagram" },
  ],
  services: ["Branding", "Gestión de redes sociales", "Meta Ads", "Contenido", "Campañas estacionales"],
};

/* Evidence images: índice coincide con orden de renderizado (Catalina, Jason, Amore) */
const EVIDENCE: string[][] = [
  ["/images/evidencia/Rios-Eventos-evidencia.jpeg"],
  ["/images/evidencia/Gasfiteria-y-Destapes-evidencia.jpeg"],
  ["/images/evidencia/Amore-evidencia-optimized.jpg"],
];

function getEvidenceAlt(src: string, index = 0) {
  if (src.includes("Rios-Eventos")) {
    return "Evidencia de resultados digitales del caso Ríos Eventos";
  }

  if (src.includes("Gasfiteria-y-Destapes")) {
    return "Evidencia de resultados digitales del caso Gasfitería y Destapes";
  }

  if (src.includes("Amore")) {
    return "Evidencia de resultados digitales del caso Amore";
  }

  return `Evidencia de resultados digitales ${index + 1}`;
}

/* ── Scroll reveal hook ── */
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
      { threshold: 0.15, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);
  return [ref, visible] as const;
}

/* ── Lightbox ── */
interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [idx, setIdx] = useState(initialIndex);
  const [closing, setClosing] = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 200);
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setIdx((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft")  setIdx((p) => (p - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [close, images.length]);

  const touchStartX = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) setIdx((p) => (p + 1) % images.length);
      else        setIdx((p) => (p - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.85)",
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: closing ? 0 : 1,
        transition: "opacity 0.2s ease",
      }}
      onClick={close}
    >
      <button
        onClick={close}
        aria-label="Cerrar"
        style={{
          position: "absolute", top: "20px", right: "20px",
          width: "32px", height: "32px",
          background: "none", border: "none", cursor: "pointer",
          color: "#FFFFFF", fontSize: "24px", lineHeight: 1,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "color 0.2s ease", zIndex: 1,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--kinetic-lime)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF"; }}
      >
        ✕
      </button>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); setIdx((p) => (p - 1 + images.length) % images.length); }}
          aria-label="Anterior"
          style={{
            position: "absolute", left: "20px",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%", width: "44px", height: "44px",
            cursor: "pointer", color: "#FFFFFF", fontSize: "18px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >‹</button>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          maxWidth: "90vw", maxHeight: "85vh",
          borderRadius: "12px", overflow: "hidden",
          animation: closing ? "lb-out 0.2s ease-in forwards" : "lb-in 0.3s ease-out",
        }}
      >
        <Image
          src={images[idx]}
          alt={getEvidenceAlt(images[idx], idx)}
          width={1200}
          height={900}
          style={{
            maxWidth: "90vw",
            maxHeight: "85vh",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
            borderRadius: "12px",
          }}
        />
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); setIdx((p) => (p + 1) % images.length); }}
          aria-label="Siguiente"
          style={{
            position: "absolute", right: "20px",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "50%", width: "44px", height: "44px",
            cursor: "pointer", color: "#FFFFFF", fontSize: "18px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >›</button>
      )}

      <style>{`
        @keyframes lb-in  { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        @keyframes lb-out { from { opacity: 1; transform: scale(1); } to { opacity: 0; transform: scale(0.9); } }
      `}</style>
    </div>
  );
}

/* ── Thumbnail strip ── */
function EvidenceStrip({ images }: { images: string[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx,  setLightboxIdx]  = useState(0);
  const open = (i: number) => { setLightboxIdx(i); setLightboxOpen(true); };

  return (
    <>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "20px" }}>
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            className="evidence-thumb"
            onClick={() => open(i)}
            aria-label={`Abrir ${getEvidenceAlt(src, i).toLowerCase()}`}
            style={{
              height: "120px", borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.1)",
              background: "transparent", padding: 0,
              overflow: "hidden", cursor: "pointer",
              transition: "all 0.2s ease", flexShrink: 0,
              display: "block",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            <Image
              src={src}
              alt={getEvidenceAlt(src, i)}
              width={180}
              height={120}
              className="evidence-thumb-img"
              style={{ height: "120px", width: "auto", objectFit: "cover", display: "block" }}
            />
          </button>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox images={images} initialIndex={lightboxIdx} onClose={() => setLightboxOpen(false)} />
      )}
    </>
  );
}

/* ── Testimonio card ── */
interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  metrics: { value: string; label: string }[];
  services: string[];
}

function TestimonialCard({
  data, evidenceImages, revealRef, visible, delay,
}: {
  data: TestimonialData;
  evidenceImages: string[];
  revealRef: React.RefObject<HTMLDivElement | null>;
  visible: boolean;
  delay: string;
}) {
  return (
    <div
      ref={revealRef}
      className={`res-reveal${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: visible ? delay : "0s" }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid rgba(15,23,42,0.08)",
          borderRadius: "10px",
          padding: "36px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 1px 4px rgba(15,23,42,0.05)",
          height: "100%",
        }}
      >
        {/* Comillas decorativas */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-instrument)",
            fontSize: "4rem",
            color: "var(--kinetic-lime)",
            opacity: 0.55,
            lineHeight: 0.8,
            marginBottom: "16px",
            letterSpacing: "-0.05em",
          }}
        >
          &ldquo;
        </div>

        {/* Quote */}
        <p
          style={{
            fontFamily: "var(--font-instrument)",
            fontStyle: "italic",
            fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
            color: "#1E293B",
            lineHeight: 1.68,
            marginBottom: "28px",
            flex: 1,
          }}
        >
          {data.quote}
        </p>

        {/* Métricas */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
          {data.metrics.map((m, mi) => (
            <div
              key={mi}
              style={{
                backgroundColor: "rgba(190,242,100,0.12)",
                border: "1px solid rgba(190,242,100,0.30)",
                borderRadius: "8px",
                padding: "10px 16px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  color: "#3D6B00",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {m.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.72rem",
                  color: "#64748B",
                  lineHeight: 1.4,
                }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Thumbnails de evidencia */}
        {evidenceImages.length > 0 && <EvidenceStrip images={evidenceImages} />}

        {/* Separador + autor */}
        <div
          style={{
            borderTop: "1px solid rgba(15,23,42,0.08)",
            paddingTop: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-archivo)",
              fontWeight: 700,
              fontSize: "0.92rem",
              color: "#0F172A",
              letterSpacing: "-0.01em",
            }}
          >
            {data.author}
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.80rem",
              color: "#64748B",
            }}
          >
            {data.role}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
            {data.services.map((s) => (
              <span
                key={s}
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.70rem",
                  color: "#64748B",
                  backgroundColor: "rgba(15,23,42,0.05)",
                  border: "1px solid rgba(15,23,42,0.08)",
                  borderRadius: "100px",
                  padding: "3px 10px",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultadosSection() {
  const [t0Ref, t0Visible] = useReveal();
  const [t1Ref, t1Visible] = useReveal();
  const [t2Ref, t2Visible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal("0px 0px -40px 0px");

  /* All testimonials: 2 from constants + Amore hardcoded */
  const allTestimonials: TestimonialData[] = [
    ...RESULTADOS.testimonials,
    AMORE_TESTIMONIAL,
  ];

  const refs    = [t0Ref, t1Ref, t2Ref];
  const visible = [t0Visible, t1Visible, t2Visible];
  const delays  = ["0.2s", "0.4s", "0.6s"];

  return (
    <section
      id="resultados"
      style={{
        position: "relative",
        backgroundColor: "var(--calm-white)",
        padding: "clamp(104px, 10vw, 160px) 0 clamp(64px, 8vw, 100px)",
        overflow: "hidden",
      }}
    >
      <style>{`
        #resultados::before {
          content: "";
          display: block;
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          width: 100%;
          height: 61px;
          margin-top: -1px;
          background: linear-gradient(to bottom, #0A0F1A, #F8FAFC);
          pointer-events: none;
        }

        .evidence-thumb {
          height: 120px !important;
        }
        .evidence-thumb-img {
          height: 120px !important;
          width: auto !important;
        }
        @media (max-width: 767px) {
          .evidence-thumb {
            height: 100px !important;
          }
          .evidence-thumb-img {
            height: 100px !important;
            width: auto !important;
          }
        }

        .res-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .res-reveal.is-visible {
          opacity: 1;
          transform: none;
        }
        .res-cta-reveal {
          opacity: 0;
          transition: opacity 0.6s ease-out;
        }
        .res-cta-reveal.is-visible {
          opacity: 1;
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Encabezado ── */}
        <div style={{ marginBottom: "52px" }}>
          <span className="section-eyebrow section-eyebrow-light" style={{ color: "var(--level-2)" }}>
            — Resultados
          </span>
          <h2 className="section-h2 section-h2-dark">
            {RESULTADOS.h2}
          </h2>
        </div>

        {/* ── 3 testimoniales — grid 3 columnas desktop ── */}
        <div className="testimonials-grid">
          {allTestimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              data={t}
              evidenceImages={EVIDENCE[i] ?? []}
              revealRef={refs[i]}
              visible={visible[i]}
              delay={delays[i]}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          ref={ctaRef}
          className={`res-cta-reveal${ctaVisible ? " is-visible" : ""}`}
          style={{
            textAlign: "center",
            marginTop: "52px",
            transitionDelay: ctaVisible ? "1s" : "0s",
          }}
        >
          <Link
            href={RESULTADOS.cta.href}
            className="arrow-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-inter)",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#0F172A",
              textDecoration: "none",
              borderBottom: "1px solid rgba(15,23,42,0.25)",
              paddingBottom: "2px",
              transition: "border-color 0.2s ease",
            }}
          >
            {RESULTADOS.cta.label}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
