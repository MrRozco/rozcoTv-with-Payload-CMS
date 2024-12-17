import type { Block } from 'payload'

export const carouselBlock: Block = {
  slug: 'carousel',
  fields: [
    {
        name: 'images',
        type: 'array',
        required: true,
        minRows: 1,
        maxRows: 10,
        fields: [
            {
                name: 'image',
                type: 'upload',
                relationTo: 'media',
                required: true
            }
        ]
    }
  ],

  interfaceName: 'CarouselBlock'
}