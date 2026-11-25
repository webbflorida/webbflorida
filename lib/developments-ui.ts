import type { Locale } from "./site";

type L = Record<Locale, string>;

export const moneyFmt = (lang: Locale) =>
  new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "pt" ? "pt-BR" : "es-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const fmtDate = (iso: string, lang: Locale) => {
  const [y, m, d] = iso.split("-");
  return lang === "en" ? `${m}/${d}/${y}` : `${d}/${m}/${y}`;
};

export const DEV_T = {
  title: { en: "New developments in Miami", pt: "Lançamentos em Miami", es: "Nuevos desarrollos en Miami" } as L,
  lead: {
    en: "Residences sold directly by the developers. We present the projects, compare options and accompany you from the reservation to the closing.",
    pt: "Residências vendidas direto pelas incorporadoras. Apresentamos os projetos, comparamos as opções e acompanhamos você da reserva à escritura.",
    es: "Residencias vendidas directamente por los desarrolladores. Presentamos los proyectos, comparamos opciones y lo acompañamos de la reserva al cierre.",
  } as L,
  eyebrow: { en: "New development", pt: "Lançamento", es: "Nuevo desarrollo" } as L,
  from: { en: "Starting at", pt: "A partir de", es: "Desde" } as L,
  fromShort: { en: "from", pt: "a partir de", es: "desde" } as L,
  about: { en: "About the project", pt: "Sobre o projeto", es: "Sobre el proyecto" } as L,
  prices: { en: "Prices by residence type", pt: "Preços por tipo de residência", es: "Precios por tipo de residencia" } as L,
  priceNote: {
    en: "Prices provided by the developer on {d}, subject to availability and change without notice.",
    pt: "Preços informados pela incorporadora em {d}, sujeitos a disponibilidade e a alteração sem aviso.",
    es: "Precios informados por el desarrollador el {d}, sujetos a disponibilidad y a cambios sin aviso.",
  } as L,
  payment: { en: "Deposit schedule", pt: "Forma de pagamento", es: "Forma de pago" } as L,
  features: { en: "Highlights", pt: "Destaques", es: "Destacados" } as L,
  team: { en: "Project team", pt: "Equipe do projeto", es: "Equipo del proyecto" } as L,
  card: { en: "Interested in this project?", pt: "Tem interesse neste projeto?", es: "¿Le interesa este proyecto?" } as L,
  cardText: {
    en: "Ask for the current availability and floor plans, or schedule a visit to the sales gallery.",
    pt: "Peça a disponibilidade e as plantas atualizadas, ou agende uma visita à sala de vendas.",
    es: "Pida la disponibilidad y los planos actualizados, o agende una visita a la sala de ventas.",
  } as L,
  wa: { en: "Talk on WhatsApp", pt: "Conversar no WhatsApp", es: "Hablar por WhatsApp" } as L,
  visit: { en: "Schedule a visit", pt: "Agendar visita", es: "Agendar visita" } as L,
  waMsg: {
    en: "Hello! I'm interested in {n} in Miami. Could you send me the availability and floor plans?",
    pt: "Olá! Tenho interesse no {n}, em Miami. Pode me mandar a disponibilidade e as plantas?",
    es: "¡Hola! Me interesa {n}, en Miami. ¿Me puede enviar la disponibilidad y los planos?",
  } as L,
  photosSoon: { en: "Images coming soon", pt: "Imagens em breve", es: "Imágenes próximamente" } as L,
  render: { en: "artist's rendering", pt: "imagem ilustrativa", es: "imagen ilustrativa" } as L,
  all: { en: "View all {n} images", pt: "Ver as {n} imagens", es: "Ver las {n} imágenes" } as L,
  close: { en: "Close", pt: "Fechar", es: "Cerrar" } as L,
  prev: { en: "Previous image", pt: "Imagem anterior", es: "Imagen anterior" } as L,
  next: { en: "Next image", pt: "Próxima imagem", es: "Imagen siguiente" } as L,
  see: { en: "See the project", pt: "Ver o projeto", es: "Ver el proyecto" } as L,
  legal: {
    en: "Webb Florida Realty acts as a cooperating broker and is not the developer. Information provided by the developer's sales team and deemed reliable but not guaranteed.",
    pt: "A Webb Florida Realty atua como corretora cooperadora e não é a incorporadora. Informações fornecidas pela equipe de vendas da incorporadora, consideradas confiáveis, mas não garantidas.",
    es: "Webb Florida Realty actúa como corredor cooperador y no es el desarrollador. Información proporcionada por el equipo de ventas del desarrollador, considerada confiable pero no garantizada.",
  } as L,
  renderLegal: {
    en: "Images are artist's conceptual renderings.",
    pt: "As imagens são ilustrações artísticas do projeto.",
    es: "Las imágenes son representaciones artísticas del proyecto.",
  } as L,
  // Aviso exigido pela lei da Flórida para anúncios de condomínio em lançamento (mantém o texto oficial em inglês).
  fl718:
    "ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING THE REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE TO THIS BROCHURE AND TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE.",
};
