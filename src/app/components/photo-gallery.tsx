"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PhotoItem = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

type PhotoGalleryProps = {
  items: PhotoItem[];
};

export function PhotoGallery({ items }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activePhoto === null) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePhoto]);

  return (
    <>
      <div className="horizontal-scroll">
        {items.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="section-card group w-[84vw] max-w-none shrink-0 snap-start overflow-hidden p-0 text-left md:w-[52vw] md:max-w-120 lg:w-[34vw]"
            aria-label={`Open photo details for ${photo.title}`}
          >
            <div className="relative aspect-4/3 w-full bg-zinc-100 md:aspect-5/4">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 84vw, (max-width: 1024px) 52vw, 34vw"
                quality={60}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </div>
            <figcaption className="space-y-1 p-4">
              <p className="text-sm font-medium text-zinc-900">{photo.title}</p>
              <p className="text-xs text-zinc-500">{photo.subtitle}</p>
            </figcaption>
          </button>
        ))}
      </div>

      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-5xl animate-[fade-in_180ms_ease-out] overflow-hidden rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-zinc-900/55 text-white/90 transition hover:bg-zinc-900/75"
              aria-label="Close photo viewer"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12" />
                <path d="M18 6l-12 12" />
              </svg>
            </button>

            <div className="relative aspect-4/3 w-full md:aspect-video">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96vw, (max-width: 1280px) 92vw, 1280px"
                quality={72}
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-4 pr-14 text-white">
              <div>
                <p className="text-base font-semibold">{activePhoto.title}</p>
                <p className="text-sm text-zinc-300">{activePhoto.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
