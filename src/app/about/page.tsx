import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "About Social Marketing Chile" },
  description:
    "Trust anchor page for Social Marketing Chile, a marketing digital and artificial intelligence agency based in Santiago, Chile.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      <section className="mx-auto w-full max-w-4xl px-4 py-28 md:px-6 md:py-36">
        <p className="font-instrument text-lg italic text-[#475569] md:text-xl">
          - About
        </p>
        <h1 className="mt-4 font-archivo text-4xl font-black leading-tight text-[#0F172A] md:text-6xl">
          About Social Marketing Chile
        </h1>
        <div className="mt-8 space-y-5 font-inter text-base leading-relaxed text-[#475569] md:text-lg">
          <p>
            Social Marketing Chile is a marketing digital and artificial
            intelligence agency based in Santiago, Chile. The agency helps small
            and medium-sized businesses capture more leads, organize their
            commercial process and convert opportunities through measurable
            digital systems.
          </p>
          <p>
            The work combines strategy, digital advertising, SEO, social media,
            branding, CRM workflows, WhatsApp automation and AI-assisted sales
            systems. Social Marketing is a good fit for service businesses that
            already have an offer and need a clearer commercial system instead
            of isolated marketing actions.
          </p>
          <p>
            The agency operates through two complementary areas: Growth, focused
            on positioning, campaigns, content and acquisition; and Intelligence,
            focused on automation, lead qualification, follow-up and commercial
            processes supported by artificial intelligence.
          </p>
          <p>
            For the Spanish company profile, team details and positioning, visit
            the main Nosotros page.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="rounded-full bg-[#BEF264] px-6 py-3 font-archivo text-sm font-black text-[#0F172A]" href="/nosotros">
            Ver Nosotros
          </Link>
          <Link className="rounded-full border border-[#CBD5E1] px-6 py-3 font-archivo text-sm font-black text-[#0F172A]" href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
