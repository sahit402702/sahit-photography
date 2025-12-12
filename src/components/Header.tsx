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
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center gap-4">
        <a 
          href="/" 
          aria-label="Homepage" 
          className="flex items-center gap-3 no-underline hover:opacity-80 transition-opacity"
        >
          <img
            src="/logo.svg"
            alt="Brand logo"
            className="logo-mark"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/assets/st_logo.png'; }}
          />
          <span className="brand-handwritten text-lg font-handwritten">Sahit</span>
        </a>
      </div>
    </header>
  );
}
