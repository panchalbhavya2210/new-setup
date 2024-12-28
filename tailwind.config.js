/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			'white-opaque': 'rgba(255, 255, 255, 0.2)',
			'white-hover': 'rgba(255, 255, 255, 0.1)',
			'primary-color': '#FD4F4F',
			'light-color': '#fff'
		}
	},

	plugins: []
};
