import {
  getKeyValue,
  Table as TableHeroUi,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@heroui/table';
import { Button } from '@heroui/button';
import { Column, Meme } from '@/entities/Meme';

interface MemeTableViewProps {
  memes: Meme[];
  columns: Column[];
  handleEdit: (id: number) => void;
  loadingId: number | null;
}

export const MemeTableView = (props: MemeTableViewProps) => {
  const { memes, columns, handleEdit, loadingId } = props;

  if (!memes || !columns) {
    return <div>No memes available</div>;
  }

  return (
    <TableHeroUi aria-label="Example static collection table">
      <TableHeader columns={columns}>
        {(column: Column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody>
        {memes.map((meme: Meme) => (
          <TableRow key={meme.id}>
            {(columnKey) => {
              return (
                <TableCell key={columnKey} className="text-gray-500">
                  {columnKey === 'actions' ? (
                    <Button
                      color="primary"
                      variant="shadow"
                      onPress={() => handleEdit(meme.id)}
                      isLoading={loadingId === meme.id}
                    >
                      Edit
                    </Button>
                  ) : (
                    getKeyValue(meme, columnKey)
                  )}
                </TableCell>
              );
            }}
          </TableRow>
        ))}
      </TableBody>
    </TableHeroUi>
  );
};
