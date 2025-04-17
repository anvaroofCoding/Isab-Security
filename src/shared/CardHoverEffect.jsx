import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import isab2 from '../Assets/Icons//isab 2.svg'
import isab1 from '../Assets/Icons//isab1.svg'
import isab3 from '../Assets/Icons//isab3.svg'
import isab4 from '../Assets/Icons//isab4.svg'
import { HoverEffect } from '../components/ui/card-hover-effect'

export async function CardHoverEffectDemo({ locale }) {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	const projects = [
		{
			title: t('Профессионализм'),
			description: t('one'),
			image: isab1,
		},
		{
			title: t('Клиентоориентированность'),
			description: t('two'),
			image: isab2,
		},
		{
			title: t('Надёжность'),
			description: t('three'),
			image: isab3,
		},
		{
			title: t('Техническо'),
			description: t('four'),
			image: isab4,
		},
	]
	return (
		<div className='w-full mx-auto '>
			<HoverEffect items={projects} />
		</div>
	)
}
