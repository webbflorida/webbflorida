import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME, HOMES } from "@/lib/content";
import { FEATURED } from "@/lib/featured";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/homes/", `${HOMES.title[lang]} | Webb Florida Realty`, HOMES.lead[lang]);
}

export default async function Homes({ params }: P) {
  const lang = await getLang(params);
  const money = new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const L = {
    bd: (n: number) => ({ en: "bd", pt: n === 1 ? "quarto" : "quartos", es: n === 1 ? "hab." : "hab." }[lang]),
    ba: (n: number) => ({ en: "ba", pt: n === 1 ? "banheiro" : "banheiros", es: n === 1 ? "baño" : "baños" }[lang]),
    f: {
      city: { en: "City", pt: "Cidade", es: "Ciudad" }[lang],
      all: { en: "Orlando and Miami", pt: "Orlando e Miami", es: "Orlando y Miami" }[lang],
      min: { en: "Min. price", pt: "Preço mínimo", es: "Precio mínimo" }[lang],
      max: { en: "Max. price", pt: "Preço máximo", es: "Precio máximo" }[lang],
      beds: { en: "Bedrooms", pt: "Quartos", es: "Habitaciones" }[lang],
      any: { en: "Any", pt: "Qualquer", es: "Cualquiera" }[lang],
      go: { en: "Search", pt: "Buscar", es: "Buscar" }[lang],
      none: { en: "No homes match this search. Try other filters or talk to our team.", pt: "Nenhum imóvel com esses filtros. Tente outros ou fale com o nosso time.", es: "Ninguna propiedad con estos filtros. Pruebe otros o hable con nuestro equipo." }[lang],
    },
    nc: { en: "New construction, ready to move in", pt: "Construção nova, pronta para morar", es: "Construcción nueva, lista para mudarse" }[lang],
    ncNote: {
      en: "Homes sold by the builder. Prices provided by the builder and subject to change.",
      pt: "Imóveis vendidos pela construtora. Preços informados pela construtora, sujeitos a alteração.",
      es: "Casas vendidas por el constructor. Precios informados por el constructor, sujetos a cambios.",
    }[lang],
    by: { en: "Listed by", pt: "Anunciado por", es: "Listado por" }[lang],
    disc: {
      en: "Listing information is provided by the MLS and deemed reliable but not guaranteed.",
      pt: "Informações fornecidas pelo MLS, consideradas confiáveis mas não garantidas.",
      es: "Información proporcionada por el MLS, considerada confiable pero no garantizada.",
    }[lang],
  };
  return (
    <Shell lang={lang} path="/homes/">
      <PageHero lang={lang} title={HOMES.title[lang]} lead={HOMES.lead[lang]} />
      {FEATURED.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <p className="eyebrow">{L.nc}</p>
            <div className="area-cards" style={{ marginTop: 24 }}>
              {FEATURED.map((h) => (
                <a className="area-card" key={h.slug} href={`/${lang}/homes/${h.slug}/`}>
                  <div className="area-card-photo"><img className="photo" src={h.photos[0].src} alt={h.title[lang]} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
                  <h3>{money.format(h.price)}</h3>
                  <p>{h.title[lang]}</p>
                  <p className="muted" style={{ fontSize: 13, marginTop: -8 }}>{h.city[lang]} · {h.sqft.toLocaleString(lang === "en" ? "en-US" : "pt-BR")} sq ft</p>
                </a>
              ))}
            </div>
            <p className="pd-legal">{L.ncNote}</p>
          </div>
        </section>
      )}
      {/* Decisão do Ramon (19/11/2026): só imóveis de construtoras e os anunciados pelo nosso time; nada de imóveis de outras imobiliárias do MLS. */}
      <section className="sec">
        <div className="wrap">
          <div className="soon"><p>{HOME.listingsSoon[lang]}</p><a className="btn btn-dark" href={`/${lang}/contact/`}>{UI[lang].cta.talk}</a></div>
        </div>
      </section>
    </Shell>
  );
}
