'use client'

import React, { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import Details from '@/components/Details/Details'
import { parseAsString, useQueryState } from 'nuqs'

interface ParticipationSection {
	title: string
	date: string
	location: string
	partnerLogoSrc: string
	eventImageSrc: string
}

const EventSection: React.FC<ParticipationSection> = ({
	title,
	date,
	location,
	partnerLogoSrc,
	eventImageSrc,
}) => {
	return (
		<div className="flex container justify-center flex-wrap items-center mt-12 ">
			<div className="lg:p-10 p-6 md:w-3/4 lg:min-h-64 lg:max-h-64 lg:w-2/4 bg-white">
				<h2 className="font-heading text-2xl font-bold mb-3">{title}</h2>
				<p className=" mb-4">
					{date} | {location}
				</p>
				<Image
					src={partnerLogoSrc}
					width={120}
					height={30}
					className="object-contain"
					alt="event logo"
					style={{
						width: '120px',
						height: '30px',
					}}
				/>
			</div>
			<Image
				src={eventImageSrc}
				width={560}
				height={340}
				className="object-cover lg:min-h-64 lg:max-h-64 "
				alt="event logo"
				style={{
					width: '560px',
					height: '340px',
				}}
			/>
		</div>
	)
}

export default function Events() {
	return (
		<Suspense>
			<Client />
		</Suspense>
	)
}

function Client() {
	const EventsData = [
		{
			name: 'Climate Dialogues',
			desc: 'Climate Dialogues facilitates peer learning and knowledge sharing among various Asian countries on technological and data-driven ways to advance their adaptation plans.',
			res: [
				{
					name: 'Convening on Tech and Data-driven ways to advance Climate Change Adaptation',
					img: '/event-sec2.1.png',
				},
				{
					name: 'Innovative Use of Al Models & Open Data for Climate Action',
					img: '/event-sec2.2.png',
				},
				{
					name: 'Global Perspectives on Data-Driven Green Budgeting',
					img: '/event-sec2.3.png',
				},
				{
					name: 'Free & Open-source Software (FOSS) and Climate Change',
					img: '/event-sec2.4.png',
				},
			],
			sidebarImg: '/globe.png',
		},
		{
			name: 'Data Dialogues',
			desc: 'Read our latest blogs to stay informed about our work and insights in various fields.',
			res: [
				{
					name: 'Global Perspectives on Data-Driven Green Budgeting',
					img: '/event-sec2.3.png',
				},
			],
		},
		{
			name: 'Justice Dialogues',
			desc: 'Access our comprehensive reports that provide detailed analysis and findings.',
			res: [
				{
					name: 'Free & Open-source Software (FOSS) and Climate Change',
					img: '/event-sec2.4.png',
				},
				{
					name: 'Innovative Use of Al Models & Open Data for Climate Action',
					img: '/event-sec2.2.png',
				},
			],
		},
		{
			name: 'CivicSabha',
			desc: 'Access our comprehensive reports that provide detailed analysis and findings.',
			res: [
				{
					name: 'IDS-DRR',
					img: '/event-sec2.1.png',
				},
			],
		},
		{
			name: 'Workshops',
			desc: 'Access our comprehensive reports that provide detailed analysis and findings.',
			res: [
				{
					name: 'Convening on Tech and Data-driven ways to advance Climate Change Adaptation',
					img: '/event-sec2.1.png',
				},
				{
					name: 'Innovative Use of Al Models & Open Data for Climate Action',
					img: '/event-sec2.2.png',
				},
			],
		},
	]
	const [filter, setFilter] = useQueryState(
		'filter',
		parseAsString.withDefault('Climate Dialogues')
	)
	const [selected, setSelected] = useState(() => {
		return EventsData.find((item) => item.name === filter) || EventsData[0]
	})

	useEffect(() => {
		const found = EventsData.find((item) => item.name === filter)
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
				<div className="bg-light-green w-full">
					<div className="flex justify-center flex-wrap items-center py-16 px-8 lg:p-16 gap-10 lg:gap-26 flex-grow">
						<Image
							src="/event-sec1.png"
							width={720}
							height={490}
							className="object-contain"
							alt="book logo"
							style={{
								width: '720px',
								height: '490px',
							}}
						/>
						<div className="lg:max-w-md">
							<h2 className="text-dark-blue font-heading text-2xl font-bold mb-3">
								Fostering outreach
								<br /> & dialogue
							</h2>
							<p className="text-xl">Explore our events for:</p>
							<ul className="list-disc ml-12 marker:text-dark-blue">
								<li className="text-xl">active engagement </li>
								<li className="text-xl">collaborative solutions & </li>
								<li className="text-xl">collective learning</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className="bg-light-green w-full lg:p-20 p-10 ">
					<div className="container">
						<h2 className=" font-heading text-2xl font-extrabold mb-3">
							Our Participation
						</h2>
						<p className="text-xl">
							A paragraph CivicDatalab is an organisation working towards
							building OpenData networks for evidence based decision making with
							increased community engagement to create resilient/sustainable
							solutions/ interventions.
						</p>
					</div>
					<EventSection
						title="Tech4Impact Non-Profit CTO Convergence Event"
						date="5th April 2024"
						location="Bangalore"
						partnerLogoSrc="/event-partner1.png"
						eventImageSrc="/event-sec3.1.png"
					/>

					<EventSection
						title="European Data Summit 2024"
						date="15th April 2024"
						location="Berlin"
						partnerLogoSrc="/event-partner2.png"
						eventImageSrc="/event-sec3.2.png"
					/>
					<div className="container">
						<a href="#" className="mt-8 inline-block font-extrabold text-lg">
							Know More &gt;&gt;
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}
