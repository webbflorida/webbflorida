import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { LOCALES, isLocale } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { AREAS, HOME } from "@/lib/content";

type P = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => AREAS.map((a) => ({ lang, slug: a.slug })));
}

async function load(params: P["params"]) {
  const { lang, slug } = await params;
  const area = AREAS.find((a) => a.slug === slug);
  if (!isLocale(lang) || !area) notFound();
  return { lang, area };
}

const T = {
  forSale: { en: "Homes for sale in", pt: "Imóveis à venda em", es: "Propiedades en venta en" },
  summary: { en: "At a glance", pt: "Em resumo", es: "En resumen" },
  lifestyle: { en: "Lifestyle", pt: "Estilo de vida", es: "Estilo de vida" },
  ideal: { en: "Ideal for", pt: "Ideal para", es: "Ideal para" },
  homes: { en: "Typical homes", pt: "Imóveis típicos", es: "Propiedades típicas" },
  location: { en: "Location", pt: "Localização", es: "Ubicación" },
  driveNote: { en: "Approximate drive times, without traffic.", pt: "Tempos aproximados de carro, sem trânsito.", es: "Tiempos aproximados en auto, sin tráfico." },
  about: { en: "Inside", pt: "Por dentro de", es: "Por dentro de" },
  market: { en: "Market now", pt: "Mercado agora", es: "Mercado ahora" },
  stats: [
    { en: "Homes for sale", pt: "Imóveis à venda", es: "Propiedades en venta" },
    { en: "Median list price", pt: "Preço mediano", es: "Precio mediano" },
    { en: "Days on market", pt: "Dias no mercado", es: "Días en el mercado" },
    { en: "Sold last 90 days", pt: "Vendidos em 90 dias", es: "Vendidas en 90 días" },
  ],
  marketNote: { en: "Data updated automatically from the MLS once the integration is connected.", pt: "Dados atualizados automaticamente pelo MLS quando a integração estiver ligada.", es: "Datos actualizados automáticamente desde el MLS cuando la integración esté conectada." },
  soon: { en: "Homes for sale in this area will appear here, straight from the MLS.", pt: "Os imóveis à venda nesta região vão aparecer aqui, direto do MLS.", es: "Las propiedades en venta en esta zona aparecerán aquí, directo del MLS." },
  nearby: { en: "Nearby areas", pt: "Regiões próximas", es: "Zonas cercanas" },
  min: { en: "min", pt: "min", es: "min" },
};

export async function generateMetadata({ params }: P) {
  const { lang, area } = await load(params);
  return pageMeta(lang, `/areas/${area.slug}/`, `${T.forSale[lang]} ${area.name}, FL | Webb Florida Realty`, area.summary[lang]);
}

export default async function AreaPage({ params }: P) {
  const { lang, area } = await load(params);
  const t = UI[lang];
  const nearby = AREAS.filter((a) => a.region === area.region && a.slug !== area.slug);
  return (
    <Shell lang={lang} path={`/areas/${area.slug}/`}>
      <section className="hero-photo area-hero">
        <div className="media"><Photo slot={`area-${area.slug}`} hint={area.name} /></div>
        <div className="wrap">
          <p className="eyebrow"><a href={`/${lang}/areas/`} style={{ textDecoration: "none" }}>{t.nav.areas}</a> · {area.region}, Florida</p>
          <h1>{area.name}</h1>
          <p className="lead">{area.summary[lang]}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">{T.summary[lang]}</p>
          <div className="glance">
            <div><h4>{T.lifestyle[lang]}</h4><p>{area.highlights[lang].join(" · ")}</p></div>
            {area.idealFor && <div><h4>{T.ideal[lang]}</h4><p>{area.idealFor[lang]}</p></div>}
            {area.homes && <div><h4>{T.homes[lang]}</h4><p>{area.homes[lang]}</p></div>}
            {area.drive && (
              <div>
                <h4>{T.location[lang]}</h4>
                <ul className="drive">
                  {area.drive.map((d) => <li key={d.to.en}><span>{d.to[lang]}</span><b>{d.min} {T.min[lang]}</b></li>)}
                </ul>
                <p className="fine">{T.driveNote[lang]}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{T.about[lang]} {area.name}</p>
            <p className="body-lg" style={{ marginTop: 8 }}>{area.body[lang]}</p>
          </div>
          <div className="area-photo-2"><Photo slot={`area-${area.slug}-2`} hint={`${area.name}: lifestyle`} /></div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">{T.market[lang]}</p>
          <div className="pd-facts market-facts">
            {T.stats.map((st) => <div key={st.en}><b>—</b><span>{st[lang]}</span></div>)}
          </div>
          <p className="fine" style={{ marginTop: 14 }}>{T.marketNote[lang]}</p>

          <h2 style={{ marginTop: 72 }}>{T.forSale[lang]} {area.name}</h2>
          <div className="soon-quiet">
            <p>{T.soon[lang]}</p>
            <a className="link-cta link-cta-dark" href={`/${lang}/contact/`}>{t.cta.talk}</a>
          </div>
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="sec sec-alt">
          <div className="wrap">
            <p className="eyebrow">{T.nearby[lang]}</p>
            <div className="area-cards">
              {nearby.map((a) => (
                <a className="area-card" key={a.slug} href={`/${lang}/areas/${a.slug}/`}>
                  <div className="area-card-photo"><Photo slot={`area-${a.slug}`} hint={a.name} /></div>
                  <h3>{a.name}</h3>
                  <p>{a.summary[lang]}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

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
