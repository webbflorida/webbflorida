import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { SITE, waLink } from "@/lib/site";
import { UI } from "@/lib/ui";
import { CONTACT } from "@/lib/content";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/contact/", `${CONTACT.title[lang]} | Webb Florida Realty`, CONTACT.lead[lang]);
}

export default async function Contact({ params }: P) {
  const lang = await getLang(params);
  const f = CONTACT.fields;
  return (
    <Shell lang={lang} path="/contact/">
      <PageHero lang={lang} title={CONTACT.title[lang]} lead={CONTACT.lead[lang]} />
      <section className="sec">
        <div className="wrap grid g2">
          <form className="form" action="#" method="post">
            <label>{f.name[lang]}<input name="name" required autoComplete="name" /></label>
            <label>{f.email[lang]}<input name="email" type="email" required autoComplete="email" /></label>
            <label>{f.phone[lang]}<input name="phone" type="tel" autoComplete="tel" /></label>
            <label>{f.goal[lang]}<select name="goal">{f.goals[lang].map((g) => <option key={g}>{g}</option>)}</select></label>
            <label>{f.message[lang]}<textarea name="message" rows={5} /></label>
            <button className="btn btn-dark" type="submit" disabled>{f.send[lang]}</button>
            <p className="muted" style={{ fontSize: 13 }}>{CONTACT.formNote[lang]}</p>
          </form>
          <div>
            <p><strong>Webb Florida Realty</strong><br />{!SITE.address.includes("[") && <>{SITE.address}<br /></>}<a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a><br /><a href={waLink(UI[lang].cta.waMsg)} target="_blank" rel="noopener">WhatsApp</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p className="muted">English · Português · Español</p>
          </div>
        </div>
      </section>
    </Shell>
  );
}
