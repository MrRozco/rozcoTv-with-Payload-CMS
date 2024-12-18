"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItemProps = {
    slug: string;
    label: string;
  };

const NavItem: React.FC<NavItemProps> = ({ slug, label }) => {

    const pathname = usePathname()
    const isActive = pathname === `/${slug}`;

  return (
    <Link href={`/${slug}`}>
    <div className={`text-black ${isActive ? 'bg-red-500 ' : ''} hover:bg-red-500 cursor-pointer py-4 z-50  w-full`}>
    {label}
    </div>     
    </Link>
    
  )
}

export default NavItem