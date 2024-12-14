import type { Block } from 'payload'

export const heroBlock: Block = {
  slug: 'hero',
  fields: [
    {
        name: 'heading',
        type: 'text',
        required: true,
    },
    {
        name: 'description',
        type: 'textarea',
        required: false
    },
    {
        name: 'media',
        type: 'upload',
        relationTo: 'media',
        required: true
    }
  ],

  interfaceName: 'HeroBlock'
}