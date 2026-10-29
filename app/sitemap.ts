import type { MetadataRoute } from "next";
import { LOCALES, SITE } from "@/lib/site";
import { AREAS, SERVICES } from "@/lib/content";
import { GUIDES } from "@/lib/guides";
import { FEATURED } from "@/lib/featured";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/homes/", "/areas/", "/services/", "/guides/", "/about/", "/team/", "/faq/", "/contact/", "/privacy/", "/terms/",
    ...AREAS.map((a) => `/areas/${a.slug}/`),
    ...SERVICES.map((s) => `/services/${s.slug}/`),
    ...GUIDES.map((g) => `/guides/${g.slug}/`),
    ...FEATURED.map((h) => `/homes/${h.slug}/`),
  ];
  return paths.flatMap((p) => LOCALES.map((l) => ({
    url: `${SITE.url}/${l}${p}`,
    alternates: { languages: Object.fromEntries(LOCALES.map((x) => [x === "pt" ? "pt-BR" : x, `${SITE.url}/${x}${p}`])) },
  })));
}
