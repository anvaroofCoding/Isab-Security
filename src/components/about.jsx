import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Image from 'next/image'
import img1 from '../Assets/img/layer1.png'

const About = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div className='bg_img w-full lg:h-[800px] h-auto lg:py-0 py-7'>
			<div className='container lg:grid grid-cols-5 h-full hidden '>
				<div className='col-span-3 flex flex-col items-start justify-center gap-[40px] text-white px-[50px]'>
					<h2 className='font-bold xl:text-[50px] md:text-[30px]'>
						{t('why_isab')}
						<span className='text-YellovCool'>{t('name')}</span>
					</h2>
					<div>
						<h3 className='font-semibold xl:text-[30px] md:text-[20px]'>
							{t('why_1_title')}
						</h3>
						<p className='text-white/70 text-[12px]'>{t('why_1_desc')}</p>
					</div>
					<div>
						<h3 className='font-semibold xl:text-[30px] md:text-[20px]'>
							{t('why_2_title')}
						</h3>
						<p className='text-white/70 text-[12px]'>{t('why_2_desc')}</p>
					</div>
					<div>
						<h3 className='font-semibold xl:text-[30px] md:text-[20px]'>
							{t('why_3_title')}
						</h3>
						<p className='text-white/70 text-[12px]'>{t('why_3_desc')}</p>
					</div>
				</div>
				<div className='col-span-2 flex justify-center items-center '>
					<div className='relative w-[500px] h-[600px] flex justify-center items-center'>
						<Image src={img1} alt='isab Security' className='absolute w-full' />
					</div>
				</div>
			</div>
			<div className='container flex lg:hidden flex-col h-full gap-[40px]'>
				<div className='flex flex-col items-start justify-center lg:gap-[40px] gap-10 text-white lg:px-[50px] px-1'>
					<h2 className='font-bold xl:text-[50px] text-[30px]'>
						{t('why_isab')}
						<span className='text-YellovCool'>{t('name')}</span>
					</h2>
					<div>
						<h3 className='font-semibold xl:text-[30px] md:text-[20px]'>
							{t('why_1_title')}
						</h3>
						<p className='text-white/70 text-[12px]'>{t('why_1_desc')}</p>
					</div>
					<div>
						<h3 className='font-semibold xl:text-[30px] md:text-[20px]'>
							{t('why_2_title')}
						</h3>
						<p className='text-white/70 text-[12px]'>{t('why_2_desc')}</p>
					</div>
					<div>
						<h3 className='font-semibold xl:text-[30px] md:text-[20px]'>
							{t('why_3_title')}
						</h3>
						<p className='text-white/70 text-[12px]'>{t('why_3_desc')}</p>
					</div>
				</div>
				<div className=' flex justify-center items-center '>
					<div className='relative w-[500px] h-[600px] flex justify-center items-center'>
						<Image src={img1} alt='isab Security' className='absolute w-full' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
