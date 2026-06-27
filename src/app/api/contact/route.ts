type ContactPayload = {
  nombre?: unknown;
  empresa?: unknown;
  cargo?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  servicioInteres?: unknown;
  sitioWebInstagram?: unknown;
  mensaje?: unknown;
  presupuesto?: unknown;
  comoNosEncontro?: unknown;
  estado?: unknown;
  origen?: unknown;
  fechaIngreso?: unknown;
  pageUrl?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
};

const REQUIRED_FIELDS = ["nombre", "email", "whatsapp", "servicioInteres", "mensaje"] as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_FIELD_LABELS: Record<(typeof REQUIRED_FIELDS)[number], string> = {
  nombre: "Nombre",
  email: "Mail",
  whatsapp: "WhatsApp",
  servicioInteres: "Servicio de interés",
  mensaje: "Mensaje",
};

const AIRTABLE_FIELDS = {
  nombre: "Nombre",
  mensaje: "Mensaje",
  cargo: "Cargo",
  email: "Mail",
  whatsapp: "WhastApp",
  servicioInteres: "Servicio de interés",
  sitioWebInstagram: "Sitio web / Instagram",
  presupuesto: "Presupuesto aproximado",
  comoNosEncontro: "Cómo nos encontró",
  estado: "Estado",
  origen: "Origen",
  fechaIngreso: "Fecha de ingreso",
  pageUrl: "URL de origen",
  utmSource: "UTM Source",
  utmMedium: "UTM Medium",
  utmCampaign: "UTM Campaign",
} as const;

const REQUIRED_AIRTABLE_ENV_VARS = [
  "AIRTABLE_API_KEY",
  "AIRTABLE_BASE_ID",
  "AIRTABLE_CONTACT_TABLE_NAME",
] as const;

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonError(error: string, status: number) {
  return Response.json({ success: false, error, message: error }, { status });
}

function getAirtableEnv() {
  const missing = REQUIRED_AIRTABLE_ENV_VARS.filter((name) => !process.env[name]);

  if (missing.length > 0) {
    console.error("[contact] Missing Airtable environment variables:", missing);
    return null;
  }

  return {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY as string,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID as string,
    AIRTABLE_CONTACT_TABLE_NAME: process.env.AIRTABLE_CONTACT_TABLE_NAME as string,
  };
}

