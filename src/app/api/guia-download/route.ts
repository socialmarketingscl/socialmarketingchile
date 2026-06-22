type GuiaDownloadPayload = {
  nombre?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  rubro?: unknown;
};

const REQUIRED_FIELDS = ["nombre", "email", "whatsapp", "rubro"] as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: GuiaDownloadPayload;

  try {
    payload = (await request.json()) as GuiaDownloadPayload;
  } catch {
    return Response.json(
      { success: false, error: "El cuerpo de la solicitud debe ser JSON válido." },
      { status: 400 },
    );
  }

  const missingField = REQUIRED_FIELDS.find((field) => !getString(payload[field]));

  if (missingField) {
    return Response.json(
      { success: false, error: `Falta el campo obligatorio: ${missingField}.` },
      { status: 400 },
    );
  }

  const email = getString(payload.email);

  if (!EMAIL_PATTERN.test(email)) {
    return Response.json(
      { success: false, error: "El email ingresado no tiene un formato válido." },
      { status: 400 },
    );
  }

  const webhookUrl = process.env.MAKE_WEBHOOK_GUIA_URL;

  if (!webhookUrl) {
    return Response.json(
      {
        success: false,
        error: "Webhook URL no configurada. Contacta al administrador.",
      },
      { status: 500 },
    );
  }

  const makePayload = {
    nombre: getString(payload.nombre),
    email,
    whatsapp: getString(payload.whatsapp),
    rubro: getString(payload.rubro),
    fuente: "landing-guia-claude",
    fecha: new Date().toISOString(),
  };

  try {
    const makeResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(makePayload),
    });

    if (!makeResponse.ok) {
      return Response.json(
        { success: false, error: "Make no pudo procesar la solicitud." },
        { status: 502 },
      );
    }

    return Response.json({ success: true }, { status: 200 });
  } catch {
    return Response.json(
      { success: false, error: "No se pudo conectar con Make." },
      { status: 502 },
    );
  }
}
