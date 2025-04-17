import { Column, Meme } from '@/entities/Meme';

const initialMemes: Meme[] = [
  {
    id: 1,
    name: 'Distracted Boyfriend',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 50,
  },
  {
    id: 2,
    name: 'Mocking SpongeBob',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 76,
  },
  {
    id: 3,
    name: 'Drake Hotline Bling',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 46,
  },
  {
    id: 4,
    name: 'Two Buttons',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 94,
  },
  {
    id: 5,
    name: 'Is This a Pigeon?',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 22,
  },
  {
    id: 6,
    name: 'Expanding Brain',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 78,
  },
  {
    id: 7,
    name: 'Woman Yelling at a Cat',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 12,
  },
  {
    id: 8,
    name: 'The Scroll of Truth',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 51,
  },
  {
    id: 9,
    name: 'Philosoraptor',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 92,
  },
  {
    id: 10,
    name: 'Success Kid',
    image: 'https://heroui.com/images/hero-card-complete.jpeg',
    likes: 45,
  },
];

export const memeTableColumns: Column[] = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'image', label: 'Image' },
  { key: 'likes', label: 'Likes' },
  { key: 'actions', label: 'Actions' },
];

const globalForMemes = globalThis as unknown as {
  memes: Meme[] | undefined;
};

if (!globalForMemes.memes) {
  globalForMemes.memes = [...initialMemes]; // твої дані
}

export const getMemes = () => globalForMemes.memes!;
export const updateMeme = (updatedMeme: Meme) => {
  globalForMemes.memes = globalForMemes.memes!.map((meme) =>
    meme.id === updatedMeme.id ? { ...meme, ...updatedMeme } : meme,
  );
};
