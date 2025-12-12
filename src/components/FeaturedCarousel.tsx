'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const FEATURED_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
    alt: 'Serene mountain landscape by Sahitti Tirunagari - professional travel and landscape photography',
    title: 'Mountain Serenity',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
    alt: 'Golden sunset over forest by Sahitti Tirunagari - landscape photography',
    title: 'Sunset Glow',
  },
  {
    src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop',
    alt: 'Wildlife in natural habitat by Sahitti Tirunagari - professional wildlife photography',
    title: 'Wildlife Moment',
  },
  {
    src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1600&auto=format&fit=crop',
    alt: 'Ocean waves at sunrise by Sahitti Tirunagari - seascape photography',
    title: 'Ocean Vista',
  },
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1600&auto=format&fit=crop',
    alt: 'Desert dunes landscape by Sahitti Tirunagari - travel and nature photography',
    title: 'Desert Dreams',
  },
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FEATURED_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? FEATURED_IMAGES.length - 1 : prev - 1
    );
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % FEATURED_IMAGES.length);
    setIsAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  const currentImage = FEATURED_IMAGES[currentIndex];

  return (
    <section className="relative w-full h-96 md:h-[32rem] lg:h-[40rem] overflow-hidden bg-black">
      {/* Carousel */}
      <div className="relative w-full h-full">
        {/* Current Image */}
        <div className="absolute inset-0 transition-opacity duration-500">
          <Image
            src={currentImage.src}
            alt={currentImage.alt}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          {/* Overlay with title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              {currentImage.title}
            </h3>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          onMouseEnter={() => setIsAutoplay(false)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          onMouseEnter={() => setIsAutoplay(false)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-all"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {FEATURED_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay indicator */}
      <div className="absolute top-6 right-6 z-20 text-white/70 text-sm flex items-center gap-2">
        {isAutoplay && <span className="animate-pulse">●</span>}
        <span>{isAutoplay ? 'Autoplay' : 'Paused'}</span>
      </div>
    </section>
  );
}
