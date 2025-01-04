"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './NavItem.css'

type NavItemProps = {
  slug: string;
  label: string;
};

const NavItem: React.FC<NavItemProps> = ({ slug, label }) => {
  const pathname = usePathname()
  const isActive = pathname === `/${slug}`;

  return (
    <Link href={`/${slug}`}>
      <div className={`text-black font-bold ${isActive ? 'underline-thick' : ''} cursor-pointer py-4 z-50 w-full hover:underline-thick text-center`}>
        {label}
      </div>
    </Link>
  )
}

export default NavItem