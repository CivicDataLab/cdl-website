import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export async function getStrapiData(url: string) {
	const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL
	try {
		const response = await fetch(baseUrl + url, { cache: 'no-store' })
		const data = await response.json()
		return data
	} catch (error) {
		console.error(error)
	}
}
