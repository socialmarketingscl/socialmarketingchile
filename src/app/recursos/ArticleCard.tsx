import Link from "next/link";
import type { Article } from "@/lib/recursos";

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link href={`/recursos/${article.slug}`} className={`rec-card${featured ? " rec-card-featured" : ""}`}>
      <span className="rec-chip">{article.category}</span>
      <h2 className="rec-card-title">{article.title}</h2>
      <p className="rec-card-desc">{article.description}</p>
      <span className="rec-card-meta">
        <span>{article.minutes} min de lectura</span>
        <span className="rec-card-cta">Leer →</span>
      </span>
    </Link>
  );
}
