import type { Locale } from "./site";

// Equipe de corretores. Para adicionar alguém: copie um bloco, preencha e coloque a foto em MEDIA (lib/media.ts).
// Florida: mostrar só quem tem licença ativa vinculada à Webb Florida Realty.
export type Member = {
  name: string;
  role: Record<Locale, string>;
  languages: string;
  photo: string; // chave em MEDIA
  email?: string;
  phone?: string;
};

export const TEAM: Member[] = [
  {
    name: "Ramon Brandão",
    role: { en: "Broker", pt: "Broker", es: "Broker" },
    languages: "Português · English · Español",
    photo: "ramon",
    email: "info@webbflorida.com",
  },
];

export const TEAM_TEXT = {
  title: { en: "Meet the team", pt: "Conheça nosso time", es: "Conozca nuestro equipo" } as Record<Locale, string>,
  lead: {
    en: "The Webb Florida Realty team in Orlando and Miami.",
    pt: "A equipe da Webb Florida Realty em Orlando e Miami.",
    es: "El equipo de Webb Florida Realty en Orlando y Miami.",
  } as Record<Locale, string>,
  contact: { en: "Contact", pt: "Contato", es: "Contacto" } as Record<Locale, string>,
};
