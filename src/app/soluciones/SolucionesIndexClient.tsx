"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SOLUCIONES } from "@/lib/constants";

const CARD_DELAYS = ["0.1s", "0.3s", "0.5s", "0.2s", "0.4s", "0.6s"];

function useReveal() {
  const ref = useRef<HTMLDivElement | HTMLElement | null>(null);
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
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return [ref, visible] as const;
}

function Reveal({
  as = "div",
  children,
  className = "",
  delay = "0.2s",
}: {
  as?: "div" | "span" | "h1" | "p" | "article";
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  const [ref, visible] = useReveal();
  const Component = as;

  return (
    <Component
      ref={ref as never}
      className={`solutions-index-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: visible ? delay : "0s" }}
    >
      {children}
    </Component>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8.5 4 11 7l-2.5 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SolucionesIndexClient() {
  return (
    <main className="solutions-index-page">
      <style>{`
        .solutions-index-page {
          background-color: var(--level-2);
        }

        .solutions-index-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .solutions-index-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .solutions-index-shell {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }

        .solutions-index-hero {
          background:
            radial-gradient(circle at 78% 16%, rgba(190,242,100,0.055), transparent 34%),
            #0A0F1A;
          padding: clamp(150px, 14vw, 190px) 0 clamp(72px, 9vw, 110px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-align: center;
        }

        .solutions-index-hero-inner {
          max-width: 800px;
          margin: 0 auto;
        }

        .solutions-index-title {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: clamp(2.7rem, 6vw, 5rem);
          line-height: 0.98;
          letter-spacing: -0.026em;
          color: #FFFFFF;
          margin: 0 auto 26px;
        }

        .solutions-index-subtitle {
          max-width: 800px;
          margin: 0 auto;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.12rem);
          line-height: 1.82;
          color: #A8AEBB;
        }

        .solutions-index-grid-section {
          background-color: var(--level-2);
          padding: clamp(70px, 9vw, 108px) 0;
        }

        .solutions-index-card {
          position: relative;
          min-height: 310px;
          display: flex;
          flex-direction: column;
          padding: 30px;
        }

        .solutions-index-number {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          color: rgba(190, 242, 100, 0.15);
          line-height: 1;
          margin-bottom: 34px;
        }

        .solutions-index-card-title {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          line-height: 1.18;
          color: #FFFFFF;
          margin-bottom: 14px;
        }

        .solutions-index-card-copy {
          font-family: var(--font-inter), sans-serif;
          font-size: 0.92rem;
          line-height: 1.72;
          color: #A8AEBB;
          margin-bottom: 28px;
        }

        .solutions-index-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          font-family: var(--font-inter), sans-serif;
          font-weight: 600;
          font-size: 0.84rem;
          color: var(--kinetic-lime);
          text-decoration: none;
          transition: color 0.2s ease, text-decoration-color 0.2s ease;
        }

        .solutions-index-link svg {
          transition: transform 0.2s ease;
        }

        .solutions-index-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .solutions-index-link:hover svg {
          transform: translateX(4px);
        }

        .solutions-index-badge {
          position: absolute;
          top: 28px;
          right: 28px;
          font-family: var(--font-inter), sans-serif;
          font-weight: 700;
          font-size: 0.68rem;
          color: var(--kinetic-lime);
          letter-spacing: 0.10em;
          text-transform: uppercase;
          background-color: rgba(190,242,100,0.08);
          border: 1px solid rgba(190,242,100,0.18);
          border-radius: 100px;
          padding: 4px 12px;
        }

        @media (max-width: 639px) {
          .solutions-index-shell {
            width: min(100% - 36px, 1120px);
          }

          .solutions-index-card {
            min-height: auto;
            padding: 24px;
          }

          .solutions-index-number {
            margin-bottom: 10px;
          }

          .solutions-index-badge {
            top: 22px;
            right: 22px;
          }
        }
      `}</style>

      <section className="solutions-index-hero">
        <div className="solutions-index-shell">
          <div className="solutions-index-hero-inner">
            <Reveal as="span" className="section-eyebrow" delay="0.1s">
              — Soluciones
            </Reveal>
            <Reveal as="h1" className="solutions-index-title" delay="0.2s">
              {SOLUCIONES.h2}
            </Reveal>
            <Reveal as="p" className="solutions-index-subtitle" delay="0.4s">
              {SOLUCIONES.subtitle}
            </Reveal>
          </div>
        </div>
      </section>

      <section id="soluciones" className="solutions-index-grid-section">
        <div className="solutions-index-shell">
          <div className="soluciones-grid">
            {SOLUCIONES.services.map((service, index) => (
              <Reveal
                key={service.number}
                as="article"
                className={`${service.featured ? "service-card-featured" : "card-dark"} solutions-index-card`}
                delay={CARD_DELAYS[index] ?? "0.2s"}
              >
                <span className="solutions-index-number">{service.number}</span>
                {service.featured && (
                  <span className="solutions-index-badge">Diferenciador</span>
                )}
                <h2 className="solutions-index-card-title">{service.name}</h2>
                <p className="solutions-index-card-copy">{service.description}</p>
                <Link href={service.href} className="solutions-index-link">
                  Ver más
                  <ArrowIcon />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
