"use client";
import { useCallback, useEffect, useRef, useState } from "react";

type Pic = { src: string; alt: string; caption: string };
type Labels = { all: string; close: string; prev: string; next: string };

// Galeria da página do imóvel: mosaico (1 foto grande + 4) e tela cheia com todas as fotos.
export default function Gallery({ photos, labels }: { photos: Pic[]; labels: Labels }) {
  const [open, setOpen] = useState<number | null>(null);
  const touch = useRef<number | null>(null);
  const n = photos.length;
  const go = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n)), [n]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, go]);

  const shown = photos.slice(0, 5);
  return (
    <>
      <div className={`gx n${Math.min(n, 5)}`}>
        {shown.map((p, i) => (
          <button key={p.src} type="button" className="gx-tile" onClick={() => setOpen(i)} aria-label={p.alt}>
            <img src={p.src} alt={p.alt} loading={i === 0 ? "eager" : "lazy"} />
          </button>
        ))}
        {n > 1 && (
          <button type="button" className="gx-all" onClick={() => setOpen(0)}>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M1 1h5v5H1zM8 1h5v5H8zM1 8h5v5H1zM8 8h5v5H8z" fill="currentColor" /></svg>
            {labels.all.replace("{n}", String(n))}
          </button>
        )}
      </div>

      {open !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={photos[open].alt} onClick={() => setOpen(null)}>
          <div className="lb-top" onClick={(e) => e.stopPropagation()}>
            <span>{open + 1} / {n}</span>
            <button type="button" className="lb-x" onClick={() => setOpen(null)} aria-label={labels.close}>✕</button>
          </div>
          <figure
            className="lb-fig"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => { touch.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touch.current === null) return;
              const dx = e.changedTouches[0].clientX - touch.current;
              if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
              touch.current = null;
            }}
          >
            <img src={photos[open].src} alt={photos[open].alt} />
            <figcaption>{photos[open].caption}</figcaption>
          </figure>
          <button type="button" className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label={labels.prev}>‹</button>
          <button type="button" className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); go(1); }} aria-label={labels.next}>›</button>
        </div>
      )}
    </>
  );
}
