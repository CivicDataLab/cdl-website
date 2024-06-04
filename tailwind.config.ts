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
				'light-grey': 'var(--light-grey)',
				'dark-blue': 'var(--dark-blue)',
				highlight: 'var(--highlight)',
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
