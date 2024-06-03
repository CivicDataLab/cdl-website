import Image from 'next/image'

export const Footer = () => {
	return (
		<footer className="flex items-center justify-between py-16 px-6 bg-black text-white">
			<div className="flex flex-col justify-between gap-16">
				<div className="flex flex-col gap-1 font-medium">
					<span className="text-lg">info@civicdatalab.in</span>
					<span className="">/civicdatalab</span>
				</div>

				<div className="flex gap-2 font-medium">
					<span>License</span>
					<span>|</span>
					<span>Site map</span>
				</div>
			</div>
			<Image
				src="/logo_dark.png"
				width={125}
				height={160}
				className="object-contain"
				alt="civicdatalab logo"
			/>
		</footer>
	)
}
