// 'use client'

// import { Carousel } from '../components/ui/carousel'

// export function CarouselDemo() {
// 	const slideData = [
// 		{
// 			title: 'Mystic Mountains',
// 			button: 'Explore Component',
// 			src: 'https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		},
// 		{
// 			title: 'Urban Dreams',
// 			button: 'Explore Component',
// 			src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		},
// 		{
// 			title: 'Neon Nights',
// 			button: 'Explore Component',
// 			src: 'https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		},
// 		{
// 			title: 'Desert Whispers',
// 			button: 'Explore Component',
// 			src: 'https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 		},
// 	]

// 	return (
// 		<div className='relative overflow-hidden  w-full h-full py-20'>
// 			<Carousel slides={slideData} />
// 		</div>
// 	)
// }

'use client'

import { useEffect, useState } from 'react'
import { Carousel } from '../components/ui/carousel'

export function CarouselDemo() {
	const [data, setData] = useState([])

	const fetchPopularProducts = async () => {
		try {
			const res = await fetch('https://api.isab-security.com/popular-products')
			const json = await res.json()
			console.log(json)
			setData(json)
		} catch (err) {
			console.error('Fetch error:', err)
		}
	}

	useEffect(() => {
		fetchPopularProducts()
	}, [])

	// console.log(data)
	// Demo slayder ma'lumotlari (agar API hali ishlamasa)
	// const slideData = [
	// 	{
	// 		title: 'Mystic Mountains',
	// 		src: 'https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3',
	// 	},
	// 	// {
	// 	// 	title: 'Urban Dreams',
	// 	// 	button: 'Explore Component',
	// 	// 	src: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3',
	// 	// },
	// 	// {
	// 	// 	title: 'Neon Nights',
	// 	// 	button: 'Explore Component',
	// 	// 	src: 'https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3',
	// 	// },
	// ]

	// const slideData =
	// slideData.push(data)
	// console.log(slideData)

	// let slideData = data.forEach((item, index) => {
	// 	console.log(item)
	// })

	return (
		<div className='relative overflow-hidden w-full h-full py-20'>
			<Carousel slides={data} />
			{/* <button
				onClick={() => {
					fetchPopularProducts()
				}}
			>
				hello
			</button> */}
		</div>
	)
}
