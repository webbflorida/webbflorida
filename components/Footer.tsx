import { SITE, type Locale } from "@/lib/site";
import { UI } from "@/lib/ui";
import { AREAS, SERVICES } from "@/lib/content";

export default function Footer({ lang }: { lang: Locale }) {
  const t = UI[lang];
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="cols">
          <div className="brand">
            <img src="/brand/horizontal_cores-fundo-escuro.svg" alt="Webb Florida Realty" width="274" height="64" />
            <p style={{ marginTop: 12, maxWidth: "34ch" }}>{t.footer.tagline}</p>
            <p>{!SITE.address.includes("[") && <>{SITE.address}<br /></>}<a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
          <div>
            <h4>{t.nav.areas}</h4>
            <ul>
              {AREAS.map((a) => (
                <li key={a.slug}><a href={`/${lang}/areas/${a.slug}/`}>{a.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.nav.services}</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}><a href={`/${lang}/services/${s.slug}/`}>{s.name[lang]}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>{t.footer.company}</h4>
            <ul>
              <li><a href={`/${lang}/about/`}>{t.nav.about}</a></li>
              <li><a href={`/${lang}/team/`}>{t.nav.team}</a></li>
              <li><a href={`/${lang}/guides/`}>{t.nav.guides}</a></li>
              <li><a href={`/${lang}/faq/`}>{t.footer.faq}</a></li>
              <li><a href={`/${lang}/contact/`}>{t.nav.contact}</a></li>
              <li className="ftr-sister">{t.footer.dubai}</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {SITE.legalName} · {t.footer.licensed}</span>
          <span className="legal-links">
            <a href={`/${lang}/privacy/`}>{t.footer.privacy}</a>
            <a href={`/${lang}/terms/`}>{t.footer.terms}</a>
            <span>{t.footer.equal}</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
