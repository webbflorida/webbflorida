import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Antes do lançamento o site fica fora do Google (endereço provisório da Vercel).
// No lançamento, criar na Vercel a variável SITE_LIVE=1 e publicar de novo.
// Com o site no ar, permite buscadores e robôs de IA (GPTBot, Google-Extended, PerplexityBot, ClaudeBot).
export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_LIVE !== "1") return { rules: [{ userAgent: "*", disallow: "/" }] };
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE.url}/sitemap.xml` };
}
