import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { PRIVACY } from "@/lib/legal";

type P = { params: Promise<{ lang: string }> };
const NOTE = { en: "", pt: "Este documento é publicado em inglês, que é a versão oficial.", es: "Este documento se publica en inglés, que es la versión oficial." };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/privacy/", "Privacy Policy | Webb Prime Real Estate", "Privacy Policy of Webb Prime Real Estate.");
}

export default async function Page({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/privacy/">
      <PageHero lang={lang} title="Privacy Policy" lead={NOTE[lang] || undefined} />
      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap prose" lang="en">
          {PRIVACY.map((b, i) => (
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
