import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['rozcotvbucket.s3.us-east-2.amazonaws.com'],
  },
  // Your other Next.js config here
}

export default withPayload(nextConfig)