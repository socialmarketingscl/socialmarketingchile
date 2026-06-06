"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SOLUCIONES } from "@/lib/constants";

type RevealOptions = {
  threshold?: number;
  rootMargin?: string;
};

function useScrollReveal({ threshold = 0.2, rootMargin = "0px 0px -80px 0px" }: RevealOptions = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible, rootMargin, threshold]);

  return [ref, isVisible] as const;
}

const SERVICE_IMAGES = [
  "/images/servicio-estrategia-optimized.jpg",
  "/images/servicio-publicidad.jpeg",
  "/images/servicio-seo.jpeg",
  "/images/servicio-redes.jpeg",
  "/images/servicio-branding.jpeg",
  "/images/servicio-ia.jpeg",
] as const;

const PANEL_LABELS = [
  "Estrategia",
  "Publicidad Digital",
  "SEO y Google",
  "Redes Sociales",
  "Identidad Visual",
] as const;

const ArrowIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M4 9H14M10.5 5.5L14 9L10.5 12.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function SolucionesSection() {
  const [activePanel, setActivePanel] = useState(1);
  const [headerRef, headerVisible] = useScrollReveal();
  const [panelsRef, panelsVisible] = useScrollReveal();
  const [featuredRef, featuredVisible] = useScrollReveal();

  const panelServices = SOLUCIONES.services.slice(0, 5);
  const featuredService = SOLUCIONES.services[5];

  return (
    <section id="soluciones" className="solutions-showcase">
      <div className="solutions-top-transition" aria-hidden="true" />

      <style>{`
        .solutions-showcase {
          position: relative;
          overflow: hidden;
          background: #0F172A;
          padding: 80px 0;
        }

        .solutions-top-transition {
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 56px;
          pointer-events: none;
          background: linear-gradient(to bottom, #F1F5F9 0%, #0F172A 100%);
          z-index: 0;
        }

        .solutions-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .solutions-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .solutions-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .solutions-header {
          max-width: 640px;
          margin-bottom: 44px;
        }

        .solutions-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #BEF264;
          font-family: var(--font-instrument), serif;
          font-size: 1.10rem;
          font-style: italic;
          letter-spacing: 0.01em;
        }

        .solutions-title {
          margin: 0;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.75rem, 3.2vw, 2.7rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.08;
        }

        .solutions-panels {
          display: flex;
          gap: 8px;
          width: 100%;
          height: 420px;
          overflow: hidden;
          border-radius: 16px;
        }

        .solutions-panel {
          position: relative;
          height: 100%;
          min-width: 64px;
          width: 64px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          background: #1E293B;
          color: #FFFFFF;
          cursor: pointer;
          overflow: hidden;
          transition:
            flex 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            background-color 0.3s ease,
            border-color 0.3s ease;
        }

        .solutions-panel:hover {
          background: #253447;
          border-color: rgba(255, 255, 255, 0.1);
        }

        .solutions-panel.is-active {
          flex: 1 1 auto;
          width: auto;
          padding: 32px;
          cursor: default;
        }

        .solutions-panel-label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          line-height: 1;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          white-space: nowrap;
          transition: opacity 0.25s ease;
        }

        .solutions-panel.is-active .solutions-panel-label {
          opacity: 0;
          pointer-events: none;
        }

        .solutions-panel-content {
          display: flex;
          align-items: center;
          gap: 32px;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }

        .solutions-panel.is-active .solutions-panel-content {
          opacity: 1;
          pointer-events: auto;
          transition-delay: 0.16s;
        }

        .solutions-panel-image {
          position: relative;
          flex: 0 0 45%;
          height: 100%;
          min-height: 0;
          overflow: hidden;
          border-radius: 12px;
          opacity: 0;
          transition: opacity 0.4s ease 0.2s;
        }

        .solutions-panel.is-active .solutions-panel-image {
          opacity: 1;
        }

        .solutions-panel-copy {
          flex: 1;
          min-width: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s;
        }

        .solutions-panel.is-active .solutions-panel-copy {
          opacity: 1;
          transform: translateY(0);
        }

        .solutions-panel-title {
          margin: 0 0 16px;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.08;
        }

        .solutions-panel-description {
          max-width: 410px;
          margin: 0 0 26px;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.75;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .solutions-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #BEF264;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: text-decoration-color 0.2s ease, gap 0.2s ease;
        }

        .solutions-link:hover {
          gap: 14px;
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .solutions-featured {
          display: flex;
          align-items: center;
          gap: 32px;
          width: 100%;
          margin-top: 24px;
          padding: 32px 40px;
          border: 2px solid #BEF264;
          border-radius: 16px;
          background: #1E293B;
          overflow: hidden;
        }

        .solutions-featured-copy {
          flex: 1;
          min-width: 0;
        }

        .solutions-badge {
          display: inline-block;
          margin-bottom: 18px;
          padding: 5px 14px;
          border-radius: 999px;
          background: #BEF264;
          color: #0F172A;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          line-height: 1;
          text-transform: uppercase;
        }

        .solutions-featured-title {
          margin: 0 0 14px;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.035em;
          line-height: 1.08;
        }

        .solutions-featured-description {
          max-width: 520px;
          margin: 0 0 24px;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.75;
        }

        .solutions-featured-image {
          position: relative;
          flex: 0 0 45%;
          height: 250px;
          overflow: hidden;
          border-radius: 12px;
        }

        .solutions-mobile-list {
          display: none;
        }

        .solutions-mobile-card {
          overflow: hidden;
          border-radius: 12px;
          background: #1E293B;
          padding: 20px;
        }

        .solutions-mobile-card.is-featured {
          border: 2px solid #BEF264;
        }

        .solutions-mobile-image {
          position: relative;
          width: 100%;
          height: 180px;
          margin-bottom: 18px;
          overflow: hidden;
          border-radius: 8px;
        }

        .solutions-mobile-title {
          margin: 0 0 10px;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }

        .solutions-mobile-description {
          margin: 0 0 18px;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.9rem;
          line-height: 1.65;
        }

        @media (min-width: 768px) {
          .solutions-showcase {
            padding: 112px 0;
          }

          .solutions-eyebrow {
            font-size: 25px;
          }
        }

        @media (max-width: 767px) {
          .solutions-showcase {
            padding: 76px 0;
          }

          .solutions-container {
            padding: 0 20px;
          }

          .solutions-header {
            margin-bottom: 32px;
          }

          .solutions-title {
            font-size: clamp(2rem, 9.5vw, 2.65rem);
          }

          .solutions-panels,
          .solutions-featured {
            display: none;
          }

          .solutions-mobile-list {
            display: grid;
            gap: 14px;
          }
        }
      `}</style>

      <div className="solutions-container">
        <div
          ref={headerRef}
          className={`solutions-header solutions-reveal${headerVisible ? " is-visible" : ""}`}
        >
          <span className="solutions-eyebrow">— Soluciones</span>
          <h2 className="solutions-title">{SOLUCIONES.h2}</h2>
        </div>

        <div
          ref={panelsRef}
          className={`solutions-panels solutions-reveal${panelsVisible ? " is-visible" : ""}`}
          style={{ transitionDelay: panelsVisible ? "200ms" : "0ms" }}
        >
          {panelServices.map((service, index) => {
            const isActive = activePanel === index;

            return (
              <div
                key={service.number}
                role="button"
                tabIndex={0}
                className={`solutions-panel${isActive ? " is-active" : ""}`}
                onClick={() => setActivePanel(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setActivePanel(index);
                  }
                }}
                aria-expanded={isActive}
                aria-label={`Ver servicio ${service.name}`}
              >
                <span className="solutions-panel-label">{PANEL_LABELS[index]}</span>
                <div className="solutions-panel-content">
                  <div className="solutions-panel-image">
                    <Image
                      src={SERVICE_IMAGES[index]}
                      alt={`Servicio de ${service.name} de Social Marketing`}
                      fill
                      sizes="(min-width: 768px) 38vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="solutions-panel-copy">
                    <h3 className="solutions-panel-title">{service.name}</h3>
                    <p className="solutions-panel-description">{service.description}</p>
                    <Link
                      href={service.href}
                      className="solutions-link"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Ver servicio <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {featuredService && (
          <div
            ref={featuredRef}
            className={`solutions-featured solutions-reveal${featuredVisible ? " is-visible" : ""}`}
            style={{ transitionDelay: featuredVisible ? "400ms" : "0ms" }}
          >
            <div className="solutions-featured-copy">
              <span className="solutions-badge">Diferenciador</span>
              <h3 className="solutions-featured-title">{featuredService.name}</h3>
              <p className="solutions-featured-description">{featuredService.description}</p>
              <Link href={featuredService.href} className="solutions-link">
                Ver servicio <ArrowIcon />
              </Link>
            </div>
            <div className="solutions-featured-image">
              <Image
                src={SERVICE_IMAGES[5]}
                alt={`Servicio de ${featuredService.name} de Social Marketing`}
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        <div className="solutions-mobile-list">
          {SOLUCIONES.services.map((service, index) => (
            <article
              key={service.number}
              className={`solutions-mobile-card${service.featured ? " is-featured" : ""}`}
            >
              <div className="solutions-mobile-image">
                <Image
                  src={SERVICE_IMAGES[index]}
                  alt={`Servicio de ${service.name} de Social Marketing`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              {service.featured && <span className="solutions-badge">Diferenciador</span>}
              <h3 className="solutions-mobile-title">{service.name}</h3>
              <p className="solutions-mobile-description">{service.description}</p>
              <Link href={service.href} className="solutions-link">
                Ver servicio <ArrowIcon />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
