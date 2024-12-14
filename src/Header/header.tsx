import { Nav, Media, Page } from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import NavItem from './NavItem'

type Props = {
    header: Nav
}


function Header ({header}: Props) {
    
    return (
        <div className=' flex justify-between items-center p-4 px-10 bg-gradient-to-b from-black/20 to-transparent'>
            <div>
                <Link href='/'>
                    <Image src={header.logo.url} alt={header.logo.alt} width={100} height={100} className='rounded-full' />
                </Link>
            </div>
            <div>
               
                <nav>
                    <ul className='flex justify-between items-center text-xl gap-52 text-white'>
                        {header.items.map((item, index) => (
                            <li key={index}>
                                <NavItem slug={item.page.slug} label={item.label} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header;