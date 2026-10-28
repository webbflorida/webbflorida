import type { Locale } from "./site";

export type L = Record<Locale, string>;
export type LL = Record<Locale, string[]>;

/* ---------------- Home ---------------- */

export const HOME = {
  metaTitle: {
    en: "Webb Florida Realty | High-End Real Estate Advisory in Orlando & Miami",
    pt: "Webb Florida Realty | Consultoria imobiliária de alto padrão em Orlando e Miami",
    es: "Webb Florida Realty | Asesoría inmobiliaria de alto nivel en Orlando y Miami",
  } as L,
  metaDescription: {
    en: "Webb Florida Realty advises buyers, sellers and investors on high-end homes in Orlando and Miami, with service in English, Portuguese and Spanish.",
    pt: "A Webb Florida Realty assessora compradores, vendedores e investidores em imóveis de alto padrão em Orlando e Miami, com atendimento em português, inglês e espanhol.",
    es: "Webb Florida Realty asesora a compradores, vendedores e inversionistas en propiedades de alto nivel en Orlando y Miami, con atención en español, inglés y portugués.",
  } as L,
  eyebrow: { en: "Orlando • Miami", pt: "Orlando • Miami", es: "Orlando • Miami" } as L,
  title: {
    en: "Beyond the closing.",
    pt: "Beyond the closing.",
    es: "Beyond the closing.",
  } as L,
  lead: {
    en: "Buying, selling and managing homes in Orlando and Miami.",
    pt: "Compra, venda e administração de imóveis em Orlando e Miami.",
    es: "Compra, venta y administración de propiedades en Orlando y Miami.",
  } as L,
  pillarsTitle: {
    en: "How we work",
    pt: "Como trabalhamos",
    es: "Cómo trabajamos",
  } as L,
  pillars: [
    {
      t: { en: "A short list, not a catalog", pt: "Poucas opções, bem escolhidas", es: "Pocas opciones, bien elegidas" } as L,
      d: {
        en: "We study your goals first, then present a small selection of homes worth your time, with the trade-offs explained.",
        pt: "Primeiro entendemos seu objetivo. Depois apresentamos uma seleção curta de imóveis que valem a sua visita, com prós e contras explicados.",
        es: "Primero entendemos su objetivo. Luego presentamos una selección corta de propiedades que valen su visita, con pros y contras explicados.",
      } as L,
    },
    {
      t: { en: "Your language, every step", pt: "No seu idioma, em cada etapa", es: "En su idioma, en cada etapa" } as L,
      d: {
        en: "Offers, inspections, title and closing explained in English, Portuguese or Spanish, without jargon.",
        pt: "Oferta, inspeção, title company e fechamento explicados em português, inglês ou espanhol, sem jargão.",
        es: "Oferta, inspección, title company y cierre explicados en español, inglés o portugués, sin tecnicismos.",
      } as L,
    },
    {
      t: { en: "A trusted network", pt: "Uma rede de confiança", es: "Una red de confianza" } as L,
      d: {
        en: "Introductions to lenders, attorneys and accountants who work with international clients.",
        pt: "Indicação de bancos, advogados e contadores acostumados a clientes internacionais.",
        es: "Contacto con bancos, abogados y contadores acostumbrados a clientes internacionales.",
      } as L,
    },
    {
      t: { en: "Remote when you need it", pt: "À distância, quando precisar", es: "A distancia, cuando lo necesite" } as L,
      d: {
        en: "Video tours, digital signatures and closing coordination for clients who live abroad.",
        pt: "Visitas por vídeo, assinatura digital e fechamento coordenado para quem mora fora dos EUA.",
        es: "Visitas por video, firma digital y cierre coordinado para quienes viven fuera de EE. UU.",
      } as L,
    },
  ],
  listingsTitle: { en: "Selected homes", pt: "Imóveis selecionados", es: "Propiedades seleccionadas" } as L,
  listingsSoon: {
    en: "Our curated selection and full MLS search are being connected. In the meantime, tell us what you are looking for and we will send a private shortlist.",
    pt: "A nossa seleção e a busca completa na MLS estão sendo conectadas. Enquanto isso, conte o que procura e enviamos uma seleção privada.",
    es: "Nuestra selección y la búsqueda completa en la MLS se están conectando. Mientras tanto, cuéntenos qué busca y le enviamos una selección privada.",
  } as L,
  servicesTitle: { en: "Advisory", pt: "Assessoria", es: "Asesoría" } as L,
  areasTitle: { en: "Where we work", pt: "Onde atuamos", es: "Dónde trabajamos" } as L,
  guidesTitle: { en: "Webb Guides", pt: "Guias Webb", es: "Guías Webb" } as L,
  faqTitle: { en: "Frequent questions", pt: "Perguntas frequentes", es: "Preguntas frecuentes" } as L,
  familyTitle: { en: "Our story", pt: "Nossa história", es: "Nuestra historia" } as L,
  familyHeading: {
    en: "Local knowledge. Global vision.",
    pt: "Conhecimento local. Visão global.",
    es: "Conocimiento local. Visión global.",
  } as L,
  familyStory: [
    {
      en: "Webb's story began in Brazil in 2008, with a simple dream: to bring people closer to the right home. At a time when few agencies were online, Webb was one of the pioneers in presenting its properties on the internet.",
      pt: "A história da Webb começou no Brasil, em 2008, com um sonho simples: aproximar as pessoas do imóvel certo. Em uma época em que poucas imobiliárias estavam presentes na internet, a Webb foi uma das pioneiras a apresentar seus imóveis online.",
      es: "La historia de Webb comenzó en Brasil, en 2008, con un sueño sencillo: acercar a las personas al hogar adecuado. En una época en que pocas inmobiliarias estaban en internet, Webb fue una de las pioneras en presentar sus propiedades online.",
    } as L,
    {
      en: "In 2015, Webb arrived in Florida, in Orlando and Miami. With direct flights from Brazil, Florida offers what many families look for: quality of life, safety, good schools and sunshine all year round, along with a solid real estate market for those who want to live or invest in the United States.",
      pt: "Em 2015, a Webb chegou à Flórida, em Orlando e Miami. Com voos diretos do Brasil, a Flórida reúne o que muitas famílias buscam: qualidade de vida, segurança, boas escolas e sol o ano inteiro, além de um mercado imobiliário sólido para quem quer morar ou investir nos Estados Unidos.",
      es: "En 2015, Webb llegó a Florida, a Orlando y Miami. Con vuelos directos desde Brasil, Florida reúne lo que muchas familias buscan: calidad de vida, seguridad, buenas escuelas y sol todo el año, además de un mercado inmobiliario sólido para quienes quieren vivir o invertir en Estados Unidos.",
    } as L,
    {
      en: "In 2025, Webb opened a new chapter in Dubai, in the United Arab Emirates. The city has become one of the most sought-after destinations for investors worldwide, with safety, stability, world-class infrastructure and no personal income tax. For our clients, it is a way to diversify their wealth on a third continent.",
      pt: "Em 2025, a Webb abriu um novo capítulo em Dubai, nos Emirados Árabes Unidos. A cidade se tornou um dos destinos mais procurados por investidores do mundo todo, com segurança, estabilidade, infraestrutura de primeiro nível e sem imposto de renda para pessoa física. Para nossos clientes, é uma forma de diversificar o patrimônio em um terceiro continente.",
      es: "En 2025, Webb abrió un nuevo capítulo en Dubái, en los Emiratos Árabes Unidos. La ciudad se ha convertido en uno de los destinos más buscados por inversionistas de todo el mundo, con seguridad, estabilidad, infraestructura de primer nivel y sin impuesto sobre la renta para personas físicas. Para nuestros clientes, es una forma de diversificar su patrimonio en un tercer continente.",
    } as L,
  ],
  familyBrands: [
    { place: { en: "Brazil", pt: "Brasil", es: "Brasil" } as L, name: "Webb Imóveis", note: { en: "Since 2008", pt: "Desde 2008", es: "Desde 2008" } as L },
    { place: { en: "Florida", pt: "Flórida", es: "Florida" } as L, name: "Webb Florida Realty", note: { en: "Since 2015", pt: "Desde 2015", es: "Desde 2015" } as L },
    { place: { en: "United Arab Emirates", pt: "Emirados Árabes Unidos", es: "Emiratos Árabes Unidos" } as L, name: "Webb Real Estate", note: { en: "Since 2025", pt: "Desde 2025", es: "Desde 2025" } as L },
  ] as { place: L; name: string; note: L | null }[],
  family: {
    en: "Webb has been in real estate since 2008: Webb Imóveis in Brazil, Webb Florida Realty in Orlando and Miami since 2015, and Webb Real Estate in Dubai.",
    pt: "A Webb está no mercado imobiliário desde 2008: Webb Imóveis no Brasil, Webb Florida Realty em Orlando e Miami desde 2015 e Webb Real Estate em Dubai.",
    es: "Webb está en el mercado inmobiliario desde 2008: Webb Imóveis en Brasil, Webb Florida Realty en Orlando y Miami desde 2015 y Webb Real Estate en Dubái.",
  } as L,
  /* Home boutique (27/10): menos blocos, mais texto editorial. */
  statement: {
    en: "Tailored service, from start to finish.",
    pt: "Atendimento sob medida, do início ao fim.",
    es: "Atención a medida, de principio a fin.",
  } as L,
  statementBody: {
    en: "From the first conversation to the closing, and beyond.",
    pt: "Do primeiro contato ao fechamento, e depois dele.",
    es: "Del primer contacto al cierre, y después de él.",
  } as L,
  principles: [
    { en: "Homes selected around your goals", pt: "Imóveis selecionados de acordo com seus objetivos", es: "Propiedades seleccionadas según sus objetivos" } as L,
    { en: "Close guidance at every step", pt: "Acompanhamento próximo em cada etapa", es: "Acompañamiento cercano en cada etapa" } as L,
    { en: "A network of trusted professionals", pt: "Uma rede de profissionais de confiança", es: "Una red de profesionales de confianza" } as L,
  ],
  marketsTitle: { en: "Where we work", pt: "Onde atuamos", es: "Dónde trabajamos" } as L,
  marketsText: {
    Orlando: {
      en: "Family, space and quality of life.",
      pt: "Família, espaço e qualidade de vida.",
      es: "Familia, espacio y calidad de vida.",
    } as L,
    Miami: {
      en: "The sea, sophistication and an international life.",
      pt: "Mar, sofisticação e vida internacional.",
      es: "Mar, sofisticación y vida internacional.",
    } as L,
  } as Record<string, L>,
  journal: { en: "Journal", pt: "Journal", es: "Journal" } as L,
  privateTitle: {
    en: "A private conversation",
    pt: "Uma conversa reservada",
    es: "Una conversación reservada",
  } as L,
  closingTitle: {
    en: "Start with a conversation",
    pt: "Comece por uma conversa",
    es: "Empiece con una conversación",
  } as L,
  closing: {
    en: "Tell us what you are looking for. Ramon replies personally, in full confidence.",
    pt: "Conte o que você procura. Ramon responde pessoalmente, com total confidencialidade.",
    es: "Cuéntenos qué busca. Ramon responde personalmente, con total confidencialidad.",
  } as L,
};

