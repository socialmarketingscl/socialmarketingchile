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

const REQUIRED_FIELDS = [
  "nombre",
  "email",
  "whatsapp",
  "servicioInteres",
  "mensaje",
] as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { success: false, message: "El cuerpo de la solicitud debe ser JSON válido." },
      { status: 400 },
    );
  }

  const missingField = REQUIRED_FIELDS.find((field) => !getString(payload[field]));

  if (missingField) {
    return Response.json(
      { success: false, message: `Falta el campo obligatorio: ${missingField}.` },
      { status: 400 },
    );
  }

  const email = getString(payload.email);

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json(
      { success: false, message: "El email ingresado no tiene un formato válido." },
      { status: 400 },
    );
  }

  const makeWebhookUrl = process.env.MAKE_CONTACT_WEBHOOK_URL;

  if (!makeWebhookUrl) {
    return Response.json(
      { success: false, message: "No está configurado el webhook de contacto." },
      { status: 500 },
    );
  }

  const makePayload = {
    nombre: getString(payload.nombre),
    empresa: getString(payload.empresa),
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

  try {
    const makeResponse = await fetch(makeWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(makePayload),
    });

    if (!makeResponse.ok) {
      return Response.json(
        { success: false, message: "Make no pudo procesar la consulta." },
        { status: 502 },
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json(
      { success: false, message: "No se pudo conectar con Make." },
      { status: 502 },
    );
  }
}
