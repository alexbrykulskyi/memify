import { MemeListView } from '@/entities/Meme';
import { getMemes } from '@/shared/mockData/memes';

const ListPage = async () => {
  const memes = getMemes();
  return (
    <main>
      <MemeListView memes={memes} />
    </main>
  );
};

export default ListPage;
