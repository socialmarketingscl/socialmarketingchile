import type { Metadata } from "next";
import GuiaClaudeForm from "./GuiaClaudeForm";

const pageTitle = "Guía de Claude para Pymes Chilenas | Gratis | Social Marketing";
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

const guideBullets = [
  "Cómo elegir el plan correcto sin gastar de más",
  "Casos de uso reales para tu tipo de negocio",
  "Automatiza tareas sin saber programar",
];

const stats = [
  {
    value: "30",
    label: "páginas de contenido aplicable",
  },
  {
    value: "0",
    label: "tecnicismos sin traducir",
  },
  {
    value: "Chile 🇨🇱",
    label: "pensada para pymes chilenas",
  },
];

const contentCards = [
  {
    icon: "document",
    title: "Planes y precios",
    description: "Cómo decidir qué plan de Claude te conviene según tu uso real",
  },
  {
    icon: "folder",
    title: "Proyectos y memoria",
    description: "Organiza tu trabajo para que Claude recuerde el contexto de tu negocio",
  },
  {
    icon: "bolt",
    title: "Automatización básica",
    description: "Tareas programadas y flujos que ahorran horas sin necesitar código",
  },
  {
    icon: "chat",
    title: "Atención al cliente",
    description: "Cómo usar Claude para responder consultas frecuentes de forma consistente",
  },
  {
    icon: "proposal",
    title: "Cotizaciones y propuestas",
    description: "Genera propuestas comerciales en minutos con el contexto de tu negocio",
  },
  {
    icon: "chart",
    title: "Casos reales de pyme",
    description: "Ejemplos concretos aplicados a rubros como servicios, comercio y gastronomía",
  },
];

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 flex-none text-[#BEF264]">
      <path
        fill="currentColor"
        d="M8.143 13.61 4.57 10.036l1.414-1.414 2.159 2.158 5.873-5.873 1.414 1.414z"
      />
    </svg>
  );
}

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

      <section className="bg-[#0F172A] px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(320px,2fr)] lg:items-center">
          <div>
            <p className="font-instrument text-lg italic text-[#BEF264] md:text-xl">
              Guía gratuita · Claude AI para pymes
            </p>
            <h1 className="mt-5 max-w-3xl font-archivo text-4xl font-black leading-[0.98] tracking-[-0.03em] text-[#F8FAFC] md:text-6xl lg:text-7xl">
              La guía de Claude que toda pyme chilena debería leer
            </h1>
            <p className="mt-6 max-w-2xl font-inter text-lg leading-relaxed text-[#CBD5E1] md:text-xl">
              30 páginas. Sin tecnicismos. Pensada para negocios que quieren usar IA de verdad, no solo hablar de ella.
            </p>
            <div className="mt-8">
              <a
                href="#formulario"
                className="inline-flex rounded-lg bg-[#BEF264] px-7 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635]"
              >
                Descargar guía gratis
              </a>
              <p className="mt-3 font-inter text-sm text-[#475569]">
                Sin spam. Tus datos solo se usan para enviarte la guía.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#334155] bg-[#1E293B] p-5 shadow-2xl shadow-black/20 md:p-7">
            <div className="rounded-lg border border-[#BEF264] bg-[#0F172A] p-8 text-center">
              <p className="font-archivo text-3xl font-black leading-tight text-[#BEF264] md:text-4xl">
                Guía Claude · Pymes Chile
              </p>
              <p className="mt-4 font-inter text-base text-[#CBD5E1]">
                30 páginas · Edición 2026
              </p>
            </div>
            <ul className="mt-6 space-y-4">
              {guideBullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 font-inter text-sm leading-relaxed text-[#CBD5E1]">
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-[720px] text-center">
          <p className="font-instrument text-lg italic text-[#475569] md:text-xl">
            ¿Por qué confiar en esta guía?
          </p>
          <h2 className="mt-4 font-archivo text-3xl font-black leading-tight tracking-[-0.025em] text-[#0F172A] md:text-5xl">
            La hicimos porque usamos Claude todos los días en nuestra agencia
          </h2>
          <p className="mt-6 font-inter text-base leading-relaxed text-[#475569] md:text-lg">
            En Social Marketing llevamos meses usando Claude para automatizar prospección, generar contenido y armar propuestas. Vimos que el 90% de los dueños de pyme están perdidos entre tutoriales gringos que no aplican a Chile. Esta guía es lo que nos hubiera gustado leer hace un año.
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
          <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[#1E293B] font-archivo text-2xl font-black text-[#BEF264]">
            SM
          </div>
          <div>
            <p className="font-instrument text-lg italic text-[#BEF264] md:text-xl">Quiénes somos</p>
            <h3 className="mt-3 font-archivo text-2xl font-black leading-tight text-[#F8FAFC] md:text-4xl">
              Social Marketing — Agencia de marketing digital e IA para pymes
            </h3>
            <p className="mt-4 font-inter text-base leading-relaxed text-[#CBD5E1] md:text-lg">
              Ayudamos a pymes chilenas a captar más clientes, automatizar respuestas y medir lo que importa. Sin humo.
            </p>
            <a
              href="https://socialmarketingchile.cl"
              className="mt-5 inline-flex font-inter text-base font-semibold text-[#BEF264] underline underline-offset-4"
            >
              socialmarketingchile.cl
            </a>
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
