'use client'
import Image from 'next/image'
import { NavbarLink } from '@/components/Navbar/NavbarLink';
import { useScroll } from '@/app/hooks/useScroll';

const menuContent = [
  {title: "Home", href: "/"},
  {title: "EFMP One Stop" , href: "/EFMP"},
  {title: "Resources", href: "/Resources"},
  {title: "Contact", href: "/Contact"}
]
export const Navbar = () => {
   const {scrollDirection} = useScroll()

  const toggleNavVisibility = (direction: string | null) => {
    switch (direction) {
      case "up":
        return 'hidden-nav'
      case "down":
        return "active-nav"
      default:
        return ""
    }
  }
  return (
      <header className={`${toggleNavVisibility(scrollDirection)} mb-12 sticky top-0 z-50`}>
        <nav className='navbar bg-primary w-full flex justify-evenly min-h-6 py-6 shadow-xl '>
          <a className=" text-bold text-white normal-case text-xl "> 
          <Image src='/img/15th-logo.png' alt='15 WG Logo' height={80} width={80} />
         <span className='pl-5 w-full'>Hickam Connect</span> </a>
            <NavbarLink menuContent={menuContent} />
          <a href="#" className='btn btn-ghost hidden md:flex hover:text-primary text-white border border-white hover:bg-secondary'>Agency Login</a>
        </nav>
      </header>
  )
} 
