// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Nav } from './Header'
import { Footer } from './Footer'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    {
      ...Pages, // Spread existing Pages collection config
      hooks: {
        afterChange: [
          async ({ doc, operation }) => {
            if (operation === 'create' || operation === 'update') {
              // Trigger Vercel deploy webhook after content is updated
              await fetch('https://api.vercel.com/v1/integrations/deploy/prj_fwcWzvoVc47d4RhdyEwDfLJbK8wX/RZRQ4z2GMz', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              console.log('Triggered Vercel deploy webhook for changes to page:', doc);
            }
          },
        ],
      },
    },
  ],
  globals : [Nav, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
