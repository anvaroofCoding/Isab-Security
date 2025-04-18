// src/lib/products.js
export async function getProducts(locale) {
	const res = await fetch(
		`https://api.isab-security.com/products?lang=${locale}`,
		{
			cache: 'no-store',
		}
	)
	if (!res.ok) throw new Error('Mahsulotlar olinmadi')

	const data = await res.json()
	// API qanday qaytaryapti? results[] bo‘lsa:
	return data.results // yoki data.products
}
