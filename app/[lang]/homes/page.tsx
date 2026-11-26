import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME, HOMES } from "@/lib/content";
import { getListings, listingSlug, MLS_READY, type Search } from "@/lib/mls";
import { FEATURED } from "@/lib/featured";
import { DEVELOPMENTS } from "@/lib/developments";
import { DEV_T } from "@/lib/developments-ui";

type P = { params: Promise<{ lang: string }>; searchParams?: Promise<Record<string, string | undefined>> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/homes/", `${HOMES.title[lang]} | Webb Florida Realty`, HOMES.lead[lang]);
}

const num = (v?: string) => (v && /^\d+$/.test(v) ? Number(v) : undefined);

export default async function Homes({ params, searchParams }: P) {
  const lang = await getLang(params);
  const sp = (await searchParams) ?? {};
  // Região escolhida no topo da página: Orlando (MLS Stellar) ou Miami (MLS Miami + lançamentos).
  const region = sp.city === "miami" ? "miami" : sp.city === "orlando" || sp.city === "stellar" ? "orlando" : undefined;
  const search: Search = {
    mls: region === "miami" ? "miami" : region === "orlando" ? "stellar" : undefined,
    minPrice: num(sp.min),
    maxPrice: num(sp.max),
    beds: num(sp.beds),
  };
  const listings = await getListings(search);
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
    own: { en: "For sale by Webb Florida Realty", pt: "À venda pela Webb Florida Realty", es: "En venta por Webb Florida Realty" }[lang],
    ownNote: {
      en: "Homes listed by our team. Information deemed reliable but not guaranteed.",
      pt: "Imóveis anunciados pelo nosso time. Informações consideradas confiáveis, mas não garantidas.",
      es: "Propiedades listadas por nuestro equipo. Información considerada confiable, pero no garantizada.",
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
      <PageHero lang={lang} title={region ? `${HOMES.title[lang]} ${{ en: "in", pt: "em", es: "en" }[lang]} ${region === "miami" ? "Miami" : "Orlando"}` : HOMES.title[lang]} lead={HOMES.lead[lang]}>
        <nav className="region-pick" aria-label={L.f.city}>
          {[
            { k: "orlando", label: "Orlando" },
            { k: "miami", label: "Miami" },
          ].map((r) => (
            <a key={r.k} href={`/${lang}/homes/?city=${r.k}`} aria-current={region === r.k ? "page" : undefined}>{r.label}</a>
          ))}
          {region && <a className="region-all" href={`/${lang}/homes/`}>{{ en: "See all", pt: "Ver todos", es: "Ver todos" }[lang]}</a>}
        </nav>
      </PageHero>
      {MLS_READY && (
      <section className="sec" style={{ paddingTop: 40, paddingBottom: 0 }}>
        <div className="wrap">
          {(
            <form className="mls-search" style={{ marginTop: 24, marginBottom: 0 }} method="get" action={`/${lang}/homes/`}>
              <label>{L.f.city}<select name="city" defaultValue={region ?? ""}><option value="">{L.f.all}</option><option value="orlando">Orlando</option><option value="miami">Miami</option></select></label>
              <label>{L.f.min}<select name="min" defaultValue={search.minPrice ? String(search.minPrice) : ""}><option value="">{L.f.any}</option>{[400000, 500000, 750000, 1000000, 2000000].map((v) => <option key={v} value={v}>{money.format(v)}</option>)}</select></label>
              <label>{L.f.max}<select name="max" defaultValue={search.maxPrice ? String(search.maxPrice) : ""}><option value="">{L.f.any}</option>{[500000, 750000, 1000000, 2000000, 5000000].map((v) => <option key={v} value={v}>{money.format(v)}</option>)}</select></label>
              <label>{L.f.beds}<select name="beds" defaultValue={search.beds ? String(search.beds) : ""}><option value="">{L.f.any}</option>{[1, 2, 3, 4, 5].map((v) => <option key={v} value={v}>{v}+</option>)}</select></label>
              <button className="btn btn-dark" type="submit">{L.f.go}</button>
            </form>
          )}
        </div>
      </section>
      )}
      {region !== "miami" && [
        { list: FEATURED.filter((h) => h.kind === "listing"), eyebrow: L.own, note: L.ownNote },
        { list: FEATURED.filter((h) => h.kind !== "listing"), eyebrow: L.nc, note: L.ncNote },
      ].filter((g) => g.list.length > 0).map((g) => (
        <section className="sec" key={g.eyebrow}>
          <div className="wrap">
            <p className="eyebrow">{g.eyebrow}</p>
            <div className="area-cards" style={{ marginTop: 24 }}>
              {g.list.map((h) => (
                <a className="area-card" key={h.slug} href={`/${lang}/homes/${h.slug}/`}>
                  <div className="area-card-photo">
                    {h.photos[0]
                      ? <img className="photo" src={h.photos[0].src} alt={h.title[lang]} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : <div className="photo-soon">WEBB</div>}
                  </div>
                  <h3>{money.format(h.price)}</h3>
                  <p>{h.title[lang]}</p>
                  <p className="muted" style={{ fontSize: 13, marginTop: -8 }}>{h.city[lang]} · {h.sqft.toLocaleString(lang === "en" ? "en-US" : "pt-BR")} sq ft</p>
                </a>
              ))}
            </div>
            <p className="pd-legal">{g.note}</p>
          </div>
        </section>
      ))}
      {region !== "orlando" && (
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">{DEV_T.title[lang]}</p>
          <div className="area-cards" style={{ marginTop: 24 }}>
            {DEVELOPMENTS.map((d) => (
              <a className="area-card" key={d.slug} href={`/${lang}/developments/${d.slug}/`}>
                <div className="area-card-photo">
                  {d.photos[0]
                    ? <img className="photo" src={d.photos[0].src} alt={d.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    : <div className="dv-card-ph"><span>{d.name}</span></div>}
                </div>
                <h3>{DEV_T.from[lang]} {money.format(d.from)}</h3>
                <p>{d.name}</p>
                <p className="muted" style={{ fontSize: 13, marginTop: -8 }}>{d.area[lang]}</p>
              </a>
            ))}
          </div>
          <p className="pd-legal">{DEV_T.legal[lang]}</p>
        </div>
      </section>
      )}
      <section className="sec">
        <div className="wrap">
          {MLS_READY && listings.length === 0 ? (
            <div className="soon"><p>{L.f.none}</p><a className="btn btn-dark" href={`/${lang}/contact/`}>{UI[lang].cta.talk}</a></div>
          ) : listings.length > 0 ? (
            <>
              <div className="area-cards">
                {listings.map((h) => (
                  <a className="area-card" key={h.mls + h.id} href={`/${lang}/homes/mls/${listingSlug(h)}/`}>
                    <div className="area-card-photo">{h.photo ? <img src={h.photo} alt={h.street || h.city || ""} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div className="ph" />}</div>
                    <h3>{money.format(h.price)}</h3>
                    <p>{[h.city, h.beds != null && `${h.beds} ${L.bd(h.beds)}`, h.baths != null && `${h.baths} ${L.ba(h.baths)}`].filter(Boolean).join(" · ")}</p>
                  </a>
                ))}
              </div>
              <p className="pd-legal">{L.disc}</p>
            </>
          ) : (
          <div className="soon"><p>{HOME.listingsSoon[lang]}</p><a className="btn btn-dark" href={`/${lang}/contact/`}>{UI[lang].cta.talk}</a></div>
          )}
        </div>
      </section>
    </Shell>
  );
}
