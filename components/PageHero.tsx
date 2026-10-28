import type { Locale } from "@/lib/site";
import { UI } from "@/lib/ui";

export default function PageHero({ lang, eyebrow, title, lead, crumbs = [] }: {
  lang: Locale; eyebrow?: string; title: string; lead?: string; crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="crumbs" aria-label="Breadcrumb">
          <a href={`/${lang}/`}>{UI[lang].breadcrumbHome}</a>
          {crumbs.map((c) => (
            <span key={c.href}> / <a href={c.href}>{c.label}</a></span>
          ))}
        </nav>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </section>
  );
}
