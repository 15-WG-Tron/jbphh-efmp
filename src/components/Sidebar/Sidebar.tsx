'use client';

import React from 'react';
import Link from 'next/link';
import { sidebar } from './sidebarLinks';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SourceIcon from '@mui/icons-material/Source';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { SidebarLink } from './SidebarLink';

export const Sidebar = () => {
  // const sidebarLink = sidebarasx.map((navlinks) => navlinks.links);
  const sidebarContent = [
    { title: 'EFMP', href: '/EFMP', Icon: <Diversity3Icon /> },
    { title: 'Resources', href: '/Resources', Icon: <LocalLibraryIcon /> },
    { title: 'Services', href: '/Services', Icon: <SourceIcon /> },
    { title: 'Contact', href: '/Contacts', Icon: <PhoneIphoneIcon /> },
  ];

  return (
    <header>
      <div className="drawer lg:drawer-open">
        <div className="flex-1 px-2 mx-2">
          <Link href="/" className={''}>
            <p className={'tracking-[0.2rem] text-2xl logo-text'}>Cyberohana</p>
          </Link>
        </div>
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="sidebar" className="btn btn-square btn-ghost  drawer-button lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full bg-white text-base-content">
            <div className="px-2 mx-2">
              <Link href="/" className={''}>
                <p className={'tracking-[0.2rem] text-2xl logo-text text-center'}>Cyberohana</p>
              </Link>
            </div>
            <SidebarLink linkContent={sidebarContent} />
          </div>
        </div>
      </div>
    </header>
  );
};
