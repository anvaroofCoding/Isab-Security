import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'

const Section = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div className='container text-center text-white py-20 '>
			<h2 className='text-YellovCool font-bold lg:text-[44px] text-[25px]'>
				{t('usul')}
			</h2>
			<p className='lg:text-[25px] text-[18px] font-semibold'>{t('vazifa')}</p>
		</div>
	)
}

export default Section
