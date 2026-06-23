import type { PageServerLoad } from './$types';



export const load: PageServerLoad = async () => {
	// load all images from gallery folder
	const imageModules: Record<string, never> = import.meta.glob<true, string, never>(
		'/src/lib/assets/gallery/*.{jpg,png,webp}',
		{ query: {enhanced: true}, eager: true }
	);
	//const images = Object.entries(imageModules).map(([path, module]) => ({
	//	path,
	//	module
	//}));
	return {
		imageModules
	};
}
