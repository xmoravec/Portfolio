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
            className="section-card group w-[72vw] max-w-105 shrink-0 snap-start overflow-hidden p-0 text-left md:w-[44vw] lg:w-[30vw]"
            aria-label={`Open photo details for ${photo.title}`}
          >
            <div className="relative aspect-5/4 w-full bg-zinc-100">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 72vw, (max-width: 1024px) 44vw, 420px"
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
            className="w-full max-w-4xl animate-[fade-in_180ms_ease-out] overflow-hidden rounded-2xl border border-white/20 bg-zinc-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1280px) 100vw, 1200px"
                quality={72}
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-4 text-white">
              <div>
                <p className="text-base font-semibold">{activePhoto.title}</p>
                <p className="text-sm text-zinc-300">{activePhoto.subtitle}</p>
              </div>
              <button type="button" onClick={() => setActiveIndex(null)} className="button-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
