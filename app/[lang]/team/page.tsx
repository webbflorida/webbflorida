import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME } from "@/lib/content";
import { TEAM, TEAM_TEXT } from "@/lib/team";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/team/", `${TEAM_TEXT.title[lang]} | Webb Florida Realty`, TEAM_TEXT.lead[lang]);
}

export default async function Team({ params }: P) {
  const lang = await getLang(params);
  const t = UI[lang];
  return (
    <Shell lang={lang} path="/team/">
      <PageHero lang={lang} eyebrow="Webb Florida Realty" title={TEAM_TEXT.title[lang]} />
      <section className="sec">
        <div className="wrap">
          <div className="team">
            {TEAM.map((m) => (
              <article className="member" key={m.name}>
                <div className="member-photo"><Photo slot={m.photo} /></div>
                <p className="eyebrow" style={{ marginTop: 24 }}>{m.role[lang]}</p>
                <h2 className="member-name">{m.name}</h2>
                <p className="muted member-langs">{m.languages}</p>
                {m.email && <a className="link-cta link-cta-dark" href={`mailto:${m.email}`}>{TEAM_TEXT.contact[lang]}</a>}
              </article>
            ))}
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
