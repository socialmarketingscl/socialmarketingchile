"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { CONTACT } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import { pushGtmConversionEvent } from "@/lib/gtm-events";

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
  as?: "div" | "section";
}) {
  const [ref, visible] = useReveal();
  const Component = as;

  return (
    <Component
      ref={ref as never}
      className={`contact-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

function LineIcon({ type }: { type: "mail" | "instagram" | "map" | "clock" }) {
  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17.5 6.5h.01" />
      </>
    ),
    map: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[type]}
    </svg>
  );
}

export default function ContactoClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(window.location.search);

    const payload = {
      nombre: String(formData.get("nombre") ?? ""),
      empresa: String(formData.get("empresa") ?? ""),
      cargo: "",
      email: String(formData.get("email") ?? ""),
      whatsapp: String(formData.get("telefono") ?? ""),
      servicioInteres: "Diagnóstico MAP",
      sitioWebInstagram: "",
      mensaje: String(formData.get("necesidad") ?? ""),
      presupuesto: "",
      comoNosEncontro: String(formData.get("origen") ?? ""),
      estado: "Nuevo contacto web",
      origen: "Sitio web Social Marketing",
      fechaIngreso: new Date().toISOString(),
      pageUrl: window.location.href,
      utmSource: searchParams.get("utm_source") ?? "",
      utmMedium: searchParams.get("utm_medium") ?? "",
      utmCampaign: searchParams.get("utm_campaign") ?? "",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || !data?.success) {
        throw new Error(data?.message || "No pudimos enviar tu consulta. Inténtalo nuevamente.");
      }

      trackEvent("contact_form_submitted", {
        form_name: "contacto",
        service_interest: payload.servicioInteres,
        source: payload.utmSource,
        medium: payload.utmMedium,
        campaign: payload.utmCampaign,
      });
      pushGtmConversionEvent("formulario_contacto");

      form.reset();
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No pudimos enviar tu consulta. Inténtalo nuevamente.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <style>{`
        .contact-page { background: #0A0F1A; overflow: hidden; }
        .contact-shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
        .contact-reveal {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .contact-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .contact-hero {
          background: radial-gradient(circle at 78% 16%, rgba(190,242,100,0.055), transparent 35%), #0A0F1A;
          padding: clamp(150px, 14vw, 190px) 0 clamp(78px, 9vw, 118px);
        }
        .contact-h1,
        .contact-h2,
        .contact-h3 {
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          letter-spacing: -0.026em;
        }
        .contact-h1 {
          color: #FFFFFF;
          font-size: clamp(2.7rem, 6vw, 5rem);
          line-height: 0.98;
          max-width: 760px;
          margin-bottom: 26px;
        }
        .contact-hero-copy {
          max-width: 720px;
          color: #A8AEBB;
          font-family: var(--font-inter), sans-serif;
          font-size: clamp(1rem, 1.6vw, 1.14rem);
          line-height: 1.82;
        }
        .contact-main {
          position: relative;
          background: #F8FAFC;
          padding: clamp(78px, 9vw, 118px) 0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);
          gap: clamp(28px, 4vw, 52px);
          align-items: start;
        }
        .contact-form-card {
          background: #FFFFFF;
          border: 1px solid rgba(15,23,42,0.08);
          border-radius: 12px;
          padding: clamp(28px, 4vw, 42px);
          box-shadow: 0 18px 46px rgba(15,23,42,0.07);
        }
        .contact-field { display: grid; gap: 8px; }
        .contact-label {
          font-family: var(--font-inter), sans-serif;
          font-weight: 500;
          font-size: 0.92rem;
          color: #0F172A;
        }
        .contact-input {
          width: 100%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          padding: 12px 16px;
          font-family: var(--font-inter), sans-serif;
          font-size: 16px;
          color: #0F172A;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-input:focus {
          border-color: #BEF264;
          box-shadow: 0 0 0 4px rgba(190,242,100,0.16);
        }
        .contact-form-grid { display: grid; gap: 18px; }
        .contact-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          border-radius: 8px;
          background: var(--kinetic-lime);
          color: var(--level-2);
          padding: 14px 32px;
          font-family: var(--font-archivo), sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .contact-submit:hover {
          background: #d4f97f;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(190,242,100,0.18);
        }
        .contact-submit svg { transition: transform 0.2s ease; }
        .contact-submit:hover svg { transform: translateX(4px); }
        .contact-submit:disabled {
          cursor: not-allowed;
          opacity: 0.72;
          transform: none;
          box-shadow: none;
        }
        .contact-confirmation {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 20px;
          padding: 14px 16px;
          border-radius: 8px;
          background: rgba(190,242,100,0.12);
          border: 1px solid rgba(190,242,100,0.35);
          color: #245000;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.5;
        }
        .contact-confirmation-icon {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: var(--kinetic-lime);
          color: #0F172A;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          animation: contact-check-pop 0.38s ease-out both;
        }
        @keyframes contact-check-pop {
          from { opacity: 0; transform: scale(0.65); }
          to { opacity: 1; transform: scale(1); }
        }
        .contact-error {
          margin-top: 20px;
          padding: 14px 16px;
          border-radius: 8px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.28);
          color: #991B1B;
          font-family: var(--font-inter), sans-serif;
          line-height: 1.5;
        }
        .contact-card {
          background: #0F172A;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: clamp(30px, 4vw, 40px);
          box-shadow: 0 22px 62px rgba(0,0,0,0.18);
        }
        .contact-direct-link,
        .contact-direct-static {
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
          color: #FFFFFF;
          text-decoration: none;
          padding: 4px 0;
        }
        .contact-direct-link:hover strong { color: var(--kinetic-lime); }
        .contact-direct-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: rgba(190,242,100,0.08);
          border: 1px solid rgba(190,242,100,0.15);
          color: var(--kinetic-lime);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .contact-direct-title {
          display: block;
          font-family: var(--font-archivo), sans-serif;
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.3;
          transition: color 0.18s ease;
        }
        .contact-direct-note {
          display: block;
          margin-top: 4px;
          font-family: var(--font-inter), sans-serif;
          font-size: 0.82rem;
          color: #A8AEBB;
          line-height: 1.5;
        }
        .contact-separator {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 22px 0;
        }
        .contact-steps {
          background: #0F172A;
          padding: clamp(76px, 9vw, 118px) 0;
        }
        .contact-steps-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .contact-step-card {
          background: rgba(255,255,255,0.055);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 28px;
        }
        .contact-step-number {
          display: block;
          color: rgba(190,242,100,0.20);
          font-family: var(--font-archivo), sans-serif;
          font-weight: 800;
          font-size: 1.55rem;
          line-height: 1;
          margin-bottom: 18px;
        }
        .contact-cta {
          background: #141B2D;
          padding: clamp(76px, 9vw, 118px) 0;
          text-align: center;
        }
        .contact-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
        @media (max-width: 860px) {
          .contact-grid,
          .contact-steps-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .contact-shell { width: min(100% - 36px, 1120px); }
          .contact-actions { align-items: stretch; }
          .contact-actions a { width: 100%; justify-content: center; }
        }
      `}</style>

      <section className="contact-hero">
        <div className="contact-shell">
          <Reveal delay="0.1s">
            <span className="section-eyebrow">— Contacto</span>
            <h1 className="contact-h1">Conversemos sobre tu negocio.</h1>
            <p className="contact-hero-copy">
              Agenda una reunión de diagnóstico gratuito y evaluemos juntos cómo convertir tu presencia digital en un sistema de captación, seguimiento y conversión real.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-shell">
          <div className="contact-grid">
            <Reveal delay="0.1s">
              <div className="contact-form-card">
                <form className="contact-form-grid" onSubmit={onSubmit}>
                  <label className="contact-field">
                    <span className="contact-label">Nombre</span>
                    <input className="contact-input" name="nombre" type="text" required />
                  </label>
                  <label className="contact-field">
                    <span className="contact-label">Empresa o negocio</span>
                    <input className="contact-input" name="empresa" type="text" required />
                  </label>
                  <label className="contact-field">
                    <span className="contact-label">Email</span>
                    <input className="contact-input" name="email" type="email" required />
                  </label>
                  <label className="contact-field">
                    <span className="contact-label">Teléfono/WhatsApp</span>
                    <input className="contact-input" name="telefono" type="tel" required />
                  </label>
                  <label className="contact-field">
                    <span className="contact-label">¿Qué necesitas mejorar?</span>
                    <textarea
                      className="contact-input"
                      name="necesidad"
                      placeholder="Cuéntanos brevemente qué está pasando con tu negocio o qué te gustaría mejorar."
                      required
                      rows={5}
                      style={{ resize: "vertical" }}
                    />
                  </label>
                  <label className="contact-field">
                    <span className="contact-label">¿Cómo nos encontraste?</span>
                    <select className="contact-input" name="origen" defaultValue="Google">
                      <option>Google</option>
                      <option>Instagram</option>
                      <option>Referido</option>
                      <option>Otro</option>
                    </select>
                  </label>
                  <button className="contact-submit" type="submit" disabled={submitting}>
                    {submitting ? "Enviando..." : "Enviar consulta"}
                    {!submitting && <ArrowIcon />}
                  </button>
                </form>
                {errorMessage && (
                  <div className="contact-error" role="alert">
                    {errorMessage}
                  </div>
                )}
                {submitted && (
                  <div className="contact-confirmation" role="status" aria-live="polite">
                    <span className="contact-confirmation-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>Gracias por contactarnos. Te responderemos dentro de las próximas 12 horas hábiles.</span>
                  </div>
                )}
              </div>
            </Reveal>

            <Reveal delay="0.25s">
              <aside className="contact-card">
                <h2 className="contact-h3" style={{ color: "#FFFFFF", fontSize: "1.65rem", lineHeight: 1.16, marginBottom: "28px" }}>
                  ¿Prefieres contactarnos directo?
                </h2>
                <a className="contact-direct-link" href={CONTACT.whatsappUrlWithMessage} target="_blank" rel="noopener noreferrer">
                  <span className="contact-direct-icon"><WhatsAppIcon /></span>
                  <span>
                    <strong className="contact-direct-title">{CONTACT.whatsapp}</strong>
                    <span className="contact-direct-note">Respuesta en menos de 4 horas</span>
                  </span>
                </a>
                <a className="contact-direct-link" href={`mailto:${CONTACT.email}?subject=Consulta%20desde%20sitio%20web&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios.`}>
                  <span className="contact-direct-icon"><LineIcon type="mail" /></span>
                  <span>
                    <strong className="contact-direct-title">{CONTACT.email}</strong>
                    <span className="contact-direct-note">Respuesta en menos de 12 horas</span>
                  </span>
                </a>
                <a className="contact-direct-link" href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <span className="contact-direct-icon"><LineIcon type="instagram" /></span>
                  <span>
                    <strong className="contact-direct-title">{CONTACT.instagram}</strong>
                  </span>
                </a>
                <div className="contact-separator" />
                <div className="contact-direct-static">
                  <span className="contact-direct-icon"><LineIcon type="map" /></span>
                  <span>
                    <strong className="contact-direct-title">Santiago, Chile</strong>
                    <span className="contact-direct-note">Reuniones presenciales y remotas</span>
                  </span>
                </div>
                <div className="contact-separator" />
                <div className="contact-direct-static">
                  <span className="contact-direct-icon"><LineIcon type="clock" /></span>
                  <span>
                    <strong className="contact-direct-title">Lunes a viernes, 9:00 a 18:00</strong>
                  </span>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact-steps">
        <div className="contact-shell">
          <Reveal delay="0.1s">
            <h2 className="contact-h2" style={{ color: "#FFFFFF", fontSize: "clamp(2.1rem, 4vw, 3.3rem)", lineHeight: 1.04, marginBottom: "42px" }}>
              Qué pasa después de contactarnos
            </h2>
          </Reveal>
          <div className="contact-steps-grid">
            {[
              ["01", "Respondemos en menos de 12 horas", "Revisamos tu consulta y te contactamos para entender mejor tu situación."],
              ["02", "Diagnóstico gratuito", "Una conversación de 30 minutos para analizar tu negocio, canales y oportunidades."],
              ["03", "Propuesta personalizada", "Si hay encaje, te presentamos un plan con servicios, plazos y presupuesto a tu medida."],
            ].map(([number, title, copy], index) => (
              <Reveal key={number} delay={`${0.2 + index * 0.15}s`}>
                <article className="contact-step-card">
                  <span className="contact-step-number">{number}</span>
                  <h3 className="contact-h3" style={{ color: "#FFFFFF", fontSize: "1.18rem", lineHeight: 1.25, marginBottom: "10px" }}>{title}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", color: "#A8AEBB", lineHeight: 1.72 }}>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-shell">
          <Reveal delay="0.1s">
            <h2 className="contact-h2" style={{ color: "#FFFFFF", fontSize: "clamp(2.1rem, 4vw, 3.3rem)", lineHeight: 1.04, marginBottom: "32px" }}>
              ¿Listo para dar el primer paso?
            </h2>
            <div className="contact-actions">
              <a href={CONTACT.whatsappUrlWithMessage} target="_blank" rel="noopener noreferrer" className="hero-cta-primary">
                Escribir por WhatsApp
                <WhatsAppIcon />
              </a>
              <a href={`mailto:${CONTACT.email}?subject=Consulta%20desde%20sitio%20web&body=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20sus%20servicios.`} className="hero-cta-secondary">
                <LineIcon type="mail" />
                Enviar email
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
