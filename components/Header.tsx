import { LOCALES, type Locale } from "@/lib/site";
import { UI } from "@/lib/ui";

export default function Header({ lang, path }: { lang: Locale; path: string }) {
  const t = UI[lang];
  const links = [
    { href: `/${lang}/homes/`, label: t.nav.homes },
    { href: `/${lang}/areas/`, label: t.nav.areas },
    { href: `/${lang}/guides/`, label: t.nav.guides },
    { href: `/${lang}/about/`, label: t.nav.about },
    { href: `/${lang}/team/`, label: t.nav.team },
  ];
  const langs = (
    <>
      {LOCALES.map((l) => (
        <a key={l} href={`/${l}${path}`} hrefLang={l} aria-current={l === lang ? "true" : undefined}>
          {l.toUpperCase()}
        </a>
      ))}
    </>
  );
  const item = (l: { href: string; label: string }) => (
    <li key={l.href}>
      <a href={l.href} aria-current={`/${lang}${path}`.startsWith(l.href) ? "page" : undefined}>
        {l.label}
      </a>
    </li>
  );
  return (
    <header className="hdr">
      <div className="wrap hdr-top">
        <div className="langs langs-desk">{langs}</div>
        <a className="logo" href={`/${lang}/`}>
          <img src="/brand/horizontal_cores-fundo-claro.svg" alt="Webb Florida Realty" width="334" height="78" />
        </a>
        <div className="hdr-right">
          <a className="btn btn-line" href={`/${lang}/contact/`}>{t.nav.contact}</a>
          <details className="menu">
            <summary>Menu</summary>
            <ul>
              {links.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
              <li><a href={`/${lang}/contact/`}>{t.nav.contact}</a></li>
              <li><div className="langs" style={{ padding: "10px 20px" }}>{langs}</div></li>
            </ul>
          </details>
        </div>
      </div>
      <nav aria-label="Main" className="hdr-nav">
        <ul className="nav">{links.map(item)}</ul>
      </nav>
    </header>
  );
}
