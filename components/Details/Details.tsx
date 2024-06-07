import React from 'react'
import Image from 'next/image'
import { WorkCollection } from '@/types/work-collection'
import { parseAsString, useQueryState } from 'nuqs'
import { getStrapiMediaUrl } from '@/lib/utils'
import { RabbitIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { WorkTypes } from '@/types/work'

interface DetailsProps {
	data: {
		[key: string]: WorkCollection['data']
	}
	content: WorkTypes['data']['attributes']['details']
}

const Details: React.FC<DetailsProps> = ({ data, content }) => {
	const pathname = usePathname()

	const [filter, setFilter] = useQueryState(
		'filter',
		parseAsString.withDefault(content[0].uuid)
	)
	const selectedContent = content.find((item: any) => item.uuid === filter)

	return (
		<section className="p-6 mb-12">
			<div className="flex gap-4 p-2 justify-start overflow-auto scrollbar-hide lg:justify-center">
				{content.map((item) => (
					<button
						key={item.uuid}
						onClick={() => setFilter(item.uuid)}
						className={`whitespace-nowrap rounded-3xl border-2 w-fit h-fit px-3 py-1 ${
							filter === item.uuid ? 'bg-black text-white' : 'border-black'
						}`}
					>
						{item.title}
					</button>
				))}
			</div>
			<div className="flex justify-center flex-wrap sm:flex-nowrap gap-14 mt-8 px-5">
				{selectedContent && (
					<div className="sm:max-w-52 sm:shrink-0 grow h-fit sm:sticky top-0">
						{selectedContent.image.data && (
							<Image
								src={getStrapiMediaUrl(
									selectedContent.image.data.attributes.url
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
