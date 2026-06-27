"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PROBLEMA } from "@/lib/constants";

function useScrollReveal(threshold = 0.15, rootMargin = "0px 0px -80px 0px") {
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
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, threshold, rootMargin]);

  return [ref, visible] as const;
}

export default function ProblemaComercialSection() {
  const [imageRef, imageVisible] = useScrollReveal(0.15);
  const [headerRef, headerVisible] = useScrollReveal(0.15);
  const [accordionRef, accordionVisible] = useScrollReveal(0.2);
  const [openItem, setOpenItem] = useState<number | null>(0);
  const [activeColorItem, setActiveColorItem] = useState<number | null>(0);
  const [openingItem, setOpeningItem] = useState<number | null>(null);
  const [closingItem, setClosingItem] = useState<number | null>(null);
  const animationTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => {
      animationTimers.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const clearAnimationTimers = () => {
    animationTimers.current.forEach((timer) => clearTimeout(timer));
    animationTimers.current = [];
  };

  const queueAnimationTimer = (callback: () => void, delay: number) => {
    const timer = setTimeout(callback, delay);
    animationTimers.current.push(timer);
  };

  const handleAccordionClick = (index: number) => {
    clearAnimationTimers();

    if (openItem === index) {
      setClosingItem(index);
      setOpeningItem(null);
      setOpenItem(null);
      queueAnimationTimer(() => setActiveColorItem(null), 250);
      queueAnimationTimer(() => setClosingItem(null), 500);
      return;
    }

    const previousOpenItem = openItem;
    setOpeningItem(index);
    setClosingItem(previousOpenItem);
    setOpenItem(index);
    queueAnimationTimer(() => setActiveColorItem(index), 250);
    queueAnimationTimer(() => {
      setOpeningItem(null);
      setClosingItem(null);
    }, 500);
  };

  return (
    <section
      id="problema"
      className="problema-section"
      style={{
        position: "relative",
        overflow: "hidden",
        marginTop: "-1px",
        backgroundColor: "#F8FAFC",
      }}
    >
      <div className="problema-top-transition" aria-hidden="true" />

      <div
        ref={imageRef}
        className={`problema-bg-media${imageVisible ? " is-visible" : ""}`}
        aria-hidden="true"
      >
        <Image
          src="/images/problema-persona-optimized.png"
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 40vw, 50vw"
          className="problema-bg-image"
        />
      </div>

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

        .problema-section {
          padding: 48px 0 64px;
        }

        .problema-top-transition {
          position: absolute;
          top: -2px;
          left: 0;
          right: 0;
          height: 40px;
          z-index: 1;
          pointer-events: none;
          background: linear-gradient(to bottom, #E2E8F0 0%, #F1F5F9 42%, #F8FAFC 100%);
        }

        .problema-accordion {
          width: 100%;
          max-width: 800px;
          margin: 40px 0 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .problema-bg-media {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: min(56vw, 820px);
          --problema-image-final-opacity: 1;
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          z-index: 0;
          pointer-events: none;
        }

        .problema-bg-media.is-visible {
          opacity: var(--problema-image-final-opacity);
          transform: translateX(0);
        }

        .problema-bg-media::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(to left, #F8FAFC 0%, rgba(248, 250, 252, 0.92) 5%, rgba(248, 250, 252, 0) 62%),
            linear-gradient(to top, #F8FAFC 0%, rgba(248, 250, 252, 0.88) 12%, rgba(248, 250, 252, 0) 42%);
        }

        .problema-bg-image {
          object-fit: cover;
          object-position: center top;
        }

        .problema-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .problema-content {
          position: relative;
          z-index: 10;
          width: 45%;
          max-width: 650px;
          margin-left: auto;
          padding-left: 16px;
        }

        .problema-header.reveal-item {
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .problema-accordion-item {
          perspective: 1000px;
          transition: transform 0.3s ease;
        }

        .problema-accordion-item.reveal-item {
          transform: translateY(40px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .problema-accordion-header {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 20px 24px 20px 46px;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          background: #FFFFFF;
          color: #0F172A;
          cursor: pointer;
          text-align: left;
          transform-style: preserve-3d;
          transition: transform 0.4s ease, background-color 0.4s ease, color 0.4s ease, border-color 0.3s ease, box-shadow 0.3s ease, border-radius 0.3s ease;
        }

        .problema-accordion-header::before {
          content: "";
          position: absolute;
          left: 24px;
          top: 18px;
          bottom: 18px;
          width: 3px;
          border-radius: 999px;
          background: #BEF264;
          transition: background-color 0.4s ease, top 0.3s ease, bottom 0.3s ease;
        }

        .problema-accordion-header:hover {
          border-color: #CBD5E1;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
        }

        .problema-accordion-header.is-open {
          border-color: #CBD5E1;
          border-bottom-color: transparent;
          border-radius: 12px 12px 0 0;
          background: #F1F5F9;
        }

        .problema-accordion-header.is-active {
          background: #BEF264;
          color: #0F172A;
          border-color: #BEF264;
        }

        .problema-accordion-header.is-active::before {
          background: #0F172A;
        }

        .problema-accordion-header.is-flip-open {
          animation: problemaFlipOpen 0.5s ease forwards;
        }

        .problema-accordion-header.is-flip-close {
          animation: problemaFlipClose 0.5s ease forwards;
        }

        .problema-accordion-heading {
          display: flex;
          align-items: center;
          min-width: 0;
          flex: 1 1 auto;
        }

        .problema-accordion-title {
          color: #0F172A;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.125rem, 1.7vw, 1.25rem);
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }

        .problema-accordion-icon {
          flex: 0 0 auto;
          color: #BEF264;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.85rem;
          font-weight: 700;
          line-height: 1;
          transform-origin: center;
          transition: transform 0.3s ease;
        }

        .problema-accordion-header.is-active .problema-accordion-icon {
          color: #0F172A;
        }

        .problema-accordion-header.is-open .problema-accordion-icon {
          transform: rotate(180deg);
        }

        .problema-accordion-body {
          max-height: 0;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          border-top: 0;
          border-radius: 0 0 12px 12px;
          background: #FFFFFF;
          transition: max-height 0.3s ease-in-out;
        }

        .problema-accordion-body.is-open {
          max-height: 220px;
        }

        .problema-accordion-content {
          padding: 0 24px 24px 46px;
          color: #475569;
          font-family: var(--font-inter), sans-serif;
          font-size: 1rem;
          line-height: 1.75;
        }

        @keyframes problemaFlipOpen {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }

        @keyframes problemaFlipClose {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(-90deg); }
          100% { transform: rotateX(0deg); }
        }

        /* Desktop: tiny stagger between accordion items in case all become visible at once */
        @media (min-width: 768px) {
          .problema-section {
            padding: 64px 0 96px;
          }

          .problema-bg-media {
            top: -140px;
          }

          .problema-header {
            margin-bottom: 34px !important;
          }
          .problema-header .section-eyebrow {
            font-size: 25px !important;
          }
        }

        @media (max-width: 1024px) {
          .problema-bg-media {
            width: 48vw;
          }

          .problema-content {
            width: 56%;
            max-width: 680px;
            padding-left: 24px;
          }
        }

        @media (max-width: 767px) {
          .problema-bg-media {
            display: block;
            width: 100%;
            --problema-image-final-opacity: 0.05;
          }

          .problema-bg-media::after {
            display: none;
          }

          .problema-bg-image {
            object-fit: cover;
            object-position: top center;
          }

          .problema-container {
            padding: 0 20px;
          }

          .problema-content {
            width: 100%;
            max-width: none;
            padding-left: 0;
          }

          .problema-accordion {
            max-width: none;
          }

          .problema-accordion-header {
            padding: 18px 18px 18px 38px;
            gap: 14px;
          }

          .problema-accordion-header::before {
            left: 18px;
            top: 16px;
            bottom: 16px;
          }

          .problema-accordion-heading {
            gap: 0;
          }

          .problema-accordion-title {
            font-size: 1rem;
          }

          .problema-accordion-icon {
            font-size: 1.55rem;
          }

          .problema-accordion-body.is-open {
            max-height: 280px;
          }

          .problema-accordion-content {
            padding: 0 18px 22px 38px;
            font-size: 0.94rem;
          }
        }

      `}</style>

      <div className="problema-container">
        <div className="problema-content">
          {/* ── Encabezado ── */}
          <div
            ref={headerRef}
            className={`problema-header reveal-item${headerVisible ? " is-visible" : ""}`}
          >
            <span className="section-eyebrow section-eyebrow-light">— El problema</span>
            <h2 className="section-h2 section-h2-dark" style={{ marginBottom: "24px" }}>
              {PROBLEMA.h2}
            </h2>
            <p className="section-sub section-sub-dark">{PROBLEMA.body}</p>
          </div>

          {/* ── Acordeón de dolores comerciales ── */}
          <div ref={accordionRef} className="problema-accordion">
            {PROBLEMA.cards.map((card, i) => {
              const isOpen = openItem === i;
              const isActive = activeColorItem === i;
              const isOpening = openingItem === i;
              const isClosing = closingItem === i;

              return (
                <div
                  key={i}
                  className={`problema-accordion-item reveal-item${accordionVisible ? " is-visible" : ""}`}
                  style={{
                    transitionDelay: accordionVisible ? `${i * 150}ms` : "0ms",
                  }}
                >
                  <button
                    type="button"
                    className={`problema-accordion-header${isOpen ? " is-open" : ""}${isActive ? " is-active" : ""}${isOpening ? " is-flip-open" : ""}${isClosing ? " is-flip-close" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={`problema-panel-${i}`}
                    id={`problema-trigger-${i}`}
                    onClick={() => handleAccordionClick(i)}
                  >
                    <span className="problema-accordion-heading">
                      <span className="problema-accordion-title">{card.title}</span>
                    </span>
                    <span className="problema-accordion-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`problema-panel-${i}`}
                    role="region"
                    aria-labelledby={`problema-trigger-${i}`}
                    className={`problema-accordion-body${isOpen ? " is-open" : ""}`}
                  >
                    <p className="problema-accordion-content">{card.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
