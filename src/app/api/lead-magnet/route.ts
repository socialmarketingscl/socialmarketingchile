type LeadMagnetPayload = {
  name?: unknown;
  businessName?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  businessType?: unknown;
  website?: unknown;
};

const REQUIRED_FIELDS = ["name", "businessName", "email", "whatsapp", "businessType"] as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LEAD_MAGNET_SOURCE = "guia_ia_pymes";

const REQUIRED_FIELD_LABELS: Record<(typeof REQUIRED_FIELDS)[number], string> = {
  name: "Nombre",
  businessName: "Nombre negocio",
  email: "Email",
  whatsapp: "WhatsApp",
  businessType: "Rubro",
};

const AIRTABLE_FIELDS = {
  name: "Nombre",
  businessName: "Nombre negocio",
  email: "Email",
  whatsapp: "WhatsApp",
  businessType: "Rubro",
  team: "Equipo",
  source: "Fuente",
  date: "Fecha",
  status: "Estado",
} as const;

const REQUIRED_ENV_VARS = [
  "AIRTABLE_API_KEY",
  "AIRTABLE_BASE_ID",
  "AIRTABLE_TABLE_NAME",
  "RESEND_API_KEY",
  "RESEND_FROM",
  "LEAD_MAGNET_PDF_URL",
] as const;

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonError(error: string, status: number) {
  return Response.json({ success: false, error }, { status });
}

