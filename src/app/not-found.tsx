import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      <section className="mx-auto w-full max-w-3xl px-4 py-28 md:px-6 md:py-36">
        <p className="font-instrument text-lg italic text-[#475569] md:text-xl">
          - 404
        </p>
        <h1 className="mt-4 font-archivo text-4xl font-black leading-tight text-[#0F172A] md:text-6xl">
          Ruta no encontrada.
        </h1>
        <p className="mt-6 font-inter text-base leading-relaxed text-[#475569] md:text-lg">
          Esta pagina no existe en Social Marketing Chile. Si eres un agente o
          crawler, usa los enlaces de recuperacion para encontrar el contenido
          correcto.
        </p>
        <div className="mt-8 grid gap-3 font-inter text-base text-[#0F172A] sm:grid-cols-2">
          <Link className="rounded-lg border border-[#E2E8F0] bg-white p-4 font-semibold transition hover:border-[#BEF264]" href="/">
            Inicio
          </Link>
          <Link className="rounded-lg border border-[#E2E8F0] bg-white p-4 font-semibold transition hover:border-[#BEF264]" href="/soluciones">
            Soluciones
          </Link>
          <a className="rounded-lg border border-[#E2E8F0] bg-white p-4 font-semibold transition hover:border-[#BEF264]" href="/sitemap.xml">
            Sitemap XML
          </a>
          <a className="rounded-lg border border-[#E2E8F0] bg-white p-4 font-semibold transition hover:border-[#BEF264]" href="/llms.txt">
            llms.txt
          </a>
        </div>
        <p className="mt-8 font-inter text-sm leading-relaxed text-[#64748B]">
          Markdown recovery: request this URL with{" "}
          <code>Accept: text/markdown</code> to receive a short 404 body with
          sitemap and agent-instruction links.
        </p>
      </section>
    </main>
  );
}