function getResendEnv() {
  const missing = ["RESEND_API_KEY", "RESEND_FROM", "CONTACT_NOTIFY_TO"].filter(
    (name) => !process.env[name],
  );

  if (missing.length > 0) {
    console.error("[contact] Missing Resend environment variables:", missing);
    return null;
  }

  const notifyTo = (process.env.CONTACT_NOTIFY_TO as string)
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  if (notifyTo.length === 0) {
    console.error("[contact] CONTACT_NOTIFY_TO is empty.");
    return null;
  }

  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY as string,
    RESEND_FROM: process.env.RESEND_FROM as string,
    CONTACT_NOTIFY_TO: notifyTo,
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

function emptyFallback(value: string) {
  return value || "-";
}

async function readErrorBody(response: Response) {
  try {
    return await response.text();
  } catch {
    return "No response body";
  }
}

function buildContactData(payload: ContactPayload, email: string) {
  return {
    nombre: getString(payload.nombre),
    cargo: getString(payload.cargo),
    email,
    whatsapp: getString(payload.whatsapp),
    servicioInteres: getString(payload.servicioInteres),
    sitioWebInstagram: getString(payload.sitioWebInstagram),
    mensaje: getString(payload.mensaje),
    presupuesto: getString(payload.presupuesto),
    comoNosEncontro: getString(payload.comoNosEncontro),
    estado: getString(payload.estado) || "Nuevo contacto web",
    origen: getString(payload.origen) || "Sitio web Social Marketing",
    fechaIngreso: getString(payload.fechaIngreso) || new Date().toISOString(),
    pageUrl: getString(payload.pageUrl),
    utmSource: getString(payload.utmSource),
    utmMedium: getString(payload.utmMedium),
    utmCampaign: getString(payload.utmCampaign),
  };
}

function addAirtableField(
  fields: Record<string, string>,
  fieldName: string,
  value: string,
  includeEmpty = false,
) {
  if (includeEmpty || value) {
    fields[fieldName] = value;
  }
}

function buildInternalEmailHtml(contact: ReturnType<typeof buildContactData>) {
  const rows = [
    ["Nombre", contact.nombre],
    ["Cargo", contact.cargo],
    ["Mail", contact.email],
    ["WhatsApp", contact.whatsapp],
    ["Servicio de interés", contact.servicioInteres],
    ["Sitio web / Instagram", contact.sitioWebInstagram],
    ["Mensaje", contact.mensaje],
    ["Presupuesto aproximado", contact.presupuesto],
    ["Cómo nos encontró", contact.comoNosEncontro],
    ["Estado", contact.estado],
    ["Origen", contact.origen],
    ["Fecha de ingreso", contact.fechaIngreso],
    ["URL de origen", contact.pageUrl],
    ["UTM Source", contact.utmSource],
    ["UTM Medium", contact.utmMedium],
    ["UTM Campaign", contact.utmCampaign],
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #E2E8F0;color:#475569;font-size:14px;font-weight:700;vertical-align:top;width:190px;">
            ${escapeHtml(label)}
          </td>
          <td style="padding:10px 12px;border-bottom:1px solid #E2E8F0;color:#0F172A;font-size:14px;line-height:1.5;vertical-align:top;">
            ${escapeHtml(emptyFallback(value))}
          </td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="margin:0;padding:0;background:#F8FAFC;font-family:Arial,Helvetica,sans-serif;color:#0F172A;">
      <div style="max-width:680px;margin:0 auto;padding:32px 16px;">
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:28px;box-shadow:0 12px 30px rgba(15,23,42,0.08);">
          <p style="margin:0 0 10px;color:#65A30D;font-size:13px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
            Nuevo contacto web
          </p>
          <h1 style="margin:0 0 20px;color:#0F172A;font-size:26px;line-height:1.2;">
            ${escapeHtml(contact.nombre)}
          </h1>
          <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;border:1px solid #E2E8F0;border-radius:12px;overflow:hidden;">
            ${tableRows}
          </table>
        </div>
      </div>
    </div>
  `;
}

function buildInternalEmailText(contact: ReturnType<typeof buildContactData>) {
  return `Nuevo contacto desde la web

Nombre: ${emptyFallback(contact.nombre)}
Cargo: ${emptyFallback(contact.cargo)}
Mail: ${emptyFallback(contact.email)}
WhatsApp: ${emptyFallback(contact.whatsapp)}
Servicio de interés: ${emptyFallback(contact.servicioInteres)}
Sitio web / Instagram: ${emptyFallback(contact.sitioWebInstagram)}
Mensaje: ${emptyFallback(contact.mensaje)}
Presupuesto aproximado: ${emptyFallback(contact.presupuesto)}
Cómo nos encontró: ${emptyFallback(contact.comoNosEncontro)}
Estado: ${emptyFallback(contact.estado)}
Origen: ${emptyFallback(contact.origen)}
Fecha de ingreso: ${emptyFallback(contact.fechaIngreso)}
URL de origen: ${emptyFallback(contact.pageUrl)}
UTM Source: ${emptyFallback(contact.utmSource)}
UTM Medium: ${emptyFallback(contact.utmMedium)}
UTM Campaign: ${emptyFallback(contact.utmCampaign)}`;
}

function buildProspectEmailHtml(contact: ReturnType<typeof buildContactData>) {
  return `
    <div style="margin:0;padding:0;background:#F8FAFC;font-family:Arial,Helvetica,sans-serif;color:#0F172A;">
      <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:32px;box-shadow:0 12px 30px rgba(15,23,42,0.08);">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;">Hola ${escapeHtml(contact.nombre)},</p>
          <h1 style="margin:0 0 18px;font-size:26px;line-height:1.2;color:#0F172A;">
            Recibimos tu mensaje
          </h1>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#334155;">
            Gracias por contactar a Social Marketing.
            Recibimos tu solicitud y la revisaremos para responderte con contexto.
          </p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#334155;">
            Si dejaste tu WhatsApp, puede que también te contactemos por ese medio.
          </p>
          <p style="margin:0;font-size:16px;line-height:1.6;color:#334155;">
            Saludos,<br />Social Marketing Chile
          </p>
        </div>
      </div>
    </div>
  `;
}

function buildProspectEmailText(contact: ReturnType<typeof buildContactData>) {
  return `Hola ${contact.nombre},

Gracias por contactar a Social Marketing.
Recibimos tu solicitud y la revisaremos para responderte con contexto.

Si dejaste tu WhatsApp, puede que también te contactemos por ese medio.

Saludos,
Social Marketing Chile`;
}

async function sendResendEmail({
  apiKey,
  from,
  to,
  subject,
  html,
  text,
}: {
  apiKey: string;
  from: string;
  to: string[];
  subject: string;
  html: string;
  text: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    console.error("[contact] Resend response error:", {
      status: response.status,
      statusText: response.statusText,
      from,
      recipients: to.map((email) => {
        const [, domain = "unknown"] = email.split("@");
        return `*@${domain}`;
      }),
      body: await readErrorBody(response),
    });
    return false;
  }

  return true;
}

async function sendContactEmails(contact: ReturnType<typeof buildContactData>) {
  const envConfig = getResendEnv();

  if (!envConfig) {
    return false;
  }

  try {
    const [internalEmailSent, prospectEmailSent] = await Promise.all([
      sendResendEmail({
        apiKey: envConfig.RESEND_API_KEY,
        from: envConfig.RESEND_FROM,
        to: envConfig.CONTACT_NOTIFY_TO,
        subject: `Nuevo contacto desde la web — ${contact.nombre}`,
        html: buildInternalEmailHtml(contact),
        text: buildInternalEmailText(contact),
      }),
      sendResendEmail({
        apiKey: envConfig.RESEND_API_KEY,
        from: envConfig.RESEND_FROM,
        to: [contact.email],
        subject: "Recibimos tu mensaje — Social Marketing",
        html: buildProspectEmailHtml(contact),
        text: buildProspectEmailText(contact),
      }),
    ]);

    return internalEmailSent && prospectEmailSent;
  } catch (error) {
    console.error("[contact] Resend request failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonError("El cuerpo de la solicitud debe ser JSON válido.", 400);
  }

  const missingField = REQUIRED_FIELDS.find((field) => !getString(payload[field]));

  if (missingField) {
    return jsonError(`Falta el campo obligatorio: ${REQUIRED_FIELD_LABELS[missingField]}.`, 400);
  }

  const email = getString(payload.email);

  if (!EMAIL_PATTERN.test(email)) {
    return jsonError("El email ingresado no tiene un formato válido.", 400);
  }

  const envConfig = getAirtableEnv();

  if (!envConfig) {
    return jsonError("La integración de contacto no está configurada.", 500);
  }

  const contact = buildContactData(payload, email);
  const airtableFields: Record<string, string> = {};
  addAirtableField(airtableFields, AIRTABLE_FIELDS.nombre, contact.nombre, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.mensaje, contact.mensaje, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.cargo, contact.cargo);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.email, contact.email, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.whatsapp, contact.whatsapp, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.servicioInteres, contact.servicioInteres, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.sitioWebInstagram, contact.sitioWebInstagram);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.presupuesto, contact.presupuesto);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.comoNosEncontro, contact.comoNosEncontro);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.estado, contact.estado, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.origen, contact.origen, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.fechaIngreso, contact.fechaIngreso, true);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.pageUrl, contact.pageUrl);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.utmSource, contact.utmSource);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.utmMedium, contact.utmMedium);
  addAirtableField(airtableFields, AIRTABLE_FIELDS.utmCampaign, contact.utmCampaign);

  try {
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${envConfig.AIRTABLE_BASE_ID}/${encodeURIComponent(envConfig.AIRTABLE_CONTACT_TABLE_NAME)}`,
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
      console.error("[contact] Airtable response error:", {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        tableName: envConfig.AIRTABLE_CONTACT_TABLE_NAME,
        fields: Object.values(AIRTABLE_FIELDS),
        body: await readErrorBody(airtableResponse),
      });
      return jsonError("No pudimos guardar tu solicitud.", 502);
    }
  } catch (error) {
    console.error("[contact] Airtable request failed:", error);
    return jsonError("No pudimos guardar tu solicitud.", 502);
  }

  const emailSent = await sendContactEmails(contact);

  return Response.json(
    {
      success: true,
      saved: true,
      emailSent,
    },
    { status: 200 },
  );
}
