import Layout from '@/Layout/Layout'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	Weight: ['400', '700', '800', '900'],
})

// app/[locale]/layout.js yoki page.js ichida
export const metadata = {
	title: 'ISAB Security',
	description: 'Kompleks xavfsizlik tizimlari va xizmatlari',
	openGraph: {
		title: 'ISAB Security',
		description: 'Kompleks xavfsizlik tizimlari va xizmatlari',
		url: 'https://isab-security.uz/uz',
		siteName: 'ISAB Security',
		images: [
			{
				url: 'https://isab-security.uz/tt.svg',
				width: 800,
				height: 600,
				alt: 'ISAB Security logotipi',
			},
		],
		locale: 'uz_UZ',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'ISAB Security',
		description: 'Kompleks xavfsizlik tizimlari va xizmatlari',
		images: ['https://isab-security.uz/tt.svg'],
	},
}
export default async function RootLayout({ children, params }) {
	const { locale } = await params

	return (
		<html lang={locale}>
			<body className={`${inter.className} antialiased gradients`}>
				<NextIntlClientProvider>
					<Layout>{children}</Layout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
