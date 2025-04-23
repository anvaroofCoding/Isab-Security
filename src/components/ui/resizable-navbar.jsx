'use client'

import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import React from 'react'

import { cn } from '@/lib/utils'
import { IconMenu2, IconX } from '@tabler/icons-react'
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'motion/react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import logos from '../../Assets/img/isabLogoSaytBar.svg'

export const Navbar = ({ children, className }) => {
	const ref = useRef(null)
	const { scrollY } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	})
	const [visible, setVisible] = useState(false)

	useMotionValueEvent(scrollY, 'change', latest => {
		setVisible(latest > 100)
	})

	return (
		<motion.div
			ref={ref}
			className={cn('sticky inset-x-0 top-20 z-40 w-full', className)}
		>
			{React.Children.map(children, child =>
				React.isValidElement(child) && typeof child.type !== 'string'
					? React.cloneElement(child, { visible }) // faqat React komponentga beriladi
					: child
			)}
		</motion.div>
	)
}

export const NavItems = ({ items, className, onItemClick }) => {
	const [hovered, setHovered] = useState(null)
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
			// icon: <SmileOutlined />,
			// disabled: true,
		},
		{
			key: '3',
			label: (
				<a rel='noopener noreferrer' href='/elektr-montaj'>
					{t('texnika')}
				</a>
			),
			// disabled: true,
		},
		{
			key: '4',
			label: (
				<a rel='noopener noreferrer' href='voditel'>
					{t('voditel')}
				</a>
			),
		},
	]

	return (
		<motion.div
			onMouseLeave={() => setHovered(null)}
			className={cn(
				'absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-YellovCool transition duration-200 hover:text-YellovCool lg:flex lg:space-x-2',
				className
			)}
		>
			{items.map(item => (
				<Link
					key={item.name}
					onMouseEnter={() => setHovered(item.name)}
					onClick={onItemClick}
					className='relative px-4 text-[16px] font-bold py-2 text-YellovCool dark:text-neutral-300 capitalize'
					href={item.link}
				>
					{hovered === item.name && (
						<motion.div
							layoutId='hovered'
							className='absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800'
						/>
					)}
					<span className='relative z-20'>{item.name}</span>
				</Link>
			))}
			<Dropdown menu={{ items: itemsss }}>
				<a onClick={e => e.preventDefault()}>
					<Space>
						<span className='text-[16px] font-bold ml-3'>{t('services')}</span>
						<DownOutlined />
					</Space>
				</a>
			</Dropdown>
		</motion.div>
	)
}

export const MobileNav = ({ children, className, visible }) => {
	return (
		<motion.div
			animate={{
				backdropFilter: visible ? 'blur(10px)' : undefined,
				boxShadow: visible
					? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
					: 'none',
				width: visible ? '90%' : '100%',
				paddingRight: visible ? '12px' : '0px',
				paddingLeft: visible ? '12px' : '0px',
				borderRadius: visible ? '4px' : '2rem',
				y: visible ? 20 : 0,
			}}
			transition={{
				type: 'spring',
				stiffness: 200,
				damping: 50,
			}}
			className={cn(
				'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden',
				visible && 'bg-white/80 dark:bg-neutral-950/80',
				className
			)}
		>
			{children}
		</motion.div>
	)
}

export const MobileNavHeader = ({ children, className }) => (
	<div
		className={cn(
			'flex w-full flex-row items-center justify-between',
			className
		)}
	>
		{children}
	</div>
)

export const MobileNavMenu = ({ children, className, isOpen }) => (
	<AnimatePresence>
		{isOpen && (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={cn(
					'absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950',
					className
				)}
			>
				{children}
			</motion.div>
		)}
	</AnimatePresence>
)

export const MobileNavToggle = ({ isOpen, onClick }) =>
	isOpen ? (
		<IconX className='text-white dark:text-white' onClick={onClick} />
	) : (
		<IconMenu2 className='text-white dark:text-white' onClick={onClick} />
	)

export const NavbarLogo = () => (
	<Link
		href='#'
		className='relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black'
	>
		<Image src={logos} alt='logo' width={100} height={30} />
	</Link>
)

export const NavbarButton = ({
	href,
	as: Tag = 'a',
	children,
	className,
	variant = 'primary',
	...props
}) => {
	const baseStyles =
		'px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center'

	const variantStyles = {
		primary:
			'shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
		secondary: 'bg-transparent shadow-none dark:text-white',
		dark: 'bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
		gradient:
			'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
	}

	return (
		<Tag
			href={href || undefined}
			className={cn(baseStyles, variantStyles[variant], className)}
			{...props}
		>
			{children}
		</Tag>
	)
}
