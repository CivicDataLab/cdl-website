import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import type { Metadata } from 'next'
import { Mukta } from 'next/font/google'
import './globals.css'

const mukta = Mukta({ weight: '400', subsets: ['latin'] })

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
			<body className={mukta.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
