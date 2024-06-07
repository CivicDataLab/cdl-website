export interface About {
	data: AboutData
}

interface AboutData {
	id: number
	attributes: PurpleAttributes
}

interface PurpleAttributes {
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
	heading: string
	heading_sub: string
	heading_items: HeadingItem[]
	heading_link: Link
	process_title: string
	process_desc: string
	process_media: Icon
	vision_title: string
	vision_desc: string
	vision_link: Link
	vision_youtube: string
	values_title: string
	values_items: {
		id: number
		title: string
		desc: string
	}[]
	pillar_title: string
	pillar_desc: string
	pillar_media: Icon
	team_title: string
	team_desc: string
	team_items: {
		id: number
		name: string
		role: string
		image: Icon
	}[]
}

interface Link {
	id: number
	title: string
	url: string
}

interface HeadingItem {
	id: number
	title: string
	icon: Icon
}

interface Icon {
	data: IconData
}

interface IconData {
	id: number
	attributes: FluffyAttributes
}

interface FluffyAttributes {
	name: string
	alternativeText: null
	caption: null
	width: number
	height: number
	formats: Formats
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: null
	provider: string
	provider_metadata: null
	createdAt: Date
	updatedAt: Date
}

interface Formats {
	thumbnail: Thumbnail
}

interface Thumbnail {
	name: string
	hash: string
	ext: string
	mime: string
	path: null
	width: number
	height: number
	size: number
	sizeInBytes: number
	url: string
}
