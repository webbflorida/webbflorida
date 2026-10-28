import { notFound } from "next/navigation";
import Shell from "@/components/Shell";
import PageHero from "@/components/PageHero";
import JsonLd from "@/components/JsonLd";
import { LOCALES, SITE, isLocale } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { UI } from "@/lib/ui";
import { HOME, SERVICES } from "@/lib/content";

const PORTAL = { en: "Owner portal", pt: "Portal do proprietário", es: "Portal del propietario" };
const SOON = { en: "coming soon", pt: "em breve", es: "próximamente" };

const TIPS = { en: "Before you move", pt: "Antes de se mudar", es: "Antes de mudarse" };
const FULL = { en: "Full advisory", pt: "Assessoria completa", es: "Asesoría completa" };
const FULL_T = { en: "A plan for your move, from start to finish.", pt: "Um plano para a sua mudança, do início ao fim.", es: "Un plan para su mudanza, de principio a fin." };

type P = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => SERVICES.map((s) => ({ lang, slug: s.slug })));
}

async function load(params: P["params"]) {
  const { lang, slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!isLocale(lang) || !s) notFound();
  return { lang, s };
}

export async function generateMetadata({ params }: P) {
  const { lang, s } = await load(params);
  return pageMeta(lang, `/services/${s.slug}/`, `${s.name[lang]} | Webb Florida Realty`, s.intro[lang]);
}

export default async function ServicePage({ params }: P) {
  const { lang, s } = await load(params);
  const t = UI[lang];
  return (
    <Shell lang={lang} path={`/services/${s.slug}/`}>
      {s.questions.length > 0 && (
        <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage",
          mainEntity: s.questions.map((f) => ({ "@type": "Question", name: f.q[lang], acceptedAnswer: { "@type": "Answer", text: f.a[lang] } })) }} />
      )}
      <PageHero lang={lang} title={s.name[lang]} lead={s.tips ? undefined : s.short[lang]}
        crumbs={[{ href: `/${lang}/services/`, label: HOME.servicesTitle[lang] }]} />
      {s.tips ? (
        <>
          <section className="sec sec-tight">
            <div className="wrap split">
              <h2 className="statement">{TIPS[lang]}</h2>
              <ol className="tips">
                {s.tips.map((tip, i) => (
                  <li key={tip.t.en}>
                    <span className="tip-n">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{tip.t[lang]}</h3>
                      <p>{tip.d[lang]}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>
          <section className="sec sec-alt">
            <div className="wrap split">
              <div>
                <p className="eyebrow">{FULL[lang]}</p>
                <h2 className="statement">{FULL_T[lang]}</h2>
              </div>
              <div>
                <p className="body-lg">{s.intro[lang]}</p>
                <ol className="principles">
                  {s.points[lang].map((p, i) => <li key={p}><span>{["I", "II", "III", "IV", "V"][i]}</span>{p}</li>)}
                </ol>
                <p style={{ marginTop: 36 }}><a className="btn btn-dark" href={`/${lang}/contact/`}>{t.cta.talk}</a></p>
              </div>
            </div>
          </section>
        </>
      ) : (
      <section className="sec">
        <div className="wrap prose">
          <p style={{ fontSize: 19 }}>{s.intro[lang]}</p>
          <ul>{s.points[lang].map((p) => <li key={p}>{p}</li>)}</ul>
          {s.questions.length > 0 && (
            <div className="faq" style={{ marginTop: 40 }}>
              {s.questions.map((f) => <details key={f.q.en} open><summary>{f.q[lang]}</summary><p>{f.a[lang]}</p></details>)}
            </div>
          )}
          <p style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btn-dark" href={`/${lang}/contact/`}>{t.cta.talk}</a>
            {(s.slug === "property-management" || s.slug === "owners") && (
              SITE.ownerPortal
                ? <a className="btn btn-line" href={SITE.ownerPortal} rel="noopener">{PORTAL[lang]}</a>
                : <span className="btn btn-line" aria-disabled="true" style={{ opacity: .55 }}>{PORTAL[lang]} · {SOON[lang]}</span>
            )}
          </p>
        </div>
      </section>
      )}
    </Shell>
  );
}
