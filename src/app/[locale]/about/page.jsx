import TelegramBtn from '@/components/telegramBtn'
import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Image from 'next/image'
import haqida from '../../../Assets/images/about1.png'
import about2 from '../../../Assets/images/aboutImg/I.png'
import about3 from '../../../Assets/images/aboutImg/S.png'
const Page = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div>
			<div className='bg-img2 '>
				<div className='container grid lg:grid-cols-5 grid-cols-1 min-h-[600px]'>
					<div className='h-full lg:col-span-3 text-white flex justify-center gap-[30px] items-start flex-col'>
						<h1 className='lg:text-[50px] text-[30px] font-bold'>
							{t('haqida')}{' '}
							<span className='text-YellovCool'>{t('fotname')}</span>
						</h1>
						<p className='lg:text-[30px] text-[18px]'>{t('team_intro')}</p>
						<TelegramBtn />
					</div>
					<div className=' h-full lg:col-span-2 flex lg:justify-center justify-start items-center'>
						<Image src={haqida} alt={t('fotname')} />
					</div>
				</div>
			</div>
			<div className='container py-[50px] flex flex-col gap-[50px]'>
				<div className=' w-full min-h-[400px] grid lg:grid-cols-5  grid-cols-1 gap-[50px]'>
					<div className=' lg:col-span-2 flex items-center justify-center lg:gap-0 gap-[30px]'>
						<Image src={about2} alt='isab' />
					</div>
					<div className=' lg:col-span-3 text-white flex justify-center items-start flex-col gap-6'>
						<p className='lg:text-[45px] text-[30px] font-bold border-l-4 pl-5 border-YellovCool '>
							{t.rich('company_slogan_html', {
								highlight: chunks => (
									<span style={{ color: '#ff8917', fontWeight: 'bold' }}>
										{chunks}
									</span>
								),
							})}
						</p>
						<p className='lg:text-[27px] text-[18px] pl-7'>
							{t('specialization_description')}
						</p>
					</div>
				</div>
				<div className=' w-full min-h-[400px] grid lg:grid-cols-5 lg:gap-0 gap-[30px] grid-cols-1'>
					<div className=' lg:col-span-3 text-white flex justify-center items-start flex-col gap-6'>
						<p className='lg:text-[27px] text-[18px] pl-7'>{t('our_goal')}</p>
					</div>
					<div className=' lg:col-span-2 flex items-center justify-center'>
						<Image src={about3} alt='isab' />
					</div>
				</div>
				{/* <div className='h-[500px]'>
					<Card />
				</div> */}
				<h2 className='text-[30px] text-center font-bold text-white mt-[130px]'>
					{t('pride_and_personal_security')}
				</h2>
				<div className=' lg:min-h-[200px] min-h-[1000px] grid lg:grid-cols-3 grid-cols-1 gap-[25px] my-30'>
					<div className='border rounded-2xl hover:bg-white/30 duration-300 border-YellovCool/20 bg-white/10 flex justify-center items-center flex-col'>
						<p className='text-YellovCool text-[30px] font-bold'>Tajriba</p>
						<p className='text-white text-[25px] font-bold'>+6 yil</p>
					</div>
					<div className='border rounded-2xl hover:bg-white/30 duration-300 border-YellovCool/20 bg-white/10 flex justify-center items-center flex-col'>
						<p className='text-YellovCool text-[30px] font-bold'>
							Mutaxasislarimiz
						</p>
						<p className='text-white text-[25px] font-bold'>+40</p>
					</div>
					<div className='border rounded-2xl hover:bg-white/30 duration-300 border-YellovCool/20 bg-white/10 flex justify-center items-center flex-col'>
						<p className='text-YellovCool text-[30px] font-bold text-center'>
							Bajarilgan obyektlarimiz
						</p>
						<p className='text-white text-[25px] font-bold'>+1000</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
