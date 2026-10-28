import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { HOME } from "@/lib/content";
import { GUIDES } from "@/lib/guides";

type P = { params: Promise<{ lang: string }> };
const LEAD = {
  en: "Clear, practical answers about buying, investing and living in Florida.",
  pt: "Respostas claras e práticas sobre comprar, investir e morar na Flórida.",
  es: "Respuestas claras y prácticas sobre comprar, invertir y vivir en Florida.",
};

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/guides/", `${HOME.guidesTitle[lang]} | Webb Florida Realty`, LEAD[lang]);
}

export default async function Guides({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/guides/">
      <PageHero lang={lang} title={HOME.guidesTitle[lang]} lead={LEAD[lang]} />
      <section className="sec">
        <div className="wrap grid g2">
          {GUIDES.map((g) => (
            <a className="card" key={g.slug} href={`/${lang}/guides/${g.slug}/`}>
              <span className="k">{g.category[lang]}</span><h3>{g.title[lang]}</h3><p>{g.summary[lang]}</p>
            </a>
          ))}
        </div>
      </section>
    </Shell>
  );
}
