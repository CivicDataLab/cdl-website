export interface Homepage {
	data: Data
}

interface Data {
	id: number
	attributes: Attributes
}

interface OfferItem {
	id: number
	title: string
	icon: {
		data: Image
	}
}

interface Link {
	id: number
	title: string
	url: string
}

type ImageFormat = {
	name: string
	hash: string
	ext: string
	mime: string
	path: null | string
	width: number
	height: number
	size: number
	sizeInBytes: number
	url: string
}

export type Image = {
	id: number
	attributes: {
		name: string
		alternativeText: null | string
		caption: null | string
		width: number
		height: number
		formats: {
			thumbnail: ImageFormat
			small: ImageFormat
		}
		hash: string
		ext: string
		mime: string
		size: number
		url: string
		previewUrl: null | string
		provider: string
		provider_metadata: null | string
		createdAt: string
		updatedAt: string
	}
}

interface Attributes {
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
	heading: string
	offer_title: string
	offer_desc: string
	offer_items: OfferItem[]
	offer_link: Link
	data_title: string
	data_items: {
		id: number
		title: string
		sub_title: string
		desc: string
	}[]
	about_title: string
	about_desc: string
	about_link: Link
	about_youtube: string
	focus_title: string
	focus_card: {
		id: number
		title: string
		icon: {
			data: Image
		}
		desc: string
		link: Link
	}[]
	partner_title: string
	partner_items: {
		data: Image[]
	}
	team_title: string
	team_items: { data: Image[] }
	subscribe_title: string
}
