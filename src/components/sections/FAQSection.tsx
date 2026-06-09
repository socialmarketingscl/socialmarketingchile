"use client";

import { useEffect, useRef, useState } from "react";

const FAQ_ITEMS = [
  {
    question: "¿Con qué tipo de negocios trabajan?",
    answer:
      "Principalmente con pymes y negocios de servicios que ya están vendiendo pero sienten que su marketing no les está trayendo lo que debería. El típico caso es un negocio que tiene clientes, tiene algo funcionando, pero sabe que podría estar captando mucho más si tuviera las cosas más ordenadas. No trabajamos con personas que recién están pensando en emprender y no tienen nada armado todavía, ni con negocios que buscan solo que alguien les maneje el Instagram sin ningún objetivo comercial detrás.",
  },
  {
    question: "¿Cuánto cuesta contratar los servicios?",
    answer:
      'Depende completamente de lo que necesites. No tenemos paquetes armados tipo "plan básico, plan premium" porque cada negocio tiene problemas distintos. Primero conversamos, entendemos qué te está pasando, y ahí te armamos una propuesta con lo que realmente necesitas. Puede ser un proyecto puntual, un fee mensual, o una mezcla de ambas cosas. Lo que sí te puedo decir es que no cotizamos al aire — siempre vas a saber exactamente qué estás pagando, por qué y qué vas a recibir.',
  },
  {
    question: "¿En cuánto tiempo se ven resultados?",
    answer:
      "Si hacemos campañas pagadas, los primeros datos los tienes en las primeras semanas. Si trabajamos redes sociales y contenido orgánico, la tracción real empieza a notarse entre el segundo y tercer mes. SEO es más lento, ahí estamos hablando de 3 a 6 meses para ver movimiento real en Google. Y si implementamos automatización, eso funciona desde el día uno — un agente de WhatsApp empieza a responder apenas lo activamos. Lo importante es que todo lo medimos con datos, no con sensaciones.",
  },
  {
    question: "¿Qué incluye el diagnóstico gratuito?",
    answer:
      "Es una conversación donde nos sentamos a entender tu negocio. Qué vendes, cómo llegan tus clientes hoy, qué estás haciendo en digital, qué te ha funcionado y qué no. No es una auditoría técnica ni te vamos a entregar un informe de 20 páginas — es una reunión honesta para entender si te podemos ayudar y con qué. Si después de esa conversación vemos que hay un camino, te proponemos algo concreto. Si no, te lo decimos directamente. Sin compromiso de ningún lado.",
  },
  {
    question: "¿En qué se diferencian de otras agencias?",
    answer:
      "La mayoría de las agencias te ofrecen servicios sueltos. Te manejan las redes, o te hacen una campaña, o te diseñan un logo. Nosotros conectamos todo. No tiene sentido hacer una campaña de publicidad si después nadie le hace seguimiento a los leads que llegan. Lo que hacemos es armar un sistema completo donde la captación, el seguimiento y la conversión funcionan juntos. Y además integramos inteligencia artificial y automatización — agentes que responden por WhatsApp, sistemas que califican leads solos, CRM que ordena todo tu proceso comercial. Eso es algo que la agencia promedio no te ofrece.",
  },
];

function useReveal() {
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null);
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

export default function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const [headerRef, headerVisible] = useReveal();
  const [accordionRef, accordionVisible] = useReveal();

  return (
    <section id="faq" className="faq-section">
      <style>{`
        .faq-section {
          background: #F1F5F9;
          padding: clamp(72px, 9vw, 120px) 0;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .faq-header {
          margin-bottom: 44px;
          text-align: center;
        }

        .faq-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .faq-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-accordion {
          display: grid;
          gap: 8px;
        }

        .faq-item {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .faq-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .faq-header-button {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
          padding: 20px 24px 20px 42px;
          cursor: pointer;
          text-align: left;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, border-radius 0.2s ease;
        }

        .faq-header-button::before {
          content: "";
          position: absolute;
          left: 24px;
          top: 18px;
          bottom: 18px;
          width: 3px;
          border-radius: 999px;
          background: #BEF264;
        }

        .faq-header-button:hover {
          border-color: #CBD5E1;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.05);
        }

        .faq-header-button.is-open {
          border-bottom-color: transparent;
          border-radius: 12px 12px 0 0;
        }

        .faq-question {
          margin: 0;
          flex: 1;
        }

        .faq-question-text {
          color: #0F172A;
          font-family: var(--font-archivo), sans-serif;
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          font-weight: 700;
          line-height: 1.25;
        }

        .faq-icon {
          flex: 0 0 auto;
          color: #BEF264;
          font-family: var(--font-archivo), sans-serif;
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1;
        }

        .faq-body {
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-top: 0;
          border-radius: 0 0 12px 12px;
          transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        .faq-body.is-open {
          max-height: 520px;
          opacity: 1;
        }

        .faq-answer {
          padding: 0 24px 24px 42px;
          color: #475569;
          font-family: var(--font-inter), sans-serif;
          font-size: 1rem;
          line-height: 1.75;
        }

        @media (max-width: 640px) {
          .faq-container {
            padding: 0 20px;
          }

          .faq-header {
            text-align: left;
          }

          .faq-header-button {
            padding: 18px 18px 18px 36px;
            gap: 14px;
          }

          .faq-header-button::before {
            left: 18px;
            top: 16px;
            bottom: 16px;
          }

          .faq-answer {
            padding: 0 18px 22px 36px;
            font-size: 0.94rem;
          }
        }
      `}</style>

      <div className="faq-container">
        <div ref={headerRef as never} className={`faq-header faq-reveal${headerVisible ? " is-visible" : ""}`}>
          <span className="section-eyebrow section-eyebrow-light" style={{ color: "#475569" }}>
            — Preguntas frecuentes
          </span>
          <h2 className="section-h2 section-h2-dark">
            ¿Tienes dudas? Acá van las respuestas.
          </h2>
        </div>

        <div ref={accordionRef as never} className="faq-accordion">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openItem === index;

            return (
              <article
                key={item.question}
                className={`faq-item${accordionVisible ? " is-visible" : ""}`}
                style={{ transitionDelay: accordionVisible ? `${index * 100}ms` : "0ms" }}
              >
                <h3 className="faq-question">
                  <button
                    type="button"
                    className={`faq-header-button${isOpen ? " is-open" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenItem(isOpen ? null : index)}
                  >
                    <span className="faq-question-text">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={`faq-body${isOpen ? " is-open" : ""}`}
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
