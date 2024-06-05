import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'light-blue': 'var(--light-blue)',
				'light-green': 'var(--light-green)',
				'dark-grey': 'var(--dark-grey)',
				'dark-blue': 'var(--dark-blue)',
				highlight: 'var(--highlight)',
				text: 'var(--text)',
				bg: 'var(--bg)',
				'on-bg': 'var(--text-on-bg)',
				dark: 'var(--bg-dark)',
				data: 'var(--data)',
				tech: 'var(--tech)',
				design: 'var(--design)',
				'social-science': 'var(--social-science)',
			},
			fontFamily: {
				body: ['var(--font-mukta)'],
				heading: ['var(--font-montserrat)'],
			},
		},
		container: {
			center: true,
			padding: '16px',
			screens: {
				'2xl': '1216px',
			},
		},
	},
	plugins: [],
}
export default config
