import React, { JSX } from 'react';
import Link from 'next/link';

type SidebarLinkProps = {
  linkContent: {
    title: string;
    href: string; // @ts-ignore
    Icon: JSX;
  }[];
};

export const SidebarLink: React.FC<SidebarLinkProps> = ({ linkContent }) => {
  return (
    <>
      <ul className={'mt-5 pl-3'}>
        {linkContent.map((link) => {
          const { title, href, Icon } = link;
          return (
            <li key={title} className={'mb-3'}>
              <Link href={href} className={'text-lg'}>
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