/* ---------------- Services (audiences) ---------------- */

export type Service = {
  slug: string;
  name: L;
  short: L;
  intro: L;
  points: LL;
  questions: { q: L; a: L }[];
  tips?: { t: L; d: L }[];
};

export const SERVICES: Service[] = [
  {
    slug: "investors",
    name: { en: "Investment", pt: "Investimento", es: "Inversión" },
    short: {
      en: "Return, risk and liquidity of every property, with clear numbers.",
      pt: "Retorno, risco e liquidez de cada imóvel, com números claros.",
      es: "Retorno, riesgo y liquidez de cada propiedad, con números claros.",
    },
    intro: {
      en: "We treat every property as an investment: we project income, costs and appreciation before any offer, and we manage the property after the purchase.",
      pt: "Tratamos cada imóvel como um investimento: projetamos receita, custos e valorização antes de qualquer oferta, e administramos o imóvel depois da compra.",
      es: "Tratamos cada propiedad como una inversión: proyectamos ingresos, costos y valorización antes de cualquier oferta, y administramos la propiedad después de la compra.",
    },
    points: {
      en: [
        "Analysis of each property: estimated rent, fixed costs and net return",
        "Annual versus short-term rental, where zoning allows",
        "Market reading: supply, days on market and price history of the area",
        "Purchase structure (personal or LLC) defined with your accountant and attorney",
        "Property management by Webb after the purchase",
      ],
      pt: [
        "Análise de cada imóvel: aluguel estimado, custos fixos e retorno líquido",
        "Comparação entre aluguel anual e por temporada, onde o zoneamento permite",
        "Leitura do mercado: oferta, tempo de venda e histórico de preços da região",
        "Estrutura de compra (pessoa física ou LLC) definida com seu contador e advogado",
        "Administração do imóvel pela própria Webb depois da compra",
      ],
      es: [
        "Análisis de cada propiedad: alquiler estimado, costos fijos y retorno neto",
        "Comparación entre alquiler anual y vacacional, donde la zonificación lo permite",
        "Lectura del mercado: oferta, tiempo de venta e historial de precios de la zona",
        "Estructura de compra (persona física o LLC) definida con su contador y abogado",
        "Administración de la propiedad por Webb después de la compra",
      ],
    },
    questions: [
      {
        q: { en: "Can I rent my home short-term?", pt: "Posso alugar meu imóvel por temporada?", es: "¿Puedo alquilar mi propiedad por temporadas?" },
        a: {
          en: "Only where city or county zoning and the community's rules allow it. We confirm both before you make an offer.",
          pt: "Só onde o zoneamento da cidade ou do condado e as regras do condomínio permitem. Confirmamos os dois antes da oferta.",
          es: "Solo donde la zonificación de la ciudad o del condado y las reglas de la comunidad lo permiten. Confirmamos ambos antes de la oferta.",
        },
      },
    ],
  },
  {
    slug: "relocation",
    name: { en: "Living in Florida", pt: "Viver na Flórida", es: "Vivir en Florida" },
    short: {
      en: "What to consider before moving to Florida.",
      pt: "O que considerar antes de se mudar para a Flórida.",
      es: "Qué considerar antes de mudarse a Florida.",
    },
    intro: {
      en: "We build the complete plan with you: neighborhoods, video tours and a purchase timed to your move.",
      pt: "Montamos o plano completo com você: bairros, visitas por vídeo e a compra no prazo da sua mudança.",
      es: "Armamos el plan completo con usted: barrios, visitas por video y la compra en el plazo de su mudanza.",
    },
    tips: [
      {
        t: { en: "Plan your visa", pt: "Planeje o seu visto", es: "Planifique su visa" },
        d: {
          en: "The type of visa shapes the timing of the move, the financing and even the choice of home. An immigration attorney can show the best path for your case.",
          pt: "O tipo de visto define o prazo da mudança, o financiamento e até a escolha do imóvel. Um advogado de imigração indica o melhor caminho para o seu caso.",
          es: "El tipo de visa define el plazo de la mudanza, el financiamiento e incluso la elección de la propiedad. Un abogado de inmigración indica el mejor camino para su caso.",
        },
      },
      {
        t: { en: "Choose the area by your routine", pt: "Escolha a região pela sua rotina", es: "Elija la zona según su rutina" },
        d: {
          en: "Work, school, leisure, the airport: the right location depends on the daily life you want.",
          pt: "Trabalho, escola, lazer, aeroporto: a localização certa depende da rotina que você quer ter.",
          es: "Trabajo, escuela, ocio, aeropuerto: la ubicación correcta depende de la rutina que quiere tener.",
        },
      },
      {
        t: { en: "Get your documents ready", pt: "Prepare a documentação antes", es: "Prepare la documentación antes" },
        d: {
          en: "Passport, proof of income and source of funds: having everything ready speeds up the purchase and the financing.",
          pt: "Passaporte, comprovação de renda e origem dos recursos: ter tudo pronto agiliza a compra e o financiamento.",
          es: "Pasaporte, comprobante de ingresos y origen de los fondos: tener todo listo agiliza la compra y el financiamiento.",
        },
      },
      {
        t: { en: "US credit history", pt: "Histórico de crédito nos EUA", es: "Historial de crédito en EE. UU." },
        d: {
          en: "US credit history influences financing, leases and insurance. We recommend opening a US bank account and credit card in advance.",
          pt: "O crédito americano influencia financiamento, locação e seguros. Recomendamos abrir conta e cartão nos EUA com antecedência.",
          es: "El crédito estadounidense influye en el financiamiento, el alquiler y los seguros. Recomendamos abrir cuenta y tarjeta en EE. UU. con anticipación.",
        },
      },
      {
        t: { en: "Tax planning", pt: "Planejamento tributário", es: "Planificación tributaria" },
        d: {
          en: "The move changes your tax obligations at home and in the US. An accountant who works in both countries should guide this process before you move.",
          pt: "A mudança altera suas obrigações fiscais no Brasil e nos EUA. Um contador com atuação nos dois países deve orientar esse processo antes da mudança.",
          es: "La mudanza cambia sus obligaciones fiscales en su país y en EE. UU. Un contador con actuación en ambos países debe orientar este proceso antes de la mudanza.",
        },
      },
    ],
    points: {
      en: [
        "Neighborhood shortlist matched to your routine",
        "Video tours before you travel",
        "Support with movers, utilities and insurance",
      ],
      pt: [
        "Seleção de bairros de acordo com a sua rotina",
        "Visitas por vídeo antes da viagem",
        "Apoio com mudança, contas de serviços e seguro",
      ],
      es: [
        "Selección de barrios según su rutina",
        "Visitas por video antes del viaje",
        "Apoyo con mudanza, servicios y seguro",
      ],
    },
    questions: [],
  },
  {
    slug: "international",
    name: { en: "Buying from abroad", pt: "Compra internacional", es: "Compra internacional" },
    short: {
      en: "Buying from abroad, explained step by step.",
      pt: "Comprar de fora dos EUA, explicado passo a passo.",
      es: "Comprar desde el exterior, explicado paso a paso.",
    },
    intro: {
      en: "Foreign nationals can buy property in the United States, with cash or with financing. We guide every step, from choosing the home to the closing, even if you are outside the country.",
      pt: "Estrangeiros podem comprar imóveis nos Estados Unidos, à vista ou com financiamento. Conduzimos cada etapa, da escolha do imóvel ao fechamento, mesmo que você esteja fora do país.",
      es: "Los extranjeros pueden comprar propiedades en Estados Unidos, al contado o con financiamiento. Conducimos cada etapa, desde la elección de la propiedad hasta el cierre, aunque usted esté fuera del país.",
    },
    points: {
      en: [
        "Financing with lenders that work with foreign nationals",
        "Secure transfer of funds to the title company",
        "Remote signing and closing",
        "The documents needed at each step",
        "Purchase in your own name or through an LLC, aligned with your accountant",
      ],
      pt: [
        "Financiamento com bancos que atendem estrangeiros",
        "Envio seguro dos recursos para a title company",
        "Assinatura e fechamento à distância",
        "Documentos necessários em cada etapa",
        "Compra em nome próprio ou por LLC, alinhada com o seu contador",
      ],
      es: [
        "Financiamiento con bancos que atienden a extranjeros",
        "Envío seguro de los fondos a la title company",
        "Firma y cierre a distancia",
        "Documentos necesarios en cada etapa",
        "Compra a su nombre o mediante una LLC, alineada con su contador",
      ],
    },
    questions: [
      {
        q: { en: "Can I get a mortgage without living in the U.S.?", pt: "Consigo financiar sem morar nos EUA?", es: "¿Puedo financiar sin vivir en EE. UU.?" },
        a: {
          en: "Yes, through foreign national loan programs. The down payment usually ranges from 25% to 40% of the price, and a U.S. credit history is not required. Lenders typically ask for a passport, proof of income, bank statements, reserves to cover several months of payments and a reference letter from your bank.",
          pt: "Sim, por meio de programas de financiamento para estrangeiros. A entrada costuma ficar entre 25% e 40% do valor do imóvel, e não é preciso ter histórico de crédito nos EUA. Os bancos geralmente pedem passaporte, comprovação de renda, extratos bancários, reservas para alguns meses de parcelas e uma carta de referência do seu banco.",
          es: "Sí, mediante programas de financiamiento para extranjeros. El pago inicial suele estar entre el 25% y el 40% del valor de la propiedad, y no se necesita historial de crédito en EE. UU. Los bancos suelen pedir pasaporte, comprobantes de ingresos, estados de cuenta, reservas para varios meses de cuotas y una carta de referencia de su banco.",
        },
      },
      {
        q: { en: "How do the funds reach the closing?", pt: "Como o dinheiro chega ao fechamento?", es: "¿Cómo llegan los fondos al cierre?" },
        a: {
          en: "The funds go by international wire to an escrow account at the title company, a neutral party that holds the money until closing. The initial deposit is sent a few days after the contract is signed, and the balance shortly before closing. The seller is paid only once the deed is transferred to you. International wires can take a few business days, so it is best to plan ahead. Before each transfer, confirm the wiring instructions by phone with the title company, to avoid fraud.",
          pt: "Os recursos são enviados por transferência internacional para uma conta escrow da title company, uma empresa neutra que guarda o dinheiro até o fechamento. O depósito inicial é feito poucos dias após a assinatura do contrato, e o restante pouco antes do fechamento. O vendedor só recebe depois que a escritura é transferida para você. Como a transferência internacional pode levar alguns dias úteis, o ideal é se programar com antecedência. Antes de cada envio, confirme os dados bancários por telefone com a title company, para evitar fraudes.",
          es: "Los fondos se envían por transferencia internacional a una cuenta escrow de la title company, una empresa neutral que custodia el dinero hasta el cierre. El depósito inicial se hace pocos días después de firmar el contrato, y el saldo poco antes del cierre. El vendedor recibe el pago solo después de que la escritura se transfiere a usted. Como la transferencia internacional puede tardar algunos días hábiles, conviene planificar con antelación. Antes de cada envío, confirme los datos bancarios por teléfono con la title company, para evitar fraudes.",
        },
      },
      {
        q: { en: "Do I need to be in Florida for the closing?", pt: "Preciso estar na Flórida no fechamento?", es: "¿Necesito estar en Florida para el cierre?" },
        a: {
          en: "No. The documents can be signed remotely, with online notarization or at a U.S. consulate.",
          pt: "Não. Os documentos podem ser assinados à distância, com notarização online ou em um consulado americano.",
          es: "No. Los documentos pueden firmarse a distancia, con notarización en línea o en un consulado estadounidense.",
        },
      },
      {
        q: { en: "What happens when I sell?", pt: "E quando eu vender?", es: "¿Y cuando venda?" },
        a: {
          en: "When a foreign national sells, a portion of the sale price is generally withheld for the IRS (FIRPTA) until the tax return is filed. Your accountant can review your case.",
          pt: "Na venda por um estrangeiro, em regra uma parte do valor é retida para a Receita americana (FIRPTA) até a declaração de imposto. O seu contador avalia o seu caso.",
          es: "Cuando un extranjero vende, en general se retiene una parte del valor para el IRS (FIRPTA) hasta la declaración de impuestos. Su contador evaluará su caso.",
        },
      },
      {
        q: { en: "Does buying a home give me a visa?", pt: "Comprar um imóvel me dá visto?", es: "¿Comprar una propiedad me da visa?" },
        a: {
          en: "No. Buying real estate does not by itself grant a visa or residency. Consult an immigration attorney about your case.",
          pt: "Não. A compra de um imóvel, por si só, não dá visto nem residência. Procure um advogado de imigração para avaliar o seu caso.",
          es: "No. La compra de una propiedad, por sí sola, no otorga visa ni residencia. Consulte a un abogado de inmigración sobre su caso.",
        },
      },
    ],
  },
  {
    slug: "private-clients",
    name: { en: "Private Client", pt: "Private Client", es: "Private Client" },
    short: {
      en: "Privacy and reserved service at every step of the purchase.",
      pt: "Privacidade e atendimento reservado em cada etapa da compra.",
      es: "Privacidad y atención reservada en cada etapa de la compra.",
    },
    intro: {
      en: "For those who value privacy, we handle the whole search confidentially, with private showings and a single point of contact.",
      pt: "Para quem valoriza privacidade, conduzimos toda a busca de forma confidencial, com visitas reservadas e um único ponto de contato.",
      es: "Para quienes valoran la privacidad, llevamos toda la búsqueda de forma confidencial, con visitas privadas y un único punto de contacto.",
    },
    points: {
      en: [
        "Confidential search, including off-market homes when available",
        "Private showings and gated communities",
        "Coordination with your attorneys and family office",
        "Homes that fit your lifestyle: privacy, leisure, travel and family",
      ],
      pt: [
        "Busca confidencial, inclusive imóveis fora do mercado quando houver",
        "Visitas reservadas e condomínios fechados",
        "Alinhamento com seus advogados e family office",
        "Imóveis que combinam com seu estilo de vida: privacidade, lazer, viagens e família",
      ],
      es: [
        "Búsqueda confidencial, incluso propiedades fuera del mercado cuando las haya",
        "Visitas privadas y comunidades cerradas",
        "Coordinación con sus abogados y family office",
        "Propiedades acordes a su estilo de vida: privacidad, ocio, viajes y familia",
      ],
    },
    questions: [],
  },
  {
    slug: "owners",
    name: { en: "Sales and leasing", pt: "Venda e locação", es: "Venta y alquiler" },
    short: {
      en: "For those who already own a property in Orlando or Miami: sell, rent or leave it in good hands.",
      pt: "Para quem já tem imóvel em Orlando ou Miami: vender, alugar ou deixar em boas mãos.",
      es: "Para quienes ya tienen una propiedad en Orlando o Miami: vender, alquilar o dejarla en buenas manos.",
    },
    intro: {
      en: "Owning property in Florida while living elsewhere takes a trusted partner on the ground. We help you decide the best next step for your property, with clear numbers and no pressure.",
      pt: "Ter um imóvel na Flórida morando em outro lugar pede um parceiro de confiança aqui. Ajudamos você a decidir o melhor próximo passo para o seu imóvel, com números claros e sem pressão.",
      es: "Tener una propiedad en Florida viviendo en otro lugar requiere un socio de confianza aquí. Le ayudamos a decidir el mejor próximo paso para su propiedad, con números claros y sin presión.",
    },
    points: {
      en: [
        "Market valuation with recent comparable sales",
        "Sale with professional photos and video, and MLS exposure",
        "Negotiation and support through closing",
        "Annual or seasonal rental, where allowed",
        "Property management while you are away",
      ],
      pt: [
        "Avaliação de mercado com vendas comparáveis recentes",
        "Venda com fotos e vídeo profissionais e divulgação no MLS",
        "Negociação e acompanhamento até o fechamento",
        "Aluguel anual ou por temporada, onde for permitido",
        "Administração do imóvel enquanto você está longe",
      ],
      es: [
        "Valuación de mercado con ventas comparables recientes",
        "Venta con fotos y video profesionales y difusión en el MLS",
        "Negociación y seguimiento hasta el cierre",
        "Alquiler anual o vacacional, donde esté permitido",
        "Administración de la propiedad mientras usted está lejos",
      ],
    },
    questions: [],
  },
  {
    slug: "property-management",
    name: { en: "Property management", pt: "Administração de imóveis", es: "Administración de propiedades" },
    short: {
      en: "Full management of your property: leasing, maintenance and monthly owner statements.",
      pt: "Administração completa do seu imóvel: locação, manutenção e prestação de contas mensal.",
      es: "Administración integral de su propiedad: alquiler, mantenimiento y rendición de cuentas mensual.",
    },
    intro: {
      en: "For owners who live outside Orlando or Miami, we take care of the day to day: tenants, rent, maintenance and the condition of the property. You follow everything from a distance.",
      pt: "Para proprietários que moram fora de Orlando ou Miami, cuidamos do dia a dia: inquilinos, aluguel, manutenção e conservação do imóvel. Você acompanha tudo à distância.",
      es: "Para propietarios que viven fuera de Orlando o Miami, nos ocupamos del día a día: inquilinos, alquiler, mantenimiento y conservación de la propiedad. Usted sigue todo a distancia.",
    },
    points: {
      en: [
        "Tenant screening and lease agreements",
        "Rent collection and monthly statements",
        "Maintenance and repairs with trusted vendors",
        "Periodic inspections with photos",
        "Owner portal with statements and documents",
      ],
      pt: [
        "Seleção de inquilinos e contratos de locação",
        "Cobrança do aluguel e extrato mensal",
        "Manutenção e reparos com fornecedores de confiança",
        "Vistorias periódicas com fotos",
        "Portal do proprietário com extratos e documentos",
      ],
      es: [
        "Selección de inquilinos y contratos de arrendamiento",
        "Cobro del alquiler y estado de cuenta mensual",
        "Mantenimiento y reparaciones con proveedores de confianza",
        "Inspecciones periódicas con fotos",
        "Portal del propietario con estados de cuenta y documentos",
      ],
    },
    questions: [],
  },
];

