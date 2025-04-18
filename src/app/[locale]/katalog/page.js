import { getProducts } from '@/lib/products'
import KatalogList from './KatalogList'

import { createTranslator } from 'next-intl'
import { getMessages } from 'next-intl/server'
export default async function Page({ locale, params }) {
	const products = await getProducts(params.locale)
	const messages = await getMessages()
	const t = createTranslator({ locale, messages })
	return (
		<div className='container h-auto'>
			<h1 className='text-white font-bold text-[30px] lg:text-[50px] text-center pb-15'>
				{t('Mahsulotlarimiz')}
			</h1>
			<KatalogList products={products} />
		</div>
	)
}
