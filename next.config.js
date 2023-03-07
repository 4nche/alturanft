/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => [
    {
      source: '/nfts/:id*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-store',
        },
      ],
    },
  ],
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // images: {
  //   dangerouslyAllowSVG: true,
  //   domains: [
  //     'ipfs.io',
  //     'res.cloudinary.com',
  //     'metadata.ens.domains',
  //     'api.mpunks.org'
  //   ]
  // },
}

module.exports = nextConfig
