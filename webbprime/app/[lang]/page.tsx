import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { SITE } from "@/lib/site";
import { GROUP, HOME } from "@/lib/content";
import { PROJECTS, P_UI } from "@/lib/projects";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/", HOME.metaTitle[lang], HOME.metaDescription[lang]);
}

export default async function Home({ params }: P) {
  const lang = await getLang(params);
  const t = UI[lang];
  const roman = ["I", "II", "III"];
  return (
    <Shell lang={lang} path="/">
      <section className="hero-photo">
        <div className="media"><Photo slot="hero" /></div>
        <div className="wrap">
          <p className="eyebrow">{HOME.eyebrow[lang]}</p>
          <h1>{HOME.title[lang]}</h1>
          <p className="lead">{HOME.lead[lang]}</p>
          <a className="link-cta" href={`/${lang}/contact/`}>{t.cta.talk}</a>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <h2 className="statement">{HOME.statement[lang]}</h2>
          <ol className="principles">
            {HOME.principles.map((p, i) => (
              <li key={p.en}><span>{roman[i]}</span>{p[lang]}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>{HOME.projectsTitle[lang]}</p><a href={`/${lang}/projects/`}>{t.cta.allProjects}</a></div>
          <div className="markets">
            {PROJECTS.map((p) => (
              <a className="market" key={p.slug} href={`/${lang}/projects/${p.slug}/`}>
                <div className="media"><Photo slot={p.slug} /></div>
                <div style={{ position: "relative", zIndex: 1 }}>
                  <p className="eyebrow" style={{ color: "var(--gold-light)" }}>{p.area}</p>
                  <h2>{p.name}</h2>
                  <p style={{ color: "var(--navy-fg)", marginTop: 12 }}>{P_UI.from[lang]} {p.from.aed}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">{HOME.whyTitle[lang]}</p>
          <div className="grid g4" style={{ marginTop: 28 }}>
            {HOME.why.map((w) => (
              <div className="pillar" key={w.t.en}>
                <h3>{w.t[lang]}</h3>
                <p>{w.d[lang]}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 36 }}><a className="link-cta link-cta-dark" href={`/${lang}/invest/`}>{t.nav.invest}</a></p>
        </div>
      </section>

      <section className="family-strip">
        <div className="wrap">
          <p className="family-label">{HOME.groupLabel[lang]}</p>
          <ul>
            {GROUP.map((b) => (
              <li key={b.name}>
                {b.url ? <a className="fs-name" href={b.url} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>{b.name}</a> : <span className="fs-name">{b.name}</span>}
                <span className="fs-meta">{b.place[lang]} · {b.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Webb Florida Realty</p>
            <h2 className="statement">{HOME.floridaTitle[lang]}</h2>
          </div>
          <div>
            <p className="body-lg">{HOME.floridaText[lang]}</p>
            <a className="link-cta link-cta-dark" href={SITE.florida.url} target="_blank" rel="noopener">{t.footer.floridaLink} ↗</a>
          </div>
        </div>
      </section>

      <section className="sec band">
        <div className="wrap">
          <h2>{HOME.privateTitle[lang]}</h2>
          <p>{HOME.closing[lang]}</p>
          <a className="link-cta" href={`/${lang}/contact/`}>{t.cta.talk}</a>
        </div>
      </section>
    </Shell>
  );
}
