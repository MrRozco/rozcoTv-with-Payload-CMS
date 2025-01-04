import { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
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
      name: 'button',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
        name: 'media',
        type: 'upload',
        relationTo: 'media',
        required: true
    }
  ],

  interfaceName: 'CTABlock'
}