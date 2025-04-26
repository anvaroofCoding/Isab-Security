import TelegramBtn from '@/components/telegramBtn'
import ZayavkaBtn from '@/shared/ZayavkaBtn'
import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Image from 'next/image'
import kartichka1 from '../../../Assets//images/pojarniy system/full_212-1411 1.png'
import img2 from '../../../Assets/images/pojarniy system/asd10-400x400 1.png'
import img1 from '../../../Assets/images/pojarniy system/лучшие-пожарные-сигнализации-1024x683 1.png'

const Page = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div>
			<div className='bg-img2 lg:h-[600px] h-auto w-full lg:py-[0px] py-[30px]'>
				<div className='container grid lg:grid-cols-2 grid-cols-1 lg:gap-[0px] gap-[30px] h-full'>
					<div className=' w-full h-full text-white flex flex-col items-start justify-center gap-[20px]'>
						<h1 className='lg:text-[50px] font-bold text-[30px]'>
							{t('fire_security_alarm')}
						</h1>
						<div className='flex gap-[30px] lg:flex-row flex-col justify-center '>
							<ZayavkaBtn />
							<TelegramBtn />
						</div>
					</div>
					<div className=' w-full h-full flex items-center justify-start  lg:justify-center'>
						<Image src={img1} alt={t('texnika')} />
					</div>
				</div>
			</div>

			<div className=' my-[100px] w-full bg-[#004F9E]'>
				<div className='container h-auto grid py-[100px] gap-[20px] lg:grid-cols-2 text-white pl-5 grid-cols-1'>
					<div className=' flex justify-start items-center'>
						<Image src={img2} alt={t('ishimiz')} />
					</div>
					<div className='flex justify-center items-start flex-col'>
						<div className='pl-2 border-l-3 border-YellovCool'>
							<h2 className='font-bold text-[30px] lg:text-[41px]'>
								{t('Об услуге')}
							</h2>
							<p className='lg:text-[26px] text-[18px]'>
								{t('smart_alarm_description')}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className='container  h-auto lg:py-[100px] py-5 grid lg:grid-cols-5 items-center grid-cols-1 '>
					<div className=' col-span-2'>
						<Image
							src={kartichka1}
							alt='isab-securit'
							className=' top-1 left-2'
						/>
					</div>
					<div className=' text-white lg:p-7 pt-7 flex justify-between items-start flex-col gap-[20px]  col-span-3'>
						<h2 className='font-bold text-[25px] pl-5 lg:text-[41px] border-l-3 border-YellovCool '>
							{t('bizning-xizmatlar')}
						</h2>
						<ul className='lg:text-[27px] text-[15px] list-disc pl-5 colored-bullets'>
							<li>{t('audit_and_design')}</li>
							<li>{t('sensor_installation')}</li>
							<li>{t('integration_with_security')}</li>
							<li>{t('response_scenarios')}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
