import { SITE, type Locale } from "@/lib/site";
import { UI } from "@/lib/ui";
import { PROJECTS } from "@/lib/projects";

export default function Footer({ lang }: { lang: Locale }) {
  const t = UI[lang];
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="cols">
          <div className="brand">
            <img src="/brand/horizontal_cores-fundo-escuro.svg" alt="Webb Prime Real Estate" width="181" height="64" />
            <p style={{ marginTop: 12, maxWidth: "34ch" }}>{t.footer.tagline}</p>
            <p>{!SITE.address.includes("[") && <>{SITE.address}<br /></>}<a href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          </div>
          <div>
            <h4>{t.nav.projects}</h4>
            <ul>
              {PROJECTS.map((p) => (
                <li key={p.slug}><a href={`/${lang}/projects/${p.slug}/`}>{p.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Dubai</h4>
            <ul>
              <li><a href={`/${lang}/invest/`}>{t.nav.invest}</a></li>
              <li><a href={`/${lang}/golden-visa/`}>{t.nav.visa}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t.footer.company}</h4>
            <ul>
              <li><a href={`/${lang}/about/`}>{t.nav.about}</a></li>
              <li><a href={`/${lang}/contact/`}>{t.nav.contact}</a></li>
              <li className="ftr-sister">{t.footer.florida}<br /><a href={SITE.florida.url} target="_blank" rel="noopener" style={{ color: "var(--gold-light)" }}>{t.footer.floridaLink} ↗</a></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>© {new Date().getFullYear()} {SITE.legalName} · {t.footer.licensed} · {t.footer.orn} {SITE.orn}</span>
          <span className="legal-links">
            <a href={`/${lang}/privacy/`}>{t.footer.privacy}</a>
            <a href={`/${lang}/terms/`}>{t.footer.terms}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
