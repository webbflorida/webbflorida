import Shell from "@/components/Shell";
import JsonLd from "@/components/JsonLd";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { INVEST } from "@/lib/content";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/invest/", `${INVEST.title[lang]} | Webb Prime Real Estate`, INVEST.lead[lang]);
}

export default async function Invest({ params }: P) {
  const lang = await getLang(params);
  const t = UI[lang];
  return (
    <Shell lang={lang} path="/invest/">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: INVEST.faq.map((f) => ({ "@type": "Question", name: f.q[lang], acceptedAnswer: { "@type": "Answer", text: f.a[lang] } })) }} />
      <section className="hero-photo area-hero">
        <div className="media"><Photo slot="invest" /></div>
        <div className="wrap">
          <p className="eyebrow">{t.nav.invest}</p>
          <h1>{INVEST.title[lang]}</h1>
          <p className="lead">{INVEST.lead[lang]}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <h2 className="statement">{INVEST.stepsTitle[lang]}</h2>
          <ol className="tips">
            {INVEST.steps.map((s, i) => (
              <li key={s.t.en}>
                <span className="tip-n">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{s.t[lang]}</h3><p>{s.d[lang]}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap">
          <h2 style={{ marginBottom: 32 }}>{INVEST.faqTitle[lang]}</h2>
          <div className="faq prose">
            {INVEST.faq.map((f) => <details key={f.q.en}><summary>{f.q[lang]}</summary><p>{f.a[lang]}</p></details>)}
          </div>
        </div>
      </section>

      <section className="sec band">
        <div className="wrap">
          <h2>{t.cta.talk}</h2>
          <p>{{ en: "We will walk you through each step, with the numbers of the project you choose.", pt: "Explicamos cada etapa com os números do projeto que você escolher.", es: "Le explicamos cada etapa con los números del proyecto que elija." }[lang]}</p>
          <a className="link-cta" href={`/${lang}/contact/`}>{t.nav.contact}</a>
        </div>
      </section>
    </Shell>
  );
}
