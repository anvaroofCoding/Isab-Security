'use client'

import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GrInstagram } from 'react-icons/gr'
import { LiaTelegramPlane } from 'react-icons/lia'
import { SiYoutubekids } from 'react-icons/si'
import isab from '../Assets/img/isabLogoSaytBar.svg'
import LangSwitch from './langSwitch'

const Navbar = () => {
	const [isSticky, setIsSticky] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 100)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const t = useTranslations()
	const itemsss = [
		{
			key: '1',
			label: (
				<a rel='noopener noreferrer' href='/kamera'>
					{t('kamera')}
				</a>
			),
		},
		{
			key: '2',
			label: (
				<a rel='noopener noreferrer' href='/sistema'>
					{t('turniket')}
				</a>
			),
		},
		{
			key: '3',
			label: (
				<a rel='noopener noreferrer' href='/elektr-montaj'>
					{t('texnika')}
				</a>
			),
		},
		{
			key: '4',
			label: (
				<a rel='noopener noreferrer' href='/Pojarniy'>
					{t('signal_title')}
				</a>
			),
		},
	]

	return (
		<div>
			{/* Desktop */}
			<div
				className={`w-full z-50 transition-all duration-300 hidden xl:block ${
					isSticky
						? 'fixed top-0 hidden bg-blueCool/40 backdrop-blur shadow-md py-1'
						: ''
				}`}
			>
				<nav className='container h-[100px] xl:flex justify-between items-center hidden'>
					<Link href={'/'}>
						<Image src={isab} alt='Isab Security' className='w-[120px]' />
					</Link>
					<ul className='flex justify-center gap-[30px] items-center text-white font-semibold'>
						<Link href={'/'}>
							<li className='hover:bg-white duration-200 p-2 rounded-lg text-[18px] text-YellovCool capitalize'>
								{t('home')}
							</li>
						</Link>
						<Link href={'/about'}>
							<li className='hover:bg-white duration-200 p-2 rounded-lg text-[18px] text-YellovCool'>
								{t('about')}
							</li>
						</Link>
						<Link href={'/katalog'}>
							<li className='hover:bg-white duration-200 p-2 rounded-lg text-[18px] text-YellovCool'>
								{t('Mahsulotlarimiz')}
							</li>
						</Link>
						<Link href={'/contact'}>
							<li className='hover:bg-white duration-200 p-2 rounded-lg text-[18px] text-YellovCool capitalize'>
								{t('contact')}
							</li>
						</Link>
						<Dropdown menu={{ items: itemsss }}>
							<a onClick={e => e.preventDefault()}>
								<Space>
									<span className=' text-[18px] font-bold m-0 xl:ml-3 text-YellovCool'>
										{t('services')}
									</span>
									<DownOutlined style={{ color: '#ff8917' }} />
								</Space>
							</a>
						</Dropdown>
					</ul>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-4 relative z-50'>
							<Link href={'https://www.instagram.com/kamerachi.uz'}>
								<li className='list-none w-[30px] h-[30px] flex items-center justify-center rounded-[50%] bg-white border border-black/30 text-black duration-200 maz-animate hover:bg-white/60'>
									<GrInstagram />
								</li>
							</Link>
							<Link href={'https://t.me/+jWDBEORNmhllMGQy'}>
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
					<div className='relative z-50'>
						<LangSwitch />
					</div>
				</nav>
			</div>

			{/* Mobile */}
			<div
				className={`w-full z-50 transition-all duration-300 xl:hidden block  ${
					isSticky
						? 'fixed top-0 bg-blueCool/40 backdrop-blur shadow-md py-0'
						: ''
				}`}
			>
				<nav className='w-full z-50 transition-all duration-300'>
					<div className='flex justify-between items-center h-[70px] container'>
						<Link href={'/'}>
							<Image src={isab} alt={t('company_intro')} className='h-[50px]' />
						</Link>
						<button
							className='text-white text-3xl focus:outline-none'
							onClick={() => setMenuOpen(true)}
						>
							☰
						</button>
					</div>

					{/* Fon (background overlay) */}
					{menuOpen && (
						<div
							className='fixed inset-0 bg-black/50 z-[998]'
							onClick={() => setMenuOpen(false)}
						/>
					)}

					{/* Slide out menu */}
					<div
						className={`fixed top-0 left-0 w-64 h-screen bg-blueCool z-[999] transform ${
							menuOpen ? 'translate-x-0' : '-translate-x-full'
						} transition-transform duration-300 ease-in-out overflow-y-auto`}
					>
						<div className='p-6 flex flex-col gap-6'>
							<button
								className='text-white text-2xl self-end'
								onClick={() => setMenuOpen(false)}
							>
								×
							</button>
							<Link href={'/'} onClick={() => setMenuOpen(false)}>
								<span className='text-YellovCool hover:text-YellovCool/30 font-bold text-xl'>
									{t('home')}
								</span>
							</Link>
							<Link href={'/about'} onClick={() => setMenuOpen(false)}>
								<span className='text-YellovCool hover:text-YellovCool/30 font-bold text-xl'>
									{t('about')}
								</span>
							</Link>
							<Link href={'/katalog'} onClick={() => setMenuOpen(false)}>
								<span className='text-YellovCool hover:text-YellovCool/30 font-bold text-xl'>
									{t('Mahsulotlarimiz')}
								</span>
							</Link>
							<Link href={'/contact'} onClick={() => setMenuOpen(false)}>
								<span className='text-YellovCool hover:text-YellovCool/30 font-bold text-xl'>
									{t('contact')}
								</span>
							</Link>
							<Dropdown menu={{ items: itemsss }}>
								<a onClick={e => e.preventDefault()}>
									<Space>
										<span className=' text-[18px] font-bold m-0 xl:ml-3 text-YellovCool'>
											{t('services')}
										</span>
										<DownOutlined style={{ color: '#ff8917' }} />
									</Space>
								</a>
							</Dropdown>

							<div className='flex gap-4 mt-4'>
								<Link href={'https://www.instagram.com/kamerachi.uz'}>
									<GrInstagram className='text-white text-2xl' />
								</Link>
								<Link href={'/'}>
									<LiaTelegramPlane className='text-white text-2xl' />
								</Link>
								<Link href={'https://youtube.com/@kamerachiuz?feature=shared'}>
									<SiYoutubekids className='text-white text-2xl' />
								</Link>
							</div>

							<div className='mt-8 text-white'>
								<LangSwitch />
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
