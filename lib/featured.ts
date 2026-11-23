import type { Locale } from "./site";

type L = Record<Locale, string>;

// Imóveis de construção nova divulgados pela Webb (casas prontas vendidas pela construtora).
// Regra do Ramon: sem endereço, sem nome da construtora e sem nome da comunidade.
// Preços conferidos no site da construtora na data em `checked`. Atualizar ou remover quando mudar.
// Regra do Ramon (19/11/2026): antes de publicar ou mudar um preço, conferir o valor atual numa página pública
// (MLS, Realtor.com ou Redfin) pelo endereço. Conferência semanal. Nunca citar a fonte no anúncio.
// kind "listing" = imóvel usado anunciado pela própria Webb Florida Realty (listing nosso no MLS).
export type Featured = {
  slug: string;
  kind?: "new" | "listing";
  yearBuilt?: number;
  city: L;
  title: L;
  price: number;
  beds: number;
  baths: L;
  sqft: number;
  garage?: L;
  floors?: number;
  desc: L;
  features: L[];
  photos: { src: string; caption: L; model?: boolean }[];
  // Até 4 destaques curtos mostrados em faixa logo abaixo dos números da casa.
  spotlights?: { title: L; text: L }[];
  checked: string;
};

export const FEATURED: Featured[] = [
  {
    slug: "windermere-4-quartos-piscina",
    kind: "listing",
    yearBuilt: 2018,
    city: { en: "Windermere", pt: "Windermere", es: "Windermere" },
    title: { en: "Renovated 4-bedroom home with heated pool", pt: "Casa de 4 quartos reformada, com piscina aquecida", es: "Casa de 4 habitaciones renovada, con piscina climatizada" },
    price: 1153000,
    beds: 4,
    baths: { en: "3 full + half bath", pt: "3 completos + lavabo", es: "3 completos + medio baño" },
    sqft: 2665,
    garage: { en: "2 cars", pt: "2 carros", es: "2 autos" },
    floors: 2,
    desc: {
      en: "Two-story home in Windermere, built in 2018 and renovated in 2026, sold furnished and decorated. The ground floor has a guest suite with its own bath, a home office, a separate media room, the living areas and a custom kitchen with a large island, integrated lighting and plenty of storage. Upstairs, the primary suite has a walk-in closet and a bath with a freestanding tub, double vanity and an oversized shower with two showerheads, and the Disney fireworks can be seen from the bedroom. Italian wallpaper, wood paneling, custom window treatments and LED lighting throughout. Outside: a covered lanai and a private heated pool facing the landscaped backyard.",
      pt: "Casa de dois andares em Windermere, construída em 2018 e reformada em 2026, vendida mobiliada e decorada. No térreo ficam uma suíte de hóspedes com banheiro próprio, escritório, sala de TV separada, as salas de estar e a cozinha sob medida, com ilha grande, iluminação embutida e muito espaço de armário. No andar de cima, a suíte principal tem closet e banheiro com banheira freestanding, bancada com duas pias e box amplo com duas duchas, e do quarto dá para ver os fogos da Disney. Papel de parede italiano, painéis de madeira, cortinas sob medida e iluminação LED em toda a casa. Na área externa: varanda coberta (lanai) e piscina aquecida privativa voltada para o jardim.",
      es: "Casa de dos pisos en Windermere, construida en 2018 y renovada en 2026, se vende amueblada y decorada. En la planta baja hay una suite de huéspedes con baño propio, oficina, sala de TV independiente, las áreas sociales y una cocina a medida con isla grande, iluminación integrada y mucho almacenamiento. Arriba, la suite principal tiene vestidor y baño con bañera exenta, doble lavabo y ducha amplia con dos regaderas, y desde la habitación se ven los fuegos artificiales de Disney. Papel tapiz italiano, paneles de madera, cortinas a medida e iluminación LED en toda la casa. Afuera: lanai cubierto y piscina climatizada privada frente al jardín.",
    },
    features: [
      { en: "Sold furnished and decorated", pt: "Vendida mobiliada e decorada", es: "Se vende amueblada y decorada" },
      { en: "Private heated pool (28 x 15 ft)", pt: "Piscina aquecida privativa (8,5 x 4,5 m)", es: "Piscina climatizada privada (8,5 x 4,5 m)" },
      { en: "Guest suite on the ground floor", pt: "Suíte de hóspedes no térreo", es: "Suite de huéspedes en la planta baja" },
      { en: "Home office and media room", pt: "Escritório e sala de TV", es: "Oficina y sala de TV" },
      { en: "Disney fireworks view from the primary suite", pt: "Vista dos fogos da Disney da suíte principal", es: "Vista de los fuegos de Disney desde la suite principal" },
      { en: "Custom kitchen with large island", pt: "Cozinha sob medida com ilha grande", es: "Cocina a medida con isla grande" },
      { en: "Primary bath with freestanding tub and double shower", pt: "Banheiro da suíte com banheira freestanding e ducha dupla", es: "Baño principal con bañera exenta y ducha doble" },
      { en: "Italian wallpaper, wood paneling and LED lighting", pt: "Papel de parede italiano, painéis de madeira e iluminação LED", es: "Papel tapiz italiano, paneles de madera e iluminación LED" },
      { en: "Community pool and playground", pt: "Piscina e playground na comunidade", es: "Piscina y área de juegos en la comunidad" },
    ],
    // Fotos enviadas pelo Ramon em 23/11/2026. A do lavabo ficou de fora (reflexo de quem fotografou no espelho).
    photos: [
      { src: "/homes/windermere-4-quartos-piscina/fundos-piscina.jpg", caption: { en: "Back of the home with the heated pool", pt: "Fundos da casa com a piscina aquecida", es: "Parte trasera con la piscina climatizada" } },
      { src: "/homes/windermere-4-quartos-piscina/piscina.jpg", caption: { en: "Private pool and backyard", pt: "Piscina privativa e jardim", es: "Piscina privada y jardín" } },
      { src: "/homes/windermere-4-quartos-piscina/lanai.jpg", caption: { en: "Covered lanai", pt: "Varanda coberta (lanai)", es: "Lanai cubierto" } },
      { src: "/homes/windermere-4-quartos-piscina/sala-cozinha.jpg", caption: { en: "Living room and kitchen", pt: "Sala de estar e cozinha", es: "Sala y cocina" } },
      { src: "/homes/windermere-4-quartos-piscina/jantar.jpg", caption: { en: "Dining area", pt: "Sala de jantar", es: "Comedor" } },
      { src: "/homes/windermere-4-quartos-piscina/cozinha.jpg", caption: { en: "Custom kitchen with island", pt: "Cozinha sob medida com ilha", es: "Cocina a medida con isla" } },
      { src: "/homes/windermere-4-quartos-piscina/sala.jpg", caption: { en: "Living room", pt: "Sala de estar", es: "Sala" } },
      { src: "/homes/windermere-4-quartos-piscina/loft.jpg", caption: { en: "Upstairs living area", pt: "Sala íntima no andar de cima", es: "Sala en el segundo piso" } },
      { src: "/homes/windermere-4-quartos-piscina/sala-tv.jpg", caption: { en: "Media room", pt: "Sala de TV", es: "Sala de TV" } },
      { src: "/homes/windermere-4-quartos-piscina/quarto-1.jpg", caption: { en: "Bedroom", pt: "Quarto", es: "Habitación" } },
      { src: "/homes/windermere-4-quartos-piscina/closet.jpg", caption: { en: "Walk-in closet", pt: "Closet", es: "Vestidor" } },
      { src: "/homes/windermere-4-quartos-piscina/banheiro-suite.jpg", caption: { en: "Primary bath", pt: "Banheiro da suíte principal", es: "Baño principal" } },
      { src: "/homes/windermere-4-quartos-piscina/quarto-2.jpg", caption: { en: "Bedroom", pt: "Quarto", es: "Habitación" } },
      { src: "/homes/windermere-4-quartos-piscina/quarto-3.jpg", caption: { en: "Bedroom", pt: "Quarto", es: "Habitación" } },
      { src: "/homes/windermere-4-quartos-piscina/piscina-noite.jpg", caption: { en: "Pool at night", pt: "Piscina à noite", es: "Piscina de noche" } },
    ],
    spotlights: [
      { title: { en: "Heated pool", pt: "Piscina aquecida", es: "Piscina climatizada" }, text: { en: "Private, 28 x 15 ft, facing the backyard", pt: "Privativa, 8,5 x 4,5 m, voltada para o jardim", es: "Privada, 8,5 x 4,5 m, frente al jardín" } },
      { title: { en: "Disney fireworks", pt: "Fogos da Disney", es: "Fuegos de Disney" }, text: { en: "Visible from the primary suite", pt: "Vistos da suíte principal", es: "Visibles desde la suite principal" } },
      { title: { en: "Furnished", pt: "Mobiliada", es: "Amueblada" }, text: { en: "Sold furnished and decorated", pt: "Vendida mobiliada e decorada", es: "Se vende amueblada y decorada" } },
      { title: { en: "Guest suite", pt: "Suíte de hóspedes", es: "Suite de huéspedes" }, text: { en: "On the ground floor, with its own bath", pt: "No térreo, com banheiro próprio", es: "En la planta baja, con baño propio" } },
    ],
    checked: "2026-11-19",
  },
  {
    slug: "horizon-west-3-quartos",
    city: { en: "Horizon West · Winter Garden", pt: "Horizon West · Winter Garden", es: "Horizon West · Winter Garden" },
    title: { en: "3-bedroom home, ready to move in", pt: "Casa de 3 quartos pronta para morar", es: "Casa de 3 habitaciones lista para mudarse" },
    price: 550000,
    beds: 3,
    baths: { en: "3 full + half bath", pt: "3 completos + lavabo", es: "3 completos + medio baño" },
    sqft: 2149,
    garage: { en: "2 cars", pt: "2 carros", es: "2 autos" },
    floors: 2,
    desc: {
      en: "New two-story home in Horizon West, Winter Garden. The ground floor has the living room, an open kitchen next to the covered lanai, and one secondary bedroom with its own bath. Upstairs are the primary suite, with a dual-sink vanity and a large shower, the third bedroom and the laundry room.",
      pt: "Casa nova de dois andares em Horizon West, Winter Garden. No térreo ficam a sala, a cozinha aberta ao lado da varanda coberta (lanai) e um quarto com banheiro próprio. No segundo andar estão a suíte principal, com banheiro de duas pias e box amplo, o terceiro quarto e a lavanderia.",
      es: "Casa nueva de dos pisos en Horizon West, Winter Garden. En la planta baja están la sala, la cocina abierta junto al lanai cubierto y una habitación con baño propio. Arriba están la suite principal, con lavabo doble y ducha amplia, la tercera habitación y la lavandería.",
    },
    features: [
      { en: "Community pool and cabana", pt: "Piscina e cabana na comunidade", es: "Piscina y cabaña en la comunidad" },
      { en: "Dog park and walking trails", pt: "Dog park e trilhas", es: "Parque para perros y senderos" },
      { en: "Covered lanai", pt: "Varanda coberta (lanai)", es: "Lanai cubierto" },
      { en: "Laundry room upstairs", pt: "Lavanderia no segundo andar", es: "Lavandería en el segundo piso" },
      { en: "Detached 2-car garage", pt: "Garagem para 2 carros separada da casa", es: "Garaje para 2 autos separado de la casa" },
    ],
    photos: [
      { src: "/homes/horizon-west-3-quartos/exterior.jpg", caption: { en: "Illustrative rendering of the front", pt: "Imagem ilustrativa da fachada", es: "Imagen ilustrativa de la fachada" } },
      { src: "/homes/horizon-west-3-quartos/cozinha.jpg", caption: { en: "Kitchen", pt: "Cozinha", es: "Cocina" }, model: true },
      { src: "/homes/horizon-west-3-quartos/sala.jpg", caption: { en: "Living room", pt: "Sala de estar", es: "Sala" }, model: true },
      { src: "/homes/horizon-west-3-quartos/suite.jpg", caption: { en: "Primary suite", pt: "Suíte principal", es: "Suite principal" }, model: true },
      { src: "/homes/horizon-west-3-quartos/comunidade.jpg", caption: { en: "Community pool", pt: "Piscina da comunidade", es: "Piscina de la comunidad" } },
    ],
    checked: "2026-10-29",
  },
  {
    slug: "clermont-townhome-3-quartos",
    city: { en: "Clermont", pt: "Clermont", es: "Clermont" },
    title: { en: "3-bedroom townhome, ready to move in", pt: "Townhome de 3 quartos pronta para morar", es: "Townhome de 3 habitaciones lista para mudarse" },
    price: 399990,
    beds: 3,
    baths: { en: "2 full + half bath", pt: "2 completos + lavabo", es: "2 completos + medio baño" },
    sqft: 1652,
    garage: { en: "2 cars", pt: "2 carros", es: "2 autos" },
    floors: 2,
    desc: {
      en: "New two-story townhome in Clermont, west of Orlando. The ground floor has tile flooring, an open kitchen with white cabinets, quartz countertops and a subway tile backsplash, and the living and dining areas. The three bedrooms are upstairs. Refrigerator, washer, dryer and blinds are included.",
      pt: "Townhome nova de dois andares em Clermont, a oeste de Orlando. O térreo tem piso cerâmico, cozinha aberta com armários brancos, bancada de quartzo e revestimento subway, além da sala de estar e de jantar. Os três quartos ficam no segundo andar. Geladeira, lavadora, secadora e persianas estão incluídas.",
      es: "Townhome nueva de dos pisos en Clermont, al oeste de Orlando. La planta baja tiene piso de cerámica, cocina abierta con gabinetes blancos, encimera de cuarzo y revestimiento subway, además de la sala y el comedor. Las tres habitaciones están arriba. Incluye refrigerador, lavadora, secadora y persianas.",
    },
    features: [
      { en: "Community pool", pt: "Piscina na comunidade", es: "Piscina en la comunidad" },
      { en: "Walking distance to pickleball courts and soccer field", pt: "Perto das quadras de pickleball e do campo de futebol", es: "Cerca de las canchas de pickleball y del campo de fútbol" },
      { en: "Quartz countertops", pt: "Bancada de quartzo", es: "Encimera de cuarzo" },
      { en: "Appliances and blinds included", pt: "Eletrodomésticos e persianas incluídos", es: "Electrodomésticos y persianas incluidos" },
    ],
    photos: [
      { src: "/homes/clermont-townhome-3-quartos/exterior.jpg", caption: { en: "Illustrative rendering of the front", pt: "Imagem ilustrativa da fachada", es: "Imagen ilustrativa de la fachada" } },
      { src: "/homes/clermont-townhome-3-quartos/cozinha.jpg", caption: { en: "Kitchen", pt: "Cozinha", es: "Cocina" }, model: true },
      { src: "/homes/clermont-townhome-3-quartos/sala.jpg", caption: { en: "Living room", pt: "Sala de estar", es: "Sala" }, model: true },
      { src: "/homes/clermont-townhome-3-quartos/suite.jpg", caption: { en: "Primary suite", pt: "Suíte principal", es: "Suite principal" }, model: true },
      { src: "/homes/clermont-townhome-3-quartos/patio.jpg", caption: { en: "Covered patio", pt: "Pátio coberto", es: "Patio cubierto" }, model: true },
    ],
    checked: "2026-10-29",
  },
];
