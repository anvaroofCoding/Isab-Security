'use client'
import { redirect, usePathname } from '@/i18n/navigation'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const LangSwitch = () => {
	const path = usePathname()
	const [selectedLang, setSelectedLang] = useState()
	const { locale } = useParams()

	const switchHandle = e => {
		const newLocale = e.target.value
		setSelectedLang(newLocale)
		redirect({ locale: newLocale, href: path })
	}
	useEffect(() => {
		if (locale == 'ru') {
			setSelectedLang('ru')
		} else if (locale == 'en') {
			setSelectedLang('en')
		} else {
			setSelectedLang('uz')
		}
	}, [locale])

	return (
		<div>
			<select
				onChange={switchHandle}
				value={selectedLang}
				className='appearance-none w-full text-center text-[17px] font-semibold lg:text-white bg-white/10 backdrop-blur-xl border lg:border-white/30 rounded-xl py-1 px-3 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400 animate-slide-up border-black/20 cursor-pointer '
				// style='animation: slideUp 0.4s ease-out forwards;'
			>
				<option
					className='text-black cursor-pointer'
					value='ru'
					onClick={() => {
						setSelectedLang('ru')
					}}
				>
					🇷🇺 Русский
				</option>
				<option
					className='text-black cursor-pointer'
					value='en'
					onClick={() => {
						setSelectedLang('en')
					}}
				>
					🇬🇧 English
				</option>
				<option
					className='text-black cursor-pointer'
					value='uz'
					onClick={() => {
						setSelectedLang('uz')
					}}
				>
					🇺🇿 O'zbekcha
				</option>
			</select>
		</div>
	)
}

export default LangSwitch
