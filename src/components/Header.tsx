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
      className={`w-full fixed top-0 left-0 z-50 transition-all ${small ? 'header-small' : 'header-large'}`}>
      <div className="max-w-5xl mx-auto px-4 flex items-center">
        <a href="/" aria-label="Homepage" className="flex items-center gap-3 text-white no-underline">
          <img
            src="assets/st_logo.png"
            alt="brand logo"
            className="logo-mark"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/logo.svg'; }}
          />
        </a>
        <span className="brand-handwritten">Sahit Tirunagari</span>

      </div>
    </header>
  );
}
