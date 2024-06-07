import { getStrapiCollectionData, getStrapiMediaUrl } from '@/lib/utils'
import { WorkCollection } from '@/types/work-collection'
import Image from 'next/image'
import Markdown from 'react-markdown'

export default async function Page({
	params,
}: {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
	const strapiData: WorkCollection = await getStrapiCollectionData({
		url: '/work-collections',
		slug: params.slug,
		queries: ['media'],
	})

	const data = strapiData.data[0]
	const { attributes, id } = data

	return (
		<main>
			<div className="flex justify-center flex-wrap sm:flex-nowrap gap-14 px-5">
				<div className="w-52 shrink-0 grow sticky top-0 h-fit">
					<Image
						src="/B2.jpg"
						alt=""
						width={120}
						height={120}
						className="mt-10"
					/>
					<p className="font-heading text-2xl font-bold mt-4">Climate Action</p>
					<p className="mt-3">
						We create and curate high quality public datasets in the areas of
						climate action. We build open data portals to increase information
						accessibility and conduct trainings and workshops for our partners
						to enhance their data and tech capacity
					</p>
				</div>

				<div className="grow">
					<section className="bg-light-green w-full min-h-48 rounded-l-xl font-heading py-6 px-5">
						<h1 className="font-extrabold text-2xl uppercase">
							{attributes.title}
						</h1>
						<p className="font-semibold text-lg mt-2 max-w-[420px]">
							{attributes.desc}
						</p>
						<Image
							src={getStrapiMediaUrl(attributes.media.data.attributes.url)}
							width={840}
							height={480}
							alt=""
							className="w-full mt-4 object-cover h-96"
						/>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Idea</Heading>
						<div className="mt-4">
							<Markdown className="flex flex-col gap-2">
								{attributes.idea}
							</Markdown>
						</div>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Partner</Heading>
						<div className="mt-2">
							<Markdown className="flex flex-col gap-2">
								{attributes.partner}
							</Markdown>
						</div>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Project Report</Heading>
						<div className="mt-2">
							<Markdown className="flex flex-col gap-2">
								{attributes.project_report}
							</Markdown>
						</div>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Team</Heading>
						<div className="mt-2">
							<Markdown className="flex flex-col gap-2">
								{attributes.team}
							</Markdown>
						</div>
					</section>
				</div>
			</div>

			<section className="bg-light-green py-10 mt-10">
				<div className="flex justify-center flex-wrap sm:flex-nowrap gap-16 px-5">
					<div className="hidden sm:block min-w-56"></div>
					<div className="grow">
						<Heading>Related Links</Heading>
						<Markdown className="mt-4 [&>ul]:list-disc [&>ul]:list-inside">
							{attributes.related}
						</Markdown>
					</div>
				</div>
			</section>
		</main>
	)
}

const Heading = ({ children }: { children: React.ReactNode }) => (
	<h2 className="font-heading font-extrabold text-2xl">{children}</h2>
)
