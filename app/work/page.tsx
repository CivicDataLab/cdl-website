import { Suspense } from 'react'
import { WorkClient } from './client'
import { WorkCollection } from '@/types/work-collection'
import { getStrapiData } from '@/lib/utils'
import { WorkTypes } from '@/types/work'

const queries = ['work_img', 'capacity_media', 'details.image']

export default async function Work() {
	const workData: WorkTypes = await getStrapiData(`/work`, queries)
	const maindata = workData.data.attributes

	const strapiData: WorkCollection = await getStrapiData(`/work-collections`, [
		'media',
	])
	const data = getSectorBasedWork(strapiData.data)

	return (
		<Suspense>
			<WorkClient data={data} maindata={maindata} />
		</Suspense>
	)
}

function getSectorBasedWork(data: WorkCollection['data']) {
	const obj: {
		[key: string]: WorkCollection['data']
	} = {}
	data.forEach((item) => {
		const { sector } = item.attributes
		if (!obj[sector]) {
			obj[sector] = []
		}
		obj[sector].push(item)
	})

	return obj
}
