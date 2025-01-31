"use client"
import { Nav, Media, Page } from '@/payload-types'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItem from './NavItem'

type Props = {
    header: Nav
}


const awsUrl = 'https://rozcotvbucket.s3.us-east-2.amazonaws.com/'


function Header ({header}: Props) {

    const [isOpen, setIsOpen] = useState(false)

    
    return (
        <div className=' sticky top-0 flex justify-between items-center py-4 px-[10%] lg:px-[20%] bg-white border-b-4 border-red-900 z-50'>
            <div>
                <Link href='/'>
                    {typeof header.logo === 'string' ? (
                        <Image src={header.logo} alt="Logo" width={100} height={100} className='rounded-full' />
                    ) : (
                        header.logo.url && (
                            <Image src={awsUrl + header.logo.filename} alt={header.logo.alt || 'Logo'} width={100} height={100} className='rounded-full' />
                        )
                    )}
                </Link>
            </div>
            <div className='hidden md:block'>
                <nav>
                    <ul className='flex justify-between items-center text-xl gap-16 text-white'>
                        {header.items.map((item, index) => (
                            <li key={index}>
                                {typeof item.page !== 'string' && item.page.slug && <NavItem slug={item.page.slug} label={item.label} />}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className='md:hidden z-50' >
                <button className=' text-3xl text-red-800 ' onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? 'X' : '☰'}
                </button>
                <div className={`absolute top-full left-0 w-full flex border-b-4 border-red-900 z-50 transition-all duration-300 ease-in-out 
                               ${ isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`} >
                    <nav className='w-full'>
                      <ul className='flex flex-col text-xl  text-black bg-white w-full z-50 '>
                        {header.items.map((item, index) => (
                          <li className='w-full' key={index}>
                            {typeof item.page !== 'string' && item.page.slug && <NavItem slug={item.page.slug} label={item.label} />}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
            </div>
        </div>
    )
}

export default Header;