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
      className={`about-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
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

const THINKING = [
  {
    title: "Diagnóstico antes de ejecución",
    description: "No vendemos servicios como respuesta automática. Primero entendemos el problema real del negocio.",
  },
  {
    title: "Sistemas, no acciones sueltas",
    description: "Cada servicio se conecta con los demás. Publicidad sin seguimiento no sirve. Contenido sin estrategia tampoco.",
  },
  {
    title: "Medición como criterio",
    description: "Si no se puede medir, no se puede mejorar. Cada acción se evalúa por su impacto en captación, conversión y crecimiento.",
  },
];

const FIT_ITEMS = [
  "Empresas de servicios que necesitan captar clientes de forma predecible",
  "Negocios que invierten en marketing digital pero no ven retorno claro",
  "Emprendedores que quieren profesionalizar su presencia y su proceso comercial",
  "Empresas que necesitan integrar marketing, automatización e IA en un solo sistema",
];

export default function NosotrosClient() {
  return (
    <main className="about-page">
      <style>{`
        .about-page { background: #0A0F1A; overflow: hidden; }
        .about-shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
        .about-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .about-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .about-hero {
          background: radial-gradient(circle at 78% 16%, rgba(190,242,100,0.055), transparent 35%), #0A0F1A;
          padding: clamp(150px, 14vw, 190px) 0 clamp(78px, 9vw, 118px);
        }
        .about-h1,
        .about-h2,
        .about-h3 {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          letter-spacing: -0.026em;
        }
        .about-h1 {
          color: #FFFFFF;
          font-size: clamp(2.7rem, 6vw, 5rem);
          line-height: 0.98;
          max-width: 880px;
          margin-bottom: 26px;
        }
        .about-hero-copy {
          max-width: 780px;
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.14rem);
          line-height: 1.82;
        }
        .about-section { padding: clamp(78px, 9vw, 118px) 0; }
        .about-light { background: #F8FAFC; }
        .about-dark { background: #0F172A; }
        .about-level4 { background: #141B2D; }
        .about-grid-2 {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: clamp(28px, 5vw, 64px);
          align-items: center;
        }
        .about-copy {
          font-family: var(--font-inter), sans-serif;
          color: #475569;
          line-height: 1.82;
          font-size: 1rem;
        }
        .about-copy + .about-copy { margin-top: 20px; }
        .about-stat-card,
        .about-area-card,
        .about-thinking-card {
          border-radius: 12px;
        }
        .about-stat-card {
          background: #0F172A;
          padding: 32px;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .about-stat {
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .about-stat:last-child { border-bottom: 0; }
        .about-stat strong {
          display: block;
          color: #FFFFFF;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.35rem;
          margin-bottom: 4px;
        }
        .about-stat span {
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.9rem;
        }
        .about-thinking-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .about-thinking-card {
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 28px;
        }
        .about-area-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .about-area-card {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.09);
          padding: clamp(28px, 4vw, 38px);
        }
        .about-area-card.is-featured {
          border-color: rgba(190,242,100,0.38);
          box-shadow: inset 3px 0 0 #BEF264;
        }
        .about-dash-list,
        .about-check-list {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .about-dash-list li,
        .about-check-list li {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.6;
        }
        .about-dash-list li::before {
          content: "—";
          color: var(--kinetic-lime);
          font-weight: 700;
        }
        .about-check-list li::before {
          content: "";
          width: 22px;
          height: 22px;
          flex: 0 0 auto;
          margin-top: 2px;
          border-radius: 50%;
          background: rgba(190,242,100,0.18);
          border: 1px solid rgba(190,242,100,0.42);
          background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 6L9 17l-5-5' stroke='%230F172A' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
        }
        .about-cta {
          background: radial-gradient(circle at 50% 40%, rgba(190,242,100,0.05), transparent 34%), #0A0F1A;
          text-align: center;
        }
        .about-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        @media (max-width: 860px) {
          .about-grid-2,
          .about-thinking-grid,
          .about-area-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .about-shell { width: min(100% - 36px, 1120px); }
          .about-actions a { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— Nosotros</span>
            <h1 className="about-h1">Marketing digital con criterio, tecnología con propósito.</h1>
            <p className="about-hero-copy">
              No somos una agencia que ejecuta tareas sueltas. Diseñamos sistemas de crecimiento que conectan estrategia, publicidad, contenido, automatización e inteligencia artificial para que tu negocio capte, ordene y convierta clientes de forma medible.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="about-section about-light">
        <div className="about-shell about-grid-2">
          <Reveal delay="0.1s">
            <span className="section-eyebrow section-eyebrow-light" style={{ color: "#0F172A" }}>— Quiénes somos</span>
            <h2 className="section-h2 section-h2-dark" style={{ marginBottom: "26px" }}>Una agencia construida desde la trinchera.</h2>
            <p className="about-copy">
              Social Marketing nace en Santiago, Chile, con un enfoque claro: ayudar a empresas y emprendedores a dejar de improvisar en lo digital. Vimos cómo negocios gastaban tiempo y dinero en acciones desconectadas — publicar sin estrategia, invertir en publicidad sin medir, responder leads sin sistema — y decidimos que había una forma mejor de hacerlo.
            </p>
            <p className="about-copy">
              No venimos del mundo de las agencias creativas tradicionales. Venimos del marketing de resultados, la automatización comercial y la inteligencia artificial aplicada a ventas. Eso define cómo pensamos cada proyecto: desde el problema del negocio hacia la solución, no al revés.
            </p>
          </Reveal>
          <Reveal delay="0.25s">
            <aside className="about-stat-card">
              {[
                ["Santiago, Chile", "Base de operaciones"],
                ["2 áreas integradas", "Growth + Intelligence"],
                ["6 líneas de servicio", "Marketing, publicidad, SEO, redes, marca y automatización con IA"],
              ].map(([value, label]) => (
                <div key={value} className="about-stat">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="about-section about-dark">
        <div className="about-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— Cómo pensamos</span>
            <h2 className="section-h2" style={{ maxWidth: "860px", marginBottom: "46px" }}>
              Lo que nos diferencia no es lo que hacemos, sino cómo lo pensamos.
            </h2>
          </Reveal>
          <div className="about-thinking-grid">
            {THINKING.map((item, index) => (
              <Reveal key={item.title} delay={`${0.18 + index * 0.14}s`}>
                <article className="about-thinking-card">
                  <h3 className="about-h3" style={{ color: "#FFFFFF", fontSize: "1.22rem", lineHeight: 1.25, marginBottom: "12px" }}>{item.title}</h3>
                  <p style={{ color: "#A8AEBB", fontFamily: "var(--font-inter)", lineHeight: 1.72 }}>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-level4">
        <div className="about-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— Estructura</span>
            <h2 className="section-h2" style={{ marginBottom: "46px" }}>Dos áreas, un solo objetivo.</h2>
          </Reveal>
          <div className="about-area-grid">
            <Reveal delay="0.2s">
              <article className="about-area-card">
                <h3 className="about-h3" style={{ color: "#FFFFFF", fontSize: "1.55rem", lineHeight: 1.18, marginBottom: "14px" }}>Social Marketing Growth</h3>
                <p style={{ color: "#A8AEBB", fontFamily: "var(--font-inter)", lineHeight: 1.75 }}>
                  Estrategia, posicionamiento, marca, contenido, publicidad digital y gestión de redes sociales. Todo lo que construye presencia, genera confianza y atrae oportunidades comerciales.
                </p>
                <ul className="about-dash-list" style={{ color: "#D7DBE3" }}>
                  {["Estrategia y consultoría", "Publicidad digital", "SEO y visibilidad", "Gestión de redes sociales", "Identidad visual y marca"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay="0.32s">
              <article className="about-area-card is-featured">
                <h3 className="about-h3" style={{ color: "#FFFFFF", fontSize: "1.55rem", lineHeight: 1.18, marginBottom: "14px" }}>Social Marketing Intelligence</h3>
                <p style={{ color: "#A8AEBB", fontFamily: "var(--font-inter)", lineHeight: 1.75 }}>
                  Automatización, agentes de IA, CRM, calificación de leads y sistemas de seguimiento comercial. Todo lo que convierte oportunidades en clientes sin depender de procesos manuales.
                </p>
                <ul className="about-dash-list" style={{ color: "#D7DBE3" }}>
                  {["Automatización de WhatsApp e Instagram", "Agentes de IA", "CRM para pymes", "Calificación automática de leads", "Sistemas de seguimiento comercial"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="about-section about-light">
        <div className="about-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow section-eyebrow-light" style={{ color: "#0F172A" }}>— Para quién trabajamos</span>
            <h2 className="section-h2 section-h2-dark" style={{ marginBottom: "34px" }}>¿Con quién trabajamos mejor?</h2>
            <ul className="about-check-list" style={{ maxWidth: "780px", color: "#475569" }}>
              {FIT_ITEMS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="about-section about-cta">
        <div className="about-shell">
          <Reveal delay="0.1s">
            <h2 className="section-h2" style={{ maxWidth: "720px", margin: "0 auto 22px" }}>¿Quieres saber si podemos ayudarte?</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 34px", color: "#A8AEBB", fontFamily: "var(--font-inter)", lineHeight: 1.78 }}>
              Agenda un diagnóstico gratuito y conversemos sobre tu negocio sin compromiso.
            </p>
            <div className="about-actions">
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
