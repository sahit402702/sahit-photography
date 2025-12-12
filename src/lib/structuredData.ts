import { Metadata } from 'next';

export function structuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sahitti Tirunagari',
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
}
