"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    function onScroll() {
      setSmall(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      role="banner"
      aria-label="Site header"
      className={`w-full fixed top-0 left-0 z-50 ${small ? 'header-small' : 'header-large'}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between">
        <a 
          href="/" 
          aria-label="Homepage" 
          className="flex items-center gap-3 no-underline hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.png"
            alt="Sahit Tirunagari Photography Logo"
            className="logo-mark"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/assets/st_logo.png'; }}
          />
          <span className="brand-handwritten text-lg font-handwritten">Sahit Tirunagari</span>
        </a>

        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/sahit_tirunagari"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow on Instagram"
          title="Follow on Instagram"
          className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.205.63c-.704.272-1.291.656-1.875 1.24-.584.584-.968 1.171-1.24 1.875-.297.7-.498 1.57-.557 2.848C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.848.272.704.656 1.291 1.24 1.875.584.584 1.171.968 1.875 1.24.7.297 1.57.498 2.848.557C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.848-.558.704-.272 1.291-.656 1.875-1.24.584-.584.968-1.171 1.24-1.875.297-.7.498-1.57.557-2.848.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.558-2.848-.272-.704-.656-1.291-1.24-1.875-.584-.584-1.171-.968-1.875-1.24-.7-.297-1.57-.498-2.848-.557C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.17.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.355 1.056.41 2.223.061 1.265.07 1.645.07 4.849 0 3.203-.009 3.583-.070 4.849-.054 1.171-.244 1.805-.408 2.228-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.38.896-.424.164-1.058.355-2.228.41-1.265.061-1.645.07-4.849.07-3.203 0-3.583-.009-4.849-.07-1.171-.054-1.805-.244-2.228-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.355-1.056-.41-2.223-.061-1.265-.07-1.645-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.17.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.056-.355 2.223-.41 1.265-.061 1.645-.07 4.849-.07l-.003-.002zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
          </svg>
        </a>
      </div>
    </header>
  );
}
