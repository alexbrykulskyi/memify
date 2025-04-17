'use client';

import { usePathname } from 'next/navigation';
import { Navbar as NavbarHeroUi, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/navbar';
import { Image } from '@heroui/image';
import Link from 'next/link';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <NavbarHeroUi>
      <NavbarBrand as={Link} href="/" className="gap-4">
        <Image
          width={40}
          height={40}
          src={'https://th.bing.com/th/id/OIG4.uUAlMVhi.y26fbiWiA7G?pid=ImgGn'}
        />
        <p className="font-bold text-inherit tracking-widest">MEMIFY</p>
      </NavbarBrand>

      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem data-active={pathname === '/table'}>
          <Link className={`${pathname === '/table' && 'text-blue-950'}`} href="/table">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem data-active={pathname === '/list'}>
          <Link className={`${pathname === '/list' && 'text-blue-950'}`} href="/list">
            List
          </Link>
        </NavbarItem>
      </NavbarContent>
    </NavbarHeroUi>
  );
};
