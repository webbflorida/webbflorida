// Dados da empresa. Campos entre colchetes ainda dependem do Ramon.
export const SITE = {
  url: "https://webbflorida.com",
  brand: "Webb Florida Realty",
  legalName: "Webb Florida Realty LLC",
  license: "[Florida brokerage license #]",
  address: "[Office address], Orlando, FL",
  email: "info@webbflorida.com",
  phone: "(407) 601-0733",
  phoneE164: "+14076010733",
  whatsapp: "14076010733", // WhatsApp Business (28/10)
  ownerPortal: "", // link do portal do proprietário (AppFolio, Buildium etc.), pendente
  broker: "Ramon Brandão",
  founded: 2015,
  social: {
    instagram: "",
    youtube: "",
    facebook: "",
    linkedin: "",
  },
  dubai: { name: "Webb Real Estate", city: "Dubai" },
};

export const LOCALES = ["en", "pt", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(x: string): x is Locale {
  return (LOCALES as readonly string[]).includes(x);
}

export const HTML_LANG: Record<Locale, string> = { en: "en", pt: "pt-BR", es: "es" };

export const waLink = (msg: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
