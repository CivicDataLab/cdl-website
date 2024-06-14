import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/Carousel/Carousel'
import { Globe } from '@/components/Globe'
import { SubscribeForm } from '@/components/Subscribe'
import { Typed } from '@/components/Typed'
import { getStrapiData, getStrapiMediaUrl } from '@/lib/utils'
import { Homepage } from '@/types/homepage'
import Image from 'next/image'
import Markdown from 'react-markdown'

const queries = [
	'offer_items.icon',
	'offer_link',
	'data_items',
	'about_link',
	'focus_card.icon',
	'focus_card.link',
	'partner_items',
	'team_items',
]

export default async function Home() {
	const strapiData: Homepage = await getStrapiData(`/homepage`, queries)
	const data = strapiData.data.attributes

	return (
		<main>
			{/* Header */}
			<section className="bg-light-blue py-4 w-full">
				<div className="container flex gap-6 items-center justify-center py-20 sm:py-0">
					<Image
						src="/seed.png"
						alt=""
						width={220}
						height={466}
						className="object-contain hidden sm:block"
						style={{
							width: '220px',
							height: '466px',
						}}
					/>

					<div className="flex flex-col gap-4 font-heading min-h-[124px]">
						<h1 className="text-2xl sm:text-3xl text-center font-medium">
							<Markdown>{data.heading}</Markdown>

							<span className="sr-only">
								data, tech, design, social science
							</span>
						</h1>

						<div className="text-2xl sm:text-3xl text-center text-dark-blue font-bold">
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

				<div className="flex gap-4 flex-wrap uppercase mt-8 font-medium justify-evenly">
					{data.offer_items.map((item) => (
						<div key={item.id} className="flex flex-col gap-4 items-center">
							<Image
								src={getStrapiMediaUrl(item.icon.data.attributes.url)}
								alt=""
								width={150}
								height={150}
								style={{
									width: '150px',
									height: '150px',
								}}
							/>
							<span className="max-w-56 text-center text-2xl">
								{item.title}
							</span>
						</div>
					))}
				</div>

				<a
					href={data.offer_link.url}
					className="mt-8 inline-block font-medium text-lg"
				>
					{data.offer_link.title}
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
									{data.data_items[0].title}
								</span>
								<p className="mt-2 text-3xl font-bold">
									{data.data_items[0].sub_title}
								</p>
							</div>

							<div className="mt-6">
								<Markdown>{data.data_items[0].desc}</Markdown>
							</div>
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

					<a
						href={data.about_link.url}
						className="my-8 inline-block font-medium text-lg"
					>
						{data.about_link.title}
					</a>

					<iframe
						width="100%"
						height="520"
						src={data.about_youtube}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</section>

			{/* Focus Area */}
			<section className="container py-16">
				<Heading>{data.focus_title}</Heading>

				<div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(min(310px,100%),1fr))] mt-8">
					{data.focus_card.map((card) => (
						<div key={card.id} className="flex flex-col gap-4">
							<Image
								src={getStrapiMediaUrl(card.icon.data.attributes.url)}
								alt=""
								width={150}
								height={150}
								style={{
									width: '150px',
									height: '150px',
								}}
							/>
							<h3 className="max-w-56 uppercase font-heading font-bold text-xl">
								{card.title}
							</h3>
							<div className="mt-1">
								<Markdown>{card.desc}</Markdown>
							</div>
							<a
								href={card.link.url}
								className="mt-1 inline-block font-medium text-lg"
							>
								{card.link.title}
							</a>
						</div>
					))}
				</div>
			</section>

			{/* Partners */}
			<section className="container py-16">
				<Heading>{data.partner_title}</Heading>

				<Carousel
					opts={{
						loop: true,
						align: 'start',
						skipSnaps: true,
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-1">
						{data.partner_items.data.map((item) => (
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
											style={{
												width: '150px',
												height: '150px',
											}}
											className="object-contain"
										/>
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
							skipSnaps: true,
						}}
						className="w-full"
					>
						<CarouselContent className="-ml-1">
							{data.team_items.data.map((item) => (
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
												style={{
													width: '150px',
													height: '150px',
												}}
												className="object-contain"
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

			{/* Subscribe */}
			<section>
				<div className="container py-16">
					<Heading>Subscribe</Heading>

					<SubscribeForm />
				</div>
			</section>
		</main>
	)
}

const Heading = ({ children }: { children: React.ReactNode }) => (
	<h2 className="font-heading font-extrabold text-2xl">{children}</h2>
)
