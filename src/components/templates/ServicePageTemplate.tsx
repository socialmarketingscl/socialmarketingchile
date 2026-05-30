"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONTACT, CTA_FINAL } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import type { ServiceIncludeItem } from "@/lib/services";

type ServicePageTemplateProps = {
  serviceName: string;
  title: string;
  description: string;
  paraQuien: string[];
  incluye: ServiceIncludeItem[];
  noIncluye: string[];
  proceso: string[];
  indicadores: string[];
  cta: string;
};

function useReveal() {
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
      { threshold: 0.18, rootMargin: "0px 0px -70px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return [ref, visible] as const;
}

function RevealBlock({
  children,
  className = "",
  delay = "0s",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`service-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: visible ? delay : "0s" }}
    >
      {children}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  );
}

function MetricIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-7M20 16v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M3 7h8M8.5 4 11 7l-2.5 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function ServicePageTemplate({
  serviceName,
  title,
  description,
  paraQuien,
  incluye,
  noIncluye,
  proceso,
  indicadores,
  cta,
}: ServicePageTemplateProps) {
  useEffect(() => {
    trackEvent("service_page_viewed", {
      service_name: serviceName,
      service_title: title,
    });
  }, [serviceName, title]);

  return (
    <main className="service-page">
      <style>{`
        .service-page {
          background: var(--level-1);
          overflow: hidden;
        }

        .service-shell {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
        }

        .service-section {
          position: relative;
          padding: clamp(76px, 9vw, 118px) 0;
        }

        .service-hero {
          padding-top: clamp(150px, 14vw, 190px);
          padding-bottom: clamp(88px, 11vw, 132px);
          background:
            radial-gradient(circle at 78% 15%, rgba(190, 242, 100, 0.06), transparent 38%),
            #0A0F1A;
        }

        .service-transition-dark-to-light::before,
        .service-transition-light-to-dark::before {
          content: "";
          display: block;
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          height: 60px;
          pointer-events: none;
        }

        .service-transition-dark-to-light::before {
          background: linear-gradient(to bottom, #0F172A, #F8FAFC);
        }

        .service-transition-light-to-dark::before {
          background: linear-gradient(to bottom, #F8FAFC, #141B2D);
        }

        .service-reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.58s ease-out, transform 0.58s ease-out;
        }

        .service-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .service-label {
          display: block;
          font-family: var(--font-instrument), serif;
          font-style: italic;
          font-size: clamp(1.05rem, 1.7vw, 1.22rem);
          color: var(--kinetic-lime);
          margin-bottom: 18px;
        }

        .service-h1,
        .service-h2 {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          letter-spacing: -0.026em;
          color: #FFFFFF;
        }

        .service-h1 {
          max-width: 820px;
          font-size: clamp(2.55rem, 6vw, 5rem);
          line-height: 0.98;
          margin-bottom: 28px;
        }

        .service-h2 {
          font-size: clamp(2rem, 4vw, 3.35rem);
          line-height: 1.04;
          margin-bottom: 30px;
        }

        .service-h2-dark {
          color: var(--level-2);
        }

        .service-description {
          max-width: 680px;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.15rem);
          line-height: 1.82;
          color: #A8AEBB;
          margin-bottom: 40px;
        }

        .service-dark-copy {
          color: #A8AEBB;
        }

        .service-light-copy {
          color: var(--slate-gray);
        }

        .service-check-list,
        .service-x-list,
        .service-process-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .service-check-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .service-check-item,
        .service-x-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.98rem;
          line-height: 1.72;
        }

        .service-check-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          color: var(--kinetic-lime);
          background: rgba(190, 242, 100, 0.08);
          border: 1px solid rgba(190, 242, 100, 0.16);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .service-x-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          color: rgba(100, 116, 139, 0.9);
          background: rgba(100, 116, 139, 0.08);
          border: 1px solid rgba(100, 116, 139, 0.16);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .service-include-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .service-include-card,
        .service-metric-card {
          border-radius: 8px;
          transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
        }

        .service-include-card {
          padding: 28px;
          background: #FFFFFF;
          border: 1px solid rgba(15, 23, 42, 0.08);
        }

        .service-include-card:hover {
          transform: translateY(-2px);
          border-color: rgba(15, 23, 42, 0.18);
          box-shadow: 0 18px 44px rgba(15, 23, 42, 0.08);
        }

        .service-include-title {
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.06rem;
          font-weight: 800;
          color: var(--level-2);
          margin-bottom: 10px;
        }

        .service-process {
          position: relative;
          max-width: 840px;
        }

        .service-process::before {
          content: "";
          position: absolute;
          left: 23px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: rgba(190, 242, 100, 0.35);
        }

        .service-process-item {
          position: relative;
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 22px;
          padding-bottom: 28px;
        }

        .service-process-item:last-child {
          padding-bottom: 0;
        }

        .service-process-number {
          position: relative;
          z-index: 1;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #141B2D;
          border: 1.5px solid rgba(190, 242, 100, 0.45);
          color: var(--kinetic-lime);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
        }

        .service-process-text {
          padding-top: 8px;
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          font-size: 1rem;
          line-height: 1.7;
        }

        .service-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .service-metric-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.6;
        }

        .service-metric-card:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.16);
        }

        .service-metric-icon {
          color: rgba(255, 255, 255, 0.72);
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .service-final-cta {
          text-align: center;
          background:
            radial-gradient(circle at 50% 45%, rgba(190, 242, 100, 0.05), transparent 36%),
            #0A0F1A;
        }

        .service-final-copy {
          max-width: 650px;
          margin: 0 auto 38px;
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          font-size: 1rem;
          line-height: 1.8;
        }

        .service-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        @media (max-width: 767px) {
          .service-shell {
            width: min(100% - 36px, 1120px);
          }

          .service-section {
            padding: 68px 0;
          }

          .service-hero {
            padding-top: 132px;
            padding-bottom: 82px;
          }

          .service-check-list,
          .service-include-grid,
          .service-metrics-grid {
            grid-template-columns: 1fr;
          }

          .service-include-card,
          .service-metric-card {
            padding: 22px;
          }

          .service-process-item {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 18px;
          }

          .service-process::before {
            left: 21px;
          }

          .service-process-number {
            width: 44px;
            height: 44px;
          }
        }
      `}</style>

      <section className="service-hero">
        <div className="service-shell">
          <RevealBlock>
            <span className="service-label">— {serviceName}</span>
            <h1 className="service-h1">{title}</h1>
            <p className="service-description">{description}</p>
            <Link href="/contacto" className="hero-cta-primary">
              Agendar diagnóstico
              <ArrowIcon />
            </Link>
          </RevealBlock>
        </div>
      </section>

      <section className="service-section" style={{ backgroundColor: "#0F172A" }}>
        <div className="service-shell">
          <RevealBlock>
            <h2 className="service-h2">¿Para quién es este servicio?</h2>
            <ul className="service-check-list">
              {paraQuien.map((item) => (
                <li key={item} className="service-check-item service-dark-copy">
                  <span className="service-check-icon"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RevealBlock>
        </div>
      </section>

      <section className="service-section service-transition-dark-to-light" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="service-shell">
          <RevealBlock>
            <h2 className="service-h2 service-h2-dark">Qué incluye</h2>
            <div className="service-include-grid">
              {incluye.map((item) => (
                <article key={item.titulo} className="service-include-card">
                  <h3 className="service-include-title">{item.titulo}</h3>
                  <p className="service-light-copy" style={{ fontFamily: "var(--font-inter)", lineHeight: 1.72 }}>
                    {item.descripcion}
                  </p>
                </article>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      <section className="service-section" style={{ backgroundColor: "#F8FAFC", paddingTop: "0" }}>
        <div className="service-shell">
          <RevealBlock>
            <h2 className="service-h2 service-h2-dark">Qué no incluye</h2>
            <ul className="service-x-list" style={{ display: "grid", gap: "14px", maxWidth: "780px" }}>
              {noIncluye.map((item) => (
                <li key={item} className="service-x-item service-light-copy">
                  <span className="service-x-icon"><XIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RevealBlock>
        </div>
      </section>

      <section className="service-section service-transition-light-to-dark" style={{ backgroundColor: "#141B2D" }}>
        <div className="service-shell">
          <RevealBlock>
            <h2 className="service-h2">Cómo trabajamos este servicio</h2>
            <ol className="service-process-list service-process">
              {proceso.map((step, index) => (
                <li key={step} className="service-process-item">
                  <span className="service-process-number">{String(index + 1).padStart(2, "0")}</span>
                  <p className="service-process-text">{step}</p>
                </li>
              ))}
            </ol>
          </RevealBlock>
        </div>
      </section>

      <section className="service-section" style={{ backgroundColor: "#0F172A" }}>
        <div className="service-shell">
          <RevealBlock>
            <h2 className="service-h2">Cómo medimos el resultado</h2>
            <div className="service-metrics-grid">
              {indicadores.map((item) => (
                <div key={item} className="service-metric-card">
                  <span className="service-metric-icon"><MetricIcon /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </RevealBlock>
        </div>
      </section>

      <section id="cta-final" className="service-section service-final-cta">
        <div className="service-shell">
          <RevealBlock>
            <span className="service-label" style={{ textAlign: "center" }}>
              Más que presencia digital, sistemas para crecer.
            </span>
            <h2 className="service-h2" style={{ maxWidth: "760px", margin: "0 auto 24px" }}>
              {cta}
            </h2>
            <p className="service-final-copy">{CTA_FINAL.body}</p>
            <div className="service-actions">
              <Link href="/contacto" className="hero-cta-primary">
                Agendar diagnóstico
                <ArrowIcon />
              </Link>
              <a
                href={CONTACT.whatsappUrlWithMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary"
              >
                <WhatsAppIcon />
                Escribir por WhatsApp
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>
    </main>
  );
}
