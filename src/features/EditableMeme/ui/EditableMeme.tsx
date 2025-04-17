'use client';

import { Form } from '@heroui/form';
import { Input } from '@heroui/input';
import { Meme } from '@/entities/Meme';
import { Button } from '@heroui/button';
import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from 'react';

interface EditableMemeProps {
  value: Meme;
  onClose: () => void;
  setValue: Dispatch<SetStateAction<Meme>>;
  setMemes: (memes: Meme[]) => void;
}

export const EditableMeme = ({ value, setValue, setMemes, onClose }: EditableMemeProps) => {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, name: e.target.value }));
  };
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, image: e.target.value }));
  };
  const handleChangeLikes = (e: ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, likes: Number(e.target.value) }));
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const response = await fetch('/api/memes', {
        method: 'PUT',
        body: JSON.stringify({ ...data, likes: Number(data.likes), id: Number(data.id) }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsSuccess(true);
        const result = await response.json();
        setMemes(result);
      }
    } catch (error) {
      console.error('Error updating meme:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit} className="flex flex-col gap-8">
      <Input name="id" value={String(value?.id)} readOnly={true} label="ID" />
      <Input
        name="name"
        label="Name"
        value={value?.name}
        onChange={handleChangeName}
        minLength={3}
        maxLength={100}
        isReadOnly={isSuccess}
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return 'Name are required';
          }
          if (validationDetails.tooShort || validationDetails.tooLong) {
            return 'Name must be between 3 and 99 characters';
          }
        }}
      />
      <Input
        min={0}
        max={99}
        name="likes"
        type="number"
        label="Likes"
        value={String(value?.likes)}
        onChange={handleChangeLikes}
        isReadOnly={isSuccess}
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return 'Likes are required';
          }
          if (validationDetails.rangeUnderflow || validationDetails.rangeOverflow) {
            return 'Likes must be between 0 and 99';
          }
        }}
      />
      <Input
        type="url"
        name="image"
        label="Image"
        value={value?.image}
        onChange={handleChangeImage}
        isReadOnly={isSuccess}
        isRequired
        errorMessage={({ validationDetails }) => {
          if (validationDetails.valueMissing) {
            return 'Please enter url';
          }
          if (validationDetails.typeMismatch) {
            return 'Please enter a valid url address (e.g. https://example.com/image.jpg)';
          }
        }}
      />
      <div className="flex gap-4 self-end">
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button
          type="submit"
          color="success"
          variant="shadow"
          isDisabled={isSuccess}
          isLoading={isLoading}
        >
          {isSuccess ? <span className="text-gray-900">Success ✓</span> : 'Submit'}
        </Button>
      </div>
    </Form>
  );
};
