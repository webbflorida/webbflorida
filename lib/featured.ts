import type { Locale } from "./site";

type L = Record<Locale, string>;

// Imóveis de construção nova divulgados pela Webb (casas prontas vendidas pela construtora).
// Regra do Ramon: sem endereço, sem nome da construtora e sem nome da comunidade.
// Preços conferidos no site da construtora na data em `checked`. Atualizar ou remover quando mudar.
export type Featured = {
  slug: string;
  city: L;
  title: L;
  price: number;
  beds: number;
  baths: L;
  sqft: number;
  garage: L;
  floors: number;
  desc: L;
  features: L[];
  photos: { src: string; caption: L; model?: boolean }[];
  checked: string;
};

export const FEATURED: Featured[] = [
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
