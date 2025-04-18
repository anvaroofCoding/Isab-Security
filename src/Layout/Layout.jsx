import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Footer from './footer'
import Navbar from './navbar'

const Layout = async ({ children, locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
