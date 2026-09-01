import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { AGENT_NOT_FOUND_MARKDOWN, getAgentMarkdown } from "@/lib/agentMarkdown";

const MARKDOWN_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Content-Language": "es-CL",
  "Vary": "Accept, Accept-Encoding",
  "X-Content-Type-Options": "nosniff",
};

function parseQValue(part: string) {
  const q = part
    .split(";")
    .map((value) => value.trim())
    .find((value) => value.startsWith("q="));

  if (!q) {
    return 1;
  }

  const parsed = Number.parseFloat(q.slice(2));
  return Number.isFinite(parsed) ? parsed : 0;
}

function prefersMarkdown(accept: string | null) {
  if (!accept) {
    return false;
  }

  const ranges = accept.split(",").map((part) => ({
    mediaType: part.split(";")[0].trim().toLowerCase(),
    q: parseQValue(part),
  }));

  const markdownQ = Math.max(
    0,
    ...ranges
      .filter((range) => range.mediaType === "text/markdown")
      .map((range) => range.q),
  );

  if (markdownQ <= 0) {
    return false;
  }

  const htmlQ = Math.max(
    0,
    ...ranges
      .filter(
        (range) =>
          range.mediaType === "text/html" ||
          range.mediaType === "application/xhtml+xml",
      )
      .map((range) => range.q),
  );

  return markdownQ >= htmlQ;
}

export function proxy(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return NextResponse.next();
  }

  if (!prefersMarkdown(request.headers.get("accept"))) {
    return NextResponse.next();
  }

  const markdown = getAgentMarkdown(request.nextUrl.pathname);
  const body = request.method === "HEAD" ? null : markdown ?? AGENT_NOT_FOUND_MARKDOWN;

  return new NextResponse(body, {
    status: markdown ? 200 : 404,
    headers: MARKDOWN_HEADERS,
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|map|txt|xml|pdf)$).*)",
  ],
};
