'use client'
import { useTranslations } from 'use-intl'
import { TextGenerateEffect } from '../components/ui/text-generate-effect'

export function TextGenerateEffectDemo() {
	const t = useTranslations()
	const words = t('header')

	return <TextGenerateEffect words={words} className={'text-white'} />
}
