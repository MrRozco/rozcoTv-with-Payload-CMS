import { Block } from 'payload';

export const TextImgBlock: Block = {
    slug: 'text-and-img',
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
            name: 'firstImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'secondImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'imageAlignment',
            type: 'radio',
            options: [
                {
                    label: 'Left',
                    value: 'left'
                },
                {
                    label: 'Right',
                    value: 'right'
                }
            ],
            required: true,
            defaultValue: 'left'

        }

    ],

    interfaceName: 'TextImgBlock'
}