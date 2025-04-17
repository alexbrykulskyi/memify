import { NextRequest, NextResponse } from 'next/server';
import { getMemes } from '@/shared/mockData/memes';

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const id = Number(context.params.id);
  const memes = getMemes();
  const meme = memes.find((m) => m.id === id);

  if (!meme) {
    return NextResponse.json({ error: 'Meme not found' }, { status: 404 });
  }

  return NextResponse.json(meme);
}
