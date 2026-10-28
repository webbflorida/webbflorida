import "../globals.css";
import { notFound } from "next/navigation";
import { HTML_LANG, LOCALES, isLocale } from "@/lib/site";
import { UI } from "@/lib/ui";
import { orgJsonLd } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

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
      </head>
      <body>
        <div className="preview">{UI[lang].preview}</div>
        {children}
      </body>
    </html>
  );
}
