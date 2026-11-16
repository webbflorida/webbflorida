import type { Locale } from "./site";

export type L = Record<Locale, string>;
export type LL = Record<Locale, string[]>;

/* ---------------- Grupo Webb ---------------- */

export const GROUP = [
  { place: { en: "Brazil", pt: "Brasil", es: "Brasil" } as L, name: "Webb Imóveis", year: "2008", url: "" },
  { place: { en: "Florida", pt: "Flórida", es: "Florida" } as L, name: "Webb Florida Realty", year: "2015", url: "https://webbflorida.com" },
  { place: { en: "United Arab Emirates", pt: "Emirados Árabes Unidos", es: "Emiratos Árabes Unidos" } as L, name: "Webb Prime Real Estate", year: "2025", url: "" },
];

/* ---------------- Home ---------------- */

export const HOME = {
  metaTitle: {
    en: "Webb Prime Real Estate | Property in Dubai",
    pt: "Webb Prime Real Estate | Imóveis em Dubai",
    es: "Webb Prime Real Estate | Propiedades en Dubái",
  } as L,
  metaDescription: {
    en: "Webb Prime Real Estate advises investors and families buying property in Dubai, off-plan or ready, with service in English, Portuguese and Spanish.",
    pt: "A Webb Prime Real Estate assessora investidores e famílias na compra de imóveis em Dubai, na planta ou prontos, com atendimento em português, inglês e espanhol.",
    es: "Webb Prime Real Estate asesora a inversionistas y familias en la compra de propiedades en Dubái, en preventa o listas, con atención en español, inglés y portugués.",
  } as L,
  eyebrow: { en: "Dubai · United Arab Emirates", pt: "Dubai · Emirados Árabes Unidos", es: "Dubái · Emiratos Árabes Unidos" } as L,
  title: { en: "Property in Dubai.", pt: "Imóveis em Dubai.", es: "Propiedades en Dubái." } as L,
  lead: {
    en: "Off-plan or ready, for income, appreciation or a new home.",
    pt: "Na planta ou prontos, para renda, valorização ou moradia.",
    es: "En preventa o listas, para renta, valorización o vivienda.",
  } as L,
  statement: {
    en: "Tailored service, from the first conversation to the keys.",
    pt: "Atendimento sob medida, do primeiro contato à entrega das chaves.",
    es: "Atención a medida, del primer contacto a la entrega de llaves.",
  } as L,
  principles: [
    { en: "Projects selected around your goal: income, appreciation or living", pt: "Projetos selecionados pelo seu objetivo: renda, valorização ou moradia", es: "Proyectos seleccionados según su objetivo: renta, valorización o vivienda" } as L,
    { en: "Purchases registered with the Dubai Land Department", pt: "Compra registrada no Dubai Land Department", es: "Compra registrada en el Dubai Land Department" } as L,
    { en: "Guidance in English, Portuguese and Spanish, also remotely", pt: "Acompanhamento em português, inglês e espanhol, também à distância", es: "Acompañamiento en español, inglés y portugués, también a distancia" } as L,
  ],
  projectsTitle: { en: "Selected projects", pt: "Projetos selecionados", es: "Proyectos seleccionados" } as L,
  whyTitle: { en: "Why Dubai", pt: "Por que Dubai", es: "Por qué Dubái" } as L,
  why: [
    {
      t: { en: "No personal income tax", pt: "Sem imposto de renda para pessoa física", es: "Sin impuesto sobre la renta personal" } as L,
      d: {
        en: "The UAE does not tax individual income, including rental income earned by individuals. Taxes in your home country depend on your own tax residence.",
        pt: "Os Emirados não cobram imposto de renda de pessoa física, inclusive sobre aluguel recebido por pessoa física. Os impostos no seu país dependem da sua residência fiscal.",
        es: "Los Emiratos no cobran impuesto sobre la renta a personas físicas, incluido el alquiler recibido por personas físicas. Los impuestos en su país dependen de su residencia fiscal.",
      } as L,
    },
    {
      t: { en: "Freehold for foreigners", pt: "Propriedade plena para estrangeiros", es: "Propiedad plena para extranjeros" } as L,
      d: {
        en: "Foreign buyers can own property outright in Dubai's designated freehold areas, with the title registered with the Dubai Land Department.",
        pt: "Estrangeiros podem ter a propriedade plena do imóvel nas áreas freehold de Dubai, com a escritura registrada no Dubai Land Department.",
        es: "Los extranjeros pueden tener la propiedad plena en las zonas freehold de Dubái, con la escritura registrada en el Dubai Land Department.",
      } as L,
    },
    {
      t: { en: "Off-plan with escrow", pt: "Compra na planta com conta escrow", es: "Compra en preventa con cuenta escrow" } as L,
      d: {
        en: "Payments for off-plan units go into the project's escrow account, supervised by RERA, the regulator of the Dubai real estate market.",
        pt: "Os pagamentos de imóveis na planta vão para a conta escrow do projeto, fiscalizada pela RERA, o órgão regulador do mercado imobiliário de Dubai.",
        es: "Los pagos de propiedades en preventa van a la cuenta escrow del proyecto, supervisada por la RERA, el regulador del mercado inmobiliario de Dubái.",
      } as L,
    },
    {
      t: { en: "10-year Golden Visa", pt: "Golden Visa de 10 anos", es: "Golden Visa de 10 años" } as L,
      d: {
        en: "Property investments from AED 2 million can qualify the owner for a renewable 10-year residence visa, under the government's current rules.",
        pt: "Investimentos em imóveis a partir de AED 2 milhões podem dar ao proprietário um visto de residência de 10 anos, renovável, conforme as regras atuais do governo.",
        es: "Inversiones en propiedades desde AED 2 millones pueden dar al propietario una visa de residencia de 10 años, renovable, según las reglas actuales del gobierno.",
      } as L,
    },
  ],
  floridaTitle: { en: "Also in Orlando and Miami", pt: "Também em Orlando e Miami", es: "También en Orlando y Miami" } as L,
  floridaText: {
    en: "Webb Florida Realty, our brokerage in Florida since 2015, handles purchases, sales and property management in Orlando and Miami.",
    pt: "A Webb Florida Realty, nossa imobiliária na Flórida desde 2015, cuida de compra, venda e administração de imóveis em Orlando e Miami.",
    es: "Webb Florida Realty, nuestra inmobiliaria en Florida desde 2015, se ocupa de compra, venta y administración de propiedades en Orlando y Miami.",
  } as L,
  groupLabel: { en: "Webb Group", pt: "Grupo Webb", es: "Grupo Webb" } as L,
  privateTitle: { en: "A private conversation", pt: "Uma conversa reservada", es: "Una conversación reservada" } as L,
  closing: {
    en: "Tell us what you are looking for in Dubai. We reply personally, in full confidence.",
    pt: "Conte o que você procura em Dubai. Respondemos pessoalmente, com total confidencialidade.",
    es: "Cuéntenos qué busca en Dubái. Respondemos personalmente, con total confidencialidad.",
  } as L,
};

