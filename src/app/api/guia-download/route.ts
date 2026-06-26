import { POST as leadMagnetPost } from "../lead-magnet/route";

type LegacyGuidePayload = {
  name?: unknown;
  nombre?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  businessType?: unknown;
  rubro?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  let payload: LegacyGuidePayload;

  try {
    payload = (await request.json()) as LegacyGuidePayload;
  } catch {
    return Response.json(
      { success: false, error: "El cuerpo de la solicitud debe ser JSON válido." },
      { status: 400 },
    );
  }

  const normalizedPayload = {
    name: payload.name ?? payload.nombre,
    email: payload.email,
    whatsapp: payload.whatsapp,
    businessType: payload.businessType ?? payload.rubro,
    website: payload.website,
  };

  const normalizedRequest = new Request(request.url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(normalizedPayload),
  });

  return leadMagnetPost(normalizedRequest);
}
