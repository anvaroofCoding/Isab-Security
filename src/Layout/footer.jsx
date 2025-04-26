import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import { GrInstagram } from 'react-icons/gr'
import { LiaTelegramPlane } from 'react-icons/lia'
import { SiYoutubekids } from 'react-icons/si'
import logo from '../Assets/img/isabLogoSaytBar.svg'

const Footer = async ({ locale }) => {
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div>
			<div className='container h-auto py-10 grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-5 text-white'>
				<div className=' flex flex-col gap-[100px] w-full'>
					<div className='flex flex-col gap-[25px]'>
						<Image src={logo} alt='kamera, isab-security, damafon' />
						<hr className='lg:w-[50%] border-white/40' />
						<h2 className='lg:w-[60%]'>
							<span className='text-YellovCool font-bold'>{t('fotname')}</span>
							{' - '}
							{t('company_intro')}
						</h2>
					</div>
					<div className='flex items-center gap-4 relative z-20'>
						<Link
							href={
								'https://www.instagram.com/kamerachi.uz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
							}
						>
							<li className='list-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border border-black/30 text-black duration-200 maz-animate hover:bg-white/60'>
								<GrInstagram />
							</li>
						</Link>
						<Link href={'/'}>
							<li className='list-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border border-black/30 text-black duration-200 maz-animate hover:bg-white/60'>
								<LiaTelegramPlane />
							</li>
						</Link>
						<Link href={'https://youtube.com/@kamerachiuz?feature=shared'}>
							<li className='list-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border border-black/30 text-black duration-200 maz-animate hover:bg-white/60'>
								<SiYoutubekids />
							</li>
						</Link>
					</div>
				</div>
				<div className=' flex items-end w-full'>
					<ul className='flex flex-col gap-[15px] font-semibold'>
						<li>
							<p className='hover:text-YellovCool duration-200'>
								{t('contacts')}:
							</p>
							<Link href={'tel:+99833 555 12 55'}>
								<p className='underline hover:text-YellovCool duration-200'>
									🇺🇿 +99833 555 12 55
								</p>
							</Link>
							<Link href={'tel:+9987 7085551255'}>
								<p className='underline hover:text-YellovCool duration-200'>
									🇰🇿 +7 708 555 12 55
								</p>
							</Link>
						</li>
						<li>
							<p className='hover:text-YellovCool duration-200'>
								{t('Write to us')}
							</p>
							<p className='hover:text-YellovCool duration-200'>
								isabsecurity@gmail.com
							</p>
						</li>
						<li>
							<p className='hover:text-YellovCool duration-200'>
								{t('contact_us')}
							</p>
							<p className='hover:text-YellovCool duration-200'>
								{t('address')}
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className='container border-t border-white/30 py-15 text-white'>
				<h2>{t('end')}</h2>
			</div>
		</div>
	)
}

export default Footer
