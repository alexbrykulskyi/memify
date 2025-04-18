'use client';

import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Column, Meme, MemeTableView } from '@/entities/Meme';
import { EditableMeme } from '@/features/EditableMeme';
import { useDisclosure } from '@heroui/react';

export const Table = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [value, setValue] = useState<Meme>();
  const [loadingId, setLoadingId] = useState<number | null>(null);
  useEffect(() => {
    const fetchMemes = async () => {
      const res = await fetch('/api/memes');
      const data: {
        memes: Meme[];
        columns: Column[];
      } = await res.json();
      setMemes(data.memes);
      setColumns(data.columns);
    };
    fetchMemes();
  }, []);

  const openEditForm = async (id: number) => {
    setLoadingId(id);
    const res = await fetch(`/api/memes/${id}`);
    const memeData: Meme = await res.json();
    setValue(memeData);
    onOpen();
    setLoadingId(null);
  };

  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <>
      <MemeTableView
        memes={memes}
        columns={columns}
        handleEdit={openEditForm}
        loadingId={loadingId}
      />
      {value && (
        <Modal
          isOpen={isOpen}
          classNames={{
            closeButton: 'hover:bg-gray-100 active:bg-gray-200',
          }}
          onOpenChange={onOpenChange}
          content={
            <EditableMeme
              value={value}
              onClose={onClose}
              setMemes={setMemes}
              setValue={setValue as Dispatch<SetStateAction<Meme>>}
            />
          }
        />
      )}
    </>
  );
};