/* ---------------- Investir em Dubai ---------------- */

export const INVEST = {
  title: { en: "How to buy property in Dubai", pt: "Como comprar um imóvel em Dubai", es: "Cómo comprar una propiedad en Dubái" } as L,
  lead: {
    en: "The steps of a purchase in Dubai, off-plan or ready, and the questions investors ask us most.",
    pt: "As etapas de uma compra em Dubai, na planta ou pronto, e as perguntas que os investidores mais nos fazem.",
    es: "Las etapas de una compra en Dubái, en preventa o lista, y las preguntas que más nos hacen los inversionistas.",
  } as L,
  stepsTitle: { en: "Step by step", pt: "Passo a passo", es: "Paso a paso" } as L,
  steps: [
    {
      t: { en: "Goal and budget", pt: "Objetivo e orçamento", es: "Objetivo y presupuesto" } as L,
      d: {
        en: "We start with what you want: rental income, appreciation, a home for your family or a Golden Visa. That defines the area, the type of unit and the payment plan.",
        pt: "Começamos pelo que você quer: renda de aluguel, valorização, moradia para a família ou Golden Visa. Isso define a região, o tipo de unidade e o plano de pagamento.",
        es: "Empezamos por lo que usted quiere: renta, valorización, vivienda para la familia o Golden Visa. Eso define la zona, el tipo de unidad y el plan de pagos.",
      } as L,
    },
    {
      t: { en: "Choosing the project", pt: "Escolha do projeto", es: "Elección del proyecto" } as L,
      d: {
        en: "We compare off-plan and ready options: developer, location, delivery date, payment plan and rental demand in the area.",
        pt: "Comparamos opções na planta e prontas: incorporadora, localização, prazo de entrega, plano de pagamento e demanda de aluguel na região.",
        es: "Comparamos opciones en preventa y listas: desarrollador, ubicación, fecha de entrega, plan de pagos y demanda de alquiler en la zona.",
      } as L,
    },
    {
      t: { en: "Reservation and contract", pt: "Reserva e contrato", es: "Reserva y contrato" } as L,
      d: {
        en: "Off-plan: the unit is reserved and the sales agreement is signed with the developer, then registered with the Dubai Land Department (Oqood). Ready: buyer and seller sign the RERA standard agreement (Form F).",
        pt: "Na planta: a unidade é reservada e o contrato é assinado com a incorporadora e registrado no Dubai Land Department (Oqood). Pronto: comprador e vendedor assinam o contrato padrão da RERA (Form F).",
        es: "En preventa: la unidad se reserva y el contrato se firma con el desarrollador y se registra en el Dubai Land Department (Oqood). Lista: comprador y vendedor firman el contrato estándar de la RERA (Form F).",
      } as L,
    },
    {
      t: { en: "Payments and fees", pt: "Pagamentos e taxas", es: "Pagos y tasas" } as L,
      d: {
        en: "Off-plan payments follow the developer's plan and go into the project's escrow account. The Dubai Land Department charges a transfer fee of 4% of the price, plus administrative fees.",
        pt: "Os pagamentos na planta seguem o plano da incorporadora e vão para a conta escrow do projeto. O Dubai Land Department cobra taxa de transferência de 4% do valor, além de taxas administrativas.",
        es: "Los pagos en preventa siguen el plan del desarrollador y van a la cuenta escrow del proyecto. El Dubai Land Department cobra una tasa de transferencia del 4% del precio, más tasas administrativas.",
      } as L,
    },
    {
      t: { en: "Handover and title deed", pt: "Entrega e escritura", es: "Entrega y escritura" } as L,
      d: {
        en: "At handover, the final payment is made and the Dubai Land Department issues the title deed in your name.",
        pt: "Na entrega, é feito o pagamento final e o Dubai Land Department emite a escritura (title deed) em seu nome.",
        es: "En la entrega se hace el pago final y el Dubai Land Department emite la escritura (title deed) a su nombre.",
      } as L,
    },
    {
      t: { en: "After the purchase", pt: "Depois da compra", es: "Después de la compra" } as L,
      d: {
        en: "The unit can be rented long term or as a holiday home. Income depends on the project, the area and the type of rental.",
        pt: "A unidade pode ser alugada por longo prazo ou por temporada. A renda depende do projeto, da região e do tipo de aluguel.",
        es: "La unidad puede alquilarse a largo plazo o por temporada. La renta depende del proyecto, la zona y el tipo de alquiler.",
      } as L,
    },
  ],
  faqTitle: { en: "Frequent questions", pt: "Perguntas frequentes", es: "Preguntas frecuentes" } as L,
  faq: [
    {
      q: { en: "Is the Dubai real estate market regulated?", pt: "O mercado imobiliário de Dubai é regulado?", es: "¿El mercado inmobiliario de Dubái está regulado?" } as L,
      a: {
        en: "Yes. The Dubai Land Department registers every purchase, and RERA, its regulatory agency, licenses brokers and developers and supervises off-plan escrow accounts.",
        pt: "Sim. O Dubai Land Department registra todas as compras, e a RERA, sua agência reguladora, licencia corretores e incorporadoras e fiscaliza as contas escrow dos imóveis na planta.",
        es: "Sí. El Dubai Land Department registra todas las compras, y la RERA, su agencia reguladora, licencia a corredores y desarrolladores y supervisa las cuentas escrow de las preventas.",
      } as L,
    },
    {
      q: { en: "Can a foreigner buy property in Dubai?", pt: "Estrangeiro pode comprar imóvel em Dubai?", es: "¿Un extranjero puede comprar una propiedad en Dubái?" } as L,
      a: {
        en: "Yes, in the freehold areas designated by the government, which include most of the city's new developments. Residence in the UAE is not required to buy.",
        pt: "Sim, nas áreas freehold definidas pelo governo, que incluem a maior parte dos novos empreendimentos da cidade. Não é preciso morar nos Emirados para comprar.",
        es: "Sí, en las zonas freehold definidas por el gobierno, que incluyen la mayoría de los nuevos desarrollos de la ciudad. No es necesario residir en los Emiratos para comprar.",
      } as L,
    },
    {
      q: { en: "Who usually invests in Dubai?", pt: "Quem costuma investir em Dubai?", es: "¿Quién suele invertir en Dubái?" } as L,
      a: {
        en: "International investors, business owners and families looking to diversify their assets with a medium to long-term strategy.",
        pt: "Investidores internacionais, empresários e famílias que buscam diversificar o patrimônio com estratégia de médio e longo prazo.",
        es: "Inversionistas internacionales, empresarios y familias que buscan diversificar su patrimonio con una estrategia de mediano y largo plazo.",
      } as L,
    },
    {
      q: { en: "What types of projects are there?", pt: "Que tipos de projeto existem?", es: "¿Qué tipos de proyectos hay?" } as L,
      a: {
        en: "Master-planned communities, urban residential buildings, waterfront developments and mixed-use projects, off-plan or ready.",
        pt: "Comunidades planejadas, edifícios residenciais urbanos, empreendimentos à beira-mar e projetos de uso misto, na planta ou prontos.",
        es: "Comunidades planificadas, edificios residenciales urbanos, desarrollos frente al mar y proyectos de uso mixto, en preventa o listos.",
      } as L,
    },
    {
      q: { en: "What drives the value of a property?", pt: "O que influencia o valor de um imóvel?", es: "¿Qué influye en el valor de una propiedad?" } as L,
      a: {
        en: "Location, the developer's track record, the quality of the project, infrastructure around it and real rental demand.",
        pt: "Localização, histórico da incorporadora, qualidade do projeto, infraestrutura ao redor e demanda real de aluguel.",
        es: "Ubicación, trayectoria del desarrollador, calidad del proyecto, infraestructura alrededor y demanda real de alquiler.",
      } as L,
    },
    {
      q: { en: "Can I finance the purchase?", pt: "Posso financiar a compra?", es: "¿Puedo financiar la compra?" } as L,
      a: {
        en: "UAE banks offer mortgages to non-residents for ready properties. Terms, down payment and rates are set by each bank. Off-plan units are usually paid through the developer's payment plan.",
        pt: "Bancos dos Emirados financiam imóveis prontos também para não residentes. Condições, entrada e taxas são definidas por cada banco. Na planta, o pagamento costuma seguir o plano da incorporadora.",
        es: "Los bancos de los Emiratos financian propiedades listas también a no residentes. Condiciones, enganche y tasas los define cada banco. En preventa, el pago suele seguir el plan del desarrollador.",
      } as L,
    },
    {
      q: { en: "Do I need to travel to Dubai to buy?", pt: "Preciso viajar a Dubai para comprar?", es: "¿Necesito viajar a Dubái para comprar?" } as L,
      a: {
        en: "Not necessarily. Many purchases are completed remotely, with digital signatures or a power of attorney. We guide you through each document.",
        pt: "Não necessariamente. Muitas compras são feitas à distância, com assinatura digital ou procuração. Orientamos você em cada documento.",
        es: "No necesariamente. Muchas compras se hacen a distancia, con firma digital o poder notarial. Le orientamos en cada documento.",
      } as L,
    },
  ],
};

