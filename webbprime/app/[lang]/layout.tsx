import "../globals.css";
import { notFound } from "next/navigation";
import { HTML_LANG, LOCALES, isLocale } from "@/lib/site";
import { UI } from "@/lib/ui";
import { orgJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import SourceTracker from "@/components/SourceTracker";

// Google Analytics: código "G-XXXX" cadastrado na Vercel como NEXT_PUBLIC_GA_ID. Sem ele, nada é carregado.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={HTML_LANG[lang]}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Italiana&family=Tenor+Sans&display=swap" />
        <JsonLd data={orgJsonLd()} />
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');` }} />
          </>
        )}
      </head>
      <body>
        <div className="preview">{UI[lang].preview}</div>
        <SourceTracker />
        {children}
      </body>
    </html>
  );
}
