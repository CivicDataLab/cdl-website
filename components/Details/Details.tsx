import React from 'react'
import Image from 'next/image'
import { WorkCollection } from '@/types/work-collection'
import { parseAsString, useQueryState } from 'nuqs'
import { getStrapiMediaUrl } from '@/lib/utils'
import { RabbitIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface DetailsProps {
	data: {
		[key: string]: WorkCollection['data']
	}
	content: any
}

const filters = [
	{
		label: 'DPGs',
		value: 'dpgs',
	},
	{
		label: 'Climate Action',
		value: 'climate-action',
	},
	{
		label: 'Public Finance',
		value: 'public-finance',
	},
	{
		label: 'Open Contracting India',
		value: 'open-contracting-india',
	},
	{
		label: 'Urban Development',
		value: 'urban-development',
	},
	{
		label: 'Law & Justice',
		value: 'law-justice',
	},
]

const Details: React.FC<DetailsProps> = ({ data, content }) => {
	const pathname = usePathname()

	const [filter, setFilter] = useQueryState(
		'filter',
		parseAsString.withDefault(filters[0].value)
	)
	const selectedContent = content.find((item: any) => item.uuid === filter)

	return (
		<section className="p-6 mb-12">
			<div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
				{filters.map((item) => (
					<button
						key={item.value}
						onClick={() => setFilter(item.value)}
						className={`whitespace-nowrap rounded-3xl border-2 w-fit h-fit px-3 py-1 ${
							filter === item.value ? 'bg-black text-white' : 'border-black'
						}`}
					>
						{item.label}
					</button>
				))}
			</div>
			<div className="flex justify-center flex-wrap sm:flex-nowrap gap-14 mt-8 px-5">
				{selectedContent && (
					<div className="sm:max-w-52 sm:shrink-0 grow h-fit">
						{selectedContent.image.data && (
							<Image
								src={getStrapiMediaUrl(
									selectedContent.image.data?.attributes.url
								)}
								alt=""
								width={120}
								height={120}
							/>
						)}
						<p className="font-heading text-2xl font-bold mt-4">
							{selectedContent.title}
						</p>
						<p className="mt-3">{selectedContent.description}</p>
					</div>
				)}
				<div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(380px,100%),1fr))] grow">
					{data[filter] && data[filter].length > 0 ? (
						data[filter].map(({ id, attributes }) => (
							<a
								href={`${pathname}/${attributes.slug}`}
								key={id}
								className="h-fit w-full"
							>
								<Image
									src={getStrapiMediaUrl(attributes.media.data.attributes.url)}
									width={640}
									height={300}
									className="object-contain"
									alt={attributes.title}
								/>
								<p className="text-xl font-bold mt-2">{attributes.title}</p>
							</a>
						))
					) : (
						<div className="flex flex-col gap-2 items-center mt-10">
							<RabbitIcon size={64} />
							<p>No available data</p>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default Details
