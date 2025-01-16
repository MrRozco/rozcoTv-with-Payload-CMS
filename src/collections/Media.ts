import type { CollectionConfig } from 'payload';
import AWS from 'aws-sdk';

// Initialize the S3 client
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (req.file) {
          const file = req.file;
          if (!process.env.AWS_S3_BUCKET) {
            throw new Error('AWS_S3_BUCKET environment variable is not defined');
          }
          const params = {
            Bucket: process.env.AWS_S3_BUCKET,
            Key: file.name,
            Body: file.data,
            ContentType: file.mimetype,
          };
  
          const uploadResult = await s3.upload(params).promise();
          data.url = uploadResult.Location;
          console.log('Uploaded file URL:', data.url); // Add this line for debugging
        }
      },
    ],
  },
};

export default Media;