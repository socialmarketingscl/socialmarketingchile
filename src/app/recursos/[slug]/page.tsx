import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, formatDate, getArticle, type ArticleBlock } from "@/lib/recursos";
import { GUIA_IA } from "@/lib/constants";
import ArticleCard from "../ArticleCard";
import { RECURSOS_CSS } from "../recursos.css";

const BASE_URL = "https://socialmarketingchile.cl";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `/recursos/${article.slug}`;
  return {
    title: { absolute: article.metaTitle },
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      url,
      locale: "es_CL",
      publishedTime: article.published,
      modifiedTime: article.updated,
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.t) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "p":
      return <p>{block.text}</p>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "nota":
      return (
        <aside className="art-note">
          <strong>{block.title}</strong>
          <p>{block.text}</p>
        </aside>
      );
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${BASE_URL}/recursos/${article.slug}`;
  const related = [
    ...ARTICLES.filter((item) => item.slug !== article.slug && item.category === article.category),
    ...ARTICLES.filter((item) => item.slug !== article.slug && item.category !== article.category),
  ].slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: article.title,
        description: article.description,
        datePublished: article.published,
        dateModified: article.updated,
        inLanguage: "es-CL",
        mainEntityOfPage: url,
        url,
        articleSection: article.category,
        author: { "@id": `${BASE_URL}/#organization` },
        publisher: { "@id": `${BASE_URL}/#organization` },
        image: `${BASE_URL}/opengraph-image`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: BASE_URL },
          { "@type": "ListItem", position: 2, name: "Recursos", item: `${BASE_URL}/recursos` },
          { "@type": "ListItem", position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="rec-page">
      <style>{RECURSOS_CSS}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="rec-hero">
        <div className="rec-shell">
          <nav aria-label="Ruta de navegación">
            <ol className="art-breadcrumb">
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/recursos">Recursos</Link>
              </li>
              <li>{article.category}</li>
            </ol>
          </nav>
          <span className="rec-chip" style={{ background: "rgba(190,242,100,0.12)", color: "#BEF264", borderColor: "rgba(190,242,100,0.25)" }}>
            {article.category}
          </span>
          <h1 className="art-h1">{article.title}</h1>
          <p className="rec-lead">{article.intro}</p>
          <div className="art-meta">
            <span>
              Por <strong>Social Marketing</strong>
            </span>
            <span>
              Publicado el <time dateTime={article.published}>{formatDate(article.published)}</time>
            </span>
            <span>{article.minutes} min de lectura</span>
          </div>
        </div>
      </section>

      <section className="art-body">
        <div className="rec-shell">
          <article className="art-prose">
            {article.body.map((block, index) => (
              <Block key={index} block={block} />
            ))}
          </article>

          <aside className="art-cta">
            <h2>¿Quieres aplicarlo en tu negocio?</h2>
            <p>
              En el diagnóstico gratuito de 30 minutos revisamos tus canales y tu proceso comercial, y te decimos qué
              priorizar, nos contrates o no.
            </p>
            <div className="art-cta-actions">
              <Link href="/contacto#agenda" className="hero-cta-primary">
                Agendar diagnóstico gratuito →
              </Link>
              <Link href={article.service.href} className="art-cta-link">
                Ver servicio: {article.service.label}
              </Link>
              <Link href={GUIA_IA.href} className="art-cta-link">
                Descargar la guía gratuita de IA
              </Link>
            </div>
          </aside>

          {related.length > 0 && (
            <nav className="art-related" aria-label="Sigue leyendo">
              <p className="art-related-title">Sigue leyendo</p>
              <div className="rec-grid">
                {related.map((item) => (
                  <ArticleCard key={item.slug} article={item} />
                ))}
              </div>
            </nav>
          )}
        </div>
      </section>
    </main>
  );
}
