'use client'
import {
	MobileNav,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	Navbar,
	NavbarLogo,
	// NavBody,
	NavItems,
} from '@/components/ui/resizable-navbar'
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

export function NavbarDemo() {
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 100)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	const t = useTranslations()
	const navItems = [
		{
			name: t('home'),
			link: '/',
		},
		{
			name: t('about'),
			link: '/about',
		},
		{
			name: t('Mahsulotlarimiz'),
			link: '/katalog',
		},
		{
			name: t('contact'),
			link: '/contact',
		},
	]

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const itemsss = [
		{
			key: '1',
			label: (
				<a target='_blank' rel='noopener noreferrer' href='/kamera'>
					Установка
					{/* камер видеонаблюдения */}
				</a>
			),
		},
		{
			key: '2',
			label: (
				<a target='_blank' rel='noopener noreferrer' href='/sistema'>
					{t('kamera')}
				</a>
			),
			// icon: <SmileOutlined />,
			// disabled: true,
		},
		{
			key: '3',
			label: (
				<a target='_blank' rel='noopener noreferrer' href='/elektr-montaj'>
					{t('texnika')}
				</a>
			),
		},
		// {
		// 	key: '4',
		// 	danger: true,
		// 	label: 'a danger item',
		// },
	]
	return (
		<div className='relative w-full z-50 '>
			<Navbar>
				<nav
					className={`w-full z-50 transition-all duration-300
					${isSticky ? 'fixed top-0  bg-blueCool/40 backdrop-blur shadow-md py-3' : ''}

				`}
				>
					<div className='container justify-between items-center hidden lg:flex relative z-40'>
						<Link href={'/'}>
							<Image src={isab} alt='Isab Security' className='w-[120px]' />
						</Link>
						<NavItems items={navItems} />

						<div className='flex items-center gap-4'>
							<div className='flex items-center gap-4 relative z-50'>
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
							<div className='relative z-50'>
								<LangSwitch />
							</div>
						</div>
					</div>
				</nav>

				{/* </NavBody> */}

				{/* Mobile Navigation */}
				<div
					className={`w-full z-50 transition-all duration-300 xl:hidden block ${
						isSticky
							? 'fixed top-0 bg-blueCool/40 backdrop-blur shadow-md py-1'
							: ''
					}`}
				>
					<MobileNav>
						<MobileNavHeader>
							<NavbarLogo />
							<MobileNavToggle
								isOpen={isMobileMenuOpen}
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							/>
						</MobileNavHeader>

						<MobileNavMenu
							isOpen={isMobileMenuOpen}
							onClose={() => setIsMobileMenuOpen(false)}
						>
							{navItems.map((item, idx) => (
								<a
									key={`mobile-link-${idx}`}
									href={item.link}
									onClick={() => setIsMobileMenuOpen(false)}
									className='relative text-neutral-600 dark:text-neutral-300'
								>
									<span className='block'>{item.name}</span>
								</a>
							))}
							<div>
								<Dropdown menu={{ items: itemsss }}>
									<a onClick={e => e.preventDefault()}>
										<Space>
											<span className='text-[16px] font-bold ml-3'>
												{t('services')}
											</span>
											<DownOutlined />
										</Space>
									</a>
								</Dropdown>
							</div>
							<div className='flex w-full flex-col gap-4'>
								<LangSwitch />
							</div>
						</MobileNavMenu>
					</MobileNav>
				</div>
			</Navbar>
		</div>
	)
}
