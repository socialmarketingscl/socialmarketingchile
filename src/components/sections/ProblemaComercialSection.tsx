"use client";

import { useEffect, useRef, useState } from "react";
import { PROBLEMA } from "@/lib/constants";

const FULL_QUOTE = `"${PROBLEMA.quote}"`;

/* Each element gets its own observer — fires exactly when that element enters the viewport */
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

export default function ProblemaComercialSection() {
  const [headerRef, headerVisible] = useReveal();
  const [card0Ref, card0Visible] = useReveal();
  const [card1Ref, card1Visible] = useReveal();
  const [card2Ref, card2Visible] = useReveal();
  const [card3Ref, card3Visible] = useReveal();
  const [quoteRef, quoteVisible] = useReveal("0px 0px -40px 0px");

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

  const cardRefs = [card0Ref, card1Ref, card2Ref, card3Ref];
  const cardVisibles = [card0Visible, card1Visible, card2Visible, card3Visible];

  return (
    <section
      id="problema"
      style={{
        backgroundColor: "var(--level-2)",
        padding: "clamp(64px, 8vw, 100px) 0",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <style>{`
        /* Base: every reveal item starts invisible */
        .reveal-item {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.55s ease-out, transform 0.55s ease-out;
        }
        .reveal-item.is-visible {
          opacity: 1;
          transform: none;
        }

        /* Desktop: tiny stagger between cards in case all become visible at once */
        @media (min-width: 768px) {
          .problema-cards-grid .reveal-item.is-visible:nth-child(2) {
            transition-delay: 0.10s;
          }
          .problema-cards-grid .reveal-item.is-visible:nth-child(3) {
            transition-delay: 0.20s;
          }
          .problema-cards-grid .reveal-item.is-visible:nth-child(4) {
            transition-delay: 0.30s;
          }
          .problema-header {
            margin-bottom: 34px !important;
          }
          .problema-header .section-eyebrow {
            font-size: 25px !important;
          }
          .problema-card {
            background-color: rgba(255,255,255,0.06) !important;
            border-color: rgba(255,255,255,0.09) !important;
          }
          .problema-card-number {
            color: rgba(190, 242, 100, 0.15) !important;
          }
          .problema-cards-grid {
            margin-bottom: 0 !important;
          }
          .problema-quote {
            margin-top: 36px !important;
            background-color: #1E293B !important;
            padding: 32px 40px !important;
          }
          .problema-quote p {
            font-size: clamp(1.2rem, 2.05vw, 1.62rem) !important;
          }
        }

        /* Typewriter cursor */
        .tw-cursor {
          display: inline-block;
          width: 2px;
          height: 1em;
          background-color: var(--kinetic-lime);
          vertical-align: text-bottom;
          margin-left: 2px;
          animation: tw-blink 0.65s step-start infinite;
        }
        @keyframes tw-blink {
          50% { opacity: 0; }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>

        {/* ── Encabezado ── */}
        <div
          ref={headerRef}
          className={`problema-header reveal-item${headerVisible ? " is-visible" : ""}`}
          style={{ maxWidth: "760px", marginBottom: "56px" }}
        >
          <span className="section-eyebrow">— El problema</span>
          <h2 className="section-h2" style={{ marginBottom: "24px" }}>
            {PROBLEMA.h2}
          </h2>
          <p className="section-sub">{PROBLEMA.body}</p>
        </div>

        {/* ── Grid 2×2 pain cards ── */}
        <div className="problema-cards-grid">
          {PROBLEMA.cards.map((card, i) => (
            <div
              key={i}
              ref={cardRefs[i]}
              className={`card-dark problema-card reveal-item${cardVisibles[i] ? " is-visible" : ""}`}
              style={{ position: "relative" }}
            >
              <span
                aria-hidden="true"
                className="problema-card-number"
                style={{
                  position: "absolute",
                  top: "24px",
                  right: "28px",
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 800,
                  fontSize: "1.55rem",
                  color: "rgba(190, 242, 100, 0.15)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  userSelect: "none",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3
                style={{
                  fontFamily: "var(--font-archivo)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  marginBottom: "12px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.875rem",
                  color: "#A8AEBB",
                  lineHeight: 1.75,
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Quote — typewriter ── */}
        <div
          ref={quoteRef}
          className={`banner-quote problema-quote reveal-item${quoteVisible ? " is-visible" : ""}`}
        >
          <p>
            {quoteVisible ? (
              <>
                {twText}
                {!twDone && <span className="tw-cursor" aria-hidden="true" />}
              </>
            ) : (
              <span style={{ visibility: "hidden" }}>{FULL_QUOTE}</span>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
