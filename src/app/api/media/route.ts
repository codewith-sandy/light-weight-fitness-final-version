import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const photosDir = path.join(process.cwd(), 'public', 'photos', 'transformation');
    const videosDir = path.join(process.cwd(), 'public', 'videos');

    const photos = fs.existsSync(photosDir) 
      ? fs.readdirSync(photosDir).filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      : [];

    const videos = fs.existsSync(videosDir)
      ? fs.readdirSync(videosDir).filter(file => /\.(mp4|webm|ogg)$/i.test(file))
      : [];

    return NextResponse.json({ photos, videos });
  } catch (error) {
    console.error('Error listing media:', error);
    return NextResponse.json({ error: 'Failed to list media' }, { status: 500 });
  }
}
