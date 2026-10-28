import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { AREAS, HOME } from "@/lib/content";

const EXPLORE = { en: "Explore", pt: "Conhecer", es: "Conocer" };

type P = { params: Promise<{ lang: string }> };
const LEAD = {
  en: "Windermere, Lake Nona, Dr. Phillips, Winter Park, Winter Garden, Clermont, Kissimmee and Miami.",
  pt: "Windermere, Lake Nona, Dr. Phillips, Winter Park, Winter Garden, Clermont, Kissimmee e Miami.",
  es: "Windermere, Lake Nona, Dr. Phillips, Winter Park, Winter Garden, Clermont, Kissimmee y Miami.",
};

const SOON = {
  en: "Homes in Miami will be available here soon, straight from the MLS.",
  pt: "Os imóveis de Miami estarão aqui em breve, direto da MLS.",
  es: "Las propiedades de Miami estarán aquí muy pronto, directamente de la MLS.",
};

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/areas/", `${HOME.areasTitle[lang]} | Webb Florida Realty`, LEAD[lang]);
}

export default async function Areas({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/areas/">
      <section className="areas-top">
        <div className="wrap">
          <h1 className="areas-h1" style={{ margin: 0 }}>{UI[lang].nav.areas}</h1>
        </div>
      </section>
      {["Orlando", "Miami"].map((r, n) => (
        <section className="sec region-sec" key={r} id={r.toLowerCase()}>
          <div className="wrap">
            <div className="market region-banner">
              <div className="media"><Photo slot={r.toLowerCase()} /></div>
              <h2>{r}</h2>
            </div>
            {AREAS.some((a) => a.region === r) ? (
            <div className="area-cards">
              {AREAS.filter((a) => a.region === r).map((a) => (
                <a className="area-card" key={a.slug} href={`/${lang}/areas/${a.slug}/`}>
                  <div className="area-card-photo"><Photo slot={`area-${a.slug}`} hint={a.name} /></div>
                  <h3>{a.name}</h3>
                  <p>{a.summary[lang]}</p>
                  <span className="link-cta link-cta-dark">{EXPLORE[lang]}</span>
                </a>
              ))}
            </div>
            ) : (
              <p className="soon-line">{SOON[lang]}</p>
            )}
          </div>
        </section>
      ))}
    </Shell>
  );
}
