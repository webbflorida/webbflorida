// Fotos do site. Enquanto `src` estiver vazio, aparece um espaço reservado com a dica de qual foto vai ali.
// Para trocar: salve a imagem em public/photos/ e preencha o src (ex.: "/photos/hero.jpg").
export const SHOW_PHOTO_HINTS = true;

export type Slot = { src: string; hint: string; alt: string };

export const MEDIA: Record<string, Slot> = {
  hero: { src: "", hint: "Foto ou vídeo em tela cheia: casa de alto padrão ao entardecer, lago em Windermere", alt: "Orlando" },
  orlando: { src: "", hint: "Orlando: vista aérea de lago e casas em Windermere ou Dr. Phillips", alt: "Orlando" },
  miami: { src: "", hint: "Miami: skyline e baía ao entardecer", alt: "Miami" },
  ramon: { src: "", hint: "Retrato profissional do Ramon (vertical)", alt: "Ramon Brandão" },
  story: { src: "", hint: "Foto ampla: interior de alto padrão ou detalhe de arquitetura", alt: "Webb" },
};
