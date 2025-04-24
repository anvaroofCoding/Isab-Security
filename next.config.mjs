/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig = {
	images: {
		domains: ['assets.aceternity.com'],
		domains: ['images.unsplash.com'],
	},
	devIndicators: false,
}

const intelPlugin = createNextIntlPlugin()

export default intelPlugin(nextConfig)
