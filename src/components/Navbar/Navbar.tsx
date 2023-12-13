'use client';

import Image from 'next/image';
import { NavbarLink } from '@/components/Navbar/NavbarLink';
import { useScroll } from '@/app/hooks/useScroll';
import Link from 'next/link';

const menuContent = [
  { title: 'Home', href: '/' },
  { title: 'EFMP One Stop', href: '/EFMP' },
  { title: 'Resources', href: '/Resources' },
  { title: 'Contact', href: '/Contact' },
];
export const Navbar = () => {
  const { scrollDirection } = useScroll();

  const toggleNavVisibility = (direction: string | null) => {
    switch (direction) {
      case 'up':
        return 'hidden-nav';
      case 'down':
        return 'active-nav';
      default:
        return '';
    }
  };

  return (
    <header
      className={`${toggleNavVisibility(
        scrollDirection
      )} bg-primary flex justify-center md:justify-evenly py-4  mb-12 sticky top-0 z-50`}
    >
      <a
        className=" text-bold flex md:flex-row flex-col justify-center items-center normal-case text-xl cursor-pointer"
        href="/"
      >
        <Image src="/img/15th-logo.png" alt="15 WG Logo" height={80} width={80} />
        <span className="pl-5 w-full items-center md:flex text-white">Hickam Connect</span>
      </a>
      <nav className="navbar w-3/4 md:flex md:justify-evenly justify-center hidden ">
        <NavbarLink menuContent={menuContent} />
        <Link
          href={'http://localhost:8055/admin'}
          className="btn btn-ghost hidden md:flex hover:text-primary text-white border border-white hover:bg-secondary"
          target="_blank"
        >
          Agency Login
        </Link>
      </nav>
    </header>
  );
};
