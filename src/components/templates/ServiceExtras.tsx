import Link from "next/link";
import type { ServiceCase, ServiceFaq } from "@/lib/services";
import { SERVICE_PAGES } from "@/lib/services";

/* ============================================================
   ServiceExtras — bloques que amplían las páginas de servicio:
   caso real, herramientas, preguntas frecuentes y servicios
   relacionados. Se renderizan dentro de ServicePageTemplate.
   ============================================================ */

export const SERVICE_EXTRAS_CSS = `
  .svc-case-section {
    background: #F8FAFC;
    padding-top: 0 !important;
  }
  .svc-case {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: clamp(32px, 5vw, 64px);
    padding: clamp(32px, 5vw, 60px);
    border-radius: 14px;
    background:
      radial-gradient(circle at 88% 12%, rgba(190, 242, 100, 0.09), transparent 40%),
      #0F172A;
    box-shadow: 0 30px 80px rgba(15, 23, 42, 0.18);
  }
  .svc-case-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(190, 242, 100, 0.1);
    border: 1px solid rgba(190, 242, 100, 0.22);
    color: #BEF264;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .svc-case-title {
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    letter-spacing: -0.024em;
    color: #FFFFFF;
    font-size: clamp(1.7rem, 3.2vw, 2.5rem);
    line-height: 1.08;
    margin-bottom: 18px;
  }
  .svc-case-summary {
    color: #A8AEBB;
    font-family: var(--font-inter), sans-serif;
    font-size: 1rem;
    line-height: 1.75;
    margin-bottom: 24px;
  }
  .svc-case-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #BEF264;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px solid rgba(190, 242, 100, 0.35);
    padding-bottom: 3px;
    transition: border-color 0.2s ease, gap 0.2s ease;
  }
  .svc-case-link:hover { border-color: #BEF264; gap: 12px; }
  .svc-case-quote {
    margin: 26px 0 0;
    padding-left: 18px;
    border-left: 2px solid rgba(190, 242, 100, 0.5);
    color: #E2E8F0;
    font-family: var(--font-instrument), serif;
    font-style: italic;
    font-size: 1.08rem;
    line-height: 1.6;
  }
  .svc-case-quote footer {
    margin-top: 8px;
    color: #94A3B8;
    font-family: var(--font-inter), sans-serif;
    font-style: normal;
    font-size: 0.84rem;
  }
  .svc-case-metrics {
    display: grid;
    gap: 14px;
    align-content: center;
  }
  .svc-case-metric {
    padding: 22px 24px;
    border-radius: 10px;
    background: rgba(248, 250, 252, 0.04);
    border: 1px solid rgba(248, 250, 252, 0.1);
  }
  .svc-case-metric strong {
    display: block;
    font-family: var(--font-archivo), sans-serif;
    font-size: clamp(1.9rem, 3.6vw, 2.6rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #BEF264;
    margin-bottom: 8px;
  }
  .svc-case-metric span {
    color: #CBD5E1;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.92rem;
    line-height: 1.5;
  }
  .svc-flow {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0;
    align-content: center;
  }
  .svc-flow-step {
    position: relative;
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 16px;
    padding-bottom: 20px;
  }
  .svc-flow-step:last-child { padding-bottom: 0; }
  .svc-flow-step::before {
    content: "";
    position: absolute;
    left: 19px;
    top: 40px;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, rgba(190, 242, 100, 0.45), rgba(190, 242, 100, 0.08));
  }
  .svc-flow-step:last-child::before { display: none; }
  .svc-flow-dot {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: #141B2D;
    border: 1.5px solid rgba(190, 242, 100, 0.45);
    color: #BEF264;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    font-size: 0.78rem;
  }
  .svc-flow-body h3 {
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    font-size: 1.02rem;
    color: #FFFFFF;
    margin: 2px 0 4px;
  }
  .svc-flow-body p {
    color: #A8AEBB;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.92rem;
    line-height: 1.6;
  }
  .svc-flow-tool {
    display: inline-block;
    margin-top: 8px;
    padding: 3px 9px;
    border-radius: 999px;
    background: rgba(248, 250, 252, 0.06);
    border: 1px solid rgba(248, 250, 252, 0.12);
    color: #CBD5E1;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.74rem;
  }
  .svc-tools {
    margin-top: clamp(40px, 5vw, 56px);
    padding-top: 28px;
    border-top: 1px solid rgba(248, 250, 252, 0.08);
    max-width: 840px;
  }
  .svc-tools-title {
    color: #FFFFFF;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    font-size: 1rem;
    margin-bottom: 14px;
  }
  .svc-tools-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .svc-tools-list li {
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(248, 250, 252, 0.05);
    border: 1px solid rgba(248, 250, 252, 0.12);
    color: #E2E8F0;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.86rem;
  }
  .svc-faq-section { background: #F8FAFC; }
  .service-final-cta.svc-cta-after-light::before {
    background: linear-gradient(to bottom, #F8FAFC, #0A0F1A);
  }
  .svc-case { scroll-margin-top: 110px; }
  .svc-faq-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: clamp(32px, 5vw, 72px);
    align-items: start;
  }
  @media (min-width: 901px) {
    .svc-faq-grid > div:first-child { position: sticky; top: 120px; }
  }
  .svc-faq-intro {
    color: var(--slate-gray);
    font-family: var(--font-inter), sans-serif;
    line-height: 1.7;
  }
  .svc-faq-intro a { color: #0F172A; font-weight: 600; }
  .svc-faq-list { display: grid; gap: 12px; }
  .svc-faq-item {
    border-radius: 10px;
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }
  .svc-faq-item[open] {
    border-color: rgba(15, 23, 42, 0.18);
    box-shadow: 0 14px 36px rgba(15, 23, 42, 0.07);
  }
  .svc-faq-item summary {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    padding: 20px 22px;
    cursor: pointer;
    color: #0F172A;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 700;
    font-size: 1.02rem;
    line-height: 1.4;
  }
  .svc-faq-item summary::-webkit-details-marker { display: none; }
  .svc-faq-item summary:focus-visible { outline: 2px solid #0F172A; outline-offset: 2px; border-radius: 10px; }
  .svc-faq-icon {
    position: relative;
    flex: 0 0 28px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #0F172A;
  }
  .svc-faq-icon::before,
  .svc-faq-icon::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 11px;
    height: 2px;
    border-radius: 2px;
    background: #BEF264;
    transform: translate(-50%, -50%);
    transition: transform 0.25s ease;
  }
  .svc-faq-icon::after { transform: translate(-50%, -50%) rotate(90deg); }
  .svc-faq-item[open] .svc-faq-icon::after { transform: translate(-50%, -50%) rotate(0deg); }
  .svc-faq-answer {
    padding: 0 22px 22px;
    color: var(--slate-gray);
    font-family: var(--font-inter), sans-serif;
    font-size: 0.97rem;
    line-height: 1.72;
  }
  .svc-related {
    margin-top: clamp(56px, 7vw, 84px);
  }
  .svc-related-title {
    color: #0F172A;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    font-size: clamp(1.3rem, 2.2vw, 1.6rem);
    margin-bottom: 18px;
  }
  .svc-related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
  }
  .svc-related-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 22px;
    border-radius: 10px;
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    text-decoration: none;
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }
  .svc-related-card:hover {
    transform: translateY(-2px);
    border-color: rgba(15, 23, 42, 0.2);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  }
  .svc-related-card strong {
    color: #0F172A;
    font-family: var(--font-archivo), sans-serif;
    font-size: 1.02rem;
  }
  .svc-related-card span {
    color: var(--slate-gray);
    font-family: var(--font-inter), sans-serif;
    font-size: 0.9rem;
    line-height: 1.55;
  }
  .svc-related-card em {
    margin-top: auto;
    color: #0F172A;
    font-family: var(--font-inter), sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.88rem;
  }
  @media (max-width: 900px) {
    .svc-case,
    .svc-faq-grid { grid-template-columns: 1fr; }
    .svc-related-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .svc-case { padding: 26px 22px; border-radius: 12px; }
    .svc-faq-item summary { padding: 18px; font-size: 0.98rem; }
    .svc-faq-answer { padding: 0 18px 18px; }
  }
`;

