import { Media, VideoBlock } from '@/payload-types'
import React from 'react'

type Props = {
  classname?: string
} & VideoBlock

const isMedia = (media: any): media is Media => {
  return media && typeof media !== 'number' && 'url' in media
}

const VideoComponent: React.FC<Props> = ({ heading, description, media }) => {
  return (
    <div className="w-full bg-black py-10 ">
        <div className="flex flex-col lg:flex-row gap-4 items-start justify-center m-auto py-[2%] px-[5%] lg:px-[10%] xl:px-[15%]">
            <div className="w-full lg:w-1/2 items-start">
                <h2 className='text-red-800 text-5xl font-bold mb-5'>{heading}</h2>
                <p className=' text-white text-lg'>{description}</p>
            </div>
            <div className="lg:w-1/2 w-full aspect-w-16 aspect-h-9 lg:aspect-h-5 border-4 border-white flex items-center justify-center rounded-md">
                {isMedia(media) && (
                <video
                    src={media.url ?? ''}
                    autoPlay
                    controls
                    loop
                    muted
                    className="w-full h-full object-cover rounded-md "
                />
                )}
            </div>
      </div>
    </div>
  )
}

export default VideoComponent