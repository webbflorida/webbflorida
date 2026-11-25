import type { Locale } from "./site";

type L = Record<Locale, string>;

// Lançamentos em Miami vendidos direto pelas construtoras (Webb Florida Realty atua como corretora cooperadora).
// Dados SOMENTE do material enviado pela equipe de vendas de cada prédio (e-mails no Gmail do Ramon).
// Preços: conferir de novo antes de publicar e a cada semana; anotar a data em `checked`.
// Não usar "alto padrão". Não prometer valorização, renda de aluguel ou visto.
export type Development = {
  slug: string;
  name: string;
  area: L;
  status: L;
  from: number;
  fromNote?: L;
  facts: [L, L][];
  desc: L;
  prices: [L, string][];
  payment: [string, L][];
  features: L[];
  team: [L, string][];
  photos: { src: string; caption: L }[];
  render: boolean;
  checked: string;
  source: string; // de onde vieram os dados (nunca mostrar no site)
};

const t = (en: string, pt: string, es: string): L => ({ en, pt, es });

export const DEVELOPMENTS: Development[] = [
  {
    slug: "casa-bella",
    name: "Casa Bella Residences by B&B Italia",
    area: t("Arts & Entertainment District, Downtown Miami", "Arts & Entertainment District, Downtown Miami", "Arts & Entertainment District, Downtown Miami"),
    status: t("Building completed", "Prédio concluído", "Edificio terminado"),
    from: 1300000,
    facts: [
      [t("56", "56", "56"), t("Stories", "Andares", "Pisos")],
      [t("319", "319", "319"), t("Residences", "Residências", "Residencias")],
      [t("1 to 4", "1 a 4", "1 a 4"), t("Bedrooms", "Quartos", "Habitaciones")],
      [t("$1.10/sq ft", "US$ 1,10/sq ft", "US$ 1,10/sq ft"), t("HOA", "Condomínio", "Mantenimiento")],
    ],
    desc: t(
      "Residential tower with interiors by B&B Italia in the Arts & Entertainment District, close to the Pérez Art Museum, the Frost Museum of Science and the arena, and one block from the Adrienne Arsht Metromover station. Residences range from one to four bedrooms, with up to 5,893 sq ft of interior space and over 722 sq ft of terraces. The building is completed and the sales gallery is on site.",
      "Torre residencial com interiores da B&B Italia no Arts & Entertainment District, perto do Pérez Art Museum, do Frost Museum of Science e da arena, a uma quadra da estação Adrienne Arsht do Metromover. As residências vão de 1 a 4 quartos, com até 5.893 sq ft de área interna e mais de 722 sq ft de terraço. O prédio está concluído e a sala de vendas fica no próprio edifício.",
      "Torre residencial con interiores de B&B Italia en el Arts & Entertainment District, cerca del Pérez Art Museum, el Frost Museum of Science y la arena, a una cuadra de la estación Adrienne Arsht del Metromover. Las residencias van de 1 a 4 habitaciones, con hasta 5.893 sq ft interiores y más de 722 sq ft de terraza. El edificio está terminado y la sala de ventas está en el mismo edificio.",
    ),
    prices: [
      [t("1 bedroom", "1 quarto", "1 habitación"), "1300000"],
      [t("2 bedrooms", "2 quartos", "2 habitaciones"), "1700000"],
      [t("3 bedrooms", "3 quartos", "3 habitaciones"), "3000000"],
      [t("4 bedrooms", "4 quartos", "4 habitaciones"), "4000000"],
    ],
    payment: [
      ["20%", t("at contract", "na assinatura do contrato", "a la firma del contrato")],
      ["80%", t("at closing", "na escritura (closing)", "al cierre")],
    ],
    features: [
      t("Interiors by Lissoni & Partners", "Interiores de Lissoni & Partners", "Interiores de Lissoni & Partners"),
      t("Landscaping by Enzo Enea", "Paisagismo de Enzo Enea", "Paisajismo de Enzo Enea"),
      t("Rentals allowed: 30-day minimum, up to 12 times a year", "Aluguel permitido: mínimo de 30 dias, até 12 vezes por ano", "Alquiler permitido: mínimo 30 días, hasta 12 veces al año"),
      t("One block from the Metromover", "A uma quadra do Metromover", "A una cuadra del Metromover"),
    ],
    team: [
      [t("Developer", "Incorporadora", "Desarrollador"), "The Related Group e Alta Developers"],
      [t("Architect", "Arquitetura", "Arquitectura"), "Arquitectonica"],
      [t("Interiors", "Interiores", "Interiores"), "Lissoni & Partners"],
      [t("Landscaping", "Paisagismo", "Paisajismo"), "Enzo Enea"],
    ],
    photos: [],
    render: false,
    checked: "2026-11-23",
    source: "E-mail de Jennifer Lopez (sales director Casa Bella), 23/11/2026, fio Gmail 1a1f258afa02053c",
  },
  {
    slug: "jem-miami-worldcenter",
    name: "JEM Private Residences",
    area: t("Miami Worldcenter, Downtown Miami", "Miami Worldcenter, Downtown Miami", "Miami Worldcenter, Downtown Miami"),
    status: t("Under construction · Closing 2028", "Em construção · Entrega 2028", "En construcción · Entrega 2028"),
    from: 600000,
    fromNote: t("studios from the $600s", "studios a partir de US$ 600 mil", "estudios desde US$ 600 mil"),
    facts: [
      [t("67", "67", "67"), t("Stories", "Andares", "Pisos")],
      [t("274", "274", "274"), t("Residences", "Residências", "Residencias")],
      [t("Studio to 3", "Studio a 3", "Estudio a 3"), t("Bedrooms", "Quartos", "Habitaciones")],
      [t("$1.30/sq ft", "US$ 1,30/sq ft", "US$ 1,30/sq ft"), t("HOA", "Condomínio", "Mantenimiento")],
    ],
    desc: t(
      "Residential tower in Miami Worldcenter, in Downtown Miami. The residences occupy floors 43 to 67, from studios to three bedrooms and penthouses, and owners have access to a beach club service. The project is under construction, with closing planned for 2028.",
      "Torre residencial no Miami Worldcenter, em Downtown Miami. As residências ficam do 43º ao 67º andar, de studios a 3 quartos e coberturas, e os moradores têm acesso a um serviço de beach club. O prédio está em construção, com entrega prevista para 2028.",
      "Torre residencial en Miami Worldcenter, en Downtown Miami. Las residencias ocupan los pisos 43 a 67, de estudios a 3 habitaciones y penthouses, y los propietarios tienen acceso a un servicio de beach club. El proyecto está en construcción, con entrega prevista para 2028.",
    ),
    prices: [
      [t("Studio", "Studio", "Estudio"), "600000"],
      [t("Junior 1 bedroom", "Júnior 1 quarto", "Junior 1 habitación"), "800000"],
      [t("1 bedroom + den", "1 quarto + escritório", "1 habitación + estudio"), "1100000"],
      [t("2 bedrooms", "2 quartos", "2 habitaciones"), "1500000"],
      [t("3 bedrooms", "3 quartos", "3 habitaciones"), "1900000"],
    ],
    payment: [
      ["20%", t("at contract", "na assinatura do contrato", "a la firma del contrato")],
      ["10%", t("90 days after contract", "90 dias depois", "90 días después")],
      ["10%", t("at top-off", "no fim da estrutura (top-off)", "al terminar la estructura (top-off)")],
      ["60%", t("at closing (2028)", "na escritura (2028)", "al cierre (2028)")],
    ],
    features: [
      t("Residences on floors 43 to 67", "Residências do 43º ao 67º andar", "Residencias del piso 43 al 67"),
      t("Beach club service for owners", "Serviço de beach club para moradores", "Servicio de beach club para propietarios"),
      t("Interiors by Rockwell Group", "Interiores do Rockwell Group", "Interiores de Rockwell Group"),
      t("Penthouses available", "Coberturas disponíveis", "Penthouses disponibles"),
    ],
    team: [
      [t("Developer", "Incorporadora", "Desarrollador"), "Naftali Group"],
      [t("Architect", "Arquitetura", "Arquitectura"), "Arquitectonica"],
      [t("Interiors", "Interiores", "Interiores"), "Rockwell Group"],
      [t("Landscaping", "Paisagismo", "Paisajismo"), "EDSA"],
    ],
    photos: [],
    render: true,
    checked: "2026-11-18",
    source: "E-mail de Cristina Doldan (OWP Brokers, vendas JEM), 18/11/2026, fio Gmail 1a1f0f94fae0fbe1",
  },
  {
    slug: "st-regis-brickell",
    name: "The St. Regis Residences, Miami",
    area: t("South Brickell, on Biscayne Bay", "South Brickell, de frente para a Baía de Biscayne", "South Brickell, frente a la Bahía de Biscayne"),
    status: t("Under construction · Closing Q4 2027", "Em construção · Entrega no 4º tri de 2027", "En construcción · Entrega 4º trim. 2027"),
    from: 7260000,
    facts: [
      [t("50", "50", "50"), t("Stories", "Andares", "Pisos")],
      [t("152", "152", "152"), t("Residences", "Residências", "Residencias")],
      [t("2 to 5", "2 a 5", "2 a 5"), t("Bedrooms", "Quartos", "Habitaciones")],
      [t("10.5 ft", "3,2 m", "3,2 m"), t("Ceilings", "Pé-direito", "Altura de techo")],
    ],
    desc: t(
      "Bayfront tower in South Brickell with 152 residences, including penthouses and sky villas, designed by Robert A.M. Stern Architects with interiors by Rockwell Group. Each residence has a private elevator and entry foyer, 10.5 ft ceilings, a gas kitchen with Italian cabinetry, a powder room and a laundry room. Residents have St. Regis butler service, a private marina, beach club access and more than 50,000 sq ft of amenities.",
      "Torre de frente para a baía em South Brickell, com 152 residências, incluindo coberturas e sky villas, projeto de Robert A.M. Stern Architects e interiores do Rockwell Group. Cada residência tem elevador privativo e hall de entrada, pé-direito de 3,2 m, cozinha a gás com marcenaria italiana, lavabo e lavanderia. Os moradores têm serviço de mordomo St. Regis, marina privativa, acesso a beach club e mais de 50.000 sq ft de áreas comuns.",
      "Torre frente a la bahía en South Brickell, con 152 residencias, incluidos penthouses y sky villas, diseño de Robert A.M. Stern Architects e interiores de Rockwell Group. Cada residencia tiene ascensor privado y vestíbulo, techos de 3,2 m, cocina a gas con gabinetes italianos, medio baño y lavandería. Los residentes tienen servicio de mayordomo St. Regis, marina privada, acceso a beach club y más de 50.000 sq ft de amenidades.",
    ),
    prices: [
      [t("2 bedrooms", "2 quartos", "2 habitaciones"), "7260000"],
      [t("4 bedrooms", "4 quartos", "4 habitaciones"), "8590000"],
      [t("3 bedrooms", "3 quartos", "3 habitaciones"), "9290000"],
      [t("Sky villa, 5 bedrooms", "Sky villa, 5 quartos", "Sky villa, 5 habitaciones"), "24490000"],
    ],
    payment: [
      ["30%", t("at contract", "na assinatura do contrato", "a la firma del contrato")],
      ["10%", t("at top-off (Q4 2026)", "no fim da estrutura (4º tri de 2026)", "al terminar la estructura (4º trim. 2026)")],
      ["60%", t("at closing (Q4 2027)", "na escritura (4º tri de 2027)", "al cierre (4º trim. 2027)")],
    ],
    features: [
      t("St. Regis butler and housekeeping service", "Serviço de mordomo e governança St. Regis", "Servicio de mayordomo y limpieza St. Regis"),
      t("Private marina and beach club access", "Marina privativa e acesso a beach club", "Marina privada y acceso a beach club"),
      t("Private elevator and foyer in every residence", "Elevador privativo e hall em cada residência", "Ascensor privado y vestíbulo en cada residencia"),
      t("Restaurant by chef Fabio Trabocchi on the ground floor", "Restaurante do chef Fabio Trabocchi no térreo", "Restaurante del chef Fabio Trabocchi en la planta baja"),
      t("Indoor lap pool, spa, saunas and fitness center facing the bay", "Piscina coberta, spa, saunas e academia com vista para a baía", "Piscina techada, spa, saunas y gimnasio con vista a la bahía"),
      t("24-hour concierge and valet", "Concierge e manobrista 24 horas", "Conserje y valet 24 horas"),
    ],
    team: [
      [t("Architect", "Arquitetura", "Arquitectura"), "Robert A.M. Stern Architects (RAMSA)"],
      [t("Interiors", "Interiores", "Interiores"), "Rockwell Group"],
    ],
    photos: [
      { src: "/developments/st-regis-brickell/torre.jpg", caption: t("The tower on Biscayne Bay", "A torre na Baía de Biscayne", "La torre en la Bahía de Biscayne") },
      { src: "/developments/st-regis-brickell/piscina.jpg", caption: t("Pool deck facing the bay", "Piscina de frente para a baía", "Piscina frente a la bahía") },
      { src: "/developments/st-regis-brickell/cozinha.jpg", caption: t("Residence kitchen", "Cozinha de uma residência", "Cocina de una residencia") },
      { src: "/developments/st-regis-brickell/topo.jpg", caption: t("Top of the tower at sunset", "Topo da torre ao entardecer", "Parte alta de la torre al atardecer") },
    ],
    render: true,
    checked: "2026-11-12",
    source: "E-mail e price list de Olga Monson (vendas St. Regis), 19/11/2026, lista de preços de 12/11/2026, fio Gmail 1a1f258b628a9c54",
  },
];
