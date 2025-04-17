import { Table } from '@/widgets/Table';
import { MemesResponse } from '@/entities/Meme';

const TablePage = async () => {
  const res = await fetch('http://localhost:3000/api/memes');
  const memesData: MemesResponse = await res.json();
  const { memes, columns } = memesData;
  return (
    <main>
      <div className="bg-white rounded-lg shadow p-4">
        <Table memes={memes} columns={columns} />
      </div>
    </main>
  );
};

export default TablePage;
