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
    <>
        <Link className={`text-white ${isActive ? 'bg-red-500 rounded-3xl' : ''} hover:bg-red-500 cursor-pointer px-5 py-3 rounded-3xl`} href={`/${slug}`}>
            {label}
        </Link>
    </>
  )
}

export default NavItem