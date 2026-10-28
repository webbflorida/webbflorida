import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

// Permite buscadores e robôs de IA (GPTBot, Google-Extended, PerplexityBot, ClaudeBot).
export default function robots(): MetadataRoute.Robots {
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${SITE.url}/sitemap.xml` };
}
