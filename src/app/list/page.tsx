import { MemeListView, MemesResponse } from '@/entities/Meme';

const ListPage = async () => {
  const res = await fetch('http://localhost:3000/api/memes');
  const memesData: MemesResponse = await res.json();
  const { memes } = memesData;
  return (
    <main>
      <MemeListView memes={memes} />
    </main>
  );
};

export default ListPage;
