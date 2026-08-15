/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }, // Разрешаем картинки с S3
    ],
  },
};

export default nextConfig;
