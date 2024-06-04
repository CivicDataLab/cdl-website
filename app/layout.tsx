import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import type { Metadata } from 'next'
import { Mukta, Montserrat } from 'next/font/google'
import './globals.css'

export const mukta = Mukta({
	weight: ['400', '500'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-mukta',
})

export const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
})

export const metadata: Metadata = {
	title: 'CivicDataLab',
	description:
		'CivicDataLab is a research and innovation lab that focuses on data, design, and technology for public good.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${mukta.variable} ${montserrat.variable}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
