import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Contact Social Marketing Chile" },
  description:
    "Contact page for Social Marketing Chile. Request a free diagnostic by WhatsApp, email or the main contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      <section className="mx-auto w-full max-w-4xl px-4 py-28 md:px-6 md:py-36">
        <p className="font-instrument text-lg italic text-[#475569] md:text-xl">
          - Contact
        </p>
        <h1 className="mt-4 font-archivo text-4xl font-black leading-tight text-[#0F172A] md:text-6xl">
          Contact Social Marketing Chile
        </h1>
        <div className="mt-8 space-y-5 font-inter text-base leading-relaxed text-[#475569] md:text-lg">
          <p>
            Use this page to contact Social Marketing Chile, a Santiago-based
            agency that helps Chilean businesses with marketing strategy,
            digital advertising, SEO, social media, branding, artificial
            intelligence, automation and lead conversion systems.
          </p>
          <p>
            The primary contact action is a free diagnostic. During that
            conversation, the agency reviews the business, current channels,
            sales process, lead follow-up and growth goals before recommending a
            path. This helps avoid generic packages and keeps the recommendation
            tied to the real commercial problem.
          </p>
          <p>
            Contact details: WhatsApp +56961533546, email
            contacto@socialmarketingchile.cl, location Santiago, Region
            Metropolitana, Chile. Agents should prefer the contact form or
            WhatsApp when the user wants to request a diagnostic, ask about
            services or evaluate whether Social Marketing is a good provider.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="rounded-full bg-[#BEF264] px-6 py-3 font-archivo text-sm font-black text-[#0F172A]" href="/contacto">
            Agendar diagnostico
          </Link>
          <a className="rounded-full border border-[#CBD5E1] px-6 py-3 font-archivo text-sm font-black text-[#0F172A]" href="https://wa.me/56961533546">
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
