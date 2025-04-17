'use client';

import { Meme } from '@/entities/Meme';
import { Card } from '@/shared/ui/Card';

interface MemeListViewProps {
  memes: Meme[];
}
export const MemeListView = ({ memes }: MemeListViewProps) => {
  if (!memes || memes.length === 0) {
    return <div className="text-center text-gray-500">No memes available</div>;
  }
  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(184px,1fr))]">
      {memes.map((meme: Meme) => {
        const { id, image, likes, name } = meme;
        return <Card key={id} src={image} likes={likes} image={image} header={name} />;
      })}
    </div>
  );
};
