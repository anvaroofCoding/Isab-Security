import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { HoverEffect } from '../components/ui/card-hover-effect'

export async function CardHoverEffectDemo({ locale }) {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	const projects = [
		{
			title: t('Профессионализм'),
			description: t('one'),
		},
		{
			title: t('Клиентоориентированность'),
			description: t('two'),
		},
		{
			title: t('Надёжность'),
			description: t('three'),
		},
		{
			title: t('Техническо'),
			description: t('four'),
		},
	]
	return (
		<div className='w-full mx-auto '>
			<HoverEffect items={projects} />
		</div>
	)
}
