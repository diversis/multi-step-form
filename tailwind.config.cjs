/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', 'sans-serif'],
			serif: ['Ubuntu', 'serif']
		},
		screens: {
			xs: '375px',

			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px'
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				'marine-blue': 'hsl(213, 96%, 18%)',
				'purplish-blue': 'hsl(243, 100%, 62%)',
				'pastel-blue': 'hsl(228, 100%, 84%)',
				'light-blue': 'hsl(206, 94%, 87%)',
				'strawberry-red': 'hsl(354, 84%, 57%)',
				'cool-gray': 'hsl(231, 11%, 63%)',
				'light-gray': 'hsl(229, 24%, 87%)',
				magnolia: 'hsl(217, 100%, 97%)',
				alabaster: 'hsl(231, 100%, 99%)',
				white: 'hsl(0, 0%, 100%)'
			},
			transitionTimingFunction: {
				button: 'cubic-bezier(0.23, 0.13, 0.42, 0.23)'
			},
			fontSize: {
				'4xl': ['2.441rem', '3.1773rem'],
				'5xl': ['3.052rem', '3.9676rem']
			},
			height: {
				'bg-anim': 'calc(100% - 2rem)'
			},
			width: {
				'bg-anim': 'calc(100% - 2rem)'
			},
			gridTemplateRows: {
				'form-mobile': '8rem 1fr'
			}
		}
	},
	plugins: []
};
