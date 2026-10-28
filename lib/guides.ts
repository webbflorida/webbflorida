import type { L } from "./content";

export type Guide = {
  slug: string;
  category: L;
  title: L;
  summary: L; // resposta direta de 2 a 3 frases, para Google e IAs
  reviewed: string; // ISO
  sections: { h: L; p: L }[];
};

export const GUIDES: Guide[] = [
  {
    slug: "buying-property-in-florida-as-a-foreigner",
    category: { en: "International buyers", pt: "Compradores internacionais", es: "Compradores internacionales" },
    title: {
      en: "Buying property in Florida as a foreigner: step by step",
      pt: "Como um estrangeiro compra imóvel na Flórida: passo a passo",
      es: "Cómo un extranjero compra una propiedad en Florida: paso a paso",
    },
    summary: {
      en: "Foreigners can buy property in Florida without a visa or green card, paying cash or with a foreign national loan. The process runs through an offer, an inspection period, a title company and closing, much of which can be done remotely. Buying does not grant a visa.",
      pt: "Estrangeiros podem comprar imóveis na Flórida sem visto ou green card, à vista ou com financiamento para estrangeiros. O processo passa por oferta, período de inspeção, title company e fechamento (closing), e boa parte pode ser feita à distância. A compra não dá direito a visto.",
      es: "Los extranjeros pueden comprar propiedades en Florida sin visa ni green card, al contado o con financiamiento para extranjeros. El proceso pasa por oferta, período de inspección, title company y cierre, y gran parte puede hacerse a distancia. La compra no otorga visa.",
    },
    reviewed: "2026-10-26",
    sections: [
      {
        h: { en: "1. Define goal and budget", pt: "1. Defina objetivo e orçamento", es: "1. Defina objetivo y presupuesto" },
        p: {
          en: "Decide whether the home is for living, renting or both. That choice changes the area, the type of property and the community rules you need. Include closing costs, insurance, property tax and HOA fees in the budget, not just the price.",
          pt: "Decida se o imóvel é para morar, alugar ou os dois. Essa escolha muda a região, o tipo de imóvel e as regras de condomínio que você precisa. Inclua no orçamento os custos de fechamento, seguro, property tax e taxa de condomínio (HOA), e não só o preço.",
          es: "Decida si la propiedad es para vivir, alquilar o ambas. Esa decisión cambia la zona, el tipo de propiedad y las reglas de la comunidad que necesita. Incluya en el presupuesto los costos de cierre, seguro, property tax y cuota de la asociación (HOA), no solo el precio.",
        },
      },
      {
        h: { en: "2. Cash or financing", pt: "2. À vista ou financiado", es: "2. Al contado o financiado" },
        p: {
          en: "Cash buyers show proof of funds. If you finance, look for lenders with foreign national programs; they usually ask for a larger down payment than for U.S. residents, along with bank statements and income documentation from your country.",
          pt: "Quem compra à vista apresenta comprovante de recursos. Para financiar, procure bancos com programas para estrangeiros. Eles costumam pedir uma entrada maior do que para residentes nos EUA, além de extratos e comprovação de renda do seu país.",
          es: "Quien compra al contado presenta prueba de fondos. Para financiar, busque bancos con programas para extranjeros. Suelen pedir un pago inicial mayor que a los residentes en EE. UU., además de estados de cuenta y comprobantes de ingresos de su país.",
        },
      },
      {
        h: { en: "3. Personal name or company", pt: "3. Pessoa física ou empresa", es: "3. Persona física o empresa" },
        p: {
          en: "Some buyers purchase in their own name, others through a company. The right structure depends on taxes in the United States and in your home country, so decide it with an accountant and an attorney before the offer.",
          pt: "Alguns compradores compram no próprio nome, outros por meio de uma empresa. A estrutura certa depende dos impostos nos EUA e no seu país, então decida com um contador e um advogado antes da oferta.",
          es: "Algunos compradores compran a su nombre, otros a través de una empresa. La estructura adecuada depende de los impuestos en EE. UU. y en su país, así que decídala con un contador y un abogado antes de la oferta.",
        },
      },
      {
        h: { en: "4. Offer and inspection", pt: "4. Oferta e inspeção", es: "4. Oferta e inspección" },
        p: {
          en: "Once the seller accepts your offer, you place an escrow deposit and the inspection period begins. A licensed inspector reviews the home, and you can renegotiate or cancel within the deadlines set in the contract.",
          pt: "Com a oferta aceita, você faz o depósito em garantia (escrow) e começa o período de inspeção. Um inspetor licenciado avalia o imóvel, e você pode renegociar ou desistir dentro dos prazos do contrato.",
          es: "Con la oferta aceptada, usted hace el depósito en garantía (escrow) y empieza el período de inspección. Un inspector con licencia revisa la propiedad, y usted puede renegociar o desistir dentro de los plazos del contrato.",
        },
      },
      {
        h: { en: "5. Title and closing", pt: "5. Title company e fechamento", es: "5. Title company y cierre" },
        p: {
          en: "A title company checks that the property is free of liens, issues title insurance and runs the closing. Documents can often be signed remotely, and funds are wired to the title company's escrow account.",
          pt: "A title company confere se o imóvel está livre de dívidas, emite o seguro do título e conduz o fechamento. Muitas vezes os documentos podem ser assinados à distância, e o dinheiro é enviado para a conta de garantia da title company.",
          es: "La title company verifica que la propiedad esté libre de deudas, emite el seguro de título y conduce el cierre. A menudo los documentos pueden firmarse a distancia, y los fondos se envían a la cuenta de garantía de la title company.",
        },
      },
      {
        h: { en: "6. After you buy", pt: "6. Depois da compra", es: "6. Después de la compra" },
        p: {
          en: "Plan for insurance, property tax and, if you rent, a property manager and rental tax registration. When a foreign owner sells in the future, the buyer generally must withhold part of the price under FIRPTA, which your accountant can help you plan for.",
          pt: "Programe seguro, property tax e, se for alugar, administração e registro para os impostos de aluguel. Quando um proprietário estrangeiro vende no futuro, em geral o comprador precisa reter parte do preço pela lei FIRPTA. Seu contador pode ajudar nesse planejamento.",
          es: "Planifique el seguro, el property tax y, si va a alquilar, la administración y el registro para impuestos de alquiler. Cuando un propietario extranjero vende en el futuro, en general el comprador debe retener parte del precio según la ley FIRPTA. Su contador puede ayudarle a planificarlo.",
        },
      },
    ],
  },
  {
    slug: "windermere-lake-nona-or-dr-phillips",
    category: { en: "Areas", pt: "Regiões", es: "Zonas" },
    title: {
      en: "Windermere, Lake Nona or Dr. Phillips: where to live in Orlando",
      pt: "Windermere, Lake Nona ou Dr. Phillips: onde morar em Orlando",
      es: "Windermere, Lake Nona o Dr. Phillips: dónde vivir en Orlando",
    },
    summary: {
      en: "Windermere suits buyers who want lakes, large lots and established gated communities. Lake Nona suits those who prefer newer homes, sports and quick airport access. Dr. Phillips suits those who want a central location, dining and golf.",
      pt: "Windermere combina com quem quer lagos, terrenos amplos e condomínios fechados consolidados. Lake Nona, com quem prefere casas mais novas, esporte e acesso rápido ao aeroporto. Dr. Phillips, com quem quer localização central, restaurantes e golfe.",
      es: "Windermere es ideal para quien busca lagos, terrenos amplios y comunidades cerradas consolidadas. Lake Nona, para quien prefiere casas más nuevas, deporte y acceso rápido al aeropuerto. Dr. Phillips, para quien quiere ubicación central, restaurantes y golf.",
    },
    reviewed: "2026-10-26",
    sections: [
      {
        h: { en: "Windermere", pt: "Windermere", es: "Windermere" },
        p: {
          en: "Built around the Butler Chain of Lakes, Windermere offers lakefront estates and gated communities such as Isleworth and Keene's Pointe. It is quieter and more private, with Dr. Phillips' restaurants and shops a short drive away.",
          pt: "Construída em torno do Butler Chain of Lakes, Windermere tem mansões à beira de lagos e condomínios fechados como Isleworth e Keene's Pointe. É mais tranquila e reservada, com os restaurantes e lojas de Dr. Phillips a poucos minutos.",
          es: "Construida alrededor del Butler Chain of Lakes, Windermere ofrece residencias frente a lagos y comunidades cerradas como Isleworth y Keene's Pointe. Es más tranquila y reservada, con los restaurantes y tiendas de Dr. Phillips a pocos minutos.",
        },
      },
      {
        h: { en: "Lake Nona", pt: "Lake Nona", es: "Lake Nona" },
        p: {
          en: "Lake Nona is a planned community with newer construction, a medical and research district and the USTA National Campus. It is close to Orlando International Airport, which matters for families who travel often.",
          pt: "Lake Nona é um bairro planejado, com construções mais novas, um polo médico e de pesquisa e o USTA National Campus. Fica perto do Aeroporto Internacional de Orlando, o que pesa para famílias que viajam com frequência.",
          es: "Lake Nona es una comunidad planificada, con construcciones más nuevas, un polo médico y de investigación y el USTA National Campus. Está cerca del Aeropuerto Internacional de Orlando, algo importante para familias que viajan a menudo.",
        },
      },
      {
        h: { en: "Dr. Phillips", pt: "Dr. Phillips", es: "Dr. Phillips" },
        p: {
          en: "Dr. Phillips sits at the center of it all: Restaurant Row on Sand Lake Road, the Bay Hill Club and quick access to the theme parks and downtown.",
          pt: "Dr. Phillips fica no centro de tudo: a Restaurant Row da Sand Lake Road, o Bay Hill Club e acesso rápido aos parques e ao centro.",
          es: "Dr. Phillips está en el centro de todo: Restaurant Row en Sand Lake Road, el Bay Hill Club y acceso rápido a los parques y al centro.",
        },
      },
      {
        h: { en: "How to choose", pt: "Como escolher", es: "Cómo elegir" },
        p: {
          en: "Start with how you want to live: on the water or near the golf course, close to restaurants or in a quiet gated community, with easy access to schools and the airport. Then visit at the times of your real day-to-day. We prepare a side-by-side comparison of homes in each area for your budget.",
          pt: "Comece pelo estilo de vida que você quer: à beira de um lago ou perto do golfe, perto dos restaurantes ou num condomínio tranquilo, com acesso fácil às escolas e ao aeroporto. Depois visite nos horários do seu dia a dia. Preparamos uma comparação lado a lado de imóveis em cada região dentro do seu orçamento.",
          es: "Empiece por el estilo de vida que busca: frente a un lago o cerca del golf, cerca de los restaurantes o en una comunidad tranquila, con fácil acceso a las escuelas y al aeropuerto. Luego visite en los horarios de su día a día. Preparamos una comparación lado a lado de propiedades en cada zona dentro de su presupuesto.",
        },
      },
    ],
  },
];
