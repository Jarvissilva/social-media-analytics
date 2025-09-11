/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol:"https",
        hostname: "abs.twimg.com",
        pathname:"/**"
      },
      {
        protocol:"https",
        hostname: "scontent.fgoi1-1.fna.fbcdn.net",
        pathname:"/**"
      },


    ],
  },
};

export default nextConfig;