function getLeadMagnetEnv() {
  const missing = REQUIRED_ENV_VARS.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    console.error("[lead-magnet] Missing environment variables:", missing);
    return null;
  }

  return {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY as string,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID as string,
    AIRTABLE_TABLE_NAME: process.env.AIRTABLE_TABLE_NAME as string,
    RESEND_API_KEY: process.env.RESEND_API_KEY as string,
    RESEND_FROM: process.env.RESEND_FROM as string,
    LEAD_MAGNET_PDF_URL: process.env.LEAD_MAGNET_PDF_URL as string,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function readErrorBody(response: Response) {
  try {
    return await response.text();
  } catch {
    return "No response body";
  }
}

export async function POST(request: Request) {
  let payload: LeadMagnetPayload;

  try {
    payload = (await request.json()) as LeadMagnetPayload;
  } catch {
    return jsonError("El cuerpo de la solicitud debe ser JSON válido.", 400);
  }

  if (getString(payload.website)) {
    return Response.json({ success: true }, { status: 200 });
  }

  const missingField = REQUIRED_FIELDS.find((field) => !getString(payload[field]));

  if (missingField) {
    return jsonError(`Falta el campo obligatorio: ${REQUIRED_FIELD_LABELS[missingField]}.`, 400);
  }

  const name = getString(payload.name);
  const businessName = getString(payload.businessName);
  const email = getString(payload.email);
  const whatsapp = getString(payload.whatsapp);
  const businessType = getString(payload.businessType);

  if (!EMAIL_PATTERN.test(email)) {
    return jsonError("El email ingresado no tiene un formato válido.", 400);
  }

  const envConfig = getLeadMagnetEnv();

  if (!envConfig) {
    return jsonError("La integración de descarga no está configurada.", 500);
  }

  const createdAt = new Date().toISOString();
  const airtableFields = {
    [AIRTABLE_FIELDS.name]: name,
    [AIRTABLE_FIELDS.businessName]: businessName,
    [AIRTABLE_FIELDS.email]: email,
    [AIRTABLE_FIELDS.whatsapp]: whatsapp,
    [AIRTABLE_FIELDS.businessType]: businessType,
    [AIRTABLE_FIELDS.team]: "Social Marketing",
    [AIRTABLE_FIELDS.source]: LEAD_MAGNET_SOURCE,
    [AIRTABLE_FIELDS.date]: createdAt,
    [AIRTABLE_FIELDS.status]: "Nuevo",
  };

  try {
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${envConfig.AIRTABLE_BASE_ID}/${encodeURIComponent(envConfig.AIRTABLE_TABLE_NAME)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${envConfig.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [{ fields: airtableFields }],
        }),
      },
    );

    if (!airtableResponse.ok) {
      console.error("[lead-magnet] Airtable response error:", {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        tableName: envConfig.AIRTABLE_TABLE_NAME,
        fields: Object.values(AIRTABLE_FIELDS),
        body: await readErrorBody(airtableResponse),
      });
      return jsonError("No pudimos registrar tu solicitud en este momento.", 502);
    }
  } catch (error) {
    console.error("[lead-magnet] Airtable request failed:", error);
    return jsonError("No pudimos registrar tu solicitud en este momento.", 502);
  }

  const safeName = escapeHtml(name);
  const safePdfUrl = escapeHtml(envConfig.LEAD_MAGNET_PDF_URL);
  const emailHtml = `
    <div style="margin:0;padding:0;background:#F8FAFC;font-family:Arial,Helvetica,sans-serif;color:#0F172A;">
      <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:32px;box-shadow:0 12px 30px rgba(15,23,42,0.08);">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Hola ${safeName},</p>
          <h1 style="margin:0 0 18px;font-size:28px;line-height:1.15;color:#0F172A;">
            Tu guía gratuita está lista
          </h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#334155;">
            Gracias por descargar la guía “Tu Pyme con Inteligencia Artificial en 15 Días”.
          </p>
          <p style="margin:0 0 28px;font-size:16px;line-height:1.6;color:#334155;">
            Preparamos este material para ayudarte a aplicar inteligencia artificial en ventas, atención al cliente, contenido, cotizaciones, seguimiento y organización, paso a paso.
          </p>
          <p style="margin:0 0 28px;">
            <a href="${safePdfUrl}" style="display:inline-block;background:#BEF264;color:#0F172A;text-decoration:none;font-weight:700;font-size:16px;line-height:1;padding:16px 22px;border-radius:999px;">
              Aquí tienes la guía →
            </a>
          </p>
          <p style="margin:0 0 8px;font-size:13px;line-height:1.5;color:#64748B;">
            Si el botón no funciona, copia y pega este enlace en tu navegador:
          </p>
          <p style="margin:0 0 28px;font-size:13px;line-height:1.5;word-break:break-all;">
            <a href="${safePdfUrl}" style="color:#0F172A;text-decoration:underline;">${safePdfUrl}</a>
          </p>
          <p style="margin:0;font-size:16px;line-height:1.6;color:#334155;">
            Un saludo,<br />Social Marketing Chile
          </p>
        </div>
      </div>
    </div>
  `;
  const emailText = `Hola ${name},

Gracias por descargar la guía “Tu Pyme con Inteligencia Artificial en 15 Días”.

Preparamos este material para ayudarte a aplicar inteligencia artificial en ventas, atención al cliente, contenido, cotizaciones, seguimiento y organización, paso a paso.

Aquí tienes la guía:

${envConfig.LEAD_MAGNET_PDF_URL}

Si el botón no funciona, copia y pega este enlace en tu navegador:

${envConfig.LEAD_MAGNET_PDF_URL}

Un saludo,
Social Marketing Chile`;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${envConfig.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: envConfig.RESEND_FROM,
        to: [email],
        subject: "Tu guía gratuita: Tu Pyme con Inteligencia Artificial en 15 Días",
        html: emailHtml,
        text: emailText,
      }),
    });

    if (!resendResponse.ok) {
      console.error("[lead-magnet] Resend response error:", {
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        from: envConfig.RESEND_FROM,
        recipientDomain: email.split("@")[1] ?? "unknown",
        body: await readErrorBody(resendResponse),
      });
      return jsonError("No pudimos enviar la guía en este momento.", 502);
    }

    return Response.json(
      { success: true, downloadUrl: envConfig.LEAD_MAGNET_PDF_URL },
      { status: 200 },
    );
  } catch (error) {
    console.error("[lead-magnet] Resend request failed:", error);
    return jsonError("No pudimos enviar la guía en este momento.", 502);
  }
}