export function ServiceCaseBlock({ caso }: { caso: ServiceCase }) {
  return (
    <div className="svc-case" id="caso">
      <div>
        <span className="svc-case-kicker">{caso.kicker}</span>
        <h2 className="svc-case-title">{caso.titulo}</h2>
        <p className="svc-case-summary">{caso.resumen}</p>
        {caso.href && (
          <Link href={caso.href} className="svc-case-link">
            {caso.hrefLabel ?? "Ver el caso completo"} <span aria-hidden="true">→</span>
          </Link>
        )}
        {caso.cita && (
          <blockquote className="svc-case-quote">
            <p>&ldquo;{caso.cita.texto}&rdquo;</p>
            <footer>{caso.cita.autor}</footer>
          </blockquote>
        )}
      </div>
      {caso.flujo ? (
        <ol className="svc-flow" aria-label="Cómo funciona el sistema">
          {caso.flujo.map((step, index) => (
            <li key={step.titulo} className="svc-flow-step">
              <span className="svc-flow-dot" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="svc-flow-body">
                <h3>{step.titulo}</h3>
                <p>{step.descripcion}</p>
                {step.herramienta && <span className="svc-flow-tool">{step.herramienta}</span>}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="svc-case-metrics">
          {caso.metricas?.map((metric) => (
            <div key={metric.label} className="svc-case-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ServiceToolsBlock({ herramientas }: { herramientas: string[] }) {
  return (
    <div className="svc-tools">
      <p className="svc-tools-title">Herramientas con las que trabajamos</p>
      <ul className="svc-tools-list">
        {herramientas.map((tool) => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceFaqBlock({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <div className="svc-faq-grid">
      <div>
        <h2 className="service-h2 service-h2-dark">Preguntas frecuentes</h2>
        <p className="svc-faq-intro">
          Lo que más nos preguntan sobre este servicio. Si tu duda no está acá, la resolvemos en el{" "}
          <Link href="/contacto#agenda">diagnóstico gratuito</Link>.
        </p>
      </div>
      <div className="svc-faq-list">
        {faqs.map((faq, index) => (
          <details key={faq.pregunta} className="svc-faq-item" open={index === 0}>
            <summary>
              {faq.pregunta}
              <span className="svc-faq-icon" aria-hidden="true" />
            </summary>
            <p className="svc-faq-answer">{faq.respuesta}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function ServiceRelatedBlock({ slugs }: { slugs: string[] }) {
  const items = slugs.map((slug) => SERVICE_PAGES[slug]).filter(Boolean);
  if (items.length === 0) return null;

  return (
    <nav className="svc-related" aria-label="Servicios relacionados">
      <p className="svc-related-title">Servicios que suelen ir juntos</p>
      <div className="svc-related-grid">
        {items.map((item) => (
          <Link key={item.slug} href={item.href} className="svc-related-card">
            <strong>{item.navLabel}</strong>
            <span>{item.resumenCorto ?? item.description}</span>
            <em>Ver servicio →</em>
          </Link>
        ))}
      </div>
    </nav>
  );
}
