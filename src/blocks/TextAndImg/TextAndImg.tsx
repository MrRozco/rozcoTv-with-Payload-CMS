import { Media, TextImgBlock } from '@/payload-types';
import React from 'react'
import Image from 'next/image';

type Props = {
    classname?: string
} & TextImgBlock

const isMedia = (media: any): media is Media => {
    return media && typeof media !== 'number' && 'url' in media
}

const TextAndImgComponent: React.FC<Props> = ({ heading, description, firstImage, secondImage, imageAlignment }) => {
    return (
        <div className={`flex flex-col gap-6 py-16 px-[5%] lg:px-[10%] xl:px-[15%] ${imageAlignment=== 'left' ? 'md:flex-row bg-gradient-to-r from-red-950 via-black to-black' : 'md:flex-row-reverse  bg-gradient-to-l from-red-950 via-black to-black'} `} >
            <div className='flex gap-4 w-full md:w-1/2 lg:w-1/3'>
                <div >
                    {isMedia(firstImage) && (
                        <Image src={firstImage.url ?? ''} alt={heading} width={600} height={800} className=' -translate-y-5 rounded-md transform transition-transform duration-300 hover:scale-105 border-4 border-white' />
                    )}
                </div>
                <div>
                    {isMedia(secondImage) && (
                        <Image src={secondImage.url ?? ''} alt={heading} width={600} height={800} className=' translate-y-5 rounded-md transform transition-transform duration-300 hover:scale-105 border-4 border-white' />
                    )}
                </div>
            </div>
            <div className=' flex flex-col justify-center w-full md:w-1/2 lg:w-2/3 text-white'>   
                <h2 className=' text-4xl text-red-900 font-bold' >{heading}</h2>
                <p className=' text-lg'>{description}</p>
            </div>
        </div>
    )
}

export default TextAndImgComponent