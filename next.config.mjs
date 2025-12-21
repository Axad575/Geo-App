import { join } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  // Для production
  reactStrictMode: true,

  experimental:{
    turbo:{
      root: join(__dirname, '..')
    }
  }
}

export default nextConfig
