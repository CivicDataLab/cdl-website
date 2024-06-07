import Image from 'next/image'

export default function Page({
	params,
	searchParams,
}: {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}) {
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
						<h1 className="font-extrabold text-2xl uppercase">PetaBencana</h1>
						<p className="font-semibold text-lg mt-2 max-w-[420px]">
							Open platform to facilitate crowd sourced disaster reported via
							social media
						</p>
						<Image
							src="/event-sec3.1.png"
							width={840}
							height={480}
							alt=""
							className="w-full mt-4"
						/>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Idea</Heading>
						<div className="mt-4">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Architecto inventore, molestiae hic nobis animi tenetur veniam
							voluptates, itaque incidunt placeat dolorum repellat nostrum
							doloremque debitis fuga, quasi delectus alias! Assumenda?
							<br /> <br />
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ut
							neque laborum sit id illo ab. Sit consequatur repellat eum sequi
							corporis sed at obcaecati magnam deleniti vel, impedit modi!
							<br /> <br />
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ut
							neque laborum sit id illo ab. Sit consequatur repellat eum sequi
							corporis sed at obcaecati magnam deleniti vel, impedit modi!
							<br /> <br />
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ut
							neque laborum sit id illo ab. Sit consequatur repellat eum sequi
							corporis sed at obcaecati magnam deleniti vel, impedit modi!
						</div>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Partner</Heading>
						<div className="mt-2">
							<a className="text-blue-500" href="#">
								https://petabencana.id
							</a>
						</div>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Project Report</Heading>
						<div className="mt-2">
							<a className="text-blue-500" href="#">
								ProjectReport.pdf
							</a>
						</div>
					</section>

					<section className="mt-8 ml-6">
						<Heading>Team</Heading>
						<div className="mt-2">
							<a className="text-blue-500" href="#">
								Deepthi Chand
							</a>
						</div>
					</section>
				</div>
			</div>

			<section className="bg-light-green py-10 mt-10">
				<div className="flex justify-center flex-wrap sm:flex-nowrap gap-16 px-5">
					<div className="hidden sm:block min-w-56"></div>
					<div className="grow">
						<Heading>Related Links</Heading>
						<ul className="mt-4 flex flex-col gap-3 pl-3">
							<li> - Explore the role of technology</li>
							<li> - Risk Map projects supported by MIT</li>
							<li> - Community informed sharing shapes</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	)
}

const Heading = ({ children }: { children: React.ReactNode }) => (
	<h2 className="font-heading font-extrabold text-2xl">{children}</h2>
)