/* ---------------- Areas ---------------- */

export type Area = {
  slug: string;
  name: string;
  region: string;
  summary: L;
  body: L;
  highlights: LL;
  idealFor?: L;
  homes?: L;
  drive?: { to: L; min: number }[];
};

const MCO = { en: "Orlando airport (MCO)", pt: "Aeroporto de Orlando (MCO)", es: "Aeropuerto de Orlando (MCO)" } as L;
const DISNEY = { en: "Walt Disney World", pt: "Walt Disney World", es: "Walt Disney World" } as L;
const DOWNTOWN = { en: "Downtown Orlando", pt: "Centro de Orlando", es: "Centro de Orlando" } as L;

export const AREAS: Area[] = [
  {
    slug: "windermere",
    name: "Windermere",
    region: "Orlando",
    summary: {
      en: "Lakefront estates and gated communities on the Butler Chain of Lakes, minutes from Dr. Phillips.",
      pt: "Mansões à beira de lagos e condomínios fechados no Butler Chain of Lakes, a poucos minutos de Dr. Phillips.",
      es: "Residencias frente a lagos y comunidades cerradas en el Butler Chain of Lakes, a pocos minutos de Dr. Phillips.",
    },
    body: {
      en: "Windermere is one of the most sought-after addresses in the Orlando area. Its chain of connected lakes, large lots and established gated communities, such as Isleworth and Keene's Pointe, attract families and buyers who value privacy and space.",
      pt: "Windermere é um dos endereços mais procurados da região de Orlando. A sequência de lagos interligados, os terrenos amplos e os condomínios fechados consolidados, como Isleworth e Keene's Pointe, atraem famílias e compradores que valorizam privacidade e espaço.",
      es: "Windermere es una de las direcciones más buscadas del área de Orlando. Su cadena de lagos conectados, sus terrenos amplios y sus comunidades cerradas consolidadas, como Isleworth y Keene's Pointe, atraen a familias y compradores que valoran la privacidad y el espacio.",
    },
    highlights: {
      en: ["Butler Chain of Lakes", "Gated golf communities", "Close to Dr. Phillips restaurants"],
      pt: ["Butler Chain of Lakes", "Condomínios fechados com golfe", "Perto dos restaurantes de Dr. Phillips"],
      es: ["Butler Chain of Lakes", "Comunidades cerradas con golf", "Cerca de los restaurantes de Dr. Phillips"],
    },
    idealFor: { en: "Families looking for space, privacy and life by the lakes", pt: "Famílias que buscam espaço, privacidade e vida perto dos lagos", es: "Familias que buscan espacio, privacidad y vida junto a los lagos" },
    homes: { en: "Homes in gated communities, large lots and lakefront estates", pt: "Casas em condomínios fechados, terrenos amplos e propriedades à beira do lago", es: "Casas en comunidades cerradas, terrenos amplios y propiedades frente al lago" },
    drive: [{ to: MCO, min: 30 }, { to: DISNEY, min: 15 }, { to: DOWNTOWN, min: 25 }],
  },
  {
    slug: "lake-nona",
    name: "Lake Nona",
    region: "Orlando",
    summary: {
      en: "A planned community built around health, sports and technology, close to Orlando International Airport.",
      pt: "Um bairro planejado em torno de saúde, esporte e tecnologia, perto do Aeroporto Internacional de Orlando.",
      es: "Una comunidad planificada en torno a la salud, el deporte y la tecnología, cerca del Aeropuerto Internacional de Orlando.",
    },
    body: {
      en: "Lake Nona combines newer homes, a medical and research district and the USTA National Campus for tennis. Its location near the airport makes it practical for families and professionals who travel often.",
      pt: "Lake Nona reúne casas mais novas, um polo médico e de pesquisa e o USTA National Campus, centro nacional de tênis dos EUA. A proximidade do aeroporto é prática para famílias e profissionais que viajam com frequência.",
      es: "Lake Nona reúne casas más nuevas, un polo médico y de investigación y el USTA National Campus, centro nacional de tenis de EE. UU. Su cercanía al aeropuerto es práctica para familias y profesionales que viajan a menudo.",
    },
    highlights: {
      en: ["USTA National Campus", "Medical City", "Near Orlando International Airport"],
      pt: ["USTA National Campus", "Medical City", "Perto do aeroporto de Orlando"],
      es: ["USTA National Campus", "Medical City", "Cerca del aeropuerto de Orlando"],
    },
    idealFor: { en: "Families and professionals who want a modern, planned community", pt: "Famílias e profissionais que querem um bairro planejado e moderno", es: "Familias y profesionales que buscan una comunidad planificada y moderna" },
    homes: { en: "New homes in planned communities, townhomes and condos", pt: "Casas novas em comunidades planejadas, townhomes e condomínios", es: "Casas nuevas en comunidades planificadas, townhomes y condominios" },
    drive: [{ to: MCO, min: 15 }, { to: DISNEY, min: 30 }, { to: DOWNTOWN, min: 25 }],
  },
  {
    slug: "dr-phillips",
    name: "Dr. Phillips",
    region: "Orlando",
    summary: {
      en: "Restaurant Row, Bay Hill golf and quick access to the theme parks.",
      pt: "Restaurant Row, o golfe de Bay Hill e acesso rápido aos parques.",
      es: "Restaurant Row, el golf de Bay Hill y acceso rápido a los parques.",
    },
    body: {
      en: "Dr. Phillips is known for the dining along Sand Lake Road, the Bay Hill Club and lakefront neighborhoods, all with an easy drive to the attractions and downtown Orlando.",
      pt: "Dr. Phillips é conhecida pelos restaurantes da Sand Lake Road, pelo Bay Hill Club e por bairros à beira de lagos, com acesso fácil aos parques e ao centro de Orlando.",
      es: "Dr. Phillips es conocida por los restaurantes de Sand Lake Road, el Bay Hill Club y barrios frente a lagos, con fácil acceso a los parques y al centro de Orlando.",
    },
    highlights: {
      en: ["Restaurant Row", "Bay Hill Club", "Central location"],
      pt: ["Restaurant Row", "Bay Hill Club", "Localização central"],
      es: ["Restaurant Row", "Bay Hill Club", "Ubicación central"],
    },
    idealFor: { en: "Those who want to be close to restaurants, golf and the parks", pt: "Quem quer ficar perto de restaurantes, golfe e parques", es: "Quienes quieren estar cerca de restaurantes, golf y parques" },
    homes: { en: "Homes in gated golf communities and residential condos", pt: "Casas em condomínios fechados com golfe e condomínios residenciais", es: "Casas en comunidades cerradas con golf y condominios residenciales" },
    drive: [{ to: MCO, min: 25 }, { to: DISNEY, min: 15 }, { to: DOWNTOWN, min: 20 }],
  },
  {
    slug: "winter-park",
    name: "Winter Park",
    region: "Orlando",
    summary: {
      en: "Historic charm, Park Avenue and the Winter Park Chain of Lakes.",
      pt: "Charme histórico, a Park Avenue e o Winter Park Chain of Lakes.",
      es: "Encanto histórico, Park Avenue y el Winter Park Chain of Lakes.",
    },
    body: {
      en: "Winter Park offers tree-lined streets, boutiques and cafés on Park Avenue, Rollins College and lakefront homes connected by canals, just north of downtown Orlando.",
      pt: "Winter Park tem ruas arborizadas, lojas e cafés na Park Avenue, o Rollins College e casas à beira de lagos ligados por canais, logo ao norte do centro de Orlando.",
      es: "Winter Park ofrece calles arboladas, tiendas y cafés en Park Avenue, Rollins College y casas frente a lagos conectados por canales, justo al norte del centro de Orlando.",
    },
    highlights: {
      en: ["Park Avenue", "Rollins College", "Lakes connected by canals"],
      pt: ["Park Avenue", "Rollins College", "Lagos ligados por canais"],
      es: ["Park Avenue", "Rollins College", "Lagos conectados por canales"],
    },
    idealFor: { en: "Those who value charm, culture and a walkable lifestyle", pt: "Quem valoriza charme, cultura e uma vida caminhável", es: "Quienes valoran el encanto, la cultura y una vida para caminar" },
    homes: { en: "Historic homes, lakefront residences and condos near downtown", pt: "Casas históricas, residências à beira dos lagos e condomínios perto do centro", es: "Casas históricas, residencias frente a los lagos y condominios cerca del centro" },
    drive: [{ to: MCO, min: 30 }, { to: DISNEY, min: 35 }, { to: DOWNTOWN, min: 15 }],
  },
  {
    slug: "winter-garden",
    name: "Winter Garden",
    region: "Orlando",
    summary: {
      en: "A historic downtown on Plant Street, the West Orange Trail and new communities in Horizon West.",
      pt: "Centro histórico na Plant Street, a West Orange Trail e novos bairros planejados em Horizon West.",
      es: "Centro histórico en Plant Street, el West Orange Trail y nuevas comunidades en Horizon West.",
    },
    body: {
      en: "Winter Garden pairs a small-town downtown, with restaurants, a farmers market and the West Orange Trail, with the planned communities of Horizon West to the south. It sits west of Orlando, close to Windermere and the theme parks.",
      pt: "Winter Garden une um centro de cidade pequena, com restaurantes, feira aos sábados e a West Orange Trail, aos bairros planejados de Horizon West, mais ao sul. Fica a oeste de Orlando, perto de Windermere e dos parques.",
      es: "Winter Garden combina un centro de pueblo, con restaurantes, mercado de agricultores y el West Orange Trail, con las comunidades planificadas de Horizon West, más al sur. Está al oeste de Orlando, cerca de Windermere y de los parques.",
    },
    highlights: {
      en: ["Historic Plant Street", "West Orange Trail", "Horizon West"],
      pt: ["Plant Street histórica", "West Orange Trail", "Horizon West"],
      es: ["Plant Street histórica", "West Orange Trail", "Horizon West"],
    },
    idealFor: { en: "Families who want newer homes and a lively downtown", pt: "Famílias que querem casas novas e um centro charmoso", es: "Familias que buscan casas nuevas y un centro con vida" },
    homes: { en: "New homes in planned communities and lakefront properties", pt: "Casas novas em bairros planejados e propriedades à beira de lagos", es: "Casas nuevas en comunidades planificadas y propiedades frente a lagos" },
    drive: [{ to: MCO, min: 35 }, { to: DISNEY, min: 20 }, { to: DOWNTOWN, min: 20 }],
  },
  {
    slug: "clermont",
    name: "Clermont",
    region: "Orlando",
    summary: {
      en: "Rolling hills, the Clermont Chain of Lakes and larger lots, west of Orlando.",
      pt: "Colinas, o Clermont Chain of Lakes e terrenos maiores, a oeste de Orlando.",
      es: "Colinas, el Clermont Chain of Lakes y terrenos más grandes, al oeste de Orlando.",
    },
    body: {
      en: "Clermont has something rare in Florida: hills. Around Lake Minneola and the Clermont Chain of Lakes, it offers waterfront parks, trails and more land for the price, with an easy drive to Winter Garden and the theme parks.",
      pt: "Clermont tem algo raro na Flórida: colinas. Em volta do Lake Minneola e do Clermont Chain of Lakes, oferece parques à beira d'água, trilhas e terrenos maiores pelo mesmo valor, com acesso fácil a Winter Garden e aos parques.",
      es: "Clermont tiene algo poco común en Florida: colinas. Alrededor del Lake Minneola y del Clermont Chain of Lakes, ofrece parques junto al agua, senderos y más terreno por el mismo valor, con fácil acceso a Winter Garden y a los parques.",
    },
    highlights: {
      en: ["Clermont Chain of Lakes", "Lake Minneola waterfront", "Hills and trails"],
      pt: ["Clermont Chain of Lakes", "Orla do Lake Minneola", "Colinas e trilhas"],
      es: ["Clermont Chain of Lakes", "Costanera del Lake Minneola", "Colinas y senderos"],
    },
    idealFor: { en: "Those who want more space and an outdoor lifestyle", pt: "Quem quer mais espaço e uma vida ao ar livre", es: "Quienes buscan más espacio y una vida al aire libre" },
    homes: { en: "Single-family homes, new communities and larger lots", pt: "Casas em bairros novos e terrenos amplos", es: "Casas unifamiliares, comunidades nuevas y terrenos amplios" },
    drive: [{ to: MCO, min: 45 }, { to: DISNEY, min: 25 }, { to: DOWNTOWN, min: 35 }],
  },
  {
    slug: "kissimmee",
    name: "Kissimmee",
    region: "Orlando",
    summary: {
      en: "Minutes from Disney, with resort communities and Lake Tohopekaliga.",
      pt: "A poucos minutos da Disney, com condomínios-resort e o Lake Tohopekaliga.",
      es: "A pocos minutos de Disney, con comunidades resort y el Lake Tohopekaliga.",
    },
    body: {
      en: "Kissimmee is the closest region to Walt Disney World and home to resort communities such as Reunion, where vacation rentals are allowed. Its lakefront downtown on Lake Tohopekaliga keeps a calmer pace.",
      pt: "Kissimmee é a região mais próxima da Walt Disney World e reúne condomínios-resort como o Reunion, onde o aluguel por temporada é permitido. O centro, à beira do Lake Tohopekaliga, tem um ritmo mais tranquilo.",
      es: "Kissimmee es la zona más cercana a Walt Disney World y reúne comunidades resort como Reunion, donde se permite el alquiler vacacional. Su centro, junto al Lake Tohopekaliga, tiene un ritmo más tranquilo.",
    },
    highlights: {
      en: ["Close to Walt Disney World", "Resort communities", "Lake Tohopekaliga"],
      pt: ["Perto da Walt Disney World", "Condomínios-resort", "Lake Tohopekaliga"],
      es: ["Cerca de Walt Disney World", "Comunidades resort", "Lake Tohopekaliga"],
    },
    idealFor: { en: "Vacation homes and investors focused on short-term rentals", pt: "Casa de férias e investidores em aluguel por temporada", es: "Casas vacacionales e inversionistas en alquiler de temporada" },
    homes: { en: "Vacation homes in resort communities, townhomes and condos", pt: "Casas de férias em condomínios-resort, townhomes e condos", es: "Casas vacacionales en comunidades resort, townhomes y condos" },
    drive: [{ to: MCO, min: 25 }, { to: DISNEY, min: 15 }, { to: DOWNTOWN, min: 25 }],
  },
];

