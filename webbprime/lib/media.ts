// Fotos do site. Enquanto `src` estiver vazio, aparece um espaço reservado com a dica de qual foto vai ali.
// Para trocar: salve a imagem em public/photos/ e preencha o src (ex.: "/photos/hero.jpg").
export const SHOW_PHOTO_HINTS = false;

export type Slot = { src: string; hint: string; alt: string };

export const MEDIA: Record<string, Slot> = {
  hero: { src: "", hint: "Foto ou vídeo em tela cheia: skyline de Dubai ao entardecer, vista da Marina ou do Downtown", alt: "Dubai" },
  invest: { src: "", hint: "Dubai: vista aérea da costa e das ilhas", alt: "Dubai" },
  goldenvisa: { src: "", hint: "Dubai: arquitetura moderna, Museum of the Future ou DIFC", alt: "Dubai" },
  ramon: { src: "", hint: "Retrato profissional do Ramon (vertical)", alt: "Ramon Brandão" },
  story: { src: "", hint: "Foto ampla: Dubai à noite ou interior de um empreendimento", alt: "Webb" },
};
