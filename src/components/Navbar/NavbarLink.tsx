'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type SidebarLinkProps = {
  menuContent: {
    title: string;
    href: string;
  }[];
};

export const NavbarLink: React.FC<SidebarLinkProps> = ({ menuContent }) => {
  const pathname = usePathname();
  return (
    <div className='w-3/5'> 
      <ul className=' w-full md:flex flex-row justify-center items-center hidden '>
        {menuContent.map((link) => {
          const { title, href } = link;
          const isActive = href === pathname || href === pathname.replace(/\/$/, '');

          return (
            <li key={title} className='mr-6'>
              <Link href={href} className={`${isActive ? 'isActive' : 'text-lg text-white hover:text-secondary hover:underline hover: underline-offset-4'}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
