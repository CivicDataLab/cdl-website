import Image from 'next/image'

export const Navbar = () => {
	return (
		<nav className="flex items-center justify-end pt-1 px-6 container">
			<div className="bg-white rounded-full p-6 absolute -top-3 -left-2">
				<Image
					src="/logo.png"
					width={70}
					height={90}
					className="object-contain"
					alt="civicdatalab logo"
				/>
			</div>
			<ul className="flex justify-between space-x-3 mt-3 font-medium">
				<Item className="bg-[#E4F3FF]">Home</Item>
				<Item>Work</Item>
				<Item>About</Item>
				<Item>Event</Item>
				<Item>Resources</Item>
				<Item>Collaborate</Item>
			</ul>
		</nav>
	)
}

const Item = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	return <li className={'px-4 py-2 ' + className}>{children}</li>
}
