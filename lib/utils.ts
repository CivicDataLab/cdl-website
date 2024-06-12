import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function getStrapiData(url: string, queries?: string[]) {
	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
	const query = queries
		? queries.map((q, idx) => `populate[${idx}]=${q}`).join('&')
		: ''

	try {
		const response = await fetch(baseUrl + url + `?${query}`, {
			cache: 'no-cache',
		})
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

export async function getStrapiCollectionData({
	url,
	slug,
	queries,
}: {
	url: string
	queries?: string[]
	slug: string
}) {
	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
	const query = queries
		? queries.map((q, idx) => `populate[${idx}]=${q}`).join('&')
		: ''

	try {
		const response = await fetch(
			baseUrl + url + `?${query}&filters[slug][$eq]=${slug}`,
			{
				cache: 'no-cache',
			}
		)
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}

export function getStrapiMediaUrl(url: string) {
	return process.env.NEXT_PUBLIC_STRAPI_URL + url
}
