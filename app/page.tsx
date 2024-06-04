'use client'

import Image from 'next/image'
import { ReactTyped } from 'react-typed'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="bg-light-blue w-full">
				<div className="container max-w-[1200px] flex gap-2 items-center justify-center">
					<Image
						src="/seed.png"
						alt=""
						width={200}
						height={400}
						className="object-contain"
					/>

					<div className="flex flex-col gap-4 justify-center items-center'">
						<p className="text-2xl text-center">
							We work to strengthen the course of <br />
							<span className="font-bold"> Civic Engagement </span>
							using
						</p>

						<ReactTyped
							strings={['DATA', 'TECH', 'DESIGN', 'SOCIAL SCIENCE']}
							typeSpeed={50}
							backSpeed={60}
							loop
							className="text-3xl text-center text-dark-blue font-bold"
						/>
					</div>
				</div>
			</div>
		</main>
	)
}
