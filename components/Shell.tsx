import { waLink, type Locale } from "@/lib/site";
import { UI } from "@/lib/ui";
import Header from "./Header";
import Footer from "./Footer";
import WaIcon from "./WaIcon";

// Cabeçalho + conteúdo + rodapé. `path` é o caminho sem idioma (para o seletor de idioma).
export default function Shell({ lang, path, children }: { lang: Locale; path: string; children: React.ReactNode }) {
  return (
    <>
      <Header lang={lang} path={path} />
      <main>{children}</main>
      <Footer lang={lang} />
      <a className="wa" href={waLink(UI[lang].cta.waMsg)} target="_blank" rel="noopener" aria-label="WhatsApp">
        <WaIcon size={26} /><span className="wa-label">WhatsApp</span>
      </a>
    </>
  );
}
