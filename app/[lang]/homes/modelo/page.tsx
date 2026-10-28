import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { SITE, type Locale } from "@/lib/site";

// Modelo de página de imóvel (só para a prévia). Os dados reais virão do MLS.
// Não vai para o site no ar: não aparece em menus e está marcada como noindex.
type P = { params: Promise<{ lang: string }> };
type L = Record<Locale, string>;

const T = {
  tag: { en: "Layout model · real data will come from the MLS", pt: "Modelo de layout · os dados reais virão do MLS", es: "Modelo de diseño · los datos reales vendrán del MLS" } as L,
  area: { en: "Windermere · Orlando", pt: "Windermere · Orlando", es: "Windermere · Orlando" } as L,
  title: { en: "Property address", pt: "Endereço do imóvel", es: "Dirección de la propiedad" } as L,
  price: { en: "Price", pt: "Preço", es: "Precio" } as L,
  facts: [
    { en: "Bedrooms", pt: "Quartos", es: "Habitaciones" },
    { en: "Bathrooms", pt: "Banheiros", es: "Baños" },
    { en: "Living area (sq ft)", pt: "Área (pés²)", es: "Área (pies²)" },
    { en: "Lot", pt: "Terreno", es: "Terreno" },
    { en: "Year built", pt: "Ano", es: "Año" },
  ] as L[],
  about: { en: "About the property", pt: "Sobre o imóvel", es: "Sobre la propiedad" } as L,
  desc: {
    en: "The property description from the MLS goes here, with the highlights of the home, the community and the surroundings.",
    pt: "Aqui entra a descrição do imóvel vinda do MLS, com os destaques da casa, do condomínio e da região.",
    es: "Aquí va la descripción de la propiedad del MLS, con lo más destacado de la casa, la comunidad y la zona.",
  } as L,
  features: { en: "Features", pt: "Características", es: "Características" } as L,
  featureList: [
    { en: "Pool and outdoor area", pt: "Piscina e área externa", es: "Piscina y área exterior" },
    { en: "Gated community", pt: "Condomínio fechado", es: "Comunidad cerrada" },
    { en: "Garage", pt: "Garagem", es: "Garaje" },
    { en: "HOA", pt: "HOA (condomínio)", es: "HOA" },
    { en: "Schools nearby", pt: "Escolas próximas", es: "Escuelas cercanas" },
    { en: "Property taxes", pt: "Impostos (property tax)", es: "Impuestos" },
  ] as L[],
  location: { en: "Location", pt: "Localização", es: "Ubicación" } as L,
  mapHint: { en: "Interactive map", pt: "Mapa interativo", es: "Mapa interactivo" } as L,
  card: { en: "Interested in this property?", pt: "Tem interesse neste imóvel?", es: "¿Le interesa esta propiedad?" } as L,
  cardText: {
    en: "Schedule a private visit, in person or by video.",
    pt: "Agende uma visita reservada, presencial ou por vídeo.",
    es: "Agende una visita privada, presencial o por video.",
  } as L,
  visit: { en: "Schedule a visit", pt: "Agendar visita", es: "Agendar visita" } as L,
  legal: {
    en: "Listing information provided by the MLS and deemed reliable but not guaranteed. Listed by: [listing brokerage].",
    pt: "Informações fornecidas pelo MLS, consideradas confiáveis mas não garantidas. Anunciado por: [imobiliária responsável].",
    es: "Información proporcionada por el MLS, considerada confiable pero no garantizada. Listado por: [inmobiliaria responsable].",
  } as L,
};

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return { ...pageMeta(lang, "/homes/modelo/", `${T.title[lang]} | Webb Florida Realty`, T.desc[lang]), robots: { index: false, follow: false } };
}

export default async function Modelo({ params }: P) {
  const lang = await getLang(params);
  const t = UI[lang];
  return (
    <Shell lang={lang} path="/homes/modelo/">
      <section style={{ paddingTop: 32 }}>
        <div className="wrap">
          <span className="tag-preview">{T.tag[lang]}</span>
          <div className="pd-gallery">
            <Photo slot="pd1" hint="Fachada ou foto principal" />
            <Photo slot="pd2" hint="Sala" />
            <Photo slot="pd3" hint="Cozinha" />
            <Photo slot="pd4" hint="Suíte" />
            <Photo slot="pd5" hint="Piscina / área externa" />
          </div>

          <div className="pd-head">
            <div>
              <p className="eyebrow">{T.area[lang]}</p>
              <h1 style={{ fontSize: "clamp(36px,4.5vw,56px)" }}>{T.title[lang]}</h1>
            </div>
            <div className="pd-pricebox">
              <p className="eyebrow" style={{ color: "var(--muted)" }}>{T.price[lang]}</p>
              <p className="pd-price">US$ —</p>
            </div>
          </div>

          <div className="pd-facts">
            {T.facts.map((f) => (
              <div key={f.en}><b>—</b><span>{f[lang]}</span></div>
            ))}
          </div>

          <div className="pd-body">
            <div>
              <h2 style={{ fontSize: 32 }}>{T.about[lang]}</h2>
              <p className="body-lg muted" style={{ marginTop: 20 }}>{T.desc[lang]}</p>
              <h3 style={{ marginTop: 48 }}>{T.features[lang]}</h3>
              <ul className="pd-list">
                {T.featureList.map((f) => <li key={f.en}>{f[lang]}</li>)}
              </ul>
              <h3 style={{ marginTop: 48, marginBottom: 20 }}>{T.location[lang]}</h3>
              <div className="pd-map"><Photo slot="map" hint={T.mapHint[lang]} className="light" /></div>
            </div>
            <aside>
              <div className="pd-card">
                <div className="portrait"><Photo slot="ramon" /></div>
                <p className="eyebrow">{SITE.broker}</p>
                <h3>{T.card[lang]}</h3>
                <p className="muted" style={{ margin: "12px 0 24px" }}>{T.cardText[lang]}</p>
                <a className="btn btn-dark" style={{ width: "100%" }} href={`/${lang}/contact/`}>{T.visit[lang]}</a>
                <p style={{ marginTop: 16, fontSize: 14 }}>
                  <a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a> · <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </p>
              </div>
            </aside>
          </div>
          <p className="pd-legal">{T.legal[lang]} {SITE.legalName}. {t.footer.licensed}.</p>
        </div>
      </section>
      <div style={{ height: 80 }} />
    </Shell>
  );
}
