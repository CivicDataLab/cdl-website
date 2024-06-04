import { HomeIcon } from 'lucide-react'

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
								className="flex flex-col items-center gap-2 justify-center"
							>
								<offering.icon size={48} />
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
		</main>
	)
}
