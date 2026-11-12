import { MEDIA, SHOW_PHOTO_HINTS } from "@/lib/media";

// Mostra a foto do espaço `slot`, ou um espaço reservado elegante enquanto ela não existe.
export default function Photo({ slot, className = "", hint }: { slot: string; className?: string; hint?: string }) {
  const m = MEDIA[slot] ?? { src: "", hint: hint ?? "", alt: "" };
  if (m.src) return <img className={`photo ${className}`} src={m.src} alt={m.alt} loading="lazy" />;
  return (
    <div className={`photo ph ${className}`} role="img" aria-label={m.alt}>
      {SHOW_PHOTO_HINTS && <span className="ph-hint">Foto · {hint ?? m.hint}</span>}
    </div>
  );
}
