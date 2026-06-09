"use client";

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
      "Si hacemos campañas pagadas, los primeros datos los tienes en las primeras semanas. Si trabajamos redes sociales y contenido orgánico, la tracción real empieza a notarse entre el segundo y tercer mes. SEO es más lento, ahí estamos hablando de 3 a 6 meses para ver movimiento real en Google. Y si implementamos automatización, eso funciona desde el día uno — un agente de WhatsApp empieza a responder apenas lo activamos. Lo importante es que todo lo medimos con datos, no con sensaciones. Vas a saber exactamente qué está funcionando y qué no.",
  },
  {
    question: "¿Qué incluye el diagnóstico gratuito?",
    answer:
      "Es una conversación donde nos sentamos a entender tu negocio. Qué vendes, cómo llegan tus clientes hoy, qué estás haciendo en digital, qué te ha funcionado y qué no. No es una auditoría técnica ni te vamos a entregar un informe de 20 páginas — es una reunión honesta para entender si te podemos ayudar y con qué. Si después de esa conversación vemos que hay un camino, te proponemos algo concreto. Si no, te lo decimos directamente. Sin compromiso de ningún lado.",
  },
  {
    question: "¿En qué se diferencian de otras agencias?",
    answer:
      "La mayoría de las agencias te ofrecen servicios sueltos. Te manejan las redes, o te hacen una campaña, o te diseñan un logo. Nosotros conectamos todo. No tiene sentido hacer una campaña de publicidad si después nadie le hace seguimiento a los leads que llegan. No tiene sentido tener redes sociales si no hay un objetivo comercial detrás. Lo que hacemos es armar un sistema completo donde la captación, el seguimiento y la conversión funcionan juntos. Y además integramos inteligencia artificial y automatización — agentes que responden por WhatsApp, sistemas que califican leads solos, CRM que ordena todo el proceso comercial. Eso es algo que la agencia promedio no ofrece.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" style={{ backgroundColor: "#0F172A", padding: "clamp(72px, 9vw, 120px) 0" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "grid", gap: "16px" }}>
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "clamp(24px, 4vw, 34px)",
              }}
            >
              <h3
                style={{
                  color: "#FFFFFF",
                  fontFamily: "var(--font-archivo), sans-serif",
                  fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.018em",
                  lineHeight: 1.2,
                  marginBottom: "14px",
                }}
              >
                {item.question}
              </h3>
              <p
                style={{
                  color: "#A8AEBB",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.78,
                }}
              >
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
