import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { DEVELOPMENTS } from "@/lib/developments";
import { DEV_T as T, moneyFmt } from "@/lib/developments-ui";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/developments/", `${T.title[lang]} | Webb Florida Realty`, T.lead[lang]);
}

export default async function Developments({ params }: P) {
  const lang = await getLang(params);
  const money = moneyFmt(lang);
  return (
    <Shell lang={lang} path="/developments/">
      <PageHero lang={lang} title={T.title[lang]} lead={T.lead[lang]} />
      <section className="sec" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="area-cards">
            {DEVELOPMENTS.map((d) => (
              <a className="area-card" key={d.slug} href={`/${lang}/developments/${d.slug}/`}>
                <div className="area-card-photo">
                  {d.photos[0]
                    ? <img className="photo" src={d.photos[0].src} alt={d.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div className="dv-card-ph"><span>{d.name}</span></div>}
                </div>
                <p className="eyebrow" style={{ marginBottom: 6 }}>{d.area[lang]}</p>
                <h3>{d.name}</h3>
                <p>{T.from[lang]} {money.format(d.from)}</p>
                <p className="muted" style={{ fontSize: 13, marginTop: -8 }}>{d.status[lang]}</p>
              </a>
            ))}
          </div>
          <p className="pd-legal">{T.legal[lang]}</p>
        </div>
      </section>
    </Shell>
  );
}
