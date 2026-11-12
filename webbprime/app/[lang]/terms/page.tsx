import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { TERMS } from "@/lib/legal";

type P = { params: Promise<{ lang: string }> };
const NOTE = { en: "", pt: "Este documento é publicado em inglês, que é a versão oficial.", es: "Este documento se publica en inglés, que es la versión oficial." };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/terms/", "Terms of Use | Webb Prime Real Estate", "Terms of Use of Webb Prime Real Estate.");
}

export default async function Page({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/terms/">
      <PageHero lang={lang} title="Terms of Use" lead={NOTE[lang] || undefined} />
      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap prose" lang="en">
          {TERMS.map((b, i) => (
            <div key={i}>
              {b.h && <h2 style={{ fontSize: 26 }}>{b.h}</h2>}
              {b.p && <p>{b.p}</p>}
              {b.list && <ul>{b.list.map((x) => <li key={x}>{x}</li>)}</ul>}
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
