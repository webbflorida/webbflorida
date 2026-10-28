import Shell from "@/components/Shell";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { ABOUT, HOME } from "@/lib/content";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/about/", `${ABOUT.title[lang]} | Webb Florida Realty`, ABOUT.lead[lang]);
}

export default async function About({ params }: P) {
  const lang = await getLang(params);
  const t = UI[lang];
  const roman = ["I", "II", "III"];
  return (
    <Shell lang={lang} path="/about/">
      <section className="hero-photo area-hero">
        <div className="media"><Photo slot="story" /></div>
        <div className="wrap">
          <h1>{ABOUT.title[lang]}</h1>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="chapters">
            {HOME.familyBrands.map((b, i) => (
              <div className="chapter" key={b.name}>
                <div className="chapter-head">
                  <span className="chapter-year">{b.note ? b.note[lang].replace(/\D/g, "") : ""}</span>
                  <span className="k">{b.place[lang]}</span>
                  <h3>{b.name}</h3>
                </div>
                <p>{HOME.familyStory[i][lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec-alt">
        <div className="wrap split">
          <div>
            <p className="eyebrow">{ABOUT.brokerEyebrow[lang]}</p>
            <h2 className="statement">{ABOUT.brokerTitle[lang]}</h2>
            <div className="portrait"><Photo slot="ramon" /></div>
          </div>
          <div>
            <p className="body-lg">{ABOUT.broker[lang]}</p>
            <ol className="principles">
              {HOME.principles.map((p, i) => (
                <li key={p.en}><span>{roman[i]}</span>{p[lang]}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="sec band">
        <div className="wrap">
          <h2>{HOME.privateTitle[lang]}</h2>
          <p>{HOME.closing[lang]}</p>
          <a className="link-cta" href={`/${lang}/contact/`}>{t.cta.talk}</a>
        </div>
      </section>
    </Shell>
  );
}
