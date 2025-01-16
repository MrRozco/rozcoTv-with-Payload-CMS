import { Media, ContactBlock} from '@/payload-types'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

type Props = {
  classname?: string
} & ContactBlock

const isMedia = (media: any): media is Media => {
  return media && typeof media !== 'number' && 'url' in media
}

const awsUrl = 'https://rozcotvbucket.s3.us-east-2.amazonaws.com/'

const ContactComponent: React.FC<Props> = ({ heading, description, media, button }) => {
  return (
    <div className="  h-auto py-[2%] gap-2 flex flex-col md:flex-row px-[10%] lg:px-[15%] justify-center items-center bg-gradient-to-r from-black via-red-950 to-black">
        <div className="relative z-10 py-12 w-full text-center md:text-start md:w-1/2">
          <h1 className="text-5xl text-white  font-bold">{heading}</h1>
          {description && <p className="text-white text-2xl mb-5 font-bold">{description}</p>}
          {button && button.url ? (
            <Link href={button.url} className="bg-red-900 text-white text-lg font-bold px-6 py-3 mt-4 rounded-md hover:bg-gray-200">
              {button.text}
            </Link>
          ) : (
            null
          )}
        </div>
        <div className=' w-full md:w-1/2 '>
            {isMedia(media) && (
              <Image className='rounded-md ' src={awsUrl + media.filename} alt={heading} width={600} height={400} />
            )}
        </div>
    </div>
    
  )
}

export default ContactComponent