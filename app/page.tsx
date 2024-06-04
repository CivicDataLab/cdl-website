'use client'

import Image from 'next/image'
import { ReactTyped } from 'react-typed'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
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

					<div className="flex flex-col gap-4">
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

			<section className="container">
				<h2>What CDL Offers</h2>
			</section>
		</main>
	)
}
