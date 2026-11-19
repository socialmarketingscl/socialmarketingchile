export const RECURSOS_CSS = `
  .rec-page { background: #F8FAFC; overflow: hidden; }
  .rec-shell { width: min(1120px, calc(100% - 48px)); margin: 0 auto; }
  .rec-hero {
    padding: clamp(150px, 14vw, 190px) 0 clamp(72px, 8vw, 104px);
    background: radial-gradient(circle at 80% 14%, rgba(190, 242, 100, 0.06), transparent 38%), #0A0F1A;
  }
  .rec-eyebrow {
    display: block;
    font-family: var(--font-instrument), serif;
    font-style: italic;
    font-size: clamp(1.05rem, 1.7vw, 1.22rem);
    color: var(--kinetic-lime);
    margin-bottom: 18px;
  }
  .rec-h1 {
    max-width: 860px;
    color: #FFFFFF;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    letter-spacing: -0.028em;
    font-size: clamp(2.4rem, 5.4vw, 4.4rem);
    line-height: 1;
    margin-bottom: 24px;
  }
  .rec-lead {
    max-width: 680px;
    color: #A8AEBB;
    font-family: var(--font-inter), sans-serif;
    font-size: clamp(1rem, 1.6vw, 1.15rem);
    line-height: 1.8;
  }
  .rec-list { padding: clamp(64px, 8vw, 104px) 0; }
  .rec-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }
  .rec-card {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 28px;
    border-radius: 12px;
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    text-decoration: none;
    transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }
  .rec-card:hover {
    transform: translateY(-3px);
    border-color: rgba(15, 23, 42, 0.2);
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.09);
  }
  .rec-card-featured {
    grid-column: span 2;
    background: radial-gradient(circle at 90% 10%, rgba(190, 242, 100, 0.1), transparent 45%), #0F172A;
    border-color: #0F172A;
  }
  .rec-card-featured .rec-card-title { color: #FFFFFF; font-size: clamp(1.5rem, 2.6vw, 2rem); }
  .rec-card-featured .rec-card-desc { color: #A8AEBB; }
  .rec-card-featured .rec-card-meta { color: #94A3B8; }
  .rec-card-featured .rec-chip { background: rgba(190, 242, 100, 0.12); color: #BEF264; border-color: rgba(190, 242, 100, 0.25); }
  .rec-card-featured .rec-card-cta { color: #BEF264; }
  .rec-chip {
    align-self: flex-start;
    padding: 5px 11px;
    border-radius: 999px;
    background: #F1F5F9;
    border: 1px solid rgba(15, 23, 42, 0.08);
    color: #0F172A;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.74rem;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .rec-card-title {
    color: #0F172A;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    letter-spacing: -0.018em;
    font-size: 1.22rem;
    line-height: 1.22;
  }
  .rec-card-desc {
    color: var(--slate-gray);
    font-family: var(--font-inter), sans-serif;
    font-size: 0.94rem;
    line-height: 1.65;
  }
  .rec-card-meta {
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    color: #64748B;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.84rem;
  }
  .rec-card-cta { color: #0F172A; font-weight: 600; }

  /* Artículo */
  .art-breadcrumb {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 26px;
    color: #94A3B8;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.86rem;
    list-style: none;
    padding: 0;
  }
  .art-breadcrumb a { color: #CBD5E1; text-decoration: none; }
  .art-breadcrumb a:hover { color: #BEF264; }
  .art-breadcrumb li + li::before { content: "/"; margin-right: 8px; color: #475569; }
  .art-h1 {
    max-width: 900px;
    color: #FFFFFF;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    letter-spacing: -0.026em;
    font-size: clamp(2.1rem, 4.6vw, 3.6rem);
    line-height: 1.05;
    margin: 18px 0 24px;
  }
  .art-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin-top: 28px;
    color: #94A3B8;
    font-family: var(--font-inter), sans-serif;
    font-size: 0.88rem;
  }
  .art-meta strong { color: #E2E8F0; font-weight: 600; }
  .art-body { padding: clamp(56px, 7vw, 92px) 0; }
  .art-prose { max-width: 720px; margin: 0 auto; }
  .art-prose h2 {
    color: #0F172A;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
    font-size: clamp(1.4rem, 2.6vw, 1.85rem);
    line-height: 1.2;
    margin: 44px 0 16px;
  }
  .art-prose h2:first-child { margin-top: 0; }
  .art-prose p,
  .art-prose li {
    color: #334155;
    font-family: var(--font-inter), sans-serif;
    font-size: 1.06rem;
    line-height: 1.8;
  }
  .art-prose p { margin-bottom: 18px; }
  .art-prose ul,
  .art-prose ol { margin: 0 0 22px; padding-left: 0; list-style: none; display: grid; gap: 12px; }
  .art-prose ul li { position: relative; padding-left: 28px; }
  .art-prose ul li::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 0.72em;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: #0F172A;
    box-shadow: 0 0 0 3px rgba(190, 242, 100, 0.55);
  }
  .art-prose ol { counter-reset: art; }
  .art-prose ol li { counter-increment: art; position: relative; padding-left: 42px; }
  .art-prose ol li::before {
    content: counter(art);
    position: absolute;
    left: 0;
    top: 0.18em;
    width: 28px;
    height: 28px;
    border-radius: 8px;
    background: #0F172A;
    color: #BEF264;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    font-size: 0.8rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .art-note {
    margin: 30px 0;
    padding: 22px 24px;
    border-radius: 12px;
    background: #FFFFFF;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-left: 4px solid #BEF264;
    box-shadow: 0 12px 34px rgba(15, 23, 42, 0.05);
  }
  .art-note strong {
    display: block;
    margin-bottom: 6px;
    color: #0F172A;
    font-family: var(--font-archivo), sans-serif;
    font-size: 1rem;
  }
  .art-note p { margin: 0; font-size: 0.99rem; }
  .art-cta {
    max-width: 720px;
    margin: 56px auto 0;
    padding: clamp(28px, 4vw, 40px);
    border-radius: 14px;
    background: radial-gradient(circle at 90% 10%, rgba(190, 242, 100, 0.1), transparent 45%), #0F172A;
    box-shadow: 0 26px 70px rgba(15, 23, 42, 0.16);
  }
  .art-cta h2 {
    color: #FFFFFF;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
    font-size: clamp(1.45rem, 2.8vw, 1.9rem);
    line-height: 1.15;
    margin-bottom: 12px;
  }
  .art-cta p {
    color: #A8AEBB;
    font-family: var(--font-inter), sans-serif;
    line-height: 1.7;
    margin-bottom: 22px;
  }
  .art-cta-actions { display: flex; flex-wrap: wrap; gap: 14px 22px; align-items: center; }
  .art-cta-link {
    color: #BEF264;
    font-family: var(--font-inter), sans-serif;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    border-bottom: 1px solid rgba(190, 242, 100, 0.35);
    padding-bottom: 2px;
  }
  .art-cta-link:hover { border-color: #BEF264; }
  .art-related { max-width: 1120px; margin: clamp(64px, 8vw, 96px) auto 0; }
  .art-related-title {
    color: #0F172A;
    font-family: var(--font-archivo), sans-serif;
    font-weight: 800;
    font-size: clamp(1.4rem, 2.4vw, 1.8rem);
    margin-bottom: 20px;
  }
  .art-related .rec-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 1000px) {
    .rec-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 700px) {
    .rec-shell { width: min(100% - 36px, 1120px); }
    .rec-grid,
    .art-related .rec-grid { grid-template-columns: 1fr; }
    .rec-card-featured { grid-column: auto; }
    .rec-card { padding: 22px; }
    .art-meta { gap: 6px 16px; margin-top: 22px; }
    .art-prose p, .art-prose li { font-size: 1.01rem; }
  }
`;
