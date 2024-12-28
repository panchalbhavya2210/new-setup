// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;
import adapter from '@sveltejs/adapter-vercel';

export default {
	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$routes: './src/routes'
		}
	}
};
