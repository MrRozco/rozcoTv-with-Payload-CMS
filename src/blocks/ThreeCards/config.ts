import { Block } from 'payload'

export const ThreeCardsBlock: Block ={
    slug: 'three-cards',
    fields:[
        {
            name: 'cards',
            type: 'array',
            required: false,
            minRows: 3,
            fields:[
                {
                    name: 'title',
                    type: 'text',
                    required: false
                },
                {
                    name: 'description',
                    type: 'textarea',
                    required: false
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: false
                }
            ]
        }
    ],

    interfaceName: 'ThreeCardsBlock'
}