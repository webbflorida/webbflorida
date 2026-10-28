import type { Locale } from "./site";

type UI = {
  nav: { homes: string; areas: string; services: string; guides: string; about: string; team: string; contact: string };
  langName: string;
  cta: { talk: string; whatsapp: string; waMsg: string; explore: string; readGuide: string; allGuides: string; allAreas: string; seeHomes: string };
  footer: {
    tagline: string;
    explore: string;
    company: string;
    legal: string;
    privacy: string;
    terms: string;
    faq: string;
    dubai: string;
    licensed: string;
    equal: string;
    mls: string;
    rights: string;
  };
  preview: string;
  breadcrumbHome: string;
  updated: string;
  by: string;
};

export const UI: Record<Locale, UI> = {
  en: {
    nav: { homes: "Homes", areas: "Areas", services: "Advisory", guides: "Guides", about: "Our story", team: "Team", contact: "Contact" },
    langName: "English",
    cta: {
      talk: "Schedule a private consultation",
      whatsapp: "WhatsApp",
      waMsg: "Hello, I would like to talk to Webb Florida Realty.",
      explore: "Explore",
      readGuide: "Read the guide",
      allGuides: "All guides",
      allAreas: "All areas",
      seeHomes: "Search homes",
    },
    footer: {
      tagline: "Orlando · Miami",
      explore: "Explore",
      company: "Webb",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      faq: "FAQ",
      dubai: "Webb Real Estate · Dubai",
      licensed: "Licensed Real Estate Brokerage in Florida",
      equal: "Equal Housing Opportunity",
      mls: "Listing information is deemed reliable but not guaranteed.",
      rights: "All rights reserved.",
    },
    preview: "Preview version: contact details and license number are placeholders.",
    breadcrumbHome: "Home",
    updated: "Reviewed",
    by: "By",
  },
  pt: {
    nav: { homes: "Imóveis", areas: "Regiões", services: "Assessoria", guides: "Guias", about: "Nossa história", team: "Equipe", contact: "Contato" },
    langName: "Português",
    cta: {
      talk: "Agendar uma conversa",
      whatsapp: "WhatsApp",
      waMsg: "Olá, gostaria de falar com a Webb Florida Realty.",
      explore: "Conhecer",
      readGuide: "Ler o guia",
      allGuides: "Todos os guias",
      allAreas: "Todas as regiões",
      seeHomes: "Buscar imóveis",
    },
    footer: {
      tagline: "Orlando · Miami",
      explore: "Explorar",
      company: "A Webb",
      legal: "Legal",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      faq: "Perguntas frequentes",
      dubai: "Webb Real Estate · Dubai",
      licensed: "Imobiliária licenciada na Flórida",
      equal: "Equal Housing Opportunity",
      mls: "Informações de imóveis consideradas confiáveis, mas não garantidas.",
      rights: "Todos os direitos reservados.",
    },
    preview: "Versão de prévia: contatos e número de licença são provisórios.",
    breadcrumbHome: "Início",
    updated: "Revisado em",
    by: "Por",
  },
  es: {
    nav: { homes: "Propiedades", areas: "Zonas", services: "Asesoría", guides: "Guías", about: "Nuestra historia", team: "Equipo", contact: "Contacto" },
    langName: "Español",
    cta: {
      talk: "Agendar una conversación",
      whatsapp: "WhatsApp",
      waMsg: "Hola, me gustaría hablar con Webb Florida Realty.",
      explore: "Conocer",
      readGuide: "Leer la guía",
      allGuides: "Todas las guías",
      allAreas: "Todas las zonas",
      seeHomes: "Buscar propiedades",
    },
    footer: {
      tagline: "Orlando · Miami",
      explore: "Explorar",
      company: "Webb",
      legal: "Legal",
      privacy: "Política de Privacidad",
      terms: "Términos de Uso",
      faq: "Preguntas frecuentes",
      dubai: "Webb Real Estate · Dubái",
      licensed: "Inmobiliaria con licencia en Florida",
      equal: "Equal Housing Opportunity",
      mls: "La información de propiedades se considera confiable, pero no está garantizada.",
      rights: "Todos los derechos reservados.",
    },
    preview: "Versión preliminar: contactos y número de licencia son provisionales.",
    breadcrumbHome: "Inicio",
    updated: "Revisado el",
    by: "Por",
  },
};
