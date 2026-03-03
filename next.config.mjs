/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      { source: '/about', destination: '/?section=about' },
      { source: '/services', destination: '/?section=services' },
      { source: '/pricing', destination: '/?section=pricing' },
      { source: '/global', destination: '/?section=presence' },
      { source: '/contact', destination: '/?section=contact' },
    ];
  },
};

export default nextConfig;
