'use client'
import { Button, message, Modal } from 'antd'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

const ZayavkaBtn = () => {
	const t = useTranslations()

	const [isModalOpen, setIsModalOpen] = useState(false)

	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		service_included: false, // boolean qiymat sifatida boshlaymiz
	})

	const handleChange = e => {
		const { name, value, type, checked } = e.target
		setFormData(prev => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const handleSubmit = async () => {
		try {
			const res = await fetch('https://api.isab-security.com/create-order/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})

			if (!res.ok) throw new Error('So‘rov muvaffaqiyatsiz bo‘ldi')

			const data = await res.json()
			message.success('Muvaffaqiyatli Bajarildi')
			setIsModalOpen(false) // muvaffaqiyatli yuborilgach modalni yopish
		} catch (error) {
			console.error('❌ Xatolik:', error)
		}
	}

	return (
		<div>
			<Button
				variant='solid'
				size='large'
				color='orange'
				onClick={() => setIsModalOpen(true)}
			>
				{t('zayavkaBtn')}
			</Button>
			<Modal
				title={t('zayavkaBtn')}
				open={isModalOpen}
				onCancel={() => setIsModalOpen(false)}
				footer={null}
				className='custom-modal'
			>
				<div className='h-[200px] flex flex-col items-center justify-center gap-[20px]'>
					<input
						type='text'
						name='name'
						placeholder={t('ism')}
						value={formData.name}
						onChange={handleChange}
						className='w-[80%] h-[30px] border border-black/30 rounded-[3px] p-2'
					/>
					<input
						type='number'
						name='phone'
						placeholder={t('raqam')}
						value={formData.phone}
						onChange={handleChange}
						className='w-[80%] h-[30px] border border-black/30 rounded-[3px] p-2'
					/>
					<label className='flex items-center space-x-2'>
						<input
							type='checkbox'
							name='service_included'
							className='w-5 h-5 text-YellovCool bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-YellovCool cursor-pointer'
							checked={formData.service_included}
							onChange={handleChange}
						/>
						<span className='text-bold'>{t('shart')}</span>
					</label>
					<Button
						onClick={handleSubmit}
						variant='solid'
						size='middle'
						color='orange'
					>
						{t('zayavkaBtn')}
					</Button>
				</div>
			</Modal>
		</div>
	)
}

export default ZayavkaBtn
