import { HomeIcon } from 'lucide-react'
import Image from 'next/image'

const offerings = [
	{
		title: 'Capacity Building',
		icon: HomeIcon,
	},
	{
		title: 'Platforms',
		icon: HomeIcon,
	},
	{
		title: 'Strategy',
		icon: HomeIcon,
	},
	{
		title: 'Data Science',
		icon: HomeIcon,
	},
	{
		title: 'OpenData',
		icon: HomeIcon,
	},
]

export default function About() {
	return (
		<main>
			<section className="bg-light-blue py-16">
				<div className="container text-center">
					<h1 className="text-3xl font-medium">CivicDataLab Offers</h1>
					<div className="flex flex-wrap gap-8 justify-center mt-8">
						{offerings.map((offering) => (
							<div
								key={offering.title}
								className="flex flex-col items-center gap-4 justify-center"
							>
								<Image src="/offer-icon.png" alt="" width={128} height={128} />
								<span className="text-xl font-medium">{offering.title}</span>
							</div>
						))}
					</div>
					<p className="mt-10">
						We make data accessible, relevant, effective and impactful.
					</p>
					<a href="#" className="inline-block font-medium text-lg mt-1">
						Check out our work catalogue &gt;&gt;
					</a>
				</div>
			</section>

			{/* process */}
			<section className="container py-20 lg:py-40">
				<div className="flex flex-col gap-8 items-center justify-between lg:flex-row">
					<div>
						<Heading>Our Process</Heading>
						<p className="mt-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
							iusto repudiandae accusantium minima ratione consequatur
							recusandae possimus voluptatum facilis exercitationem, distinctio
							animi dignissimos dolor? Cumque odio deserunt temporibus obcaecati
							illo.
						</p>
					</div>
					<Image
						src="/process.png"
						alt=""
						width={700}
						height={470}
						className="object-contain"
					/>
				</div>
			</section>
		</main>
	)
}

const Heading = ({ children }: { children: React.ReactNode }) => (
	<h2 className="font-heading font-extrabold text-2xl">{children}</h2>
)
