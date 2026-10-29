import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME, HOMES } from "@/lib/content";
import { getListings } from "@/lib/mls";
import { FEATURED } from "@/lib/featured";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/homes/", `${HOMES.title[lang]} | Webb Florida Realty`, HOMES.lead[lang]);
}

export default async function Homes({ params }: P) {
  const lang = await getLang(params);
  const listings = await getListings();
  const money = new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  const L = {
    bd: { en: "bd", pt: "quartos", es: "hab." }[lang],
    ba: { en: "ba", pt: "banheiros", es: "baños" }[lang],
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
      <section className="sec">
        <div className="wrap">
          {listings.length > 0 ? (
            <>
              <div className="area-cards">
                {listings.map((h) => (
                  <a className="area-card" key={h.mls + h.id} href={`/${lang}/contact/`}>
                    <div className="area-card-photo">{h.photo ? <img src={h.photo} alt={h.street || h.city || ""} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div className="ph" />}</div>
                    <h3>{money.format(h.price)}</h3>
                    <p>{[h.city, h.beds != null && `${h.beds} ${L.bd}`, h.baths != null && `${h.baths} ${L.ba}`].filter(Boolean).join(" · ")}</p>
                    {h.officeName && <p className="muted" style={{ fontSize: 12 }}>{L.by} {h.officeName}</p>}
                  </a>
                ))}
              </div>
              <p className="pd-legal">{L.disc}</p>
            </>
          ) : (
          <div className="soon"><p>{HOME.listingsSoon[lang]}</p><a className="btn btn-dark" href={`/${lang}/contact/`}>{UI[lang].cta.talk}</a></div>
          )}
          {/* Só na prévia: remover no lançamento. */}
          <p style={{ textAlign: "center", marginTop: 32 }}><a className="link-cta link-cta-dark" href={`/${lang}/homes/modelo/`}>{{ en: "See the property page layout", pt: "Ver o modelo de página de imóvel", es: "Ver el modelo de página de propiedad" }[lang]}</a></p>
        </div>
      </section>
    </Shell>
  );
}
