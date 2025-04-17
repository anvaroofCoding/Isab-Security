import About from '@/components/about'
import Header from '@/components/header'
import NameCards from '@/components/NameCards'
import Section from '@/components/section'
import { CarouselDemo } from '@/shared/carulsel'
import { TracingBeamDemo } from '@/shared/TracingBeamDemo'
import ZayavkaBtn from '@/shared/ZayavkaBtn'
import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'

export default async function Home({ locale }) {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div>
			<Header />
			<div className='relative -z-10'>
				<Section />
				<TracingBeamDemo />
			</div>
			<div className='bg-[#00264B] py-10'>
				<div className='container md:h-[200px] h-[200px] pt-20 flex gap-[20px] justify-between items-center md:flex-row flex-col text-white bg-[#00264B]'>
					<h2 className='md:text-[43px] font-bold text-[35px]'>
						{t('produc')}
					</h2>
					<button className='px-5 py-3 bg-YellovCool rounded-[20px] font-[700] hover:bg-YellovCool/80 duration-300 active:bg-YellovCool/60 text-white'>
						{t('katalog')}
					</button>
				</div>
				<div className='xl:my-[10px] relative 1 my-[40px] bg-[#00264B]'>
					<CarouselDemo />
				</div>
			</div>
			<div>
				<About />
			</div>
			<div>
				<NameCards />
			</div>
			<div className=' w-full h-[400px] flex justify-center flex-col items-start gap-[20px] text-white container'>
				<h2 className='md:text-[44px] text-[20px] font-bold'>{t('zayavka')}</h2>
				<p className='md:text-[23px] text-[15px] font-[500] md:w-[70%] w-full'>
					{t('number')}
				</p>
				<div className='flex items-center justify-center gap-[40px]'>
					<ZayavkaBtn />
				</div>
			</div>
		</div>
	)
}
