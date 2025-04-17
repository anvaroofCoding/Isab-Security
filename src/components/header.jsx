'use client'
import Image from 'next/image'
import { useTranslations } from 'use-intl'
import headerImg from '../Assets/img/headerDesktop.png'
import { TextGenerateEffectDemo } from './textDemo'

const Header = () => {
	const t = useTranslations()
	return (
		<div>
			<div className='container xl:h-[800px] h-auto pb-20 grid grid-cols-1 xl:grid-cols-2 '>
				<div className=' flex justify-center items-center xl:hidden'>
					<Image src={headerImg} alt='...' className='w-full' />
				</div>
				<div className=' flex flex-col items-start justify-center gap-[15px] md:gap-[20px] '>
					{/* <h1 className='text-[32px] font-bold text-white'>{t('header')}</h1> */}
					<div className='relative -z-10'>
						<TextGenerateEffectDemo className='text-white' />
					</div>
					<p className='text-white/60 w-[60%] text-[12px] md:text-[20px] '>
						{t('headerText')}
					</p>
					<button className='px-5 py-3 bg-YellovCool rounded-[20px] font-[700] hover:bg-YellovCool/80 duration-300 active:bg-YellovCool/60 text-white'>
						{t('btn')}
					</button>
				</div>
				<div className=' hidden justify-center items-center xl:flex '>
					<Image src={headerImg} alt='...' className='' />
				</div>
			</div>
		</div>
	)
}

export default Header
