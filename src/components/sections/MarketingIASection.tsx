"use client";

import Link from "next/link";
import { Brain, Target, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { MARKETING_IA } from "@/lib/constants";

function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.2,
  rootMargin = "0px 0px -80px 0px",
) {
  const ref = useRef<T | null>(null);
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
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, visible]);

  return [ref, visible] as const;
}

const ICONS = [
  <TrendingUp key="marketing" size={24} aria-hidden="true" />,
  <Brain key="ia" size={24} aria-hidden="true" />,
  <Target key="conversion" size={24} aria-hidden="true" />,
];

export default function MarketingIASection() {
  const [headerRef, headerVisible] = useReveal<HTMLDivElement>();
  const [cardsRef, cardsVisible] = useReveal<HTMLDivElement>();
  const [ctaRef, ctaVisible] = useReveal<HTMLDivElement>();

  return (
    <section id="ia-automatizacion" className="mia-section">
      <style>{`
        .mia-section {
          position: relative;
          overflow: hidden;
          background: #F1F5F9;
          padding: 80px 0;
        }

        .mia-section::before {
          content: "";
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 56px;
          pointer-events: none;
          background: linear-gradient(to bottom, #0F172A 0%, #F1F5F9 100%);
          z-index: 0;
        }

        .mia-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .mia-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .mia-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mia-header {
          max-width: 720px;
          margin-bottom: 56px;
        }

        .mia-eyebrow {
          display: block;
          margin-bottom: 16px;
          color: #475569;
          font-family: var(--font-instrument), serif;
          font-size: 1.10rem;
          font-style: italic;
          line-height: 1;
          letter-spacing: 0.01em;
        }

        .mia-title {
          max-width: 720px;
          margin: 0 0 20px;
          color: #0F172A;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.75rem, 3.2vw, 2.7rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.08;
        }

        .mia-subtitle {
          max-width: 720px;
          margin: 0;
          color: #475569;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.75;
        }

        .mia-cards {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .mia-card {
          min-height: 100%;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          background: #FFFFFF;
          padding: 32px;
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.5s ease-out,
            transform 0.5s ease-out,
            border-color 0.3s ease,
            background-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .mia-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mia-card.is-featured {
          border-color: rgba(190, 242, 100, 0.40);
          background: #FFFFFF;
          box-shadow: 0 0 20px rgba(190, 242, 100, 0.05);
        }

        .mia-card:hover {
          transform: translateY(-4px);
          border-color: rgba(190, 242, 100, 0.30);
          background: #FFFFFF;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
        }

        .mia-icon {
          width: 48px;
          height: 48px;
          margin-bottom: 24px;
          border-radius: 12px;
          background: rgba(190, 242, 100, 0.10);
          color: #BEF264;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mia-card-title {
          margin: 0 0 20px;
          color: #0F172A;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.015em;
          line-height: 1.18;
        }

        .mia-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mia-list-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #475569;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(0.92rem, 1.2vw, 1rem);
          line-height: 1.55;
        }

        .mia-dash {
          width: 16px;
          height: 2px;
          border-radius: 999px;
          background: #BEF264;
          flex-shrink: 0;
        }

        .mia-cta-wrap {
          display: flex;
          justify-content: center;
        }

        .mia-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          background: #BEF264;
          color: #0F172A;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 16px 32px;
          text-decoration: none;
          transition: filter 0.2s ease, transform 0.2s ease;
        }

        .mia-cta:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        @media (min-width: 768px) {
          .mia-section {
            padding: 112px 0;
          }

          .mia-eyebrow {
            font-size: 25px;
          }
        }

        @media (max-width: 767px) {
          .mia-section {
            padding: 76px 0;
          }

          .mia-container {
            padding: 0 20px;
          }

          .mia-header {
            margin-bottom: 42px;
          }

          .mia-cards {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-bottom: 32px;
          }

          .mia-card {
            padding: 24px;
          }

          .mia-card.is-visible:nth-child(2) {
            transition-delay: 100ms;
          }

          .mia-card.is-visible:nth-child(3) {
            transition-delay: 200ms;
          }

          .mia-cta {
            width: 100%;
          }
        }
      `}</style>

      <div className="mia-container">
        <div ref={headerRef} className={`mia-header mia-reveal${headerVisible ? " is-visible" : ""}`}>
          <span className="mia-eyebrow">— IA y automatización</span>
          <h2 className="mia-title">{MARKETING_IA.h2}</h2>
          <p className="mia-subtitle">{MARKETING_IA.intro}</p>
        </div>

        <div ref={cardsRef} className="mia-cards">
          {MARKETING_IA.columns.map((column, index) => (
            <article
              key={column.title}
              className={`mia-card${index === 1 ? " is-featured" : ""}${cardsVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: cardsVisible ? `${index * 200}ms` : "0ms" }}
            >
              <div className="mia-icon">{ICONS[index]}</div>
              <h3 className="mia-card-title">{column.title}</h3>
              <ul className="mia-list">
                {column.items.map((item) => (
                  <li key={item} className="mia-list-item">
                    <span className="mia-dash" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div ref={ctaRef} className={`mia-cta-wrap mia-reveal${ctaVisible ? " is-visible" : ""}`} style={{ transitionDelay: ctaVisible ? "600ms" : "0ms" }}>
          <Link href="/soluciones/sistemas-de-ventas-con-ia" className="mia-cta">
            Ver cómo funciona
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
