'use client'

import List from '@/components/Details/Details'
import Image from 'next/image'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/Carousel/Carousel'
import { getStrapiMediaUrl } from '@/lib/utils'
import { WorkTypes } from '@/types/work'
import { WorkCollection } from '@/types/work-collection'
import Markdown from 'react-markdown'

export function WorkClient({
	collectionData,
	pageData,
}: {
	collectionData: {
		[key: string]: WorkCollection['data']
	}
	pageData: WorkTypes['data']['attributes']
}) {
	return (
		<main>
			{/* Header */}
			<section>
				<div className="bg-light-green w-full">
					<div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-10 gap-10 lg:gap-26 flex-grow">
						<Image
							src={getStrapiMediaUrl(pageData.work_img.data.attributes.url)}
							width={600}
							height={390}
							className="object-contain"
							alt="book logo"
						/>
						<div className=" lg:max-w-lg">
							<h2 className=" font-heading lg:text-2xl sm:text-lg text-center font-medium mb-3">
								<Markdown>{pageData.work_desc}</Markdown>
							</h2>
						</div>
					</div>
				</div>
			</section>

			{/* Listing */}
			<List data={collectionData} content={pageData.details} />

			{/* Capacity building */}
			<section className=" bg-light-green">
				<div className=" container w-full lg:p-16 p-10 ">
					<div>
						<h2 className="font-heading font-extrabold text-2xl mb-3">
							{pageData.capacity_title}
						</h2>
						<p className="text-xl">{pageData.capacity_desc}</p>
					</div>
					<Carousel
						opts={{
							loop: true,
							align: 'start',
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-1">
							{pageData.capacity_media.data.map((item: any) => (
								<CarouselItem
									key={item.id}
									className="pl-1 md:basis-1/2 lg:basis-1/5"
								>
									<div className="p-1">
										<div className="flex aspect-square items-center justify-center p-6">
											<Image
												src={getStrapiMediaUrl(item.attributes.url)}
												alt=""
												width={150}
												height={150}
											/>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>
		</main>
	)
}
