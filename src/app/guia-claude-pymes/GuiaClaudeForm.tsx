"use client";

import { FormEvent, useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  whatsapp: string;
  rubro: string;
  equipo: string;
};

const INITIAL_FORM_STATE: FormState = {
  nombre: "",
  email: "",
  whatsapp: "",
  rubro: "",
  equipo: "",
};

const RUBROS = [
  "Gastronomía y alimentos",
  "Salud y bienestar",
  "Servicios profesionales",
  "Comercio y retail",
  "Construcción y oficios",
  "Educación",
  "Tecnología",
  "Otro",
];

const EQUIPOS = [
  "Solo yo",
  "2 a 5 personas",
  "6 a 20 personas",
  "Más de 20 personas",
];

export default function GuiaClaudeForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/guia-download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Hubo un problema.");
      }

      setSubmittedEmail(form.email);
      setForm(INITIAL_FORM_STATE);
    } catch {
      setError(
        "Hubo un problema. Intenta de nuevo o escríbenos a contacto@socialmarketingchile.cl",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submittedEmail) {
    return (
      <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 text-center shadow-sm md:p-10">
        <h3 className="font-archivo text-2xl font-black leading-tight text-[#0F172A] md:text-3xl">
          ¡Listo! Revisa tu correo
        </h3>
        <p className="mt-4 font-inter text-base leading-relaxed text-[#475569]">
          Te enviamos la guía a {submittedEmail}. Si no llega en 5 minutos, revisa la carpeta de spam.
        </p>
        <a
          href="/guia-claude-pymes.pdf"
          className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#BEF264] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635]"
        >
          También puedes descargarla aquí →
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-[#E2E8F0] bg-white p-6 shadow-sm md:p-10"
    >
      <div className="mb-8 text-center">
        <p className="font-instrument text-lg italic text-[#475569]">Formulario</p>
        <h2 className="mt-3 font-archivo text-3xl font-black leading-tight text-[#0F172A] md:text-4xl">
          Descarga la guía gratis
        </h2>
        <p className="mt-4 font-inter text-base leading-relaxed text-[#475569]">
          Completa el formulario y recibe el PDF de inmediato en tu correo.
        </p>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block font-inter text-sm font-semibold text-[#0F172A]">
            Nombre completo
          </span>
          <input
            required
            type="text"
            value={form.nombre}
            onChange={(event) => updateField("nombre", event.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3 font-inter text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-2 focus:border-[#BEF264] focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-inter text-sm font-semibold text-[#0F172A]">
            Email
          </span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="tucorreo@ejemplo.com"
            className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3 font-inter text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-2 focus:border-[#BEF264] focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-inter text-sm font-semibold text-[#0F172A]">
            WhatsApp
          </span>
          <input
            required
            type="tel"
            value={form.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            placeholder="+56 9 xxxx xxxx"
            className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3 font-inter text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-2 focus:border-[#BEF264] focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-inter text-sm font-semibold text-[#0F172A]">
            Rubro de tu negocio
          </span>
          <select
            required
            value={form.rubro}
            onChange={(event) => updateField("rubro", event.target.value)}
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 font-inter text-base text-[#0F172A] focus:border-2 focus:border-[#BEF264] focus:outline-none"
          >
            <option value="" disabled>
              Selecciona tu rubro
            </option>
            {RUBROS.map((rubro) => (
              <option key={rubro} value={rubro}>
                {rubro}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block font-inter text-sm font-semibold text-[#0F172A]">
            Tamaño de tu equipo
          </span>
          <select
            required
            value={form.equipo}
            onChange={(event) => updateField("equipo", event.target.value)}
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 font-inter text-base text-[#0F172A] focus:border-2 focus:border-[#BEF264] focus:outline-none"
          >
            <option value="" disabled>
              ¿Cuántas personas trabajan contigo?
            </option>
            {EQUIPOS.map((equipo) => (
              <option key={equipo} value={equipo}>
                {equipo}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-lg bg-[#BEF264] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Descargar guía gratis →"}
      </button>

      {error ? (
        <p className="mt-4 font-inter text-sm font-semibold text-red-600">{error}</p>
      ) : null}

      <p className="mt-4 font-inter text-xs leading-relaxed text-[#94A3B8]">
        Al enviar, aceptas que Social Marketing guarde tus datos para enviarte la guía y eventualmente información relevante sobre marketing digital. Sin spam.
      </p>
    </form>
  );
}
