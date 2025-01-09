import { Block } from 'payload';

export const ContactBlock: Block = {
    slug: 'contact',
    fields: [
        {
            name: 'heading',
            type: 'text',
            required: true

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
                    required: false 
                },
                {
                    name: 'url',
                    type: 'text',
                    required: false
                }
            ]
        },
        {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: false
        }
    ],

    interfaceName: 'ContactBlock'
}