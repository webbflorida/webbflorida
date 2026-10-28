import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME, HOMES } from "@/lib/content";
import { getListings } from "@/lib/mls";

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
