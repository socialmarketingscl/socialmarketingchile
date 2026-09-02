import type { Metadata } from "next";
import Image from "next/image";
import GuiaIaPymesForm from "./GuiaIaPymesForm";

const pageTitle =
  "Guía gratuita: Tu Pyme con Inteligencia Artificial en 15 Días | Social Marketing";
const pageDescription =
  "Descarga una guía práctica con prompts, pasos y ejemplos para aplicar inteligencia artificial en ventas, atención al cliente, contenido, cotizaciones y organización de tu pyme.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/guia-ia-pymes",
  },
  openGraph: {
    title: "Tu Pyme con Inteligencia Artificial en 15 Días",
    description:
      "Una guía gratuita para pymes chilenas con prompts, pasos y ejemplos prácticos para empezar a usar IA desde cero.",
    type: "website",
    url: "/guia-ia-pymes",
    images: [
      {
        url: "/images/fondo-landing.png",
        width: 1672,
        height: 941,
        alt: "Tu Pyme con Inteligencia Artificial en 15 Días",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Pyme con Inteligencia Artificial en 15 Días",
    description:
      "Una guía gratuita para pymes chilenas con prompts, pasos y ejemplos prácticos para empezar a usar IA desde cero.",
    images: ["/images/fondo-landing.png"],
  },
};

const stats = [
  {
    value: "113",
    label: "páginas prácticas",
  },
  {
    value: "15 días",
    label: "de aplicación guiada",
  },
  {
    value: "0",
    label: "tecnicismos innecesarios",
  },
  {
    value: "Chile",
    label: "pensada para pymes chilenas",
  },
];

const contentCards = [
  {
    icon: "chat",
    title: "Ventas y WhatsApp",
    description: "Respuestas listas para atender mejor, resolver dudas y avanzar conversaciones con clientes.",
  },
  {
    icon: "megaphone",
    title: "Contenido y campañas",
    description: "Ideas, mini campañas y calendario semanal para publicar con más orden en redes sociales.",
  },
  {
    icon: "document",
    title: "Cotizaciones y orden",
    description: "Estructuras claras para cotizar, responder reclamos y ordenar información sin partir desde cero.",
  },
  {
    icon: "chart",
    title: "Análisis simple de ventas",
    description: "Una forma práctica de leer tus ventas y detectar oportunidades sin usar planillas complejas.",
  },
  {
    icon: "bolt",
    title: "Rutina semanal con IA",
    description: "Un mini sistema para usar inteligencia artificial cada semana sin agobiarte.",
  },
  {
    icon: "calendar",
    title: "Plan de 30 días",
    description: "Una hoja de ruta simple para mantener el hábito después del reto.",
  },
];

function ContentIcon({ type }: { type: string }) {
  const commonProps = {
    className: "h-6 w-6 text-[#BEF264]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "bolt") {
    return (
      <svg {...commonProps}>
        <path d="M13 2 4 14h7l-1 8 10-13h-7z" />
      </svg>
    );
  }

  if (type === "chat") {
    return (
      <svg {...commonProps}>
        <path d="M5 17.5 3.5 21l4-1.3A8.5 8.5 0 1 0 4.4 16" />
        <path d="M8 11h.01M12 11h.01M16 11h.01" />
      </svg>
    );
  }

  if (type === "chart") {
    return (
      <svg {...commonProps}>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 15 4-4 3 3 5-7" />
      </svg>
    );
  }

  if (type === "calendar") {
    return (
      <svg {...commonProps}>
        <path d="M7 3v3M17 3v3" />
        <path d="M4 8h16" />
        <path d="M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
        <path d="M8 12h3M8 16h6" />
      </svg>
    );
  }

  if (type === "megaphone") {
    return (
      <svg {...commonProps}>
        <path d="m4 13 4 1 10 5V5L8 10l-4 1z" />
        <path d="m8 14 1 5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M10 13h6M10 17h4" />
    </svg>
  );
}

export default function GuiaIaPymesPage() {
  return (
    <main className="bg-[#0F172A]">
      <style>{`body > footer { display: none; }`}</style>

      <section className="relative isolate flex min-h-[700px] overflow-hidden px-4 pb-20 pt-28 md:min-h-[760px] md:px-6 md:py-32 lg:items-center">
        <Image
          src="/images/fondo-landing.png"
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/72 to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#F8FAFC]" />
        <div className="relative z-10 mx-auto w-full max-w-[1500px]">
          <div className="max-w-[680px]">
            <p className="font-inter text-xs font-bold uppercase tracking-[0.18em] text-[#BEF264] md:text-sm">
              GUÍA GRATUITA 2026 · PARA PYMES CHILENAS
            </p>
            <h1 className="mt-5 max-w-[680px] font-archivo text-4xl font-black leading-[1.08] tracking-[-0.03em] text-[#F8FAFC] md:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Aprende a usar inteligencia artificial en tu pyme en 15 días
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-[#CBD5E1] md:text-xl">
              Prompts, pasos y ejemplos prácticos para aplicar IA en ventas, atención al cliente, contenido, cotizaciones, seguimiento y organización, aunque estés empezando desde cero.
            </p>
            <div className="mt-8">
              <a
                href="#formulario"
                className="inline-flex rounded-full bg-[#BEF264] px-7 py-3.5 font-archivo text-base font-black text-[#0F172A] shadow-[0_12px_30px_rgba(190,242,100,0.22)] transition hover:bg-[#A3E635]"
              >
                Quiero descargar la guía gratis
              </a>
              <p className="mt-4 font-inter text-sm font-medium text-[#F8FAFC] md:text-base">
                Recibirás la guía en tu correo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 pb-16 pt-14 md:px-6 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-[840px] text-center">
          <p className="font-instrument text-lg italic text-[#475569] md:text-xl">
            Hecha desde la práctica
          </p>
          <h2 className="mt-4 font-archivo text-3xl font-black leading-tight tracking-[-0.025em] text-[#0F172A] md:text-5xl">
            ¿Por qué confiar en esta guía?
          </h2>
          <p className="mt-6 font-inter text-base leading-relaxed text-[#475569] md:text-lg">
            En Social Marketing trabajamos con inteligencia artificial aplicada a ventas, contenido, atención al cliente, automatización y procesos comerciales. Esta guía reúne un método simple para que una pyme chilena pueda empezar desde cero, sin tecnicismos y con ejemplos reales de negocio.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                <p className="font-archivo text-4xl font-black leading-none text-[#0F172A]">
                  {stat.value}
                </p>
                <p className="mt-3 font-inter text-sm leading-relaxed text-[#475569]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-instrument text-lg italic text-[#BEF264] md:text-xl">Contenido</p>
            <h2 className="mt-4 font-archivo text-3xl font-black leading-tight tracking-[-0.025em] text-[#F8FAFC] md:text-5xl">
              Qué vas a encontrar adentro
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contentCards.map((card) => (
              <article key={card.title} className="rounded-lg border border-[#334155] bg-[#1E293B] p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#141B2D]">
                  <ContentIcon type={card.icon} />
                </div>
                <h3 className="mt-5 font-archivo text-xl font-black text-[#F8FAFC]">
                  {card.title}
                </h3>
                <p className="mt-3 font-inter text-base leading-relaxed text-[#CBD5E1]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="scroll-mt-24 bg-[#F8FAFC] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[560px]">
          <GuiaIaPymesForm />
        </div>
      </section>

      <section className="bg-[#0F172A] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[#1E293B] p-3">
            <Image
              src="/logo-blanco-social-marketing-agencia-marketing-digital-ia.png"
              alt="Logo de Social Marketing"
              width={849}
              height={1021}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="font-instrument text-lg italic text-[#BEF264] md:text-xl">Hecha por Social Marketing</p>
            <h3 className="mt-3 font-archivo text-2xl font-black leading-tight text-[#F8FAFC] md:text-4xl">
              Agencia de marketing digital e inteligencia artificial aplicada a ventas, automatización y crecimiento para pymes en Chile.
            </h3>
            <p className="mt-4 font-inter text-base leading-relaxed text-[#CBD5E1] md:text-lg">
              Ayudamos a negocios a captar más clientes, ordenar su proceso comercial y usar IA con sentido práctico.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/contacto"
                className="inline-flex rounded-full bg-[#BEF264] px-6 py-3 font-archivo text-sm font-black text-[#0F172A] transition hover:bg-[#A3E635]"
              >
                Agendar diagnóstico gratuito →
              </a>
              <a
                href="https://socialmarketingchile.cl"
                className="inline-flex items-center font-inter text-base font-semibold text-[#BEF264] underline underline-offset-4"
              >
                socialmarketingchile.cl
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0F1A] px-4 py-6 text-center">
        <p className="font-inter text-[13px] text-[#475569]">
          © 2026 Social Marketing Chile · administracion@socialmarketingchile.cl
        </p>
      </footer>
    </main>
  );
}
