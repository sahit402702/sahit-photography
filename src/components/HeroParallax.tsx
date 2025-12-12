'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './Button';

export default function HeroParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('featured');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-[80px]"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop)',
        backgroundAttachment: 'fixed',
        backgroundPosition: `center ${scrollY * 0.5}px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />

      {/* Animated background image fallback */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl px-6 md:px-12">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight font-handwritten"
          style={{ opacity: 1 - scrollY / 500 }}
        >
          Sahit Tirunagari
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto font-light">
          Travel & Wildlife Photography | Capturing Nature's Untamed Beauty
        </p>

        {/* Call-to-Action Button */}
        <Button onClick={scrollToPortfolio} variant="primary">
          View Portfolio
        </Button>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
