import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { SITE, isLocale, waLink, type Locale } from "@/lib/site";
import { getListing, type Listing } from "@/lib/mls";

// Página de um imóvel do MLS (busca IDX). Gerada sob demanda e guardada por 1 hora.
export const revalidate = 3600;

type P = { params: Promise<{ lang: string; id: string }> };
type L = Record<Locale, string>;

const T = {
  tag: { en: "For sale", pt: "À venda", es: "En venta" } as L,
  price: { en: "Price", pt: "Preço", es: "Precio" } as L,
  beds: { en: "Bedrooms", pt: "Quartos", es: "Habitaciones" } as L,
  baths: { en: "Bathrooms", pt: "Banheiros", es: "Baños" } as L,
  area: { en: "Living area", pt: "Área", es: "Área" } as L,
  built: { en: "Year built", pt: "Ano de construção", es: "Año de construcción" } as L,
  about: { en: "About the property", pt: "Sobre o imóvel", es: "Sobre la propiedad" } as L,
  orig: { en: "", pt: "Descrição original do anúncio, em inglês.", es: "Descripción original del anuncio, en inglés." } as L,
  card: { en: "Interested in this property?", pt: "Tem interesse neste imóvel?", es: "¿Le interesa esta propiedad?" } as L,
  cardText: { en: "Schedule a visit, in person or by video.", pt: "Agende uma visita, presencial ou por vídeo.", es: "Agende una visita, presencial o por video." } as L,
  visit: { en: "Schedule a visit", pt: "Agendar visita", es: "Agendar visita" } as L,
  wa: { en: "Talk on WhatsApp", pt: "Conversar no WhatsApp", es: "Hablar por WhatsApp" } as L,
  waMsg: {
    en: "Hello! I'm interested in the property at {a} ({p}). Could you send me more information?",
    pt: "Olá! Tenho interesse no imóvel em {a} ({p}). Pode me mandar mais informações?",
    es: "¡Hola! Me interesa la propiedad en {a} ({p}). ¿Me puede enviar más información?",
  } as L,
  all: { en: "View all {n} photos", pt: "Ver as {n} fotos", es: "Ver las {n} fotos" } as L,
  close: { en: "Close", pt: "Fechar", es: "Cerrar" } as L,
  prev: { en: "Previous photo", pt: "Foto anterior", es: "Foto anterior" } as L,
  next: { en: "Next photo", pt: "Próxima foto", es: "Foto siguiente" } as L,
  details: { en: "Property details", pt: "Detalhes do imóvel", es: "Detalles de la propiedad" } as L,
  type: { en: "Type", pt: "Tipo", es: "Tipo" } as L,
  lot: { en: "Lot size", pt: "Terreno", es: "Terreno" } as L,
  garage: { en: "Garage / parking", pt: "Garagem / vagas", es: "Garaje / estacionamiento" } as L,
  hoa: { en: "HOA fee", pt: "Taxa de condomínio (HOA)", es: "Cuota de HOA" } as L,
  pool: { en: "Private pool", pt: "Piscina privativa", es: "Piscina privada" } as L,
  water: { en: "Waterfront", pt: "Frente para a água", es: "Frente al agua" } as L,
  view: { en: "View", pt: "Vista", es: "Vista" } as L,
  stories: { en: "Floors", pt: "Andares", es: "Pisos" } as L,
  tax: { en: "Property tax", pt: "Imposto anual (property tax)", es: "Impuesto anual" } as L,
  county: { en: "County", pt: "Condado", es: "Condado" } as L,
  zip: { en: "ZIP code", pt: "CEP (ZIP)", es: "Código postal" } as L,
  mlsNo: { en: "MLS number", pt: "Número no MLS", es: "Número MLS" } as L,
  yes: { en: "Yes", pt: "Sim", es: "Sí" } as L,
  photo: { en: "Photo", pt: "Foto", es: "Foto" } as L,
  by: { en: "Listing courtesy of", pt: "Anúncio cortesia de", es: "Anuncio cortesía de" } as L,
  legal: {
    en: "Information provided by the MLS, deemed reliable but not guaranteed. Buyers should verify measurements and details. Price subject to change without notice.",
    pt: "Informações fornecidas pelo MLS, consideradas confiáveis, mas não garantidas. O comprador deve conferir medidas e detalhes. Preço sujeito a alteração sem aviso.",
    es: "Información proporcionada por el MLS, considerada confiable, pero no garantizada. El comprador debe verificar medidas y detalles. Precio sujeto a cambios sin aviso.",
  } as L,
};

async function load(params: P["params"]) {
  const { lang, id } = await params;
  const m = /^([ms])-(.+)$/.exec(id);
  if (!isLocale(lang) || !m) notFound();
  const mls: Listing["mls"] = m[1] === "m" ? "miami" : "stellar";
  const home = await getListing(mls, m[2]);
  if (!home) notFound();
  return { lang, id, home };
}

