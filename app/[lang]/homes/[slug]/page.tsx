import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import Gallery from "@/components/Gallery";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { SITE, LOCALES, isLocale, waLink, type Locale } from "@/lib/site";
import { FEATURED } from "@/lib/featured";

type P = { params: Promise<{ lang: string; slug: string }> };
type L = Record<Locale, string>;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => FEATURED.map((h) => ({ lang, slug: h.slug })));
}

async function load(params: P["params"]) {
  const { lang, slug } = await params;
  const home = FEATURED.find((h) => h.slug === slug);
  if (!isLocale(lang) || !home) notFound();
  return { lang, home };
}

const T = {
  listedBy: { en: "Listed by", pt: "Anunciado por", es: "Listado por" } as L,
  tagOwn: { en: "For sale", pt: "À venda", es: "En venta" } as L,
  built: { en: "Year built", pt: "Ano de construção", es: "Año de construcción" } as L,
  soon: { en: "Photos coming soon", pt: "Fotos em breve", es: "Fotos próximamente" } as L,
  legalOwn: {
    en: "Listed by Webb Florida Realty. Information deemed reliable but not guaranteed; buyers should verify measurements and details. Price subject to change without notice.",
    pt: "Imóvel anunciado pela Webb Florida Realty. Informações consideradas confiáveis, mas não garantidas; o comprador deve conferir medidas e detalhes. Preço sujeito a alteração sem aviso.",
    es: "Propiedad listada por Webb Florida Realty. Información considerada confiable, pero no garantizada; el comprador debe verificar medidas y detalles. Precio sujeto a cambios sin aviso.",
  } as L,
  tag: { en: "New construction · Ready to move in", pt: "Construção nova · Pronta para morar", es: "Construcción nueva · Lista para mudarse" } as L,
  price: { en: "Price", pt: "Preço", es: "Precio" } as L,
  beds: { en: "Bedrooms", pt: "Quartos", es: "Habitaciones" } as L,
  baths: { en: "Bathrooms", pt: "Banheiros", es: "Baños" } as L,
  area: { en: "Living area", pt: "Área", es: "Área" } as L,
  garage: { en: "Garage", pt: "Garagem", es: "Garaje" } as L,
  floors: { en: "Floors", pt: "Andares", es: "Pisos" } as L,
  about: { en: "About the home", pt: "Sobre a casa", es: "Sobre la casa" } as L,
  features: { en: "Highlights", pt: "Destaques", es: "Destacados" } as L,
  model: { en: "Model home photo of the same floor plan", pt: "Foto do modelo decorado da mesma planta", es: "Foto de la casa modelo del mismo plano" } as L,
  card: { en: "Interested in this home?", pt: "Tem interesse nesta casa?", es: "¿Le interesa esta casa?" } as L,
  cardText: { en: "Schedule a visit, in person or by video.", pt: "Agende uma visita, presencial ou por vídeo.", es: "Agende una visita, presencial o por video." } as L,
  visit: { en: "Schedule a visit", pt: "Agendar visita", es: "Agendar visita" } as L,
  wa: { en: "Talk on WhatsApp", pt: "Conversar no WhatsApp", es: "Hablar por WhatsApp" } as L,
  waMsg: {
    en: "Hello! I'm interested in the home \"{t}\" in {c} ({p}). Could you send me more information?",
    pt: "Olá! Tenho interesse na casa \"{t}\" em {c} ({p}). Pode me mandar mais informações?",
    es: "¡Hola! Me interesa la casa \"{t}\" en {c} ({p}). ¿Me puede enviar más información?",
  } as L,
  all: { en: "View all {n} photos", pt: "Ver as {n} fotos", es: "Ver las {n} fotos" } as L,
  close: { en: "Close", pt: "Fechar", es: "Cerrar" } as L,
  prev: { en: "Previous photo", pt: "Foto anterior", es: "Foto anterior" } as L,
  next: { en: "Next photo", pt: "Próxima foto", es: "Foto siguiente" } as L,
  legal: {
    en: "New construction home sold by the builder. Price provided by the builder on {d}, subject to change without notice. Front image is an illustrative rendering; interior photos show the model home of the same floor plan, and finishes and furniture of this home may differ. Buying property does not grant a visa or residency in the United States.",
    pt: "Imóvel de construção nova vendido pela construtora. Preço informado pela construtora em {d}, sujeito a alteração sem aviso. A fachada é imagem ilustrativa; as fotos internas são do modelo decorado da mesma planta, e acabamentos e móveis desta casa podem ser diferentes. A compra do imóvel não dá direito a visto nem a residência nos EUA.",
    es: "Casa de construcción nueva vendida por el constructor. Precio informado por el constructor el {d}, sujeto a cambios sin aviso. La fachada es una imagen ilustrativa; las fotos interiores son de la casa modelo del mismo plano, y los acabados y muebles de esta casa pueden ser diferentes. La compra de la propiedad no otorga visa ni residencia en los Estados Unidos.",
  } as L,
};

