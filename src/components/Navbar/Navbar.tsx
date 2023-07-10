'use client';

import React from 'react';
import Link from 'next/link';
import { navbarMenu } from './navbarLinks';

export const Navbar = () => {
  const navbarLinksArray = navbarMenu.map((navlinks) => navlinks.links);

  return (
    <header>
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
          <div className="flex-1 px-2 mx-2">
            <Link href="/" className={''}>
              <p className={'tracking-[0.2rem] text-2xl logo-text'}>Cyberohana</p>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {navbarMenu?.flatMap((dropdownProps) =>
                dropdownProps?.dropdowns?.map(({ title, links }) => (
                  <div key={title} className="dropdown hover:cursor-pointer">
                    <label tabIndex={0} className="mr-10 text-xl hover:cursor-pointer">
                      {title}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] p-2 shadow rounded-box w-52"
                    >
                      {links.map(({ title, href }) => (
                        <li key={title}>
                          <Link href={href}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
              {navbarLinksArray.flat().map(({ title, href }) => (
                <Link href={href} key={title} className="mr-10 text-xl">
                  {title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full ">
         {navbarMenu?.flatMap((dropdownProps) =>
                dropdownProps?.dropdowns?.map(({ title, links }) => (
                  <div key={title} className="dropdown hover:cursor-pointer hover:animate-pulse">
                    <label tabIndex={0} className="mb-10 text-xl hover:cursor-pointer">
                      {title}
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] p-2 shadow rounded-box w-52"
                    >
                      {links.map(({ title, href }) => (
                        <li key={title}>
                          <Link href={href}>{title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
              {navbarLinksArray.flat().map(({ title, href }) => (
                <Link href={href} key={title} className="mr-10 text-xl">
                  {title}
                </Link>
              ))}
        </ul>
      </div>
    </div>

    </header>
  );
};
