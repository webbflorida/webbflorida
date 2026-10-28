import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME, HOMES } from "@/lib/content";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/homes/", `${HOMES.title[lang]} | Webb Florida Realty`, HOMES.lead[lang]);
}

export default async function Homes({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/homes/">
      <PageHero lang={lang} title={HOMES.title[lang]} lead={HOMES.lead[lang]} />
      <section className="sec">
        <div className="wrap">
          <div className="soon"><p>{HOME.listingsSoon[lang]}</p><a className="btn btn-dark" href={`/${lang}/contact/`}>{UI[lang].cta.talk}</a></div>
          {/* Só na prévia: remover no lançamento. */}
          <p style={{ textAlign: "center", marginTop: 32 }}><a className="link-cta link-cta-dark" href={`/${lang}/homes/modelo/`}>{{ en: "See the property page layout", pt: "Ver o modelo de página de imóvel", es: "Ver el modelo de página de propiedad" }[lang]}</a></p>
        </div>
      </section>
    </Shell>
  );
}
