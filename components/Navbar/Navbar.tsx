'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Work',
		href: '/work',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Event',
		href: '/event',
	},
	{
		name: 'Resources',
		href: '/resources',
	},
	{
		name: 'Collaborate',
		href: '/collaborate',
	},
]

export const Navbar = () => {
	const pathname = usePathname()

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
				{links.map((link) => (
					<Item
						key={link.name}
						href={link.href}
						active={pathname === link.href}
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
	active = false,
}: {
	children: React.ReactNode
	href: string
	active?: boolean
}) => {
	return (
		<li>
			<a
				href={href}
				className={cn('block px-4 py-2', active && 'bg-[#E4F3FF]')}
			>
				{children}
			</a>
		</li>
	)
}