/* ---------------- FAQ ---------------- */

export const FAQ: { q: L; a: L }[] = [
  {
    q: {
      en: "Can a foreigner buy a home in Florida?",
      pt: "Um estrangeiro pode comprar imóvel na Flórida?",
      es: "¿Un extranjero puede comprar una propiedad en Florida?",
    },
    a: {
      en: "Yes. You do not need U.S. citizenship, a visa or a green card to buy property in Florida. You can pay cash or use a loan program for foreign nationals.",
      pt: "Sim. Não é preciso ter cidadania americana, visto ou green card para comprar um imóvel na Flórida. É possível pagar à vista ou usar um financiamento para estrangeiros.",
      es: "Sí. No necesita ciudadanía estadounidense, visa ni green card para comprar una propiedad en Florida. Puede pagar al contado o usar un financiamiento para extranjeros.",
    },
  },
  {
    q: {
      en: "Do you work with buyers who live abroad?",
      pt: "Vocês atendem quem mora fora dos EUA?",
      es: "¿Atienden a quienes viven fuera de EE. UU.?",
    },
    a: {
      en: "Yes. Much of the process can be done remotely: video tours, digital signatures and remote closing coordinated with the title company.",
      pt: "Sim. Boa parte do processo pode ser feita à distância: visitas por vídeo, assinatura digital e fechamento coordenado com a title company.",
      es: "Sí. Gran parte del proceso puede hacerse a distancia: visitas por video, firma digital y cierre coordinado con la title company.",
    },
  },
  {
    q: {
      en: "Which areas do you cover?",
      pt: "Em quais regiões vocês atuam?",
      es: "¿En qué zonas trabajan?",
    },
    a: {
      en: "Greater Orlando, including Windermere, Lake Nona, Dr. Phillips and Winter Park, and Miami.",
      pt: "Na região de Orlando, incluindo Windermere, Lake Nona, Dr. Phillips e Winter Park, e em Miami.",
      es: "En el área de Orlando, incluyendo Windermere, Lake Nona, Dr. Phillips y Winter Park, y en Miami.",
    },
  },
  {
    q: {
      en: "Does buying property give me a U.S. visa?",
      pt: "Comprar um imóvel dá direito a visto americano?",
      es: "¿Comprar una propiedad da derecho a visa estadounidense?",
    },
    a: {
      en: "No. Buying real estate does not by itself grant a visa or residency. Consult an immigration attorney for your case.",
      pt: "Não. A compra de um imóvel, por si só, não dá visto nem residência. Procure um advogado de imigração para avaliar o seu caso.",
      es: "No. La compra de una propiedad, por sí sola, no otorga visa ni residencia. Consulte a un abogado de inmigración para evaluar su caso.",
    },
  },
  {
    q: {
      en: "What costs should I expect besides the price?",
      pt: "Quais custos existem além do preço?",
      es: "¿Qué costos hay además del precio?",
    },
    a: {
      en: "Closing costs, title insurance, inspection, homeowners insurance, property tax and, in many communities, HOA fees. We prepare an estimate for each home before you make an offer.",
      pt: "Custos de fechamento, seguro do título, inspeção, seguro residencial, property tax e, em muitos condomínios, a taxa da associação (HOA). Preparamos uma estimativa para cada imóvel antes da oferta.",
      es: "Costos de cierre, seguro de título, inspección, seguro de vivienda, property tax y, en muchas comunidades, la cuota de la asociación (HOA). Preparamos un estimado para cada propiedad antes de la oferta.",
    },
  },
  {
    q: {
      en: "Do you also work in Dubai?",
      pt: "Vocês também atuam em Dubai?",
      es: "¿También trabajan en Dubái?",
    },
    a: {
      en: "Yes, through Webb Real Estate, our sister company in Dubai.",
      pt: "Sim, pela Webb Real Estate, nossa empresa irmã em Dubai.",
      es: "Sí, a través de Webb Real Estate, nuestra empresa hermana en Dubái.",
    },
  },
];

