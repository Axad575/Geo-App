import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Указывает Next.js рассматривать родительский каталог как корень трассировки
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  // ... другие ваши настройки Next.js
};

export default nextConfig;
