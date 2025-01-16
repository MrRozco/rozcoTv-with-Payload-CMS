import { Footer, Media, Page } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    footer: Footer
}

const isMedia = (media: any): media is Media => {
    return media && typeof media !== 'string' && 'url' in media
  }

const isPage = (page: any): page is Page => {
    return page && typeof page !== 'string' && 'slug' in page
}

const awsUrl = 'https://rozcotvbucket.s3.us-east-2.amazonaws.com/'

const FooterComponent = ({footer}: Props) => {
    return (
        <footer className='bg-black text-white px-[10%] lg:px-[20%]'>
            <div className='flex justify-between items-center h-[20vh]'>
                <div>
                    <Link href='/'>
                    {isMedia(footer.logo) && footer.logo.url ? (
                            <Image src={awsUrl + footer.logo.filename} alt={footer.logo.alt || 'Logo'} width={100} height={100} className='rounded-full' />
                        ) : null}
                    </Link>
                </div>
                <div>
                    <ul className='flex justify-between items-center gap-[80px] text-lg font-bold'>
                        {footer.items.map((item, index) => (
                            <li key={index}>
                                <Link href={isPage(item.page) && item.page.slug ? item.page.slug : '#'}>
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
