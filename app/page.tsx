'use client'

import Image from 'next/image'
import { ReactTyped } from 'react-typed'

export default function Home() {
	return (
		<main>
			{/* Header */}
			<section className="bg-light-blue py-4 w-full">
				<div className="container flex gap-6 items-center justify-center">
					<Image
						src="/seed.png"
						alt=""
						width={220}
						height={500}
						className="object-contain"
					/>

					<div className="flex flex-col gap-4 font-heading">
						<h1 className="text-3xl text-center font-medium">
							We work to strengthen the course of <br />
							<span className="font-bold"> Civic Engagement </span>
							using
							<span className="sr-only">
								data, tech, design, social science
							</span>
						</h1>

						<div
							aria-hidden="true"
							className="text-3xl text-center text-dark-blue font-bold"
						>
							<ReactTyped
								strings={['DATA', 'TECH', 'DESIGN', 'SOCIAL SCIENCE']}
								typeSpeed={50}
								backSpeed={60}
								loop
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Sectors */}

			<section className="container py-16">
				<h2 className="font-heading font-extrabold text-2xl">
					What CDL Offers
				</h2>
				<p className="mt-3">
					We make data accessible to help strengthen evidence based decision
					making and increase citizen engagement for sustainable impact on
					ground. By harnessing the potential of OpenData movement, we build
					institutional data capacity, develop and co-create data platforms and
					enable data-driven interventions.
				</p>

				<div className="flex gap-4 flex-wrap uppercase mt-8 text-2xl font-medium justify-evenly">
					<span>Capacity building</span>
					<span>Platforms</span>
					<span>Strategy</span>
					<span>Data Science</span>
					<span>OpenData</span>
				</div>

				<a href="#" className="mt-8 inline-block font-medium text-lg">
					Know More &gt;&gt;
				</a>
			</section>

			{/* Data */}
			<section className="py-16 bg-dark-grey text-white">
				<div className="container">
					<h2 className="font-heading font-extrabold text-2xl">Data at CDL</h2>

					<div className="flex gap-12 mt-8 items-center">
						<div className="bg-red-600 grow w-full h-96"></div>
						<div className="grow">
							<div className="font-heading">
								<span className="text-4xl font-extrabold">36,860</span>
								<p className="mt-2 text-3xl font-bold">
									Public Contracts Opened
								</p>
							</div>

							<p className="mt-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
								ea minima deserunt vero. Quae a alias voluptates itaque delectus
								sint quam. Laborum fugit temporibus dolores! Accusamus quis
								neque provident odio!
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
