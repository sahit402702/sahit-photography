import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const baseUrl = "https://sahittirunagari.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Sahit Tirunagari – Professional Photography Portfolio",
  description: "Award-winning photography portfolio showcasing travel, wildlife, and creative portraits. Professional photographer specializing in landscapes and nature.",
  keywords: [
    "photographer",
    "photography portfolio",
    "travel photography",
    "wildlife photography",
    "professional photographer",
    "portrait photography",
    "landscape photography"
  ],
  authors: [{ name: "Sahit Tirunagari" }],
  creator: "Sahit Tirunagari",
  publisher: "Sahit Tirunagari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Sahit Tirunagari Photography",
    title: "Sahit Tirunagari – Professional Photography Portfolio",
    description: "Award-winning photography portfolio showcasing travel, wildlife, and creative portraits. Professional photographer specializing in landscapes and nature.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sahit Tirunagari Photography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sahittiPhoto",
    creator: "@sahittiPhoto",
    title: "Sahit Tirunagari – Professional Photography Portfolio",
    description: "Award-winning photography portfolio showcasing travel, wildlife, and creative portraits.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sahit Tirunagari Photography Portfolio",
      },
    ],
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sahit Tirunagari',
    url: 'https://sahittirunagari.com',
    sameAs: [
      'https://twitter.com/sahittiPhoto',
      'https://instagram.com/sahittiPhoto',
    ],
    image: 'https://sahittirunagari.com/og-image.jpg',
    description: 'Professional photographer specializing in travel, wildlife, and creative portraits',
    jobTitle: 'Professional Photographer',
    email: 'hello@sahittirunagari.com',
    knowsAbout: [
      'Travel Photography',
      'Wildlife Photography',
      'Portrait Photography',
      'Landscape Photography',
      'Nature Photography',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
