import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { LOCALES, SITE, isLocale } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME } from "@/lib/content";
import { GUIDES } from "@/lib/guides";

type P = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => GUIDES.map((g) => ({ lang, slug: g.slug })));
}

async function load(params: P["params"]) {
  const { lang, slug } = await params;
  const g = GUIDES.find((x) => x.slug === slug);
  if (!isLocale(lang) || !g) notFound();
  return { lang, g };
}

export async function generateMetadata({ params }: P) {
  const { lang, g } = await load(params);
  return pageMeta(lang, `/guides/${g.slug}/`, `${g.title[lang]} | Webb Florida Realty`, g.summary[lang]);
}

export default async function GuidePage({ params }: P) {
  const { lang, g } = await load(params);
  const t = UI[lang];
  return (
    <Shell lang={lang} path={`/guides/${g.slug}/`}>
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "Article", headline: g.title[lang], description: g.summary[lang],
        inLanguage: lang, dateModified: g.reviewed,
        author: { "@type": "Person", name: SITE.broker }, publisher: { "@type": "Organization", name: SITE.brand },
      }} />
      <PageHero lang={lang} eyebrow={g.category[lang]} title={g.title[lang]}
        crumbs={[{ href: `/${lang}/guides/`, label: HOME.guidesTitle[lang] }]} />
      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap prose">
          <p className="muted" style={{ fontSize: 14 }}>{t.by} {SITE.broker} · {t.updated} {g.reviewed}</p>
          <div className="summary">{g.summary[lang]}</div>
          {g.sections.map((s) => (
            <div key={s.h.en}><h2>{s.h[lang]}</h2><p>{s.p[lang]}</p></div>
          ))}
          <p className="muted" style={{ fontSize: 14, marginTop: 40 }}>
            {lang === "pt" ? "Conteúdo informativo, não é aconselhamento jurídico, fiscal ou financeiro." : lang === "es" ? "Contenido informativo, no es asesoría legal, fiscal ni financiera." : "For information only; not legal, tax or financial advice."}
          </p>
          <p><a className="btn btn-dark" href={`/${lang}/contact/`}>{t.cta.talk}</a></p>
        </div>
      </section>
    </Shell>
  );
}
