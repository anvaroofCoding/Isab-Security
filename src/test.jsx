import { useTranslations } from 'use-intl'

const Test = () => {
	const t = useTranslations()
	return <div>{t('hello')}</div>
}

export default Test
