import { GlobalConfig } from 'payload'

export const Nav: GlobalConfig = {
  slug: 'nav',
  fields: [
    {
      name: 'logo', 
      type: 'upload', 
      relationTo: 'media',
      required: true,
    },

    {
      name: 'items',
      type: 'array',
      required: true,
      maxRows: 8,
      fields: [
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'pages', // "pages" is the slug of an existing collection
          required: true,
        },
        {
            name: 'label',
            type: 'text',
            required: true,
        }
      ],
    },
  ],
}