/* ---------------- About ---------------- */

export const ABOUT = {
  title: { en: "Our story", pt: "Nossa história", es: "Nuestra historia" } as L,
  lead: {
    en: "The Webb story: from Brazil in 2008 to Orlando, Miami and Dubai.",
    pt: "A história da Webb: do Brasil, em 2008, a Orlando, Miami e Dubai.",
    es: "La historia de Webb: de Brasil, en 2008, a Orlando, Miami y Dubái.",
  } as L,
  storyTitle: { en: "Our story", pt: "Nossa história", es: "Nuestra historia" } as L,
  institutional: [
    {
      en: "Founded in 2015, Webb Florida Realty LLC is a licensed real estate brokerage in Florida, serving Orlando and Miami in the purchase, sale, investment and management of high-end properties.",
      pt: "Fundada em 2015, a Webb Florida Realty LLC é uma imobiliária licenciada na Flórida, com atuação em Orlando e Miami na compra, venda, investimento e administração de imóveis de alto padrão.",
      es: "Fundada en 2015, Webb Florida Realty LLC es una inmobiliaria con licencia en Florida, con actuación en Orlando y Miami en la compra, venta, inversión y administración de propiedades de alto nivel.",
    },
    {
      en: "The company is part of the Webb Group, which began in Brazil in 2008 with Webb Imóveis, one of the first agencies in the country to present its properties online. In 2025, the group arrived in Dubai, in the United Arab Emirates, with Webb Real Estate.",
      pt: "A empresa integra o Grupo Webb, iniciado no Brasil em 2008 com a Webb Imóveis, uma das primeiras imobiliárias do país a apresentar seus imóveis na internet. Em 2025, o grupo chegou a Dubai, nos Emirados Árabes Unidos, com a Webb Real Estate.",
      es: "La empresa integra el Grupo Webb, iniciado en Brasil en 2008 con Webb Imóveis, una de las primeras inmobiliarias del país en presentar sus propiedades en internet. En 2025, el grupo llegó a Dubái, en los Emiratos Árabes Unidos, con Webb Real Estate.",
    },
    {
      en: "Led by broker Ramon Brandão, Webb Florida Realty serves families, investors and international buyers in English, Portuguese and Spanish, guiding each client from choosing the property to the closing, and in managing their assets afterwards.",
      pt: "Sob a direção do broker Ramon Brandão, a Webb Florida Realty atende famílias, investidores e compradores internacionais em português, inglês e espanhol, acompanhando cada cliente da escolha do imóvel ao fechamento e na gestão do patrimônio depois dele.",
      es: "Bajo la dirección del broker Ramon Brandão, Webb Florida Realty atiende a familias, inversionistas y compradores internacionales en español, portugués e inglés, acompañando a cada cliente desde la elección de la propiedad hasta el cierre y en la gestión de su patrimonio después.",
    },
  ] as L[],
  story: [
    {
      k: { en: "Brazil · 2008", pt: "Brasil · 2008", es: "Brasil · 2008" } as L,
      h: "Webb Imóveis",
      p: {
        en: "Webb began in Brazil in 2008, building its name on trust and close relationships with each client.",
        pt: "A Webb nasceu no Brasil em 2008, construindo seu nome com confiança e proximidade com cada cliente.",
        es: "Webb nació en Brasil en 2008, construyendo su nombre con confianza y cercanía con cada cliente.",
      } as L,
    },
    {
      k: { en: "Florida · 2015", pt: "Flórida · 2015", es: "Florida · 2015" } as L,
      h: "Webb Florida Realty",
      p: {
        en: "In 2015, Webb arrived in Orlando and Miami to guide families and investors who want to live or invest in the United States.",
        pt: "Em 2015, a Webb chegou a Orlando e Miami para acompanhar famílias e investidores que querem viver ou investir nos Estados Unidos.",
        es: "En 2015, Webb llegó a Orlando y Miami para acompañar a familias e inversionistas que quieren vivir o invertir en Estados Unidos.",
      } as L,
    },
    {
      k: { en: "Dubai · 2025", pt: "Dubai · 2025", es: "Dubái · 2025" } as L,
      h: "Webb Real Estate",
      p: {
        en: "Today, Webb is also in Dubai, connecting clients across South America, North America and the Emirates.",
        pt: "Hoje, a Webb também está em Dubai, conectando clientes entre a América do Sul, a América do Norte e os Emirados.",
        es: "Hoy, Webb también está en Dubái, conectando clientes entre Sudamérica, Norteamérica y los Emiratos.",
      } as L,
    },
  ],
  brokerEyebrow: { en: "Broker", pt: "Broker", es: "Broker" } as L,
  brokerTitle: { en: "Ramon Brandão", pt: "Ramon Brandão", es: "Ramon Brandão" } as L,
  broker: {
    en: "With nearly two decades in real estate, Ramon Brandão began his career in Brazil, where he built his foundation in negotiation, market analysis and client relationships. He then expanded to the United States and to Dubai, working directly with families and investors looking for opportunities abroad. His approach goes beyond showing properties: he analyzes each opportunity, weighs the risks and guides the client through every step, with transparency and long-term vision.",
    pt: "Com quase duas décadas no mercado imobiliário, Ramon Brandão começou a carreira no Brasil, onde construiu sua base em negociação, análise de mercado e relacionamento com clientes. Depois expandiu a atuação para os Estados Unidos e para Dubai, trabalhando diretamente com famílias e investidores que buscam oportunidades fora do país. Seu trabalho vai além de apresentar imóveis: ele analisa cada oportunidade, avalia os riscos e acompanha o cliente em cada etapa, com transparência e visão de longo prazo.",
    es: "Con casi dos décadas en el mercado inmobiliario, Ramon Brandão comenzó su carrera en Brasil, donde construyó su base en negociación, análisis de mercado y relación con clientes. Luego expandió su actuación a Estados Unidos y a Dubái, trabajando directamente con familias e inversionistas que buscan oportunidades en el exterior. Su trabajo va más allá de mostrar propiedades: analiza cada oportunidad, evalúa los riesgos y acompaña al cliente en cada etapa, con transparencia y visión de largo plazo.",
  } as L,
};

