import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug'
import { heroBlock } from '@/blocks/Hero/config';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [heroBlock]
    },
    ...slugField(),
  ],
};
