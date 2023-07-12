'use client';

import React from 'react';
import Link from 'next/link';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SourceIcon from '@mui/icons-material/Source';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import { SidebarLink } from './SidebarLink';
import { SearchInput } from '../SearchInput';

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const sidebarContent = [
    { title: 'Home', href: '/', Icon: <HomeIcon /> },
    { title: 'EFMP One Stop', href: '/EFMP', Icon: <Diversity3Icon /> },
    { title: 'Sponsorship', href: '/Sponsor', Icon: <HandshakeIcon /> },
    { title: 'Resources', href: '/Resources', Icon: <LocalLibraryIcon /> },
    { title: 'Services', href: '/Services', Icon: <SourceIcon /> },
    { title: 'Events', href: '/Events', Icon: <EventIcon /> },
    { title: 'Contact', href: '/Contacts', Icon: <PhoneIphoneIcon /> },
  ];

  return (
    <div className="drawer lg:drawer-open min-h-full ">
      <input id="sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mt-8 items-center">
        <label htmlFor="sidebar" className="btn btn-square btn-ghost drawer-button lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
        {children}
      </div>
      <div className="drawer-side shadow-xl">
        <label htmlFor="my-drawer-2" className="lg:drawer-overlay"></label>
        <div className="menu p-4 w-72 h-full bg-primary text-base-content rounded-tr-[2rem] rounded-br-[2rem] shadow-2xl">
          <div className="px-2 pt-3">
            <Link href="/">
              <p className={'tracking-[0.25rem] text-2xl text-white text-center'}>Cyberohana</p>
            </Link>
          </div>
          <SearchInput />
          <SidebarLink linkContent={sidebarContent} />
        </div>
      </div>
    </div>
  );
};
