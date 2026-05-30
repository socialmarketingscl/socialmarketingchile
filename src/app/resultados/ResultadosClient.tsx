"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/constants";

type ResultCase = {
  business: string;
  subtitle: string;
  tags: string[];
  problem: string;
  work: string;
  metrics: { value: string; label: string }[];
  quote: string;
  author: string;
  evidence: string;
};

const CASES: ResultCase[] = [
  {
    business: "Ríos Eventos",
    subtitle: "Planificación de eventos — Bar & Catering",
    tags: ["Branding", "Sitio web", "Gestión de redes sociales", "SEO local", "Meta Ads", "Google Ads"],
    problem:
      "Llevaban más de 9 años en el rubro pero nunca habían profesionalizado su presencia digital. Dependían del boca a boca y no tenían un sistema para captar clientes nuevos de forma constante.",
    work:
      "Diseñamos su identidad visual completa, construimos su sitio web, implementamos gestión de redes sociales con línea editorial enfocada en eventos, activamos SEO local y lanzamos campañas en Meta Ads y Google Ads.",
    metrics: [
      { value: "+56%", label: "en eventos tras publicación de sitio web" },
      { value: "+627%", label: "visualizaciones orgánicas en redes sociales" },
      { value: "1.567", label: "seguidores construidos con comunidad real" },
    ],
    quote:
      "Social Marketing nos transformó exactamente en lo que queríamos. Entendieron todo lo que les pedimos, nos explicaron cada paso, y fue todo muy profesional, eficiente y eficaz.",
    author: "Catalina Prenafeta, Fundadora de Ríos Eventos",
    evidence: "/images/evidencia/Rios-Eventos-evidencia.jpeg",
  },
  {
    business: "Gasfitería y Destapes 24H",
    subtitle: "Servicios de gasfitería — Santiago y Chillán",
    tags: ["Logo", "Sitio web", "Formulario + WhatsApp", "Gestión de redes sociales", "Campañas", "Asesoría"],
    problem:
      "Dependían del contacto directo por recomendaciones. No tenían presencia digital profesional ni un sistema para recibir y gestionar consultas de clientes nuevos.",
    work:
      "Creamos su logo e identidad visual, construimos su sitio web con formulario de contacto integrado a WhatsApp, implementamos gestión de redes sociales y activamos campañas para generar consultas.",
    metrics: [
      { value: "+203%", label: "visualizaciones orgánicas en redes sociales" },
      { value: "17.200", label: "visualizaciones mensuales en Instagram" },
      { value: "100%", label: "presencia digital profesional desde cero" },
    ],
    quote:
      "Desde el primer momento entendieron lo que necesitábamos. Antes dependíamos del contacto directo por recomendaciones, pero ahora tenemos una presencia digital mucho más ordenada y preparada para recibir nuevos clientes.",
    author: "Jason Vargas, Dueño de Gasfitería y Destapes",
    evidence: "/images/evidencia/Gasfiteria-y-Destapes-evidencia.jpeg",
  },
  {
    business: "Amore",
    subtitle: "Florería y detalles — Santiago",
    tags: ["Branding", "Gestión de redes sociales", "Meta Ads", "Contenido", "Campañas estacionales"],
    problem:
      "Vendían solo por WhatsApp sin presencia en redes sociales. No tenían identidad visual profesional ni un canal de captación de clientes más allá del boca a boca.",
    work:
      "Armamos la identidad visual de la marca, creamos toda la presencia en Instagram desde cero con contenido profesional, y activamos campañas en fechas comerciales clave para generar ventas.",
    metrics: [
      { value: "+4.617", label: "seguidores construidos desde cero" },
      { value: "3.685", label: "visualizaciones mensuales en Instagram" },
      { value: "Activo", label: "canal de captación independiente del boca a boca" },
    ],
    quote:
      "Amore pasó de vender solo por WhatsApp a tener una presencia real en Instagram. Nos armaron la identidad visual, el contenido y las campañas en fechas clave. Hoy el perfil genera consultas solo, sin depender solo del boca a boca.",
    author: "Luciano Cataldo, Fundador de Amore",
    evidence: "/images/evidencia/Amore-evidencia-optimized.jpg",
  },
];

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
      className={`results-page-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
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

function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [closing, setClosing] = useState(false);

  const close = useCallback(() => {
    setClosing(true);
    setTimeout(onClose, 180);
  }, [onClose]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [close]);

  return (
    <div className={`results-lightbox${closing ? " is-closing" : ""}`} onClick={close}>
      <button className="results-lightbox-close" type="button" aria-label="Cerrar evidencia" onClick={close}>
        ×
      </button>
      <div className="results-lightbox-media" onClick={(event) => event.stopPropagation()}>
        <Image src={src} alt={alt} width={1200} height={900} style={{ maxWidth: "90vw", maxHeight: "85vh", width: "auto", height: "auto", objectFit: "contain", display: "block" }} />
      </div>
    </div>
  );
}

function CaseBlock({ item, index }: { item: ResultCase; index: number }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <Reveal as="article" className="result-case" delay={`${0.12 + index * 0.08}s`}>
      <div className="result-case-content">
        <p className="result-case-kicker">Caso {String(index + 1).padStart(2, "0")}</p>
        <h2 className="result-case-title">{item.business}</h2>
        <p className="result-case-subtitle">{item.subtitle}</p>
        <div className="result-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="result-copy-block">
          <h3>El problema</h3>
          <p>{item.problem}</p>
        </div>
        <div className="result-copy-block">
          <h3>Qué hicimos</h3>
          <p>{item.work}</p>
        </div>
        <div className="result-metrics">
          {item.metrics.map((metric) => (
            <div key={metric.label} className="result-metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <blockquote className="result-quote">
          <p>&ldquo;{item.quote}&rdquo;</p>
          <footer>{item.author}</footer>
        </blockquote>
      </div>
      <div className="result-evidence">
        <button
          type="button"
          className="result-evidence-button"
          onClick={() => setLightboxOpen(true)}
          aria-label={`Abrir evidencia de ${item.business}`}
        >
          <Image src={item.evidence} alt={`Evidencia de resultados de ${item.business}`} width={620} height={760} />
        </button>
      </div>
      {lightboxOpen && (
        <Lightbox src={item.evidence} alt={`Evidencia de resultados de ${item.business}`} onClose={() => setLightboxOpen(false)} />
      )}
    </Reveal>
  );
}

export default function ResultadosClient() {
  return (
    <main className="results-page">
      <style>{`
        .results-page { background: #0A0F1A; overflow: hidden; }
        .results-shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
        .results-page-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .results-page-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .results-hero {
          background: radial-gradient(circle at 78% 16%, rgba(190,242,100,0.055), transparent 35%), #0A0F1A;
          padding: clamp(150px, 14vw, 190px) 0 clamp(78px, 9vw, 118px);
        }
        .results-h1,
        .results-h2 {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          letter-spacing: -0.026em;
        }
        .results-h1 {
          color: #FFFFFF;
          font-size: clamp(2.7rem, 6vw, 5rem);
          line-height: 0.98;
          max-width: 800px;
          margin-bottom: 26px;
        }
        .results-hero-copy {
          max-width: 720px;
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.14rem);
          line-height: 1.82;
        }
        .results-cases {
          background: #F8FAFC;
          padding: clamp(78px, 9vw, 120px) 0;
        }
        .results-cases-list {
          display: grid;
          gap: clamp(44px, 6vw, 76px);
        }
        .result-case {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
          gap: clamp(28px, 4vw, 54px);
          align-items: center;
          padding: clamp(30px, 4vw, 46px);
          background: #FFFFFF;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 14px;
          box-shadow: 0 22px 62px rgba(15,23,42,0.08);
        }
        .result-case-kicker {
          font-family: var(--font-instrument), serif;
          font-style: italic;
          color: #0F172A;
          font-size: 1.05rem;
          margin-bottom: 12px;
        }
        .result-case-title {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          color: #0F172A;
          font-size: clamp(2rem, 4vw, 3.15rem);
          line-height: 1.02;
          letter-spacing: -0.026em;
          margin-bottom: 10px;
        }
        .result-case-subtitle {
          color: #64748B;
          font-family: var(--font-inter), sans-serif;
          margin-bottom: 18px;
        }
        .result-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 30px;
        }
        .result-tags span {
          color: #475569;
          background: rgba(15,23,42,0.045);
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 999px;
          padding: 5px 11px;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.74rem;
        }
        .result-copy-block { margin-bottom: 22px; }
        .result-copy-block h3 {
          font-family: var(--font-archivo), sans-serif;
          color: #0F172A;
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .result-copy-block p {
          font-family: var(--font-inter), sans-serif;
          color: #475569;
          line-height: 1.72;
        }
        .result-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin: 30px 0;
        }
        .result-metric-card {
          background: rgba(190,242,100,0.14);
          border: 1px solid rgba(190,242,100,0.34);
          border-radius: 9px;
          padding: 16px;
        }
        .result-metric-card strong {
          display: block;
          color: #3D6B00;
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: clamp(1.35rem, 2.4vw, 2rem);
          line-height: 1;
          margin-bottom: 8px;
        }
        .result-metric-card span {
          display: block;
          color: #475569;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.78rem;
          line-height: 1.45;
        }
        .result-quote {
          position: relative;
          margin: 0;
          padding: 26px 0 0;
          border-top: 1px solid rgba(15,23,42,0.08);
        }
        .result-quote p {
          font-family: var(--font-instrument), serif;
          font-style: italic;
          color: #1E293B;
          font-size: clamp(1.05rem, 1.7vw, 1.22rem);
          line-height: 1.58;
          margin-bottom: 14px;
        }
        .result-quote footer {
          color: #64748B;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.88rem;
        }
        .result-evidence-button {
          display: block;
          width: 100%;
          border: 0;
          padding: 0;
          background: transparent;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(15,23,42,0.16);
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .result-evidence-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 26px 70px rgba(15,23,42,0.22);
        }
        .result-evidence-button img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .results-cta {
          background: #141B2D;
          padding: clamp(76px, 9vw, 118px) 0;
          text-align: center;
        }
        .results-cta-copy {
          max-width: 620px;
          margin: 0 auto 34px;
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.78;
        }
        .results-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        .results-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0,0,0,0.86);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: opacity 0.18s ease;
        }
        .results-lightbox.is-closing { opacity: 0; }
        .results-lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 36px;
          height: 36px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: #FFFFFF;
          font-size: 26px;
          line-height: 1;
          cursor: pointer;
          z-index: 1;
        }
        .results-lightbox-media {
          border-radius: 12px;
          overflow: hidden;
          animation: results-lightbox-in 0.24s ease-out both;
        }
        @keyframes results-lightbox-in {
          from { opacity: 0; transform: scale(0.94); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 900px) {
          .result-case {
            grid-template-columns: 1fr;
          }
          .result-evidence {
            order: -1;
          }
          .result-metrics {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .results-shell { width: min(100% - 36px, 1120px); }
          .result-case { padding: 24px; }
          .results-actions a { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="results-hero">
        <div className="results-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— Resultados</span>
            <h1 className="results-h1">Resultados reales con negocios reales.</h1>
            <p className="results-hero-copy">
              No prometemos resultados mágicos. Mostramos lo que construimos con cada cliente: el problema inicial, lo que hicimos y los números que obtuvimos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="results-cases">
        <div className="results-shell">
          <div className="results-cases-list">
            {CASES.map((item, index) => (
              <CaseBlock key={item.business} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="results-cta">
        <div className="results-shell">
          <Reveal delay="0.1s">
            <h2 className="results-h2" style={{ color: "#FFFFFF", fontSize: "clamp(2.1rem, 4vw, 3.3rem)", lineHeight: 1.04, marginBottom: "22px" }}>
              ¿Quieres resultados así para tu negocio?
            </h2>
            <p className="results-cta-copy">
              Agenda un diagnóstico gratuito y evaluemos cómo construir un sistema de crecimiento para tu empresa.
            </p>
            <div className="results-actions">
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
