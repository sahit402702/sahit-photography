'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop',
];

export default function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleItems((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (open === null) return;
    if (e.key === 'Escape') setOpen(null);
    if (e.key === 'ArrowRight') setOpen((prev) => (prev! + 1) % GALLERY_IMAGES.length);
    if (e.key === 'ArrowLeft') setOpen((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {GALLERY_IMAGES.map((src, i) => {
          const isVisible = visibleItems.has(i);
          const isSpan = i % 3 === 0;

          return (
            <div
              key={src + i}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className={`gallery-item cursor-pointer relative overflow-hidden rounded-lg ${
                isSpan ? 'gallery-item--span2' : ''
              } ${isVisible ? 'fade-in-up' : 'observe-fade'}`}
              onClick={() => setOpen(i)}
              role="button"
              tabIndex={0}
              aria-label={`Open image ${i + 1} in lightbox`}
            >
              <div className="relative w-full h-[220px] md:h-[260px]">
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i === 0}
                  unoptimized
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {open !== null && (
        <div
          className="lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl p-2 hover:bg-white/20 rounded-full transition-all"
              onClick={() => setOpen(null)}
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Previous button */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-all"
              onClick={() => setOpen((prev) => (prev! - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next button */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full transition-all"
              onClick={() => setOpen((prev) => (prev! + 1) % GALLERY_IMAGES.length)}
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <Image
              src={GALLERY_IMAGES[open]}
              alt={`Lightbox image ${open + 1}`}
              width={1400}
              height={900}
              className="lightbox-image rounded-md"
              unoptimized
            />

            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {open + 1} / {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
