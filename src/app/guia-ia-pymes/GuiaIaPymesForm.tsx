"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  whatsapp: string;
  businessType: string;
  website: string;
};

const INITIAL_FORM_STATE: FormState = {
  name: "",
  businessName: "",
  email: "",
  whatsapp: "",
  businessType: "",
  website: "",
};

const REQUIRED_FIELD_LABELS: Record<Exclude<keyof FormState, "website">, string> = {
  name: "Nombre completo",
  businessName: "Nombre de tu pyme o negocio",
  email: "Email",
  whatsapp: "WhatsApp",
  businessType: "Rubro de tu negocio",
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

export default function GuiaIaPymesForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(
    "/downloads/tu-pyme-con-ia-15-dias-social-marketing.pdf",
  );

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    for (const [field, label] of Object.entries(REQUIRED_FIELD_LABELS)) {
      if (!form[field as keyof typeof REQUIRED_FIELD_LABELS].trim()) {
        setError(`Falta el campo obligatorio: ${label}.`);
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
        downloadUrl?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Hubo un problema.");
      }

      setSubmittedEmail(form.email);
      if (data.downloadUrl) setDownloadUrl(data.downloadUrl);
      setForm(INITIAL_FORM_STATE);
    } catch {
      setError(
        "No pudimos enviar la guía en este momento. Intenta nuevamente o escríbenos por WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submittedEmail) {
    return (
      <div className="rounded-xl border border-[#E2E8F0] bg-white p-8 text-center shadow-sm md:p-10">
        <h3 className="font-archivo text-2xl font-black leading-tight text-[#0F172A] md:text-3xl">
          Listo. Te enviamos la guía a tu correo.
        </h3>
        <p className="mt-4 font-inter text-base leading-relaxed text-[#475569]">
          Revisa también spam o promociones si no la ves en unos minutos.
        </p>
        <a
          href={downloadUrl}
          className="mt-7 inline-flex items-center justify-center rounded-lg bg-[#BEF264] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635]"
        >
          Descargar guía ahora →
        </a>
        <a
          href="/contacto"
          className="mt-4 inline-flex items-center justify-center rounded-lg border border-[#CBD5E1] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:border-[#BEF264]"
        >
          Agendar diagnóstico gratuito →
        </a>
        <p className="mt-5 font-inter text-sm leading-relaxed text-[#475569]">
          Si quieres aplicar esta guía en tu negocio con ayuda, puedes agendar un diagnóstico gratuito con Social Marketing.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] md:p-10"
    >
      <div className="mb-8 text-center">
        <p className="font-instrument text-lg italic text-[#475569]">Descarga gratuita</p>
        <h2 className="mt-3 font-archivo text-3xl font-black leading-tight text-[#0F172A] md:text-4xl">
          Recibe la guía gratis en tu correo
        </h2>
        <p className="mt-4 font-inter text-base leading-relaxed text-[#475569]">
          Completa tus datos y te enviaremos la guía gratis para que empieces a aplicar inteligencia artificial en tu negocio, paso a paso.
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
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Tu nombre"
            className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3 font-inter text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-2 focus:border-[#BEF264] focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-inter text-sm font-semibold text-[#0F172A]">
            Nombre de tu pyme o negocio
          </span>
          <input
            required
            type="text"
            value={form.businessName}
            onChange={(event) => updateField("businessName", event.target.value)}
            placeholder="Ej: Cafetería Barrio Sur"
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
            value={form.businessType}
            onChange={(event) => updateField("businessType", event.target.value)}
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

        <label className="hidden" aria-hidden="true">
          Sitio web
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(event) => updateField("website", event.target.value)}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-lg bg-[#BEF264] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar guía gratis →"}
      </button>

      {error ? (
        <p className="mt-4 font-inter text-sm font-semibold text-red-600">{error}</p>
      ) : null}

      <p className="mt-4 font-inter text-xs leading-relaxed text-[#94A3B8]">
        Tus datos no se comparten. Solo los usaremos para enviarte la guía y contenido útil para tu negocio.
      </p>
    </form>
  );
}
