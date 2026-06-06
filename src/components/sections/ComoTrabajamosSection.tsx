"use client";

import { useEffect, useRef, useState } from "react";
import { COMO_TRABAJAMOS } from "@/lib/constants";

function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.2,
  rootMargin = "0px 0px -80px 0px",
) {
  const ref = useRef<T | null>(null);
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

export default function ComoTrabajamosSection() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>(0.18);
  const [timelineRef, timelineVisible] = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <section id="proceso" className="process-section">
      <div className="process-top-transition" aria-hidden="true" />

      <style>{`
        .process-section {
          position: relative;
          overflow: hidden;
          padding: 80px 0;
          background: #F1F5F9;
        }

        .process-top-transition {
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 54px;
          z-index: 0;
          pointer-events: none;
          background: linear-gradient(to bottom, #0F172A 0%, #F1F5F9 100%);
        }

        .process-container {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .process-header {
          max-width: 760px;
          margin: 0 auto 64px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .process-header.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .process-eyebrow {
          display: block;
          margin-bottom: 14px;
          color: #475569;
          font-family: var(--font-instrument), serif;
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1;
        }

        .process-title {
          margin: 0;
          color: #0F172A;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.85rem, 3.4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1.08;
        }

        .process-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }

        .process-timeline::before {
          content: "";
          position: absolute;
          top: 24px;
          left: calc(12.5% + 24px);
          right: calc(12.5% + 24px);
          height: 2px;
          border-radius: 999px;
          background: #CBD5E1;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.9s ease-out;
        }

        .process-timeline.is-visible::before {
          transform: scaleX(1);
        }

        .process-step {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease-out, transform 0.55s ease-out;
        }

        .process-step.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .process-circle {
          width: 48px;
          height: 48px;
          margin: 0 auto 24px;
          border: 1.5px solid #CBD5E1;
          border-radius: 999px;
          background: #F1F5F9;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 8px rgba(241, 245, 249, 0.92);
        }

        .process-number {
          color: #0F172A;
          font-family: var(--font-archivo), sans-serif;
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          line-height: 1;
        }

        .process-step-title {
          margin: 0 0 12px;
          color: #0F172A;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1rem, 1.45vw, 1.15rem);
          font-weight: 700;
          letter-spacing: -0.015em;
          line-height: 1.25;
          text-align: center;
        }

        .process-step-description {
          margin: 0;
          color: #475569;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.9rem;
          line-height: 1.7;
          text-align: center;
        }

        @media (min-width: 768px) {
          .process-section {
            padding: 112px 0;
          }

          .process-eyebrow {
            font-size: 25px;
          }
        }

        @media (max-width: 767px) {
          .process-section {
            padding: 80px 0;
          }

          .process-container {
            padding: 0 20px;
          }

          .process-header {
            margin-bottom: 42px;
          }

          .process-title {
            font-size: clamp(1.8rem, 8.6vw, 2.55rem);
          }

          .process-timeline {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .process-timeline::before {
            top: 24px;
            bottom: 24px;
            left: 24px;
            right: auto;
            width: 2px;
            height: auto;
            transform: scaleY(0);
            transform-origin: top;
          }

          .process-timeline.is-visible::before {
            transform: scaleY(1);
          }

          .process-step {
            display: grid;
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 18px;
            align-items: flex-start;
          }

          .process-circle {
            margin: 0;
          }

          .process-step-title,
          .process-step-description {
            text-align: left;
          }

          .process-step-title {
            margin-top: 2px;
            margin-bottom: 8px;
          }
        }
      `}</style>

      <div className="process-container">
        <div ref={headerRef} className={`process-header${headerVisible ? " is-visible" : ""}`}>
          <span className="process-eyebrow">— {COMO_TRABAJAMOS.eyebrow}</span>
          <h2 className="process-title">{COMO_TRABAJAMOS.h2}</h2>
        </div>

        <div
          ref={timelineRef}
          className={`process-timeline${timelineVisible ? " is-visible" : ""}`}
        >
          {COMO_TRABAJAMOS.steps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step${timelineVisible ? " is-visible" : ""}`}
              style={{ transitionDelay: timelineVisible ? `${index * 150}ms` : "0ms" }}
            >
              <div className="process-circle" aria-hidden="true">
                <span className="process-number">{step.number}</span>
              </div>
              <div>
                <h3 className="process-step-title">{step.name}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
