import type { Block } from 'payload'

export const videoBlock: Block = {
    slug: 'video',
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: true
        }
    ],

    interfaceName: 'VideoBlock'
}