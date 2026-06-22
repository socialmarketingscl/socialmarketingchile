import type { Metadata } from "next";
import Image from "next/image";
import GuiaClaudeForm from "./GuiaClaudeForm";

const pageTitle = "Claude para Emprendedores Chilenos";
const pageDescription =
  "30 páginas sobre cómo usar Claude AI en tu negocio. Sin tecnicismos. Pensada para pymes chilenas. Descárgala gratis.";

export const metadata: Metadata = {
  title: {
    absolute: pageTitle,
  },
  description: pageDescription,
  alternates: {
    canonical: "/guia-claude-pymes",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: "/guia-claude-pymes",
    images: [
      {
        url: "/og-guia-claude.png",
        width: 1200,
        height: 630,
        alt: "Guía de Claude para Pymes Chilenas de Social Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-guia-claude.png"],
  },
};

const stats = [
  {
    value: "30",
    label: "páginas prácticas",
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
    icon: "document",
    title: "Planes y precios",
    description: "Cómo elegir el plan de Claude que más te conviene según tu uso real.",
  },
  {
    icon: "folder",
    title: "Proyectos y memoria",
    description: "Cómo organizar el contexto de tu negocio para trabajar mejor con Claude.",
  },
  {
    icon: "bolt",
    title: "Automatización básica",
    description: "Cómo ahorrar tiempo en tareas repetitivas sin necesidad de programar.",
  },
  {
    icon: "chat",
    title: "Atención al cliente",
    description: "Cómo usar Claude para responder consultas de forma más clara y consistente.",
  },
  {
    icon: "proposal",
    title: "Cotizaciones y propuestas",
    description: "Cómo generar propuestas comerciales más rápido con mejor estructura.",
  },
  {
    icon: "chart",
    title: "Casos reales de pyme",
    description: "Ejemplos aplicados a rubros como servicios, comercio, gastronomía y negocios locales.",
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

  if (type === "folder") {
    return (
      <svg {...commonProps}>
        <path d="M3 7.5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    );
  }

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

  return (
    <svg {...commonProps}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="M10 13h6M10 17h4" />
    </svg>
  );
}

export default function GuiaClaudePymesPage() {
  return (
    <main className="bg-[#0F172A]">
      <style>{`body > footer { display: none; }`}</style>

      <section className="relative overflow-hidden bg-[#0F172A] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-36">
        <div className="pointer-events-none absolute right-[-16%] top-20 h-[520px] w-[520px] rounded-full bg-[#BEF264]/10 blur-[130px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#F8FAFC]" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:items-center lg:gap-14">
          <div className="lg:max-w-[760px]">
            <p className="font-inter text-xs font-bold uppercase tracking-[0.18em] text-[#BEF264] md:text-sm">
              GUÍA GRATUITA 2026 · PARA PYMES CHILENAS
            </p>
            <h1 className="mt-5 max-w-[780px] font-archivo text-4xl font-black leading-[1.03] tracking-[-0.03em] text-[#F8FAFC] md:text-6xl lg:text-[4.75rem]">
              Aprende a usar Claude para vender, ordenar y automatizar tu pyme
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-[#CBD5E1] md:text-xl">
              30 páginas prácticas, sin tecnicismos, para aplicar inteligencia artificial en ventas, marketing, atención al cliente, automatización y publicidad digital.
            </p>
            <div className="mt-8">
              <a
                href="#formulario"
                className="inline-flex rounded-full bg-[#BEF264] px-7 py-3.5 font-archivo text-base font-black text-[#0F172A] shadow-[0_12px_30px_rgba(190,242,100,0.22)] transition hover:bg-[#A3E635]"
              >
                Quiero descargar la guía gratis
              </a>
              <p className="mt-3 font-inter text-sm text-[#475569]">
                Te enviaremos la guía al correo. Sin spam ni mensajes innecesarios.
              </p>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:min-h-[560px]">
            <div className="absolute inset-x-4 bottom-0 h-36 rounded-full bg-[#BEF264]/20 blur-[70px] lg:inset-x-0 lg:h-44" />
            <div className="absolute inset-8 rounded-[2rem] bg-[#1E293B]/70 blur-[90px]" />
            <div className="relative w-full max-w-[640px] rounded-2xl shadow-[0_34px_110px_rgba(0,0,0,0.48)] ring-1 ring-white/10 lg:max-w-none lg:scale-[1.24]">
              <Image
                src="/images/lead-magnets/claude-guia-hero.png"
                alt="Mockup premium de la guía Claude para Emprendedores Chilenos"
                width={2400}
                height={1501}
                priority
                quality={95}
                sizes="(min-width: 1280px) 52vw, (min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 pb-16 pt-14 md:px-6 md:pb-24 md:pt-20">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-instrument text-lg italic text-[#475569] md:text-xl">
            Hecha desde la práctica
          </p>
          <h2 className="mt-4 font-archivo text-3xl font-black leading-tight tracking-[-0.025em] text-[#0F172A] md:text-5xl">
            ¿Por qué confiar en esta guía?
          </h2>
          <p className="mt-6 font-inter text-base leading-relaxed text-[#475569] md:text-lg">
            En Social Marketing llevamos meses usando Claude para automatizar prospección, crear propuestas, responder mejor y ordenar procesos reales de negocio. Esta guía reúne lo que sí le sirve a una pyme chilena para empezar, sin teoría innecesaria ni ejemplos que no aplican a Chile.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
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
          <GuiaClaudeForm />
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
          © 2026 Social Marketing Chile · contacto@socialmarketingchile.cl
        </p>
      </footer>
    </main>
  );
}
