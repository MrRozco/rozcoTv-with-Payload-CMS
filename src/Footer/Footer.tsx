import { Footer, Media, Page } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    footer: Footer
}

const isMedia = (media: any): media is Media => {
    return media && typeof media !== 'string' && 'url' in media
  }

const FooterComponent = ({footer}: Props) => {
    return (
        <footer className='bg-black text-white px-[10%] lg:px-[20%]'>
            <div className='flex justify-between items-center h-[20vh]'>
                <div>
                    <Link href='/'>
                    {isMedia(footer.logo) && (
                            <Image src={footer.logo.url} alt={footer.logo.alt} width={100} height={100} className='rounded-full' />
                        )}
                    </Link>
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-[80px] text-lg font-bold'>
                        {footer.items.map((item, index) => (
                            <li key={index}>
                                <Link href={item.page.slug}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;
