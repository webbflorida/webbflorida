import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { SITE, LOCALES, isLocale, waLink, type Locale } from "@/lib/site";
import { DEVELOPMENTS } from "@/lib/developments";
import { DEV_T as T, fmtDate, moneyFmt } from "@/lib/developments-ui";

type P = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => DEVELOPMENTS.map((d) => ({ lang, slug: d.slug })));
}

async function load(params: P["params"]) {
  const { lang, slug } = await params;
  const dev = DEVELOPMENTS.find((d) => d.slug === slug);
  if (!isLocale(lang) || !dev) notFound();
  return { lang: lang as Locale, dev };
}

export async function generateMetadata({ params }: P) {
  const { lang, dev } = await load(params);
  return pageMeta(lang, `/developments/${dev.slug}/`, `${dev.name} · ${dev.area[lang]} | Webb Florida Realty`, dev.desc[lang].slice(0, 155));
}

export default async function DevelopmentPage({ params }: P) {
  const { lang, dev } = await load(params);
  const t = UI[lang];
  const money = moneyFmt(lang);
  const wa = waLink(T.waMsg[lang].replace("{n}", dev.name));
  return (
    <Shell lang={lang} path={`/developments/${dev.slug}/`}>
      <section style={{ paddingTop: 32 }}>
        <div className="wrap">
          {dev.photos.length > 0 ? (
            <Gallery
              photos={dev.photos.map((p) => ({ src: p.src, alt: `${dev.name} · ${p.caption[lang]}`, caption: `${p.caption[lang]}${dev.render ? ` · ${T.render[lang]}` : ""}` }))}
              labels={{ all: T.all[lang], close: T.close[lang], prev: T.prev[lang], next: T.next[lang] }}
            />
          ) : (
            <div className="dv-hero">
              <p className="eyebrow">{T.eyebrow[lang]}</p>
              <p className="dv-hero-name">{dev.name}</p>
              <p className="dv-hero-note">{T.photosSoon[lang]}</p>
            </div>
          )}

          <div className="pd-head">
            <div>
              <p className="eyebrow">{T.eyebrow[lang]} · {dev.area[lang]}</p>
              <h1 style={{ fontSize: "clamp(34px,4.2vw,52px)" }}>{dev.name}</h1>
              <p className="muted" style={{ marginTop: 8 }}>{dev.status[lang]}</p>
            </div>
            <div className="pd-pricebox">
              <p className="eyebrow" style={{ color: "var(--muted)" }}>{T.from[lang]}</p>
              <p className="pd-price">{money.format(dev.from)}</p>
              {dev.fromNote && <p className="muted" style={{ fontSize: 13, marginTop: 6 }}>{dev.fromNote[lang]}</p>}
            </div>
          </div>

          <div className="pd-facts c4">
            {dev.facts.map(([v, k]) => (
              <div key={k.en}><b className={v[lang].length > 6 ? "sm" : ""}>{v[lang]}</b><span>{k[lang]}</span></div>
            ))}
          </div>

          <div className="pd-body">
            <div>
              <h2 style={{ fontSize: 32 }}>{T.about[lang]}</h2>
              <p className="body-lg muted" style={{ marginTop: 20 }}>{dev.desc[lang]}</p>

              <h3 style={{ marginTop: 48 }}>{T.prices[lang]}</h3>
              <table className="dv-table">
                <tbody>
                  {dev.prices.map(([k, v]) => (
                    <tr key={k.en}><th scope="row">{k[lang]}</th><td>{T.fromShort[lang]} {money.format(Number(v))}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="pd-legal" style={{ paddingTop: 10 }}>{T.priceNote[lang].replace("{d}", fmtDate(dev.checked, lang))}</p>

              <h3 style={{ marginTop: 40 }}>{T.payment[lang]}</h3>
              <div className="dv-pay">
                {dev.payment.map(([pct, when], i) => (
                  <div key={i}><b>{pct}</b><span>{when[lang]}</span></div>
                ))}
              </div>

              <h3 style={{ marginTop: 48 }}>{T.features[lang]}</h3>
              <ul className="pd-list">
                {dev.features.map((f) => <li key={f.en}>{f[lang]}</li>)}
              </ul>

              <h3 style={{ marginTop: 48 }}>{T.team[lang]}</h3>
              <dl className="dv-team">
                {dev.team.map(([k, v]) => (
                  <div key={k.en}><dt>{k[lang]}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </div>
            <aside>
              <div className="pd-card">
                <div className="portrait"><Photo slot="ramon" /></div>
                <p className="eyebrow">{SITE.broker}</p>
                <h3>{T.card[lang]}</h3>
                <p className="muted" style={{ margin: "12px 0 24px" }}>{T.cardText[lang]}</p>
                <a className="btn btn-wa" style={{ width: "100%" }} href={wa} target="_blank" rel="noopener">{T.wa[lang]}</a>
                <a className="btn btn-line" style={{ width: "100%", marginTop: 10 }} href={`/${lang}/contact/`}>{T.visit[lang]}</a>
                <p style={{ marginTop: 16, fontSize: 14 }}>
                  <a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>
            </aside>
          </div>
          <p className="pd-legal">{T.legal[lang]} {dev.render ? T.renderLegal[lang] : ""} {SITE.legalName}. {t.footer.licensed}.</p>
          <p className="pd-legal">{T.fl718}</p>
        </div>
      </section>
      <div style={{ height: 80 }} />
      <div className="pd-bar">
        <a className="btn btn-wa" href={wa} target="_blank" rel="noopener">WhatsApp</a>
        <a className="btn btn-dark" href={`/${lang}/contact/`}>{T.visit[lang]}</a>
      </div>
    </Shell>
  );
}
