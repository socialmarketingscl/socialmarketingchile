"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RESULTADOS } from "@/lib/constants";

/* Amore no está en constants.ts — se define aquí */
const AMORE_TESTIMONIAL = {
  quote:
    "Amore pasó de vender solo por WhatsApp a tener una presencia real en Instagram. Nos armaron la identidad visual, el contenido y las campañas en fechas clave. Hoy el perfil genera consultas solo, sin depender solo del boca a boca.",
  author: "Luciano Cataldo",
  role: "Fundador de Amore",
  metrics: [
    { value: "+4.617", label: "seguidores — desde cero en 5 meses" },
    { value: "3.685", label: "visualizaciones mensuales en Instagram" },
  ],
  services: ["Branding", "Gestión de redes sociales", "Meta Ads", "Contenido", "Campañas estacionales"],
};

/* Evidence images: índice coincide con orden de renderizado (Catalina, Jason, Amore) */
const EVIDENCE: string[][] = [
  ["/images/evidencia/Rios-Eventos-evidencia.jpeg"],
  ["/images/evidencia/Gasfiteria-y-Destapes-evidencia.jpeg"],
  ["/images/evidencia/Amore-evidencia-optimized.jpg"],
];

interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  metrics: { value: string; label: string }[];
  services: string[];
}

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

function useReveal(rootMargin = "0px 0px -80px 0px") {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return [ref, visible] as const;
}

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
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") setIdx((current) => (current + 1) % images.length);
      if (event.key === "ArrowLeft") setIdx((current) => (current - 1 + images.length) % images.length);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [close, images.length]);

  const touchStartX = useRef(0);

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) <= 50) return;
    if (deltaX < 0) setIdx((current) => (current + 1) % images.length);
    else setIdx((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`lightbox${closing ? " is-closing" : ""}`}
      onClick={close}
      role="presentation"
    >
      <button type="button" className="lightbox-close" onClick={close} aria-label="Cerrar">
        ✕
      </button>

      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav-prev"
          onClick={(event) => {
            event.stopPropagation();
            setIdx((current) => (current - 1 + images.length) % images.length);
          }}
          aria-label="Anterior"
        >
          ‹
        </button>
      )}

      <div
        className={`lightbox-frame${closing ? " is-closing" : ""}`}
        onClick={(event) => event.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={images[idx]}
          alt={getEvidenceAlt(images[idx], idx)}
          width={1200}
          height={900}
          className="lightbox-image"
        />
      </div>

      {images.length > 1 && (
        <button
          type="button"
          className="lightbox-nav lightbox-nav-next"
          onClick={(event) => {
            event.stopPropagation();
            setIdx((current) => (current + 1) % images.length);
          }}
          aria-label="Siguiente"
        >
          ›
        </button>
      )}
    </div>
  );
}

