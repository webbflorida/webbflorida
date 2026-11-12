import type { MetadataRoute } from "next";
import { LOCALES, SITE } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/projects/", "/invest/", "/golden-visa/", "/about/", "/contact/", "/privacy/", "/terms/", ...PROJECTS.map((p) => `/projects/${p.slug}/`)];
  return paths.flatMap((p) => LOCALES.map((l) => ({
    url: `${SITE.url}/${l}${p}`,
    alternates: { languages: Object.fromEntries(LOCALES.map((x) => [x === "pt" ? "pt-BR" : x, `${SITE.url}/${x}${p}`])) },
  })));
}
