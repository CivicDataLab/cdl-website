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

			{/* vision */}
			<section className="bg-dark-grey py-20 text-on-bg">
				<div className="container">
					<Heading>Our Vision</Heading>
					<p className="mt-4">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
						doloribus harum veniam in ratione sequi iste commodi nisi, ipsam ea
						corporis, natus, minus dolore laudantium quod voluptas similique.
						Pariatur, perspiciatis.
					</p>
					<a href="#" className="inline-block font-medium text-lg mt-4">
						Know more &gt;&gt;
					</a>

					<iframe
						width="100%"
						height="520"
						src="https://www.youtube-nocookie.com/embed/8JoctVLMEyc?si=k2SFIEWZtJ_f_5kz"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="mt-8"
					></iframe>
				</div>
			</section>

			{/* values */}
			<section className="bg-dark-grey py-10 text-on-bg">
				<div className="container">
					<Heading>Our Values</Heading>
					<div className="mt-10 columns-2 md:columns-3 gap-10 [&>div]:mb-8">
						<ValueCard title="OPENNESS">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste
							eveniet non consequatur laboriosam tempora dolorem ducimus
							blanditiis delectus minus fugit maxime consectetur debitis
							perspiciatis, in voluptatum culpa reprehenderit assumenda.
						</ValueCard>

						<ValueCard title="Experimentation & Innovation">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste
							eveniet non consequatur laboriosam tempora dolorem ducimus
							blanditiis delectus minus fugit maxime consectetur debitis
							perspiciatis, in voluptatum culpa reprehenderit assumenda.
						</ValueCard>

						<ValueCard title="Diversity & Inclusivity">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
						</ValueCard>

						<ValueCard title="Co-creation & Participation">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
						</ValueCard>

						<ValueCard title="Trust & Empathy">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
						</ValueCard>

						<ValueCard title="Feedbacks">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
						</ValueCard>

						<ValueCard title="Fun & Engaging">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
							<br />
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam cum
							aperiam sed temporibus quos provident mollitia vel ipsam odio
							quia, alias dicta ex inventore maiores sint ipsum nesciunt.
							Numquam, quaerat.
						</ValueCard>
					</div>
				</div>
			</section>

			{/* pillars */}
			<section className="flex items-center justify-center md:justify-between container">
				<div className="py-20 flex flex-col md:flex-row lg:flex-col">
					<div className="max-w-96">
						<Heading>Our four pillars</Heading>
						<p className="mt-4">
							We ground our work’s value and validity in our multidisciplinary
							approach. Our DATA pillar provides expertise in data science,
							modelling, learning etc, while our TECH pillar aids in providing
							engineering and tech management. Our DESIGN pillar helps approach
							data-driven solutions from a stakeholder-perspective using design
							thinking, and our SOCIAL SCIENCE pillar allows our work to become
							viable, adaptable and impactful at scale.
						</p>
					</div>

					<div className="flex flex-col gap-8 uppercase mt-10 pl-20 font-heading font-bold text-xl">
						<span>Data</span>
						<span>Tech</span>
						<span>Design</span>
						<span>Social Science</span>
					</div>
				</div>

				<Image
					src="/roots.png"
					alt=""
					width={640}
					height={740}
					className="object-contain hidden lg:block"
				/>
			</section>

			{/* team */}
			<section className="py-20 bg-dark-blue text-on-bg">
				<div className="container ">
					<Heading>Our Bandhus</Heading>
					<p className="mt-4 max-w-[450px]">
						Meet our multidisciplinary team of Bandhus- experts from all across
						India dedicated to data for public good across sectors and
						thematics.
					</p>

					<div className="flex flex-wrap gap-8 mt-10">
						{Array.from({ length: 6 }).map((_, idx) => (
							<div key={idx} className="flex flex-col items-center gap-4">
								<Image
									src="/team-member.png"
									alt=""
									width={300}
									height={200}
									className="object-cover"
								/>
								<span className="text-xl font-medium">Name</span>
								<span className="text-lg">Role</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

const Heading = ({ children }: { children: React.ReactNode }) => (
	<h2 className="font-heading font-extrabold text-2xl">{children}</h2>
)

const ValueCard = ({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) => (
	<div className="break-inside-avoid-column flex flex-col gap-4">
		<h3 className="text-light-blue font-heading font-bold text-xl uppercase">
			{title}
		</h3>
		<p>{children}</p>
	</div>
)
