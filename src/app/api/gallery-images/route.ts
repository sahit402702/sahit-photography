import { readdirSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const imagesDir = join(process.cwd(), 'public/assets/images');
    const files = readdirSync(imagesDir);

    // Filter for image files and sort alphabetically
    const imageFiles = files
      .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort()
      .map((file) => `/assets/images/${file}`);

    return NextResponse.json({ images: imageFiles });
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return NextResponse.json({ images: [], error: 'Failed to load images' }, { status: 500 });
  }
}
