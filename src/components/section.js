import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'

const Section = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div className='container text-center text-white py-20 '>
			<h2 className='text-YellovCool font-bold text-[44px]'>{t('usul')}</h2>
			<p className='text-[25px] font-semibold'>{t('vazifa')}</p>
		</div>
	)
}

export default Section