export async function generateMetadata({ params }: P) {
  const { lang, id, home } = await load(params);
  const title = [home.street, home.city].filter(Boolean).join(", ");
  return pageMeta(lang, `/homes/mls/${id}/`, `${title} | Webb Florida Realty`, (home.remarks || title).slice(0, 155));
}

export default async function MlsHome({ params }: P) {
  const { lang, id, home } = await load(params);
  const t = UI[lang];
  const money = new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const num = new Intl.NumberFormat(lang === "en" ? "en-US" : "pt-BR");
  const address = [home.street, home.city].filter(Boolean).join(", ");
  const wa = waLink(T.waMsg[lang].replace("{a}", address).replace("{p}", money.format(home.price)));
  const facts: [string, string][] = [];
  if (home.beds != null) facts.push([String(home.beds), T.beds[lang]]);
  if (home.baths != null) facts.push([String(home.baths), T.baths[lang]]);
  if (home.sqft) facts.push([`${num.format(home.sqft)} sq ft · ${Math.round(home.sqft * 0.092903)} m²`, T.area[lang]]);
  if (home.yearBuilt) facts.push([String(home.yearBuilt), T.built[lang]]);
  const det: [string, string][] = [];
  const add = (k: L, v: unknown) => { if (v !== undefined && v !== null && v !== "" && v !== false) det.push([k[lang], String(v)]); };
  add(T.type, home.subType);
  add(T.lot, home.lotSqft ? `${num.format(home.lotSqft)} sq ft · ${num.format(Math.round(home.lotSqft * 0.092903))} m²` : undefined);
  add(T.garage, home.garage || undefined);
  add(T.stories, home.stories || undefined);
  add(T.pool, home.pool ? T.yes[lang] : undefined);
  add(T.water, home.waterfront ? T.yes[lang] : undefined);
  add(T.view, home.view);
  add(T.hoa, home.hoa ? `${money.format(home.hoa)}${home.hoaFreq ? ` (${home.hoaFreq})` : ""}` : undefined);
  add(T.tax, home.tax ? `${money.format(home.tax)}${home.taxYear ? ` (${home.taxYear})` : ""}` : undefined);
  add(T.county, home.county);
  add(T.zip, home.postal);
  add(T.mlsNo, home.mlsNumber);
  const pics = home.photos.map((src, i) => ({ src, alt: `${address} · ${T.photo[lang]} ${i + 1}`, caption: `${T.photo[lang]} ${i + 1}` }));
  return (
    <Shell lang={lang} path={`/homes/mls/${id}/`}>
      <section style={{ paddingTop: 32 }}>
        <div className="wrap">
          {pics.length >= 5 ? (
            <Gallery photos={pics} labels={{ all: T.all[lang].replace("{n}", String(pics.length)), close: T.close[lang], prev: T.prev[lang], next: T.next[lang] }} />
          ) : (
            <div className="pd-gallery">
              {pics.map((p) => (
                <figure key={p.src} className="pd-photo"><img className="photo" src={p.src} alt={p.alt} loading="lazy" /></figure>
              ))}
            </div>
          )}

          <div className="pd-head">
            <div>
              <p className="eyebrow">{T.tag[lang]} · {home.city}</p>
              <h1 style={{ fontSize: "clamp(32px,4vw,48px)" }}>{home.street || home.city}</h1>
            </div>
            <div className="pd-pricebox">
              <p className="eyebrow" style={{ color: "var(--muted)" }}>{T.price[lang]}</p>
              <p className="pd-price">{money.format(home.price)}</p>
            </div>
          </div>

          {facts.length > 0 && (
            <div className={`pd-facts c${facts.length}`}>
              {facts.map(([v, k]) => (
                <div key={k}><b className={v.length > 6 ? "sm" : ""}>{v}</b><span>{k}</span></div>
              ))}
            </div>
          )}

          <div className="pd-body">
            <div>
              {home.remarks && (
                <>
                  <h2 style={{ fontSize: 32 }}>{T.about[lang]}</h2>
                  {T.orig[lang] && <p className="muted" style={{ fontSize: 13, marginTop: 8 }}>{T.orig[lang]}</p>}
                  <p className="body-lg muted" style={{ marginTop: 20 }} lang="en">{home.remarks}</p>
                </>
              )}
              {det.length > 0 && (
                <>
                  <h3 style={{ marginTop: 48 }}>{T.details[lang]}</h3>
                  <dl className="mls-details">
                    {det.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
                  </dl>
                </>
              )}
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
          <p className="pd-legal">
            {home.officeName && <>{T.by[lang]} {home.officeName}. </>}
            {T.legal[lang]} {SITE.legalName}. {t.footer.licensed}.
          </p>
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
