import Layout from '@/Layout/Layout'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
	Weight: ['400', '700', '800', '900'],
})

export const metadata = {
	title: 'Isab Security',
	keywords:
		'ISAB Security, videokuzatuv, xavfsizlik, signalizatsiya, kompleks tizimlar',
	description:
		'Biz videokuzatuv, kirishni boshqarish, yong‘inga qarshi himoya va avtomatlashtirish bo‘yicha zamonaviy yechimlar taqdim etamiz.',
	icons: {
		icon: '/tt.svg',
	},
	openGraph: {
		title: 'ISAB Security',
		description: 'Kompleks xavfsizlik tizimlari va xizmatlari',
		url: 'https://isab-security.uz',
		siteName: 'ISAB Security',
		images: [
			{
				url: '../../../public/tt.svg',
				width: 800,
				height: 600,
				alt: 'ISAB Security kompaniyasi',
			},
		],
		locale: 'uz_UZ',
		type: 'website',
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
