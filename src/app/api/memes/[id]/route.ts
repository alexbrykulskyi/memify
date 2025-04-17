import { NextRequest, NextResponse } from 'next/server';
import { getMemes } from '@/shared/mockData/memes';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop(); // отримуємо [id] з URL

  if (!id) {
    return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
  }

  const meme = getMemes().find((m) => m.id === Number(id));

  if (!meme) {
    return NextResponse.json({ error: 'Meme not found' }, { status: 404 });
  }

  return NextResponse.json(meme);
}
