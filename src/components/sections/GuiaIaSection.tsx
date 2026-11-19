import Link from "next/link";
import { GUIA_IA } from "@/lib/constants";

/* ============================================================
   GUÍA IA — Oferta de bajo compromiso en la home.
   Para quien todavía no quiere una reunión: deja su correo
   en vez de irse.
   ============================================================ */
export default function GuiaIaSection() {
  return (
    <section
      id="guia-ia"
      aria-labelledby="guia-ia-title"
      className="bg-[#0F172A] px-4 py-14 md:px-6 md:py-20"
    >
      <div className="mx-auto grid max-w-[1120px] items-center gap-8 rounded-2xl border border-[#BEF264]/25 bg-[#141B2D] p-7 md:grid-cols-[1fr_auto] md:gap-12 md:p-12">
        <div>
          <p className="font-instrument text-lg italic text-[#BEF264]">{GUIA_IA.eyebrow}</p>
          <h2
            id="guia-ia-title"
            className="mt-3 max-w-[640px] font-archivo text-3xl font-black leading-tight tracking-[-0.025em] text-[#F8FAFC] md:text-4xl"
          >
            {GUIA_IA.title}
          </h2>
          <p className="mt-4 max-w-[620px] font-inter text-base leading-relaxed text-[#CBD5E1] md:text-lg">
            {GUIA_IA.body}
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-center">
          <Link
            href={GUIA_IA.href}
            className="inline-flex items-center justify-center rounded-full bg-[#BEF264] px-7 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635]"
          >
            {GUIA_IA.ctaLabel}
          </Link>
          <p className="font-inter text-sm text-[#A8AEBB]">{GUIA_IA.note}</p>
        </div>
      </div>
    </section>
  );
}
