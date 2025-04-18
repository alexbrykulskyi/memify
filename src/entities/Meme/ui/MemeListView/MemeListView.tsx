'use client';

import { Column, Meme } from '@/entities/Meme';
import { Card } from '@/shared/ui/Card';
import { useEffect, useState } from "react";

export const MemeListView = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch('/api/memes');
      const data: {
        memes: Meme[];
        columns: Column[];
      } = await res.json();
      setMemes(data.memes);
    };
    fetchMemes();
  }, []);

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
