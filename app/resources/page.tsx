'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Details from '@/components/Details/Details'
import { parseAsString, useQueryState } from 'nuqs'

const Resources = () => {
	const ResourcesData = [
		{
			name: 'Dashboard/Tools',
			desc: 'We help made public data open, accessible and usable by designing platforms to host and analyze well-curated datasets. We do this as part of our mission to bolster digital public infrastructure (DPI) and aid data-driven governance, foster collaborative learning, enhance citizen engagement, and nurture the open data ecosystem.',
			res: [
				{
					name: 'IDS-DRR',
					img: '/resource-sec2.1.png',
				},
				{
					name: 'Justice Hub',
					img: '/resource-sec2.2.png',
				},
				{
					name: 'Open Budgets India',
					img: '/resource-sec2.3.png',
				},
				{
					name: 'Open Contracting India',
					img: '/resource-sec2.4.png',
				},
			],
		},
		{
			name: 'Blogs',
			desc: 'Read our latest blogs to stay informed about our work and insights in various fields.',
			res: [
				{
					name: 'Justice Hub',
					img: '/resource-sec2.2.png',
				},
			],
		},
		{
			name: 'Reports',
			desc: 'Access our comprehensive reports that provide detailed analysis and findings.',
			res: [
				{
					name: 'IDS-DRR',
					img: '/resource-sec2.1.png',
				},
			],
		},
		{
			name: 'Guidebook',
			desc: 'Explore our guidebooks that provide step-by-step instructions and valuable tips.',
			res: [
				{
					name: 'Justice Hub',
					img: '/resource-sec2.2.png',
				},
			],
		},
		{
			name: 'Policy papers',
			desc: 'Review our policy papers that delve into significant topics and recommendations.',
			res: [
				{
					name: 'IDS-DRR',
					img: '/resource-sec2.1.png',
				},
				{
					name: 'Justice Hub',
					img: '/resource-sec2.2.png',
				},
			],
		},
	]

	const [filter, setFilter] = useQueryState(
		'filter',
		parseAsString.withDefault('Dashboard/Tools')
	)
	const [selected, setSelected] = useState(() => {
		return (
			ResourcesData.find((item) => item.name === filter) || ResourcesData[0]
		)
	})

	useEffect(() => {
		const found = ResourcesData.find((item) => item.name === filter)
		if (found) {
			setSelected(found)
		}
	}, [filter])

	useEffect(() => {
		if (selected.name !== filter) {
			setFilter(selected.name)
		}
	}, [selected])

	return (
		<div>
			<section>
				<div className="bg-light-blue w-full">
					<div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
						<Image
							src="/resource-sec1.png"
							width={520}
							height={320}
							className="object-contain"
							alt="book logo"
						/>
						<div className="lg:max-w-md">
							<h2 className="text-dark-blue font-heading text-2xl font-bold mb-3">
								Explore the resources
								<br /> we provide to
							</h2>
							<ul className="list-disc ml-12 marker:text-dark-blue">
								<li className="text-xl">support digital commons</li>
								<li className="text-xl">share knowledge and tools</li>
								<li className="text-xl">enhance awareness</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Details
				selected={selected}
				setSelected={setSelected}
				Data={ResourcesData}
			/>
		</div>
	)
}

export default Resources
