import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/Carousel/Carousel'
import { Globe } from '@/components/Globe'
import { Typed } from '@/components/Typed'
import { getStrapiData } from '@/lib/utils'
import { Homepage } from '@/types/homepage'
import Image from 'next/image'
import Markdown from 'react-markdown'

export default async function Home() {
	const strapiData: Homepage = await getStrapiData(`/homepage`)

	const data = strapiData.data.attributes

	return (
		<main>
			{/* Header */}
			<section className="bg-light-blue py-4 w-full">
				<div className="container flex gap-6 items-center justify-center">
					<Image
						src="/seed.png"
						alt=""
						width={220}
						height={466}
						className="object-contain"
					/>

					<div className="flex flex-col gap-4 font-heading min-h-[124px]">
						<h1 className="text-3xl text-center font-medium">
							<Markdown>{data.heading}</Markdown>

							<span className="sr-only">
								data, tech, design, social science
							</span>
						</h1>

						<div className="text-3xl text-center text-dark-blue font-bold">
							<Typed list={['DATA', 'TECH', 'DESIGN', 'SOCIAL SCIENCE']} />
						</div>
					</div>
				</div>
			</section>

			{/* Sectors */}

			<section className="container py-16">
				<Heading>{data.offer_title}</Heading>

				<div className="mt-3">
					<Markdown>{data.offer_desc}</Markdown>
				</div>

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
			<section className="py-16 bg-dark-grey text-on-bg">
				<div className="container">
					<Heading>{data.data_title}</Heading>

					<div className="flex gap-12 mt-8 items-center justify-center">
						<div className="min-w-[600px] hidden md:block">
							<Globe />
						</div>
						<div className="">
							<div className="font-heading">
								<span className="text-4xl font-extrabold text-light-blue">
									36,860
								</span>
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

			{/* About */}
			<section className="bg-light-blue">
				<div className="container py-16">
					<Heading>{data.about_title}</Heading>
					<div className="mt-3">
						<Markdown>{data.about_desc}</Markdown>
					</div>

					<a href="#" className="my-8 inline-block font-medium text-lg">
						Know More &gt;&gt;
					</a>

					<iframe
						width="100%"
						height="520"
						src={data.about_youtube}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					></iframe>
				</div>
			</section>

			{/* Focus Area */}
			<section className="container py-16">
				<Heading>{data.focus_title}</Heading>

				<div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(min(310px,100%),1fr))] mt-8">
					<div>
						<h3 className="uppercase font-heading font-bold text-xl">
							Digital Public Goods
						</h3>
						<p className="mt-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
							eos sint dolorem suscipit adipisci officiis, aliquam voluptatum
							minus dolor, doloribus unde debitis deserunt quasi eum nemo ipsam.
							Repudiandae, sed animi.
						</p>
						<a href="#" className="mt-1 inline-block font-medium text-lg">
							Know More &gt;&gt;
						</a>
					</div>

					<div>
						<h3 className="uppercase font-heading font-bold text-xl">
							Climate Action
						</h3>
						<p className="mt-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
							eos sint dolorem suscipit adipisci officiis, aliquam voluptatum
							minus dolor, doloribus unde debitis deserunt quasi eum nemo ipsam.
							Repudiandae, sed animi.
						</p>
						<a href="#" className="mt-1 inline-block font-medium text-lg">
							Know More &gt;&gt;
						</a>
					</div>

					<div>
						<h3 className="uppercase font-heading font-bold text-xl">
							Public Finance
						</h3>
						<p className="mt-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
							eos sint dolorem suscipit adipisci officiis, aliquam voluptatum
							minus dolor, doloribus unde debitis deserunt quasi eum nemo ipsam.
							Repudiandae, sed animi.
						</p>
						<a href="#" className="mt-1 inline-block font-medium text-lg">
							Know More &gt;&gt;
						</a>
					</div>

					<div>
						<h3 className="uppercase font-heading font-bold text-xl">
							Open Contracting India
						</h3>
						<p className="mt-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
							eos sint dolorem suscipit adipisci officiis, aliquam voluptatum
							minus dolor, doloribus unde debitis deserunt quasi eum nemo ipsam.
							Repudiandae, sed animi.
						</p>
						<a href="#" className="mt-1 inline-block font-medium text-lg">
							Know More &gt;&gt;
						</a>
					</div>

					<div>
						<h3 className="uppercase font-heading font-bold text-xl">
							Urban Development
						</h3>
						<p className="mt-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
							eos sint dolorem suscipit adipisci officiis, aliquam voluptatum
							minus dolor, doloribus unde debitis deserunt quasi eum nemo ipsam.
							Repudiandae, sed animi.
						</p>
						<a href="#" className="mt-1 inline-block font-medium text-lg">
							Know More &gt;&gt;
						</a>
					</div>

					<div>
						<h3 className="uppercase font-heading font-bold text-xl">
							Law & Justice
						</h3>
						<p className="mt-1">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
							eos sint dolorem suscipit adipisci officiis, aliquam voluptatum
							minus dolor, doloribus unde debitis deserunt quasi eum nemo ipsam.
							Repudiandae, sed animi.
						</p>
						<a href="#" className="mt-1 inline-block font-medium text-lg">
							Know More &gt;&gt;
						</a>
					</div>
				</div>
			</section>

			{/* Partners */}
			<section className="container py-16">
				<Heading>{data.partner_title}</Heading>

				<Carousel
					opts={{
						loop: true,
						align: 'start',
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-1">
						{Array.from({ length: 10 }).map((_, index) => (
							<CarouselItem
								key={index}
								className="pl-1 md:basis-1/2 lg:basis-1/5"
							>
								<div className="p-1">
									<div className="flex aspect-square items-center justify-center p-6">
										<span className="text-2xl font-semibold">{index + 1}</span>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>

			{/* Team */}
			<section className="bg-light-blue">
				<div className="container py-16">
					<Heading>{data.team_title}</Heading>

					<Carousel
						opts={{
							loop: true,
							align: 'start',
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-1">
							{Array.from({ length: 10 }).map((_, index) => (
								<CarouselItem
									key={index}
									className="pl-1 md:basis-1/2 lg:basis-1/5"
								>
									<div className="p-1">
										<div className="flex aspect-square items-center justify-center p-6">
											<span className="text-2xl font-semibold">
												{index + 1}
											</span>
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

const Heading = ({ children }: { children: React.ReactNode }) => (
	<h2 className="font-heading font-extrabold text-2xl">{children}</h2>
)
