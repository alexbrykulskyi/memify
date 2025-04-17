import { Link } from '@heroui/react';
import { Image as ImageHeroUi } from '@heroui/image';
import Image from 'next/image';
import { Card as CardHeroUi, CardHeader, CardBody } from '@heroui/card';

interface CardProps {
  alt?: string;
  src: string;
  likes: number;
  image: string;
  width?: number;
  header: string;
}

export const Card = (props: CardProps) => {
  const {
    alt = '',
    src = 'https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg',
    width = 270,
    likes,
    image,
    header,
  } = props;
  return (
    <CardHeroUi className="py-4 min-h-[280px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Link href={image} target="_blank" className="text-tiny font-bold">
          Link
        </Link>
        <small className="text-default-500 flex gap-1">
          {likes}
          <Image src="/heart-red.svg" alt="Next.js logo" width={20} height={20} />
        </small>
        <h4 className="font-bold text-large">{header}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex items-center justify-end">
        <ImageHeroUi alt={alt} className="object-cover rounded-xl" src={src} width={width} />
      </CardBody>
    </CardHeroUi>
  );
};
