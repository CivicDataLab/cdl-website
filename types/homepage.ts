export interface Homepage {
	data: Data
}

interface Data {
	id: number
	attributes: Attributes
}

interface Attributes {
	heading: string
	offer_title: string
	offer_desc: string
	data_title: string
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
	about_title: string
	about_desc: string
	about_youtube: string
	focus_title: string
	partner_title: string
	team_title: string
}
