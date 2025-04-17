import { Table } from '@/widgets/Table';
import { getColumns, getMemes } from '@/shared/mockData/memes';

const TablePage = async () => {
  const memes = getMemes();
  const columns = getColumns();
  return (
    <main>
      <div className="bg-white rounded-lg shadow p-4">
        <Table memes={memes} columns={columns} />
      </div>
    </main>
  );
};

export default TablePage;
