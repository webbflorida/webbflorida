import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import { getLang } from "@/lib/params";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME, SERVICES } from "@/lib/content";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P) {
  const lang = await getLang(params);
  return pageMeta(lang, "/services/", `${HOME.servicesTitle[lang]} | Webb Florida Realty`, HOME.metaDescription[lang]);
}

export default async function Services({ params }: P) {
  const lang = await getLang(params);
  return (
    <Shell lang={lang} path="/services/">
      <PageHero lang={lang} title={HOME.servicesTitle[lang]} lead={HOME.lead[lang].replace("\n", " ")} />
      <section className="sec">
        <div className="wrap grid g3">
          {SERVICES.map((s) => (
            <a className="card" key={s.slug} href={`/${lang}/services/${s.slug}/`}>
              <h3>{s.name[lang]}</h3><p>{s.short[lang]}</p>
            </a>
          ))}
          <a className="card" href={`/${lang}/contact/`}><h3>{UI[lang].cta.talk}</h3><p>{HOME.closing[lang]}</p></a>
        </div>
      </section>
    </Shell>
  );
}
