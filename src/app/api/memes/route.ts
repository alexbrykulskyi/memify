import { NextResponse } from 'next/server';
import { getMemes, memeTableColumns, updateMeme } from '@/shared/mockData/memes';

// GET /api/memes
export async function GET() {
  try {
    const memes = getMemes();
    return NextResponse.json({ memes, columns: memeTableColumns });
  } catch (error) {
    console.error('GET memes error:', error);
    return NextResponse.json({ message: 'Failed to fetch memes' }, { status: 500 });
  }
}

// PUT /api/memes
export async function PUT(req: Request) {
  try {
    const updated = await req.json();
    updateMeme(updated);
    const memes = getMemes();
    return NextResponse.json(memes);
  } catch (error) {
    console.error('PUT memes error:', error);
    return NextResponse.json({ message: 'Failed to update meme', status: 500 }, { status: 500 });
  }
}
