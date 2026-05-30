"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { COMO_TRABAJAMOS } from "@/lib/constants";

const FULL_QUOTE = COMO_TRABAJAMOS.quote;

/* Observer individual por elemento — se dispara solo cuando el elemento entra en vista */
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
      { threshold: 0.25, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, rootMargin]);
  return [ref, visible] as const;
}

export default function ComoTrabajamosSection() {
  /* Refs por cada paso del timeline */
  const [step0Ref, step0Visible] = useReveal("0px 0px -50px 0px");
  const [step1Ref, step1Visible] = useReveal("0px 0px -50px 0px");
  const [step2Ref, step2Visible] = useReveal("0px 0px -50px 0px");
  const [step3Ref, step3Visible] = useReveal("0px 0px -50px 0px");
  const [quoteRef, quoteVisible] = useReveal("0px 0px -40px 0px");

  /* El LED arranca cuando el primer paso entra en vista */
  const ledActive = step0Visible;

  /* Máquina de escribir para la cita de cierre */
  const [twText, setTwText] = useState("");
  const [twDone, setTwDone] = useState(false);

  useEffect(() => {
    if (!quoteVisible) return;
    let idx = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        idx++;
        setTwText(FULL_QUOTE.slice(0, idx));
        if (idx >= FULL_QUOTE.length) {
          clearInterval(interval);
          setTwDone(true);
        }
      }, 32);
      return () => clearInterval(interval);
    }, 200);
    return () => clearTimeout(timeout);
  }, [quoteVisible]);

  const stepRefs = [step0Ref, step1Ref, step2Ref, step3Ref];
  const stepVisibles = [step0Visible, step1Visible, step2Visible, step3Visible];

  return (
    <section
      id="proceso"
      className={`process-section${ledActive ? " process-section-active" : ""}`}
      style={{
        position: "relative",
        backgroundColor: "#141B2D",
        padding: "clamp(104px, 10vw, 160px) 0 clamp(64px, 8vw, 100px)",
        overflow: "hidden",
      }}
    >
      <style>
        {`
          .process-section::before {
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

          /* ── Quote area: aparece cuando su propio observer se dispara ── */
          .process-quote-area {
            width: 100%;
            max-width: 760px;
            margin: 64px auto 0;
            text-align: center;
            opacity: 0;
            transform: translateY(15px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          .process-quote-area.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .process-quote {
            position: relative;
            background-color: transparent;
            border: 0;
            border-radius: 0;
            padding: 26px 32px 0;
            margin: 0 auto 28px;
            font-family: var(--font-instrument), serif;
            font-style: italic;
            font-size: clamp(1.5rem, 2.15vw, 1.75rem);
            color: rgba(255,255,255,0.84);
            line-height: 1.42;
            text-align: center;
            box-shadow: none;
          }
          .process-quote::before {
            content: '"';
            position: absolute;
            top: -18px;
            left: clamp(0px, 5vw, 42px);
            font-family: var(--font-instrument), serif;
            font-size: 48px;
            line-height: 1;
            color: #BEF264;
            opacity: 0.30;
            pointer-events: none;
          }

          /* ── Conector horizontal desktop ── */
          .process-section .timeline-connector {
            background: transparent;
            overflow: hidden;
          }
          .process-section .timeline-connector::before {
            content: "";
            position: absolute;
            inset: 0;
            width: 0%;
            background: rgba(190, 242, 100, 0.40);
            transition: width 1.2s ease-out;
          }
          .process-section-active .timeline-connector::before {
            width: 100%;
          }

          /* ── LED SVG ── */
          .timeline-energy-svg {
            position: absolute;
            pointer-events: none;
            z-index: 2;
            overflow: visible;
          }
          .timeline-energy-svg-desktop { display: none; }
          .timeline-energy-svg-mobile  { display: none; }
          .timeline-energy-run {
            fill: none;
            stroke: #BEF264;
            stroke-width: 3.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 58 942;
            stroke-dashoffset: 1000;
            opacity: 0;
          }
          .process-section-active .timeline-energy-run {
            animation: timeline-energy-stroke 6s linear 2.2s infinite;
          }
          @media (min-width: 768px) {
            .process-section .timeline-wrapper {
              max-width: 1120px;
              margin: 0 auto;
            }

            .process-section .timeline-step {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .process-section .timeline-step-content {
              width: 100%;
              max-width: 260px;
            }

            .process-section .timeline-connector {
              left: calc(12.5% + 24px) !important;
              right: calc(12.5% + 24px) !important;
            }

            .timeline-energy-svg-desktop {
              display: block;
              top: -6px;
              left: calc(12.5% + 24px);
              width: calc(75% - 48px);
              height: 72px;
            }
          }
          @keyframes timeline-energy-stroke {
            0%, 16.66% { stroke-dashoffset: 1000; opacity: 0; }
            20%         { opacity: 1; }
            88%         { stroke-dashoffset: 0; opacity: 1; }
            92%, 100%   { stroke-dashoffset: 0; opacity: 0; }
          }

          /* ── Círculos: animados al activarse el step ── */
          .process-section .timeline-circle {
            opacity: 0.2;
            transform: scale(0.8);
            transition: opacity 0.4s ease-out, transform 0.4s ease-out, box-shadow 0.3s ease;
          }
          .timeline-step.is-visible .timeline-circle {
            opacity: 1;
            transform: scale(1);
          }

          /* ── Contenido: animado al activarse el step ── */
          .process-section .timeline-step-content {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          .timeline-step.is-visible .timeline-step-content {
            opacity: 1;
            transform: translateY(0);
          }

          /* ── Desktop: stagger via nth-child (todos los steps se ven a la vez) ── */
          @media (min-width: 768px) {
            .timeline-step.is-visible:nth-child(1) .timeline-circle      { transition-delay: 0s,     0s,     0s; }
            .timeline-step.is-visible:nth-child(2) .timeline-circle      { transition-delay: 0.15s,  0.15s,  0s; }
            .timeline-step.is-visible:nth-child(3) .timeline-circle      { transition-delay: 0.30s,  0.30s,  0s; }
            .timeline-step.is-visible:nth-child(4) .timeline-circle      { transition-delay: 0.45s,  0.45s,  0s; }

            .timeline-step.is-visible:nth-child(1) .timeline-step-content { transition-delay: 0.10s, 0.10s; }
            .timeline-step.is-visible:nth-child(2) .timeline-step-content { transition-delay: 0.25s, 0.25s; }
            .timeline-step.is-visible:nth-child(3) .timeline-step-content { transition-delay: 0.40s, 0.40s; }
            .timeline-step.is-visible:nth-child(4) .timeline-step-content { transition-delay: 0.55s, 0.55s; }
          }

          /* ── Hover círculos ── */
          @media (hover: hover) and (pointer: fine) {
            .process-section .timeline-circle:hover {
              box-shadow: 0 0 0 8px rgba(190, 242, 100, 0.15), 0 0 20px rgba(190, 242, 100, 0.1);
            }
          }

          /* ── Arrow link ── */
          .arrow-link svg { transition: transform 0.2s ease; }
          .arrow-link:hover { text-decoration: underline !important; text-underline-offset: 4px; }
          .arrow-link:hover svg { transform: translateX(4px); }
          .como-link:hover { text-decoration: underline; text-underline-offset: 4px; opacity: 1; }

          /* ── Cursor máquina de escribir ── */
          .tw-cursor {
            display: inline-block;
            width: 2px;
            height: 1em;
            background-color: var(--kinetic-lime);
            vertical-align: text-bottom;
            margin-left: 2px;
            animation: tw-blink 0.65s step-start infinite;
          }
          @keyframes tw-blink { 50% { opacity: 0; } }

          /* ── Mobile ── */
          @media (max-width: 767px) {
            .process-section .timeline-connector { display: none; }

            .timeline-energy-svg-mobile {
              display: block;
              position: absolute;
              top: -8px;
              left: -8px;
              width: 64px;
              height: calc(100% + 16px);
            }

            /* Línea vertical conectora — aparece con cada step */
            .process-section .timeline-step:not(:last-child)::after {
              transform: scaleY(0);
              transform-origin: top;
              transition: transform 0.45s ease-out;
            }
            .timeline-step.is-visible:not(:last-child)::after {
              transform: scaleY(1);
            }

            .process-quote-area { margin-top: 38px; }
            .process-quote {
              padding: 22px 14px 0;
              font-size: clamp(1.25rem, 5vw, 1.38rem);
            }
          }
        `}
      </style>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Encabezado centrado ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "680px",
            margin: "0 auto",
            marginBottom: "72px",
          }}
        >
          <span className="section-eyebrow">— {COMO_TRABAJAMOS.eyebrow}</span>
          <h2
            style={{
              fontFamily: "var(--font-archivo)",
              fontWeight: 800,
              fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
              color: "#FFFFFF",
              lineHeight: 1.10,
              letterSpacing: "-0.025em",
            }}
          >
            {COMO_TRABAJAMOS.h2}
          </h2>
        </div>

        {/* ── Timeline ── */}
        <div className="timeline-wrapper">
          <div className="timeline-connector" aria-hidden="true" />

          {/* LED desktop */}
          <svg
            className="timeline-energy-svg timeline-energy-svg-desktop"
            viewBox="0 0 1000 72"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="timeline-energy-glow-desktop" x="-30%" y="-180%" width="160%" height="460%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path
              className="timeline-energy-run"
              pathLength="1000"
              filter="url(#timeline-energy-glow-desktop)"
              d="M0 30 H97 M153 30 H347 M403 30 H597 M653 30 H847 M903 30 H1000"
            />
          </svg>

          {/* LED mobile */}
          <svg
            className="timeline-energy-svg timeline-energy-svg-mobile"
            viewBox="0 0 64 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="timeline-energy-glow-mobile" x="-180%" y="-30%" width="460%" height="160%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path
              className="timeline-energy-run"
              pathLength="1000"
              filter="url(#timeline-energy-glow-mobile)"
              d="M32 0 V20 M32 76 V320 M32 376 V620 M32 676 V900 M32 956 V1000"
            />
          </svg>

          <div className="timeline-grid">
            {COMO_TRABAJAMOS.steps.map((step, i) => (
              <div
                key={i}
                ref={stepRefs[i]}
                className={`timeline-step${stepVisibles[i] ? " is-visible" : ""}`}
              >
                {/* Número en círculo */}
                <div
                  className="timeline-circle"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(190,242,100,0.30)",
                    backgroundColor: "#141B2D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    zIndex: 3,
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-archivo)",
                      fontWeight: 800,
                      fontSize: "0.82rem",
                      color: "var(--kinetic-lime)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Contenido */}
                <div className="timeline-step-content">
                  <p className="timeline-step-name">{step.name}</p>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.855rem",
                      color: "#A8AEBB",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cita de cierre — máquina de escribir ── */}
        <div
          ref={quoteRef}
          className={`process-quote-area${quoteVisible ? " is-visible" : ""}`}
        >
          <p className="process-quote">
            {quoteVisible ? (
              <>
                {twText}
                {!twDone && <span className="tw-cursor" aria-hidden="true" />}
              </>
            ) : (
              <span style={{ visibility: "hidden" }}>{FULL_QUOTE}</span>
            )}
          </p>

          <Link href={COMO_TRABAJAMOS.link.href} className="como-link arrow-link">
            {COMO_TRABAJAMOS.link.label}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
