import { Button } from '@heroui/button';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
export default function Home() {
  return (
    <main className="dark flex flex-col justify-center gap-[32px] row-start-2 items-center h-[calc(100vh-112px)]">
      <Image
        width={240}
        height={240}
        src={'https://th.bing.com/th/id/OIG4.uUAlMVhi.y26fbiWiA7G?pid=ImgGn'}
      />
      <p className="mt-4 text-lg text-gray-500 max-w-xl text-center">
        Memify is a handy guide to the most popular internet memes. Convenient. Fast. Fun.
      </p>
      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Button color="primary" variant="ghost" as={Link} href="/list">
          Get started
        </Button>
      </div>
    </main>
  );
}