/* ---------------- Contact ---------------- */

export const CONTACT = {
  title: { en: "Contact", pt: "Contato", es: "Contacto" } as L,
  lead: {
    en: "Tell us about your plans. We reply within one business day.",
    pt: "Conte seus planos. Respondemos em até um dia útil.",
    es: "Cuéntenos sus planes. Respondemos en un plazo de un día hábil.",
  } as L,
  fields: {
    name: { en: "Name", pt: "Nome", es: "Nombre" } as L,
    email: { en: "Email", pt: "E-mail", es: "Correo" } as L,
    phone: { en: "Phone / WhatsApp", pt: "Telefone / WhatsApp", es: "Teléfono / WhatsApp" } as L,
    goal: { en: "I am looking to", pt: "Quero", es: "Quiero" } as L,
    goals: {
      en: ["Buy a home", "Invest", "Sell", "Relocate", "Other"],
      pt: ["Comprar para morar", "Investir", "Vender", "Me mudar", "Outro"],
      es: ["Comprar para vivir", "Invertir", "Vender", "Mudarme", "Otro"],
    } as LL,
    message: { en: "Message", pt: "Mensagem", es: "Mensaje" } as L,
    send: { en: "Send", pt: "Enviar", es: "Enviar" } as L,
  },
  formNote: {
    en: "Form delivery will be connected at launch.",
    pt: "O envio do formulário será ligado no lançamento.",
    es: "El envío del formulario se conectará en el lanzamiento.",
  } as L,
};

/* ---------------- Homes (MLS) ---------------- */

export const HOMES = {
  title: { en: "Homes for sale", pt: "Imóveis à venda", es: "Propiedades en venta" } as L,
  lead: {
    en: "Full MLS search for Orlando and Miami is being connected.",
    pt: "A busca completa na MLS de Orlando e Miami está sendo conectada.",
    es: "La búsqueda completa en la MLS de Orlando y Miami se está conectando.",
  } as L,
};
