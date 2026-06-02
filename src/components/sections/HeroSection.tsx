"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LogoCarousel from "@/components/ui/LogoCarousel";
import { HERO } from "@/lib/constants";

const METRICS = [
  { end: 56, type: "percent", label: "en ventas generadas" },
  { end: 627, type: "percent", label: "alcance orgánico" },
  { end: 6, type: "number", label: "negocios activos" },
];

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return { count, ref };
}

function HeroMetric({
  end,
  label,
  type,
}: {
  end: number;
  label: string;
  type: string;
}) {
  const { count, ref } = useCountUp(end);
  const formattedValue = type === "percent" ? `+${count}%` : `${count}`;

  return (
    <div ref={ref} className="hero-metric">
      <span className="hero-metric-value">{formattedValue}</span>
      <span className="hero-metric-label">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const headlineAccent = "captar, ordenar y convertir";
  const [headlineStart, headlineEnd = ""] = HERO.h1Line2.split(headlineAccent);

  return (
    <section
      className="hero-redesign"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)",
        color: "#FFFFFF",
      }}
    >
      <div className="hero-bg-wrapper absolute inset-0 opacity-50 md:opacity-100" aria-hidden="true">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="hero-bg-image object-right object-cover"
        />
      </div>

      <div aria-hidden="true" className="hero-image-glow" />
      <div aria-hidden="true" className="hero-left-overlay" />
      <div aria-hidden="true" className="hero-bottom-fade" />

      <style>{`
        .hero-image-glow {
          position: absolute;
          right: clamp(80px, 15vw, 280px);
          top: 20%;
          width: clamp(280px, 32vw, 540px);
          height: clamp(280px, 32vw, 540px);
          border-radius: 999px;
          background: radial-gradient(circle, rgba(190, 242, 100, 0.22) 0%, rgba(190, 242, 100, 0.08) 36%, rgba(190, 242, 100, 0) 70%);
          filter: blur(24px);
          opacity: 0.6;
          z-index: 1;
          pointer-events: none;
        }

        .hero-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 1;
        }

        .hero-left-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(to right, #0F172A 0%, #0F172A 30%, rgba(15, 23, 42, 0.7) 50%, transparent 70%);
          pointer-events: none;
        }

        .hero-bottom-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 36%;
          z-index: 2;
          background: linear-gradient(to top, #0F172A 0%, transparent 30%);
          pointer-events: none;
        }

        .hero-content-shell {
          position: relative;
          z-index: 3;
          width: 100%;
          min-height: calc(100vh - 178px);
          display: flex;
          align-items: center;
          padding: clamp(116px, 13vh, 168px) clamp(24px, 5vw, 76px) clamp(48px, 7vh, 72px) clamp(28px, 6vw, 112px);
        }

        .hero-copy {
          width: min(58vw, 660px);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 28px;
          padding: 8px 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: rgba(255, 255, 255, 0.72);
          font-family: var(--font-inter), sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.35;
          text-transform: uppercase;
          backdrop-filter: blur(16px);
        }

        .hero-badge-dot {
          width: 6px;
          height: 6px;
          flex: 0 0 6px;
          border-radius: 999px;
          background: var(--kinetic-lime);
          box-shadow: 0 0 18px rgba(190, 242, 100, 0.55);
        }

        .hero-title {
          max-width: 700px;
          margin: 0 0 28px;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(4rem, 5.5vw, 4.7rem);
          font-weight: 800;
          line-height: 0.98;
          letter-spacing: -0.035em;
        }

        .hero-title-accent {
          color: var(--kinetic-lime);
        }

        .hero-subtitle {
          max-width: 560px;
          margin: 0 0 38px;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(1.03rem, 1.35vw, 1.16rem);
          font-weight: 400;
          line-height: 1.75;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
          margin-bottom: 46px;
        }

        .hero-redesign .hero-cta-primary,
        .hero-redesign .hero-cta-secondary {
          min-height: 54px;
          border-radius: 999px;
          padding: 15px 30px;
        }

        .hero-redesign .hero-cta-secondary {
          border-color: rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.02);
        }

        .hero-metrics {
          display: flex;
          align-items: stretch;
          gap: 24px;
        }

        .hero-metric {
          min-width: 120px;
        }

        .hero-metric-value {
          display: block;
          margin-bottom: 6px;
          color: var(--kinetic-lime);
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1.55rem, 2.2vw, 2rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .hero-metric-label {
          display: block;
          max-width: 140px;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.8rem;
          line-height: 1.45;
        }

        .hero-metric-separator {
          width: 1px;
          background: rgba(71, 85, 105, 0.75);
        }

        .hero-redesign .hero-logo-strip {
          position: relative;
          z-index: 4;
          width: 100%;
          margin-top: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 26px;
          padding-bottom: 34px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: #0F172A;
          backdrop-filter: blur(14px);
          text-align: center;
        }

        .hero-redesign .hero-logo-strip-label {
          width: 100%;
          margin: 0 0 24px;
          padding: 0 24px;
          color: #94A3B8;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          line-height: 1.4;
          text-align: center;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .hero-copy {
            width: min(68vw, 620px);
          }

          .hero-title {
            font-size: clamp(3.3rem, 7vw, 4.1rem);
          }
        }

        @media (max-width: 767px) {
          .hero-redesign {
            min-height: 0 !important;
          }

          .hero-bg-wrapper {
            opacity: 0.5 !important;
          }

          .hero-redesign .hero-bg-image {
            object-position: 76% center !important;
          }

          .hero-image-glow {
            right: -120px;
            top: 140px;
            width: 360px;
            height: 360px;
            opacity: 0.45;
          }

          .hero-left-overlay {
            background: linear-gradient(180deg, rgba(15, 23, 42, 0.42) 0%, rgba(15, 23, 42, 0.58) 48%, #0F172A 100%);
          }

          .hero-content-shell {
            min-height: auto;
            padding: 104px 28px 0;
          }

          .hero-copy {
            width: 100%;
            max-width: 560px;
            margin: 0 auto;
            text-align: center;
          }

          .hero-badge {
            max-width: 100%;
            margin-bottom: 28px;
            padding: 8px 12px;
            border-radius: 12px;
            font-size: 10.5px;
            letter-spacing: 0.055em;
            text-align: left;
          }

          .hero-title {
            max-width: 100%;
            margin-bottom: 26px;
            font-size: clamp(2.75rem, 12vw, 4rem);
            line-height: 1.04;
            letter-spacing: -0.04em;
          }

          .hero-subtitle {
            margin-right: auto;
            margin-left: auto;
            margin-bottom: 34px;
            font-size: 1rem;
            line-height: 1.75;
          }

          .hero-ctas {
            flex-direction: column;
            align-items: stretch;
            margin-bottom: 38px;
          }

          .hero-redesign .hero-cta-primary,
          .hero-redesign .hero-cta-secondary {
            width: 100%;
            justify-content: center;
            min-height: 56px;
          }

          .hero-metrics {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            padding-bottom: 48px;
          }

          .hero-metric {
            min-width: 0;
            padding: 0;
            border: 0;
            border-radius: 0;
            background: transparent;
            text-align: center;
          }

          .hero-metric-label {
            max-width: none;
            margin: 0 auto;
            font-size: 0.72rem;
          }

          .hero-metric-separator {
            display: none;
          }
        }
      `}</style>

      <div className="hero-content-shell">
        <div className="hero-copy">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            {HERO.h1Line1}
          </div>

          <h1 className="hero-title">
            <span>{headlineStart}</span>
            <span className="hero-title-accent">{headlineAccent}</span>
            <span>{headlineEnd}</span>
          </h1>

          <p className="hero-subtitle">{HERO.h2}</p>

          <div className="hero-ctas">
            <Link href={HERO.ctaPrimary.href} className="hero-cta-primary">
              {HERO.ctaPrimary.label}
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7H11M8.5 4L11 7L8.5 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href={HERO.ctaSecondary.href} className="hero-cta-secondary">
              {HERO.ctaSecondary.label}
            </Link>
          </div>

          <div className="hero-metrics" aria-label="Resultados destacados">
            {METRICS.map((metric, index) => (
              <div key={metric.label} style={{ display: "contents" }}>
                {index > 0 && <span className="hero-metric-separator" aria-hidden="true" />}
                <HeroMetric {...metric} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {HERO.logosBar.visible && (
        <div className="hero-logo-strip">
          <p className="hero-logo-strip-label">{HERO.logosBar.label}</p>
          <LogoCarousel />
          <style>{`
            .hero-redesign .hero-logo-strip-label {
              width: 100% !important;
              margin: 0 0 24px !important;
              padding: 0 24px !important;
              color: #94A3B8 !important;
              font-family: var(--font-inter), sans-serif !important;
              font-size: 0.75rem !important;
              font-weight: 500 !important;
              letter-spacing: 0.2em !important;
              line-height: 1.4 !important;
              text-align: center !important;
              text-transform: uppercase !important;
            }

            @media (max-width: 767px) {
              .hero-redesign .hero-logo-strip-label {
                font-size: 0.68rem !important;
                letter-spacing: 0.18em !important;
                margin-bottom: 18px !important;
              }
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
