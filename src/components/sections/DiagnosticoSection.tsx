"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DIAGNOSTICO } from "@/lib/constants";

function useScrollReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -80px 0px",
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isVisible) return;

    const reveal = () => {
      setIsVisible(true);
      setIsReady(true);
    };

    const isElementVisible = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= viewportHeight * (1 - threshold) && rect.bottom >= viewportHeight * threshold;
    };

    if (element.id && window.location.hash === `#${element.id}`) {
      reveal();
      setIsReady(true);
      return;
    }

    if (isElementVisible()) {
      reveal();
      setIsReady(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    const handleViewportChange = () => {
      if (isElementVisible()) {
        reveal();
        observer.disconnect();
        window.removeEventListener("scroll", handleViewportChange);
        window.removeEventListener("resize", handleViewportChange);
      }
    };

    observer.observe(element);
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange);
    const frame = window.requestAnimationFrame(() => {
      if (isElementVisible()) {
        handleViewportChange();
        return;
      }

      setIsReady(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, [isVisible, rootMargin, threshold]);

  return [ref, isVisible, isReady] as const;
}

const STEP_SUMMARIES: Record<string, string> = {
  "01": "Conocemos tu negocio y objetivos.",
  "02": "Detectamos el desafío real.",
  "03": "Enfocamos lo que realmente importa.",
  "04": "Trazamos el camino adecuado.",
};

export default function DiagnosticoSection() {
  const [sectionRef, sectionVisible, sectionReady] = useScrollReveal<HTMLElement>(
    0.12,
    "0px 0px -60px 0px",
  );
  const [gridRef, gridVisible, gridReady] = useScrollReveal<HTMLDivElement>(
    0.3,
    "0px 0px -60px 0px",
  );

  return (
    <section
      id="diagnostico"
      ref={sectionRef}
      className="diagnostico-section"
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "-1px",
        backgroundColor: "#0F172A",
      }}
    >
      <div className="diagnostico-top-transition" aria-hidden="true" />

      <div
        className={`diagnostico-bg${sectionReady && !sectionVisible ? " is-pending" : ""}${
          sectionVisible ? " is-visible" : ""
        }`}
        aria-hidden="true"
      >
        <Image
          src="/images/diagnostico-bg-optimized.jpg"
          alt=""
          fill
          priority={false}
          quality={95}
          sizes="100vw"
          className="diagnostico-bg-image object-cover object-right"
        />
      </div>
      <div className="diagnostico-overlay-horizontal" aria-hidden="true" />
      <div className="diagnostico-overlay-bottom" aria-hidden="true" />

      <style>{`
        .diagnostico-section {
          padding: 80px 0;
        }

        .diagnostico-top-transition {
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 40px;
          z-index: 5;
          pointer-events: none;
          background: linear-gradient(to bottom, #F8FAFC, #0F172A);
        }

        .diagnostico-bg {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 0;
          opacity: 1;
          transform: scale(1);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .diagnostico-bg.is-pending {
          opacity: 0;
          transform: scale(1.015);
        }

        .diagnostico-bg.is-visible {
          opacity: 1;
          transform: scale(1);
        }

        .diagnostico-bg-image {
          object-fit: cover;
          object-position: right center;
        }

        .diagnostico-overlay-horizontal {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(to right, #0F172A 0%, #0F172A 25%, transparent 55%);
        }

        .diagnostico-overlay-bottom {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(to top, #0F172A 0%, transparent 20%);
        }

        .diagnostico-container {
          position: relative;
          z-index: 10;
          max-width: none;
          margin: 0 auto;
          padding: 0 clamp(24px, 5.5vw, 80px);
        }

        .diagnostico-content {
          width: min(58%, 680px);
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .diagnostico-content.is-pending {
          opacity: 0;
          transform: translateY(30px);
        }

        .diagnostico-content.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .diagnostico-eyebrow {
          display: block;
          margin-bottom: 22px;
          color: #BEF264;
          font-family: var(--font-instrument), serif;
          font-size: 1.10rem;
          font-style: italic;
          line-height: 1;
          letter-spacing: 0.01em;
        }

        .diagnostico-title {
          max-width: 680px;
          margin: 0 0 18px;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.75rem, 3.2vw, 2.7rem);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.08;
        }

        .diagnostico-copy-stack {
          max-width: 520px;
          margin-bottom: 40px;
        }

        .diagnostico-copy {
          margin: 0;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.75;
        }

        .diagnostico-copy + .diagnostico-copy {
          margin-top: 14px;
        }

        .diagnostico-cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          max-width: 580px;
          margin-bottom: 40px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
        }

        .diagnostico-card {
          min-height: 152px;
          padding: 22px 24px;
          background: rgba(255, 255, 255, 0.03);
          border-right: 1px solid rgba(255, 255, 255, 0.10);
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          opacity: 1;
          transform: translateY(0);
          transition:
            opacity 0.5s ease-out,
            transform 0.5s ease-out,
            background-color 0.4s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .diagnostico-card.is-pending {
          opacity: 0;
          transform: translateY(20px);
          background: rgba(255, 255, 255, 0.01);
        }

        .diagnostico-card:nth-child(2n) {
          border-right: 0;
        }

        .diagnostico-card:nth-child(n + 3) {
          border-bottom: 0;
        }

        .diagnostico-card.is-visible {
          opacity: 1;
          transform: translateY(0);
          background: rgba(255, 255, 255, 0.03);
        }

        .diagnostico-card-number {
          display: block;
          margin-bottom: 12px;
          color: #BEF264;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(2.25rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          opacity: 1;
          transition: opacity 0.4s ease;
        }

        .diagnostico-card.is-pending .diagnostico-card-number {
          opacity: 0.35;
        }

        .diagnostico-card.is-visible .diagnostico-card-number {
          opacity: 1;
        }

        .diagnostico-card-title {
          margin: 0 0 7px;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(0.92rem, 1.3vw, 1.04rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1.25;
          transition: color 0.4s ease;
        }

        .diagnostico-card.is-pending .diagnostico-card-title {
          color: rgba(255, 255, 255, 0.36);
        }

        .diagnostico-card.is-visible .diagnostico-card-title {
          color: #FFFFFF;
        }

        .diagnostico-card-description {
          margin: 0;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(0.78rem, 1.1vw, 0.9rem);
          line-height: 1.55;
          transition: color 0.4s ease;
        }

        .diagnostico-card.is-pending .diagnostico-card-description {
          color: rgba(148, 163, 184, 0.32);
        }

        .diagnostico-card.is-visible .diagnostico-card-description {
          color: #94A3B8;
        }

        .diagnostico-cta-wrap {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease-out 1.2s, transform 0.6s ease-out 1.2s;
        }

        .diagnostico-cta-wrap.is-pending {
          opacity: 0;
          transform: translateY(30px);
        }

        .diagnostico-cta-wrap.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .diagnostico-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          background: #BEF264;
          color: #0F172A;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1;
          text-decoration: none;
          transition: filter 0.22s ease, transform 0.22s ease;
        }

        .diagnostico-cta:hover {
          filter: brightness(1.10);
          transform: translateY(-1px);
        }

        .diagnostico-note {
          margin: 16px 0 0;
          max-width: 520px;
          color: #64748B;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.88rem;
          line-height: 1.72;
        }

        @media (hover: hover) and (pointer: fine) {
          .diagnostico-card.is-visible:hover {
            transform: translateY(-4px);
            border-color: rgba(190, 242, 100, 0.30);
            background: rgba(255, 255, 255, 0.06);
            box-shadow: 0 0 20px rgba(190, 242, 100, 0.15), 0 8px 25px rgba(0, 0, 0, 0.30);
          }
        }

        @media (min-width: 768px) {
          .diagnostico-section {
            padding: 112px 0;
          }

          .diagnostico-eyebrow {
            font-size: 25px;
          }
        }

        @media (max-width: 1024px) {
          .diagnostico-content {
            width: 62%;
          }
        }

        @media (max-width: 767px) {
          .diagnostico-section {
            padding: 80px 0;
          }

          .diagnostico-bg {
            width: 100%;
            opacity: 0.20;
          }

          .diagnostico-bg.is-pending {
            opacity: 0;
          }

          .diagnostico-bg.is-visible {
            opacity: 0.20;
          }

          .diagnostico-overlay-horizontal {
            background: linear-gradient(to right, #0F172A 0%, rgba(15, 23, 42, 0.84) 34%, transparent 72%);
          }

          .diagnostico-overlay-bottom {
            background: linear-gradient(to top, #0F172A 0%, transparent 20%);
          }

          .diagnostico-container {
            padding: 0 20px;
          }

          .diagnostico-content {
            width: 100%;
            text-align: left;
          }

          .diagnostico-eyebrow {
            margin-bottom: 18px;
          }

          .diagnostico-title {
            font-size: clamp(1.75rem, 9vw, 2.7rem);
          }

          .diagnostico-copy-stack {
            margin-bottom: 34px;
          }

          .diagnostico-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            margin-bottom: 34px;
          }

          .diagnostico-card {
            min-height: 138px;
            padding: 18px 16px;
          }

          .diagnostico-card-number {
            margin-bottom: 10px;
            font-size: 2.25rem;
          }

          .diagnostico-card-title {
            font-size: 0.9rem;
          }

          .diagnostico-card-description {
            font-size: 0.78rem;
          }

          .diagnostico-cta {
            width: 100%;
          }
        }

        @media (max-width: 430px) {
          .diagnostico-cards {
            grid-template-columns: 1fr;
          }

          .diagnostico-card,
          .diagnostico-card:nth-child(2n),
          .diagnostico-card:nth-child(n + 3) {
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.10);
          }

          .diagnostico-card:last-child {
            border-bottom: 0;
          }
        }
      `}</style>

      <div className="diagnostico-container">
        <div
          className={`diagnostico-content${sectionReady && !sectionVisible ? " is-pending" : ""}${
            sectionVisible ? " is-visible" : ""
          }`}
        >
          <span className="diagnostico-eyebrow">— El diagnóstico</span>
          <h2 className="diagnostico-title">{DIAGNOSTICO.h2}</h2>

          <div className="diagnostico-copy-stack">
            <p className="diagnostico-copy">
              Cada negocio tiene un problema diferente. Por eso nuestro primer paso siempre es un
              diagnóstico: entender tu situación real, tus canales digitales, tu proceso comercial y
              tus objetivos antes de recomendar un camino.
            </p>
          </div>

          <div ref={gridRef} className="diagnostico-cards">
            {DIAGNOSTICO.steps.map((step, index) => (
              <div
                key={step.number}
                className={`diagnostico-card${gridReady && !gridVisible ? " is-pending" : ""}${
                  gridVisible ? " is-visible" : ""
                }`}
                style={{ transitionDelay: gridVisible ? `${index * 300}ms` : "0ms" }}
              >
                <span className="diagnostico-card-number">{step.number}</span>
                <h3 className="diagnostico-card-title">{step.name}</h3>
                <p className="diagnostico-card-description">
                  {STEP_SUMMARIES[step.number] ?? step.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className={`diagnostico-cta-wrap${gridReady && !gridVisible ? " is-pending" : ""}${
              gridVisible ? " is-visible" : ""
            }`}
          >
            <Link href={DIAGNOSTICO.cta.href} className="diagnostico-cta">
              {DIAGNOSTICO.cta.label}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 7H11M8.5 4L11 7L8.5 10"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <p className="diagnostico-note">{DIAGNOSTICO.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
