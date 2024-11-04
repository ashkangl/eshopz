/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com',],
        loader: 'custom',
        },
        trailingSlash: true,
};

export default nextConfig;
