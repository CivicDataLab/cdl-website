'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
	{
		name: 'Home',
		href: '/',
		color: 'bg-light-blue',
	},
	{
		name: 'Work',
		href: '/work',
		color: 'bg-light-green',
	},
	{
		name: 'About',
		href: '/about',
		color: 'bg-light-blue',
	},
	{
		name: 'Event',
		href: '/event',
		color: 'bg-light-green',
	},
	{
		name: 'Resources',
		href: '/resources',
		color: 'bg-light-blue',
	},
	{
		name: 'Collaborate',
		href: '/collaborate',
		color: 'bg-light-green',
	},
]

export const Navbar = () => {
	const pathname = usePathname()

	return (
		<nav className="flex items-center justify-end pt-1 px-6">
			<a href="/" className="bg-on-bg rounded-full p-6 absolute -top-3 -left-2">
				<Image
					src="/logo.png"
					width={70}
					height={76}
					style={{
						width: '70px',
						height: '76px',
					}}
					className="object-contain"
					alt="civicdatalab logo"
				/>
			</a>
			<ul className="flex justify-between space-x-3 mt-3 font-medium">
				{links.map((link) => (
					<Item
						key={link.name}
						href={link.href}
						color={link.color}
						active={pathname.split('/')[1] === link.href.split('/')[1]}
					>
						{link.name}
					</Item>
				))}
			</ul>
		</nav>
	)
}

const Item = ({
	children,
	href,
	color,
	active = false,
}: {
	children: React.ReactNode
	href: string
	active?: boolean
	color: string
}) => {
	return (
		<li>
			<a
				href={href}
				className={cn(
					'block px-4 py-2 font-heading font-semibold rounded-t-md',
					active && color
				)}
			>
				{children}
			</a>
		</li>
	)
}
