import Image from 'next/image'

const socialLinks = [
	{
		href: 'https://x.com/civicdatalab',
		icon: '/socials/twitter.svg',
		name: 'Twitter',
	},
	{
		href: 'https://linkedin.com/in/civicdatalab',
		icon: '/socials/linkedin.svg',
		name: 'LinkedIn',
	},
	{
		href: 'https://github.com/civicdatalab',
		icon: '/socials/github.svg',
		name: 'GitHub',
	},
]

export const Footer = () => {
	return (
		<footer className="text-on-bg bg-dark">
			<div className="flex items-center justify-between py-8 container">
				<div className="flex items-center gap-8">
					<a href="/">
						<Image
							src="/logo_dark.png"
							width={80}
							height={104}
							style={{
								width: '80px',
								height: '104px',
							}}
							className="object-contain"
							alt="civicdatalab logo"
						/>
					</a>

					<div className="flex gap-2 font-medium">
						<span>License</span>
						<span>|</span>
						<span>Site map</span>
					</div>
				</div>

				<div className="flex justify-between gap-16">
					<div className="flex flex-col gap-1 font-medium">
						<a href="mailto:info@civicdatalab.in" className="text-lg">
							info@civicdatalab.in
						</a>
						<div className="flex gap-2 items-center mt-4">
							<div className="flex gap-1">
								{socialLinks.map(({ href, icon, name }) => (
									<a
										rel="noreferrer"
										target="_blank"
										href={href}
										key={name}
										className="bg-on-bg p-2 rounded-full"
									>
										<Image
											src={icon}
											alt={name}
											width={20}
											height={20}
											style={{
												width: '20px',
												height: '20px',
											}}
										/>
									</a>
								))}
							</div>
							<span className="text-xl">/civicdatalab</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
