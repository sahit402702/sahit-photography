'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: '#', icon: '📷' },
    { name: 'Twitter', url: '#', icon: '𝕏' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        {/* Two-column layout: Left (brand/links) + Right (social) */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* Left: Brand and Quick Links */}
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-base font-medium text-white font-handwritten">Sahit</h3>
              <p className="text-xs text-gray-500">Travel & Wildlife Photography</p>
            </div>
            
            {/* Links */}
            <nav className="flex gap-4 text-xs">
              <Link
                href="#featured"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Gallery
              </Link>
              <Link
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Contact
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Right: Social icons */}
          <div className="flex gap-4 items-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-400 hover:text-white transition-all duration-200 text-lg hover:scale-110"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="border-t border-gray-900 mt-6 pt-4">
          <p className="text-xs text-gray-500 text-center">
            © {currentYear} Sahit Tirunagari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
