import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { PROJECTS, P_UI } from "@/lib/projects";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/projects/", `${P_UI.title[lang]} | Webb Prime Real Estate`, P_UI.lead[lang]);
}

export default async function Projects({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/projects/">
      <PageHero lang={lang} title={P_UI.title[lang]} lead={P_UI.lead[lang]} />
      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap markets">
          {PROJECTS.map((p) => (
            <a className="market" key={p.slug} href={`/${lang}/projects/${p.slug}/`}>
              <div className="media"><Photo slot={p.slug} /></div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <p className="eyebrow" style={{ color: "var(--gold-light)" }}>{p.area}</p>
                <h2>{p.name}</h2>
                <p style={{ color: "var(--navy-fg)", marginTop: 12 }}>{p.short[lang]}</p>
                <p style={{ color: "var(--navy-fg)" }}>{P_UI.from[lang]} {p.from.aed}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="wrap"><p className="pd-legal">{P_UI.note[lang]}</p></div>
      </section>
    </Shell>
  );
}
