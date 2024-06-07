import { Suspense } from 'react'
import { WorkClient } from './client'
import { WorkCollection } from '@/types/work-collection'
import { getStrapiData } from '@/lib/utils'

const queries = ['media']

export default async function Work() {
	const strapiData: WorkCollection = await getStrapiData(
		`/work-collections`,
		queries
	)
	const data = getSectorBasedWork(strapiData.data)

	return (
		<Suspense>
			<WorkClient data={data} />
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
