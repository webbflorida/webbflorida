import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { AREAS, HOME } from "@/lib/content";
import { GUIDES } from "@/lib/guides";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/", HOME.metaTitle[lang], HOME.metaDescription[lang]);
}

export default async function Home({ params }: P) {
  const lang = await getLang(params);
  const t = UI[lang];
  const markets = ["Orlando", "Miami"].map((r) => ({ r, items: AREAS.filter((a) => a.region === r) }));
  const roman = ["I", "II", "III"];
  return (
    <Shell lang={lang} path="/">
      <section className="hero-photo">
        <div className="media"><Photo slot="hero" /></div>
        <div className="wrap">
          <p className="eyebrow">{HOME.eyebrow[lang]}</p>
          <h1>{HOME.title[lang]}</h1>
          <a className="link-cta" href={`/${lang}/contact/`}>{t.cta.talk}</a>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <h2 className="statement">{HOME.statement[lang]}</h2>
          <div>
            <ol className="principles">
              {HOME.principles.map((p, i) => (
                <li key={p.en}><span>{roman[i]}</span>{p[lang]}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <p className="eyebrow" style={{ textAlign: "center" }}>{HOME.marketsTitle[lang]}</p>
          <div className="markets">
            {markets.map((m) => (
              <a className="market" key={m.r} href={`/${lang}/areas/`}>
                <div className="media"><Photo slot={m.r.toLowerCase()} /></div>
                <h2>{m.r}</h2>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head"><p className="eyebrow" style={{ margin: 0 }}>{HOME.journal[lang]}</p><a href={`/${lang}/guides/`}>{t.cta.allGuides}</a></div>
          <ul className="journal">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <a href={`/${lang}/guides/${g.slug}/`}>
                  <span className="k">{g.category[lang]}</span>
                  <span className="jt">{g.title[lang]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow">{HOME.familyTitle[lang]}</p>
          <h2>{HOME.familyHeading[lang]}</h2>
          <div className="story-text">
            {HOME.familyStory.map((p) => <p key={p.en}>{p[lang]}</p>)}
          </div>
          <div className="brands">
            {HOME.familyBrands.map((b) => (
              <div className="brand-col" key={b.name}>
                <span className="k">{b.place[lang]}</span>
                <h3>{b.name}</h3>
                {b.note && <p>{b.note[lang]}</p>}
              </div>
            ))}
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
