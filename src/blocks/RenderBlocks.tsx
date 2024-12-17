import React, { Fragment } from 'react'
import { HeroBlock, CarouselBlock } from '@/payload-types'
import HeroComponent from './Hero/HeroComponent'
import CarouselComponent from './Carousel/CarouselComponent'

import type { Page } from '@/payload-types'


const blockComponents: { [key: string]: React.FC<any> } = {
  hero: HeroComponent,
  carousel: CarouselComponent,
  // add other block components here
};


export const RenderBlocks: React.FC<{
  blocks: (HeroBlock| CarouselBlock | null | undefined)[];
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {

          if (!block) return null; // Handle null or undefined blocks
          
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div  key={index}>
                  <Block {...block} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}