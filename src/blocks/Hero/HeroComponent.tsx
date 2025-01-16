import { HeroBlock, Media } from '@/payload-types'
import Link from 'next/link'
import React from 'react'

type Props = {
  classname?: string
} & HeroBlock

const isMedia = (media: any): media is Media => {
  return media && typeof media !== 'number' && 'url' in media
}

const awsUrl = 'https://rozcotvbucket.s3.us-east-2.amazonaws.com/'

const HeroComponent: React.FC<Props> = ({ heading, description, media, button }) => {
  return (
    <div className="w-full relative z-0">
      <div
        className="hero w-full h-[60vh] flex flex-col justify-center items-start"
        style={{
          backgroundImage: isMedia(media) ? `url(${awsUrl + media.filename})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <div className=" block md:hidden absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
        <div className="relative z-10 w-full px-[5%] lg:px-[10%] xl:px-[15%] py-12 text-start">
          <h1 className="text-7xl text-white">{heading}</h1>
          {description && <p className="text-white text-2xl mb-5">{description}</p>}
          {button && button.url ? (
            <Link href={button.url} className="bg-red-900 text-white text-lg font-bold px-6 py-3 mt-4 rounded-md hover:bg-gray-200">
              {button.text}
            </Link>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
    
  )
}

export default HeroComponent