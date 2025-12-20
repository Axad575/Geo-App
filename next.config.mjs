/** @type {import('next').NextConfig} */
const nextConfig = {
  // Укажите правильный корневой каталог
  turbopack: {
    root: '. /',
  },
  // Отключите минификацию при сборке для экономии памяти
  swcMinify: false,
  // Уменьшите использование памяти
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

export default nextConfig
