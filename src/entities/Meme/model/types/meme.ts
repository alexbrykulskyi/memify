export interface Meme {
  id: number;
  name: string;
  image: string;
  likes: number;
}

export type Column = {
  key: keyof Meme | 'actions';
  label: string;
};

export type MemesResponse = {
  memes: Meme[];
  columns: Column[];
};