/* ---------------- Golden Visa ---------------- */

export const VISA = {
  title: { en: "Golden Visa through property", pt: "Golden Visa por investimento em imóvel", es: "Golden Visa por inversión inmobiliaria" } as L,
  lead: {
    en: "The UAE grants a renewable 10-year residence visa to property investors who meet the government's criteria.",
    pt: "Os Emirados concedem visto de residência de 10 anos, renovável, a investidores em imóveis que cumprem os critérios do governo.",
    es: "Los Emiratos otorgan una visa de residencia de 10 años, renovable, a inversionistas inmobiliarios que cumplen los criterios del gobierno.",
  } as L,
  points: {
    en: [
      "Property value of at least AED 2 million, in one or more properties.",
      "Off-plan and mortgaged properties can qualify, under specific conditions.",
      "The visa can include the investor's spouse and children.",
      "Residence in the UAE is not required to keep the visa valid.",
    ],
    pt: [
      "Imóvel com valor a partir de AED 2 milhões, em um ou mais imóveis.",
      "Imóveis na planta e financiados podem ser aceitos, com condições específicas.",
      "O visto pode incluir cônjuge e filhos do investidor.",
      "Não é preciso morar nos Emirados para manter o visto válido.",
    ],
    es: [
      "Propiedad con valor desde AED 2 millones, en una o más propiedades.",
      "Propiedades en preventa y financiadas pueden calificar, con condiciones específicas.",
      "La visa puede incluir al cónyuge y a los hijos del inversionista.",
      "No es necesario residir en los Emiratos para mantener la visa vigente.",
    ],
  } as LL,
  role: {
    en: "The visa is issued by the UAE government, which sets and updates the rules. Our role is to help you choose a property that meets the current criteria and to organize the documents from the purchase.",
    pt: "O visto é emitido pelo governo dos Emirados, que define e atualiza as regras. Nosso papel é ajudar você a escolher um imóvel que atenda aos critérios vigentes e organizar os documentos da compra.",
    es: "La visa la emite el gobierno de los Emiratos, que define y actualiza las reglas. Nuestro papel es ayudarle a elegir una propiedad que cumpla los criterios vigentes y organizar los documentos de la compra.",
  } as L,
};

