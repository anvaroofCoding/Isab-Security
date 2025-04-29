import Map from '@/components/map'
import Tell from '@/components/tell'
import ZayavkaBtn from '@/shared/ZayavkaBtn'
import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../../Assets/images/contact Icons/Vector.svg'
import img2 from '../../../Assets/images/contact Icons/email.svg'
import img3 from '../../../Assets/images/contact Icons/location.svg'
import img4 from '../../../Assets/images/contact Icons/time.svg'
const Page = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div>
			<div className='bg-img3 h-[300px]'>
				<div className='container h-full flex justify-center items-center'>
					<h1 className='text-white text-[50px] font-bold'>{t('contact')}</h1>
				</div>
			</div>
			<div className='container  grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px] py-[100px]'>
				<div className=' h-[220px] flex flex-col'>
					<div className='w-full h-[50%]  flex justify-center items-center'>
						<Image src={img1} alt='isab' className='w-[20%]' />
					</div>
					<div className='w-full h-[50%] text-white text-center'>
						<Link href={'tel:+99833 555 12 55'}>
							<h2 className='font-bold text-[20px]'>+998 33 555 12 55</h2>
						</Link>
						<p className='text-[18px] text-gray-500'>{t('call_us')}</p>
					</div>
				</div>
				<div className=' h-[220px] flex flex-col'>
					<div className='w-full h-[50%]  flex justify-center items-center'>
						<Image src={img2} alt='isab' className='w-[20%]' />
					</div>
					<div className='w-full h-[50%] text-center text-white'>
						<h2 className='font-bold text-[20px]'>isabsecurity@gmail.com</h2>
						<p className='text-[18px] text-gray-500'>{t('write_us_email')}</p>
					</div>
				</div>
				<div className=' h-[220px] flex flex-col'>
					<div className='w-full h-[50%] flex justify-center items-center'>
						<Image src={img3} alt='isab' className='w-[20%]' />
					</div>
					<div className='w-full h-[50%]  text-center text-white'>
						<h2 className='font-bold text-[20px]'>{t('district_chilanzar')}</h2>
						<p className='text-[18px] text-gray-500'>{t('address_arnasay')}</p>
					</div>
				</div>
				<div className=' h-[220px] flex flex-col'>
					<div className='w-full h-[50%]  flex justify-center items-center'>
						<Image src={img4} alt='isab' className='w-[20%]' />
					</div>
					<div className='w-full h-[50%]  text-white text-center'>
						<h2 className='font-bold text-[20px]'>{t('working_hours')}</h2>
						<p className='text-[18px] text-gray-500'>{t('working_time')}</p>
					</div>
				</div>
			</div>
			<div>
				<Map />
			</div>
			<div className=' w-full h-[400px] flex justify-center flex-col items-start gap-[20px] text-white container'>
				<h2 className='md:text-[44px] text-[20px] font-bold'>{t('zayavka')}</h2>
				<p className='md:text-[23px] text-[15px] font-[500] md:w-[60%] w-full'>
					{t('number')}
				</p>
				<div className='flex lg:justify-start items-start lg:flex-row flex-col justify-center lg:gap-[40px] gap-[20px] w-full'>
					<ZayavkaBtn />
					<Tell />
				</div>
			</div>
		</div>
	)
}

export default Page
