import TelegramBtn from '@/components/telegramBtn'
import ZayavkaBtn from '@/shared/ZayavkaBtn'
import Image from 'next/image'
import rasm from '../../../Assets/img/prichka.svg'
import img1 from '../../../Assets/img/service1.png'
import img2 from '../../../Assets/img/service4.png'

const Page = () => {
	return (
		<div>
			<div className='bg-img2 lg:h-[400px] h-auto w-full lg:py-[0px] py-[30px]'>
				<div className='container grid lg:grid-cols-2 grid-cols-1 lg:gap-[0px] gap-[30px] h-full'>
					<div className=' w-full h-full text-white flex flex-col items-start justify-center gap-[20px]'>
						<h1 className='lg:text-[50px] font-bold text-[30px]'>
							Установка камер видеонаблюдения
						</h1>
						<p className='lg:text-[26px] text-[18px] font-[400] '>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
							nonummy nibh euismod tincidunt ut laoreet dolore
						</p>
						<div className='flex gap-[30px] lg:flex-row flex-col justify-center '>
							<ZayavkaBtn />
							<TelegramBtn />
						</div>
					</div>
					<div className=' w-full h-full flex items-center  justify-center'>
						<Image src={img1} alt='kamera' />
					</div>
				</div>
			</div>
			<div>
				<div>
					<h2 className='text-[50px] font-bold text-center mt-[100px] text-white'>
						Об услуге
					</h2>
				</div>
				<div className='container h-auto grid lg:grid-cols-3 grid-cols-1 gap-[100px] py-10'>
					<div className='border h-[265px] p-5 rounded-2xl bg-[#00264B] border-white/10'>
						<div className='w-full h-[20%] pt-5 flex justify-center items-center'>
							<Image src={rasm} alt='' />
						</div>
						<div className='px-5 text-white text-[15px] text-center mt-[50px]'>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore
							</p>
						</div>
					</div>
					<div className='border h-[265px] p-5 rounded-2xl bg-[#00264B] border-white/10'>
						<div className='w-full h-[20%] pt-5 flex justify-center items-center'>
							<Image src={rasm} alt='' />
						</div>
						<div className='px-5 text-white text-[15px] text-center mt-[50px]'>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore
							</p>
						</div>
					</div>
					<div className='border h-[265px] p-5 rounded-2xl bg-[#00264B] border-white/10'>
						<div className='w-full h-[20%] pt-5 flex justify-center items-center'>
							<Image src={rasm} alt='' />
						</div>
						<div className='px-5 text-white text-[15px] text-center mt-[50px]'>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-img3 my-[100px] w-full'>
				<div className='container h-auto grid py-10 gap-[20px] lg:grid-cols-2 text-white pl-5 grid-cols-1'>
					<div className='flex justify-center items-start flex-col'>
						<div className='pl-2 border-l-3 border-YellovCool'>
							<h2 className='font-bold text-[30px] lg:text-[41px]'>Персонал</h2>
							<p className='lg:text-[26px] text-[18px]'>
								Lorem ipsum dolor sit amet, consectetuer{' '}
							</p>
						</div>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-[20px] px-2 mt-[30px]'>
							<div className=''>
								<h2 className='font-bold text-[20px]'>Lorem ipsum </h2>
								<p className='text-[12px]'>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreet dolore
								</p>
							</div>
							<div className=''>
								<h2 className='font-bold text-[20px]'>Lorem ipsum </h2>
								<p className='text-[12px]'>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreet dolore
								</p>
							</div>
							<div className=''>
								<h2 className='font-bold text-[20px]'>Lorem ipsum </h2>
								<p className='text-[12px]'>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreet dolore
								</p>
							</div>
							<div className=''>
								<h2 className='font-bold text-[20px]'>Lorem ipsum </h2>
								<p className='text-[12px]'>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut laoreet dolore
								</p>
							</div>
						</div>
					</div>
					<div className=' flex justify-center items-center'>
						<Image src={img2} alt='isab-security' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
