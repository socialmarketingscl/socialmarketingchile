/* Límite simple de envíos por IP para los endpoints de formularios.
   Vive en memoria de cada instancia serverless: no es perfecto, pero frena
   ráfagas de bots sin depender de un servicio externo. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "desconocida";
}

export function isRateLimited(request: Request, scope: string) {
  const key = `${scope}:${getClientIp(request)}`;
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  if (hits.size > 5000) {
    for (const [storedKey, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(storedKey);
    }
  }

  return false;
}
