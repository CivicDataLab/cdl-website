/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
			},
			{
				protocol: 'http',
				hostname: '3.110.105.123',
				port: '',
			},
		],
	},
}

export default nextConfig
