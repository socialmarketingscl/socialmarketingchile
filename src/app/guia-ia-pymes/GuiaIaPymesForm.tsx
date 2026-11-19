"use client";

import { FormEvent, useState } from "react";
import { getFirstTouchAttribution } from "@/lib/first-touch-attribution";
import { pushGtmConversionEvent } from "@/lib/gtm-events";

type FormState = {
  name: string;
  businessName: string;
  email: string;
  whatsapp: string;
  businessType: string;
  website: string;
};

type GuiaIaPymesFormProps = {
  /** Dónde está el formulario, para distinguir conversiones en GA4. */
  ubicacion: "hero" | "pie";
  /** Versión compacta para el hero de la landing. */
  compact?: boolean;
};

const INITIAL_FORM_STATE: FormState = {
  name: "",
  businessName: "",
  email: "",
  whatsapp: "",
  businessType: "",
  website: "",
};

const REQUIRED_FIELD_LABELS: Record<"name" | "email", string> = {
  name: "Nombre",
  email: "Email",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

const inputClass =
  "w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 font-inter text-base text-[#0F172A] placeholder:text-[#94A3B8] focus:border-2 focus:border-[#BEF264] focus:outline-none";
const labelClass = "mb-2 block font-inter text-sm font-semibold text-[#0F172A]";

export default function GuiaIaPymesForm({ ubicacion, compact = false }: GuiaIaPymesFormProps) {
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

    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setError("Revisa tu email: el formato no es válido.");
      return;
    }

    setIsSubmitting(true);

    try {
      const attribution = getFirstTouchAttribution();
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, ...attribution }),
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
      pushGtmConversionEvent("descarga_guia", {
        form_name: "guia_ia_pymes",
        ubicacion,
        rubro: form.businessType || "sin_rubro",
        source: attribution.utmSource,
        medium: attribution.utmMedium,
        campaign: attribution.utmCampaign,
      });
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
      <div
        className={`rounded-xl border border-[#E2E8F0] bg-white text-center shadow-sm ${compact ? "p-6" : "p-8 md:p-10"}`}
        role="status"
      >
        <h3 className="font-archivo text-2xl font-black leading-tight text-[#0F172A] md:text-3xl">
          Listo. Te enviamos la guía a tu correo.
        </h3>
        <p className="mt-4 font-inter text-base leading-relaxed text-[#475569]">
          Revisa también spam o promociones si no la ves en unos minutos.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={downloadUrl}
            className="inline-flex items-center justify-center rounded-lg bg-[#BEF264] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635]"
          >
            Descargar guía ahora →
          </a>
          <a
            href="/contacto#agenda"
            className="inline-flex items-center justify-center rounded-lg border border-[#CBD5E1] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:border-[#BEF264]"
          >
            Agendar diagnóstico gratuito →
          </a>
        </div>
        <p className="mt-5 font-inter text-sm leading-relaxed text-[#475569]">
          Si quieres aplicarla en tu negocio con ayuda, agenda un diagnóstico gratuito de 30 minutos.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Recibir la guía gratuita"
      className={
        compact
          ? "rounded-2xl border border-white/10 bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-6"
          : "rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.12)] md:p-10"
      }
    >
      {compact ? (
        <p className="mb-4 font-archivo text-lg font-black leading-tight text-[#0F172A]">
          Recíbela gratis en tu correo
        </p>
      ) : (
        <div className="mb-8 text-center">
          <p className="font-instrument text-lg italic text-[#475569]">Descarga gratuita</p>
          <h2 className="mt-3 font-archivo text-3xl font-black leading-tight text-[#0F172A] md:text-4xl">
            Recibe la guía gratis en tu correo
          </h2>
          <p className="mt-4 font-inter text-base leading-relaxed text-[#475569]">
            Solo te pedimos tu nombre y tu correo. Te llega en minutos, lista para aplicar paso a paso.
          </p>
        </div>
      )}

      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "space-y-4"}>
        <label className="block">
          <span className={labelClass}>Nombre</span>
          <input
            required
            type="text"
            name="name"
            autoComplete="given-name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Tu nombre"
            className={inputClass}
          />
        </label>

        <label className="block">
          <span className={labelClass}>Email</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="tucorreo@ejemplo.com"
            className={inputClass}
          />
        </label>
      </div>

      <details className="group mt-3">
        <summary className="cursor-pointer list-none font-inter text-sm font-semibold text-[#475569] underline-offset-4 hover:underline focus-visible:underline [&::-webkit-details-marker]:hidden">
          <span className="group-open:hidden">+ Agregar más datos (opcional)</span>
          <span className="hidden group-open:inline">− Ocultar datos opcionales</span>
        </summary>
        <div className={`mt-3 ${compact ? "grid gap-3 sm:grid-cols-2" : "space-y-4"}`}>
          <label className="block">
            <span className={labelClass}>Rubro de tu negocio</span>
            <select
              name="businessType"
              value={form.businessType}
              onChange={(event) => updateField("businessType", event.target.value)}
              className={inputClass}
            >
              <option value="">Selecciona tu rubro</option>
              {RUBROS.map((rubro) => (
                <option key={rubro} value={rubro}>
                  {rubro}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className={labelClass}>Nombre de tu negocio</span>
            <input
              type="text"
              name="businessName"
              autoComplete="organization"
              value={form.businessName}
              onChange={(event) => updateField("businessName", event.target.value)}
              placeholder="Ej: Cafetería Barrio Sur"
              className={inputClass}
            />
          </label>

          <label className="block">
            <span className={labelClass}>WhatsApp</span>
            <input
              type="tel"
              name="whatsapp"
              autoComplete="tel"
              value={form.whatsapp}
              onChange={(event) => updateField("whatsapp", event.target.value)}
              placeholder="+56 9 xxxx xxxx"
              className={inputClass}
            />
          </label>
        </div>
      </details>

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

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-5 w-full rounded-lg bg-[#BEF264] px-6 py-3.5 font-archivo text-base font-black text-[#0F172A] transition hover:bg-[#A3E635] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar guía gratis →"}
      </button>

      {error ? (
        <p className="mt-4 font-inter text-sm font-semibold text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <p className="mt-4 font-inter text-xs leading-relaxed text-[#64748B]">
        Tus datos no se comparten. Solo los usamos para enviarte la guía y contenido útil para tu negocio.{" "}
        <a href="/politica-de-privacidad" className="underline underline-offset-2">
          Política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
