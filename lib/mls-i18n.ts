// Tradução dos valores padrão do MLS (RESO) para PT/ES, para a página do imóvel não misturar idiomas.
// Valor sem tradução conhecida não aparece em PT/ES (melhor omitir do que mostrar em inglês).
import type { Locale } from "@/lib/site";

const D: Record<string, { pt: string; es: string }> = {
  "single family residence": { pt: "Casa", es: "Casa" },
  "single family": { pt: "Casa", es: "Casa" },
  "condominium": { pt: "Apartamento (condomínio)", es: "Apartamento (condominio)" },
  "condo": { pt: "Apartamento (condomínio)", es: "Apartamento (condominio)" },
  "townhouse": { pt: "Townhouse (sobrado)", es: "Townhouse (casa adosada)" },
  "villa": { pt: "Villa", es: "Villa" },
  "duplex": { pt: "Duplex", es: "Dúplex" },
  "co-op": { pt: "Cooperativa (co-op)", es: "Cooperativa (co-op)" },
  "cooperative": { pt: "Cooperativa (co-op)", es: "Cooperativa (co-op)" },
  "manufactured home": { pt: "Casa pré-fabricada", es: "Casa prefabricada" },
  "mobile home": { pt: "Casa móvel", es: "Casa móvil" },
  // Vista
  "canal": { pt: "Canal", es: "Canal" },
  "canal view": { pt: "Canal", es: "Canal" },
  "water": { pt: "Água", es: "Agua" },
  "water view": { pt: "Água", es: "Agua" },
  "waterfront": { pt: "Água", es: "Agua" },
  "ocean": { pt: "Mar", es: "Mar" },
  "ocean view": { pt: "Mar", es: "Mar" },
  "bay": { pt: "Baía", es: "Bahía" },
  "bay view": { pt: "Baía", es: "Bahía" },
  "intracoastal": { pt: "Intracoastal", es: "Intracostero" },
  "intracoastal view": { pt: "Intracoastal", es: "Intracostero" },
  "lake": { pt: "Lago", es: "Lago" },
  "lake view": { pt: "Lago", es: "Lago" },
  "river": { pt: "Rio", es: "Río" },
  "pool": { pt: "Piscina", es: "Piscina" },
  "pool view": { pt: "Piscina", es: "Piscina" },
  "garden": { pt: "Jardim", es: "Jardín" },
  "garden view": { pt: "Jardim", es: "Jardín" },
  "golf course": { pt: "Campo de golfe", es: "Campo de golf" },
  "golf course view": { pt: "Campo de golfe", es: "Campo de golf" },
  "city": { pt: "Cidade", es: "Ciudad" },
  "city view": { pt: "Cidade", es: "Ciudad" },
  "skyline": { pt: "Skyline", es: "Skyline" },
  "skyline view": { pt: "Skyline", es: "Skyline" },
  "park": { pt: "Parque", es: "Parque" },
  "park view": { pt: "Parque", es: "Parque" },
  "preserve": { pt: "Área de preservação", es: "Área de preservación" },
  "pond": { pt: "Lago", es: "Lago" },
  "direct ocean": { pt: "Frente para o mar", es: "Frente al mar" },
  "marina": { pt: "Marina", es: "Marina" },
  "panoramic": { pt: "Panorâmica", es: "Panorámica" },
  "other": { pt: "", es: "" },
  "none": { pt: "", es: "" },
  // Frequência do HOA
  "monthly": { pt: "por mês", es: "por mes" },
  "quarterly": { pt: "por trimestre", es: "por trimestre" },
  "annually": { pt: "por ano", es: "por año" },
  "semi-annually": { pt: "por semestre", es: "por semestre" },
};

export function trMls(value: string | undefined, lang: Locale): string | undefined {
  if (!value) return undefined;
  if (lang === "en") return value;
  return D[value.trim().toLowerCase()]?.[lang] || undefined;
}

// Lista separada por vírgula (ex.: vista): traduz cada item, tira repetidos e os sem tradução.
export function trMlsList(value: string | undefined, lang: Locale): string | undefined {
  if (!value) return undefined;
  const items = value.split(",").map((x) => x.trim()).filter(Boolean);
  const out = [...new Set(items.map((x) => (lang === "en" ? x : trMls(x, lang))).filter(Boolean))];
  return out.length ? out.join(", ") : undefined;
}
