import TelegramBtn from '@/components/telegramBtn'
import ZayavkaBtn from '@/shared/ZayavkaBtn'
import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Image from 'next/image'
import kartichka1 from '../../../Assets/img/kartichka1.png'
import kartichka from '../../../Assets/img/kartoshka2.png'
import img2 from '../../../Assets/img/sistem.png'
import img1 from '../../../Assets/img/turniket-sistem.png'

const Page = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div>
			<div className='bg-img2 lg:h-[600px] h-auto w-full lg:py-[0px] py-[30px]'>
				<div className='container grid lg:grid-cols-2 grid-cols-1 lg:gap-[0px] gap-[30px] h-full'>
					<div className=' w-full h-full text-white flex flex-col items-start justify-center gap-[20px]'>
						<h1 className='lg:text-[50px] font-bold text-[30px]'>
							{t('turniket')}
						</h1>
						<div className='flex gap-[30px] lg:flex-row flex-col justify-center '>
							<ZayavkaBtn />
							<TelegramBtn />
						</div>
					</div>
					<div className=' w-full h-full flex items-center  justify-center'>
						<Image src={img1} alt='kamera' />
					</div>
				</div>
			</div>

			<div className=' my-[100px] w-full bg-[#004F9E]'>
				<div className='container h-auto grid py-10 gap-[20px] lg:grid-cols-2 text-white pl-5 grid-cols-1'>
					<div className='flex justify-center items-start flex-col'>
						<div className='pl-2 border-l-3 border-YellovCool'>
							<h2 className='font-bold text-[30px] lg:text-[41px]'>
								{t('Об услуге')}
							</h2>
							<p className='lg:text-[26px] text-[18px]'>{t('Tuple')}</p>
						</div>
					</div>
					<div className=' flex justify-center items-center'>
						<Image src={img2} alt='isab-security' />
					</div>
				</div>
			</div>
			<div>
				<div className='container lg:min-h-[450px] h-auto py-5 grid lg:grid-cols-2 grid-cols-1'>
					<div className=' h-[300px] relative'>
						<Image
							src={kartichka1}
							alt='isab-securit'
							className='absolute top-1 left-2'
						/>
						<Image
							src={kartichka}
							alt='isab-securit'
							className='absolute bottom-1 lg:right-10 right-1'
						/>
					</div>
					<div className=' text-white p-7 flex justify-between items-start flex-col gap-[20px]'>
						<h2 className='font-bold text-[25px] pl-5 lg:text-[41px] border-l-3 border-YellovCool '>
							{t('Об услуге')}
						</h2>
						<ul className='lg:text-[27px] text-[15px] list-disc pl-5 colored-bullets'>
							<li>{t('muhamdis-service')}</li>
							<li>{t('vazifaga-jihozlar')}</li>
							<li>{t('hamma-narsa')}</li>
							<li>{t('bildirnoma-sozlash')}</li>
							<li>{t('yoriqnoma')}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
