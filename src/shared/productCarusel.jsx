'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { useTranslations } from 'use-intl'

const NextArrow = props => {
	const { onClick } = props
	return (
		<div
			className='absolute top-1/2 right-[-25px] transform -translate-y-1/2 bg-YellovCool hover:bg-YellovCool/30 text-white w-10 h-10 flex justify-center items-center rounded-full cursor-pointer z-10'
			onClick={onClick}
		>
			›
		</div>
	)
}

const PrevArrow = props => {
	const { onClick } = props
	return (
		<div
			className='absolute top-1/2 left-[-25px] transform -translate-y-1/2 bg-YellovCool hover:bg-YellovCool/30 text-white w-10 h-10 flex justify-center items-center rounded-full cursor-pointer z-10'
			onClick={onClick}
		>
			‹
		</div>
	)
}

const ProductCarousel = () => {
	const [products, setProducts] = useState([])
	const t = useTranslations()
	const param = useParams()

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch(
					`https://api.isab-security.com/popular-products?lang=${param.locale}`
				)
				const data = await res.json()
				setProducts(data)
			} catch (error) {
				console.error('Mahsulotlarni olishda xatolik:', error)
			}
		}

		fetchProducts()
	}, [])

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	}

	return (
		<div className='w-full py-10  relative '>
			<div className='max-w-[1400px] mx-auto px-10'>
				<h2 className='text-[40px] font-bold text-center text-white mb-8'>
					{t('produc')}
				</h2>

				<div className='relative'>
					<Slider {...settings}>
						{products.map(product => (
							<div key={product.id} className='px-2'>
								<div className='bg-white rounded-lg h-[300px] overflow-hidden shadow-md hover:shadow-xl  transition-all duration-300 flex flex-col'>
									<div className='w-full h-[200px] relative'>
										<Image
											src={product.images[0]}
											alt={product.name}
											layout='fill'
											objectFit='cover'
											className='transition-transform duration-300'
										/>
									</div>
									<div className='p-4 flex-grow flex items-center justify-center text-center'>
										<p className='text-gray-800 text-[16px] font-semibold'>
											{product.name}
										</p>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>

				<div className='flex justify-center mt-8'>
					<a
						href='/katalog'
						className='bg-YellovCool hover:bg-YellovCool/30 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300'
					>
						{t('katalog')}
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProductCarousel
