import { HeroBlock, Media } from '@/payload-types'
import React from 'react'

type Props = {
  classname?: string
} & HeroBlock

const isMedia = (media: any): media is Media => {
  return media && typeof media !== 'number' && 'url' in media
}

const HeroComponent: React.FC<Props> = ({ heading, description, media }) => {
  return (
    <div className=" w-full z-0 relative">
      <div
        className="hero w-full h-[60vh] flex flex-col justify-center items-start"
        style={{
          backgroundImage: isMedia(media) ? `url(${media.url})` : 'none',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '50px 100px',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <div className="bg-gradient-to-r from-black/60 to-transparent"></div>
        <div className="relative  text-start">
          <h1 className="text-7xl text-white">{heading}</h1>
          {description && <h2 className="text-white text-2xl">{description}</h2>}
        </div>
      </div>
    </div>
    
  )
}

export default HeroComponent