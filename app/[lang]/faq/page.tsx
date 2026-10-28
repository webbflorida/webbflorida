import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { FAQ, HOME } from "@/lib/content";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/faq/", `${HOME.faqTitle[lang]} | Webb Florida Realty`, FAQ[0].a[lang]);
}

export default async function Faq({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/faq/">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q[lang], acceptedAnswer: { "@type": "Answer", text: f.a[lang] } })) }} />
      <PageHero lang={lang} title={HOME.faqTitle[lang]} />
      <section className="sec" style={{ paddingTop: 40 }}>
        <div className="wrap faq prose">
          {FAQ.map((f) => <details key={f.q.en} open><summary>{f.q[lang]}</summary><p>{f.a[lang]}</p></details>)}
        </div>
      </section>
    </Shell>
  );
}
