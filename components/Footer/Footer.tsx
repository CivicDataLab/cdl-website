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
		<footer className="flex items-center justify-between py-16 px-6 bg-black text-white">
			<div className="flex flex-col justify-between gap-16">
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
									className="bg-white p-2 rounded-full"
								>
									<Image src={icon} alt={name} width={20} height={20} />
								</a>
							))}
						</div>
						<span className="text-xl">/civicdatalab</span>
					</div>
				</div>

				<div className="flex gap-2 font-medium">
					<span>License</span>
					<span>|</span>
					<span>Site map</span>
				</div>
			</div>
			<a href="/">
				<Image
					src="/logo_dark.png"
					width={125}
					height={160}
					className="object-contain"
					alt="civicdatalab logo"
				/>
			</a>
		</footer>
	)
}
