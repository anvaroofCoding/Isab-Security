'use client'
import { Card, CardBody, CardFooter } from '@heroui/react'

export default function KatalogList({ products }) {
	return (
		<div className='grid grid-cols-1 xl:grid-cols-4 gap-[30px]'>
			{products.map((item, index) => (
				<Card
					key={index}
					isPressable
					shadow='sm'
					className='bg-white/10 p-3 rounded-2xl'
					onPress={() => console.log('item pressed')}
				>
					<CardBody className='overflow-visible p-0 bg-white'>
						<img
							alt={item.name}
							className='w-full object-contain h-[200px] rounded-2xl'
							radius='lg'
							shadow='sm'
							src={item.images}
							width='100%'
						/>
					</CardBody>
					<CardFooter className='text-small justify-between mt-[30px] text-white'>
						<b>{item.name}</b>
						<p className='text-default-500'>{item.price}</p>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