/* ---------------- Nossa história ---------------- */

export const ABOUT = {
  title: { en: "Our story", pt: "Nossa história", es: "Nuestra historia" } as L,
  lead: {
    en: "Webb Prime Real Estate is the Webb Group's brokerage in Dubai.",
    pt: "A Webb Prime Real Estate é a imobiliária do Grupo Webb em Dubai.",
    es: "Webb Prime Real Estate es la inmobiliaria del Grupo Webb en Dubái.",
  } as L,
  institutional: [
    {
      en: "Webb Prime Real Estate is a real estate brokerage in Dubai, in the United Arab Emirates. The company advises investors and families on buying off-plan and ready property in the city, serving clients who live in the UAE and abroad.",
      pt: "A Webb Prime Real Estate é uma imobiliária em Dubai, nos Emirados Árabes Unidos. A empresa assessora investidores e famílias na compra de imóveis na planta e prontos na cidade, atendendo clientes residentes nos Emirados e no exterior.",
      es: "Webb Prime Real Estate es una inmobiliaria en Dubái, en los Emiratos Árabes Unidos. La empresa asesora a inversionistas y familias en la compra de propiedades en preventa y listas en la ciudad, atendiendo a clientes residentes en los Emiratos y en el exterior.",
    },
    {
      en: "It is part of the Webb Group, with operations in Brazil, the United States and the United Arab Emirates. The group began in 2008 with Webb Imóveis in Brazil and arrived in Florida in 2015 with Webb Florida Realty, in Orlando and Miami.",
      pt: "Integra o Grupo Webb, com operações no Brasil, nos Estados Unidos e nos Emirados Árabes Unidos. O grupo começou em 2008 com a Webb Imóveis, no Brasil, e chegou à Flórida em 2015 com a Webb Florida Realty, em Orlando e Miami.",
      es: "Integra el Grupo Webb, con operaciones en Brasil, Estados Unidos y los Emiratos Árabes Unidos. El grupo comenzó en 2008 con Webb Imóveis, en Brasil, y llegó a Florida en 2015 con Webb Florida Realty, en Orlando y Miami.",
    },
  ] as L[],
  brokerEyebrow: { en: "Broker", pt: "Broker", es: "Broker" } as L,
  broker: {
    en: "Ramon Brandão began his career in real estate in Brazil in 2008, leading Webb Imóveis. In 2015 he took the company to Florida, and in 2025 he led the Webb Group's arrival in Dubai.\n\nHe works with investors who want to diversify internationally, analyzing each opportunity and following the purchase at every step, in English, Portuguese and Spanish.",
    pt: "Ramon Brandão iniciou a carreira no mercado imobiliário no Brasil, em 2008, à frente da Webb Imóveis. Em 2015 levou a empresa para a Flórida e, em 2025, conduziu a chegada do Grupo Webb a Dubai.\n\nAtende investidores que querem diversificar o patrimônio fora do país, analisando cada oportunidade e acompanhando a compra em cada etapa, em português, inglês e espanhol.",
    es: "Ramon Brandão inició su carrera en el mercado inmobiliario en Brasil, en 2008, al frente de Webb Imóveis. En 2015 llevó la empresa a Florida y, en 2025, condujo la llegada del Grupo Webb a Dubái.\n\nAtiende a inversionistas que quieren diversificar su patrimonio fuera del país, analizando cada oportunidad y acompañando la compra en cada etapa, en español, portugués e inglés.",
  } as L,
};

/* ---------------- Contato ---------------- */

export const CONTACT = {
  title: { en: "Contact", pt: "Contato", es: "Contacto" } as L,
  lead: {
    en: "Tell us about your plans in Dubai. We reply within one business day.",
    pt: "Conte seus planos em Dubai. Respondemos em até um dia útil.",
    es: "Cuéntenos sus planes en Dubái. Respondemos en un plazo de un día hábil.",
  } as L,
  fields: {
    name: { en: "Name", pt: "Nome", es: "Nombre" } as L,
    email: { en: "Email", pt: "E-mail", es: "Correo" } as L,
    phone: { en: "Phone / WhatsApp", pt: "Telefone / WhatsApp", es: "Teléfono / WhatsApp" } as L,
    goal: { en: "I am looking to", pt: "Quero", es: "Quiero" } as L,
    goals: {
      en: ["Invest for rental income", "Invest for appreciation", "Buy a home", "Golden Visa", "Other"],
      pt: ["Investir para renda", "Investir para valorização", "Comprar para morar", "Golden Visa", "Outro"],
      es: ["Invertir para renta", "Invertir para valorización", "Comprar para vivir", "Golden Visa", "Otro"],
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
