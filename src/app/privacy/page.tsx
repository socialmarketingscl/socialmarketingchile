import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Social Marketing Chile" },
  description:
    "Privacy trust anchor page for Social Marketing Chile and its treatment of personal data under Chilean privacy law.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A]">
      <section className="mx-auto w-full max-w-4xl px-4 py-28 md:px-6 md:py-36">
        <p className="font-instrument text-lg italic text-[#475569] md:text-xl">
          - Privacy
        </p>
        <h1 className="mt-4 font-archivo text-4xl font-black leading-tight text-[#0F172A] md:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-5 font-inter text-base leading-relaxed text-[#475569] md:text-lg">
          <p>
            Social Marketing SpA processes personal data submitted voluntarily
            through the website contact form, the lead magnet form and the
            WhatsApp button on socialmarketingchile.cl. The usual data includes
            name, business name, email, phone number, industry and the message
            or commercial context provided by the visitor.
          </p>
          <p>
            The data is used only to answer commercial inquiries, schedule
            diagnostics, send requested materials and contact people interested
            in the company&apos;s services. Social Marketing Chile does not sell,
            rent or transfer personal data to third parties for advertising
            purposes.
          </p>
          <p>
            Controller details: SOCIAL MARKETING SpA, RUT 78.385.946-7, email
            contacto@socialmarketingchile.cl, phone +56961533546, address
            Santiago, Region Metropolitana, Chile. Under Chilean Law No. 19.628,
            people may request information, correction, blocking or deletion of
            their personal data by writing to the contact email.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="rounded-full bg-[#BEF264] px-6 py-3 font-archivo text-sm font-black text-[#0F172A]" href="/politica-de-privacidad">
            Politica completa
          </Link>
          <Link className="rounded-full border border-[#CBD5E1] px-6 py-3 font-archivo text-sm font-black text-[#0F172A]" href="/contact">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