function EvidenceStrip({
  images,
  variant = "compact",
}: {
  images: string[];
  variant?: "featured" | "compact";
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const open = (index: number) => {
    setLightboxIdx(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className={`evidence-strip evidence-strip-${variant}`}>
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className="evidence-thumb"
            onClick={() => open(index)}
            aria-label={`Abrir ${getEvidenceAlt(src, index).toLowerCase()}`}
          >
            <Image
              src={src}
              alt={getEvidenceAlt(src, index)}
              width={520}
              height={360}
              className="evidence-thumb-img"
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

function MetricList({ metrics }: { metrics: TestimonialData["metrics"] }) {
  return (
    <div className="results-metrics">
      {metrics.map((metric) => (
        <div key={`${metric.value}-${metric.label}`} className="results-metric">
          <p className="results-metric-value">{metric.value}</p>
          <p className="results-metric-label">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

function Tags({ services }: { services: string[] }) {
  return (
    <div className="results-tags">
      {services.map((service) => (
        <span key={service} className="results-tag">
          {service}
        </span>
      ))}
    </div>
  );
}

function FeaturedCase({ data, evidenceImages }: { data: TestimonialData; evidenceImages: string[] }) {
  return (
    <article className="results-card results-card-featured">
      <div className="results-featured-content">
        <div className="results-quote-mark" aria-hidden="true">
          &ldquo;
        </div>
        <p className="results-quote results-quote-featured">{data.quote}</p>
        <MetricList metrics={data.metrics} />
        <div className="results-author-block">
          <p className="results-author">{data.author}</p>
          <p className="results-role">{data.role}</p>
          <Tags services={data.services} />
        </div>
      </div>

      <div className="results-featured-evidence">
        <EvidenceStrip images={evidenceImages} variant="featured" />
      </div>
    </article>
  );
}

function CompactCase({ data, evidenceImages }: { data: TestimonialData; evidenceImages: string[] }) {
  return (
    <article className="results-card results-card-compact">
      <div className="results-quote-mark" aria-hidden="true">
        &ldquo;
      </div>
      <p className="results-quote">{data.quote}</p>
      <MetricList metrics={data.metrics} />
      {evidenceImages.length > 0 && <EvidenceStrip images={evidenceImages} />}
      <div className="results-author-block">
        <p className="results-author">{data.author}</p>
        <p className="results-role">{data.role}</p>
        <Tags services={data.services} />
      </div>
    </article>
  );
}

export default function ResultadosSection() {
  const [featuredRef, featuredVisible] = useReveal();
  const [secondaryRef, secondaryVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal("0px 0px -40px 0px");

  const featuredCase: TestimonialData = {
    ...RESULTADOS.testimonials[0],
    metrics: [
      { value: "+56%", label: "en eventos — en 3 meses" },
      { value: "+627%", label: "alcance orgánico — en 6 meses" },
    ],
  };

  const secondaryCases: TestimonialData[] = [
    {
      ...RESULTADOS.testimonials[1],
      metrics: [{ value: "+203%", label: "alcance orgánico — en 4 meses" }],
    },
    AMORE_TESTIMONIAL,
  ];

  return (
    <section id="resultados" className="results-section">
      <style>{`
        .results-section {
          position: relative;
          overflow: hidden;
          background: #0F172A;
          padding: clamp(104px, 10vw, 160px) 0 clamp(64px, 8vw, 100px);
        }

        .results-section::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to bottom, #F1F5F9 0%, #0F172A 100%);
          pointer-events: none;
        }

        .results-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .results-header {
          margin-bottom: 52px;
        }

        .results-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #BEF264;
          font-family: var(--font-instrument), serif;
          font-size: 1.10rem;
          font-style: italic;
          line-height: 1;
          letter-spacing: 0.01em;
        }

        .results-title {
          max-width: 760px;
          margin: 0;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.75rem, 3.2vw, 2.7rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.08;
        }

        .res-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .res-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .results-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
        }

        .results-card-featured {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
          gap: 32px;
          align-items: center;
        }

        .results-featured-content {
          min-width: 0;
        }

        .results-secondary-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .results-quote-mark {
          margin-bottom: 14px;
          color: #BEF264;
          font-family: var(--font-instrument), serif;
          font-size: 4rem;
          line-height: 0.8;
          opacity: 0.65;
          letter-spacing: -0.05em;
        }

        .results-quote {
          margin: 0 0 28px;
          color: #E2E8F0;
          font-family: var(--font-instrument), serif;
          font-size: clamp(0.98rem, 1.35vw, 1.08rem);
          font-style: italic;
          line-height: 1.68;
        }

        .results-quote-featured {
          font-size: clamp(1.08rem, 1.55vw, 1.26rem);
        }

        .results-metrics {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 24px;
        }

        .results-metric {
          border: 1px solid rgba(190, 242, 100, 0.24);
          border-radius: 8px;
          background: rgba(190, 242, 100, 0.08);
          padding: 10px 16px;
        }

        .results-metric-value {
          margin: 0 0 5px;
          color: #BEF264;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .results-metric-label {
          margin: 0;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.74rem;
          line-height: 1.4;
        }

        .results-author-block {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 20px;
        }

        .results-author {
          margin: 0 0 6px;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.94rem;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .results-role {
          margin: 0;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.82rem;
        }

        .results-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 12px;
        }

        .results-tag {
          border: 1px solid rgba(255, 255, 255, 0.10);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.70rem;
          padding: 4px 10px;
        }

        .evidence-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .evidence-strip-featured {
          height: 100%;
          margin-bottom: 0;
        }

        .evidence-thumb {
          height: 120px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          border-radius: 12px;
          background: transparent;
          padding: 0;
          overflow: hidden;
          cursor: pointer;
          flex-shrink: 0;
          display: block;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .evidence-strip-featured .evidence-thumb {
          width: 100%;
          height: 300px;
        }

        .evidence-thumb:hover {
          transform: translateY(-2px);
          border-color: rgba(190, 242, 100, 0.24);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
        }

        .evidence-thumb-img {
          height: 120px;
          width: auto;
          object-fit: cover;
          display: block;
          border-radius: 12px;
        }

        .evidence-strip-featured .evidence-thumb-img {
          width: 100%;
          height: 300px;
        }

        .results-cta {
          margin-top: 52px;
          text-align: center;
        }

        .results-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #BEF264;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.875rem;
          font-weight: 700;
          text-decoration: none;
          text-decoration-color: transparent;
          text-underline-offset: 4px;
          transition: text-decoration-color 0.2s ease, gap 0.2s ease;
        }

        .results-link:hover {
          gap: 12px;
          text-decoration: underline;
          text-decoration-color: rgba(190, 242, 100, 0.75);
        }

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: opacity 0.2s ease;
        }

        .lightbox.is-closing {
          opacity: 0;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1;
          width: 32px;
          height: 32px;
          border: 0;
          background: none;
          color: #FFFFFF;
          cursor: pointer;
          font-size: 24px;
          line-height: 1;
        }

        .lightbox-close:hover {
          color: #BEF264;
        }

        .lightbox-nav {
          position: absolute;
          width: 44px;
          height: 44px;
          border: 1px solid rgba(255, 255, 255, 0.20);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.10);
          color: #FFFFFF;
          cursor: pointer;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-nav-prev {
          left: 20px;
        }

        .lightbox-nav-next {
          right: 20px;
        }

        .lightbox-frame {
          max-width: 90vw;
          max-height: 85vh;
          border-radius: 12px;
          overflow: hidden;
          animation: lb-in 0.3s ease-out;
        }

        .lightbox-frame.is-closing {
          animation: lb-out 0.2s ease-in forwards;
        }

        .lightbox-image {
          max-width: 90vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: 12px;
        }

        @keyframes lb-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes lb-out {
          from { opacity: 1; transform: scale(1); }
          to { opacity: 0; transform: scale(0.9); }
        }

        @media (min-width: 768px) {
          .results-eyebrow {
            font-size: 25px;
          }
        }

        @media (max-width: 900px) {
          .results-card-featured {
            grid-template-columns: 1fr;
          }

          .evidence-strip-featured .evidence-thumb,
          .evidence-strip-featured .evidence-thumb-img {
            height: 240px;
          }
        }

        @media (max-width: 767px) {
          .results-section {
            padding: 88px 0 72px;
          }

          .results-container {
            padding: 0 20px;
          }

          .results-secondary-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 16px;
          }

          .results-card {
            padding: 24px;
          }

          .evidence-thumb,
          .evidence-thumb-img {
            height: 100px;
          }

          .evidence-strip-featured .evidence-thumb,
          .evidence-strip-featured .evidence-thumb-img {
            height: 210px;
          }
        }
      `}</style>

      <div className="results-container">
        <header className="results-header">
          <span className="results-eyebrow">— Resultados</span>
          <h2 className="results-title">{RESULTADOS.h2}</h2>
        </header>

        <div
          ref={featuredRef}
          className={`res-reveal${featuredVisible ? " is-visible" : ""}`}
          style={{ transitionDelay: featuredVisible ? "0.15s" : "0s" }}
        >
          <FeaturedCase data={featuredCase} evidenceImages={EVIDENCE[0]} />
        </div>

        <div
          ref={secondaryRef}
          className={`results-secondary-grid res-reveal${secondaryVisible ? " is-visible" : ""}`}
          style={{ transitionDelay: secondaryVisible ? "0.25s" : "0s" }}
        >
          {secondaryCases.map((testimonial, index) => (
            <CompactCase
              key={testimonial.author}
              data={testimonial}
              evidenceImages={EVIDENCE[index + 1] ?? []}
            />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`results-cta res-reveal${ctaVisible ? " is-visible" : ""}`}
          style={{ transitionDelay: ctaVisible ? "0.3s" : "0s" }}
        >
          <Link href={RESULTADOS.cta.href} className="results-link">
            {RESULTADOS.cta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
