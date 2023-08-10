'use client';
import React, { JSX } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type SidebarLinkProps = {
  linkContent: {
    title: string;
    href: string; // @ts-ignore
    Icon: JSX;
  }[];
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({ linkContent }) => {
  const pathname = usePathname();

  return (
    <>
      <ul className={'pt-8 pl-4'}>
        {linkContent.map((link) => {
          const { title, href, Icon } = link;
          const isActive = href === pathname || href === pathname.replace(/\/$/, '');

          return (
            <li key={title} className={'mb-3'}>
              <Link href={href} className={`${isActive ? 'isActive' : 'text-lg text-white hover:text-white'}`}>
                <span>{Icon}</span>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
