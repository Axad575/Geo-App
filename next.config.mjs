/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

const path = require('path');

module.exports = {
  experimental: {
    // Указывает Next.js рассматривать родительский каталог как корень трассировки
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  // ... другие ваши настройки Next.js
};
export default nextConfig;
