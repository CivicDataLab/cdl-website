import { getStrapiData, getStrapiMediaUrl } from '@/lib/utils'
import { About } from '@/types/about'
import { HomeIcon } from 'lucide-react'
import Image from 'next/image'
import Markdown from 'react-markdown'

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

const queries = [
	'heading_items.icon',
	'heading_link',
	'process_media',
	'vision_link',
	'values_items',
	'pillar_media',
	'team_items.image',
]

export default async function AboutPage() {
	const strapiData: About = await getStrapiData(`/about`, queries)
	const data = strapiData.data.attributes

	return (
		<main>
			<section className="bg-light-blue py-16">
				<div className="container text-center">
					<h1 className="text-3xl font-medium">{data.heading}</h1>
					<div className="flex gap-4 flex-wrap uppercase mt-8 font-medium justify-center">
						{data.heading_items.map((item) => (
							<div key={item.id} className="flex flex-col gap-4 items-center">
								<Image
									src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${item.icon.data.attributes.url}`}
									alt=""
									width={120}
									height={120}
								/>
								<span className="max-w-56 text-center text-xl">
									{item.title}
								</span>
							</div>
						))}
					</div>

					<div className="mt-10">
						<Markdown>{data.heading_sub}</Markdown>
					</div>
					<a
						href={data.heading_link.url}
						className="inline-block font-medium text-lg mt-1"
					>
						{data.heading_link.title}
					</a>
				</div>
			</section>

			{/* process */}
			<section className="container py-20 lg:py-40">
				<div className="flex flex-col gap-8 items-center justify-between lg:flex-row">
					<div>
						<Heading>{data.process_title}</Heading>
						<div className="mt-4">
							<Markdown>{data.process_desc}</Markdown>
						</div>
					</div>
					<Image
						src={getStrapiMediaUrl(data.process_media.data.attributes.url)}
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
					<Heading>{data.vision_title}</Heading>
					<div className="mt-4">
						<Markdown>{data.vision_desc}</Markdown>
					</div>
					<a
						href={data.vision_link.url}
						className="inline-block font-medium text-lg mt-4"
					>
						{data.vision_link.title}
					</a>

					<iframe
						width="100%"
						height="520"
						src={data.vision_youtube}
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
					<Heading>{data.values_title}</Heading>
					<div className="mt-10 columns-2 md:columns-3 gap-10 [&>div]:mb-8">
						{data.values_items.map((item) => (
							<ValueCard key={item.id} title={item.title}>
								<Markdown className="flex flex-col gap-2">{item.desc}</Markdown>
							</ValueCard>
						))}
					</div>
				</div>
			</section>

			{/* pillars */}
			<section className="flex items-center justify-center md:justify-between container">
				<div className="py-20 flex flex-col md:flex-row lg:flex-col">
					<div className="max-w-96">
						<Heading>{data.pillar_title}</Heading>
						<div className="mt-4">{data.pillar_desc}</div>
					</div>

					<div className="flex flex-col gap-4 uppercase mt-10 pl-10 font-heading font-bold text-xl">
						<span className="py-1 px-2 rounded-md w-fit text-on-bg bg-data">
							Data
						</span>
						<span className="py-1 px-2 rounded-md w-fit bg-tech">Tech</span>
						<span className="py-1 px-2 rounded-md w-fit text-on-bg bg-design">
							Design
						</span>
						<span className="py-1 px-2 rounded-md w-fit bg-social-science">
							Social Science
						</span>
					</div>
				</div>

				<Image
					src={getStrapiMediaUrl(data.pillar_media.data.attributes.url)}
					alt=""
					width={640}
					height={740}
					className="object-contain hidden lg:block"
				/>
			</section>

			{/* team */}
			<section className="py-20 bg-dark-blue text-on-bg">
				<div className="container ">
					<Heading>{data.team_title}</Heading>
					<div className="mt-4 max-w-[450px]">
						<Markdown>{data.team_desc}</Markdown>
					</div>

					<div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(min(310px,100%),1fr))] mt-10">
						{data.team_items.map((member) => (
							<div key={member.id} className="flex items-end gap-6">
								<Image
									src={getStrapiMediaUrl(member.image.data.attributes.url)}
									alt=""
									width={100}
									height={200}
									className="object-contain"
								/>
								<div className="flex flex-col mb-10 max-w-48 font-heading">
									<span className="text-xl font-bold">
										{getFirstName(member.name)}
									</span>
									<span className="leading-5 text-sm">{member.role}</span>
								</div>
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
		<div>{children}</div>
	</div>
)

function getFirstName(name: string) {
	return name.split(' ')[0]
}
