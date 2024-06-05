import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

const queries = [
	'offer_items.icon',
	'offer_link',
	'data_items',
	'about_link',
	'focus_card.icon',
	'focus_card.link',
	'partner_items',
	'team_items',
]

export async function getStrapiData(url: string) {
	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
	const query = queries.map((q, idx) => `populate[${idx}]=${q}`).join('&')

	try {
		const response = await fetch(baseUrl + url + `?${query}`, {
			cache: 'no-store',
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
