'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import tast1 from '../Assets/img/tast1.png'
import tast3 from '../Assets/img/tast3.png'
import tast2 from '../Assets/img/tast4.png'
import { TracingBeam } from '../components/ui/tracing-beam'

export function TracingBeamDemo() {
	const t = useTranslations()

	const dummyContent = [
		{
			title: t('access_title'),
			description: (
				<>
					<p>{t('access_desc')}</p>
				</>
			),
			badge: '1',
			image: tast1,
		},
		{
			title: t('signal_title'),
			description: (
				<>
					<p>{t('signal_desc')}</p>
				</>
			),
			badge: '2',
			image: tast2,
		},
		{
			title: t('support_title'),
			description: (
				<>
					<p>{t('support_desc')}</p>
				</>
			),
			badge: '3',
			image: tast3,
		},
	]

	return (
		<TracingBeam className='px-6 pb-10'>
			<div className='max-w-2xl mx-auto antialiased pt-4 relative -z-10 text-white'>
				{dummyContent.map((item, index) => (
					<div key={`content-${index}`} className='mb-10'>
						<h2 className='bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4'>
							{item.badge}
						</h2>

						<p className={twMerge('text-xl mb-4 font-bold')}>{item.title}</p>

						<div className='text-sm  prose prose-sm dark:prose-invert'>
							{item?.image && (
								<Image
									src={item.image}
									alt='blog thumbnail'
									height='1000'
									width='1000'
									className='rounded-lg mb-10 object-cover'
								/>
							)}
							<h3 className='text-white/60'>{item.description}</h3>
						</div>
					</div>
				))}
			</div>
		</TracingBeam>
	)
}
