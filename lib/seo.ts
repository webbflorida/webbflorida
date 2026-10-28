import type { Metadata } from "next";
import { LOCALES, SITE, type Locale } from "./site";

// Caminho sem o idioma, ex.: "/areas/windermere/"
export function pageMeta(lang: Locale, path: string, title: string, description: string): Metadata {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l === "pt" ? "pt-BR" : l] = `${SITE.url}/${l}${path}`;
  languages["x-default"] = `${SITE.url}/en${path}`;
  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: `${SITE.url}/${lang}${path}`, languages },
    openGraph: { title, description, url: `${SITE.url}/${lang}${path}`, siteName: SITE.brand, type: "website" },
  };
}

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${SITE.url}/#org`,
        name: SITE.brand,
        url: SITE.url,
        foundingDate: String(SITE.founded),
        areaServed: ["Orlando, FL", "Windermere, FL", "Lake Nona, FL", "Dr. Phillips, FL", "Winter Park, FL", "Winter Garden, FL", "Clermont, FL", "Kissimmee, FL", "Miami, FL"],
        telephone: SITE.phoneE164,
        email: SITE.email,
        knowsLanguage: ["en", "pt-BR", "es"],
        address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" },
        employee: { "@id": `${SITE.url}/#broker` },
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#broker`,
        name: SITE.broker,
        jobTitle: "Real Estate Broker",
        worksFor: { "@id": `${SITE.url}/#org` },
        telephone: SITE.phoneE164,
        email: SITE.email,
        knowsLanguage: ["en", "pt-BR", "es"],
      },
    ],
  };
}
