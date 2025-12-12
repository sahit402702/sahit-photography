'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/sahit_tirunagari', icon: 'instagram' },
    { name: 'Twitter', url: '#', icon: 'twitter' },
    { name: 'LinkedIn', url: '#', icon: 'linkedin' },
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
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                aria-label={link.name}
                title={link.name}
              >
                {link.icon === 'instagram' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.205.63c-.704.272-1.291.656-1.875 1.24-.584.584-.968 1.171-1.24 1.875-.297.7-.498 1.57-.557 2.848C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.848.272.704.656 1.291 1.24 1.875.584.584 1.171.968 1.875 1.24.7.297 1.57.498 2.848.557C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.848-.558.704-.272 1.291-.656 1.875-1.24.584-.584.968-1.171 1.24-1.875.297-.7.498-1.57.557-2.848.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.558-2.848-.272-.704-.656-1.291-1.24-1.875-.584-.584-1.171-.968-1.875-1.24-.7-.297-1.57-.498-2.848-.557C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.17.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.355 1.056.41 2.223.061 1.265.07 1.645.07 4.849 0 3.203-.009 3.583-.070 4.849-.054 1.171-.244 1.805-.408 2.228-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.38.896-.424.164-1.058.355-2.228.41-1.265.061-1.645.07-4.849.07-3.203 0-3.583-.009-4.849-.07-1.171-.054-1.805-.244-2.228-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.355-1.056-.41-2.223-.061-1.265-.07-1.645-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.17.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.056-.355 2.223-.41 1.265-.061 1.645-.07 4.849-.07l-.003-.002z" />
                  </svg>
                )}
                {link.icon === 'twitter' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 002.856-9.97 10.002 10.002 0 01-2.825.947 4.958 4.958 0 00-8.86 3.514c0 .39.045.765.144 1.126a14.05 14.05 0 01-10.491-5.289 4.957 4.957 0 001.535 6.61 4.928 4.928 0 01-2.244-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.964 4.964 0 004.6 3.44A9.964 9.964 0 010 19.54a14.01 14.01 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                )}
                {link.icon === 'linkedin' && (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.666 1.199-1.612 2.923-1.612 2.136 0 3.729 1.398 3.729 4.403v5.58zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.71 0-.955.769-1.71 1.959-1.71 1.189 0 1.917.754 1.948 1.71 0 .952-.759 1.71-1.992 1.71zm1.581 11.597H3.714V9.505h3.204v10.947zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                )}
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