const fmtDate = (iso: string, lang: Locale) => {
  const [y, m, d] = iso.split("-");
  return lang === "en" ? `${m}/${d}/${y}` : `${d}/${m}/${y}`;
};

export async function generateMetadata({ params }: P) {
  const { lang, home } = await load(params);
  return pageMeta(lang, `/homes/${home.slug}/`, `${home.title[lang]} · ${home.city[lang]} | Webb Florida Realty`, home.desc[lang].slice(0, 155));
}

export default async function FeaturedHome({ params }: P) {
  const { lang, home } = await load(params);
  const t = UI[lang];
  const money = new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const num = new Intl.NumberFormat(lang === "en" ? "en-US" : "pt-BR");
  const m2 = Math.round(home.sqft * 0.092903);
  const own = home.kind === "listing";
  const wa = waLink(T.waMsg[lang].replace("{t}", home.title[lang]).replace("{c}", home.city[lang]).replace("{p}", money.format(home.price)));
  const facts: [string, string][] = [
    [String(home.beds), T.beds[lang]],
    [home.baths[lang], T.baths[lang]],
    [`${num.format(home.sqft)} sq ft · ${m2} m²`, T.area[lang]],
  ];
  if (home.garage) facts.push([home.garage[lang], T.garage[lang]]);
  if (home.floors) facts.push([String(home.floors), T.floors[lang]]);
  if (home.yearBuilt) facts.push([String(home.yearBuilt), T.built[lang]]);
  return (
    <Shell lang={lang} path={`/homes/${home.slug}/`}>
      <section style={{ paddingTop: 32 }}>
        <div className="wrap">
          {home.photos.length >= 5 ? (
            <Gallery
              photos={home.photos.map((p) => ({ src: p.src, alt: `${home.title[lang]} · ${p.caption[lang]}`, caption: p.caption[lang] }))}
              labels={{ all: T.all[lang], close: T.close[lang], prev: T.prev[lang], next: T.next[lang] }}
            />
          ) : (
            <div className="pd-gallery">
              {home.photos.length === 0 && <figure className="pd-photo"><div className="photo-soon">{T.soon[lang]}</div></figure>}
              {home.photos.map((p) => (
                <figure key={p.src} className="pd-photo">
                  <img className="photo" src={p.src} alt={p.caption[lang]} loading="lazy" />
                  <figcaption>{p.caption[lang]}{p.model && <span className="pd-model"> · {T.model[lang]}</span>}</figcaption>
                </figure>
              ))}
            </div>
          )}

          <div className="pd-head">
            <div>
              <p className="eyebrow">{own ? T.tagOwn[lang] : T.tag[lang]} · {home.city[lang]}</p>
              <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)" }}>{home.title[lang]}</h1>
              {own && <p className="muted" style={{ marginTop: 8 }}>{T.listedBy[lang]} Webb Florida Realty · {SITE.broker}</p>}
            </div>
            <div className="pd-pricebox">
              <p className="eyebrow" style={{ color: "var(--muted)" }}>{T.price[lang]}</p>
              <p className="pd-price">{money.format(home.price)}</p>
            </div>
          </div>

          <div className={`pd-facts c${facts.length}`}>
            {facts.map(([v, k]) => (
              <div key={k}><b className={v.length > 6 ? "sm" : ""}>{v}</b><span>{k}</span></div>
            ))}
          </div>

          {home.spotlights && (
            <div className="pd-spot">
              {home.spotlights.map((x) => (
                <div key={x.title.en}><b>{x.title[lang]}</b><span>{x.text[lang]}</span></div>
              ))}
            </div>
          )}

          <div className="pd-body">
            <div>
              <h2 style={{ fontSize: 32 }}>{T.about[lang]}</h2>
              <p className="body-lg muted" style={{ marginTop: 20 }}>{home.desc[lang]}</p>
              <h3 style={{ marginTop: 48 }}>{T.features[lang]}</h3>
              <ul className="pd-list">
                {home.features.map((f) => <li key={f.en}>{f[lang]}</li>)}
              </ul>
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
          <p className="pd-legal">{own ? T.legalOwn[lang] : T.legal[lang].replace("{d}", fmtDate(home.checked, lang))} {SITE.legalName}. {t.footer.licensed}.</p>
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
