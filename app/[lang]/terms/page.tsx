import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { TERMS } from "@/lib/legal";

type P = { params: Promise<{ lang: string }> };
const NOTE = {
  en: "",
  pt: "Este documento é publicado em inglês, que é a versão oficial.",
  es: "Este documento se publica en inglés, que es la versión oficial.",
};

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/terms/", "Terms of Use" + " | Webb Florida Realty", "Terms of Use" + " of Webb Florida Realty.");
}

export default async function Page({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/terms/">
      <PageHero lang={lang} title={"Terms of Use"} lead={NOTE[lang] || undefined} />
      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap prose" lang="en">
          <p className="muted"><em>Last updated: October 26, 2026</em></p>
          {TERMS.map((b, i) => (
            <div key={i}>
              {b.h && <h2 style={{ fontSize: 26 }}>{b.h}</h2>}
              {b.p && <p>{b.p}</p>}
              {"list" in b && Array.isArray(b.list) && <ul>{b.list.map((x: string) => <li key={x}>{x}</li>)}</ul>}
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
