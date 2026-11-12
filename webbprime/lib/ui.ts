import type { Locale } from "./site";

type UI = {
  nav: { projects: string; invest: string; visa: string; about: string; contact: string };
  cta: { talk: string; whatsapp: string; waMsg: string; details: string; allProjects: string };
  footer: { tagline: string; company: string; privacy: string; terms: string; florida: string; floridaLink: string; licensed: string; orn: string };
  preview: string;
  breadcrumbHome: string;
};

export const UI: Record<Locale, UI> = {
  en: {
    nav: { projects: "Projects", invest: "Invest in Dubai", visa: "Golden Visa", about: "Our story", contact: "Contact" },
    cta: {
      talk: "Schedule a private consultation",
      whatsapp: "WhatsApp",
      waMsg: "Hello, I would like to talk to Webb Prime Real Estate about Dubai.",
      details: "Request price list and availability",
      allProjects: "All projects",
    },
    footer: {
      tagline: "Dubai · United Arab Emirates",
      company: "Webb Prime",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      florida: "Homes in Orlando and Miami?",
      floridaLink: "Visit Webb Florida Realty",
      licensed: "Real estate brokerage registered with RERA, Dubai",
      orn: "ORN",
    },
    preview: "Preview version: contact details and RERA numbers are placeholders.",
    breadcrumbHome: "Home",
  },
  pt: {
    nav: { projects: "Projetos", invest: "Investir em Dubai", visa: "Golden Visa", about: "Nossa história", contact: "Contato" },
    cta: {
      talk: "Agendar uma conversa",
      whatsapp: "WhatsApp",
      waMsg: "Olá, gostaria de falar com a Webb Prime Real Estate sobre Dubai.",
      details: "Pedir tabela e unidades disponíveis",
      allProjects: "Todos os projetos",
    },
    footer: {
      tagline: "Dubai · Emirados Árabes Unidos",
      company: "Webb Prime",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      florida: "Imóveis em Orlando e Miami?",
      floridaLink: "Conheça a Webb Florida Realty",
      licensed: "Imobiliária registrada na RERA, Dubai",
      orn: "ORN",
    },
    preview: "Versão de prévia: contatos e números da RERA são provisórios.",
    breadcrumbHome: "Início",
  },
  es: {
    nav: { projects: "Proyectos", invest: "Invertir en Dubái", visa: "Golden Visa", about: "Nuestra historia", contact: "Contacto" },
    cta: {
      talk: "Agendar una conversación",
      whatsapp: "WhatsApp",
      waMsg: "Hola, me gustaría hablar con Webb Prime Real Estate sobre Dubái.",
      details: "Pedir lista de precios y unidades disponibles",
      allProjects: "Todos los proyectos",
    },
    footer: {
      tagline: "Dubái · Emiratos Árabes Unidos",
      company: "Webb Prime",
      privacy: "Política de Privacidad",
      terms: "Términos de Uso",
      florida: "¿Propiedades en Orlando y Miami?",
      floridaLink: "Conozca Webb Florida Realty",
      licensed: "Inmobiliaria registrada en la RERA, Dubái",
      orn: "ORN",
    },
    preview: "Versión preliminar: contactos y números de la RERA son provisionales.",
    breadcrumbHome: "Inicio",
  },
};
