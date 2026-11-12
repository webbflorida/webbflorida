import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { LOCALES, SITE, isLocale, type Locale } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { PROJECTS, P_UI } from "@/lib/projects";

type P = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => PROJECTS.map((p) => ({ lang, slug: p.slug })));
}

async function load(params: P["params"]) {
  const { lang, slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!isLocale(lang) || !project) notFound();
  return { lang: lang as Locale, project };
}

export async function generateMetadata({ params }: P) {
  const { lang, project } = await load(params);
  return pageMeta(lang, `/projects/${project.slug}/`, `${project.name} · ${project.area} | Webb Prime Real Estate`, project.intro[lang].slice(0, 155));
}

export default async function Project({ params }: P) {
  const { lang, project } = await load(params);
  const t = UI[lang];
  const facts: [string, string][] = [
    [project.from.aed, `${P_UI.from[lang]} · ${project.from.usd}`],
    [project.area, "Dubai"],
    ...(project.delivery ? [[project.delivery, P_UI.delivery[lang]] as [string, string]] : []),
    ...(project.plan ? [[project.plan, P_UI.plan[lang]] as [string, string]] : []),
  ];
  return (
    <Shell lang={lang} path={`/projects/${project.slug}/`}>
      <section className="hero-photo area-hero">
        <div className="media"><Photo slot={project.slug} /></div>
        <div className="wrap">
          <p className="eyebrow"><a href={`/${lang}/projects/`}>{P_UI.title[lang]}</a> · {project.area}</p>
          <h1>{project.name}</h1>
          <p className="lead">{project.short[lang]}</p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="pd-facts" style={{ gridTemplateColumns: `repeat(${facts.length},1fr)` }}>
            {facts.map(([v, k]) => (
              <div key={k}><b className={v.length > 8 ? "sm" : ""}>{v}</b><span>{k}</span></div>
            ))}
          </div>

          <div className="pd-body">
            <div>
              <p className="body-lg">{project.intro[lang]}</p>
              <h3 style={{ marginTop: 40 }}>{P_UI.units[lang]}</h3>
              <p className="muted" style={{ marginTop: 12 }}>{project.units[lang]}</p>
              <h3 style={{ marginTop: 40 }}>{P_UI.highlights[lang]}</h3>
              <ul className="pd-list">
                {project.highlights[lang].map((h) => <li key={h}>{h}</li>)}
              </ul>
              <p className="muted" style={{ marginTop: 40 }}>{P_UI.escrow[lang]}</p>
            </div>
            <aside>
              <div className="pd-card">
                <div className="portrait"><Photo slot="ramon" /></div>
                <p className="eyebrow">{SITE.broker}</p>
                <h3>{project.name}</h3>
                <p className="muted" style={{ margin: "12px 0 24px" }}>{P_UI.note[lang]}</p>
                <a className="btn btn-dark" style={{ width: "100%" }} href={`/${lang}/contact/`}>{t.cta.details}</a>
                <p style={{ marginTop: 16, fontSize: 14 }}>
                  <a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>
            </aside>
          </div>
          <p className="pd-legal">{P_UI.note[lang]} {P_UI.permit[lang]}: {project.permit}. {SITE.legalName} · ORN {SITE.orn}.</p>
        </div>
      </section>
      <div style={{ height: 80 }} />
    </Shell>
  );
}
