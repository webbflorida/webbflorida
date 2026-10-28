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
          <div className="purpose">
            <p className="purpose-line">Beyond the closing.</p>
          </div>
          <div className="institutional">
            {ABOUT.institutional.map((p) => <p key={p.en}>{p[lang]}</p>)}
          </div>
          <ul className="timeline">
            {HOME.familyBrands.map((b) => (
              <li key={b.name}>
                <span className="tl-year">{b.note ? b.note[lang].replace(/\D/g, "") : ""}</span>
                <span className="fs-name">{b.name}</span>
                <span className="fs-meta">{b.place[lang]}</span>
              </li>
            ))}
          </ul>
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
            {ABOUT.broker[lang].split("\n\n").map((para) => <p className="body-lg" key={para.slice(0, 20)}>{para}</p>)}
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
