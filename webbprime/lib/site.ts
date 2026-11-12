// Dados da empresa. Campos entre colchetes ainda dependem do Ramon.
export const SITE = {
  url: "https://webbprimerealestate.com",
  brand: "Webb Prime Real Estate",
  legalName: "Webb Prime Real Estate",
  orn: "[RERA ORN]", // número de registro da empresa na RERA (Office Registration Number)
  brn: "[BRN]", // número de corretor do Ramon na RERA (Broker Registration Number)
  address: "[Office address], Dubai, UAE",
  email: "info@webbprimerealestate.com",
  phone: "+1 (407) 601-0733",
  phoneE164: "+14076010733",
  whatsapp: "14076010733",
  broker: "Ramon Brandão",
  founded: 2025,
  social: { instagram: "", facebook: "", linkedin: "", youtube: "" },
  florida: { name: "Webb Florida Realty", url: "https://webbflorida.com" },
};

export const LOCALES = ["en", "pt", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

export const HTML_LANG: Record<Locale, string> = { en: "en", pt: "pt-BR", es: "es" };

export const waLink = (msg: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
