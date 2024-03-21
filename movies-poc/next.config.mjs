/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/movies/home',
                permanent: true
            },
            {
                source: '/',
                destination: '/movies/home',
                permanent: true
            },
            {
                source: '/movies',
                destination: '/movies/home',
                permanent: true
            },
            {
                source: '/favorites',
                destination: '/movies/favorites',
                permanent: true
            }
        ]
    }
};

export default nextConfig;
