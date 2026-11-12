import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { VISA } from "@/lib/content";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/golden-visa/", `${VISA.title[lang]} | Webb Prime Real Estate`, VISA.lead[lang]);
}

export default async function Visa({ params }: P) {
  const lang = await getLang(params);
  const t = UI[lang];
  return (
    <Shell lang={lang} path="/golden-visa/">
      <section className="hero-photo area-hero">
        <div className="media"><Photo slot="goldenvisa" /></div>
        <div className="wrap">
          <p className="eyebrow">Golden Visa</p>
          <h1>{VISA.title[lang]}</h1>
          <p className="lead">{VISA.lead[lang]}</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{{ en: "Main criteria", pt: "Critérios principais", es: "Criterios principales" }[lang]}</p>
            <ul className="principles">
              {VISA.points[lang].map((p, i) => <li key={p}><span>{["I", "II", "III", "IV"][i]}</span>{p}</li>)}
            </ul>
          </div>
          <div>
            <p className="body-lg">{VISA.role[lang]}</p>
            <a className="link-cta link-cta-dark" href={`/${lang}/contact/`}>{t.cta.talk}</a>
          </div>
        </div>
      </section>
    </Shell>
  );
}
