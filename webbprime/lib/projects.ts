import type { L, LL } from "./content";

// Projetos em Dubai. Valores "a partir de" de portal (ezre.ae, 12/11/2026), iguais aos do ramonbrandao.global,
// até chegar a tabela oficial da incorporadora. Cada anúncio exige o permit da RERA (Trakheesi).
export type Project = {
  slug: string;
  name: string;
  area: string;
  permit: string;
  from: { aed: string; usd: string };
  delivery?: L;
  plan?: string;
  short: L;
  intro: L;
  units: L;
  highlights: LL;
};

// Sunset Bay Grand e Azizi Milan saíram em 19/11/2026 (pedido do Ramon). Próximos: Mercedes-Benz Places (Binghatti) e Aldar em Yas Island.
export const ALL_PROJECTS: Project[] = [];

// Em Dubai, todo anúncio de imóvel precisa do permit da RERA (Trakheesi). Projeto sem permit preenchido
// fica fora do site (home, menu, rodapé, lista, páginas e sitemap) até o número chegar.
export const PROJECTS: Project[] = ALL_PROJECTS.filter((p) => !p.permit.includes("["));

export const P_UI = {
  soon: {
    en: "New projects are being added. Contact us for the current selection.",
    pt: "Novos projetos estão sendo adicionados. Fale com a gente para ver a seleção atual.",
    es: "Estamos agregando nuevos proyectos. Contáctenos para ver la selección actual.",
  } as L,
  title: { en: "Projects in Dubai", pt: "Projetos em Dubai", es: "Proyectos en Dubái" } as L,
  lead: {
    en: "A short selection of off-plan and ready projects. Ask us for the full price list and the units available today.",
    pt: "Uma seleção curta de projetos na planta e prontos. Peça a tabela completa e as unidades disponíveis hoje.",
    es: "Una selección corta de proyectos en preventa y listos. Pida la lista completa de precios y las unidades disponibles hoy.",
  } as L,
  from: { en: "From", pt: "A partir de", es: "Desde" } as L,
  delivery: { en: "Delivery", pt: "Entrega", es: "Entrega" } as L,
  plan: { en: "Payment plan", pt: "Plano de pagamento", es: "Plan de pagos" } as L,
  units: { en: "Units", pt: "Unidades", es: "Unidades" } as L,
  highlights: { en: "Highlights", pt: "Destaques", es: "Destacados" } as L,
  permit: { en: "RERA permit", pt: "Permit RERA", es: "Permiso RERA" } as L,
  note: {
    en: "Prices and conditions provided by the developer, subject to change and availability.",
    pt: "Valores e condições informados pela incorporadora, sujeitos a alteração e disponibilidade.",
    es: "Precios y condiciones informados por el desarrollador, sujetos a cambios y disponibilidad.",
  } as L,
  escrow: {
    en: "Off-plan purchases in Dubai are registered with the Dubai Land Department, and payments go into the project's escrow account, supervised by RERA. We follow each step with you.",
    pt: "Em Dubai, a compra na planta é registrada no Dubai Land Department e os pagamentos vão para a conta escrow do projeto, fiscalizada pela RERA. Acompanhamos cada etapa com você.",
    es: "En Dubái, la compra en preventa se registra en el Dubai Land Department y los pagos van a la cuenta escrow del proyecto, supervisada por la RERA. Le acompañamos en cada etapa.",
  } as L,
};
