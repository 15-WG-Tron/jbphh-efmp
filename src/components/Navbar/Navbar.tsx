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
import { NavbarLinks } from './NavbarLinks';
import { SearchInput } from '../SearchInput';

export const Navbar = ({ children }: { children: React.ReactNode }) => {
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
    <div>
      <header className=" py-3 shadow mb-4">
        <nav className=" w-11/12 border border-blue-600 mx-auto"></nav>
      </header>
      {children}
    </div>
  );
};
