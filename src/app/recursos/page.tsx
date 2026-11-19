import type { Metadata } from "next";
import { ARTICLES, RECURSOS_INTRO } from "@/lib/recursos";
import ArticleCard from "./ArticleCard";
import { RECURSOS_CSS } from "./recursos.css";

const BASE_URL = "https://socialmarketingchile.cl";
const TITLE = "Recursos de marketing digital e IA | Social Marketing";
const DESCRIPTION =
  "Guías prácticas de Social Marketing sobre publicidad en Meta y Google, posicionamiento local, automatización con IA y medición de consultas.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: "/recursos" },
  openGraph: { title: TITLE, description: DESCRIPTION, type: "website", url: "/recursos", locale: "es_CL" },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${BASE_URL}/recursos#page`,
      name: TITLE,
      description: DESCRIPTION,
      url: `${BASE_URL}/recursos`,
      inLanguage: "es-CL",
      publisher: { "@id": `${BASE_URL}/#organization` },
      hasPart: ARTICLES.map((article) => ({
        "@type": "Article",
        headline: article.title,
        url: `${BASE_URL}/recursos/${article.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Recursos", item: `${BASE_URL}/recursos` },
      ],
    },
  ],
};

export default function RecursosPage() {
  return (
    <main className="rec-page">
      <style>{RECURSOS_CSS}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="rec-hero">
        <div className="rec-shell">
          <span className="rec-eyebrow">— {RECURSOS_INTRO.eyebrow}</span>
          <h1 className="rec-h1">{RECURSOS_INTRO.title}</h1>
          <p className="rec-lead">{RECURSOS_INTRO.body}</p>
        </div>
      </section>

      <section className="rec-list">
        <div className="rec-shell">
          <div className="rec-grid">
            {ARTICLES.map((article, index) => (
              <ArticleCard key={article.slug} article={article} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
