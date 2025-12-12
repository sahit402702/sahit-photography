import { readdirSync } from 'fs';
import { join } from 'path';
import GalleryGridClient from './GalleryGridClient';

async function getGalleryImages() {
  try {
    const imagesDir = join(process.cwd(), 'public/assets/images');
    const files = readdirSync(imagesDir);

    const imageFiles = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort()
      .map((file) => `/assets/images/${file}`);

    return imageFiles;
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return [];
  }
}

export default async function GalleryGrid() {
  const galleryImages = await getGalleryImages();
  return <GalleryGridClient initialImages={galleryImages} />;
}
