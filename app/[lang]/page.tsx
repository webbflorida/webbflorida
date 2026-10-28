import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { AREAS, HOME } from "@/lib/content";
import { GUIDES } from "@/lib/guides";

const SEARCH = {
  region: { en: "Location", pt: "Região", es: "Ubicación" },
  all: { en: "All areas", pt: "Todas as regiões", es: "Todas las zonas" },
  allOf: { en: "All of", pt: "Toda", es: "Todo" },
  price: { en: "Price", pt: "Preço", es: "Precio" },
  any: { en: "Any", pt: "Qualquer", es: "Cualquiera" },
  type: { en: "Type", pt: "Tipo", es: "Tipo" },
  house: { en: "House", pt: "Casa", es: "Casa" },
  condo: { en: "Condo", pt: "Apartamento", es: "Apartamento" },
  land: { en: "Land", pt: "Terreno", es: "Terreno" },
  go: { en: "Search", pt: "Buscar", es: "Buscar" },
};

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
          <form className="hero-search" action={`/${lang}/homes/`} method="get" role="search">
            <label>
              <span>{SEARCH.region[lang]}</span>
              <select name="area" defaultValue="">
                <option value="">{SEARCH.all[lang]}</option>
                {markets.map((m) => (
                  <optgroup key={m.r} label={m.r}>
                    <option value={m.r.toLowerCase()}>{SEARCH.allOf[lang]} {m.r}</option>
                    {m.items.map((a) => <option key={a.slug} value={a.slug}>{a.name}</option>)}
                  </optgroup>
                ))}
              </select>
            </label>
            <label>
              <span>{SEARCH.price[lang]}</span>
              <select name="min" defaultValue="">
                <option value="">{SEARCH.any[lang]}</option>
                {[1, 2, 5, 10].map((n) => <option key={n} value={n * 1000000}>US$ {n}M+</option>)}
              </select>
            </label>
            <label>
              <span>{SEARCH.type[lang]}</span>
              <select name="type" defaultValue="">
                <option value="">{SEARCH.any[lang]}</option>
                <option value="house">{SEARCH.house[lang]}</option>
                <option value="condo">{SEARCH.condo[lang]}</option>
                <option value="land">{SEARCH.land[lang]}</option>
              </select>
            </label>
            <button type="submit">{SEARCH.go[lang]}</button>
          </form>
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

      <section className="family-strip">
        <div className="wrap">
          <p className="family-label">{{ en: "The Webb family", pt: "Família Webb", es: "Familia Webb" }[lang]}</p>
          <ul>
            {HOME.familyBrands.map((b) => (
              <li key={b.name}>
                <span className="fs-name">{b.name}</span>
                <span className="fs-meta">{b.place[lang]}{b.note ? ` · ${b.note[lang].toLowerCase()}` : ""}</span>
              </li>
            ))}
          </ul>
          <a className="fs-link" href={`/${lang}/about/`}>{HOME.familyTitle[lang]}</a>
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
