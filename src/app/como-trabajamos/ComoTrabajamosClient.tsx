"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

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
      { threshold: 0.2, rootMargin: "0px 0px -70px 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return [ref, visible] as const;
}

function Reveal({
  children,
  className = "",
  delay = "0.2s",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
  as?: "div" | "section" | "article";
}) {
  const [ref, visible] = useReveal();
  const Component = as;
  return (
    <Component
      ref={ref as never}
      className={`process-page-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
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

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const PROCESS_STEPS = [
  ["01", "Conversación inicial", "Nos cuentas qué está pasando con tu negocio, qué has intentado y qué necesitas mejorar. No es una reunión de ventas — es una conversación para entender tu situación real."],
  ["02", "Diagnóstico", "Revisamos tus canales digitales, tu proceso comercial, tu competencia y tus oportunidades. Identificamos el problema principal: captación, conversión, posicionamiento, marca o automatización."],
  ["03", "Definición de prioridades", "Definimos qué tiene sentido hacer primero y en qué orden. No todo se puede hacer al mismo tiempo, y no todo tiene el mismo impacto."],
  ["04", "Propuesta personalizada", "Diseñamos un plan con servicios, plazos y presupuesto adaptado a lo que realmente necesitas. Sin paquetes genéricos. La propuesta sale del diagnóstico, no de una lista de precios."],
  ["05", "Ejecución", "Implementamos la estrategia definida: campañas, contenido, marca, automatizaciones, SEO o lo que el proyecto requiera. Cada acción tiene objetivo, plazo y responsable."],
  ["06", "Medición y optimización", "Medimos resultados con datos reales y ajustamos. No esperamos al final del mes para evaluar — monitoreamos constantemente y corregimos lo que no funciona."],
  ["07", "Reportes y seguimiento", "Te mostramos qué se hizo, qué resultados hubo y qué recomendamos para el siguiente período. Sin métricas infladas ni indicadores de vanidad."],
];

const OTHERS = [
  "Venden paquetes genéricos sin diagnóstico",
  "Miden con métricas de vanidad (likes, alcance)",
  "Ejecutan sin estrategia clara",
  "No conectan marketing con ventas",
  "Prometen resultados garantizados",
];

const US = [
  "Diagnosticamos antes de proponer",
  "Medimos captación, conversión y crecimiento real",
  "Cada acción parte de un plan con objetivos",
  "Integramos marketing digital con automatización e IA",
  "Mostramos datos reales, no promesas",
];

const PRINCIPLES = [
  ["01", "Sin diagnóstico no hay propuesta", "No cotizamos sin entender el problema. Cada propuesta nace de un análisis real."],
  ["02", "El problema manda sobre el servicio", "Si pides publicidad pero necesitas ordenar tu marca primero, te lo decimos."],
  ["03", "Claridad antes que presión", "No usamos urgencia falsa ni promesas de resultados mágicos."],
  ["04", "La ejecución es compartida", "Tu participación, accesos y aprobaciones son parte crítica del éxito del proyecto."],
];

export default function ComoTrabajamosClient() {
  return (
    <main className="process-page">
      <style>{`
        .process-page { background: #0A0F1A; overflow: hidden; }
        .process-shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
        .process-page-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .process-page-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .process-hero {
          background: radial-gradient(circle at 78% 16%, rgba(190,242,100,0.055), transparent 35%), #0A0F1A;
          padding: clamp(150px, 14vw, 190px) 0 clamp(78px, 9vw, 118px);
        }
        .process-h1,
        .process-h2,
        .process-h3 {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          letter-spacing: -0.026em;
        }
        .process-h1 {
          color: #FFFFFF;
          font-size: clamp(2.7rem, 6vw, 5rem);
          line-height: 0.98;
          max-width: 820px;
          margin-bottom: 26px;
        }
        .process-hero-copy {
          max-width: 730px;
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.14rem);
          line-height: 1.82;
        }
        .process-section { padding: clamp(78px, 9vw, 118px) 0; }
        .process-dark { background: #0F172A; }
        .process-light { background: #F8FAFC; }
        .process-level4 { background: #141B2D; }
        .process-timeline {
          position: relative;
          display: grid;
          gap: 0;
          max-width: 900px;
        }
        .process-timeline::before {
          content: "";
          position: absolute;
          left: 23px;
          top: 10px;
          bottom: 10px;
          width: 2px;
          background: rgba(190,242,100,0.35);
        }
        .process-step {
          position: relative;
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 24px;
          padding-bottom: 34px;
        }
        .process-step:last-child { padding-bottom: 0; }
        .process-step-number {
          position: relative;
          z-index: 1;
          width: 48px;
          height: 48px;
          border-radius: 999px;
          background: #0F172A;
          border: 1.5px solid rgba(190,242,100,0.46);
          color: var(--kinetic-lime);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: 0.78rem;
          letter-spacing: 0.04em;
        }
        .process-step-copy {
          padding-top: 7px;
        }
        .process-step-copy p {
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.72;
        }
        .process-compare-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .process-compare-card {
          border-radius: 12px;
          padding: clamp(28px, 4vw, 38px);
          border: 1px solid rgba(15,23,42,0.08);
        }
        .process-compare-card.is-others {
          background: rgba(15,23,42,0.045);
        }
        .process-compare-card.is-us {
          background: rgba(190,242,100,0.06);
          border-left: 3px solid #BEF264;
        }
        .process-compare-list,
        .process-principles-grid {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .process-compare-list li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          color: #475569;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.6;
        }
        .process-compare-list li::before {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          margin-top: 1px;
          font-weight: 800;
          font-size: 0.82rem;
        }
        .is-others .process-compare-list li::before {
          content: "×";
          color: #64748B;
          background: rgba(100,116,139,0.12);
        }
        .is-us .process-compare-list li::before {
          content: "✓";
          color: #0F172A;
          background: #BEF264;
        }
        .process-principles-grid {
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 0;
          gap: 18px;
        }
        .process-principle-card {
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 26px;
        }
        .process-principle-number {
          display: block;
          color: rgba(190,242,100,0.20);
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: 1.45rem;
          line-height: 1;
          margin-bottom: 18px;
        }
        .process-cta {
          background: radial-gradient(circle at 50% 40%, rgba(190,242,100,0.05), transparent 34%), #0A0F1A;
          text-align: center;
        }
        .process-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        @media (max-width: 960px) {
          .process-compare-grid,
          .process-principles-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .process-shell { width: min(100% - 36px, 1120px); }
          .process-step {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 18px;
          }
          .process-step-number {
            width: 44px;
            height: 44px;
          }
          .process-timeline::before { left: 21px; }
          .process-actions a { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="process-hero">
        <div className="process-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— Cómo trabajamos</span>
            <h1 className="process-h1">Primero entendemos, después ejecutamos.</h1>
            <p className="process-hero-copy">
              No vendemos paquetes ni listas de tareas. Cada proyecto comienza con un diagnóstico real de tu negocio y termina con un sistema medible de crecimiento.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="process-section process-dark">
        <div className="process-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— El proceso</span>
            <h2 className="section-h2" style={{ marginBottom: "48px" }}>Nuestro proceso paso a paso</h2>
          </Reveal>
          <div className="process-timeline">
            {PROCESS_STEPS.map(([number, title, copy], index) => (
              <Reveal key={number} delay={`${0.18 + index * 0.08}s`}>
                <article className="process-step">
                  <span className="process-step-number">{number}</span>
                  <div className="process-step-copy">
                    <h3 className="process-h3" style={{ color: "#FFFFFF", fontSize: "1.24rem", lineHeight: 1.2, marginBottom: "8px" }}>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section process-light">
        <div className="process-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow section-eyebrow-light" style={{ color: "#0F172A" }}>— Diferencia</span>
            <h2 className="section-h2 section-h2-dark" style={{ marginBottom: "46px" }}>Qué hace diferente a Social Marketing</h2>
          </Reveal>
          <div className="process-compare-grid">
            <Reveal delay="0.2s">
              <article className="process-compare-card is-others">
                <h3 className="process-h3" style={{ color: "#0F172A", fontSize: "1.45rem", lineHeight: 1.18 }}>Lo que otros hacen</h3>
                <ul className="process-compare-list">
                  {OTHERS.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </Reveal>
            <Reveal delay="0.32s">
              <article className="process-compare-card is-us">
                <h3 className="process-h3" style={{ color: "#0F172A", fontSize: "1.45rem", lineHeight: 1.18 }}>Lo que hacemos nosotros</h3>
                <ul className="process-compare-list">
                  {US.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="process-section process-level4">
        <div className="process-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— Principios de trabajo</span>
            <h2 className="section-h2" style={{ marginBottom: "46px" }}>Nuestros principios</h2>
          </Reveal>
          <div className="process-principles-grid">
            {PRINCIPLES.map(([number, title, copy], index) => (
              <Reveal key={number} delay={`${0.18 + index * 0.1}s`}>
                <article className="process-principle-card">
                  <span className="process-principle-number">{number}</span>
                  <h3 className="process-h3" style={{ color: "#FFFFFF", fontSize: "1.1rem", lineHeight: 1.25, marginBottom: "10px" }}>{title}</h3>
                  <p style={{ color: "#A8AEBB", fontFamily: "var(--font-inter)", lineHeight: 1.68 }}>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section process-cta">
        <div className="process-shell">
          <Reveal delay="0.1s">
            <h2 className="section-h2" style={{ maxWidth: "850px", margin: "0 auto 22px" }}>¿Listo para trabajar con un equipo que piensa antes de ejecutar?</h2>
            <p style={{ maxWidth: "620px", margin: "0 auto 34px", color: "#A8AEBB", fontFamily: "var(--font-inter)", lineHeight: 1.78 }}>
              Agenda un diagnóstico gratuito y evaluemos juntos tu situación digital.
            </p>
            <div className="process-actions">
              <Link href="/contacto" className="hero-cta-primary">
                Agendar diagnóstico
                <ArrowIcon />
              </Link>
              <a href={CONTACT.whatsappUrlWithMessage} target="_blank" rel="noopener noreferrer" className="hero-cta-secondary">
                <WhatsAppIcon />
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
