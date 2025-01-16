import { Media, ThreeCardsBlock } from '@/payload-types'
import React from 'react'

type Props = {
  classname?: string
} & ThreeCardsBlock

const isMedia = (media: any): media is Media => {
  return media && typeof media !== 'number' && 'url' in media
}

const awsUrl = 'https://rozcotvbucket.s3.us-east-2.amazonaws.com/'

const ThreeCardsComponent: React.FC<Props> = ({ cards = [] }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-stretch hover: py-[5%] px-[5%] lg:px-[10%] xl:px-[15%] bg-gradient-to-t from-red-950 via-black to-black ">
            {cards && cards.map((card, index) => (
                <div key={index} className="w-full lg:w-1/3 p-5 bg-white flex flex-col rounded-md transform transition-transform duration-300 hover:scale-105 bg-gradient-to-b from-red-900 to-black border-2 border-white">
                    {isMedia(card.image) && (
                        <img src={awsUrl + card.image.filename} alt={card.title ?? `Card ${index + 1}`} className="w-full h-[600px] object-cover rounded-md" />
                    )}
                    <h1 className="text-2xl font-bold mt-3 text-white text-center">{card.title}</h1>
                    <p className="text-lg mt-3 flex-grow text-white text-center">{card.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ThreeCardsComponent