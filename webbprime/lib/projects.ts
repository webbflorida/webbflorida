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

export const PROJECTS: Project[] = [
  {
    slug: "sunset-bay-grand",
    name: "Sunset Bay Grand",
    area: "Dubai Islands",
    permit: "[RERA permit]",
    from: { aed: "AED 2,467,484", usd: "US$ 672,000" },
    delivery: { en: "Q4 2027", pt: "4º tri 2027", es: "4T 2027" },
    plan: "20/30/50",
    short: {
      en: "Waterfront residences in Dubai Islands.",
      pt: "Residências frente ao mar em Dubai Islands.",
      es: "Residencias frente al mar en Dubai Islands.",
    },
    intro: {
      en: "Sunset Bay Grand is a waterfront development in Dubai Islands, with panoramic sea views and resort amenities. It suits buyers looking for a home to live in, spend seasons or rent out.",
      pt: "O Sunset Bay Grand é um empreendimento frente ao mar em Dubai Islands, com vista panorâmica e estrutura de resort. Atende quem quer morar, passar temporadas ou alugar.",
      es: "Sunset Bay Grand es un desarrollo frente al mar en Dubai Islands, con vista panorámica y amenidades de resort. Es para quien quiere vivir, pasar temporadas o alquilar.",
    },
    units: {
      en: "1-bedroom from AED 2,467,484 and 2-bedroom from AED 3,376,098. 3-bedroom duplexes with rooftop on request.",
      pt: "1 quarto a partir de AED 2.467.484 e 2 quartos a partir de AED 3.376.098. Duplex de 3 suítes com rooftop sob consulta.",
      es: "1 habitación desde AED 2.467.484 y 2 habitaciones desde AED 3.376.098. Dúplex de 3 suites con rooftop bajo consulta.",
    },
    highlights: {
      en: ["Waterfront location in Dubai Islands", "Panoramic sea views", "Pools, spa, gym and lounges", "Private parking for residents", "Payment plan during construction (20/30/50)"],
      pt: ["Frente ao mar em Dubai Islands", "Vista panorâmica para o mar", "Piscinas, spa, academia e lounges", "Estacionamento privativo para moradores", "Pagamento durante a obra (20/30/50)"],
      es: ["Frente al mar en Dubai Islands", "Vista panorámica al mar", "Piscinas, spa, gimnasio y lounges", "Estacionamiento privado para residentes", "Pago durante la obra (20/30/50)"],
    },
  },
  {
    slug: "azizi-milan",
    name: "Azizi Milan",
    area: "Dubai Land",
    permit: "[RERA permit]",
    from: { aed: "AED 738,000", usd: "US$ 201,000" },
    delivery: { en: "Q4 2029", pt: "4º tri 2029", es: "4T 2029" },
    plan: "50/50 · 60/40",
    short: {
      en: "Studios and 1-bedroom units in Dubai Land.",
      pt: "Studios e unidades de 1 quarto em Dubai Land.",
      es: "Estudios y unidades de 1 habitación en Dubai Land.",
    },
    intro: {
      en: "Azizi Milan is a master development in Dubai Land, one of the fastest-growing areas of the city, with quick access to the main highways. It suits investors looking for units that are easy to rent, with a medium to long-term view.",
      pt: "O Azizi Milan é um master development em Dubai Land, uma das regiões que mais crescem na cidade, com acesso rápido às principais vias. Atende investidores que buscam unidades de fácil locação, com visão de médio e longo prazo.",
      es: "Azizi Milan es un master development en Dubai Land, una de las zonas que más crecen en la ciudad, con acceso rápido a las principales vías. Es para inversionistas que buscan unidades fáciles de alquilar, con visión de mediano y largo plazo.",
    },
    units: {
      en: "Studios and 1-bedroom apartments with functional layouts.",
      pt: "Studios e apartamentos de 1 quarto com plantas funcionais.",
      es: "Estudios y apartamentos de 1 habitación con plantas funcionales.",
    },
    highlights: {
      en: ["Master development in Dubai Land", "Quick access to the main highways", "Area with strong residential demand", "Units suited to long-term rental"],
      pt: ["Master development em Dubai Land", "Acesso rápido às principais vias", "Região com forte demanda residencial", "Unidades indicadas para locação de longo prazo"],
      es: ["Master development en Dubai Land", "Acceso rápido a las principales vías", "Zona con fuerte demanda residencial", "Unidades indicadas para alquiler a largo plazo"],
    },
  },
];

export const P_UI = {
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
